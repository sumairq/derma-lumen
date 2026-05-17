import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Terms of Service",
  description: "Terms governing use of the Lumen Dermatology website.",
  path: routes.terms,
  noIndex: true,
});

export default function TermsPage() {
  return (
    <>
      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Terms of Service", path: routes.terms, current: true }]} />
          <div className="mt-8 max-w-3xl">
            <SectionEyebrow>Legal</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
              Terms of Service
            </h1>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">Last updated: January 1, 2026</p>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <Container>
          <article className="prose-clinical max-w-3xl space-y-6 text-lg leading-relaxed">
            <p>
              By accessing this site you agree to these terms. Information here is educational and does not constitute medical advice or create a doctor-patient relationship.
            </p>
            <h2 className="font-display text-2xl font-medium">Not medical advice</h2>
            <p>
              Always consult a board-certified clinician before starting or changing any medical treatment. Content on this site reflects general dermatologic information and is not a substitute for individualized care.
            </p>
            <h2 className="font-display text-2xl font-medium">Intellectual property</h2>
            <p>
              All content on this site is the property of {clinic.legalName}. You may share with attribution; commercial use without written permission is prohibited.
            </p>
            <h2 className="font-display text-2xl font-medium">Limitation of liability</h2>
            <p>
              We make no warranties regarding completeness or accuracy of site content. We disclaim liability for any decisions made based on site content.
            </p>
            <h2 className="font-display text-2xl font-medium">Contact</h2>
            <p>Questions? {clinic.email}</p>
          </article>
        </Container>
      </Section>
    </>
  );
}
