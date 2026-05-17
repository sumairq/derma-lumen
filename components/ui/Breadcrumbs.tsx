import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; path: string; current?: boolean }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="text-sm">
      <ol className="flex flex-wrap items-center gap-1.5 text-[color:var(--color-muted)]">
        <li className="flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-[color:var(--color-accent)] transition-colors"
            aria-label="Home"
          >
            <Home className="size-3.5" aria-hidden />
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.path} className="flex items-center gap-1.5">
            <ChevronRight className="size-3.5 text-[color:var(--color-line-strong)]" aria-hidden />
            {item.current ? (
              <span className="text-[color:var(--color-ink)]" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link
                href={item.path}
                className="hover:text-[color:var(--color-accent)] transition-colors"
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
