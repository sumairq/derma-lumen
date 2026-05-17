import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Phone, ShieldCheck, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { RatingStars } from "@/components/ui/RatingStars";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";
import { images } from "@/lib/images";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[color:var(--color-bg)] pb-20 pt-12 sm:pt-16 lg:pt-20 lg:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-40 size-[640px] rounded-full bg-[color:var(--color-surface-2)]/80 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 bottom-0 size-[480px] rounded-full bg-[color:var(--color-accent)]/8 blur-3xl"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="fade-in-up">
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[color:var(--color-line-strong)] bg-[color:var(--color-surface)]/80 px-4 py-1.5 text-xs font-medium text-[color:var(--color-ink-2)] backdrop-blur">
              <span className="size-1.5 rounded-full bg-[color:var(--color-success)]" />
              Board-certified dermatology · Austin, TX
            </div>
            <h1 className="text-balance text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-[color:var(--color-ink)] sm:text-6xl lg:text-7xl">
              Expert dermatology,{" "}
              <span className="italic text-[color:var(--color-accent)]">
                beautifully
              </span>{" "}
              delivered.
            </h1>
            <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)] sm:text-xl">
              From clear skin to lifelong skin health. Personalized medical, surgical, and cosmetic dermatology — in a calm, modern Austin clinic where every visit feels considered.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button href={routes.contact} size="lg" arrow>
                Book a Consultation
              </Button>
              <Button href={`tel:${clinic.phoneE164}`} variant="secondary" size="lg" external>
                <Phone className="size-4" aria-hidden />
                <span>{clinic.phone}</span>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[color:var(--color-line)] pt-7">
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
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36px] bg-[color:var(--color-surface-2)]">
              <Image
                src={images.hero.src}
                alt={images.hero.alt}
                fill
                priority
                unoptimized
                sizes="(min-width: 1280px) 700px, (min-width: 1024px) 50vw, (min-width: 640px) 85vw, 100vw"
                className="object-cover object-[55%_30%]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-64 rounded-2xl bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-lift)] sm:block">
              <div className="flex items-center gap-3">
                <span className="grid size-10 place-items-center rounded-full bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]">
                  <Sparkles className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-[color:var(--color-muted)]">
                    Next available
                  </p>
                  <p className="text-sm font-medium">This week · 4 slots</p>
                </div>
              </div>
              <Link
                href={routes.contact}
                className="mt-4 flex items-center justify-between rounded-xl bg-[color:var(--color-accent)]/8 px-3 py-2 text-sm font-medium text-[color:var(--color-accent)] hover:bg-[color:var(--color-accent)]/12"
              >
                Reserve a time
                <ArrowRight className="size-3.5" aria-hidden />
              </Link>
            </div>
            <div className="absolute -top-5 right-4 hidden rounded-2xl bg-[color:var(--color-ink)] p-4 text-[color:var(--color-bg)] shadow-[var(--shadow-lift)] sm:block">
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
