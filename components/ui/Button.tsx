import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "ink";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 font-medium rounded-full transition-all duration-200 ease-out will-change-transform focus-visible:outline-2 focus-visible:outline-offset-2";

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-[15px]",
  lg: "h-14 px-8 text-base",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-[color:var(--color-accent)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent-2)] active:bg-[color:var(--color-accent-3)] shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-lift)]",
  secondary:
    "bg-[color:var(--color-surface)] text-[color:var(--color-ink)] border border-[color:var(--color-line-strong)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]",
  ghost:
    "text-[color:var(--color-ink)] hover:bg-[color:var(--color-surface-2)]",
  ink:
    "bg-[color:var(--color-ink)] text-[color:var(--color-bg)] hover:bg-[color:var(--color-accent-3)]",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
  arrow?: boolean;
};

type AsLink = CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps>;

type AsButton = CommonProps & {
  href?: undefined;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps>;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children, arrow } = props;
  const classes = cn(base, sizes[size], variants[variant], className);
  const content = (
    <>
      <span className="inline-flex items-center gap-2 whitespace-nowrap">{children}</span>
      {arrow ? (
        <ArrowRight
          className="size-4 transition-transform group-hover:translate-x-0.5"
          aria-hidden
        />
      ) : null}
    </>
  );

  if ("href" in props && props.href) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, arrow: _a, ...rest } = props;
    void _v; void _s; void _c; void _ch; void _a;
    if (external) {
      return (
        <a
          {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(classes, "group")}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={cn(classes, "group")}>
        {content}
      </Link>
    );
  }

  const { variant: _v, size: _s, className: _c, children: _ch, arrow: _a, ...rest } =
    props as AsButton;
  void _v; void _s; void _c; void _ch; void _a;
  return (
    <button {...(rest as React.ButtonHTMLAttributes<HTMLButtonElement>)} className={cn(classes, "group")}>
      {content}
    </button>
  );
}
