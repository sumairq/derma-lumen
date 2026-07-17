import { cn } from "@/lib/cn";
import { Reveal } from "@/components/ui/Reveal";

type Step = { step: string; title: string; description: string };

export function ProcessSteps({
  steps,
  tone = "default",
}: {
  steps: Step[];
  tone?: "default" | "ink";
}) {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <Reveal
          as="li"
          key={step.step}
          delay={i * 75}
          className={cn(
            "relative rounded-2xl border p-6",
            tone === "ink"
              ? "border-[color:var(--color-bg)]/15 bg-[color:var(--color-bg)]/5"
              : "border-[color:var(--color-line)] bg-[color:var(--color-surface)]"
          )}
        >
          <span
            className={cn(
              "inline-block font-display text-3xl font-medium",
              tone === "ink" ? "text-[color:var(--color-gold)]" : "text-[color:var(--color-accent)]"
            )}
          >
            {step.step}
          </span>
          <h3 className={cn("mt-3 text-lg font-medium", tone === "ink" ? "text-[color:var(--color-bg)]" : "text-[color:var(--color-ink)]")}>
            {step.title}
          </h3>
          <p
            className={cn(
              "mt-2 text-sm leading-relaxed",
              tone === "ink" ? "text-[color:var(--color-bg)]/85" : "text-[color:var(--color-ink-2)]"
            )}
          >
            {step.description}
          </p>
        </Reveal>
      ))}
    </ol>
  );
}
