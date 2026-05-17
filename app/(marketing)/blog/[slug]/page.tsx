import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Badge } from "@/components/ui/Badge";
import { CTA } from "@/components/sections/CTA";
import { BlogCard } from "@/components/sections/BlogCardGrid";
import { JsonLd } from "@/components/schema/JsonLd";
import {
  getAllPosts,
  getPost,
  BLOG_CATEGORIES,
} from "@/content/blog";
import { getService } from "@/content/services";
import { articleSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { routes } from "@/lib/routes";
import { getBlogPostImage } from "@/lib/images";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.description,
    path: routes.blogPost(slug),
    keywords: post.frontmatter.keywords,
    image: post.frontmatter.cover,
    type: "article",
    publishedTime: post.frontmatter.date,
    authors: [post.frontmatter.author],
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const cat = BLOG_CATEGORIES[post.frontmatter.category];
  const cover = getBlogPostImage(post.slug);
  const allPosts = getAllPosts();
  const related = allPosts
    .filter((p) => p.frontmatter.category === post.frontmatter.category && p.slug !== post.slug)
    .slice(0, 3);
  const relatedServices = (post.frontmatter.related ?? cat.relatedServices)
    .map((s) => getService(s))
    .filter((s): s is NonNullable<ReturnType<typeof getService>> => Boolean(s))
    .slice(0, 3);

  return (
    <>
      <JsonLd schema={[
        breadcrumbSchema([
          { name: "Blog", path: routes.blog },
          { name: cat.title, path: routes.blogCategory(post.frontmatter.category) },
          { name: post.frontmatter.title, path: routes.blogPost(post.slug) },
        ]),
        articleSchema({
          title: post.frontmatter.title,
          description: post.frontmatter.description,
          path: routes.blogPost(post.slug),
          image: post.frontmatter.cover,
          datePublished: post.frontmatter.date,
          authorName: post.frontmatter.author,
        }),
      ]} />

      <section className="pt-10 pb-12 sm:pt-12 lg:pt-16">
        <Container size="narrow">
          <Breadcrumbs items={[
            { name: "Blog", path: routes.blog },
            { name: cat.title, path: routes.blogCategory(post.frontmatter.category) },
            { name: post.frontmatter.title, path: routes.blogPost(post.slug), current: true },
          ]} />
          <div className="mt-8">
            <Badge tone="accent">{cat.title}</Badge>
            <h1 className="mt-5 text-balance font-display text-4xl font-medium leading-[1.05] tracking-[-0.02em] sm:text-5xl lg:text-6xl">
              {post.frontmatter.title}
            </h1>
            <p className="mt-5 text-pretty text-xl text-[color:var(--color-ink-2)]">
              {post.frontmatter.description}
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-4 border-y border-[color:var(--color-line)] py-4 text-sm text-[color:var(--color-muted)]">
              <span className="font-medium text-[color:var(--color-ink)]">
                By {post.frontmatter.author}
              </span>
              <span>·</span>
              <time dateTime={post.frontmatter.date}>
                {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </time>
              <span>·</span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" aria-hidden />
                {post.readingMinutes} min read
              </span>
            </div>
          </div>
        </Container>
      </section>

      <Container size="narrow">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[28px] bg-[color:var(--color-surface-2)]">
          <Image
            src={cover.src}
            alt={cover.alt}
            fill
            priority
            unoptimized
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>
      </Container>

      <Section className="!pt-0 !pb-16">
        <Container size="narrow">
          <article className="prose-clinical text-lg leading-relaxed [&>h2]:font-display [&>h2]:text-3xl [&>h2]:font-medium [&>h2]:mt-12 [&>h2]:mb-4 [&>h3]:font-display [&>h3]:text-2xl [&>h3]:font-medium [&>h3]:mt-10 [&>h3]:mb-3 [&>p]:my-5 [&>ul]:my-5 [&>ul>li]:my-1.5 [&>ul]:pl-6 [&>ul]:list-disc [&_table]:my-6 [&_table]:w-full [&_th]:text-left [&_th]:py-2 [&_th]:border-b [&_th]:border-[color:var(--color-line-strong)] [&_td]:py-2 [&_td]:border-b [&_td]:border-[color:var(--color-line)] [&_a]:text-[color:var(--color-accent)] [&_a]:underline [&_a]:underline-offset-2">
            <MDXRemote source={post.content} />
          </article>

          <aside className="mt-16 rounded-3xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] p-8">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
              About the author
            </p>
            <h3 className="mt-3 font-display text-2xl font-medium">{post.frontmatter.author}</h3>
            <p className="mt-2 text-[color:var(--color-ink-2)]">
              Board-certified dermatologist at Lumen Dermatology. This article reflects current dermatologic evidence and our clinical experience caring for patients in Austin.
            </p>
            <Link href={routes.team} className="mt-4 inline-flex text-sm font-medium text-[color:var(--color-accent)] hover:underline">
              Meet the team →
            </Link>
          </aside>
        </Container>
      </Section>

      {relatedServices.length ? (
        <Section tone="surface">
          <Container>
            <h2 className="mb-10 font-display text-3xl font-medium tracking-tight">
              Treatments mentioned in this article
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={routes.service(s.slug)}
                    className="block rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg)] p-6 transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]"
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
      ) : null}

      {related.length ? (
        <Section>
          <Container>
            <h2 className="mb-10 font-display text-3xl font-medium tracking-tight">
              More from {cat.title}
            </h2>
            <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <li key={p.slug}>
                  <BlogCard post={p} />
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      <Section>
        <CTA />
      </Section>
    </>
  );
}
