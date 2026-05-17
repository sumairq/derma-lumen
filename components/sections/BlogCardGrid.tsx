import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import type { BlogPost } from "@/content/blog";
import { BLOG_CATEGORIES } from "@/content/blog";
import { routes } from "@/lib/routes";
import { getBlogPostImage } from "@/lib/images";

export function BlogCardGrid({
  posts,
  heading = "From the journal",
  eyebrow = "Insights",
  description = "Evidence-based articles from our dermatologists — written for patients, not search engines.",
  withContainer = true,
}: {
  posts: BlogPost[];
  heading?: string;
  eyebrow?: string;
  description?: string;
  withContainer?: boolean;
}) {
  const inner = (
    <>
      <SectionHeading eyebrow={eyebrow} title={heading} description={description} />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
  return withContainer ? <Container>{inner}</Container> : inner;
}

export function BlogCard({ post }: { post: BlogPost }) {
  const cat = BLOG_CATEGORIES[post.frontmatter.category];
  const cover = getBlogPostImage(post.slug);
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-surface)] transition-all hover:border-[color:var(--color-line-strong)] hover:shadow-[var(--shadow-soft)]">
      <Link
        href={routes.blogPost(post.slug)}
        className="block aspect-[16/10] relative overflow-hidden bg-[color:var(--color-surface-2)]"
        aria-label={post.frontmatter.title}
      >
        <Image
          src={cover.src}
          alt={cover.alt}
          fill
          quality={100}
          sizes="(min-width: 1280px) 480px, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
        {/* Scrim behind the badge — guarantees separation even on bright photo areas */}
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[color:var(--color-ink)]/35 to-transparent"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[color:var(--color-ink)]/30 to-transparent"
        />
        <div className="absolute left-4 top-4">
          <Badge tone="solid">{cat.title}</Badge>
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs text-[color:var(--color-muted)]">
          <time dateTime={post.frontmatter.date}>
            {new Date(post.frontmatter.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span>·</span>
          <span className="inline-flex items-center gap-1">
            <Clock className="size-3" aria-hidden />
            {post.readingMinutes} min read
          </span>
        </div>
        <h3 className="mt-3 font-display text-xl font-medium leading-snug tracking-tight">
          <Link
            href={routes.blogPost(post.slug)}
            className="hover:text-[color:var(--color-accent)] transition-colors"
          >
            {post.frontmatter.title}
          </Link>
        </h3>
        <p className="mt-2 line-clamp-2 text-sm text-[color:var(--color-ink-2)]">
          {post.frontmatter.description}
        </p>
        <div className="mt-5 flex items-center justify-between border-t border-[color:var(--color-line)] pt-4 text-xs text-[color:var(--color-muted)]">
          <span>By {post.frontmatter.author}</span>
          <Link
            href={routes.blogPost(post.slug)}
            className="inline-flex items-center gap-1 font-medium text-[color:var(--color-accent)]"
          >
            Read <ArrowUpRight className="size-3" aria-hidden />
          </Link>
        </div>
      </div>
    </article>
  );
}

