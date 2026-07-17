import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { getService, getPriceTag } from "@/content/services";
import { routes } from "@/lib/routes";

const FEATURED = [
  "acne-treatment",
  "botox",
  "skin-cancer-screening",
  "microneedling",
  "laser-skin-resurfacing",
  "dermal-fillers",
];

export function FeaturedTreatments() {
  const items = FEATURED.map((slug) => getService(slug)).filter(
    (s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s)
  );

  return (
    <Container>
      <div className="mb-12 grid items-end gap-6 lg:grid-cols-[1fr_auto]">
        <SectionHeading
          eyebrow="Popular Treatments"
          title="Patient favorites, expertly delivered"
          description="A starting point. Every plan is personalized after we listen."
          className="mb-0"
        />
        <Link
          href={routes.services}
          className="inline-flex h-11 items-center text-sm font-medium text-[color:var(--color-accent)] hover:underline"
        >
          See all treatments →
        </Link>
      </div>
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((s, i) => {
          const priceTag = getPriceTag(s);
          return (
            <Reveal as="li" key={s.slug} delay={(i % 3) * 100}>
              <Link
                href={routes.service(s.slug)}
                className="group flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                    0{i + 1}
                  </span>
                  <ArrowUpRight className="size-4 text-[color:var(--color-line-strong)] transition-all group-hover:text-[color:var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium tracking-tight">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[color:var(--color-ink-2)]">
                  {s.shortDescription}
                </p>
                {priceTag ? (
                  <div className="mt-5 flex items-center justify-between border-t border-[color:var(--color-line)] pt-4">
                    <span className="text-sm font-medium text-[color:var(--color-accent)]">
                      {priceTag}
                    </span>
                    <span className="text-xs text-[color:var(--color-muted)]">
                      {s.expectations.duration}
                    </span>
                  </div>
                ) : null}
              </Link>
            </Reveal>
          );
        })}
      </ul>
    </Container>
  );
}
