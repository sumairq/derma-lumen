# Website Management & SEO Retainer — Proposal for A+ Dentists

Hi,

I've spent time going through aplusdentists.co.nz before writing this — the specifics below are from that review, not a template. I work with Next.js full-time, I understand local SEO for small businesses, and I'll give you a straight answer on every question you asked.

If you'd like a sense of how I communicate and explain technical topics, I was recently a guest on a podcast episode covering web accessibility: https://www.youtube.com/watch?v=AcvI0S4NrPo&t=363s

---

## 1. Next.js Projects

Yes — Next.js is my primary stack. Three recent examples:

- **[PLACEHOLDER — deployed URL of Lumen Dermatology or your strongest Next.js project]**
  Full marketing site for a medical practice — App Router, TypeScript, structured data (LocalBusiness, MedicalProcedure, FAQPage schemas), `next/image` with responsive sizing, static generation on all routes.

- **[PLACEHOLDER — second deployed Next.js project URL]**
  Brief one-line description of what it is.

- **[PLACEHOLDER — third project URL, or "additional examples available on request"]**
  Brief one-line description.

Each project uses the App Router, TypeScript strict mode, `next/image` for image optimisation, and the `metadata` API for SEO. I'm comfortable working on an existing codebase I didn't author — my job is to ship clean, incremental changes without breaking what's working.

---

## 2. Meta Tags and Structured Data in Next.js — Technical Approach

**Dynamic meta tags (App Router):**
For static pages I export a `metadata` object directly from the page file:

```ts
export const metadata: Metadata = {
  title: "Dental Implants in Howick | A+ Dentists",
  description: "Restore your smile with long-lasting dental implants at A+ Dentists, Howick. Book your free consultation today — (09) 534 7916.",
  alternates: { canonical: "https://aplusdentists.co.nz/dental-implants" },
  openGraph: {
    title: "Dental Implants in Howick | A+ Dentists",
    description: "...",
    url: "https://aplusdentists.co.nz/dental-implants",
    siteName: "A+ Dentists",
    images: [{ url: "/og/dental-implants.jpg", width: 1200, height: 630 }],
  },
};
```

For dynamic routes (e.g. service pages generated from a data source) I use `generateMetadata()`, which receives route params and can fetch data server-side before returning the metadata object.

**Structured data / Schema markup:**
I inject JSON-LD via a `<JsonLd>` server component that renders a `<script type="application/ld+json">` tag — no client JS, no hydration cost, picked up immediately by crawlers. The root layout gets the sitewide `LocalBusiness` + `Dentist` schema; individual pages inject their own `MedicalProcedure`, `FAQPage`, or `Review` schema. This keeps schema co-located with the page that owns it rather than in a separate file that drifts out of sync.

For A+ Dentists specifically, I'd implement:

| Schema type | Where |
|---|---|
| `LocalBusiness` + `Dentist` | Root layout — NAP, hours, geo, sameAs GBP |
| `Physician` | Meet the Dentists page — Dr. Pulkit's credentials, qualifications, memberships |
| `MedicalProcedure` | Each service page |
| `FAQPage` | Any page with a Q&A section (dental implants already has 3 FAQs waiting) |
| `Review` / `AggregateRating` | Homepage testimonials section |
| `BreadcrumbList` | Every page |

---

## 3. Three Specific Observations — What I'd Prioritise in Month 1

*I reviewed the live site. Here are the three issues I'd fix first:*

**Priority 1 — Meta descriptions are missing sitewide.**

Every page I checked — homepage, `/services`, `/new-patients`, `/dental-implants`, `/meet-the-dentists` — is missing a `<meta name="description">` tag entirely. Google is generating its own snippets from body copy, which are typically awkward and keyword-poor. This directly reduces click-through rate from search results for every position you currently hold — you're losing traffic you've already earned. In Next.js it's a one-line fix per page (`export const metadata = { description: "..." }`), and the payoff is immediate: better CTR without any ranking movement required.

**Priority 2 — No structured data anywhere on the site.**

No `LocalBusiness`, `Dentist`, `Service`, or `FAQPage` JSON-LD was detected on any page. For a local dental practice competing on "dentist Howick" and "dental implants Botany" queries, schema markup is the lever that turns rankings into rich results — star ratings in the SERP, the knowledge panel business card, FAQ dropdowns directly under your listing. The `/dental-implants` page already has a three-question FAQ section that should be producing a featured snippet; it won't without `FAQPage` schema. Implementing a `LocalBusiness`/`Dentist` block in the root layout also reinforces NAP consistency between the site and your Google Business Profile, which is a direct local ranking signal.

**Priority 3 — Hero image is a single fixed-size file with no responsive sizing and no alt text.**

The hero at `/imgs/hero/0011-1400.webp` is a 1400px-wide file delivered identically to a 390px mobile screen. That's the dominant LCP (Largest Contentful Paint) element on mobile, downloading far more bytes than needed — a direct contributor to the PageSpeed score of 41. Additionally, the image has no `alt` attribute, which is simultaneously an accessibility failure and an SEO miss. The fix is to migrate to Next.js `<Image>` with `priority` (forces browser preload), a correct `sizes` attribute (`"(min-width: 1024px) 50vw, 100vw"`), and descriptive alt text. Next.js then auto-generates WebP srcset variants at the right widths and serves the smallest correct size per device. This single change — combined with eliminating render-blocking resources and deferring non-critical JS — should push mobile PageSpeed past 70.

**Bonus observation:** `/sitemap.xml` returns a 404. There is no XML sitemap submitted to Search Console, meaning Google discovers your pages by following links only. Some pages may be poorly indexed or not indexed at all. Generating a programmatic sitemap in `app/sitemap.ts` (native to Next.js App Router) and submitting it to Search Console takes roughly 20 minutes and is one of the cleanest crawl signals you can send.

---

## 4. Time Zone and Response Time

I'm based in **[YOUR TIMEZONE — e.g. UTC+5 Pakistan Standard Time]**. Business hours are Monday–Friday, [YOUR HOURS].

I reply to emails and messages within **24 hours on business days** — typically much faster for anything short. I acknowledge new tasks within **48 hours with a written completion estimate**, and anything under 30 minutes gets done within **3 business days**. I maintain a task log so nothing falls through without a proactive update from me first.

I read your communication policy carefully. Lack of responsiveness is a dealbreaker for me too — I'd rather you end the contract than chase me for updates.

---

## 5. Realistic SEO Progress on USD $150/Month Over 6 Months

Honest answer: you're buying steady, compounding foundation work — not a traffic explosion.

Here's a realistic 6-month trajectory:

**Month 1 — Technical foundation (non-negotiable first)**
Mobile PageSpeed 41 → 70+. Meta descriptions on all key pages. XML sitemap generated and submitted. Schema markup sitewide (LocalBusiness, Dentist, MedicalProcedure, FAQPage). Hero image replaced with a properly optimised responsive version. These are prerequisites — without them, months 2–6 have a lower ceiling regardless of what else I do.

**Months 2–3 — On-page optimisation**
Keyword research for your core terms ("dentist Howick", "dental implants Howick", "teeth whitening Botany", etc.). Title tags and H1s tightened to match search intent. Internal linking improved across service pages. Google Business Profile posts 2×/month. Search Console monitored weekly — crawl errors and index issues resolved as they appear. You'll likely see CTR improvements from meta descriptions during this period without any ranking change.

**Months 4–6 — Local authority consolidation**
NAP citation consistency audit across directories (Yelp, Yellow Pages NZ, Healthpoint, etc.). Review response strategy and GBP Q&A management. Review schema added to the homepage. Gradual ranking movement on 3–5 highly targeted local queries. Content gap identification — I flag opportunities; you decide whether to commission new content.

**What you can realistically expect by Month 6:**
- Top 5 visibility for 3–5 specific local queries ("dental implants Howick", "dentist Botany", your strongest service pages)
- Measurable organic CTR lift from meta descriptions and schema rich results
- Mobile PageSpeed 70+, Core Web Vitals passing in Search Console
- Clean crawl — no 404s, sitemap submitted, index coverage healthy
- GBP actively managed with posts and prompt review responses

**What you should not expect:**
Significant domain authority growth, broad link building, or top-3 positions for competitive head terms like "Auckland dentist" — that requires content investment and link acquisition well beyond $150/month. I'll tell you clearly and in advance when a goal is outside what the current budget can realistically support. I'd rather set the right expectations now than oversell and under-deliver.

---

## Closing

I won't pitch an inflated forecast to win this contract. $150/month buys disciplined technical maintenance and incremental local SEO — done properly and consistently, that's genuinely valuable for a practice your size and compounds over time.

If the first month demonstrates the quality and responsiveness you need, I'd welcome a long-term working relationship.

Available to start immediately.

— Sumair

---

> **Before submitting:** Fill in the three portfolio URLs in Question 1 and your timezone/hours in Question 4.
