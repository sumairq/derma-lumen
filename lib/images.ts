/**
 * Central image catalogue. Keep alt text descriptive — it doubles as SEO and a11y.
 */

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Tiny base64 preview for next/image placeholder="blur". */
  blurDataURL: string;
};

// Heuristic image dimensions match originals closely enough for srcset generation;
// exact intrinsic sizing is handled by next/image at request time.
export const images = {
  /** Purpose-made home-hero portrait: glowingSkin re-keyed from cyan to the
      brand teal backdrop and pre-cropped 4:5 for the arch (see git history
      for the generation script). */
  heroPortrait: {
    src: "/images/hero-portrait.jpg",
    alt: "Woman with clear, luminous skin resting her fingertips on her cheek",
    width: 1200,
    height: 1500,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAUABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFAv/EACAQAAIBBAMAAwAAAAAAAAAAAAECAwAEESEFEjFBUYH/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAbEQACAwADAAAAAAAAAAAAAAAAAQIDEQQSMv/aAAwDAQACEQMRAD8AWsYIp5WFwzCNVLHp6axzFkvHNA1msksUugW2c/VOcS7R3BC4HZdk48qxO5e1EihXdckD4rFjakKIqUNIVrCs3ftnS51Vaz1F6Tk7/KKKXeicRLpp/9k=",
  },
  hero: {
    src: "/images/header.jpg",
    alt: "Board-certified dermatologist examining a patient's face during a cosmetic consultation",
    width: 1500,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQEG/8QAIRAAAgEDBAMBAAAAAAAAAAAAAQIRAAMEISJRYQUSMXH/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/EABURAQEAAAAAAAAAAAAAAAAAADEA/9oADAMBAAIRAxEAPwDRJl23KxMFQwP6Jo/PxWzLzBQiqSCWI3acdVPGWLa5uSqrARx6iTp90HXVKJtkDk1LIX//2Q==",
  },
  glowingSkin: {
    src: "/images/pexels-shiny-diamond-3762100.jpg",
    alt: "Profile of a woman with clear, healthy skin gently touching her cheek",
    width: 1500,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABAID/8QAIBAAAgIBAwUAAAAAAAAAAAAAAQIDEQAEBSESEyIyYf/EABUBAQEAAAAAAAAAAAAAAAAAAAME/8QAGBEAAwEBAAAAAAAAAAAAAAAAAAIDIQT/2gAMAwEAAhEDEQA/ADaWFTKgcDpLC7GbbltywzxywlUjdQO0q0L5s/MmD2XHv5bcS3JHIvGrlFIufYuf/9k=",
  },
  injection: {
    src: "/images/pexels-shvetsa-4586708.jpg",
    alt: "Dermatology provider performing a precise cosmetic injection in a clinical setting",
    width: 1500,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgP/xAAgEAACAQMEAwAAAAAAAAAAAAABAgMAESEEBhITIjFR/8QAFAEBAAAAAAAAAAAAAAAAAAAAAv/EABcRAQEBAQAAAAAAAAAAAAAAAAEAESH/2gAMAwEAAhEDEQA/AEJ1rSz9YFlVrMAcmqzyorZ8R8NHmmkXdjRBz1mMHjfHqknEWBtkiiLrPmX/2Q==",
  },
  laser: {
    src: "/images/pexels-kerimeveyik-36930734.jpg",
    alt: "Dermatology laser device being used during an in-office treatment",
    width: 1080,
    height: 1920,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAAcABADASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAwQAAgX/xAAjEAACAgEDAwUAAAAAAAAAAAABAgMRAAQSISIxUQVBcaHB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEDBP/EABkRAAMAAwAAAAAAAAAAAAAAAAABERIhMf/aAAwDAQACEQMRAD8A25NyKeOrxlYmLHkVkT1XT6nUGGJW3pdkiqPjDvIge+5qrHbCoWLEJYkhmM7LweHH784whWtyEFfcYIOZUbeAa+8X2iPhOkeMjw0WrZ//2Q==",
  },
  maskTreatment: {
    src: "/images/pexels-gustavo-fring-7446682.jpg",
    alt: "Aesthetician applying a clinical mask treatment to a relaxed patient",
    width: 1500,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAQMEBf/EACAQAAICAgEFAQAAAAAAAAAAAAECAxEABCEFEhMiQaH/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/ANEaibGmsYlaK6a4+Ko5YsLRRoglaQEeztVn8wdHjRtGJioLGxf3G9SPh1D4/Xt4FfOMg//Z",
  },
  skinExam: {
    src: "/images/pexels-gustavo-fring-7446680.jpg",
    alt: "Dermatologist performing a detailed skin examination under magnification",
    width: 1500,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQID/8QAIBAAAgIDAAEFAAAAAAAAAAAAAQIDEQAEIRITMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAH/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwBjXjWJB6qCwAFKjtfpyNfRlin2NhJA0clkLd2R7EfXOYnDGjxL5qG8h2xeZSRJrArCCq0TVk/GBf/Z",
  },
  matureTreatment: {
    src: "/images/pexels-cottonbro-7582564.jpg",
    alt: "Dermatology provider gently treating a mature patient's facial skin",
    width: 1500,
    height: 1000,
    blurDataURL:
      "data:image/jpeg;base64,/9j/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAALABADASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAQME/8QAIxAAAQMDAgcAAAAAAAAAAAAAAQIDEQASMRNxBCEiQUJRgf/EABUBAQEAAAAAAAAAAAAAAAAAAAEC/8QAGBEBAQADAAAAAAAAAAAAAAAAAQACETH/2gAMAwEAAhEDEQA/ALNayGjqLTN3kMc9qXFg3uiwoAgGe23ugLKnOozJAMisnEqIK0jE4+0G+15AF//Z",
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
