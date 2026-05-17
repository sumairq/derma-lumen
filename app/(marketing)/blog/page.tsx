import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCardGrid } from "@/components/sections/BlogCardGrid";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { getAllPosts, BLOG_CATEGORIES, type BlogCategory } from "@/content/blog";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = buildMetadata({
  title: "Dermatology Journal — Evidence-Based Skincare",
  description:
    "Practical, evidence-based articles from board-certified dermatologists on acne, aging, skin conditions, and skin cancer.",
  path: routes.blog,
});

export default function BlogIndexPage() {
  const posts = getAllPosts();
  const cats = Object.keys(BLOG_CATEGORIES) as BlogCategory[];

  return (
    <>
      <JsonLd schema={breadcrumbSchema([{ name: "Blog", path: routes.blog }])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[{ name: "Blog", path: routes.blog, current: true }]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Journal</SectionEyebrow>
            <h1 className="mt-5 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] sm:text-6xl lg:text-7xl">
              Honest dermatology, in plain language.
            </h1>
            <p className="mt-6 max-w-3xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              Articles written by our dermatologists for our patients. No fluff, no fearmongering, no affiliate links.
            </p>
            <nav aria-label="Blog categories" className="mt-8 flex flex-wrap gap-2">
              {cats.map((c) => (
                <Link
                  key={c}
                  href={routes.blogCategory(c)}
                  className="rounded-full border border-[color:var(--color-line-strong)] px-4 py-1.5 text-sm text-[color:var(--color-ink-2)] hover:border-[color:var(--color-accent)] hover:text-[color:var(--color-accent)]"
                >
                  {BLOG_CATEGORIES[c].title}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </section>

      <Section tone="surface" className="!pt-12">
        <BlogCardGrid posts={posts} heading="Latest articles" eyebrow="All posts" />
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
