export type ServiceCategory = "medical" | "cosmetic" | "skin-cancer";

export type Service = {
  slug: string;
  category: ServiceCategory;
  title: string;            // Used in navigation
  h1: string;               // On-page H1 — keyword-rich
  metaTitle: string;        // ≤60 chars
  metaDescription: string;  // ≤155 chars
  keywords: string[];
  shortDescription: string; // For cards
  intro: string[];          // Paragraphs
  concerns: string[];       // Concerns treated
  benefits: { title: string; description: string; icon?: string }[];
  process: { step: string; title: string; description: string }[];
  expectations: {
    duration: string;
    downtime: string;
    results: string;
    sessions?: string;
    priceRange?: string;
  };
  faqs: { q: string; a: string }[];
  related: string[]; // slugs
  hero: { eyebrow: string; image?: string; imageAlt?: string };
};
