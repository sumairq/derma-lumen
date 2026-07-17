import { Phone, Clock, CalendarCheck, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { clinic, fullAddress } from "@/content/clinic";

export const dynamic = "force-static";

/**
 * Scheduler embed URL (Calendly, Acuity, or an EMR patient-portal link),
 * baked in at build time. Unset → the page falls back to the consultation
 * request form, so the route works before a scheduler exists.
 */
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export const metadata = buildMetadata({
  title: "Book a Consultation — Lumen Dermatology",
  description:
    "Book a dermatology consultation at Lumen Dermatology in Austin, TX. Choose a time online — most new patient appointments are available within 2 weeks.",
  path: routes.book,
});

export default function BookPage() {
  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Book", path: routes.book }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Book", path: routes.book, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Book a consultation</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-2xl font-medium">
              Choose a time that suits you.
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              {BOOKING_URL
                ? "Pick an open slot below — it takes about a minute. Prefer to talk it through? Call us and we'll find the right visit type together."
                : "Tell us what brings you in and we'll confirm a time within one business day. Prefer to talk it through? Call us and we'll find the right visit type together."}
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="!pt-16 lg:!pt-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-16">
            {BOOKING_URL ? (
              <div className="overflow-hidden rounded-[28px] border border-[color:var(--color-line)] bg-[color:var(--color-bg)]">
                <iframe
                  src={BOOKING_URL}
                  title="Online appointment scheduling"
                  loading="lazy"
                  className="h-[860px] w-full"
                />
              </div>
            ) : (
              <ContactForm />
            )}

            <aside className="space-y-6">
              <InfoCard icon={Phone} title="Prefer to call?">
                <a
                  href={`tel:${clinic.phoneE164}`}
                  className="font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)]"
                >
                  {clinic.phone}
                </a>
                <p className="mt-1 text-sm text-[color:var(--color-ink-2)]">
                  Mon–Fri 8am–6pm CT · Sat 9am–1pm
                </p>
              </InfoCard>

              <InfoCard icon={CalendarCheck} title="What to expect">
                <ul className="space-y-2 text-sm text-[color:var(--color-ink-2)]">
                  <li>Most new patients are seen within 2 weeks</li>
                  <li>Plan 45–60 minutes for a first visit</li>
                  <li>Complete your intake online — no waiting-room paperwork</li>
                  <li>You&apos;ll leave with a written plan you understand</li>
                </ul>
              </InfoCard>

              <InfoCard icon={Clock} title="Cancellations">
                <p className="text-sm text-[color:var(--color-ink-2)]">
                  Life happens — we ask for 24 hours&apos; notice so we can offer
                  your slot to another patient.
                </p>
              </InfoCard>

              <InfoCard icon={MapPin} title="Where to find us">
                <p className="text-sm text-[color:var(--color-ink-2)]">{fullAddress()}</p>
                <p className="mt-1 text-sm text-[color:var(--color-ink-2)]">
                  Free parking in the attached garage.
                </p>
              </InfoCard>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}

function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6">
      <div className="flex items-center gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
          <Icon className="size-4" aria-hidden />
        </span>
        <h2 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-muted)]">
          {title}
        </h2>
      </div>
      <div className="mt-4">{children}</div>
    </div>
  );
}
