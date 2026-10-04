import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { MultiCavityMoldsPage } from "@/components/MultiCavityMoldsPage";
import { toolingExamplePages } from "@/lib/page-data";
import { site } from "@/lib/site";

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

  if (slug === "multi-cavity-molds") {
    const title = "Multi-Cavity Injection Molds for Production Tooling | Arktech Mold";
    const description = "Multi-cavity injection molds engineered for balanced filling, cooling, repeatable dimensions and production output. DFM, mold trials and export tooling support.";
    const url = `${site.url}/tooling-examples/multi-cavity-molds`;

    return {
      title: { absolute: title },
      description,
      alternates: { canonical: url },
      openGraph: {
        title,
        description,
        type: "website",
        url,
        images: [
          {
            url: "/images/mold-types/multi-cavity-injection-molds.webp",
            width: 1448,
            height: 1086,
            alt: "Multi-cavity injection mold with multiple production cavities"
          }
        ]
      }
    };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/tooling-examples/${page.slug}` }
  };
}

export default async function ToolingExampleDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = toolingExamplePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  if (slug === "multi-cavity-molds") {
    return <MultiCavityMoldsPage />;
  }

  return <DetailPage page={page} parentHref="/tooling-examples" parentLabel="Tooling Examples" />;
}
