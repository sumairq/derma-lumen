import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import { JsonLd } from "@/components/schema/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/schema";
import { SITE_URL } from "@/lib/routes";
import { clinic } from "@/content/clinic";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["400", "500", "600"],
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#0F4F4A",
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${clinic.name} — Premier Dermatology in Austin, TX`,
    template: `%s | ${clinic.name}`,
  },
  description: clinic.description,
  applicationName: clinic.name,
  authors: [{ name: clinic.name, url: SITE_URL }],
  creator: clinic.name,
  publisher: clinic.legalName,
  category: "health",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="min-h-screen antialiased">
        <a href="#main" className="skip-link">
          Skip to main content
        </a>
        {children}
        <JsonLd
          schema={[
            localBusinessSchema(),
            organizationSchema(),
            websiteSchema(),
          ]}
        />
      </body>
    </html>
  );
}
