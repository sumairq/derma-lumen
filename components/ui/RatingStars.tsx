import { Star } from "lucide-react";

export function RatingStars({
  value,
  size = 16,
  showValue,
  count,
}: {
  value: number;
  size?: number;
  showValue?: boolean;
  count?: number;
}) {
  return (
    <div className="inline-flex items-center gap-2">
      <div
        className="flex"
        aria-label={`Rated ${value} out of 5${count ? ` from ${count} reviews` : ""}`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            width={size}
            height={size}
            className={
              i < Math.round(value)
                ? "fill-[color:var(--color-gold)] text-[color:var(--color-gold)]"
                : "text-[color:var(--color-line-strong)]"
            }
            aria-hidden
          />
        ))}
      </div>
      {showValue ? (
        <span className="text-sm font-medium">
          {value.toFixed(1)}
          {count ? (
            <span className="text-[color:var(--color-muted)] font-normal">
              {" "}· {count.toLocaleString()} reviews
            </span>
          ) : null}
        </span>
      ) : null}
    </div>
  );
}
