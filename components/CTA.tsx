import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[var(--brand-dark)] py-12 text-white">
      <div className="container-page grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#f4c7ca]">ENGINEERING-LED RFQ SUPPORT</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Ready to start your next tooling or manufacturing project?</h2>
          <p className="mt-4 leading-7 text-[#e6e9f2]">
            Upload CAD files, drawings, material targets, expected volumes, surface requirements, and delivery region. Our engineering team will review your project and provide practical DFM feedback and quotation details.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">
            Upload CAD for DFM Review
          </Link>
          <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/80 bg-transparent px-6 font-bold text-white transition hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">
            Request Manufacturing Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
