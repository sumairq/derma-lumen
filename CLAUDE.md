# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server
pnpm build        # Production build (runs type-check + static generation)
pnpm lint         # ESLint
pnpm typecheck    # tsc --noEmit (no test suite — verify correctness via build)
```

There are no automated tests. `pnpm build` is the primary correctness gate — it fails on TypeScript errors and will surface any broken static params or missing content.

## Architecture

### Route structure

All marketing pages live under `app/(marketing)/` and share a layout with `AnnouncementBar`, `Header`, and `Footer`. The root `app/layout.tsx` injects sitewide JSON-LD (LocalBusiness, Organization, WebSite schemas) and loads the Fraunces (display serif) + Inter (sans) fonts via `next/font/google`.

Every marketing route uses `export const dynamic = "force-static"`.

### Service pages — the most important pattern

All 19 service URLs are driven by a single catch-all route: `app/(marketing)/[service]/page.tsx`. It calls `generateStaticParams()` from `content/services/index.ts` to pre-render every slug at build time. `dynamicParams = false` means any unknown slug returns 404.

To add a service: add an entry to the `services` array in `content/services/index.ts` following the `Service` type in `content/services/_types.ts`. The page, metadata, sitemap entry, and nav links all pick it up automatically.

The `ServicePage` component in `components/service/ServicePage.tsx` is the full-page template — it renders every section (hero, intro, concerns, process, benefits, expectations, FAQs, related services) from the typed data object.

### Content as the single source of truth

| File | Drives |
|---|---|
| `content/clinic.ts` | NAP, hours, social links — used by Header, Footer, Contact page, schema, sitemap |
| `content/services/index.ts` | All 19 service pages, the services hub, footer nav, sitemap |
| `content/team.ts` | Meet the Team page, DoctorCard on service pages |
| `content/testimonials.ts` | TestimonialMarquee, per-service review snippets |
| `content/faqs.ts` | Keyed FAQ banks (`general`, `acne`, `botox`, …) — service pages pull their slice |
| `content/results.ts` | Before/after cases for service-page galleries and the `/results` library page (generated placeholder imagery in `public/images/results/` — replace with consented patient photos before launch) |

Derived pages: `/pricing` renders a per-category treatment menu straight from `content/services/index.ts` (`getPriceTag` + `expectations`) — no separate pricing data to maintain. `/book` is the booking hub: with `NEXT_PUBLIC_BOOKING_URL` set at build time it embeds that scheduler in an iframe; unset, it falls back to the contact form. All "Book" CTAs sitewide point to `routes.book`.
| `content/blog/posts/*.mdx` | Blog posts — read at build time via `gray-matter` + `reading-time` in `content/blog/index.ts` |

### Internal links — always use `lib/routes.ts`

Never hardcode URL strings. Import from `lib/routes.ts`:
```ts
import { routes } from "@/lib/routes";
routes.service("botox")     // "/botox"
routes.blogPost("my-slug")  // "/blog/my-slug"
```

`NEXT_PUBLIC_SITE_URL` env var sets the canonical base (defaults to `https://lumendermatology.example.com`).

### Images — `lib/images.ts`

All images are catalogued in `lib/images.ts` with typed `ImageAsset` objects (`src`, `alt`, `width`, `height`). Use the helper functions rather than referencing paths directly:
- `getServiceImage(slug)` — returns the best-fit image for a service
- `getBlogPostImage(slug)` — per-post image
- `getBlogCategoryImage(category)` — category landing image

AVIF is disabled in `next.config.ts` (chroma subsampling makes clinical skin photography look blocky). WebP only. Key above-the-fold images (hero, service hero, blog covers) use `unoptimized` to serve the original JPEG at full quality; all others use `quality={100}` WebP.

### SEO and structured data

`lib/seo.ts` exports `buildMetadata()` — use it on every page for consistent canonical URLs and OG tags.

`lib/schema.ts` exports JSON-LD builder functions. Inject them via the `<JsonLd>` server component in `components/schema/JsonLd.tsx` which renders a `<script type="application/ld+json">` with no client JS overhead.

Schema already implemented: `LocalBusiness`/`MedicalBusiness`, `Organization`, `WebSite`, `Physician`, `MedicalProcedure`, `FAQPage`, `BreadcrumbList`, `Article`.

### Design system

Tailwind v4 CSS-first — tokens are defined in the `@theme {}` block in `app/globals.css`, not in a config file. All colors are accessed as `var(--color-*)`, shadows as `var(--shadow-*)`, etc.

**Tailwind v4 gotcha:** the preflight sets `svg { display: block }`. Any icon rendered inside a `<button>` or inline text will stack vertically unless its parent is `inline-flex`. The `Button` component wraps children in `<span className="inline-flex items-center gap-2 whitespace-nowrap">` to handle this — follow the same pattern anywhere icons appear inline.

`SectionEyebrow` and `SectionHeading` accept a `tone` prop: `"default"` (teal eyebrow, dark heading) or `"light"` (gold eyebrow, cream heading) for use on dark-background sections.

`Badge` has a `tone="solid"` variant (opaque cream bg + deep teal text + shadow) designed for overlaying on photos where tonal variants become illegible.

### Forms

`app/actions/forms.ts` contains two Server Actions — `submitContact` and `submitIntake` — validated with Zod and honeypot-protected. Delivery is env-gated via Resend: with `RESEND_API_KEY` set (see `.env.example`) submissions are emailed to `FORM_TO_EMAIL`; without it they are logged to the server console, so dev needs no setup. Intake submissions contain PHI — swap email for a HIPAA-appropriate transport before a real launch. `FormState` type is exported for use in the client form components.
