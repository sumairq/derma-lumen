/**
 * Central image catalogue. Keep alt text descriptive — it doubles as SEO and a11y.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

// Heuristic image dimensions match originals closely enough for srcset generation;
// exact intrinsic sizing is handled by next/image at request time.
export const images = {
  hero: {
    src: "/images/header.jpg",
    alt: "Board-certified dermatologist examining a patient's face during a cosmetic consultation",
    width: 1500,
    height: 1000,
  },
  glowingSkin: {
    src: "/images/pexels-shiny-diamond-3762100.jpg",
    alt: "Profile of a woman with clear, healthy skin gently touching her cheek",
    width: 1500,
    height: 1000,
  },
  injection: {
    src: "/images/pexels-shvetsa-4586708.jpg",
    alt: "Dermatology provider performing a precise cosmetic injection in a clinical setting",
    width: 1500,
    height: 1000,
  },
  laser: {
    src: "/images/pexels-kerimeveyik-36930734.jpg",
    alt: "Dermatology laser device being used during an in-office treatment",
    width: 1080,
    height: 1920,
  },
  maskTreatment: {
    src: "/images/pexels-gustavo-fring-7446682.jpg",
    alt: "Aesthetician applying a clinical mask treatment to a relaxed patient",
    width: 1500,
    height: 1000,
  },
  skinExam: {
    src: "/images/pexels-gustavo-fring-7446680.jpg",
    alt: "Dermatologist performing a detailed skin examination under magnification",
    width: 1500,
    height: 1000,
  },
  matureTreatment: {
    src: "/images/pexels-cottonbro-7582564.jpg",
    alt: "Dermatology provider gently treating a mature patient's facial skin",
    width: 1500,
    height: 1000,
  },
} satisfies Record<string, ImageAsset>;

export type ImageKey = keyof typeof images;

/**
 * Map service slugs → the most fitting image. Falls back to the hero photo
 * so every service page has imagery.
 */
const SERVICE_IMAGE_MAP: Record<string, ImageKey> = {
  // Cosmetic — injection-based
  botox: "injection",
  "dermal-fillers": "injection",

  // Cosmetic — laser & device-based
  "laser-skin-resurfacing": "laser",
  "skin-tightening": "laser",
  microneedling: "laser",

  // Cosmetic — topical / mask-based
  "chemical-peels": "maskTreatment",
  "hyperpigmentation-treatment": "maskTreatment",
  "scar-treatment": "maskTreatment",

  // Cosmetic — anti-aging
  "anti-aging-treatment": "matureTreatment",

  // Medical — examination / diagnostic
  "skin-cancer-screening": "skinExam",
  "mole-removal": "skinExam",
  "skin-allergy-treatment": "skinExam",
  "wart-removal": "skinExam",
  "skin-infection-treatment": "skinExam",

  // Medical — chronic conditions / general medical
  "acne-treatment": "glowingSkin",
  "eczema-treatment": "matureTreatment",
  "psoriasis-treatment": "matureTreatment",
  "rosacea-treatment": "glowingSkin",
  "hair-loss-treatment": "skinExam",
};

export function getServiceImage(slug: string): ImageAsset {
  const key = SERVICE_IMAGE_MAP[slug] ?? "hero";
  return images[key];
}

/**
 * Map blog categories → category landing imagery.
 */
const BLOG_CATEGORY_IMAGE: Record<string, ImageKey> = {
  acne: "glowingSkin",
  aging: "matureTreatment",
  conditions: "skinExam",
  "skin-cancer": "skinExam",
};

export function getBlogCategoryImage(category: string): ImageAsset {
  return images[BLOG_CATEGORY_IMAGE[category] ?? "hero"];
}

const BLOG_POST_IMAGE: Record<string, ImageKey> = {
  "how-to-choose-an-acne-treatment": "glowingSkin",
  "botox-vs-fillers-which-is-right": "injection",
  "abcdes-of-melanoma": "skinExam",
  "eczema-flare-triggers": "matureTreatment",
  "sunscreen-science": "glowingSkin",
  "when-to-see-a-dermatologist": "hero",
};

export function getBlogPostImage(slug: string): ImageAsset {
  return images[BLOG_POST_IMAGE[slug] ?? "hero"];
}
