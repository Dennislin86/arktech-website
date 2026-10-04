import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { InjectionMoldManufacturingPage } from "@/components/InjectionMoldManufacturingPage";
import { InjectionMoldingProductionOptionsPage } from "@/components/InjectionMoldingProductionOptionsPage";
import { PlasticInjectionMoldingPage } from "@/components/PlasticInjectionMoldingPage";
import { servicePages } from "@/lib/page-data";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages
    .filter((page) => !["dfm-engineering", "mold-trial-sampling-support", "tooling-spare-parts"].includes(page.slug))
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  if (slug === "injection-mold-manufacturing") {
    return {
      title: { absolute: "Injection Mold Manufacturer & Export Tooling | Arktech" },
      description:
        "Arktech manufactures export-ready injection molds with DFM engineering, mold design, CNC and EDM machining, fitting, mold trials, validation, tooling documentation, spare parts and export preparation.",
      alternates: { canonical: "/services/injection-mold-manufacturing" },
      openGraph: {
        title: "Injection Mold Manufacturer & Export Tooling | Arktech",
        description: "Export-ready injection mold manufacturing with DFM, mold trials, validation and documented tooling delivery.",
        type: "website",
        url: `${site.url}/services/injection-mold-manufacturing`,
        images: [{ url: "/images/mold-types/Precision-Molds.png", alt: "Precision export injection mold manufactured by Arktech" }]
      }
    };
  }

  if (slug === "plastic-injection-molding") {
    return {
      title: { absolute: "Custom Plastic Injection Molding 25–550T | Arktech" },
      description:
        "Custom plastic injection molding services from prototype and low-volume molding to scalable production, inspection, secondary operations and assembly for global OEM projects.",
      alternates: { canonical: "/services/plastic-injection-molding" },
      openGraph: {
        title: "Custom Plastic Injection Molding 25–550T | Arktech",
        description: "Custom plastic injection molding from prototype and low-volume builds through repeat production, inspection and assembly.",
        type: "website",
        url: `${site.url}/services/plastic-injection-molding`,
        images: [{ url: "/images/capabilities/plastic-injection-molding-production-video-frame.webp", alt: "Plastic injection molding production at Arktech" }]
      }
    };
  }

  if (slug === "injection-molding-production-options") {
    return {
      title: { absolute: "Injection Molding Production Options | Prototype to Mass Production | Arktech Mold" },
      description:
        "Explore Arktech injection molding production options from prototype builds and low-volume production through stable mass production, with tooling, DFM, inspection, secondary operations and assembly support.",
      alternates: { canonical: "/services/injection-molding-production-options" }
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/services/${page.slug}` }
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  if (slug === "injection-mold-manufacturing") {
    return <InjectionMoldManufacturingPage />;
  }

  if (slug === "plastic-injection-molding") {
    return <PlasticInjectionMoldingPage />;
  }

  if (slug === "injection-molding-production-options") {
    return <InjectionMoldingProductionOptionsPage />;
  }

  return <DetailPage page={page} parentHref="/manufacturing-capabilities" parentLabel="Capabilities" />;
}
