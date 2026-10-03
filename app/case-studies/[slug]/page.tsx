import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseStudyDetail } from "@/components/CaseStudyDetail";
import { caseStudies, caseStudyBySlug } from "@/lib/case-studies";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return caseStudies.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = caseStudyBySlug.get(slug);
  if (!project) return {};
  return {
    title: { absolute: `${project.projectName} Case Study | Arktech Mold` },
    description: project.description,
    openGraph: { title: `${project.projectName} Case Study`, description: project.description, images: [{ url: project.image }] }
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = caseStudyBySlug.get(slug);
  if (!project) notFound();
  const relatedProjects = caseStudies.filter((item) => item.slug !== project.slug).sort((a, b) => Number(b.industry === project.industry) - Number(a.industry === project.industry)).slice(0, 3);
  return <CaseStudyDetail project={project} relatedProjects={relatedProjects} />;
}
