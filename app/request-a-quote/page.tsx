import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload CAD Files for DFM Review & Mold Quotation",
  description:
    "Upload CAD files for DFM engineering review, injection mold quotation, and manufacturing feasibility feedback from Arktech's China team within 24 hours."
};

const materials = ["ABS", "PC", "PP", "Nylon", "Aluminum", "Steel"];
const volumes = ["Under 1,000 / year", "1,000–10,000 / year", "10,000–100,000 / year", "100,000+ / year"];
const processes = ["Injection Molding", "CNC", "Die Casting", "Tooling Only"];
const markets = ["Europe", "North America", "Other"];
const stages = ["Prototype", "Pilot", "Mass Production"];

const inputClass =
  "min-h-12 rounded-sm border border-[var(--line)] bg-white px-3 font-normal outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-red-100";

export default function RequestQuotePage() {
  return (
    <main>
      <section className="bg-[var(--brand-dark)] py-16 text-white sm:py-20" id="top">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#f4c7ca]">DFM Engineering Review</p>
          <h1 className="mt-4 max-w-5xl text-3xl font-semibold leading-tight tracking-[-0.02em] sm:text-4xl lg:text-5xl">
            Upload CAD Files for DFM Review, Injection Mold Quotation & Manufacturing Feasibility Analysis
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-white/80 sm:text-lg">
            Get engineering feedback on manufacturability, tooling strategy, cost drivers, and production readiness from our China manufacturing team within 24 hours.
          </p>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-18">
        <div className="container-page grid gap-8 lg:grid-cols-[1fr_0.38fr] lg:items-start">
          <form className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm sm:p-8">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Secure Project Upload</p>
              <h2 className="mt-2 text-2xl font-bold sm:text-3xl">Start Your DFM Review</h2>
              <p className="mt-3 leading-7 text-[var(--muted)]">Add your CAD files and the project information our engineers need to provide useful feedback and an accurate quotation.</p>
            </div>

            <label className="mt-7 flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-sm border-2 border-dashed border-[var(--brand)] bg-[var(--accent-soft)] px-5 text-center transition hover:border-[var(--brand-hover)]">
              <span className="text-lg font-bold text-[var(--brand-dark)]">Drag and drop CAD or RFQ files here</span>
              <span className="mt-2 text-sm leading-6 text-[var(--muted)]">or click to browse — multiple files supported</span>
              <span className="mt-4 rounded-sm bg-[var(--brand-dark)] px-4 py-2 text-sm font-bold text-white">Choose Files</span>
              <input accept=".step,.stp,.iges,.igs,.stl,.x_t,.pdf,.zip" className="sr-only" multiple name="cad-files" type="file" />
              <span className="mt-4 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">STEP, STP, IGES, STL, X_T, PDF, ZIP</span>
            </label>

            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {[
                ["Full name", "name", "text"],
                ["Company", "company", "text"],
                ["Work email", "email", "email"],
                ["Phone / WhatsApp", "phone", "tel"]
              ].map(([label, name, type]) => (
                <label className="grid gap-2 text-sm font-bold" key={name}>
                  {label}
                  <input className={inputClass} name={name} required={name === "name" || name === "email"} type={type} />
                </label>
              ))}

              <label className="grid gap-2 text-sm font-bold">
                Material selection
                <select className={inputClass} defaultValue="" name="material" required>
                  <option disabled value="">Select material</option>
                  {materials.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Annual volume
                <select className={inputClass} defaultValue="" name="annual-volume" required>
                  <option disabled value="">Select annual volume</option>
                  {volumes.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Manufacturing process
                <select className={inputClass} defaultValue="" name="manufacturing-process" required>
                  <option disabled value="">Select process</option>
                  {processes.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Target market
                <select className={inputClass} defaultValue="" name="target-market" required>
                  <option disabled value="">Select target market</option>
                  {markets.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Project stage
                <select className={inputClass} defaultValue="" name="project-stage" required>
                  <option disabled value="">Select project stage</option>
                  {stages.map((item) => <option key={item}>{item}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-bold">
                Target lead time
                <input className={inputClass} name="target-lead-time" placeholder="Required sample or delivery date" type="text" />
              </label>
            </div>

            <label className="mt-5 grid gap-2 text-sm font-bold">
              Project notes
              <textarea className="min-h-36 rounded-sm border border-[var(--line)] p-3 font-normal outline-none transition focus:border-[var(--brand)] focus:ring-2 focus:ring-red-100" name="notes" placeholder="Include tolerances, surface finish, tooling requirements, current sourcing issues, or other project details." />
            </label>

            <label className="mt-5 flex items-start gap-3 text-sm leading-6 text-[var(--muted)]">
              <input className="mt-1 size-4 accent-[var(--brand)]" name="nda" type="checkbox" />
              Request an NDA before detailed engineering review.
            </label>

            <button className="mt-6 min-h-13 w-full rounded-sm bg-[var(--brand)] px-6 py-3 font-bold text-white shadow-sm transition hover:brightness-90 sm:w-auto" type="submit">
              Start DFM Review
            </button>
            <p className="mt-4 text-sm text-[var(--muted)]">Your files are used only for engineering review and quotation.</p>
          </form>

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
          {["ISO-certified manufacturing network", "Export tooling experience for EU & US markets", "NDA available", "24-hour engineering response"].map((item) => (
            <div className="border-l-4 border-[var(--brand)] bg-white p-5 font-bold text-[var(--brand-dark)] shadow-sm" key={item}>{item}</div>
          ))}
        </div>
      </section>

      <section className="bg-white py-14 text-center">
        <div className="container-page">
          <h2 className="text-3xl font-bold">Ready for an engineering review?</h2>
          <p className="mx-auto mt-3 max-w-2xl leading-7 text-[var(--muted)]">Upload complete project files so our team can evaluate manufacturability, tooling scope, cost drivers, and production timing.</p>
          <a className="mt-6 inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:brightness-90" href="#top">
            Submit RFQ for Engineering Review
          </a>
        </div>
      </section>
    </main>
  );
}
