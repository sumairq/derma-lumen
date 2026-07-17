import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/lib/images";
import { team } from "@/content/team";

/**
 * Full-bleed editorial breather — a single statement line over imagery,
 * breaking the card-grid rhythm of the home page.
 */
export function Statement() {
  const founder = team[0];
  return (
    <section className="grain relative isolate overflow-hidden">
      <Image
        src={images.skinExam.src}
        alt=""
        aria-hidden
        fill
        quality={100}
        placeholder="blur"
        blurDataURL={images.skinExam.blurDataURL}
        sizes="100vw"
        className="-z-20 object-cover object-center"
      />
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[color:var(--color-accent-3)]/70"
      />
      <Container className="py-28 text-center sm:py-36 lg:py-44">
        <Reveal>
          <SectionEyebrow tone="light">The Lumen standard</SectionEyebrow>
          <p className="mx-auto mt-7 max-w-4xl text-balance font-display text-display-lg font-medium text-[color:var(--color-bg)]">
            The best cosmetic work is the kind no one can point to.
          </p>
          <p className="mt-7 text-sm uppercase tracking-[0.18em] text-[color:var(--color-bg)]/70">
            {founder.name} · {founder.title}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
