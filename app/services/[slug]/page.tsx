import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { InjectionMoldManufacturingPage } from "@/components/InjectionMoldManufacturingPage";
import { InjectionMoldingProductionOptionsPage } from "@/components/InjectionMoldingProductionOptionsPage";
import { MoldTrialValidationPage } from "@/components/MoldTrialValidationPage";
import { PlasticInjectionMoldingPage } from "@/components/PlasticInjectionMoldingPage";
import { servicePages } from "@/lib/page-data";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages.filter((page) => page.slug !== "dfm-engineering").map((page) => ({ slug: page.slug }));
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

  if (slug === "mold-trial-sampling-support") {
    return {
      title: { absolute: "Mold Trial, Sampling & Validation for Injection Molds | Arktech Mold" },
      description:
        "Structured injection mold trials with sample review, molding parameter records, dimensional inspection, correction loops and validation before tooling approval and export delivery.",
      alternates: { canonical: "/services/mold-trial-sampling-support" },
      openGraph: {
        title: "Mold Trial, Sampling & Validation for Injection Molds | Arktech Mold",
        description:
          "Structured injection mold trials with sample review, molding parameter records, dimensional inspection, correction loops and validation before tooling approval and export delivery.",
        type: "website",
        url: "/services/mold-trial-sampling-support",
        images: [
          {
            url: "/images/Mold trail/Mold trial video photos.png",
            alt: "Injection mold installed in a molding machine for trial and validation"
          }
        ]
      }
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

  if (slug === "mold-trial-sampling-support") {
    return <MoldTrialValidationPage />;
  }

  return <DetailPage page={page} parentHref="/manufacturing-capabilities" parentLabel="Capabilities" />;
}
