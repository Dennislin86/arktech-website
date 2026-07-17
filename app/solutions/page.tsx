import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import { solutionPages } from "@/lib/page-data";

export const metadata: Metadata = {
  title: "Solutions for OEM Product Companies, EMS Manufacturers and Injection Molding Companies",
  description:
    "Manufacturing solutions for OEM product companies, EMS manufacturers and injection molding companies sourcing molds, plastic parts, metal parts, assembly and engineering support."
};

const comparison = [
  {
    buyer: "Medium-sized injection molding companies",
    needs: "Reliable offshore tool capacity, clear engineering review, sampling records, spare parts, and molds prepared for local production.",
    support: "Export injection molds, mold design review, tryout reports, steel and component documentation, and shipment coordination."
  },
  {
    buyer: "OEM product companies",
    needs: "A partner that can connect product engineering, tooling, plastic parts, metal parts, finishing, assembly, and inspection.",
    support: "DFM, tool build, plastic molding, die casting molds, CNC machined components, secondary operations, and production packaging."
  }
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="Two clear ways to work with Arktech: export tooling partner or full component manufacturing partner."
        body="Whether you run injection molding capacity in Europe or North America, or you are an OEM developing plastic and metal products, Arktech helps reduce engineering and supply-chain friction."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 lg:grid-cols-3">
          {solutionPages.map((solution) => (
            <article key={solution.slug} className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <div className="relative aspect-[16/9]">
                <Image src={seoImageForSlug(solution.slug)} alt={seoImageAlt(solution.title)} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{solution.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{solution.description}</p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/solutions/${solution.slug}`}>
                  Learn more
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Customer fit</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold">Built around practical B2B sourcing situations.</h2>
          <div className="mt-8 grid gap-5 lg:grid-cols-2">
            {comparison.map((item) => (
              <article key={item.buyer} className="rounded-sm border border-[var(--line)] bg-[var(--surface)] p-6">
                <h3 className="text-2xl font-bold">{item.buyer}</h3>
                <dl className="mt-5 grid gap-4 leading-7">
                  <div>
                    <dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Typical need</dt>
                    <dd className="mt-1 text-[var(--muted)]">{item.needs}</dd>
                  </div>
                  <div>
                    <dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Arktech support</dt>
                    <dd className="mt-1 text-[var(--muted)]">{item.support}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
