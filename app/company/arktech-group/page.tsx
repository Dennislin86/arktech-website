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
  "Mold making",
  "Plastic injection molding",
  "CNC machining",
  "Die casting",
  "Sheet metal fabrication",
  "3D printing",
  "Vacuum casting",
  "Surface finishing",
  "Secondary operations",
  "Assembly"
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
    title: "Manufacturing around export tooling",
    body: "Arktech Group supports export injection mold programs with coordinated plastic and metal manufacturing processes, helping customers manage related components without losing tooling focus."
  },
  {
    title: "Process and equipment coordination",
    body: "Our team coordinates mold making, molding, machining, die casting, sheet metal fabrication, prototyping, finishing and assembly through a practical project workflow."
  },
  {
    title: "Production support for global programs",
    body: "The group capability helps product companies and injection molding companies move from tooling validation to repeatable manufacturing support."
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
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Plastic and metal support under one coordinated workflow.</h2>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {processes.map((item) => (
              <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={item}>
                {item}
              </div>
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
        <div className="container-page grid gap-5 md:grid-cols-3">
          {supportAreas.map((area) => (
            <article className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm" key={area.title}>
              <h3 className="text-lg font-bold text-[var(--brand-dark)]">{area.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">{area.body}</p>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
