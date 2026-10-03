import Link from "next/link";

type CTAProps = {
  variant?: "default" | "homepage";
};

export function CTA({ variant = "default" }: CTAProps) {
  if (variant === "homepage") {
    const fieldClass =
      "min-h-11 w-full rounded-sm border border-[var(--line)] bg-white px-3 text-sm font-normal text-[var(--foreground)] outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-red-100";

    return (
      <section className="border-t border-[var(--line)] bg-[#F6F8FA] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">START YOUR RFQ</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Tell Us About Your Project</h2>

          <form action="/request-a-quote" className="mt-8 grid overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm lg:grid-cols-2" method="get">
            <div className="border-b border-[var(--line)] p-5 sm:p-7 lg:border-b-0 lg:border-r">
              <label className="relative flex min-h-64 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-[var(--brand)] bg-[var(--accent-soft)] px-5 text-center transition hover:border-[var(--brand-hover)] hover:bg-red-50">
                <span className="text-xl font-bold text-[var(--brand-dark)]">Drag &amp; Drop CAD Files</span>
                <span className="mt-4 text-sm font-semibold leading-6 text-[var(--muted)]">
                  STEP / STP / IGES<br />PDF / DWG / ZIP
                </span>
                <span className="mt-5 rounded-sm bg-[var(--brand-dark)] px-5 py-2.5 text-sm font-bold text-white">Upload Files</span>
                <input
                  accept=".step,.stp,.iges,.igs,.pdf,.dwg,.zip"
                  aria-label="Upload CAD and RFQ files"
                  className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                  multiple
                  name="cad-files"
                  type="file"
                />
              </label>
              <p className="mt-4 flex items-center gap-2 text-sm font-semibold text-[var(--brand-dark)]">
                <span aria-hidden="true" className="font-bold text-[var(--brand)]">✓</span>
                NDA available
              </p>
              <p className="mt-2 text-xs leading-5 text-[var(--muted)]">
                Files are reviewed only for DFM engineering and tooling quotation.
              </p>
            </div>

            <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-7">
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">
                Name *
                <input className={fieldClass} name="name" required type="text" />
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">
                Company *
                <input className={fieldClass} name="company" required type="text" />
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)] sm:col-span-2">
                Business Email *
                <input className={fieldClass} name="email" required type="email" />
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">
                Country
                <input className={fieldClass} name="country" type="text" />
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)]">
                Project Type
                <select className={fieldClass} defaultValue="" name="project-type">
                  <option value="">Select project type</option>
                  <option>Export Injection Mold</option>
                  <option>Plastic Injection Molding</option>
                  <option>Mold Trial &amp; Validation</option>
                  <option>Tooling Spare Parts</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)] sm:col-span-2">
                Annual Volume
                <select className={fieldClass} defaultValue="" name="annual-volume">
                  <option value="">Select annual volume</option>
                  <option>Under 1,000 / year</option>
                  <option>1,000–10,000 / year</option>
                  <option>10,000–100,000 / year</option>
                  <option>100,000+ / year</option>
                </select>
              </label>
              <label className="grid gap-1.5 text-sm font-bold text-[var(--brand-dark)] sm:col-span-2">
                Message
                <textarea className={`${fieldClass} min-h-28 py-3`} name="message" />
              </label>
              <button className="min-h-12 rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)] sm:col-span-2" type="submit">
                Submit RFQ
              </button>
            </div>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">ENGINEERING-LED RFQ SUPPORT</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Ready to start your next tooling or manufacturing project?</h2>
          <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">
            Upload CAD files, drawings, material targets, expected volumes, surface requirements, and delivery region. Our engineering team will review your project and provide practical DFM feedback and quotation details.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[320px] lg:flex-col lg:justify-self-end">
          <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
            Upload CAD for DFM Review
          </Link>
          <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">
            Request Manufacturing Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
