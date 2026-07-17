import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { industryPages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Industries Served by Arktech Mold",
  description:
    "Tooling and component manufacturing for automotive, EV, industrial, electronics, appliance, HVAC, medical, hardware, and packaging OEM programs."
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Plastic and metal manufacturing support for OEMs with demanding launch requirements."
        body="Arktech supports export programs where buyers need manufacturability feedback, reliable sampling, dimensional control, and clear communication across time zones."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {industryPages.map((industry) => (
            <article key={industry.slug} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={seoImageForSlug(industry.slug)} alt={seoImageAlt(industry.title)} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold">{industry.title}</h2>
                <p className="mt-3 leading-7 text-[var(--muted)]">
                  Manufacturing support shaped around tolerance risk, resin or alloy selection, surface finish, inspection planning, assembly needs, and shipment requirements.
                </p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/industries/${industry.slug}`}>
                  Learn more
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
