import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { generalFaqs } from "@/content/faqs";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions about visiting Lumen Dermatology in Austin — appointments, insurance, what to expect, and how care works.",
  path: routes.faq,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "FAQs", path: routes.faq }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "FAQs", path: routes.faq, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>FAQs</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              Questions, answered.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              If you don&apos;t see your question below, please reach out — our team is glad to help.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <FAQ items={generalFaqs} heading="General questions" />
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
