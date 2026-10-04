import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { IndustryLandingPage } from "@/components/IndustryLandingPage";
import { industryLandingPageBySlug, industryLandingPages } from "@/lib/industry-landing-pages";
import { industryPages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

const legacyNonIndexableIndustrySlugs = new Set(["industrial-automation", "outdoor-products"]);

export function generateStaticParams() {
  return [...new Set([...industryLandingPages.map((page) => page.slug), ...industryPages.map((page) => page.slug)])].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landingPage = industryLandingPageBySlug.get(slug);
  const page = industryPages.find((item) => item.slug === slug);

  if (landingPage) {
    return {
      title: { absolute: landingPage.seoTitle },
      description: landingPage.metaDescription,
      alternates: { canonical: `/industries/${landingPage.slug}` },
      openGraph: {
        title: landingPage.seoTitle,
        description: landingPage.metaDescription,
        url: `/industries/${landingPage.slug}`,
        type: "website",
        images: [{ url: landingPage.heroImage, alt: landingPage.heroAlt }]
      }
    };
  }

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/industries/${page.slug}` },
    robots: legacyNonIndexableIndustrySlugs.has(page.slug) ? { index: false, follow: true } : undefined
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const landingPage = industryLandingPageBySlug.get(slug);
  const page = industryPages.find((item) => item.slug === slug);

  if (landingPage) {
    return <IndustryLandingPage page={landingPage} />;
  }

  if (!page) {
    notFound();
  }

  return <DetailPage page={page} parentHref="/industries" parentLabel="Industries" />;
}
