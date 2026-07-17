import Link from "next/link";
import { ArrowUpRight, Info } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
  getPriceTag,
} from "@/content/services";
import type { Service } from "@/content/services/_types";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Treatment Pricing — Transparent 'From' Pricing",
  description:
    "Transparent treatment pricing at Lumen Dermatology in Austin, TX. From-pricing for Botox, fillers, peels, and lasers — medical visits typically covered by insurance.",
  path: routes.pricing,
});

// Pricing is primarily a cosmetic-shopper question — lead with cosmetic.
const CATEGORY_ORDER = ["cosmetic", "medical", "skin-cancer"] as const;

export default function PricingPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Pricing", path: routes.pricing }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Pricing", path: routes.pricing, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Pricing</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              Honest pricing, before you ever walk in.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              No mystery quotes. Cosmetic treatments are listed with from-pricing
              below; medical and surgical visits are typically billed through your
              insurance.
            </p>
          </div>
        </Container>
      </section>

      {CATEGORY_ORDER.map((cat, idx) => {
        const meta = SERVICE_CATEGORIES[cat];
        const items = getServicesByCategory(cat);
        return (
          <Section
            key={cat}
            tone={idx % 2 === 0 ? "surface" : "default"}
            className="!py-16 sm:!py-20"
          >
            <Container>
              <SectionHeading
                eyebrow={`0${idx + 1} · ${meta.title}`}
                title={cat === "cosmetic" ? "The treatment menu" : meta.title}
                description={meta.description}
              />
              <ul className="divide-y divide-[color:var(--color-line)]">
                {items.map((s, i) => (
                  <Reveal as="li" key={s.slug} delay={Math.min(i, 5) * 60}>
                    <MenuRow service={s} />
                  </Reveal>
                ))}
              </ul>
            </Container>
          </Section>
        );
      })}

      <Section className="!py-16 sm:!py-20">
        <Container>
          <div className="rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8 sm:p-10">
            <div className="flex items-start gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <Info className="size-5" aria-hidden />
              </span>
              <div className="max-w-3xl">
                <h2 className="font-display text-2xl font-medium tracking-tight">
                  How our pricing works
                </h2>
                <ul className="mt-4 space-y-2 text-[color:var(--color-ink-2)]">
                  <li>
                    From-prices reflect typical starting points; your exact quote is
                    confirmed at your consultation, before any treatment.
                  </li>
                  <li>
                    Medical dermatology is usually covered by insurance — see{" "}
                    <Link href={routes.payment} className="font-medium text-[color:var(--color-accent)] underline underline-offset-2">
                      insurance &amp; payment options
                    </Link>
                    .
                  </li>
                  <li>
                    Cosmetic consultations are credited toward your first treatment
                    when you move forward.
                  </li>
                </ul>
                <div className="mt-6">
                  <Button href={routes.book} arrow>
                    Book a Consultation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="!pt-0">
        <CTA />
      </Section>
    </>
  );
}

function MenuRow({ service }: { service: Service }) {
  const price = getPriceTag(service);
  const { duration, downtime, sessions } = service.expectations;
  const meta = [duration, `Downtime: ${downtime.toLowerCase()}`, sessions]
    .filter(Boolean)
    .join(" · ");

  return (
    <Link href={routes.service(service.slug)} className="group block py-6">
      <div className="flex items-baseline gap-3">
        <span className="font-display text-xl font-medium tracking-tight transition-colors group-hover:text-[color:var(--color-accent)] sm:text-2xl">
          {service.title}
        </span>
        <span
          aria-hidden
          className="mx-1 flex-1 border-b border-dotted border-[color:var(--color-line-strong)]"
        />
        <span className="shrink-0 text-right font-medium text-[color:var(--color-accent)]">
          {price ?? "Consult"}
        </span>
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <p className="max-w-2xl text-sm text-[color:var(--color-ink-2)]">
          {service.shortDescription}
        </p>
        <span className="inline-flex items-center gap-1 text-xs text-[color:var(--color-muted)]">
          {meta}
          <ArrowUpRight
            className="ml-1 size-3.5 text-[color:var(--color-line-strong)] transition-colors group-hover:text-[color:var(--color-accent)]"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}
