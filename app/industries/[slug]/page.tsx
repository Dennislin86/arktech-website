import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DetailPage } from "@/components/DetailPage";
import { RoboticsIndustryPage } from "@/components/RoboticsIndustryPage";
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

  if (slug === "robotics") {
    const title = "Robotics Injection Molding & Mold Manufacturing | Arktech Mold";
    const description = "Arktech supports robotics product teams with DFM engineering, export injection molds and plastic injection molding for robot housings, sensor enclosures, AMR/AGV components and precision molded parts.";

    return {
      title: { absolute: title },
      description,
      alternates: { canonical: "/industries/robotics" },
      openGraph: {
        title,
        description,
        url: "/industries/robotics",
        type: "website",
        images: [
          {
            url: "/images/industries/robotics-automation.png",
            alt: "Industrial robot handling molded robotics components in an automated production environment"
          }
        ]
      }
    };
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

  if (slug === "robotics") {
    return <RoboticsIndustryPage />;
  }

  return <DetailPage page={page} parentHref="/industries" parentLabel="Industries" />;
}
