import { cn } from "@/lib/cn";

export function Card({
  className,
  children,
  tone = "default",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "surface" | "ink";
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border p-6 transition-all duration-300 ease-out",
        tone === "default" &&
          "bg-[color:var(--color-surface)] border-[color:var(--color-line)] hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]",
        tone === "surface" &&
          "bg-[color:var(--color-surface-2)] border-transparent",
        tone === "ink" &&
          "bg-[color:var(--color-accent-3)] text-[color:var(--color-bg)] border-transparent",
        className
      )}
    >
      {children}
    </div>
  );
}
