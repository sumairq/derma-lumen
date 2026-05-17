import { cn } from "@/lib/cn";

export function Container({
  className,
  children,
  size = "default",
}: {
  className?: string;
  children: React.ReactNode;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8 lg:px-12",
        size === "default" && "max-w-[80rem]",
        size === "narrow" && "max-w-3xl",
        size === "wide" && "max-w-[92rem]",
        className
      )}
    >
      {children}
    </div>
  );
}
