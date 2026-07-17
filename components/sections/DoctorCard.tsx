import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { ShieldCheck } from "lucide-react";
import { routes } from "@/lib/routes";
import { team } from "@/content/team";
import { images, type ImageAsset } from "@/lib/images";

const PROVIDER_PORTRAITS: ImageAsset[] = [
  images.maskTreatment,
  images.skinExam,
  images.glowingSkin,
];

export function DoctorIntro() {
  const lead = team[0];
  return (
    <Container>
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <figure className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[32px] bg-[color:var(--color-surface-2)]">
            <Image
              src={images.maskTreatment.src}
              alt={`${lead.name} caring for a patient at ${lead.title.toLowerCase()}, ${"Lumen Dermatology"}`}
              fill
              quality={100}
              placeholder="blur"
              blurDataURL={images.maskTreatment.blurDataURL}
              sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, 100vw"
              className="object-cover object-[55%_30%]"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/35 via-transparent to-transparent"
            />
          </div>
          <figcaption className="absolute bottom-5 left-5 rounded-2xl bg-[color:var(--color-surface)] px-4 py-3 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-[color:var(--color-accent)]" aria-hidden />
              <span className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-ink-2)]">
                Board-Certified · FAAD
              </span>
            </div>
          </figcaption>
        </figure>
        <div>
          <SectionEyebrow>Meet your dermatologist</SectionEyebrow>
          <h2 className="mt-4 font-display text-display-md font-medium">
            {lead.name}
          </h2>
          <p className="mt-2 text-lg text-[color:var(--color-accent)]">{lead.title}</p>
          <div className="mt-6 space-y-4 text-pretty text-lg leading-relaxed text-[color:var(--color-ink-2)]">
            {lead.bio.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href={routes.team} arrow>
              Meet the full team
            </Button>
            <Link
              href={routes.about}
              className="inline-flex h-11 items-center text-sm font-medium text-[color:var(--color-ink-2)] hover:text-[color:var(--color-accent)]"
            >
              About our clinic →
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export function ProviderPortrait({
  index = 0,
  alt,
}: {
  index?: number;
  alt: string;
}) {
  const img = PROVIDER_PORTRAITS[index % PROVIDER_PORTRAITS.length];
  return (
    <>
      <Image
        src={img.src}
        alt={alt}
        fill
        quality={100}
        placeholder="blur"
        blurDataURL={img.blurDataURL}
        sizes="(min-width: 1280px) 640px, (min-width: 1024px) 48vw, 100vw"
        className="object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-[color:var(--color-ink)]/30 via-transparent to-transparent"
      />
    </>
  );
}
