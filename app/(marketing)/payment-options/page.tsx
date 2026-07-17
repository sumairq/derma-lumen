import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/sections/CTA";
import { FAQ } from "@/components/sections/FAQ";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Insurance & Payment Options",
  description:
    "Insurance carriers accepted at Lumen Dermatology, self-pay rates, financing through CareCredit, and transparent pricing for cosmetic services.",
  path: routes.payment,
});

const carriers = [
  "Aetna",
  "Anthem",
  "Blue Cross Blue Shield (BCBS)",
  "Cigna",
  "Humana",
  "Medicare",
  "Tricare",
  "UnitedHealthcare",
];

const paymentOptions = [
  { title: "Insurance", body: "Medical dermatology visits are typically covered. We verify benefits in advance and bill your insurance directly." },
  { title: "Self-pay", body: "Transparent self-pay rates for patients without insurance — discounted from billed rates and payable at time of service." },
  { title: "CareCredit", body: "CareCredit financing available for cosmetic procedures, with 0% promotional plans for qualifying patients." },
  { title: "In-house payment plans", body: "For treatment packages over $1,500, we offer split-payment plans (typically 3 payments) with no interest." },
  { title: "HSA / FSA", body: "Medical dermatology services are HSA/FSA eligible. Some cosmetic services may also qualify with documentation." },
  { title: "Gift cards", body: "Lumen gift cards are available in any denomination — perfect for the skincare enthusiast in your life." },
];

const faqs = [
  { q: "Do you take Medicaid?", a: "We do not currently accept Medicaid plans. We do offer self-pay rates and have a community access program for cases of financial hardship — please ask." },
  { q: "Will my insurance cover cosmetic procedures?", a: "No — insurance covers medical (health-related) dermatology only. Cosmetic procedures like Botox, fillers, and laser are always self-pay." },
  { q: "What if my visit ends up being part-medical, part-cosmetic?", a: "We'll bill the medical portion to insurance and you'll pay self-pay rates for the cosmetic portion. We always discuss pricing before treatment." },
  { q: "Do I need to pay at the time of service?", a: "Yes — copays and self-pay charges are due at the visit. We accept all major credit cards, HSA/FSA cards, and CareCredit." },
];

export default function PaymentPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Insurance & Payment", path: routes.payment }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Insurance & Payment", path: routes.payment, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Insurance & Payment</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              Clear, fair pricing — and we&apos;ll tell you up front.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              We accept most major insurance plans for medical dermatology and offer transparent self-pay rates and financing for cosmetic services.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Insurance"
            title="Plans we accept"
            description="If you don&apos;t see your carrier, give us a call — we&apos;re often able to bill out-of-network."
          />
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {carriers.map((c) => (
              <li
                key={c}
                className="rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] px-5 py-4 text-center font-medium text-[color:var(--color-ink-2)]"
              >
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="Payment options"
            title="Ways to pay"
            description="We work hard to make great dermatologic care accessible."
          />
          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {paymentOptions.map((o) => (
              <li
                key={o.title}
                className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6"
              >
                <h3 className="font-display text-xl font-medium tracking-tight">{o.title}</h3>
                <p className="mt-2 text-[color:var(--color-ink-2)]">{o.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface">
        <FAQ items={faqs} heading="Payment & insurance FAQs" />
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
