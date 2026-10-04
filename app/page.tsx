import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Manufacturer & Plastic Injection Molding | Arktech" },
  description:
    "Arktech provides export injection molds, DFM, mold trials and plastic injection molding from 25–550T for product companies and injection molding companies.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Injection Mold Manufacturer & Plastic Injection Molding | Arktech",
    description:
      "Export injection molds, DFM, mold trials and 25–550T plastic injection molding for product companies and injection molding companies.",
    type: "website",
    url: site.url,
    images: [
      {
        url: "/images/hero/export-injection-mold-manufacturing-hero.webp",
        alt: "Export injection mold manufacturing at Arktech"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Injection Mold Manufacturer & Plastic Injection Molding | Arktech",
    description:
      "Export injection molds, DFM, mold trials and 25–550T plastic injection molding for global product teams.",
    images: ["/images/hero/export-injection-mold-manufacturing-hero.webp"]
  },
  keywords: [
    "injection mold manufacturer",
    "plastic injection molding",
    "export tooling",
    "custom injection molds",
    "injection mold manufacturing",
    "DFM engineering",
    "mold trial",
    "production tooling"
  ]
};

const homePageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${site.url}/#webpage`,
  url: `${site.url}/`,
  name: "Injection Mold Manufacturer & Plastic Injection Molding | Arktech",
  description:
    "Arktech provides export injection molds, DFM, mold trials and plastic injection molding from 25–550T for product companies and injection molding companies.",
  isPartOf: { "@id": `${site.url}/#website` },
  about: { "@id": `${site.url}/#organization` }
};

export default function Home() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageSchema).replaceAll("<", "\\u003c") }}
        type="application/ld+json"
      />
      <HomePage />
    </>
  );
}
