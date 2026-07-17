import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { caseStudyPages } from "@/lib/page-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return caseStudyPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = caseStudyPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.title,
    description: page.description
  };
}

export default async function CaseStudyDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const page = caseStudyPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const overview = [
    ["Customer type", page.customerType],
    ["Region", page.region],
    ["Product category", page.productCategory],
    ["Service scope", page.serviceScope.join(", ")]
  ];

  const sections = [
    { title: "Customer Challenge", items: page.challenge },
    { title: "Arktech Solution", items: page.solution },
    { title: "Manufacturing Scope", items: page.manufacturingScope },
    { title: "Result", items: page.result }
  ];

  return (
    <>
      <PageHero eyebrow="Case Study" title={page.projectName} body={page.description} />
      <section className="py-14">
        <div className="container-page">
          <Link className="focus-ring inline-flex rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/case-studies">
            Back to Case Studies
          </Link>
          <div className="relative mt-7 aspect-[16/7] overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
            <Image
              src={seoImageForSlug(page.slug)}
              alt={seoImageAlt(page.title)}
              fill
              sizes="(min-width: 1120px) 1120px, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>

          <div className="mt-7 rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold">Project Overview</h2>
            <dl className="mt-5 grid gap-4 md:grid-cols-2">
              {overview.map(([label, value]) => (
                <div key={label} className="border-l-4 border-[var(--brand)] pl-4">
                  <dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{label}</dt>
                  <dd className="mt-1 leading-7 text-[var(--muted)]">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            {sections.map((section) => (
              <article key={section.title} className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold">{section.title}</h2>
                <ul className="mt-5 grid gap-3 leading-7 text-[var(--muted)]">
                  {section.items.map((item) => (
                    <li key={item} className="border-l-4 border-[var(--brand)] pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-5 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6">
            <h2 className="text-2xl font-bold">Related Pages</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {page.related.map((link) => (
                <Link key={link.href} className="focus-ring rounded-sm bg-white px-4 py-3 text-sm font-bold text-[var(--brand)] shadow-sm hover:text-[var(--brand-dark)]" href={link.href}>
                  {link.label}
                </Link>
              ))}
              <Link className="focus-ring rounded-sm bg-[var(--accent)] px-4 py-3 text-sm font-bold text-white hover:brightness-90" href="/request-a-quote">
                Upload RFQ Files
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
