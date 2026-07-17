import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { industryPages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return industryPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description
  };
}

export default async function IndustryDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = industryPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return <DetailPage page={page} parentHref="/industries" parentLabel="Industries" />;
}
