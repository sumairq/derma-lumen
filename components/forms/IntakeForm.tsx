"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Check, Loader2 } from "lucide-react";
import { submitIntake, type FormState } from "@/app/actions/forms";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const initial: FormState = { ok: false };

export function IntakeForm() {
  const [state, formAction] = useActionState(submitIntake, initial);

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-[color:var(--color-success)]/30 bg-[color:var(--color-success)]/8 p-10 text-center">
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-[color:var(--color-success)] text-[color:var(--color-bg)]">
          <Check className="size-6" aria-hidden />
        </div>
        <h3 className="mt-5 font-display text-3xl font-medium">Intake submitted</h3>
        <p className="mt-2 text-[color:var(--color-ink-2)]">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="space-y-10 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 sm:p-10"
      noValidate
    >
      <Group title="About you">
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="First name" name="firstName" required error={state.fieldErrors?.firstName} />
          <Field label="Last name" name="lastName" required error={state.fieldErrors?.lastName} />
          <Field label="Date of birth" name="dob" type="date" required error={state.fieldErrors?.dob} />
          <Field label="Email" name="email" type="email" required error={state.fieldErrors?.email} />
          <Field label="Phone" name="phone" type="tel" required error={state.fieldErrors?.phone} />
          <Field label="Insurance carrier (optional)" name="insurance" />
        </div>
      </Group>

      <Group title="Why are you visiting?">
        <div className="grid gap-5">
          <Field
            label="What brings you to Lumen?"
            name="reason"
            placeholder="A specific concern, an annual exam, a referral, etc."
            required
            error={state.fieldErrors?.reason}
          />
          <Field
            label="Brief medical history (optional)"
            name="history"
            textarea
            rows={4}
            placeholder="Diagnoses, prior dermatologic treatments, family skin history…"
          />
          <Field
            label="Current medications (optional)"
            name="medications"
            textarea
            rows={3}
            placeholder="Include prescriptions, OTC, supplements"
          />
          <Field
            label="Allergies (optional)"
            name="allergies"
            textarea
            rows={2}
            placeholder="Medications, latex, foods, contact allergens"
          />
        </div>
      </Group>

      <Group title="Consent">
        <label className="flex items-start gap-3 text-sm text-[color:var(--color-ink-2)]">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 size-4 rounded border-[color:var(--color-line-strong)] text-[color:var(--color-accent)] focus:ring-[color:var(--color-accent)]"
          />
          <span>
            I consent to Lumen Dermatology storing this intake information for purposes of my care, and I confirm the information above is accurate to the best of my knowledge.
          </span>
        </label>
        {state.fieldErrors?.consent ? (
          <p className="mt-2 text-xs text-[color:var(--color-danger)]">{state.fieldErrors.consent}</p>
        ) : null}
      </Group>

      <div className="absolute -left-[10000px]" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <SubmitButton />
        <p className="text-xs text-[color:var(--color-muted)]">
          We&apos;ll review your intake before your visit. Required fields are marked with *.
        </p>
      </div>
      {state.message && !state.ok ? (
        <p className="text-sm text-[color:var(--color-danger)]">{state.message}</p>
      ) : null}
    </form>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
        {title}
      </h3>
      {children}
    </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" arrow={!pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden /> Submitting…
        </>
      ) : (
        "Submit Intake Form"
      )}
    </Button>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  textarea,
  rows,
  placeholder,
  error,
  className,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
  rows?: number;
  placeholder?: string;
  error?: string;
  className?: string;
}) {
  const id = `i-${name}`;
  const shared =
    "block w-full rounded-xl border bg-[color:var(--color-bg)] px-4 py-3 text-[15px] text-[color:var(--color-ink)] placeholder:text-[color:var(--color-muted)] focus:outline-none focus:border-[color:var(--color-accent)] focus:ring-2 focus:ring-[color:var(--color-accent)]/15 transition-all";
  return (
    <div className={cn(className)}>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-[color:var(--color-ink)]">
        {label} {required ? <span className="text-[color:var(--color-accent)]">*</span> : null}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-err` : undefined}
          className={cn(shared, "min-h-[120px] resize-y", error ? "border-[color:var(--color-danger)]" : "border-[color:var(--color-line-strong)]")}
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-err` : undefined}
          className={cn(shared, error ? "border-[color:var(--color-danger)]" : "border-[color:var(--color-line-strong)]")}
        />
      )}
      {error ? (
        <p id={`${id}-err`} className="mt-1.5 text-xs text-[color:var(--color-danger)]">
          {error}
        </p>
      ) : null}
    </div>
  );
}
