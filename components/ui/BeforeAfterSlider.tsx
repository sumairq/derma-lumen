"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronsLeftRight } from "lucide-react";
import type { ImageAsset } from "@/lib/images";
import { cn } from "@/lib/cn";

/**
 * Draggable before/after comparison. A full-surface invisible range input
 * drives the divider, so it works with mouse, touch, and keyboard (arrow
 * keys) without any drag-handling JS.
 */
export function BeforeAfterSlider({
  before,
  after,
  label,
  className,
}: {
  before: ImageAsset;
  after: ImageAsset;
  label: string;
  className?: string;
}) {
  const [pos, setPos] = useState(50);

  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full select-none overflow-hidden rounded-[28px] bg-[color:var(--color-surface-2)]",
        className
      )}
    >
      <Image
        src={after.src}
        alt={after.alt}
        fill
        placeholder="blur"
        blurDataURL={after.blurDataURL}
        sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
        className="object-cover"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before.src}
          alt=""
          fill
          placeholder="blur"
          blurDataURL={before.blurDataURL}
          sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>

      {/* Divider + handle */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 z-10"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute inset-y-0 -ml-px w-0.5 bg-[color:var(--color-surface)]/90" />
        <div className="absolute top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[color:var(--color-surface)] text-[color:var(--color-accent)] shadow-[var(--shadow-lift)]">
          <ChevronsLeftRight className="size-5" />
        </div>
      </div>

      {/* Labels fade out as the divider approaches them */}
      <span
        aria-hidden
        className="absolute left-4 top-4 z-10 rounded-full bg-[color:var(--color-surface)]/95 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--color-accent-3)] shadow-[var(--shadow-soft)] transition-opacity"
        style={{ opacity: pos < 18 ? 0 : 1 }}
      >
        Before
      </span>
      <span
        aria-hidden
        className="absolute right-4 top-4 z-10 rounded-full bg-[color:var(--color-surface)]/95 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[color:var(--color-accent-3)] shadow-[var(--shadow-soft)] transition-opacity"
        style={{ opacity: pos > 82 ? 0 : 1 }}
      >
        After
      </span>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label={`Compare before and after: ${label}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
