import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { toolingExamplePages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return toolingExamplePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = toolingExamplePages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  const metadataBySlug: Record<string, Pick<Metadata, "title" | "description">> = {
    "multi-cavity-molds": {
      title: "Multi-Cavity Injection Mold Manufacturer | Arktech Mold",
      description:
        "Multi-cavity injection molds engineered for balanced filling, cooling, cavity consistency, mold trials, inspection and export production transfer."
    },
    "hot-runner-molds": {
      title: "Hot Runner Injection Mold Manufacturer | Valve Gate & Open Gate",
      description:
        "Hot runner molds with open-gate or valve-gate systems, thermal balance review, serviceable wiring, mold trials and spare component planning."
    },
    "insert-molds": {
      title: "Insert Molding Mold Manufacturer for Plastic-Metal Parts",
      description:
        "Insert molding tools designed for stable insert positioning, manual or automated loading, flash control, pull-out testing and production transfer."
    },
    "overmolding-tools": {
      title: "Overmolding Mold Manufacturer | TPE and Multi-Material Tooling",
      description:
        "Overmolding molds for TPE, TPU and multi-material parts with substrate positioning, bonding review, flash control and production validation."
    },
    "unscrewing-molds": {
      title: "Unscrewing Mold Manufacturer for Threaded Plastic Parts",
      description:
        "Unscrewing molds for internal and external threads using rack, gear, hydraulic, motor-driven or collapsible-core mechanisms."
    },
    "two-shot-2k-molds": {
      title: "Two-Shot Injection Mold Manufacturer | 2K Mold Tooling",
      description:
        "Two-shot and 2K molds matched to machine configuration, rotary systems, material bonding, transition-line control and production validation."
    },
    "large-component-molds": {
      title: "Large Part Injection Mold Manufacturer | Arktech Mold",
      description:
        "Large injection molds engineered for controlled filling, cooling, warpage, machine compatibility, lifting, sampling and export delivery."
    },
    "gas-assisted-injection-molds": {
      title: "Gas-Assisted Injection Mold Manufacturer | Gas Assist Tooling",
      description:
        "Gas-assisted injection molds with gas-channel design, gas-pin planning, pressure and timing validation, sectioning and process documentation."
    },
    "thermoset-molds": {
      title: "BMC and Thermoset Injection Mold Manufacturer | Arktech Mold",
      description:
        "BMC and thermoset mold support for electrical and heat-resistant parts with curing, venting, flash control, trials and export documentation."
    },
    "die-casting-molds": {
      title: "Die Casting Tooling for Aluminum & Zinc Parts",
      description:
        "Die casting tooling for aluminum and zinc components with alloy flow review, venting, overflow, die trials, machining allowance and inspection."
    }
  };

  const metadata = metadataBySlug[page.slug] ?? { title: page.title, description: page.description };

  return {
    ...metadata,
    robots: page.slug === "die-casting-molds" ? { index: false, follow: true } : undefined,
    alternates: {
      canonical: `/tooling-examples/${page.slug}`
    },
    openGraph: {
      title: String(metadata.title),
      description: metadata.description ?? page.description,
      url: `/tooling-examples/${page.slug}`
    }
  };
}

export default async function ToolingExampleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = toolingExamplePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return <DetailPage page={page} parentHref="/tooling-examples" parentLabel="Injection Mold Types" showGlobalCta={false} />;
}
