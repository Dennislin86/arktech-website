import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Manufacturing Capabilities | Arktech Mold",
  description:
    "Explore Arktech Mold manufacturing capabilities including export injection molds, mold trial support, plastic injection molding, CNC machining, die casting, sheet metal fabrication, rapid prototyping and assembly."
};

const process = ["NDA and drawing review", "DFM and manufacturing strategy", "Tool build or part production plan", "Sampling and corrections", "Production and inspection", "Export packing and shipment"];

const capabilities = [
  {
    title: "Injection Mold Manufacturing",
    description:
      "Export-grade injection mold manufacturing for product companies and injection molding companies, including multi-cavity, hot runner, insert molding and mold transfer programs.",
    image: "/images/capabilities/injection-mold-manufacturing.png",
    alt: "Export injection mold manufacturing with completed mold halves and molded product housing",
    href: "/services/injection-mold-manufacturing"
  },
  {
    title: "Mold Trial & Sampling Support",
    description:
      "Structured mold trials, sample review, dimensional inspection reports and improvement actions before tooling approval and export delivery.",
    image: "/images/capabilities/mold-trial-sampling-support.png",
    alt: "Mold trial sampling support with digital caliper inspection of injection molded plastic housing",
    href: "/services/mold-trial-sampling-support"
  },
  {
    title: "Plastic Injection Molding",
    description:
      "Low & High-volume plastic injection molding for engineering components, industrial housings, consumer products, and OEM assemblies with stable quality and scalable production capacity.",
    image: "/images/capabilities/plastic-injection-molding-production.png",
    alt: "Plastic injection molding production with injection molding machine running molded parts",
    href: "/services/plastic-injection-molding"
  },
  {
    title: "Tooling Spare Parts",
    description:
      "Replacement inserts, wear components, ejector systems and documented spare parts packages for export molds and ongoing production support.",
    image: "/images/capabilities/tooling-spare-parts.png",
    alt: "Tooling spare parts, mold inserts and wear components for export injection molds",
    href: "/services/tooling-spare-parts"
  },
  {
    title: "CNC Machining",
    description:
      "Precision CNC machining for aluminum, stainless steel, brass, and engineering plastics, supporting prototypes, tooling components, and low-volume OEM production.",
    image: "/images/capabilities/cnc-machining.jpg",
    alt: "Precision CNC machined metal parts manufactured by Arktech",
    href: "/services/cnc-machining"
  },
  {
    title: "Die Casting",
    description:
      "Aluminum and zinc die casting solutions for industrial components, precision housings, and OEM metal parts with machining and surface finishing.",
    image: "/images/capabilities/die-casting.webp",
    alt: "Aluminum and zinc die casting parts, metal housings and precision components",
    href: "/services/die-casting"
  },
  {
    title: "Sheet Metal Fabrication",
    description:
      "Sheet metal fabrication for OEM enclosures, brackets, and industrial assemblies including laser cutting, bending, welding, and finishing.",
    image: "/images/capabilities/sheet-metal-fabrication.jpg",
    alt: "Fabricated sheet metal enclosures and industrial parts",
    href: "/services/sheet-metal-fabrication"
  },
  {
    title: "Rapid Prototyping",
    description:
      "Fast SLA, SLS and CNC prototypes for design validation, functional testing and low-volume product development.",
    image: "/images/capabilities/rapid-prototyping-v3.png",
    alt: "Rapid prototype parts for design validation and functional testing",
    href: "/services/rapid-prototyping"
  },
  {
    title: "Assembly & Secondary Operations",
    description:
      "Component assembly, ultrasonic welding, heat staking, printing, packaging and inspection before shipment.",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Electronics assembly line for component assembly and secondary operations",
    href: "/services/assembly-secondary-operations"
  }
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Manufacturing Capabilities"
        title="Engineering and manufacturing capabilities for export tooling and production support."
        body="Explore the same nine core capabilities highlighted on the homepage, from export injection mold manufacturing and mold trials to plastic injection molding, CNC machining, die casting, sheet metal fabrication, rapid prototyping and assembly."
      />
      <section className="py-14">
        <div className="container-page grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <article key={capability.title} className="group overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md">
              <div className="relative aspect-[16/9]">
                <Image src={capability.image} alt={capability.alt} fill sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-bold">{capability.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{capability.description}</p>
                <Link className="mt-5 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={capability.href}>
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
