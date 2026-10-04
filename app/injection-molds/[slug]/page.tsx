import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MoldTypePage } from "@/components/MoldTypePage";
import { MultiCavityMoldsPage } from "@/components/MultiCavityMoldsPage";
import { ToolingSupportPage } from "@/components/ToolingSupportPage";
import { moldTypePageMap, moldTypeSlugs } from "@/lib/mold-type-pages";
import { site } from "@/lib/site";
import { isToolingSupportSlug, toolingSupportPages, toolingSupportSlugs } from "@/lib/tooling-support-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    { slug: "multi-cavity-molds" },
    ...moldTypeSlugs.map((slug) => ({ slug })),
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
  const canonical = `${site.url}/injection-molds/${slug}/`;
  if (slug === "multi-cavity-molds") {
    const title = "Multi-Cavity Injection Molds & Tooling | Arktech";
    const description = "Design and manufacturing of multi-cavity injection molds with balanced filling, cooling, cavity-to-cavity consistency, mold trials and dimensional validation for production.";
    return { title: { absolute: title }, description, alternates: { canonical }, openGraph: { title, description, type: "website", url: canonical, images: [{ url: "/images/mold-types/multi-cavity-injection-molds.webp", alt: "Multi-cavity injection mold with repeated production cavities" }] } };
  }
  const page = moldTypePageMap[slug];
  if (!page) return {};
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: { title: page.seoTitle, description: page.metaDescription, type: "website", url: canonical, images: [{ url: page.heroImage, alt: page.heroAlt }] }
  };
}

export default async function InjectionMoldDetailPage({ params }: PageProps) {
  const { slug } = await params;
  if (isToolingSupportSlug(slug)) return <ToolingSupportPage slug={slug} />;
  if (slug === "multi-cavity-molds") return <MultiCavityMoldsPage />;
  const page = moldTypePageMap[slug];
  if (!page) notFound();
  return <MoldTypePage page={page} />;
}
