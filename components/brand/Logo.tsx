import { cn } from "@/lib/cn";

/**
 * The Lumen mark.
 *
 * A crescent — the play of light on a curved surface — set with a small gold
 * highlight. Read literally: "lumen" (light) catching skin. Read abstractly:
 * a refined, clinical geometric mark that scales from 16px favicon up to
 * billboard with no detail loss.
 *
 * Built from two arc segments forming a single crescent path, plus one gold
 * highlight circle. No reliance on background color masking.
 */

type MarkProps = {
  size?: number;
  className?: string;
  withHighlight?: boolean;
  monochrome?: boolean;
};

export function LumenMark({
  size = 28,
  className,
  withHighlight = true,
  monochrome = false,
}: MarkProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Lumen Dermatology"
      className={cn("shrink-0", className)}
    >
      {/* Crescent — outer arc minus inner arc, defined as a single closed path */}
      <path
        d="M 20 3.5 A 16.5 16.5 0 1 0 20 36.5 A 13 16.5 0 1 1 20 3.5 Z"
        fill="currentColor"
      />
      {withHighlight ? (
        <circle
          cx="11.5"
          cy="14"
          r="2.2"
          fill={monochrome ? "currentColor" : "#B08A4F"}
          opacity={monochrome ? 0.6 : 1}
        />
      ) : null}
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "light";
};

/**
 * Full lockup: mark + wordmark. Use in headers, footers, and large brand surfaces.
 */
export function Logo({ className, size = "md", variant = "default" }: WordmarkProps) {
  const dims = {
    sm: { mark: 22, text: "text-xl", gap: "gap-2" },
    md: { mark: 28, text: "text-2xl", gap: "gap-2.5" },
    lg: { mark: 40, text: "text-4xl", gap: "gap-3" },
  }[size];

  return (
    <span
      className={cn(
        "inline-flex items-center font-display tracking-tight leading-none",
        dims.gap,
        variant === "light"
          ? "text-[color:var(--color-bg)]"
          : "text-[color:var(--color-accent)]",
        className
      )}
    >
      <LumenMark size={dims.mark} />
      <span
        className={cn(
          dims.text,
          variant === "light" ? "text-[color:var(--color-bg)]" : "text-[color:var(--color-ink)]"
        )}
      >
        Lumen
        <span
          className={cn(
            variant === "light" ? "text-[color:var(--color-gold)]" : "text-[color:var(--color-accent)]"
          )}
        >
          .
        </span>
      </span>
    </span>
  );
}
