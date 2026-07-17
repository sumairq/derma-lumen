import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, CalendarCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RatingStars } from "@/components/ui/RatingStars";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-[color:var(--color-bg)] pb-20 pt-12 sm:pt-16 lg:pt-20 lg:pb-32">
      {/* Concentric arcs echoing the arch of the hero image */}
      <svg
        aria-hidden
        className="pointer-events-none absolute -right-44 -top-44 hidden lg:block"
        width="760"
        height="760"
        viewBox="0 0 760 760"
        fill="none"
      >
        <circle cx="380" cy="380" r="180" stroke="var(--color-accent)" strokeOpacity="0.07" strokeWidth="1.5" />
        <circle cx="380" cy="380" r="264" stroke="var(--color-accent)" strokeOpacity="0.055" strokeWidth="1.5" />
        <circle cx="380" cy="380" r="348" stroke="var(--color-gold)" strokeOpacity="0.12" strokeWidth="1" />
      </svg>

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div>
            <div className="fade-in-up mb-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-surface)]/80 px-4 py-1.5 text-xs font-medium text-[color:var(--color-ink-2)] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[color:var(--color-success)]" />
              Board-certified dermatology · Austin, TX
            </div>
            <h1 className="fade-in-up delay-100 text-balance text-display-2xl font-medium text-[color:var(--color-ink)]">
              Expert dermatology,{" "}
              <span className="italic text-[color:var(--color-accent)]">
                beautifully
              </span>{" "}
              delivered.
            </h1>
            <p className="fade-in-up delay-200 mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)] sm:text-xl">
              From clear skin to lifelong skin health. Personalized medical, surgical, and cosmetic dermatology — in a calm, modern Austin clinic where every visit feels considered.
            </p>
            <div className="fade-in-up delay-300 mt-9 flex flex-wrap items-center gap-3">
              <Button href={routes.book} size="lg" arrow>
                Book a Consultation
              </Button>
              <Button href={`tel:${clinic.phoneE164}`} variant="secondary" size="lg" external>
                <Phone className="size-4" aria-hidden />
                <span>{clinic.phone}</span>
              </Button>
            </div>
            {/* Availability proof for mobile, where the floating card is hidden */}
            <p className="fade-in-up delay-300 mt-5 flex items-center gap-2 text-sm text-[color:var(--color-ink-2)] sm:hidden">
              <CalendarCheck className="size-4 shrink-0 text-[color:var(--color-accent)]" aria-hidden />
              New patients typically seen within 2 weeks
            </p>

            <div className="fade-in-up delay-400 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[color:var(--color-line)] pt-7">
              <div className="flex items-center gap-2 text-sm">
                <RatingStars value={clinic.rating.value} count={clinic.rating.count} showValue />
              </div>
              <div className="flex items-center gap-2 text-sm text-[color:var(--color-ink-2)]">
                <ShieldCheck className="size-4 text-[color:var(--color-accent)]" aria-hidden />
                Board-certified MDs
              </div>
              <div className="flex items-center gap-2 text-sm text-[color:var(--color-ink-2)]">
                <Award className="size-4 text-[color:var(--color-accent)]" aria-hidden />
                10+ years serving Austin
              </div>
            </div>
          </div>

          <div className="fade-in delay-200 relative">
            {/* Offset gold keyline echoing the arch */}
            <div
              aria-hidden
              className="pointer-events-none absolute -inset-4 rounded-t-full rounded-b-[44px] border border-[color:var(--color-gold)]/45"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-t-full rounded-b-[36px] bg-[color:var(--color-surface-2)]">
              <Image
                src={images.heroPortrait.src}
                alt={images.heroPortrait.alt}
                fill
                priority
                unoptimized
                placeholder="blur"
                blurDataURL={images.heroPortrait.blurDataURL}
                sizes="(min-width: 1280px) 700px, (min-width: 1024px) 50vw, (min-width: 640px) 85vw, 100vw"
                className="scale-settle object-cover object-center"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-lift)] sm:block">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                  <CalendarCheck className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                    New patients
                  </p>
                  <p className="text-sm font-medium">Typically seen within 2 weeks</p>
                </div>
              </div>
              <Link
                href={routes.book}
                className="mt-4 flex items-center justify-between rounded-xl bg-[color:var(--color-accent)]/8 px-3 py-2 text-sm font-medium text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/12"
              >
                Reserve a time
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
            <div className="absolute top-24 -right-4 hidden rounded-2xl bg-[color:var(--color-ink)] p-4 text-[color:var(--color-bg)] shadow-[var(--shadow-lift)] sm:block">
              <p className="text-[10px] uppercase tracking-[0.18em] text-[color:var(--color-gold)]">
                Now offering
              </p>
              <p className="mt-1 text-sm font-medium">RF Microneedling</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
