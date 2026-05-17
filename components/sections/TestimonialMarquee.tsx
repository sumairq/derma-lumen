import { Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { testimonials } from "@/content/testimonials";
import { clinic } from "@/content/clinic";

export function TestimonialMarquee() {
  // Duplicate for seamless loop
  const row1 = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2 = [...testimonials.slice(4), ...testimonials.slice(4)];

  return (
    <div>
      <Container>
        <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
          <SectionHeading
            eyebrow="Patients"
            title="Care that earns trust"
            description="A look at what our patients say about their experience."
            className="mb-0"
          />
          <div className="flex items-center gap-4">
            <RatingStars value={clinic.rating.value} showValue count={clinic.rating.count} />
          </div>
        </div>
      </Container>

      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[color:var(--color-bg)] to-transparent"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[color:var(--color-bg)] to-transparent"
        />
        <div className="space-y-4">
          <div className="marquee gap-4">
            {row1.map((t, i) => (
              <TestimonialCard key={`r1-${i}`} t={t} />
            ))}
          </div>
          <div className="marquee gap-4" style={{ animationDirection: "reverse", animationDuration: "55s" }}>
            {row2.map((t, i) => (
              <TestimonialCard key={`r2-${i}`} t={t} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({
  t,
}: {
  t: { quote: string; name: string; detail: string; rating?: number };
}) {
  return (
    <figure className="w-[340px] shrink-0 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6">
      <Quote className="size-6 text-[color:var(--color-accent)]/30" aria-hidden />
      <blockquote className="mt-3 text-[15px] leading-relaxed text-[color:var(--color-ink-2)]">
        &ldquo;{t.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 flex items-center justify-between border-t border-[color:var(--color-line)] pt-4 text-sm">
        <div>
          <div className="font-medium text-[color:var(--color-ink)]">{t.name}</div>
          <div className="text-xs text-[color:var(--color-muted)]">{t.detail}</div>
        </div>
        <RatingStars value={t.rating ?? 5} size={12} />
      </figcaption>
    </figure>
  );
}
