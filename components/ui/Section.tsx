import { cn } from "@/lib/cn";

export function Section({
  className,
  children,
  tone = "default",
  id,
  as: Tag = "section",
}: {
  className?: string;
  children: React.ReactNode;
  tone?: "default" | "surface" | "surface-2" | "ink";
  id?: string;
  as?: React.ElementType;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        tone === "default" && "bg-[color:var(--color-bg)]",
        tone === "surface" && "bg-[color:var(--color-surface)]",
        tone === "surface-2" && "bg-[color:var(--color-surface-2)]",
        tone === "ink" && "bg-[color:var(--color-accent-3)] text-[color:var(--color-bg)]",
        "py-20 sm:py-24 lg:py-32",
        className
      )}
    >
      {children}
    </Tag>
  );
}

export function SectionEyebrow({
  children,
  tone = "default",
}: {
  children: React.ReactNode;
  tone?: "default" | "light";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em]",
        tone === "light"
          ? "text-[color:var(--color-gold)]"
          : "text-[color:var(--color-accent)]"
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-8",
          tone === "light"
            ? "bg-[color:var(--color-gold)]/55"
            : "bg-[color:var(--color-accent)]/40"
        )}
      />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  tone = "default",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  tone?: "default" | "light";
}) {
  const isLight = tone === "light";
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl lg:mb-16",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div className="mb-4">
          <SectionEyebrow tone={tone}>{eyebrow}</SectionEyebrow>
        </div>
      ) : null}
      <h2
        className={cn(
          "text-balance text-4xl font-medium leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl",
          isLight && "text-[color:var(--color-bg)]"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-6 text-pretty text-lg sm:text-xl",
            isLight
              ? "text-[color:var(--color-bg)]/85"
              : "text-[color:var(--color-ink-2)]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
