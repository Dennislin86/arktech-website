import type { Metadata } from "next";
import { CompanyPage } from "@/components/CompanyPage";
import { site } from "@/lib/site";

const pageUrl = `${site.url}/company/`;
const pageTitle = "About Arktech | Export Tooling & Injection Molding Company";
const pageDescription = "Learn about Arktech’s engineering, export injection mold manufacturing, mold validation and plastic injection molding capabilities for international product and molding companies.";

export const metadata: Metadata = {
  title: { absolute: pageTitle },
  description: pageDescription,
  alternates: { canonical: pageUrl },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    type: "website",
    url: pageUrl,
    images: [{
      url: "/images/factory-workshop/injection-mold-assembly-workshop.webp",
      alt: "Arktech injection mold assembly workshop in Dongguan"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: pageTitle,
    description: pageDescription,
    images: ["/images/factory-workshop/injection-mold-assembly-workshop.webp"]
  }
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${pageUrl}#webpage`,
    url: pageUrl,
    name: pageTitle,
    description: pageDescription,
    isPartOf: { "@id": `${site.url}/#website` },
    mainEntity: { "@id": `${site.url}/#organization` }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Company", item: pageUrl }
    ]
  }
];

export default function CompanyRoute() {
  return (
    <>
      {structuredData.map((schema, index) => (
        <script
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }}
          key={index}
          type="application/ld+json"
        />
      ))}
      <CompanyPage />
    </>
  );
}
