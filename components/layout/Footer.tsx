import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/brand/Logo";
import { clinic, fullAddress } from "@/content/clinic";
import { routes } from "@/lib/routes";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[color:var(--color-accent-3)] text-[color:var(--color-bg)]/85">
      <Container className="py-20 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.4fr] lg:gap-16">
          <div className="space-y-6">
            <Link href="/" aria-label={`${clinic.name} home`}>
              <Logo size="lg" variant="light" />
            </Link>
            <p className="text-sm leading-relaxed text-[color:var(--color-bg)]/70 max-w-sm">
              {clinic.description}
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-[color:var(--color-gold)]" aria-hidden />
                <span>{fullAddress()}</span>
              </div>
              <a href={`tel:${clinic.phoneE164}`} className="flex items-center gap-3 hover:text-[color:var(--color-bg)]">
                <Phone className="size-4 shrink-0 text-[color:var(--color-gold)]" aria-hidden />
                {clinic.phone}
              </a>
              <a href={`mailto:${clinic.email}`} className="flex items-center gap-3 hover:text-[color:var(--color-bg)]">
                <Mail className="size-4 shrink-0 text-[color:var(--color-gold)]" aria-hidden />
                {clinic.email}
              </a>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-[color:var(--color-gold)]" aria-hidden />
                <div>
                  <div>Mon–Thu · 8:00am – 6:00pm</div>
                  <div>Friday · 8:00am – 5:00pm</div>
                  <div>Saturday · 9:00am – 1:00pm</div>
                </div>
              </div>
            </div>
            <div className="flex gap-3 pt-2">
              <a
                href={clinic.socials.instagram}
                aria-label="Instagram"
                className="inline-flex size-9 items-center justify-center rounded-full border border-[color:var(--color-bg)]/20 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
              >
                <Instagram className="size-4" aria-hidden />
              </a>
              <a
                href={clinic.socials.facebook}
                aria-label="Facebook"
                className="inline-flex size-9 items-center justify-center rounded-full border border-[color:var(--color-bg)]/20 hover:border-[color:var(--color-gold)] hover:text-[color:var(--color-gold)]"
              >
                <Facebook className="size-4" aria-hidden />
              </a>
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map(
              (cat) => (
                <div key={cat}>
                  <h3 className="font-display text-base text-[color:var(--color-bg)] mb-4">
                    {SERVICE_CATEGORIES[cat].title}
                  </h3>
                  <ul className="space-y-2 text-sm">
                    {getServicesByCategory(cat).map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={routes.service(s.slug)}
                          className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            )}
            <div>
              <h3 className="font-display text-base text-[color:var(--color-bg)] mb-4">
                Clinic
              </h3>
              <ul className="space-y-2 text-sm">
                <li><Link href={routes.book} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Book a Consultation</Link></li>
                <li><Link href={routes.results} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Before &amp; After</Link></li>
                <li><Link href={routes.pricing} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Pricing</Link></li>
                <li><Link href={routes.about} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">About Us</Link></li>
                <li><Link href={routes.team} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Meet the Team</Link></li>
                <li><Link href={routes.newPatients} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">New Patients</Link></li>
                <li><Link href={routes.intake} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Intake Form</Link></li>
                <li><Link href={routes.payment} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Insurance & Payment</Link></li>
                <li><Link href={routes.faq} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">FAQs</Link></li>
                <li><Link href={routes.blog} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Blog</Link></li>
                <li><Link href={routes.contact} className="text-[color:var(--color-bg)]/65 hover:text-[color:var(--color-gold)]">Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--color-bg)]/15 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-xs text-[color:var(--color-bg)]/55">
          <p>
            © {year} {clinic.legalName}. All rights reserved. Information on this site is not medical advice.
          </p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link href={routes.privacy} className="hover:text-[color:var(--color-bg)]">Privacy</Link>
            <Link href={routes.terms} className="hover:text-[color:var(--color-bg)]">Terms</Link>
            <Link href={routes.accessibility} className="hover:text-[color:var(--color-bg)]">Accessibility</Link>
            <Link href="/sitemap.xml" className="hover:text-[color:var(--color-bg)]">Sitemap</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
