import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Section, SectionEyebrow } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { BlogCardGrid } from "@/components/sections/BlogCardGrid";
import { CTA } from "@/components/sections/CTA";
import { JsonLd } from "@/components/schema/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import {
  BLOG_CATEGORIES,
  getPostsByCategory,
  type BlogCategory,
} from "@/content/blog";
import { getService } from "@/content/services";
import { routes } from "@/lib/routes";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(BLOG_CATEGORIES).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const meta = BLOG_CATEGORIES[category as BlogCategory];
  if (!meta) return {};
  return buildMetadata({
    title: `${meta.title} Articles`,
    description: meta.description,
    path: routes.blogCategory(category),
  });
}

export default async function BlogCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = category as BlogCategory;
  const meta = BLOG_CATEGORIES[cat];
  if (!meta) notFound();

  const posts = getPostsByCategory(cat);
  const relatedServices = meta.relatedServices
    .map((slug) => getService(slug))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s));

  return (
    <>
      <JsonLd schema={breadcrumbSchema([
        { name: "Blog", path: routes.blog },
        { name: meta.title, path: routes.blogCategory(cat) },
      ])} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container>
          <Breadcrumbs items={[
            { name: "Blog", path: routes.blog },
            { name: meta.title, path: routes.blogCategory(cat), current: true },
          ]} />
          <div className="mt-8 max-w-4xl">
            <SectionEyebrow>Topic</SectionEyebrow>
            <h1 className="mt-5 font-display text-display-xl font-medium">
              {meta.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-[color:var(--color-ink-2)] sm:text-xl">
              {meta.description}
            </p>
          </div>
        </Container>
      </section>

      <Section tone="surface">
        {posts.length ? (
          <BlogCardGrid posts={posts} heading="Articles" eyebrow="Reading list" />
        ) : (
          <Container>
            <p className="text-[color:var(--color-ink-2)]">More articles coming soon.</p>
          </Container>
        )}
      </Section>

      <Section>
        <Container>
          <SectionEyebrow>Related services</SectionEyebrow>
          <h2 className="mt-4 mb-10 font-display text-4xl font-medium tracking-tight">
            Treatments related to this topic
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((s) => (
              <li key={s.slug}>
                <Link
                  href={routes.service(s.slug)}
                  className="block rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-6 transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-xl font-medium tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-[color:var(--color-ink-2)]">
                    {s.shortDescription}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </Section>

      <Section>
        <CTA />
      </Section>
    </>
  );
}
