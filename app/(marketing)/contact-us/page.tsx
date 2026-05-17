import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { MapEmbed } from "@/components/sections/MapEmbed";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { clinic, fullAddress } from "@/content/clinic";
import { Phone, Mail, MapPin } from "lucide-react";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Contact Lumen Dermatology — Book a Consultation",
  description:
    "Reach Lumen Dermatology in Austin, TX. Call (512) 555-0142 or book a consultation online — most new patient appointments are available within 2 weeks.",
  path: routes.contact,
});

export default function ContactPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Contact", path: routes.contact }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Contact", path: routes.contact, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Contact</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Let&apos;s get you on the calendar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              Tell us a little about what brings you in and we&apos;ll respond within one business day. For urgent issues, please call us directly.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
            <ContactForm />
            <aside className="space-y-6">
              <ContactCard
                icon={Phone}
                title="Call us"
                primary={clinic.phone}
                href={`tel:${clinic.phoneE164}`}
                detail="Mon–Fri 8am–6pm CT"
              />
              <ContactCard
                icon={Mail}
                title="Email us"
                primary={clinic.email}
                href={`mailto:${clinic.email}`}
                detail="We respond within 1 business day"
              />
              <ContactCard
                icon={MapPin}
                title="Visit us"
                primary={fullAddress()}
                detail="Free parking in attached garage"
              />
            </aside>
          </div>
        </Container>
      </Section>

      <Section>
        <MapEmbed />
      </Section>
    </>
  );
}

function ContactCard({
  icon: Icon,
  title,
  primary,
  detail,
  href,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  primary: string;
  detail: string;
  href?: string;
}) {
  const body = (
    <div className="flex items-start gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
        <Icon className="size-5" aria-hidden />
      </span>
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
          {title}
        </p>
        <p className="mt-1 font-medium text-[color:var(--color-ink)]">{primary}</p>
        <p className="text-sm text-[color:var(--color-ink-2)]">{detail}</p>
      </div>
    </div>
  );
  return href ? (
    <a
      href={href}
      className="block rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6 transition-all hover:border-[color:var(--color-line-strong)]"
    >
      {body}
    </a>
  ) : (
    <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6">{body}</div>
  );
}
