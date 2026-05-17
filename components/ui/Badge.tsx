import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "default",
  className,
}: {
  children: React.ReactNode;
  tone?: "default" | "accent" | "ink" | "outline" | "solid";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider",
        tone === "default" &&
          "bg-[color:var(--color-surface-2)] text-[color:var(--color-ink-2)]",
        tone === "accent" &&
          "bg-[color:var(--color-accent)]/10 text-[color:var(--color-accent)]",
        tone === "ink" &&
          "bg-[color:var(--color-ink)] text-[color:var(--color-bg)]",
        tone === "outline" &&
          "border border-[color:var(--color-line-strong)] text-[color:var(--color-ink-2)]",
        tone === "solid" &&
          "bg-[color:var(--color-bg)] text-[color:var(--color-accent)] shadow-[0_2px_8px_rgba(20,32,31,0.25)] ring-1 ring-[color:var(--color-ink)]/5",
        className
      )}
    >
      {children}
    </span>
  );
}
