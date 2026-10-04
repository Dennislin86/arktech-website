import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CaseStudiesHub } from "@/components/CaseStudiesHub";
import { caseStudies } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Case Studies | Export Tooling Projects | Arktech Mold" },
  description: "Explore real Arktech injection mold and tooling projects across robotics, medical devices, automotive, smart home, appliances and consumer products, including DFM, mold design, trial, validation and production support.",
  alternates: { canonical: "/case-studies" }
};

const workflow = ["RFQ & CAD Review", "DFM Engineering", "Mold Design Approval", "Tool Manufacturing", "Mold Trial & Correction", "Inspection & Validation", "Export Delivery"];
const proofAreas = [
  { title: "DFM & Engineering Review", body: "Part geometry, material behavior, tooling risks and approval points are reviewed before tooling release." },
  { title: "Tooling Progress", body: "Project stages remain visible through engineering communication, manufacturing follow-up and issue tracking." },
  { title: "Trial & Sample Validation", body: "Sample review connects mold performance with critical dimensions, appearance and assembly requirements." },
  { title: "Inspection & Export Records", body: "Applicable trial, inspection, spare-parts and packing records support customer approval and tool transfer." }
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[var(--brand-dark)] text-white">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(7,31,54,.98)_0%,rgba(7,31,54,.92)_46%,rgba(7,31,54,.68)_100%)]" />
        <div className="container-page relative grid min-h-[560px] items-center gap-10 py-14 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-12 lg:py-16">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-200">Real Tooling Projects</p>
            <h1 className="split-hero-title mt-4">Real Injection Mold &amp; Tooling Case Studies</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Explore documented Arktech projects across DFM engineering, injection mold manufacturing, mold trials, dimensional inspection and export tooling delivery for global OEM and molding teams.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#featured-projects" className="focus-ring rounded-sm bg-[var(--accent)] px-5 py-3 font-bold text-white hover:brightness-90">Explore Featured Projects</Link>
              <Link href="/request-a-quote" className="focus-ring rounded-sm border border-white/70 px-5 py-3 font-bold text-white hover:bg-white hover:text-[var(--brand-dark)]">Upload CAD for DFM Review</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3" aria-label="Arktech mold and manufacturing project images">
            {[
              ["/images/case-studies/automotive-multi-cavity-mold.webp", "Multi-cavity export injection mold project"],
              ["/images/case-studies/fan-blade-mold.webp", "Complex fan blade mold with seven sliders"],
              ["/images/case-studies/die-casting-control-housing.webp", "Die casting mold and finished control housing"],
              ["/images/case-studies/ihgs-housing.webp", "Smart home housing engineering and components"]
            ].map(([src, alt], index) => <div key={src} className="relative aspect-[4/3] overflow-hidden rounded-sm border border-white/20 bg-white/10"><Image src={src} alt={alt} fill sizes="(min-width: 1024px) 24vw, 50vw" className="object-cover" priority={index === 0} /></div>)}
          </div>
        </div>
      </section>

      <CaseStudiesHub projects={caseStudies} />

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-16">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Controlled Project Delivery</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">From DFM to Tooling Delivery</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">The case studies follow the same engineering path used to review risk, release tooling, validate samples and prepare export delivery.</p>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {workflow.map((step, index) => <li key={step} className="rounded-sm border border-[var(--line)] bg-white p-4"><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 text-sm font-bold leading-5 text-[var(--brand-dark)]">{step}</p></li>)}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Evidence</p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Engineering Evidence Behind the Tooling</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Each project page keeps the visible evidence tied to the actual engineering scope. Unsupported performance claims and invented customer metrics are intentionally excluded.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {proofAreas.map((area, index) => <article key={area.title} className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] p-5"><p className="text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</p><h3 className="mt-2 text-lg font-bold">{area.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{area.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--surface-soft)] py-14">
        <div className="container-page flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Discuss Your Tooling Project</p><h2 className="mt-2 text-3xl font-bold">Need engineering feedback on a new mold?</h2><p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Share your CAD files, material requirements and expected production needs for a practical DFM and tooling review.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/request-a-quote" className="focus-ring rounded-sm bg-[var(--accent)] px-5 py-3 font-bold text-white hover:brightness-90">Upload CAD for DFM Review</Link><Link href="/contact" className="focus-ring rounded-sm border border-[var(--brand-dark)] px-5 py-3 font-bold text-[var(--brand-dark)] hover:bg-white">Contact Engineering</Link></div>
        </div>
      </section>
    </>
  );
}
