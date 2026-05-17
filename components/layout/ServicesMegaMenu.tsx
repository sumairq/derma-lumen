import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";
import { routes } from "@/lib/routes";

export function ServicesMegaMenu() {
  return (
    <div className="group relative">
      <Link
        href={routes.services}
        className="flex items-center gap-1 hover:text-[color:var(--color-accent)] transition-colors"
      >
        Services
        <ChevronDown
          className="size-3.5 transition-transform group-hover:rotate-180"
          aria-hidden
        />
      </Link>
      <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
        <div className="w-[820px] rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-lift)]">
          <div className="grid grid-cols-3 gap-7">
            {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map(
              (cat) => {
                const meta = SERVICE_CATEGORIES[cat];
                return (
                  <div key={cat}>
                    <h3 className="text-xs font-medium uppercase tracking-[0.18em] text-[color:var(--color-accent)] mb-3">
                      {meta.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {getServicesByCategory(cat).slice(0, 7).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={routes.service(s.slug)}
                            className="block text-[13px] text-[color:var(--color-ink-2)] hover:text-[color:var(--color-accent)] transition-colors"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              }
            )}
          </div>
          <div className="mt-6 pt-5 border-t border-[color:var(--color-line)] flex items-center justify-between">
            <p className="text-xs text-[color:var(--color-muted)]">
              Board-certified care across medical, surgical & cosmetic dermatology
            </p>
            <Link
              href={routes.services}
              className="text-xs font-medium text-[color:var(--color-accent)] hover:underline"
            >
              See all services →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
