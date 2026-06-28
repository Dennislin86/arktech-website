import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company",
  description:
    "Learn about Arktech Mold, an ISO-certified plastic tooling and molding partner supporting custom prototyping, mold manufacturing, and production programs since 2010."
};

const capabilities = [
  "Custom prototyping and product development support",
  "Plastic injection mold manufacturing",
  "Plastic tooling and molding for OEM components",
  "Die casting mold and CNC metal part support",
  "DFM engineering review before tooling release",
  "Plastic and metal assembly for export programs"
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="Company"
        title="Arktech Mold supports plastic tooling, molding, and custom manufacturing programs."
        body={`${site.company.legalName} has supported custom prototyping and manufacturing solutions since ${site.company.founded}, serving OEM buyers and engineering teams that need practical tooling, molding, and production support.`}
      />
      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Company Profile</p>
            <h2 className="mt-3 text-3xl font-bold">ISO-certified manufacturing support from Shenzhen, China.</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Arktech Mold combines tooling engineering, plastic injection molding, CNC metal parts, die casting mold support, and assembly coordination for customers developing plastic and metal products.
            </p>
            <Link className="mt-6 inline-flex min-h-12 items-center rounded-sm bg-[var(--accent)] px-5 font-bold text-white hover:brightness-90" href="/request-a-quote">
              Request a Quote
            </Link>
          </div>
          <div>
            <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
              <Image
                src="/images/seo/oem-manufacturing-hero.png"
                alt="Arktech Mold engineering review for OEM tooling, molding, and manufacturing programs"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Founded</p>
                <p className="mt-2 text-2xl font-bold">{site.company.founded}</p>
              </div>
              <div className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Experience</p>
                <p className="mt-2 text-2xl font-bold">15+ Years</p>
              </div>
              {site.company.certifications.map((certification) => (
                <div key={certification} className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm">
                  <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Certification</p>
                  <p className="mt-2 text-2xl font-bold">{certification}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Capabilities</p>
          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item} className="rounded-sm border border-[var(--line)] bg-[var(--surface)] p-5 font-medium leading-7 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
