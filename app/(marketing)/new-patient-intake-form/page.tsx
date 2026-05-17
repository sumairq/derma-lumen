import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { IntakeForm } from "@/components/forms/IntakeForm";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "New Patient Intake Form",
  description:
    "Complete your new patient intake form online before your visit to Lumen Dermatology in Austin. Quick, secure, and saves you time.",
  path: routes.intake,
  noIndex: true,
});

export default function IntakePage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "New Patients", path: routes.newPatients },
        { name: "Intake Form", path: routes.intake },
      ])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[
            { name: "New Patients", path: routes.newPatients },
            { name: "Intake Form", path: routes.intake, current: true },
          ]} />
          <div className="mt-8 max-w-3xl">
            <SectionEyebrow>Intake</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl">
              New patient intake form
            </h1>
            <p className="mt-6 text-lg text-[color:var(--color-ink-2)]">
              Take a few minutes to share your health background. This helps your dermatologist make the most of your visit.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="!pt-0">
        <Container>
          <div className="max-w-3xl">
            <IntakeForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
