import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { MultiCavityMoldsPage } from "@/components/MultiCavityMoldsPage";
import { ToolingSupportPage } from "@/components/ToolingSupportPage";
import { toolingExamplePages } from "@/lib/page-data";
import { site } from "@/lib/site";
import { isToolingSupportSlug, toolingSupportPages, toolingSupportSlugs } from "@/lib/tooling-support-pages";

type PageProps = { params: Promise<{ slug: string }> };

const slugAliases: Record<string, string> = {
  "large-injection-molds": "large-component-molds",
  "insert-molding-tools": "insert-molds"
};

const publicSlug = (dataSlug: string) => dataSlug === "large-component-molds" ? "large-injection-molds" : dataSlug === "insert-molds" ? "insert-molding-tools" : dataSlug;

const seo: Record<string, { title: string; description: string }> = {
  "multi-cavity-molds": { title: "Multi-Cavity Injection Mold Manufacturer | Arktech", description: "Multi-cavity injection molds engineered for balanced filling, cooling, repeatable dimensions and production output, with DFM, mold trials and export tooling support." },
  "large-injection-molds": { title: "Large Injection Mold Manufacturing | Arktech", description: "Large injection molds for housings, panels and structural plastic components, with cooling, warpage, machine compatibility, trial and export tooling support." },
  "insert-molding-tools": { title: "Insert Molding Tool Design & Manufacturing | Arktech", description: "Insert molding tool design and manufacturing for plastic parts with integrated metal inserts, terminals, bushings and prepared components." },
  "overmolding-tools": { title: "Overmolding Tool Design & Manufacturing | Arktech", description: "Overmolding tool design and manufacturing with DFM review of substrate location, material compatibility, shutoffs, bonding and validation." },
  "two-shot-2k-molds": { title: "Two-Shot Injection Mold Manufacturer (2K) | Arktech", description: "Two-shot and 2K injection molds for multi-material and two-color parts, with machine compatibility, tooling engineering and validation support." },
  "unscrewing-molds": { title: "Unscrewing Injection Mold Manufacturer | Arktech", description: "Unscrewing injection molds for threaded plastic components requiring controlled core rotation, release validation and export tooling documentation." },
  "hot-runner-molds": { title: "Hot Runner Injection Mold Manufacturing | Arktech", description: "Hot runner injection mold manufacturing with runner, gate, resin, cavity-balance, controller and export tooling requirements reviewed before release." }
};

const displayOverrides: Record<string, { title: string; heroTitle: string }> = {
  "large-component-molds": { title: "Large Injection Molds", heroTitle: "Large injection molds for housings, panels and structural plastic parts." },
  "insert-molds": { title: "Insert Molding Tools", heroTitle: "Insert molding tools for integrated metal and plastic components." },
  "overmolding-tools": { title: "Overmolding Tools", heroTitle: "Overmolding tools for integrated multi-material components." },
  "two-shot-2k-molds": { title: "Two-Shot Injection Molds (2K)", heroTitle: "Two-shot 2K injection molds for integrated multi-material parts." },
  "unscrewing-molds": { title: "Unscrewing Injection Molds", heroTitle: "Unscrewing injection molds for threaded plastic components." },
  "hot-runner-molds": { title: "Hot Runner Injection Molds", heroTitle: "Hot runner injection molds for controlled production molding." }
};

export function generateStaticParams() {
  return [
    ...toolingExamplePages.filter((page) => page.slug !== "die-casting-molds").map((page) => ({ slug: publicSlug(page.slug) })),
    ...toolingSupportSlugs.map((slug) => ({ slug }))
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  if (isToolingSupportSlug(slug)) {
    const page = toolingSupportPages[slug];
    const canonical = `${site.url}/injection-molds/${slug}/`;
    return {
      title: { absolute: page.seoTitle },
      description: page.description,
      alternates: { canonical },
      openGraph: {
        title: page.seoTitle,
        description: page.description,
        type: "website",
        url: canonical,
        images: [{ url: page.ogImage, alt: page.heroAlt }]
      }
    };
  }
  if (slug === "large-component-molds" || slug === "insert-molds" || slug === "die-casting-molds") return {};
  const sourceSlug = slugAliases[slug] ?? slug;
  const page = toolingExamplePages.find((item) => item.slug === sourceSlug);
  if (!page) return {};
  const canonical = `${site.url}/injection-molds/${slug}/`;
  const pageSeo = seo[slug] ?? { title: page.title, description: page.description };
  return {
    title: { absolute: pageSeo.title },
    description: pageSeo.description,
    alternates: { canonical },
    openGraph: { title: pageSeo.title, description: pageSeo.description, type: "website", url: canonical }
  };
}

export default async function InjectionMoldDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (isToolingSupportSlug(slug)) return <ToolingSupportPage slug={slug} />;
  if (slug === "large-component-molds" || slug === "insert-molds" || slug === "die-casting-molds") notFound();
  const sourceSlug = slugAliases[slug] ?? slug;
  const page = toolingExamplePages.find((item) => item.slug === sourceSlug);
  if (!page) notFound();
  if (sourceSlug === "multi-cavity-molds") return <MultiCavityMoldsPage />;
  const displayPage = displayOverrides[sourceSlug] ? { ...page, ...displayOverrides[sourceSlug] } : page;
  return <DetailPage canonicalUrl={`${site.url}/injection-molds/${slug}/`} includeSiteCta={false} page={displayPage} parentHref="/injection-molds" parentLabel="Injection Molds" />;
}
