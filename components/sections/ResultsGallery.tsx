import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { Reveal } from "@/components/ui/Reveal";
import type { ResultCase } from "@/content/results";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function ResultsGallery({ cases }: { cases: ResultCase[] }) {
  const single = cases.length === 1;
  return (
    <Container>
      <div className="grid items-end gap-6 lg:grid-cols-[1fr_auto]">
        <SectionHeading
          eyebrow="Results"
          title="Before & after"
          description="Drag the slider to compare. Every plan is individualized — results vary from patient to patient."
          className="lg:mb-16"
        />
        <Link
          href={routes.results}
          className="mb-12 inline-flex h-11 items-center text-sm font-medium text-[color:var(--color-accent)] hover:underline lg:mb-16"
        >
          View the full gallery →
        </Link>
      </div>
      <div className={cn("grid gap-8", !single && "md:grid-cols-2")}>
        {cases.map((c, i) => (
          <Reveal
            as="figure"
            key={c.title}
            delay={i * 100}
            className={cn(single && "mx-auto w-full max-w-3xl")}
          >
            <BeforeAfterSlider before={c.before} after={c.after} label={c.title} />
            <figcaption className="mt-4 flex flex-wrap items-baseline justify-between gap-2 px-1">
              <span className="font-display text-lg font-medium tracking-tight">
                {c.title}
              </span>
              <span className="text-sm text-[color:var(--color-muted)]">{c.detail}</span>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
