import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SeoLandingPage } from "@/components/SeoLandingPage";
import { getSeoPage, seoPages } from "@/lib/seo-pages";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: { absolute: page.metaTitle },
    description: page.metaDescription,
    alternates: { canonical: `/seo/${page.slug}` },
    openGraph: {
      type: "website",
      url: `${site.url}/seo/${page.slug}`,
      title: page.metaTitle,
      description: page.metaDescription,
      images: [{ url: page.heroImage, alt: page.heroAlt }]
    }
  };
}

export default async function SeoDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  return <SeoLandingPage page={page} />;
}
