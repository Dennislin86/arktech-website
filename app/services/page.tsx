import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { servicePages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Tooling and Manufacturing Services",
  description:
    "Export injection molds, plastic injection molding, die casting molds, CNC machined metal parts, component manufacturing, and DFM engineering support for OEMs and injection molders."
};

const process = ["NDA and drawing review", "DFM and manufacturing strategy", "Tool build or part production plan", "Sampling and corrections", "Production and inspection", "Export packing and shipment"];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Tooling, molding, die casting, CNC machining, and DFM support from one accountable team."
        body="Bring a plastic or metal component from engineering review to tooling, sampling, production, inspection, and export shipment with practical communication at each step."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {servicePages.map((service) => (
            <article key={service.title} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={seoImageForSlug(service.slug)} alt={seoImageAlt(service.title)} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{service.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{service.description}</p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/services/${service.slug}`}>
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Project flow</p>
          <h2 className="mt-3 text-3xl font-bold">A practical path from drawing package to shipment.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {process.map((step, index) => (
              <div key={step} className="border-t-4 border-[var(--brand)] bg-[var(--surface-soft)] p-5">
                <p className="text-sm font-bold text-[var(--brand)]">0{index + 1}</p>
                <h3 className="mt-3 text-lg font-bold">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
