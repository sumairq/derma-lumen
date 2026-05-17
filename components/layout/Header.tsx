import Link from "next/link";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/brand/Logo";
import { MobileNav } from "./MobileNav";
import { ServicesMegaMenu } from "./ServicesMegaMenu";
import { routes } from "@/lib/routes";
import { clinic } from "@/content/clinic";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-line)]/60 bg-[color:var(--color-bg)]/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[80rem] items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
        <Link href="/" aria-label={`${clinic.name} home`} className="-ml-1">
          <Logo size="md" />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden lg:flex items-center gap-7 text-[15px] text-[color:var(--color-ink)]"
        >
          <ServicesMegaMenu />
          <Link href={routes.about} className="hover:text-[color:var(--color-accent)] transition-colors">
            About
          </Link>
          <Link href={routes.team} className="hover:text-[color:var(--color-accent)] transition-colors">
            Team
          </Link>
          <Link href={routes.blog} className="hover:text-[color:var(--color-accent)] transition-colors">
            Blog
          </Link>
          <Link href={routes.newPatients} className="hover:text-[color:var(--color-accent)] transition-colors">
            Patients
          </Link>
          <Link href={routes.contact} className="hover:text-[color:var(--color-accent)] transition-colors">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${clinic.phoneE164}`}
            className="hidden xl:inline-flex items-center gap-2 text-sm font-medium text-[color:var(--color-ink-2)] hover:text-[color:var(--color-accent)] transition-colors"
          >
            <Phone className="size-4" aria-hidden />
            {clinic.phone}
          </a>
          <Button href={routes.contact} size="sm" className="hidden lg:inline-flex">
            Book Consult
          </Button>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
