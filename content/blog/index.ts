import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

export type BlogCategory = "acne" | "aging" | "conditions" | "skin-cancer";

export type BlogFrontmatter = {
  title: string;
  description: string;
  date: string;
  category: BlogCategory;
  author: string;
  cover: string;
  keywords?: string[];
  related?: string[];
};

export type BlogPost = {
  slug: string;
  content: string;
  frontmatter: BlogFrontmatter;
  readingMinutes: number;
};

const POSTS_DIR = path.join(process.cwd(), "content", "blog", "posts");

let _cache: BlogPost[] | null = null;

export function getAllPosts(): BlogPost[] {
  if (_cache) return _cache;
  if (!fs.existsSync(POSTS_DIR)) {
    _cache = [];
    return _cache;
  }
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"));

  const posts = files.map((file) => {
    const slug = file.replace(/\.mdx?$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return {
      slug,
      content,
      frontmatter: data as BlogFrontmatter,
      readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    } satisfies BlogPost;
  });

  _cache = posts.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
  return _cache;
}

export function getPost(slug: string): BlogPost | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function getPostsByCategory(category: BlogCategory): BlogPost[] {
  return getAllPosts().filter((p) => p.frontmatter.category === category);
}

export const BLOG_CATEGORIES: Record<BlogCategory, { title: string; description: string; relatedServices: string[] }> = {
  acne: {
    title: "Acne & Oily Skin",
    description: "Evidence-based guidance on treating acne, scarring, and oily skin.",
    relatedServices: ["acne-treatment", "scar-treatment", "chemical-peels"],
  },
  aging: {
    title: "Anti-Aging & Cosmetic",
    description: "Honest perspectives on Botox, fillers, lasers, and aging well.",
    relatedServices: ["botox", "dermal-fillers", "anti-aging-treatment"],
  },
  conditions: {
    title: "Skin Conditions",
    description: "Living well with eczema, psoriasis, rosacea, and other chronic conditions.",
    relatedServices: ["eczema-treatment", "psoriasis-treatment", "rosacea-treatment"],
  },
  "skin-cancer": {
    title: "Skin Cancer & Prevention",
    description: "How to recognize, prevent, and treat skin cancer.",
    relatedServices: ["skin-cancer-screening", "mole-removal"],
  },
};
