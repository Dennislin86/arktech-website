import type { Metadata } from "next";
import { RfqForm } from "@/components/RfqForm";

export const metadata: Metadata = {
  title: "Request an Injection Mold or Molding Quote",
  description:
    "Share CAD files, drawings and project requirements for injection mold or plastic injection molding quotation planning with Arktech.",
  alternates: { canonical: "/request-a-quote" }
};

export default function RequestQuotePage() {
  return (
    <>
      <section className="bg-[var(--brand-dark)] py-16 text-white sm:py-20" id="top">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f4c7ca]">Project Quotation</p>
          <h1 className="internal-page-title mt-4">Request an Injection Mold or Molding Quote</h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">Share CAD files, drawings and project requirements for engineering review and quotation planning.</p>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-18">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
          <RfqForm source="Request a Quote page" variant="full" />
          <aside className="grid gap-5 lg:sticky lg:top-28">
            <div className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold">Project information checklist</h2>
              <ul className="mt-4 grid gap-3 text-sm leading-6 text-[var(--muted)]">
                <li>• 3D CAD files and controlled 2D drawings</li>
                <li>• Resin or alloy specification</li>
                <li>• Critical tolerances and cosmetic standards</li>
                <li>• Annual volume and launch timing</li>
                <li>• Mold destination and target market</li>
              </ul>
            </div>
            <div className="rounded-sm bg-[var(--brand-dark)] p-6 text-white">
              <h2 className="text-xl font-bold">Built for serious manufacturing programs</h2>
              <p className="mt-3 text-sm leading-6 text-white/75">Complete project information helps our engineers identify risk early and prepare a commercially useful quotation.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-18">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Engineering Deliverables</p>
          <h2 className="mt-3 text-3xl font-bold">What You Will Receive</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              ["DFM Engineering Feedback", "Manufacturability observations covering geometry, tolerances, materials, tooling risk, and production readiness."],
              ["Tooling & Production Strategy", "A practical path for mold construction, sampling, validation, secondary operations, and stable production."],
              ["Cost & Lead Time Estimate", "A clear quotation framework for tooling, parts, inspection, logistics, and the expected project schedule."]
            ].map(([title, body]) => (
              <article className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6" key={title}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-10">
        <div className="container-page grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {["ISO 9001:2015 quality management", "Export tooling experience for EU & US markets", "NDA available"].map((item) => (
            <div className="border-l-4 border-[var(--brand)] bg-white p-5 font-bold text-[var(--brand-dark)] shadow-sm" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Ready for an engineering review?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-[var(--muted)]">Upload complete project files so our team can evaluate manufacturability, tooling scope, cost drivers, and production timing.</p>
          <a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:brightness-90" href="#top">Submit RFQ for Engineering Review</a>
        </div>
      </section>
    </>
  );
}
