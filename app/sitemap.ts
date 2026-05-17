import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/routes";
import { allServiceSlugs } from "@/content/services";
import { getAllPosts, BLOG_CATEGORIES } from "@/content/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticRoutes: { path: string; priority: number; changeFrequency: "monthly" | "weekly" | "yearly" }[] = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" },
    { path: "/about-us", priority: 0.7, changeFrequency: "yearly" },
    { path: "/meet-the-team", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" },
    { path: "/new-patients", priority: 0.8, changeFrequency: "monthly" },
    { path: "/payment-options", priority: 0.7, changeFrequency: "monthly" },
    { path: "/frequently-asked-questions", priority: 0.7, changeFrequency: "monthly" },
    { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  ];

  const serviceRoutes = allServiceSlugs.map((slug) => ({
    path: `/${slug}`,
    priority: 0.9,
    changeFrequency: "monthly" as const,
  }));

  const categoryRoutes = Object.keys(BLOG_CATEGORIES).map((c) => ({
    path: `/blog/category/${c}`,
    priority: 0.6,
    changeFrequency: "weekly" as const,
  }));

  const blogPostRoutes = getAllPosts().map((p) => ({
    path: `/blog/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
    lastModified: new Date(p.frontmatter.date),
  }));

  type Row = {
    path: string;
    priority: number;
    changeFrequency: "monthly" | "weekly" | "yearly";
    lastModified?: Date;
  };

  const all: Row[] = [
    ...staticRoutes,
    ...serviceRoutes,
    ...categoryRoutes,
    ...blogPostRoutes,
  ];

  return all.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: r.lastModified ?? now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
