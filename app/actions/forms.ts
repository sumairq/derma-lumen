"use server";

import { z } from "zod";
import { clinic } from "@/content/clinic";

export type FormState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

/**
 * Deliver a form submission via Resend (https://resend.com). Env-gated:
 * without RESEND_API_KEY the submission is logged instead, so local dev and
 * preview deploys keep working with no setup.
 *
 * - RESEND_API_KEY   — required to actually send
 * - FORM_TO_EMAIL    — recipient (defaults to the clinic address)
 * - FORM_FROM_EMAIL  — verified sender (defaults to Resend's onboarding sender)
 */
async function deliver({
  subject,
  fields,
  replyTo,
}: {
  subject: string;
  fields: Record<string, string | undefined>;
  replyTo?: string;
}): Promise<boolean> {
  const lines = Object.entries(fields)
    .filter(([, v]) => v)
    .map(([k, v]) => `${k}: ${v}`);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log(`[form submission — RESEND_API_KEY not set] ${subject}\n${lines.join("\n")}`);
    return true;
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.FORM_FROM_EMAIL ?? "Lumen Website <onboarding@resend.dev>",
        to: [process.env.FORM_TO_EMAIL ?? clinic.email],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        text: lines.join("\n"),
      }),
    });
    if (!res.ok) {
      console.error("[form delivery failed]", res.status, await res.text());
      return false;
    }
    return true;
  } catch (err) {
    console.error("[form delivery failed]", err);
    return false;
  }
}

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name").max(120),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().max(30).optional().or(z.literal("")),
  reason: z.string().max(80).optional().or(z.literal("")),
  message: z.string().min(10, "Please share a little more detail").max(2000),
  // Honeypot
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function submitContact(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone") ?? "",
    reason: formData.get("reason") ?? "",
    message: formData.get("message"),
    website: formData.get("website") ?? "",
  });

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0] ?? "");
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    return { ok: false, message: "Please correct the errors below.", fieldErrors };
  }

  // Honeypot triggered — silently succeed
  if (parsed.data.website) return { ok: true, message: "Thank you." };

  const sent = await deliver({
    subject: `New consultation request — ${parsed.data.name}`,
    replyTo: parsed.data.email,
    fields: {
      Name: parsed.data.name,
      Email: parsed.data.email,
      Phone: parsed.data.phone,
      Reason: parsed.data.reason,
      Message: parsed.data.message,
    },
  });

  if (!sent) {
    return {
      ok: false,
      message: `Something went wrong sending your message. Please call us at ${clinic.phone}.`,
    };
  }

  return {
    ok: true,
    message: "Thanks — we'll be in touch within one business day.",
  };
}

const intakeSchema = z.object({
  firstName: z.string().min(1).max(80),
  lastName: z.string().min(1).max(80),
  dob: z.string().min(1, "Please enter your date of birth"),
  email: z.string().email(),
  phone: z.string().min(7).max(30),
  insurance: z.string().max(120).optional().or(z.literal("")),
  reason: z.string().min(1, "Please tell us what brings you in"),
  history: z.string().max(4000).optional().or(z.literal("")),
  medications: z.string().max(2000).optional().or(z.literal("")),
  allergies: z.string().max(2000).optional().or(z.literal("")),
  consent: z.literal("on", { message: "Consent is required" }),
  website: z.string().max(0).optional().or(z.literal("")),
});

export async function submitIntake(
  _prev: FormState,
  formData: FormData
): Promise<FormState> {
  const data: Record<string, FormDataEntryValue | null> = {};
  for (const key of [
    "firstName",
    "lastName",
    "dob",
    "email",
    "phone",
    "insurance",
    "reason",
    "history",
    "medications",
    "allergies",
    "consent",
    "website",
  ]) {
    data[key] = formData.get(key);
  }
  const parsed = intakeSchema.safeParse(data);

  if (!parsed.success) {
    const fieldErrors: Record<string, string> = {};
    for (const issue of parsed.error.issues) {
      const k = String(issue.path[0] ?? "");
      if (!fieldErrors[k]) fieldErrors[k] = issue.message;
    }
    return { ok: false, message: "Please complete required fields.", fieldErrors };
  }

  if (parsed.data.website) return { ok: true };

  // NOTE: intake submissions contain PHI. Plain email is a placeholder
  // transport — before a real launch, route this to a HIPAA-appropriate
  // destination (EMR intake API, or a provider with a signed BAA).
  const sent = await deliver({
    subject: `New patient intake — ${parsed.data.firstName} ${parsed.data.lastName}`,
    replyTo: parsed.data.email,
    fields: {
      Name: `${parsed.data.firstName} ${parsed.data.lastName}`,
      "Date of birth": parsed.data.dob,
      Email: parsed.data.email,
      Phone: parsed.data.phone,
      Insurance: parsed.data.insurance,
      "Reason for visit": parsed.data.reason,
      "Medical history": parsed.data.history,
      Medications: parsed.data.medications,
      Allergies: parsed.data.allergies,
    },
  });

  if (!sent) {
    return {
      ok: false,
      message: `Something went wrong submitting your form. Please call us at ${clinic.phone}.`,
    };
  }

  return {
    ok: true,
    message: "Your intake form has been submitted. We'll see you at your visit.",
  };
}
