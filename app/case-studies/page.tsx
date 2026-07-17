import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { caseStudyPages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Tooling and Manufacturing Case Studies",
  description:
    "Selected export tooling, plastic injection molding, die casting, CNC machining, and component manufacturing case studies for Europe and North America."
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Case studies"
        title="Export manufacturing programs with practical engineering outcomes."
        body="Representative projects show how DFM, tool design, material planning, sampling discipline, and inspection help buyers reduce risk before production."
      />
      <section className="py-14">
        <div className="container-page grid gap-6">
          {caseStudyPages.map((item) => (
            <article key={item.slug} className="grid overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md lg:grid-cols-5">
              <div className="relative aspect-[16/10] lg:col-span-3 lg:h-full lg:min-h-[320px] lg:aspect-auto">
                <Image src={seoImageForSlug(item.slug)} alt={seoImageAlt(item.title)} fill sizes="(min-width: 1024px) 60vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6 lg:col-span-2 lg:p-8">
                <p className="text-sm font-bold text-[var(--brand)]">{item.region}</p>
                <h2 className="mt-3 text-2xl font-bold text-[var(--brand-dark)] lg:text-3xl">{item.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{item.description}</p>
                <dl className="mt-6 grid gap-4 text-sm sm:grid-cols-2">
                  <div className="rounded-sm bg-[var(--surface-soft)] p-4">
                    <dt className="font-bold">Customer type</dt>
                    <dd className="mt-1 text-[var(--muted)]">{item.customerType}</dd>
                  </div>
                  <div className="rounded-sm bg-[var(--surface-soft)] p-4">
                    <dt className="font-bold">Product category</dt>
                    <dd className="mt-1 text-[var(--muted)]">{item.productCategory}</dd>
                  </div>
                </dl>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/case-studies/${item.slug}`}>
                  View case study
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
