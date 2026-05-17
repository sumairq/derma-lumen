export const routes = {
  home: "/",
  about: "/about-us",
  team: "/meet-the-team",
  contact: "/contact-us",
  newPatients: "/new-patients",
  intake: "/new-patient-intake-form",
  payment: "/payment-options",
  faq: "/frequently-asked-questions",
  services: "/services",
  blog: "/blog",
  blogCategory: (slug: string) => `/blog/category/${slug}`,
  blogPost: (slug: string) => `/blog/${slug}`,
  service: (slug: string) => `/${slug}`,
  privacy: "/privacy-policy",
  terms: "/terms-of-service",
  accessibility: "/accessibility-statement",
} as const;

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://lumendermatology.example.com";
