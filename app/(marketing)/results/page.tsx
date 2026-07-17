import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ResultsBrowser } from "@/components/sections/ResultsBrowser";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, imageGallerySchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { results } from "@/content/results";
import { getService } from "@/content/services";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Before & After Results — Real Treatment Outcomes",
  description:
    "Browse before-and-after results from Lumen Dermatology in Austin, TX — acne treatment, Botox, chemical peels, laser resurfacing, microneedling, and more.",
  path: routes.results,
});

export default function ResultsPage() {
  const items = results.map((result) => ({
    result,
    serviceTitle: getService(result.service)?.title ?? result.title,
  }));

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Results", path: routes.results }]),
          imageGallerySchema({
            name: "Before & After Gallery — Lumen Dermatology",
            description:
              "Before-and-after treatment results from Lumen Dermatology in Austin, TX.",
            path: routes.results,
            images: results.map((r) => ({
              url: r.after.src,
              caption: `${r.title} — ${r.detail}`,
            })),
          }),
        ]}
      />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Results", path: routes.results, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Results</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              The work, shown honestly.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              Drag any slider to compare. These cases reflect real treatment plans —
              and because every face and every skin is different, your plan and your
              results will be your own.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="!pt-16 lg:!pt-20">
        <Container>
          <ResultsBrowser items={items} />
          <p className="mt-10 text-sm text-[color:var(--color-muted)]">
            Results vary by individual. Photos are representative of treatment
            categories; your dermatologist will review expected outcomes for your
            skin at your consultation.
          </p>
        </Container>
      </Section>

      <Section>
        <CTA
          heading="Curious what's possible for your skin?"
          description="Bring your goals to a consultation. You'll leave with an honest assessment and a clear plan — never a hard sell."
        />
      </Section>
    </>
  );
}
