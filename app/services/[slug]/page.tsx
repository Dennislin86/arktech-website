import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { InjectionMoldingProductionOptionsPage } from "@/components/InjectionMoldingProductionOptionsPage";
import { servicePages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return servicePages
    .filter((page) => !["dfm-engineering", "injection-mold-manufacturing", "mold-trial-sampling-support", "plastic-injection-molding", "tooling-spare-parts"].includes(page.slug))
    .map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((item) => item.slug === slug);

  if (!page) {
    return {};
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

  if (slug === "injection-molding-production-options") {
    return <InjectionMoldingProductionOptionsPage />;
  }

  return <DetailPage page={page} parentHref="/manufacturing-capabilities" parentLabel="Capabilities" />;
}
