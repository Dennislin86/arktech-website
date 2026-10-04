import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { LazyVideoPlayer } from "@/components/LazyVideoPlayer";
import { PageHero } from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Export Injection Mold Company in China",
  description:
    "Arktech Mold is the core export injection mold business of Arktech Group LTD., supporting product companies and injection molding companies with DFM engineering, injection mold manufacturing, mold trial support and export tooling delivery.",
  alternates: { canonical: "/company" }
};

const moldCapabilities = [
  "Export injection mold manufacturing",
  "DFM engineering and mold design review",
  "Mold trial support and sampling",
  "Multi-cavity injection molds",
  "Hot runner molds",
  "Insert molding and overmolding tools",
  "Tooling spare parts",
  "Export packing and delivery support"
];

const customerGroups = [
  "Product companies developing plastic products for Europe and North America",
  "Injection molding companies that need export tooling capacity from Shenzhen China",
  "Engineering and sourcing teams managing injection mold manufacturing China programs"
];

const aboutPoints = [
  "Founded in 2010, Arktech Group LTD. has supported custom prototyping, tooling and manufacturing programs for overseas OEM buyers, engineering teams and injection molding companies.",
  "Arktech Mold focuses on export injection mold manufacturing, including DFM review, mold design support, mold manufacturing, mold trial support, sampling, inspection documentation and export delivery.",
  "Around this core mold capability, Arktech also supports selected plastic injection molding, CNC machining, die casting, sheet metal fabrication, assembly and secondary operations to help customers move from RFQ and prototype validation to production-ready tooling and components.",
  "For customers in Europe and North America, our work focuses on practical engineering communication, controlled tooling execution, mold trial documentation, spare parts support and export packing."
];

const cultureValues = [
  "High Quality",
  "Competitive Cost",
  "Positive Communication",
  "Timely Delivery"
];

export default function CompanyPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPANY PROFILE"
        title="Export Injection Mold Company in China"
        body="Arktech Mold is the core export injection mold business of Arktech Group LTD., supporting product companies and injection molding companies with DFM engineering, injection mold manufacturing, mold trial support and export tooling delivery."
        image={{
          src: "/images/company/arktech-mold-video-poster.webp",
          alt: "Arktech Mold injection mold manufacturing and export tooling operations"
        }}
      />

      <section className="py-14">
        <div className="container-page grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Arktech Mold</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)]">
              Core export injection mold business of Arktech Group LTD.
            </h2>
            <div className="mt-4 grid gap-4 leading-7 text-[var(--muted)]">
              {aboutPoints.map((point) => (
                <p key={point}>{point}</p>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/services">
                View Capabilities
              </Link>
            </div>
          </div>

          <div className="relative aspect-[16/9] overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <LazyVideoPlayer
              label="Arktech factory video showing export injection mold and manufacturing support"
              mp4Src="/videos/arktech-mold-introduction.mp4"
              poster="/images/company/arktech-mold-video-poster.webp"
              posterAlt="Arktech Mold factory scene for export injection mold manufacturing and tooling support"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Founded</p>
              <p className="mt-2 text-3xl font-bold text-[var(--brand-dark)]">2010</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Shenzhen-based injection mold company in China.</p>
            </div>
            <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Core Business</p>
              <p className="mt-2 text-xl font-bold text-[var(--brand-dark)]">Export Injection Molds</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">DFM engineering, mold trial support and export tooling delivery.</p>
            </div>
            <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 shadow-sm">
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Markets</p>
              <p className="mt-2 text-xl font-bold text-[var(--brand-dark)]">Europe &amp; North America</p>
              <p className="mt-2 text-sm leading-6 text-[var(--muted)]">Tooling support for overseas product companies and injection molding companies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Arktech Culture</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight text-[var(--brand-dark)]">
            Devotion, teamwork and win-win cooperation guide how we support export tooling projects.
          </h2>
          <div className="mt-5 grid gap-4 leading-7 text-[var(--muted)] lg:grid-cols-2">
            <p>
              We provide reliable and professional solutions from prototype validation to export injection mold manufacturing and production support. Our team focuses on practical engineering, stable mold quality, competitive project cost and timely delivery.
            </p>
            <p>
              Arktech&apos;s engineering and project teams pay close attention to every tooling and manufacturing step, from DFM review and mold trial support to inspection documentation and export packing. Clear communication and disciplined execution help customers move projects forward with confidence.
            </p>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {cultureValues.map((value) => (
              <div className="flex min-h-24 items-center justify-center rounded-full bg-[linear-gradient(180deg,var(--brand),#a70f2d)] px-6 text-center text-xl font-bold leading-tight text-white shadow-sm" key={value}>
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Mold Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">Export tooling support from DFM to delivery.</h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {moldCapabilities.map((item) => (
              <div className="rounded-sm border border-[var(--line)] bg-white p-4 text-sm font-bold leading-6 text-[var(--brand-dark)] shadow-sm" key={item}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Who We Support</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-bold text-[var(--brand-dark)]">Built for product companies and injection molding companies.</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {customerGroups.map((item) => (
              <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5 text-sm font-medium leading-7 text-[var(--muted)] shadow-sm" key={item}>
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
