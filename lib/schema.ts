import { clinic } from "@/content/clinic";
import { SITE_URL } from "./routes";

const orgUrl = SITE_URL;
const orgLogo = `${SITE_URL}/logo.png`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalBusiness", "LocalBusiness", "MedicalClinic"],
    "@id": `${orgUrl}#clinic`,
    name: clinic.name,
    legalName: clinic.legalName,
    description: clinic.description,
    url: orgUrl,
    logo: orgLogo,
    image: orgLogo,
    telephone: clinic.phoneE164,
    email: clinic.email,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.street,
      addressLocality: clinic.address.city,
      addressRegion: clinic.address.region,
      postalCode: clinic.address.postalCode,
      addressCountry: clinic.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.lat,
      longitude: clinic.geo.lng,
    },
    openingHoursSpecification: clinic.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.day,
      opens: h.open,
      closes: h.close,
    })),
    sameAs: [
      clinic.socials.instagram,
      clinic.socials.facebook,
      clinic.socials.google,
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: clinic.rating.value,
      reviewCount: clinic.rating.count,
    },
    medicalSpecialty: ["Dermatology", "CosmeticProcedure", "Dermatologic"],
    foundingDate: String(clinic.founded),
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${orgUrl}#org`,
    name: clinic.name,
    url: orgUrl,
    logo: orgLogo,
    sameAs: [
      clinic.socials.instagram,
      clinic.socials.facebook,
      clinic.socials.google,
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${orgUrl}#website`,
    name: clinic.name,
    url: orgUrl,
    publisher: { "@id": `${orgUrl}#org` },
    potentialAction: {
      "@type": "SearchAction",
      target: `${orgUrl}/blog?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, SITE_URL).toString(),
    })),
  };
}

export function imageGallerySchema(input: {
  name: string;
  description: string;
  path: string;
  images: { url: string; caption: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    name: input.name,
    description: input.description,
    url: new URL(input.path, SITE_URL).toString(),
    image: input.images.map((img) => ({
      "@type": "ImageObject",
      contentUrl: new URL(img.url, SITE_URL).toString(),
      caption: img.caption,
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function medicalProcedureSchema(input: {
  name: string;
  description: string;
  path: string;
  procedureType?: string;
  bodyLocation?: string;
  preparation?: string;
  followup?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: input.name,
    description: input.description,
    url: new URL(input.path, SITE_URL).toString(),
    procedureType: input.procedureType ?? "Outpatient",
    bodyLocation: input.bodyLocation,
    preparation: input.preparation,
    followup: input.followup,
    performedBy: { "@id": `${orgUrl}#clinic` },
  };
}

export function articleSchema(input: {
  title: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: new URL(input.path, SITE_URL).toString(),
    image: input.image
      ? new URL(input.image, SITE_URL).toString()
      : undefined,
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: { "@type": "Person", name: input.authorName },
    publisher: { "@id": `${orgUrl}#org` },
    audience: { "@type": "MedicalAudience", audienceType: "Patient" },
  };
}

export function physicianSchema(input: {
  name: string;
  jobTitle: string;
  image?: string;
  specialty: string;
  bio: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: input.name,
    jobTitle: input.jobTitle,
    image: input.image,
    medicalSpecialty: input.specialty,
    description: input.bio,
    worksFor: { "@id": `${orgUrl}#clinic` },
  };
}

export function itemListSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: new URL(it.path, SITE_URL).toString(),
    })),
  };
}
