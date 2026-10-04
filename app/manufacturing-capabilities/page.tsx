import type { Metadata } from "next";
import { ManufacturingCapabilitiesPage } from "@/components/ManufacturingCapabilitiesPage";
import { site } from "@/lib/site";

const title = "Injection Mold Manufacturing & Plastic Injection Molding Capabilities | Arktech";
const description = "Explore Arktech injection mold manufacturing and plastic injection molding capabilities, including DFM, mold trials, validation, production and supporting manufacturing processes.";
const canonical = `${site.url}/manufacturing-capabilities/`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{
      url: "/images/hero/tooling-mold-trial-engineering-capabilities.webp",
      alt: "Injection mold tooling, mold trial and engineering support at Arktech Mold"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/hero/tooling-mold-trial-engineering-capabilities.webp"]
  }
};

const schemas = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: "Injection Mold & Plastic Manufacturing Capabilities",
    description,
    isPartOf: { "@id": `${site.url}/#website` },
    about: { "@id": `${site.url}/#organization` },
    breadcrumb: { "@id": `${canonical}#breadcrumb` }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${canonical}#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
      { "@type": "ListItem", position: 2, name: "Manufacturing Capabilities", item: canonical }
    ]
  }
];

export default function ManufacturingCapabilitiesRoute() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replaceAll("<", "\\u003c") }} />
      <ManufacturingCapabilitiesPage />
    </>
  );
}
