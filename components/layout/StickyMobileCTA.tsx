"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";
import { cn } from "@/lib/cn";

/**
 * Thumb-reach booking bar on mobile. Slides in once the hero CTAs have
 * scrolled out of view; hidden entirely on lg+ where the header CTA persists.
 */
export function StickyMobileCTA() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      inert={!shown}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-[color:var(--color-line)] bg-[color:var(--color-surface)]/95 backdrop-blur-md transition-transform duration-300 lg:hidden",
        shown ? "translate-y-0" : "translate-y-full"
      )}
      style={{
        transitionTimingFunction: "var(--ease-out-soft)",
        paddingBottom: "env(safe-area-inset-bottom)",
      }}
    >
      <div className="flex items-center gap-3 px-4 py-3">
        <Button href={routes.book} className="flex-1" arrow>
          Book a Consultation
        </Button>
        <a
          href={`tel:${clinic.phoneE164}`}
          aria-label={`Call ${clinic.name} at ${clinic.phone}`}
          className="inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-accent)] transition-colors hover:border-[color:var(--color-accent)]"
        >
          <Phone className="size-5" aria-hidden />
        </a>
      </div>
    </div>
  );
}
