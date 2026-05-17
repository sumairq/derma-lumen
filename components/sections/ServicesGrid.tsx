import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import {
  SERVICE_CATEGORIES,
  getServicesByCategory,
} from "@/content/services";
import { routes } from "@/lib/routes";
import { cn } from "@/lib/cn";

export function ServicesGrid({
  heading = "Care that meets you where you are",
  eyebrow = "Our Services",
  description = "From persistent breakouts to skin cancer screening to refined cosmetic treatment, every service is led by board-certified dermatologists.",
}: {
  heading?: string;
  eyebrow?: string;
  description?: string;
}) {
  return (
    <Container>
      <SectionHeading eyebrow={eyebrow} title={heading} description={description} />
      <div className="grid gap-5 lg:grid-cols-3">
        {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map(
          (cat, idx) => {
            const meta = SERVICE_CATEGORIES[cat];
            const items = getServicesByCategory(cat);
            return (
              <article
                key={cat}
                className={cn(
                  "group relative flex flex-col overflow-hidden rounded-3xl border border-[color:var(--color-line)] p-7 transition-all duration-300",
                  idx === 1
                    ? "bg-[color:var(--color-accent-3)] text-[color:var(--color-bg)] border-transparent"
                    : "bg-[color:var(--color-surface)] hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
                )}
              >
                <div className="mb-5 flex items-center justify-between">
                  <span
                    className={cn(
                      "text-xs font-medium uppercase tracking-[0.2em]",
                      idx === 1 ? "text-[color:var(--color-gold)]" : "text-[color:var(--color-accent)]"
                    )}
                  >
                    0{idx + 1}
                  </span>
                </div>
                <h3
                  className={cn(
                    "text-3xl font-medium tracking-tight",
                    idx === 1 ? "text-[color:var(--color-bg)]" : ""
                  )}
                >
                  {meta.title}
                </h3>
                <p
                  className={cn(
                    "mt-3 text-sm leading-relaxed",
                    idx === 1
                      ? "text-[color:var(--color-bg)]/75"
                      : "text-[color:var(--color-ink-2)]"
                  )}
                >
                  {meta.description}
                </p>
                <ul className="mt-6 flex-1 space-y-1.5 text-sm">
                  {items.slice(0, 6).map((s) => (
                    <li key={s.slug}>
                      <Link
                        href={routes.service(s.slug)}
                        className={cn(
                          "flex items-center justify-between gap-2 rounded-lg px-2 py-1.5 -mx-2 transition-colors",
                          idx === 1
                            ? "text-[color:var(--color-bg)]/85 hover:bg-[color:var(--color-bg)]/8 hover:text-[color:var(--color-bg)]"
                            : "text-[color:var(--color-ink-2)] hover:bg-[color:var(--color-bg)] hover:text-[color:var(--color-accent)]"
                        )}
                      >
                        <span>{s.title}</span>
                        <ArrowUpRight className="size-3.5 opacity-0 transition-all group-hover:opacity-100" aria-hidden />
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link
                  href={routes.services}
                  className={cn(
                    "mt-6 inline-flex items-center gap-1 text-sm font-medium",
                    idx === 1 ? "text-[color:var(--color-gold)] hover:underline" : "text-[color:var(--color-accent)] hover:underline"
                  )}
                >
                  See all {meta.title.toLowerCase()} →
                </Link>
              </article>
            );
          }
        )}
      </div>
    </Container>
  );
}
