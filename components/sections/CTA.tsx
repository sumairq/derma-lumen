import { Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionEyebrow } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";

export function CTA({
  heading = "Ready to put your skin in expert hands?",
  description = "Most new patient appointments are available within 2 weeks. We'll listen, explain everything, and build a plan you'll trust.",
}: {
  heading?: string;
  description?: string;
}) {
  return (
    <Container>
      <div className="relative overflow-hidden rounded-[36px] bg-[color:var(--color-accent-3)] px-7 py-14 text-[color:var(--color-bg)] sm:px-14 sm:py-20 lg:px-20 lg:py-24">
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 -top-32 size-[420px] rounded-full bg-[color:var(--color-accent)]/30 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -left-24 -bottom-32 size-[360px] rounded-full bg-[color:var(--color-gold)]/15 blur-3xl"
        />
        <div className="relative max-w-2xl">
          <SectionEyebrow tone="light">Book a consultation</SectionEyebrow>
          <h2 className="mt-4 text-balance font-display text-display-lg font-medium text-[color:var(--color-bg)]">
            {heading}
          </h2>
          <p className="mt-5 text-pretty text-lg text-[color:var(--color-bg)]/85">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button href={routes.book} size="lg" variant="ink" className="bg-[color:var(--color-bg)] !text-[color:var(--color-ink)] hover:!bg-white" arrow>
              Book Online
            </Button>
            <Button
              href={`tel:${clinic.phoneE164}`}
              external
              size="lg"
              variant="ghost"
              className="!text-[color:var(--color-bg)] hover:!bg-[color:var(--color-bg)]/8"
            >
              <Phone className="size-4" aria-hidden />
              <span>{clinic.phone}</span>
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
