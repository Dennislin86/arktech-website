import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EngineeringResourcePage } from "@/components/EngineeringResourcePage";
import { articleByCategory } from "@/lib/engineering-resources";
const articles = articleByCategory.get("injection-molds") ?? [];
type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map((item) => ({ slug: item.slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> { const { slug } = await params; const resource = articles.find((item) => item.slug === slug); return resource ? { title: resource.title, description: resource.description, alternates: { canonical: resource.path } } : {}; }
export default async function Page({ params }: Props) { const { slug } = await params; const resource = articles.find((item) => item.slug === slug); if (!resource) notFound(); return <EngineeringResourcePage resource={resource} />; }
