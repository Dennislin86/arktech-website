import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "One-Stop Plastic & Metal Manufacturing Support | Arktech Group",
  description:
    "Arktech Group provides one-stop plastic and metal manufacturing support around export injection mold programs, including mold making, plastic injection molding, CNC machining, die casting, sheet metal fabrication, 3D printing, vacuum casting, surface finishing and assembly."
};

const processes = [
  {
    title: "CNC Machining",
    image: "/images/capabilities/cnc-machining.jpg",
    alt: "Precision CNC machined metal parts for custom manufacturing programs",
    href: "/services/cnc-machining"
  },
  {
    title: "Mould Making",
    image: "/images/capabilities/injection-mold-manufacturing.png",
    alt: "Export injection mold manufacturing with completed mold halves and molded product housing",
    href: "/services/injection-mold-manufacturing"
  },
  {
    title: "3D Printing",
    image: "/images/capabilities/rapid-prototyping-v3.png",
    alt: "3D printed rapid prototype parts for product development",
    href: "/services/rapid-prototyping"
  },
  {
    title: "Vacuum Casting",
    image: "/images/capabilities/vacuum-casting-v3.png",
    alt: "Vacuum casting for polyurethane prototype and bridge production parts",
    href: "/services/vacuum-casting"
  },
  {
    title: "Plastic Injection Molding",
    image: "/images/capabilities/plastic-injection-molding-production.png",
    alt: "Plastic injection molding production with injection molding machine running molded parts",
    href: "/services/plastic-injection-molding"
  },
  {
    title: "Metal Fabrication",
    image: "/images/capabilities/sheet-metal-fabrication.jpg",
    alt: "Sheet metal fabrication and metal enclosure manufacturing capability",
    href: "/services/sheet-metal-fabrication"
  },
  {
    title: "Die Casting",
    image: "/images/capabilities/die-casting.webp",
    alt: "Aluminum and zinc die casting parts, metal housings and precision components",
    href: "/services/die-casting"
  },
  {
    title: "Secondary Operations",
    image: "/images/capabilities/assembly-secondary-operations.webp",
    alt: "Assembly and secondary operations for plastic and metal components",
    href: "/services/assembly-secondary-operations"
  }
];

const capabilityGroups = [
  {
    title: "Core Mold & Tooling",
    items: ["Injection Mold Manufacturing", "Mold Design Support", "Mold Trial Support", "Tooling Spare Parts"]
  },
  {
    title: "Plastic Manufacturing",
    items: ["Plastic Injection Molding", "Insert Molding", "Overmolding", "Sampling Support"]
  },
  {
    title: "Metal Manufacturing",
    items: ["CNC Machining", "Die Casting", "Sheet Metal Fabrication", "Laser Cutting", "Bending", "Welding"]
  },
  {
    title: "Prototyping & Secondary Operations",
    items: ["3D Printing", "Vacuum Casting", "Surface Finishing", "Painting", "Printing", "Plating", "Ultrasonic Welding", "Assembly"]
  }
];

const supportAreas = [
  {
    title: "Rapid Prototyping",
    image: "/images/capabilities/rapid-prototyping-v3.png",
    alt: "Rapid prototyping with CNC machining and 3D printed parts",
    body: "We make your CAD design into real prototypes by CNC machining, metal and plastic 3D printing, sheet metal prototyping and other techniques. Prototype quantities can start from one piece to help verify product ideas, functional testing and engineering validation."
  },
  {
    title: "Low and High-Volume Production",
    image: "/images/capabilities/plastic-injection-molding.webp",
    alt: "Plastic injection molding and production support for low and high-volume manufacturing",
    body: "Arktech is a reliable manufacturing partner in China, offering practical solutions to help customers scale from effective prototypes to production parts. Our engineering and production teams support custom parts with stable accuracy and repeatable quality."
  },
  {
    title: "From Concept to Production",
    image: "/images/capabilities/rd-product-development.webp",
    alt: "Product engineering and DFM support from concept to production",
    body: "All innovations begin with an idea. As a team experienced in injection molding and plastics processing, we can support customers at the early development stage and help connect product concepts with manufacturable tooling and production plans."
  }
];

export default function ArktechGroupPage() {
  return (
    <>
      <PageHero
        eyebrow="ARKTECH GROUP"
        title="One-Stop Plastic & Metal Manufacturing Support"
        body="Arktech Group provides one-stop manufacturing support around export injection mold programs, covering plastic parts, metal components, prototypes, tooling, surface finishing and assembly."
      />

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Group Capability</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">
              Manufacturing support that strengthens export injection mold projects.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Arktech Group LTD. was established in 2010 in Shenzhen, China. Over the years, we have built manufacturing resources covering mold making, plastic injection molding, CNC machining, die casting, sheet metal fabrication, 3D printing, vacuum casting, surface finishing and secondary operations.
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              This group capability allows Arktech Mold to support overseas customers not only with export injection molds, but also with related plastic and metal components, prototypes, trial samples, production support and assembly requirements.
            </p>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              For OEM buyers and engineering teams, this means fewer supplier coordination risks during the development stage. For injection molding companies, it provides additional offshore tooling capacity, spare parts support and sampling coordination.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/services">
                View Capabilities
              </Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
            <Image
              src="/images/seo/oem-manufacturing-hero.png"
              alt="Arktech Group plastic and metal manufacturing support for export mold programs"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Manufacturing Processes</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">One-stop custom parts manufacturing capabilities.</h2>
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processes.map((item) => (
              <Link
                className="group overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md"
                href={item.href}
                key={item.title}
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex min-h-16 items-center justify-center bg-[var(--brand)] px-4 text-center text-base font-bold text-white transition group-hover:bg-[var(--brand-hover)]">
                  <span aria-hidden="true" className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-white/80 text-xs">
                    →
                  </span>
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Capability Groups</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">One-stop plastic and metal manufacturing support, organized around export tooling programs.</h2>
          <div className="mt-7 grid gap-5 lg:grid-cols-4">
            {capabilityGroups.map((group) => (
              <article className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm" key={group.title}>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{group.title}</h3>
                <ul className="mt-4 grid gap-2">
                  {group.items.map((item) => (
                    <li className="rounded-sm bg-[var(--surface-soft)] px-3 py-2 text-sm font-semibold leading-6 text-[var(--muted)]" key={item}>
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Development to Production</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Support from prototype validation to scalable production.</h2>
        </div>
        <div className="container-page mt-7 grid gap-5 md:grid-cols-3">
          {supportAreas.map((area) => (
            <article className="overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm" key={area.title}>
              <div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]">
                <Image
                  src={area.image}
                  alt={area.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-[var(--brand)]">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{area.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
