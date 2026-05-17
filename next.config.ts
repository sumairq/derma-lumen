import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    // AVIF is too aggressive on photographic skin/clinical imagery — soft, blocky look at typical
    // quality settings. WebP at high quality keeps detail far better here.
    formats: ["image/webp"],
    deviceSizes: [360, 480, 640, 750, 828, 1080, 1200, 1500, 1920, 2048, 2560, 3840],
    imageSizes: [64, 96, 128, 256, 384, 512, 640, 768],
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  async redirects() {
    return [
      {
        source: "/insurance-payment-options",
        destination: "/payment-options",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
