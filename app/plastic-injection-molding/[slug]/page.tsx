import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InjectionMoldingProcessPage } from "@/components/InjectionMoldingProcessPage";
import { injectionMoldingProcessPageMap, injectionMoldingProcessSlugs } from "@/lib/injection-molding-process-pages";
import { site } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return injectionMoldingProcessSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = injectionMoldingProcessPageMap[slug];
  if (!page) return {};
  const canonical = `${site.url}/plastic-injection-molding/${slug}`;
  return {
    title: { absolute: page.seoTitle },
    description: page.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: page.seoTitle,
      description: page.metaDescription,
      type: "website",
      url: canonical,
      images: [{ url: page.heroImage, alt: page.heroAlt }]
    }
  };
}

export default async function InjectionMoldingProcessRoute({ params }: PageProps) {
  const { slug } = await params;
  const page = injectionMoldingProcessPageMap[slug];
  if (!page) notFound();
  return <InjectionMoldingProcessPage page={page} />;
}
