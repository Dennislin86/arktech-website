import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { solutionPages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return solutionPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = solutionPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description
  };
}

export default async function SolutionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = solutionPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return <DetailPage page={page} parentHref="/solutions" parentLabel="Solutions" />;
}
