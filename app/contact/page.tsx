import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Arktech Mold | Export Injection Mold RFQ",
  description:
    "Contact Arktech Mold for export injection mold RFQs, DFM engineering, mold trial support, sampling and related manufacturing services from Shenzhen, China."
};

const rfqChecklist = [
  "3D CAD files: STEP / IGES / STL",
  "2D drawings: PDF / DWG",
  "Material requirements",
  "Surface finish / texture requirements",
  "Estimated annual volume",
  "Target tooling lead time",
  "Sampling requirements",
  "Delivery country or region"
];

const contactCards = [
  ["Email", site.email],
  ["Phone", site.phone],
  ["Location", "Shenzhen, Guangdong, China"],
  ["Certifications", site.company.certifications.join(" / ")],
  ["Response Target", "Within 24 hours"]
];

const trustBullets = [
  "Export injection mold experience since 2010",
  "DFM review before tooling",
  "Mold trial and sampling support",
  "Inspection documentation before shipment",
  "Tooling spare parts support",
  "NDA available for new projects"
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="CONTACT ARKTECH MOLD"
        title="Contact Arktech Mold for Export Injection Mold RFQs"
        body="Send CAD files, drawings, material requirements and production needs. Arktech Mold supports export injection mold projects with DFM engineering, mold trial support, sampling and related manufacturing services from Shenzhen, China."
      />

      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Export Injection Mold RFQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">
              Upload CAD files or request a manufacturing quote.
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Contact Arktech Mold when you need an injection mold company China partner for export tooling, DFM engineering, mold trial support, sampling support, tooling spare parts or related production support.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
                Request Manufacturing Quote
              </Link>
            </div>
          </div>

          <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">What to Include in Your RFQ</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {rfqChecklist.map((item) => (
                <li className="flex gap-3 rounded-sm bg-[var(--surface-soft)] p-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Contact Details</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">
            RFQ contact information for export mold and manufacturing support.
          </h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {contactCards.map(([label, value]) => (
              <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 shadow-sm" key={label}>
                <h3 className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{label}</h3>
                <p className="mt-3 break-words text-base font-semibold leading-6 text-[var(--brand-dark)]">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-6 lg:grid-cols-2">
          <article className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Shenzhen Office</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{site.company.headOffice}</p>
          </article>
          <article className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Manufacturing Address</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">{site.company.factoryAddress}</p>
          </article>
        </div>
        <div className="container-page mt-5">
          <p className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm font-semibold leading-6 text-[var(--muted)]">
            Visits are available by appointment for qualified tooling and manufacturing projects.
          </p>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Why Send Your RFQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">
              Why Send Your RFQ to Arktech Mold?
            </h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">
              Our team reviews upload CAD files and project requirements with practical engineering focus before preparing an export injection mold RFQ or manufacturing quote.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {trustBullets.map((item) => (
              <li className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={item}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-14 text-white">
        <div className="container-page grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[#f4c7ca]">Start Your Export Mold RFQ</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight">Start Your Export Mold RFQ</h2>
            <p className="mt-4 max-w-4xl leading-7 text-white/75">
              Upload CAD files, drawings, material requirements, expected volumes and delivery region. Our engineering team will review your project and provide practical DFM feedback and quotation details.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[430px]">
            <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
              Upload CAD for DFM Review
            </Link>
            <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/70 px-5 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">
              Request Manufacturing Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
