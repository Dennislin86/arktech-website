import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { IndustryLandingPage } from "@/components/IndustryLandingPage";
import { industryLandingPageBySlug, industryLandingPages } from "@/lib/industry-landing-pages";
import { site } from "@/lib/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const landingPage = industryLandingPageBySlug.get(slug);

  if (landingPage) {
    const canonical = `${site.url}/industries/${landingPage.slug}`;
    return {
      title: { absolute: landingPage.seoTitle },
      description: landingPage.metaDescription,
      alternates: { canonical },
      openGraph: {
        title: landingPage.seoTitle,
        description: landingPage.metaDescription,
        url: canonical,
        type: "website",
        images: [{ url: landingPage.heroImage, alt: landingPage.heroAlt }]
      },
      twitter: { card: "summary_large_image", title: landingPage.seoTitle, description: landingPage.metaDescription, images: [landingPage.heroImage] }
    };
  }
  return {};
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const landingPage = industryLandingPageBySlug.get(slug);

  if (landingPage) {
    return <IndustryLandingPage page={landingPage} />;
  }
  notFound();
}
