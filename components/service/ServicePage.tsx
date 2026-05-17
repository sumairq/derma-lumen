import Link from "next/link";
import Image from "next/image";
import { Check, Clock, Calendar, Sparkles, DollarSign, ArrowUpRight } from "lucide-react";
import type { Service } from "@/content/services/_types";
import {
  getRelatedServices,
  SERVICE_CATEGORIES,
} from "@/content/services";
import { getServiceImage } from "@/lib/images";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow, SectionHeading } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Accordion } from "@/components/ui/Accordion";
import { CTA } from "@/components/sections/CTA";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { TestimonialMarquee } from "@/components/sections/TestimonialMarquee";
import { JsonLd } from "@/components/schema/JsonLd";
import {
  breadcrumbSchema,
  faqSchema,
  medicalProcedureSchema,
} from "@/lib/schema";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";

export function ServicePage({ service }: { service: Service }) {
  const related = getRelatedServices(service.slug);
  const categoryMeta = SERVICE_CATEGORIES[service.category];
  const heroImage = getServiceImage(service.slug);
  const breadcrumbs = [
    { name: "Services", path: routes.services },
    { name: categoryMeta.title, path: `${routes.services}#${service.category}` },
    { name: service.title, path: routes.service(service.slug), current: true },
  ];

  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema(breadcrumbs.map((b) => ({ name: b.name, path: b.path }))),
          medicalProcedureSchema({
            name: service.h1,
            description: service.shortDescription,
            path: routes.service(service.slug),
          }),
          faqSchema(service.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[color:var(--color-bg)] pt-10 pb-16 sm:pt-12 lg:pt-16 lg:pb-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-40 -top-32 size-[560px] rounded-full bg-[color:var(--color-surface-2)] blur-3xl"
        />
        <Container className="relative">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
            <div>
              <SectionEyebrow>{service.hero.eyebrow}</SectionEyebrow>
              <h1 className="mt-5 text-balance font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
                {service.h1}
              </h1>
              <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)] sm:text-xl">
                {service.shortDescription}
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button href={routes.contact} size="lg" arrow>
                  Book a Consultation
                </Button>
                <Button href={`tel:${clinic.phoneE164}`} variant="secondary" size="lg" external>
                  {clinic.phone}
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[color:var(--color-line)] pt-6 text-sm">
                <Trust label="Board-certified MDs" />
                <Trust label="10+ years experience" />
                <Trust label="Austin, TX" />
              </div>
              <aside className="mt-8 grid gap-3 sm:grid-cols-2">
                <ExpectationItem icon={Clock} label="Visit duration" value={service.expectations.duration} />
                <ExpectationItem icon={Sparkles} label="Downtime" value={service.expectations.downtime} />
                <ExpectationItem icon={Calendar} label="Results" value={service.expectations.results} />
                {service.expectations.priceRange ? (
                  <ExpectationItem icon={DollarSign} label="Pricing" value={service.expectations.priceRange} />
                ) : null}
              </aside>
            </div>
            <figure className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-[color:var(--color-surface-2)] lg:sticky lg:top-28">
              <Image
                src={heroImage.src}
                alt={`${service.title} — ${heroImage.alt}`}
                fill
                priority
                unoptimized
                sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, 100vw"
                className="object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/35 via-transparent to-transparent"
              />
              <figcaption className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl bg-[color:var(--color-surface)]/95 px-4 py-3 backdrop-blur shadow-[var(--shadow-soft)]">
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
                  {categoryMeta.title}
                </span>
                <span className="text-xs text-[color:var(--color-muted)]">{clinic.address.city}, {clinic.address.region}</span>
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Overview */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
            <div>
              <SectionEyebrow>About this treatment</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Understanding {service.title.toLowerCase()}
              </h2>
              <div className="mt-6 space-y-5 text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)]">
                {service.intro.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </div>
            <div>
              <Card tone="surface" className="p-7 bg-[color:var(--color-bg)]">
                <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  Concerns we treat
                </h3>
                <ul className="mt-5 space-y-3">
                  {service.concerns.map((c) => (
                    <li key={c} className="flex items-start gap-3 text-[color:var(--color-ink)]">
                      <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                        <Check className="size-3" aria-hidden />
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section>
        <Container>
          <SectionHeading
            eyebrow="The Lumen process"
            title="What to expect, step by step"
            description="Honest, unhurried, and centered on your goals."
          />
          <ProcessSteps steps={service.process} />
        </Container>
      </Section>

      {/* Benefits */}
      <Section tone="ink">
        <Container>
          <SectionHeading
            tone="light"
            eyebrow="Why patients choose Lumen"
            title="The difference is in the details"
            description="The same procedure delivered with deeper expertise produces a meaningfully different result."
          />
          <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b, i) => (
              <li
                key={i}
                className="rounded-2xl border border-[color:var(--color-bg)]/12 bg-[color:var(--color-bg)]/5 p-6"
              >
                <span className="font-display text-3xl text-[color:var(--color-gold)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg text-[color:var(--color-bg)]">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[color:var(--color-bg)]/75">
                  {b.description}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section>
        <TestimonialMarquee />
      </Section>

      {/* FAQs */}
      <Section tone="surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <div>
              <SectionEyebrow>FAQs</SectionEyebrow>
              <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight sm:text-5xl">
                Your questions, answered
              </h2>
              <p className="mt-5 text-[color:var(--color-ink-2)]">
                Still curious? Our team is happy to answer anything not covered here on a no-pressure call.
              </p>
              <div className="mt-8">
                <Button href={routes.contact} arrow>
                  Talk to our team
                </Button>
              </div>
            </div>
            <Accordion items={service.faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </Container>
      </Section>

      {/* Related */}
      {related.length ? (
        <Section>
          <Container>
            <SectionHeading
              eyebrow="Related treatments"
              title="Often considered together"
            />
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={routes.service(r.slug)}
                    className="group flex h-full flex-col rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
                  >
                    <div className="flex items-center justify-between">
                      <Badge tone="accent">{SERVICE_CATEGORIES[r.category].title}</Badge>
                      <ArrowUpRight className="size-4 text-[color:var(--color-line-strong)] transition-all group-hover:text-[color:var(--color-accent)]" aria-hidden />
                    </div>
                    <h3 className="mt-5 font-display text-xl font-medium tracking-tight">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">
                      {r.shortDescription}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {/* CTA */}
      <Section>
        <CTA />
      </Section>
    </>
  );
}

function Trust({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2 text-[color:var(--color-ink-2)]">
      <span className="size-1 rounded-full bg-[color:var(--color-accent)]" />
      {label}
    </span>
  );
}

function ExpectationItem({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)]">
        <Icon className="size-3.5" aria-hidden />
        {label}
      </div>
      <p className="mt-2 text-base font-medium text-[color:var(--color-ink)]">{value}</p>
    </div>
  );
}
