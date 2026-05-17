"use server";

import { z } from "zod";

export type FormState = {
  ok: boolean;
  message?: string;
  fieldErrors?: Record<string, string>;
};

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

  // Stubbed — swap with Resend / Formspree / Web3Forms when ready
  console.log("[contact form submission]", parsed.data);

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

  console.log("[intake form submission]", parsed.data);

  return {
    ok: true,
    message: "Your intake form has been submitted. We'll see you at your visit.",
  };
}
