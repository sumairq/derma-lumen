import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { Features } from "@/components/sections/Features";
import { FeaturedTreatments } from "@/components/sections/FeaturedTreatments";
import { DoctorIntro } from "@/components/sections/DoctorCard";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { BlogCardGrid } from "@/components/sections/BlogCardGrid";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/Container";
import { Section, SectionHeading } from "@/components/ui/Section";
import { getAllPosts } from "@/content/blog";
import { buildMetadata } from "@/lib/seo";
import { itemListSchema } from "@/lib/schema";
import { JsonLd } from "@/components/schema/JsonLd";
import { allServiceSlugs, getService } from "@/content/services";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Lumen Dermatology — Premier Dermatology in Austin, TX",
  description:
    "Board-certified medical, surgical, and cosmetic dermatology in Austin, TX. Personalized care for acne, skin cancer, Botox, lasers, and more.",
  path: "/",
});

const visitSteps = [
  { step: "01", title: "Reach out", description: "Book online or call. Our team will help you choose the right type of visit." },
  { step: "02", title: "Pre-visit", description: "Complete intake online so we're ready when you arrive — no waiting room paperwork." },
  { step: "03", title: "Your visit", description: "Unhurried time with your dermatologist. We listen first, then build a plan." },
  { step: "04", title: "Care, ongoing", description: "Easy follow-up access via phone, telehealth, or in person." },
];

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <>
      <JsonLd
        schema={itemListSchema(
          allServiceSlugs
            .map((slug) => getService(slug))
            .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s))
            .map((s) => ({ name: s.title, path: routes.service(s.slug) }))
        )}
      />
      <Hero />
      <TrustBar />
      <Section>
        <ServicesGrid />
      </Section>
      <Section tone="surface">
        <Features />
      </Section>
      <Section>
        <FeaturedTreatments />
      </Section>
      <Section tone="surface">
        <DoctorIntro />
      </Section>
      <Section>
        <TestimonialMarquee />
      </Section>
      <Section tone="ink">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="How a visit works"
            title="Calm, considered, clear from the first call"
            description="We've built every step around how care should feel — not how billing tends to make it feel."
          />
          <ProcessSteps steps={visitSteps} tone="ink" />
        </Container>
      </Section>
      <Section>
        <BlogCardGrid posts={posts} />
      </Section>
      <Section tone="surface">
        <MapEmbed />
      </Section>
      <Section>
        <CTA />
      </Section>
    </>
  );
}
