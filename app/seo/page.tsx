import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { seoPages } from "@/lib/seo-pages";

export const metadata: Metadata = {
  title: "Manufacturing Resources for OEM and EMS Buyers",
  description:
    "Explore engineering-led manufacturing resources for export tooling, injection molding, CNC machining, die casting, prototyping and OEM production in China.",
  alternates: { canonical: "/seo" }
};

export default function SeoLandingIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Resources"
        title="Engineering and manufacturing guides for technical sourcing teams."
        body="Explore focused resources for OEM product companies, EMS manufacturers and injection molding companies sourcing tooling, plastic and metal components, prototypes and assemblies."
      />
      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-5 md:grid-cols-2">
          {seoPages.map((page) => (
            <article key={page.slug} className="group grid overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm sm:grid-cols-[0.38fr_0.62fr]">
              <div className="relative min-h-52 overflow-hidden bg-[var(--surface-soft)]">
                <Image src={page.heroImage} alt={page.heroAlt} fill sizes="(min-width: 768px) 20vw, 100vw" className="object-cover transition duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-col p-6">
                <h2 className="text-xl font-bold text-[var(--brand-dark)]">{page.h1}</h2>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{page.metaDescription}</p>
                <Link href={`/seo/${page.slug}`} className="mt-auto pt-5 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]">
                  View manufacturing guide →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
