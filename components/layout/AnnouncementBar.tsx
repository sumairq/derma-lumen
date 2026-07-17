import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { routes } from "@/lib/routes";

export function AnnouncementBar() {
  return (
    <div className="bg-[color:var(--color-ink)] text-[color:var(--color-bg)] text-xs sm:text-[13px]">
      <div className="mx-auto max-w-[80rem] px-5 sm:px-8 lg:px-12 py-2.5 flex items-center justify-center gap-3 text-center">
        <span className="hidden sm:inline-block size-1.5 rounded-full bg-[color:var(--color-gold)]" aria-hidden />
        <span>Now accepting new patients — most appointments available within 2 weeks.</span>
        <Link
          href={routes.book}
          className="inline-flex items-center gap-1 font-medium text-[color:var(--color-gold)] hover:underline"
        >
          Book today <ArrowRight className="size-3" aria-hidden />
        </Link>
      </div>
    </div>
  );
}
