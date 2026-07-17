"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import type { ResultCase } from "@/content/results";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

export type BrowserItem = {
  result: ResultCase;
  /** Display title of the treatment (resolved server-side to keep the
      services catalogue out of the client bundle). */
  serviceTitle: string;
};

/**
 * Filterable before/after library for the /results page.
 */
export function ResultsBrowser({ items }: { items: BrowserItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const treatments = [...new Map(items.map((i) => [i.result.service, i.serviceTitle]))];
  const shown = active ? items.filter((i) => i.result.service === active) : items;

  return (
    <div>
      <div role="group" aria-label="Filter results by treatment" className="mb-10 flex flex-wrap gap-2">
        <FilterChip label="All treatments" active={active === null} onClick={() => setActive(null)} />
        {treatments.map(([slug, title]) => (
          <FilterChip
            key={slug}
            label={title}
            active={active === slug}
            onClick={() => setActive(slug)}
          />
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {shown.map((item) => (
          <figure key={item.result.title} className="fade-in-up">
            <BeforeAfterSlider
              before={item.result.before}
              after={item.result.after}
              label={item.result.title}
            />
            <figcaption className="mt-4 px-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="font-display text-lg font-medium tracking-tight">
                  {item.result.title}
                </span>
                <span className="text-sm text-[color:var(--color-muted)]">
                  {item.result.detail}
                </span>
              </div>
              <Link
                href={routes.service(item.result.service)}
                className="mt-1 inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-accent)] hover:underline"
              >
                About {item.serviceTitle.toLowerCase()}
                <ArrowUpRight className="size-3.5" aria-hidden />
              </Link>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "border-transparent bg-[color:var(--color-accent)] text-[color:var(--color-bg)]"
          : "border-[color:var(--color-line-strong)] bg-[color:var(--color-surface)] text-[color:var(--color-ink-2)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
      )}
    >
      {label}
    </button>
  );
}
