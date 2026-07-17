import { ShieldCheck, Sparkles, HeartHandshake, Cpu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Board-certified MDs",
    body: "Every patient sees a dermatologist trained at top U.S. programs — never just a tech.",
  },
  {
    icon: Cpu,
    title: "Advanced technology",
    body: "Multiple laser platforms, RF microneedling, and modern biologic access.",
  },
  {
    icon: Sparkles,
    title: "Results, not trends",
    body: "We treat for outcomes that last, with the restraint that defines great cosmetic work.",
  },
  {
    icon: HeartHandshake,
    title: "Patient-first care",
    body: "Unhurried visits, honest assessments, and care plans you can actually understand.",
  },
];

export function Features() {
  return (
    <Container>
      <SectionHeading
        eyebrow="Why Lumen"
        title="Dermatology done thoughtfully"
        description="Premium clinical care without the premium-clinic posturing. Honest medicine, modern aesthetics."
        align="center"
      />
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <Reveal
            as="li"
            key={f.title}
            delay={i * 75}
            className="group rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-[color:var(--color-accent)]/8 text-[color:var(--color-accent)] transition-colors group-hover:bg-[color:var(--color-accent)] group-hover:text-[color:var(--color-bg)]">
              <f.icon className="size-5" aria-hidden />
            </span>
            <h3 className="mt-5 font-display text-xl font-medium tracking-tight">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-ink-2)]">{f.body}</p>
          </Reveal>
        ))}
      </ul>
    </Container>
  );
}
