import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "How Lumen Dermatology collects, uses, and protects your information.",
  path: routes.privacy,
  noIndex: true,
});

export default function PrivacyPage() {
  return (
    <>
      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Privacy Policy", path: routes.privacy, current: true }]} />
          <div className="mt-8 max-w-3xl">
            <SectionEyebrow>Legal</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-xl font-medium">
              Privacy Policy
            </h1>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">Last updated: January 1, 2026</p>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <Container>
          <article className="prose-clinical max-w-3xl space-y-6 text-lg leading-relaxed">
            <p>
              {clinic.legalName} (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) respects your privacy. This Privacy Policy explains how we collect, use, and protect information when you visit our website or use our services.
            </p>
            <h2 className="font-display text-2xl font-medium">Information we collect</h2>
            <p>
              We may collect personal information you provide through contact forms, intake forms, or appointment requests, including your name, contact details, date of birth, and medical history. We also collect basic technical information such as IP address, browser, and pages visited.
            </p>
            <h2 className="font-display text-2xl font-medium">How we use information</h2>
            <p>
              We use collected information to deliver care, respond to inquiries, schedule appointments, and improve our services. Protected Health Information is handled in accordance with HIPAA and our Notice of Privacy Practices.
            </p>
            <h2 className="font-display text-2xl font-medium">Sharing</h2>
            <p>
              We never sell personal information. We share information with service providers (e.g., scheduling, EHR vendors) only as needed to deliver services, under written confidentiality agreements.
            </p>
            <h2 className="font-display text-2xl font-medium">Your rights</h2>
            <p>
              You may request access to, correction of, or deletion of your personal information at any time. To exercise your rights, contact us at {clinic.email}.
            </p>
            <h2 className="font-display text-2xl font-medium">Contact</h2>
            <p>
              Questions about this policy? Email {clinic.email} or call {clinic.phone}.
            </p>
          </article>
        </Container>
      </Section>
    </>
  );
}
