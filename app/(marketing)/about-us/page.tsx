import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/sections/CTA";
import { TrustBar } from "@/components/sections/TrustBar";
import { Features } from "@/components/sections/Features";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { images } from "@/lib/images";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "About Lumen Dermatology — Our Story & Philosophy",
  description:
    "Lumen Dermatology is a board-certified clinic in Austin built around unhurried, evidence-based care. Learn about our founding, philosophy, and accreditations.",
  path: routes.about,
});

const values = [
  {
    title: "Patient time is sacred",
    body: "We see fewer patients per day than is typical so each visit gets the time it deserves. No rushing. No assembly-line care.",
  },
  {
    title: "Honesty over upsell",
    body: "We'll tell you when a treatment isn't right for you — and what is. Our recommendations are aligned with your interests, not our calendar.",
  },
  {
    title: "Evidence over fashion",
    body: "Every protocol is grounded in current dermatologic evidence. We're not chasing trends; we're delivering medicine.",
  },
  {
    title: "Aesthetics in service of you",
    body: "When we work cosmetically, the goal is always to look like a more rested version of yourself — never to look done.",
  },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "About Us", path: routes.about }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "About Us", path: routes.about, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>About</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              Dermatology, the way it was meant to feel.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              Lumen Dermatology was founded on a simple belief: world-class dermatologic care doesn&apos;t need to feel rushed, transactional, or cold. We built a clinic to prove it.
            </p>
          </div>
        </Container>

        <Container className="mt-12 lg:mt-16">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[32px] bg-[color:var(--color-surface-2)]">
            <Image
              src={images.hero.src}
              alt="Lumen Dermatology providers caring for patients in a calm, modern clinical setting"
              fill
              priority
              unoptimized
              placeholder="blur"
              blurDataURL={images.hero.blurDataURL}
              sizes="(min-width: 1280px) 1280px, 100vw"
              className="object-cover object-[55%_30%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent"
            />
          </div>
        </Container>
      </section>

      <TrustBar />

      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionEyebrow>Our story</SectionEyebrow>
              <h2 className="mt-4 font-display text-display-md font-medium">
                Built around the kind of care we&apos;d want.
              </h2>
            </div>
            <div className="space-y-5 text-lg leading-relaxed text-[color:var(--color-ink-2)]">
              <p>
                Lumen was founded by Dr. Ana Cordoba in 2014 after a decade in academic dermatology. She wanted to design a practice where time with patients was the rule rather than the exception — and where the clinical experience matched the seriousness of the medicine.
              </p>
              <p>
                Today, our team includes board-certified dermatologists, dermatology-trained physician assistants, and licensed aesthetic professionals. We see patients of all ages for the full range of skin, hair, and nail concerns.
              </p>
              <p>
                We&apos;re proud to serve Austin and the surrounding Central Texas community — and we don&apos;t take a single referral for granted.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <SectionHeading
            eyebrow="What we believe"
            title="Four values, every day"
            description="They sound simple. They&apos;re harder to live by than to write down."
            align="center"
          />
          <ul className="grid gap-5 md:grid-cols-2">
            {values.map((v) => (
              <li
                key={v.title}
                className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7"
              >
                <h3 className="font-display text-xl font-medium tracking-tight">{v.title}</h3>
                <p className="mt-2 text-[color:var(--color-ink-2)]">{v.body}</p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section tone="surface">
        <Features />
      </Section>

      <Section>
        <TestimonialMarquee />
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
