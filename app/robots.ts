import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/routes";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/new-patient-intake-form", "/privacy-policy", "/terms-of-service", "/accessibility-statement"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
