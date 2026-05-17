"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { Check, Loader2 } from "lucide-react";
import { submitContact, type FormState } from "@/app/actions/forms";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

const initial: FormState = { ok: false };

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initial);

  if (state.ok) {
    return (
      <div className="rounded-3xl border border-[color:var(--color-success)]/30 bg-[color:var(--color-success)]/8 p-10 text-center">
        <div className="mx-auto inline-flex size-14 items-center justify-center rounded-full bg-[color:var(--color-success)] text-[color:var(--color-bg)]">
          <Check className="size-6" aria-hidden />
        </div>
        <h3 className="mt-5 font-display text-3xl font-medium">Message received</h3>
        <p className="mt-2 text-[color:var(--color-ink-2)]">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 sm:p-10"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" required error={state.fieldErrors?.name} />
        <Field label="Email" name="email" type="email" required error={state.fieldErrors?.email} />
        <Field label="Phone" name="phone" type="tel" error={state.fieldErrors?.phone} />
        <Field label="Reason for visit" name="reason" placeholder="Acne, Botox, full skin exam…" />
        <Field
          label="How can we help?"
          name="message"
          required
          textarea
          rows={5}
          error={state.fieldErrors?.message}
          className="sm:col-span-2"
        />
      </div>

      {/* Honeypot */}
      <div className="absolute -left-[10000px]" aria-hidden>
        <label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label>
      </div>

      <div className="mt-7 flex flex-wrap items-center gap-4">
        <SubmitButton />
        <p className="text-xs text-[color:var(--color-muted)]">
          By submitting you agree to our privacy policy. We&apos;ll never share your info.
        </p>
      </div>
      {state.message && !state.ok ? (
        <p className="mt-5 text-sm text-[color:var(--color-danger)]">{state.message}</p>
      ) : null}
    </form>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" size="lg" arrow={!pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" aria-hidden /> Sending…
        </>
      ) : (
        "Send Message"
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
  const id = `f-${name}`;
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
          className={cn(shared, "min-h-[140px] resize-y", error ? "border-[color:var(--color-danger)]" : "border-[color:var(--color-line-strong)]")}
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
