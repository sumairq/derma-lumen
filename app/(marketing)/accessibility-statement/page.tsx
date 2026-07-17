import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Accessibility Statement",
  description: "Lumen Dermatology is committed to digital accessibility.",
  path: routes.accessibility,
  noIndex: true,
});

export default function AccessibilityPage() {
  return (
    <>
      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Accessibility", path: routes.accessibility, current: true }]} />
          <div className="mt-8 max-w-3xl">
            <SectionEyebrow>Accessibility</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-xl font-medium">
              Accessibility Statement
            </h1>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <Container>
          <article className="prose-clinical max-w-3xl space-y-6 text-lg leading-relaxed">
            <p>
              Lumen Dermatology is committed to ensuring digital accessibility for people of all abilities. We are continually improving the user experience for everyone and applying relevant accessibility standards.
            </p>
            <h2 className="font-display text-2xl font-medium">Our commitment</h2>
            <p>
              Our website targets WCAG 2.2 Level AA. We use semantic HTML, sufficient color contrast, keyboard-navigable interactions, and screen-reader-friendly patterns throughout.
            </p>
            <h2 className="font-display text-2xl font-medium">Need help?</h2>
            <p>
              If you encounter any accessibility barriers on our site or need assistance accessing care, please contact us at {clinic.email} or {clinic.phone}. We&apos;ll respond within one business day.
            </p>
            <h2 className="font-display text-2xl font-medium">Ongoing improvement</h2>
            <p>
              Accessibility is an ongoing effort. We welcome feedback and incorporate it into regular site updates.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
