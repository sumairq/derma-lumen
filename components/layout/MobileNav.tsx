"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";
import { SERVICE_CATEGORIES, getServicesByCategory } from "@/content/services";

const primary = [
  { label: "Services", href: routes.services },
  { label: "Results", href: routes.results },
  { label: "Pricing", href: routes.pricing },
  { label: "About", href: routes.about },
  { label: "Team", href: routes.team },
  { label: "Blog", href: routes.blog },
  { label: "Patients", href: routes.newPatients },
  { label: "Contact", href: routes.contact },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        aria-expanded={open}
        className="inline-flex size-11 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-ink)] lg:hidden"
      >
        <Menu className="size-5" aria-hidden />
      </button>

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col bg-[color:var(--color-bg)] lg:hidden"
        >
          <div className="flex items-center justify-between px-5 py-4 border-b border-[color:var(--color-line)]">
            <Link href="/" onClick={() => setOpen(false)} aria-label={`${clinic.name} home`}>
              <Logo size="sm" />
            </Link>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="inline-flex size-11 items-center justify-center rounded-full border border-[color:var(--color-line-strong)]"
            >
              <X className="size-5" aria-hidden />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            <ul className="space-y-1 mb-8">
              {primary.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block py-3 text-2xl font-display tracking-tight hover:text-[color:var(--color-accent)]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              {(Object.keys(SERVICE_CATEGORIES) as Array<keyof typeof SERVICE_CATEGORIES>).map(
                (cat) => (
                  <div key={cat}>
                    <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)] mb-3">
                      {SERVICE_CATEGORIES[cat].title}
                    </h3>
                    <ul className="space-y-1">
                      {getServicesByCategory(cat).map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={routes.service(s.slug)}
                            className="block py-1.5 text-sm text-[color:var(--color-ink-2)] hover:text-[color:var(--color-accent)]"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              )}
            </div>
          </nav>
          <div className="border-t border-[color:var(--color-line)] p-5 space-y-3">
            <Button href={routes.book} className="w-full" arrow>
              Book a Consultation
            </Button>
            <a
              href={`tel:${clinic.phoneE164}`}
              className="flex items-center justify-center gap-2 py-2 text-sm font-medium text-[color:var(--color-ink-2)]"
            >
              <Phone className="size-4" aria-hidden />
              {clinic.phone}
            </a>
          </div>
        </div>
      ) : null}
    </>
  );
}
