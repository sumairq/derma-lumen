import Link from "next/link";
import { MapPin, Phone, Clock, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { clinic, fullAddress } from "@/content/clinic";

export function MapEmbed() {
  const directions = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    fullAddress()
  )}`;
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="Visit Us"
            title="Easy access in South Austin"
            description="Free parking in the attached garage and quick access from MoPac, I-35, and downtown."
            className="mb-8"
          />
          <ul className="space-y-5 text-sm">
            <li className="flex items-start gap-4">
              <span className="grid size-10 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <MapPin className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-[color:var(--color-ink)]">Address</p>
                <p className="text-[color:var(--color-ink-2)]">{fullAddress()}</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid size-10 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <Phone className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-[color:var(--color-ink)]">Phone</p>
                <a href={`tel:${clinic.phoneE164}`} className="text-[color:var(--color-ink-2)] hover:text-[color:var(--color-accent)]">
                  {clinic.phone}
                </a>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <span className="grid size-10 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                <Clock className="size-4" aria-hidden />
              </span>
              <div>
                <p className="font-medium text-[color:var(--color-ink)]">Hours</p>
                <div className="text-[color:var(--color-ink-2)]">
                  <p>Mon–Thu · 8:00am – 6:00pm</p>
                  <p>Friday · 8:00am – 5:00pm</p>
                  <p>Saturday · 9:00am – 1:00pm</p>
                </div>
              </div>
            </li>
          </ul>
          <Link
            href={directions}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
          >
            Get directions <ArrowUpRight className="size-3.5" aria-hidden />
          </Link>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface-2)]">
          <iframe
            title={`Map of ${clinic.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(
              fullAddress()
            )}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            width={800}
            height={600}
            className="size-full"
            aria-label={`Map showing ${clinic.name} location`}
          />
        </div>
      </div>
    </Container>
  );
}
