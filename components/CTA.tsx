import Link from "next/link";

export function CTA() {
  return (
    <section className="bg-[var(--brand-dark)] py-12 text-white">
      <div className="container-page flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[#f4c7ca]">Engineering-led RFQ support</p>
          <h2 className="mt-3 text-3xl font-bold">Upload files for DFM, tooling, and manufacturing review.</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#e6e9f2]">
            Share CAD files, drawings, material targets, expected volumes, surface requirements, and delivery region. Arktech Mold will respond with practical engineering feedback and quotation details.
          </p>
        </div>
        <Link className="focus-ring inline-flex min-h-12 w-fit items-center rounded-sm bg-[var(--accent)] px-5 font-bold text-white hover:brightness-90" href="/request-a-quote">
          Request a Quote
        </Link>
      </div>
    </section>
  );
}
