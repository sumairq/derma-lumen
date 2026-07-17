import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/Section";
import { RatingStars } from "@/components/ui/RatingStars";
import { Reveal } from "@/components/ui/Reveal";
import type { Testimonial } from "@/content/testimonials";
import { cn } from "@/lib/cn";

/**
 * Treatment-specific patient quotes for service pages. One quote gets a large
 * editorial pull-quote treatment; two or three sit side by side.
 */
export function ServiceTestimonials({
  items,
  serviceTitle,
}: {
  items: Testimonial[];
  serviceTitle: string;
}) {
  const single = items.length === 1;
  return (
    <Container>
      <div className={cn("mb-10 lg:mb-14", single && "text-center")}>
        <SectionEyebrow>Patient stories</SectionEyebrow>
        <h2 className="mt-4 text-balance font-display text-display-md font-medium">
          {serviceTitle}, in their words
        </h2>
      </div>

      {single ? (
        <Reveal className="mx-auto max-w-3xl text-center">
          <PullQuote t={items[0]} />
        </Reveal>
      ) : (
        <ul
          className={cn(
            "grid gap-5",
            items.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
          )}
        >
          {items.map((t, i) => (
            <Reveal as="li" key={t.name} delay={i * 100}>
              <figure className="flex h-full flex-col rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7">
                <span
                  aria-hidden
                  className="font-display text-5xl leading-none text-[color:var(--color-gold)]"
                >
                  &ldquo;
                </span>
                <blockquote className="mt-2 flex-1 text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)]">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-[color:var(--color-line)] pt-5">
                  <div>
                    <div className="font-medium text-[color:var(--color-ink)]">{t.name}</div>
                    <div className="text-xs text-[color:var(--color-muted)]">{t.detail}</div>
                  </div>
                  <RatingStars value={t.rating ?? 5} size={13} />
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      )}
    </Container>
  );
}

function PullQuote({ t }: { t: Testimonial }) {
  return (
    <figure>
      <span
        aria-hidden
        className="font-display text-7xl leading-none text-[color:var(--color-gold)]"
      >
        &ldquo;
      </span>
      <blockquote className="text-balance font-display text-2xl font-medium leading-snug tracking-tight text-[color:var(--color-ink)] sm:text-3xl">
        {t.quote}
      </blockquote>
      <figcaption className="mt-7 flex flex-col items-center gap-2">
        <RatingStars value={t.rating ?? 5} size={14} />
        <div className="text-sm">
          <span className="font-medium text-[color:var(--color-ink)]">{t.name}</span>
          <span className="text-[color:var(--color-muted)]"> · {t.detail}</span>
        </div>
      </figcaption>
    </figure>
  );
}
