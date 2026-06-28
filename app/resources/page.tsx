import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { resourcePages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Manufacturing Buyer Resources",
  description:
    "RFQ checklist, DFM considerations, export tooling guidance, plastic and metal component planning resources for OEM and injection molding buyers."
};

export default function ResourcesPage() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Useful references for sourcing export tooling and plastic or metal components."
        body="Short buyer-focused guides to help engineering and procurement teams quote faster and avoid avoidable manufacturing changes."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resourcePages.map((resource) => (
            <article key={resource.slug} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={seoImageForSlug(resource.slug)} alt={seoImageAlt(resource.title)} fill sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{resource.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{resource.description}</p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/resources/${resource.slug}`}>
                  Read guide
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="container-page mt-8">
          <Link className="focus-ring inline-flex min-h-12 items-center rounded-sm bg-[var(--brand-dark)] px-5 font-bold text-white hover:brightness-90" href="/request-a-quote">
            Prepare an RFQ
          </Link>
        </div>
      </section>
      <CTA />
    </>
  );
}
