import type { MetadataRoute } from "next";
import { clinic } from "@/content/clinic";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: clinic.name,
    short_name: "Lumen",
    description: clinic.description,
    start_url: "/",
    display: "standalone",
    background_color: "#FAF6F0",
    theme_color: "#0F4F4A",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
