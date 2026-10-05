import type { Metadata } from "next";
import Link from "next/link";
import { QualityInspectionVideo } from "@/components/QualityInspectionVideo";
import { QualityRecordPreview } from "@/components/QualityRecordPreview";

const canonicalUrl = "https://www.arktechmold.com/company/quality-documentation";

export const metadata: Metadata = {
  title: { absolute: "Injection Mold Quality Documentation & Inspection Records | Arktech" },
  description: "Inspection reports, mold trial records and project-specific quality documentation for injection molds and molded parts, aligned with agreed customer requirements.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Injection Mold Quality Documentation & Inspection Records | Arktech",
    description: "Inspection reports, mold trial records and project-specific quality documentation for injection molds and molded parts, aligned with agreed customer requirements.",
    type: "website",
    url: canonicalUrl
  }
};

const recordCategories = [
  ["Dimensional Inspection", "Recorded results for agreed drawing characteristics and critical dimensions."],
  ["Trial & Process Records", "Trial findings, sample status and recorded molding conditions where applicable."],
  ["Material & Tooling Quality Records", "Specified material, steel or tooling inspection records where available and agreed."],
  ["Correction & Confirmation", "Open items, agreed corrective actions and confirmation records where applicable."]
];

const reportFields = [
  ["Drawing reference", "The drawing characteristic linked to the inspected result."],
  ["Nominal dimension and tolerance", "The specified target and agreed acceptance range."],
  ["Measured result", "The value recorded for the inspected sample."],
  ["Pass / Fail status", "The result against the agreed drawing requirement."],
  ["Measurement method", "The project-specific method recorded for the characteristic."],
  ["Inspection date / sample stage", "The date or relevant sample stage connected to the result."]
];

const inspectionThemes = ["Critical dimensions", "Appearance and molding condition", "Assembly / fit where required", "Drawing-based review"];

const contextualLinks = [
  ["Mold Trial & Validation", "/injection-molds/mold-trial-validation"],
  ["Tooling Documentation", "/injection-molds/tooling-documentation"],
  ["Export Tooling & Mold Transfer", "/injection-molds/export-tooling-transfer"]
];

const faqs = [
  { question: "What quality records can be provided with an injection mold project?", answer: "Depending on the agreed scope, records can include dimensional inspection results, trial and process records, specified material or tooling records, and correction or confirmation items. Not every project requires every record." },
  { question: "Can dimensional inspection reports be included?", answer: "Yes. Dimensional inspection reporting can be included for agreed drawing characteristics and critical dimensions, with the inspection scope and measurement methods confirmed for the project." },
  { question: "Are molding parameters recorded during mold trials?", answer: "Molding conditions can be recorded during relevant trials where applicable. These records provide a reference for trial comparison and technical handover; they are not a guarantee of identical performance on every receiving machine." },
  { question: "Can material or steel records be provided?", answer: "Specified material, steel or heat-treatment records can be provided where they are available, applicable and included in the agreed project scope." },
  { question: "How do quality records support tooling handover?", answer: "They help customer teams review inspected characteristics, trial findings, open items and agreed project status. Technical tooling files and transfer requirements are handled through the relevant tooling-documentation and transfer scope." }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } }))
};

function SectionHeading({ eyebrow, title, intro, id }: { eyebrow: string; title: string; intro: string; id?: string }) {
  return <div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl" id={id}>{title}</h2><p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{intro}</p></div>;
}

export default function QualityDocumentationPage() {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema).replaceAll("<", "\\u003c") }} type="application/ld+json" />

      <section className="border-b border-[var(--line)] bg-[var(--surface-soft)]">
        <div className="container-page grid gap-9 py-12 sm:py-14 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-center lg:gap-12 lg:py-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">QUALITY &amp; DOCUMENTATION</p>
            <h1 className="mt-4 max-w-[760px] text-4xl font-bold leading-[1.05] tracking-tight text-[var(--brand-dark)] sm:text-5xl lg:text-[3rem]">Injection Mold Quality Documentation &amp; Inspection Records</h1>
            <p className="mt-5 max-w-[44rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Review inspection results, trial records and project-specific quality documentation for injection molds and molded parts, according to the agreed project scope.</p>
            <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Discuss Documentation Requirements</Link>
              <Link className="focus-ring inline-flex min-h-11 shrink-0 items-center rounded-sm font-bold text-[var(--brand)] hover:underline" href="#inspection-evidence">View Inspection Evidence <span aria-hidden="true" className="ml-2">↓</span></Link>
            </div>
          </div>
          <QualityRecordPreview alt="Anonymized dimensional inspection report for molded trial samples" caption="Anonymized dimensional inspection report" height={750} preload sizes="(min-width: 1024px) 48vw, 100vw" src="/images/quality/dimensional-inspection-report-anonymized.webp" width={1050} />
        </div>
      </section>

      <section className="bg-white py-12 sm:py-14"><div className="container-page">
        <SectionHeading eyebrow="PROJECT-SPECIFIC SCOPE" intro="The documentation scope is agreed around the project, customer requirements and relevant inspection or validation stages." title="What Quality Records Can Be Included" />
        <div className="mt-8 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">{recordCategories.map(([title, body]) => <article className="bg-white p-5 sm:p-6" key={title}><h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)] sm:text-base">{body}</p></article>)}</div>
        <div className="mt-5 grid max-w-5xl gap-3 text-sm leading-6 text-[var(--muted)] md:grid-cols-2">
          <p>Material and tooling records may include steel / material identification records, specified certificates where available and agreed, and heat-treatment records where applicable.</p>
          <p>Where findings require action, open items and agreed corrections can be recorded for review before confirmation or the next project step.</p>
        </div>
        <p className="mt-3 max-w-4xl text-sm leading-6 text-[var(--muted)]">Records are generated at the relevant project stages; availability and format depend on the agreed scope.</p>
      </div></section>

      <section aria-labelledby="inspection-evidence-heading" className="scroll-mt-24 bg-[var(--surface-soft)] py-12 sm:py-14" id="inspection-evidence"><div className="container-page">
        <SectionHeading eyebrow="INSPECTION EVIDENCE" id="inspection-evidence-heading" intro="Inspection results are linked to the customer drawing and agreed inspection scope so engineering teams can review critical dimensions, sample condition and open items." title="Dimensional Inspection & Sample Evidence" />
        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start">
          <div>
            <h3 className="text-xl font-bold text-[var(--brand-dark)]">Typical report structure</h3>
            <dl className="mt-5 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">{reportFields.map(([field, purpose]) => <div className="bg-white p-4" key={field}><dt className="text-sm font-bold text-[var(--brand-dark)]">{field}</dt><dd className="mt-1 text-sm leading-6 text-[var(--muted)]">{purpose}</dd></div>)}</dl>
            <p className="mt-5 text-sm leading-6 text-[var(--muted)]">Report scope and measurement methods are agreed according to drawing characteristics and project requirements.</p>
            <ul aria-label="Inspection review themes" className="mt-6 grid gap-3 sm:grid-cols-2">{inspectionThemes.map((item) => <li className="flex min-h-11 items-center border-l-2 border-[var(--brand)] bg-white px-4 py-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>{item}</li>)}</ul>
          </div>
          <div className="grid gap-5">
            <QualityRecordPreview alt="Anonymized dimensional inspection report for molded trial samples" caption="Dimensional inspection report" height={750} sizes="(min-width: 1024px) 48vw, 100vw" src="/images/quality/dimensional-inspection-report-anonymized.webp" width={1050} />
            <QualityRecordPreview alt="Operator reviewing a measurement screen beside dimensional inspection equipment" aspect="wide" caption="Inspection setup and measurement review" height={1085} sizes="(min-width: 1024px) 48vw, 100vw" src="/images/process/sample-validation-inspection-cmm.png" width={2048} />
            <p className="text-sm leading-6 text-[var(--muted)]">The report and inspection image illustrate available record and inspection contexts; they are not presented as evidence from the same project.</p>
          </div>
        </div>
        <QualityInspectionVideo />
      </div></section>

      <section className="bg-white py-12 sm:py-14"><div className="container-page">
        <SectionHeading eyebrow="MOLD TRIAL RECORDS" intro="Records generated during mold trials can document molding conditions, sample status and engineering findings for customer review." title="Trial & Process Records" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <QualityRecordPreview alt="Anonymized injection molding process parameter record from a mold trial" aspect="document" caption="Mold-trial process parameter record" height={1142} sizes="(min-width: 768px) 48vw, 100vw" src="/images/injection-mold-manufacturing/injection-molding-process-parameters.webp" width={1200} />
          <QualityRecordPreview alt="Mold trial report page showing an open injection mold installed in a molding machine" aspect="document" caption="Mold trial observation record" height={1037} sizes="(min-width: 768px) 48vw, 100vw" src="/images/injection-mold-manufacturing/mold-trial-report-evidence.webp" width={1400} />
        </div>
        <div className="mt-7 max-w-4xl border-l-2 border-[var(--brand)] pl-5"><p className="leading-7 text-[var(--muted)]">Recorded molding conditions provide a reference for trial comparison and technical handover. They do not guarantee identical performance on every receiving machine.</p><Link className="focus-ring mt-4 inline-flex min-h-11 items-center rounded-sm font-bold text-[var(--brand)] hover:underline" href="/injection-molds/mold-trial-validation">Explore Mold Trial &amp; Validation <span aria-hidden="true" className="ml-2">→</span></Link></div>
      </div></section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14"><div className="container-page">
        <SectionHeading eyebrow="CUSTOMER REVIEW" intro="Quality records help customer teams review inspected characteristics, trial findings and agreed project status. Technical tooling files and transfer requirements are handled through the relevant tooling-support scope." title="Records for Customer Review & Handover" />
        <nav aria-label="Related tooling quality and handover pages" className="mt-8 grid overflow-hidden rounded-md border border-[var(--line)] md:grid-cols-3">{contextualLinks.map(([label, href], index) => <Link className={`focus-ring flex min-h-14 items-center justify-between gap-4 px-5 py-4 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--brand)] ${index > 0 ? "border-t border-[var(--line)] md:border-l md:border-t-0" : ""}`} href={href} key={href}><span>{label}</span><span aria-hidden="true">→</span></Link>)}</nav>
        <div className="mt-6 flex flex-col gap-3 border-l-2 border-[var(--brand)] pl-5 sm:flex-row sm:items-center sm:justify-between"><p className="max-w-3xl text-sm leading-6 text-[var(--muted)]">For molded-part production programs, inspection documentation is agreed around the project requirements.</p><Link className="focus-ring inline-flex min-h-11 shrink-0 items-center rounded-sm font-bold text-[var(--brand)] hover:underline" href="/plastic-injection-molding">Plastic Injection Molding <span aria-hidden="true" className="ml-2">→</span></Link></div>
      </div></section>

      <section className="bg-white py-12 sm:py-14"><div className="container-page">
        <SectionHeading eyebrow="QUALITY RECORD FAQ" intro="Documentation is matched to the project scope rather than treated as one fixed package." title="Quality Documentation Questions" />
        <div className="mt-8 max-w-4xl divide-y divide-[var(--line)] border-y border-[var(--line)]">{faqs.map((item) => <details className="group" key={item.question}><summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 font-bold text-[var(--brand-dark)] marker:hidden"><span>{item.question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] transition group-open:rotate-45 motion-reduce:transition-none">+</span></summary><p className="max-w-3xl pb-5 pr-10 text-sm leading-7 text-[var(--muted)] sm:text-base">{item.answer}</p></details>)}</div>
      </div></section>

      <section className="border-t border-[var(--line)] bg-white py-12 sm:py-14"><div className="container-page"><div className="rounded-md border border-[var(--line)] bg-[var(--surface-soft)] px-6 py-8 sm:px-8 sm:py-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
        <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">PROJECT-SPECIFIC DOCUMENTATION</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Discuss Your Quality Documentation Requirements</h2><p className="mt-4 leading-7 text-[var(--muted)]">Share your drawings, critical dimensions and documentation requirements so we can review the appropriate inspection and record scope for your project.</p></div>
        <Link className="focus-ring mt-6 inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)] lg:mt-0" href="/request-a-quote">Discuss Documentation Requirements</Link>
      </div></div></section>
    </>
  );
}
