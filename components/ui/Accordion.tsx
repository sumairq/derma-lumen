import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/cn";

export function Accordion({
  items,
  className,
}: {
  items: { q: string; a: React.ReactNode }[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-[color:var(--color-line)]", className)}>
      {items.map((item, idx) => (
        <details
          key={idx}
          className="group py-5 [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-lg font-medium text-[color:var(--color-ink)] hover:text-[color:var(--color-accent)] transition-colors">
            <span>{item.q}</span>
            <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--color-line-strong)] text-[color:var(--color-ink-2)] transition-all group-open:rotate-180 group-open:bg-[color:var(--color-accent)] group-open:text-[color:var(--color-bg)] group-open:border-transparent">
              <ChevronDown className="size-4" aria-hidden />
            </span>
          </summary>
          <div className="mt-4 pr-12 text-[color:var(--color-ink-2)] leading-relaxed">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}
