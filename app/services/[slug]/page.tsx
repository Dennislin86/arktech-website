import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { DfmEngineeringPage } from "@/components/DfmEngineeringPage";
import { InjectionMoldManufacturingPage } from "@/components/InjectionMoldManufacturingPage";
import { InjectionMoldingProductionOptionsPage } from "@/components/InjectionMoldingProductionOptionsPage";
import { PlasticInjectionMoldingPage } from "@/components/PlasticInjectionMoldingPage";
import { servicePages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  if (slug === "injection-mold-manufacturing") {
    return {
      title: "Export Injection Mold Manufacturing",
      description:
        "Arktech manufactures export-ready injection molds with DFM engineering, mold design, CNC and EDM machining, fitting, mold trials, validation, tooling documentation, spare parts and export preparation."
    };
  }

  if (slug === "plastic-injection-molding") {
    return {
      title: { absolute: "Custom Plastic Injection Molding Services | Arktech Mold" },
      description:
        "Custom plastic injection molding services from prototype and low-volume molding to scalable production, inspection, secondary operations and assembly for global OEM projects.",
      alternates: { canonical: "/services/plastic-injection-molding" }
    };
  }

  if (slug === "dfm-engineering") {
    return {
      title: { absolute: "DFM Engineering for Injection Molding | Arktech Mold" },
      description:
        "Arktech provides DFM engineering for plastic injection molded parts, reviewing wall thickness, draft, ribs, bosses, undercuts, gating, ejection, materials, tolerances and tooling risks before mold design.",
      alternates: { canonical: "/services/dfm-engineering" }
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
    description: page.description
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

  if (slug === "dfm-engineering") {
    return <DfmEngineeringPage />;
  }

  if (slug === "injection-molding-production-options") {
    return <InjectionMoldingProductionOptionsPage />;
  }

  return <DetailPage page={page} parentHref="/services" parentLabel="Services" />;
}
