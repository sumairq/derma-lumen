import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema, physicianSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { team } from "@/content/team";
import { routes } from "@/lib/routes";
import { ProviderPortrait } from "@/components/sections/DoctorCard";

export const dynamic = "force-static";

export const metadata = buildMetadata({
  title: "Meet the Team — Dermatologists & Providers",
  description:
    "Meet the board-certified dermatologists and providers at Lumen Dermatology in Austin, TX. Trained at top U.S. programs and committed to patient-first care.",
  path: routes.team,
});

export default function TeamPage() {
  return (
    <>
      <JsonLd
        schema={[
          breadcrumbSchema([{ name: "Meet the Team", path: routes.team }]),
          ...team.map((p) =>
            physicianSchema({
              name: p.name,
              jobTitle: p.title,
              specialty: p.specialties.join(", "),
              bio: p.bio.join(" "),
            })
          ),
        ]}
      />

      <section className="pt-10 pb-20 sm:pt-12 lg:pt-16 lg:pb-32">
        <Container>
          <Breadcrumbs items={[{ name: "Meet the Team", path: routes.team, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Our Team</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Board-certified expertise. Real human care.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              Our providers are trained at top U.S. dermatology programs and share a singular philosophy: take time, listen first, recommend honestly.
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="!py-0">
        <Container>
          <div className="space-y-20 py-20 lg:py-28">
            {team.map((p, i) => (
              <article
                key={p.slug}
                className={`grid items-center gap-12 lg:gap-20 ${
                  i % 2 === 0 ? "lg:grid-cols-[1fr_1.2fr]" : "lg:grid-cols-[1.2fr_1fr]"
                }`}
              >
                <figure
                  className={`relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-[color:var(--color-surface-2)] ${
                    i % 2 === 1 ? "lg:order-last" : ""
                  }`}
                >
                  <ProviderPortrait
                    index={i}
                    alt={`${p.name}, ${p.title} at Lumen Dermatology`}
                  />
                </figure>
                <div>
                  <Badge tone="accent">{p.credentials}</Badge>
                  <h2 className="mt-4 font-display text-4xl font-medium tracking-tight sm:text-5xl">
                    {p.name}
                  </h2>
                  <p className="mt-2 text-lg text-[color:var(--color-accent)]">{p.title}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {p.specialties.map((s) => (
                      <span key={s} className="rounded-full bg-[color:var(--color-bg)] px-3 py-1 text-xs text-[color:var(--color-ink-2)]">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)]">
                    {p.bio.map((para, idx) => (
                      <p key={idx}>{para}</p>
                    ))}
                  </div>
                  <div className="mt-6">
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                      Education & Training
                    </h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-[color:var(--color-ink-2)]">
                      {p.education.map((e) => (
                        <li key={e} className="flex gap-3">
                          <span className="text-[color:var(--color-line-strong)]">—</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-7">
                    <Button href={routes.contact} arrow>
                      Book with {p.name.split(" ")[0]}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <CTA heading="Find the right provider for you" />
      </Section>
    </>
  );
}
