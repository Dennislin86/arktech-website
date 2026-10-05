import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AnalyticsManager } from "@/components/AnalyticsManager";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const isProduction = process.env.VERCEL_ENV === "production";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Arktech Mold | Plastic Tooling & Molding Partner for OEMs",
    template: "%s | Arktech Mold"
  },
  description: site.description,
  robots: {
    index: isProduction,
    follow: isProduction,
    googleBot: {
      index: isProduction,
      follow: isProduction
    }
  },
  icons: {
    icon: "/favicon-arktech.png",
    apple: "/apple-touch-icon.png"
  },
  keywords: [
    "tooling and manufacturing partner",
    "export injection molds",
    "plastic injection molding",
    "die casting molds",
    "CNC machined metal parts",
    "OEM plastic and metal components",
    "DFM engineering support",
    "export mold tooling",
    "injection molding companies Europe",
    "injection molding companies North America"
  ],
  openGraph: {
    title: "Arktech Mold",
    description: site.description,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/images/hero/export-injection-mold-manufacturing-hero.webp",
        alt: "Arktech export injection mold manufacturing"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Arktech Mold",
    description: site.description,
    images: ["/images/hero/export-injection-mold-manufacturing-hero.webp"]
  }
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.company.legalName,
  url: site.url,
  logo: `${site.url}/images/arktech-mold-logo.png`,
  email: site.email,
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: "R1702, Lingxingyu Technology Building, Guangming Street, Guangming District",
    addressLocality: "Shenzhen",
    addressRegion: "Guangdong",
    postalCode: "518107",
    addressCountry: "CN"
  },
  sameAs: [site.company.legacyWebsite]
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  publisher: { "@id": `${site.url}/#organization` }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <a className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-sm focus:bg-white focus:px-4 focus:py-3 focus:font-bold focus:text-[var(--brand-dark)] focus:shadow-lg" href="#main-content">
          Skip to main content
        </a>
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replaceAll("<", "\\u003c") }} type="application/ld+json" />
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema).replaceAll("<", "\\u003c") }} type="application/ld+json" />
        <Header />
        <main id="main-content">{children}</main>
        <Footer showAnalyticsPreferences={isProduction} />
        <AnalyticsManager vercelProduction={isProduction} />
      </body>
    </html>
  );
}
