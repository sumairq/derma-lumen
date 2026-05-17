import type { Metadata } from "next";
import { SITE_URL } from "./routes";
import { clinic } from "@/content/clinic";

type BuildMetadataInput = {
  title: string;
  description: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  authors?: string[];
};

export function buildMetadata({
  title,
  description,
  path = "/",
  image,
  noIndex,
  keywords,
  type = "website",
  publishedTime,
  authors,
}: BuildMetadataInput): Metadata {
  const url = new URL(path, SITE_URL).toString();
  const ogImage = image ?? "/og-default.jpg";
  const fullTitle = title.includes(clinic.name)
    ? title
    : `${title} | ${clinic.name}`;

  return {
    metadataBase: new URL(SITE_URL),
    title: fullTitle,
    description,
    keywords,
    authors: authors?.map((name) => ({ name })),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: clinic.name,
      images: [{ url: ogImage, width: 1200, height: 630, alt: fullTitle }],
      locale: "en_US",
      type,
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}
