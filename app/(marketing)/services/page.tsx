import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CTA } from "@/components/sections/CTA";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
import { JsonLd } from "@/components/schema/JsonLd";
import { itemListSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
  allServiceSlugs,
  getService,
} from "@/content/services";
import { routes } from "@/lib/routes";
import { images, type ImageAsset } from "@/lib/images";

const CATEGORY_IMAGE: Record<keyof typeof SERVICE_CATEGORIES, ImageAsset> = {
  medical: images.skinExam,
  cosmetic: images.injection,
  "skin-cancer": images.glowingSkin,
};

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Dermatology Services in Austin, TX",
  description:
    "Comprehensive medical, surgical, and cosmetic dermatology services in Austin — from acne and eczema to Botox, lasers, and skin cancer care.",
  path: routes.services,
});

export default function ServicesHubPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Services", path: routes.services }]),
          itemListSchema(
            allServiceSlugs
              .map((s) => getService(s))
              .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s))
              .map((s) => ({ name: s.title, path: routes.service(s.slug) }))
          ),
        ]}
      />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Services", path: routes.services, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Services</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              Comprehensive dermatology for every stage of life.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              From chronic skin conditions to refined cosmetic treatment, our team is built to be your dermatology home — for the long term.
            </p>
          </div>
        </Container>
      </section>

      {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map(
        (cat, idx) => {
          const meta = SERVICE_CATEGORIES[cat];
          const items = getServicesByCategory(cat);
          const banner = CATEGORY_IMAGE[cat];
          return (
            <Section
              key={cat}
              id={cat}
              tone={idx % 2 === 0 ? "surface" : "default"}
              className="!py-20 sm:!py-24"
            >
              <Container>
                <div className="mb-12 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                  <SectionHeading
                    eyebrow={`0${idx + 1} · Category`}
                    title={meta.title}
                    description={meta.description}
                    className="mb-0"
                  />
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[28px] bg-[color:var(--color-surface-2)]">
                    <Image
                      src={banner.src}
                      alt={`${meta.title} at Lumen Dermatology — ${banner.alt}`}
                      fill
                      quality={100}
                      placeholder="blur"
                      blurDataURL={banner.blurDataURL}
                      sizes="(min-width: 1280px) 600px, (min-width: 1024px) 48vw, 100vw"
                      className="object-cover object-center"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-tr from-[color:var(--color-accent-3)]/40 via-transparent to-transparent"
                    />
                  </div>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={routes.service(s.slug)}
                        className="group flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-display text-xl font-medium tracking-tight">
                            {s.title}
                          </h3>
                          <ArrowUpRight className="size-4 shrink-0 text-[color:var(--color-line-strong)] transition-all group-hover:text-[color:var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                        </div>
                        <p className="mt-3 text-sm leading-relaxed text-[color:var(--color-ink-2)]">
                          {s.shortDescription}
                        </p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Container>
            </Section>
          );
        }
      )}

      <Section>
        <TestimonialMarquee />
      </Section>
      <Section>
        <CTA />
      </Section>
    </>
  );
}
