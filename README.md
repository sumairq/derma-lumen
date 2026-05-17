# Lumen Dermatology — Production-Grade Marketing Site

A premium, SEO-first, statically-generated marketing site for a fictional dermatology clinic. Built with Next.js 15 App Router, TypeScript, Tailwind v4, and content-driven architecture.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build (all pages SSG)
pnpm lint
pnpm typecheck
```

## Architecture overview

- **All pages are statically generated** (`force-static`) for instant TTFB and ideal Core Web Vitals.
- **Content lives in `content/`** — one TS file per data set (services, team, testimonials, FAQs, clinic info), plus MDX articles for the blog.
- **One catch-all `[service]` route** powers all 19 service pages from `content/services/index.ts`. Each service is a typed `Service` object — add a new entry and a new flat URL is generated at build with full schema, metadata, sitemap inclusion, and internal links.
- **Sitewide JSON-LD** (LocalBusiness + Organization + WebSite) injected once in the root layout. Per-page schema (MedicalProcedure, FAQPage, BreadcrumbList, Article, Physician) is composed via `lib/schema.ts`.
- **Server Components by default** — only `MobileNav`, `ContactForm`, and `IntakeForm` are client islands.

## Folder map

```
app/
  (marketing)/         Header/Footer-wrapped marketing routes
    [service]/         Catch-all for service slugs
    blog/              Blog index, post, category
    ...                about-us, contact-us, services, etc.
  actions/forms.ts     Stubbed server actions (console.log)
  layout.tsx           Root: fonts + sitewide schema
  sitemap.ts, robots.ts, manifest.ts, not-found.tsx

components/
  layout/              Header, Footer, MobileNav, AnnouncementBar, MegaMenu
  ui/                  Button, Container, Section, Card, Badge, Accordion, …
  sections/            Hero, ServicesGrid, TrustBar, Testimonials, FAQ, CTA, …
  service/             ServicePage template
  forms/               ContactForm, IntakeForm (client islands)
  schema/              JsonLd injector

content/
  clinic.ts            NAP + hours + socials (single source of truth)
  services/            19 services + types
  blog/posts/*.mdx     6 example articles
  team.ts, testimonials.ts, faqs.ts

lib/
  seo.ts               Metadata builder (canonical, OG, Twitter, robots)
  schema.ts            JSON-LD builders
  routes.ts            Centralized route map (prevents broken links)
  cn.ts                clsx + tailwind-merge
```

## SEO & performance highlights

- **Lighthouse-ready**: self-hosted variable fonts via `next/font`, `next/image` everywhere, AVIF/WebP first, no client-side state library, marquee animations CSS-only.
- **Structured data**: LocalBusiness, MedicalBusiness, MedicalClinic, MedicalProcedure, FAQPage, BreadcrumbList, MedicalWebPage/Article, Physician, ItemList — all centrally built.
- **Internal linking strategy**: pillar `/services` hub links to every leaf; each service links to 3 related services; blog posts surface related services and vice versa; footer mega-links every service for full reachability.
- **Programmatic sitemap** at `/sitemap.xml`, robots at `/robots.txt`, manifest at `/manifest.webmanifest`.
- **Redirects**: `/insurance-payment-options` → `/payment-options` (301).

## Wiring forms to a real provider

Forms currently POST to server actions that `console.log` the payload. Swap in any of:

- **Resend** — drop a `resend.emails.send(...)` call into `app/actions/forms.ts` with a `RESEND_API_KEY` env var.
- **Web3Forms** — replace the `console.log` with a `fetch("https://api.web3forms.com/submit", { ... })`.
- **Formspree** — POST formData to your Formspree endpoint.

The Zod validation, honeypot, accessibility, and pending-state UX stay the same.

## Customizing the brand

- **NAP, hours, socials, rating**: `content/clinic.ts`. Used everywhere.
- **Palette + typography tokens**: `app/globals.css` (`@theme` block).
- **Routes**: `lib/routes.ts`. All links flow through this.
- **Site URL** for canonical/OG: set `NEXT_PUBLIC_SITE_URL` env var or edit `lib/routes.ts`.

## Adding a new service

1. Add an entry to the `services` array in `content/services/index.ts` with a fresh slug.
2. Done. The new URL `/your-slug` is statically generated, added to the sitemap, included in the footer, mega menu, and services hub, with full metadata + schema + breadcrumbs.

## Adding a blog post

1. Drop a new `.mdx` file into `content/blog/posts/` with the standard frontmatter.
2. It auto-appears in the index, the matching category, the home teaser (newest 3), and the sitemap. Reading time is computed automatically.
