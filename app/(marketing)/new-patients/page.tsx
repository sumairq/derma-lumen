import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { generalFaqs } from "@/content/faqs";
import { routes } from "@/lib/routes";
import { images } from "@/lib/images";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "New Patients — What to Expect",
  description:
    "Becoming a new patient at Lumen Dermatology in Austin: how to schedule, what to bring, insurance, and what your first visit will look like.",
  path: routes.newPatients,
});

const steps = [
  { step: "01", title: "Schedule", description: "Book online or call. Tell us briefly what brings you in and we'll match you with the right type of visit." },
  { step: "02", title: "Complete intake", description: "Fill out your intake form online before your visit. No clipboard hassle." },
  { step: "03", title: "Verify insurance", description: "We'll verify your benefits in advance so there are no surprises at the desk." },
  { step: "04", title: "Your visit", description: "Plan for 45–60 minutes for new visits. You'll leave with a written plan you understand." },
];

const bringList = [
  "Insurance card and photo ID",
  "List of current medications, including OTC and supplements",
  "Photos of past skin issues if relevant",
  "A list of questions — write them down in advance",
];

export default function NewPatientsPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "New Patients", path: routes.newPatients }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "New Patients", path: routes.newPatients, current: true }]} />
          <div className="mt-8 grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <SectionEyebrow>New Patients</SectionEyebrow>
              <h1 className="mt-5 font-display text-display-2xl font-medium">
                We&apos;re glad you&apos;re considering Lumen.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
                Here&apos;s exactly what to expect from booking your first visit through walking out with a clear plan.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={routes.book} size="lg" arrow>
                  Book a Consultation
                </Button>
                <Button href={routes.intake} size="lg" variant="secondary">
                  Complete Intake Form
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-[color:var(--color-surface-2)]">
              <Image
                src={images.glowingSkin.src}
                alt={images.glowingSkin.alt}
                fill
                priority
                unoptimized
                placeholder="blur"
                blurDataURL={images.glowingSkin.blurDataURL}
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent"
              />
            </div>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <Container>
          <SectionHeading
            eyebrow="Your visit"
            title="A clear, calm, four-step path"
            description="Nothing about your visit should feel uncertain — we&apos;ve thought through every step."
          />
          <ProcessSteps steps={steps} />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionEyebrow>Come prepared</SectionEyebrow>
              <h2 className="mt-4 font-display text-display-md font-medium">
                What to bring
              </h2>
              <p className="mt-5 text-lg text-[color:var(--color-ink-2)]">
                A few small steps make your visit smoother and ensure we have what we need to give you the best care from minute one.
              </p>
            </div>
            <ul className="space-y-3">
              {bringList.map((item, i) => (
                <li
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5"
                >
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)]/10 font-medium text-[color:var(--color-accent)]">
                    {i + 1}
                  </span>
                  <span className="pt-1.5">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      <Section tone="surface">
        <Container>
          <div className="grid items-center gap-8 lg:grid-cols-2">
            <div>
              <SectionEyebrow>Insurance & payment</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium tracking-tight">
                We accept most major plans.
              </h2>
              <p className="mt-4 text-[color:var(--color-ink-2)]">
                Medical dermatology visits are typically insurance-covered. Cosmetic services are self-pay with financing available.
              </p>
              <div className="mt-6">
                <Link
                  href={routes.payment}
                  className="inline-flex h-11 items-center text-sm font-medium text-[color:var(--color-accent)] hover:underline"
                >
                  Insurance & payment options →
                </Link>
              </div>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                Plans accepted
              </h3>
              <ul className="mt-4 grid gap-2 text-sm text-[color:var(--color-ink-2)] sm:grid-cols-2">
                {["Aetna", "Blue Cross Blue Shield", "Cigna", "Humana", "Medicare", "UnitedHealthcare", "Tricare", "Self-pay"].map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-[color:var(--color-accent)]" aria-hidden />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <FAQ items={generalFaqs.slice(0, 6)} heading="Common questions from new patients" />
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
