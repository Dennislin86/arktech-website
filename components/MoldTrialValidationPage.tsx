import Image from "next/image";
import Link from "next/link";
import { LazyAutoplayVideo } from "@/components/LazyAutoplayVideo";
import { site } from "@/lib/site";

const validationBenefits = [
  {
    title: "Confirm Mold Function",
    body: "Review mold opening, movement, ejection, cooling and basic tooling behavior under molding conditions."
  },
  {
    title: "Establish Process Conditions",
    body: "Record key processing conditions used to produce the trial samples."
  },
  {
    title: "Validate Molded Samples",
    body: "Review appearance, dimensions, fit and project-specific functional concerns."
  },
  {
    title: "Close Engineering Corrections",
    body: "Translate trial findings and customer feedback into controlled correction and re-trial actions where required."
  }
] as const;

const workflow = [
  {
    title: "Trial Preparation",
    body: "Confirm mold readiness, material, machine setup and trial objectives."
  },
  {
    title: "Process Parameter Recording",
    body: "Record applicable molding conditions used to produce the trial samples."
  },
  {
    title: "Sample Review",
    body: "Review molded samples for appearance, filling, release and project-specific requirements."
  },
  {
    title: "Dimensional Inspection",
    body: "Check agreed critical dimensions and identify cavity-specific conditions where needed."
  },
  {
    title: "Engineering Correction & Re-Trial",
    body: "Translate findings and customer feedback into mold corrections, followed by re-trial where required."
  },
  {
    title: "Approval Coordination",
    body: "Confirm agreed validation status and prepare the tool for final handover or delivery requirements."
  }
] as const;

const evidence = [
  {
    title: "Mold Trial Report",
    body: "Records the trial stage, mold condition and the visual evidence used during technical review.",
    image: "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp",
    alt: "Anonymized Arktech mold trial report showing an injection mold installed for validation",
    fit: "object-cover"
  },
  {
    title: "Process Parameters",
    body: "Connects the submitted samples with the molding conditions used during the trial.",
    image: "/images/injection-mold-manufacturing/injection-molding-process-parameters.webp",
    alt: "Anonymized injection molding process parameter sheet recorded during mold trial",
    fit: "object-contain"
  },
  {
    title: "Dimensional Inspection",
    body: "Provides an anonymized record structure for reviewing agreed critical dimensions.",
    image: "/images/quality/dimensional-inspection-report-anonymized.webp",
    alt: "Anonymized dimensional inspection report for molded trial samples",
    fit: "object-contain"
  },
  {
    title: "Trial Samples",
    body: "Shows molded samples from multiple views so appearance and visible conditions can be reviewed.",
    image: "/images/injection-mold-manufacturing/molded-trial-sample-evidence.webp",
    alt: "Injection molded trial samples photographed from multiple views for review",
    fit: "object-cover"
  }
] as const;

const trialReviewTopics = [
  "Filling / Short Shot",
  "Flash & Parting Conditions",
  "Gate Vestige",
  "Weld Lines & Air Traps",
  "Ejection / Drag Marks",
  "Warpage & Shrinkage",
  "Critical Dimensions",
  "Cosmetic / Assembly Requirements"
] as const;

const processParameters = [
  "Melt Temperature",
  "Mold Temperature",
  "Injection Speed",
  "Injection / V-P Pressure",
  "Holding Pressure / Time",
  "Cooling Time",
  "Cycle Time",
  "Material / Drying Condition"
] as const;

const sampleValidation = [
  {
    title: "Critical Dimensions",
    body: "Check agreed drawing dimensions or CTQ features against project requirements."
  },
  {
    title: "Cavity Identification",
    body: "For multi-cavity molds, identify sample cavities where cavity-specific measurement or correction tracking is required.",
    href: "/injection-molds/multi-cavity-molds"
  },
  {
    title: "Visual & Cosmetic Review",
    body: "Review gate vestige, flash, drag marks, surface condition and other appearance-related requirements."
  },
  {
    title: "Fit / Assembly Review",
    body: "Check relevant interfaces or assemblies when agreed project samples or mating components are available."
  }
] as const;

const correctionLoop = ["Trial", "Review", "Customer Feedback", "Engineering Correction", "Re-Trial", "Approval"] as const;

const deliverables = [
  "Mold Trial Summary",
  "Process Parameter Sheet",
  "Sample Photos / Sample Identification",
  "Dimensional Inspection Report",
  "Engineering Correction Log",
  "Re-Trial Status",
  "Approval Notes / Open Issues",
  "Packing / Handover Evidence where applicable"
] as const;

const relatedCapabilities = [
  ["Injection Mold Manufacturing", "/injection-mold-manufacturing"],
  ["DFM Engineering", "/injection-molding-engineering"],
  ["Quality & Documentation", "/company/quality-documentation"],
  ["Plastic Injection Molding", "/plastic-injection-molding"],
  ["Project Management", "/company/project-management"]
] as const;

const faqs = [
  {
    question: "What happens during an injection mold trial?",
    answer: "The mold is prepared for the selected machine and material, applicable processing conditions are established, samples are produced, and mold function and molded-part conditions are reviewed against the agreed trial objectives."
  },
  {
    question: "What is the difference between T0 and T1 mold trials?",
    answer: "Trial-stage terminology can vary by customer and project. T0 often refers to an initial internal trial and T1 to a subsequent customer-review stage, but the naming and expected outputs should be agreed for each tooling program."
  },
  {
    question: "Are molding parameters recorded during the trial?",
    answer: "Applicable molding conditions can be recorded with the trial samples, including temperatures, pressures, speeds and timing information relevant to the machine, resin and project."
  },
  {
    question: "Can Arktech provide dimensional inspection reports for trial samples?",
    answer: "Yes. Dimensional inspection can be prepared for agreed critical dimensions or CTQ features based on the drawing and project-specific inspection scope."
  },
  {
    question: "What happens if trial samples do not meet the agreed requirements?",
    answer: "Trial findings and customer feedback are translated into defined tooling or process actions. The required corrections are reviewed and tracked before the next agreed validation stage."
  },
  {
    question: "Is the mold re-trialed after tooling corrections?",
    answer: "A re-trial may be completed when corrections need to be verified under molding conditions. The need and scope depend on the change, sample status and agreed approval requirements."
  },
  {
    question: "What records can be prepared before mold shipment?",
    answer: "Depending on project requirements, records can include a mold trial summary, process parameter sheet, sample photos, dimensional inspection, correction status, open issues and applicable handover evidence."
  }
] as const;

function SectionHeading({ eyebrow, title, body, id }: { eyebrow: string; title: string; body?: string; id: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]" id={id}>{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{body}</p> : null}
    </div>
  );
}

export function MoldTrialValidationPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Injection Molds", item: `${site.url}/injection-molds` },
      { "@type": "ListItem", position: 3, name: "Mold Trial & Validation", item: `${site.url}/injection-molds/mold-trial-validation` }
    ]
  };

  return (
    <>
      {[breadcrumbSchema, faqSchema].map((schema, index) => (
        <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} key={index} type="application/ld+json" />
      ))}

      <section className="border-b border-[var(--line)] bg-white">
        <div className="mx-auto w-[min(1280px,calc(100%-32px))] py-8 sm:py-10 lg:py-12 xl:py-14">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500 sm:text-[15px]">
            <Link className="focus-ring rounded-sm transition hover:text-[var(--brand)]" href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link className="focus-ring rounded-sm transition hover:text-[var(--brand)]" href="/injection-molds">Injection Molds</Link>
            <span aria-hidden="true">/</span>
            <span aria-current="page" className="font-medium text-slate-600">Mold Trial &amp; Validation</span>
          </nav>

          <div className="grid gap-8 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--brand)] sm:text-base">Mold Trial &amp; Validation</p>
              <h1 className="mt-4 text-balance text-[36px] font-bold leading-[1.05] tracking-[-0.035em] text-[var(--brand-dark)] sm:text-[40px] lg:text-[44px] xl:text-[48px]">
                Injection Mold Trial &amp; Validation
              </h1>
              <p className="mt-5 text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">Arktech supports structured injection mold trials with process parameter records, molded sample review, dimensional inspection and tracked engineering corrections before tooling approval and export delivery.</p>
              <p className="mt-5 text-sm font-semibold leading-6 text-[var(--brand-dark)] sm:text-base">
                Trial Setup · Process Parameters · Sample Review · Dimensional Inspection · Correction · Approval
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
                <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-center text-sm font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
              </div>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)]">
              <LazyAutoplayVideo
                ariaLabel="Arktech injection mold trial and validation process"
                className="h-full w-full object-cover object-center"
                poster="/images/Mold trail/Mold trial video photos.png"
                preload="metadata"
                src="/videos/Mold manufacturing/Mold-trial.mp4"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="validation-matters-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Why Validation Matters"
            id="validation-matters-heading"
            title="Why Mold Trial Is More Than Making Samples"
            body="A mold trial checks how the tool, molding conditions and molded parts behave together before the tool is approved for delivery or recurring production."
          />
          <div className="mt-9 grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {validationBenefits.map((item, index) => (
              <article className="border-t-2 border-[var(--brand)] pt-5" key={item.title}>
                <p className="text-xs font-bold tracking-[0.12em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</p>
                <h3 className="mt-3 text-xl font-bold leading-tight text-[var(--brand-dark)]">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="workflow-heading" className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Validation Workflow" id="workflow-heading" title="From Mold Trial to Tooling Approval" />
          <ol className="mt-9 grid gap-px overflow-hidden rounded-md border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 lg:grid-cols-3">
            {workflow.map((step, index) => (
              <li className="relative bg-white p-6 sm:p-7" key={step.title}>
                <span className="text-sm font-bold tracking-[0.12em] text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold text-[var(--brand-dark)]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="evidence-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Documented Validation"
            id="evidence-heading"
            title="Evidence from Mold Trial to Approval"
            body="Real technical records connect the trial setup, molding conditions, sample condition and dimensional review without exposing customer or project identifiers."
          />
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {evidence.map((item) => (
              <article className="overflow-hidden rounded-md border border-[var(--line)] bg-white" key={item.title}>
                <div className="relative aspect-[16/10] overflow-hidden bg-white">
                  <Image alt={item.alt} className={`${item.fit} object-center`} fill sizes="(min-width: 768px) 50vw, 100vw" src={item.image} />
                </div>
                <div className="border-t border-[var(--line)] p-5 sm:p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Validation Evidence</p>
                  <h3 className="mt-2 text-xl font-bold text-[var(--brand-dark)]">{item.title}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{item.body}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 max-w-4xl text-base leading-7 text-[var(--muted)]">Trial and inspection evidence helps keep mold corrections, sample review and approval decisions traceable through the project.</p>
        </div>
      </section>

      <section aria-labelledby="trial-review-heading" className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-start lg:gap-14">
          <SectionHeading eyebrow="Trial Review" id="trial-review-heading" title="What We Review During Injection Mold Trials" />
          <ul className="grid gap-x-8 border-y border-[var(--line)] sm:grid-cols-2">
            {trialReviewTopics.map((topic) => (
              <li className="flex min-h-16 items-center gap-3 border-b border-[var(--line)] py-3 font-semibold text-[var(--brand-dark)]" key={topic}>
                <span aria-hidden="true" className="h-7 w-1 shrink-0 bg-[var(--brand)]" />
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="parameters-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Process Parameters"
            id="parameters-heading"
            title="Recording Molding Conditions During Trial"
            body="Trial samples are reviewed together with the molding conditions used to produce them so engineering changes can be discussed against the actual process setup."
          />
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:items-stretch">
            <figure className="relative min-h-[320px] overflow-hidden rounded-md border border-[var(--line)] bg-white sm:min-h-[420px]">
              <Image alt="Anonymized injection molding process parameter sheet recorded during mold trial" className="object-contain object-center" fill sizes="(min-width: 1024px) 52vw, 100vw" src="/images/injection-mold-manufacturing/injection-molding-process-parameters.webp" />
            </figure>
            <div className="rounded-md border border-[var(--line)] bg-white p-6 sm:p-7">
              <p className="leading-7 text-[var(--muted)]">Recorded items can include the following, as applicable to the machine, material and agreed trial scope:</p>
              <ul className="mt-6 grid gap-x-6 sm:grid-cols-2">
                {processParameters.map((item) => (
                  <li className="border-t border-[var(--line)] py-3 font-semibold text-[var(--brand-dark)]" key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="sample-validation-heading" className="bg-white py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Sample Validation" id="sample-validation-heading" title="Dimensional Inspection and Sample Review" />
          <div className="mt-9 grid gap-x-8 gap-y-8 sm:grid-cols-2">
            {sampleValidation.map((item) => (
              <article className="border-t border-[var(--line)] pt-5" key={item.title}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p>
                {"href" in item ? <Link className="focus-ring mt-4 inline-flex font-bold text-[var(--brand)] hover:underline" href={item.href}>View Multi-Cavity Injection Molds →</Link> : null}
              </article>
            ))}
          </div>
          <div className="mt-8 border-t border-[var(--line)] pt-6">
            <Link className="focus-ring inline-flex font-bold text-[var(--brand)] hover:underline" href="/company/quality-documentation">View Quality &amp; Documentation →</Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="correction-loop-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading
            eyebrow="Correction Loop"
            id="correction-loop-heading"
            title="From Trial Feedback to Re-Trial"
            body="Trial findings and customer feedback are converted into defined tooling actions so corrections can be reviewed before the next trial."
          />
          <ol className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {correctionLoop.map((step, index) => (
              <li className="relative flex min-h-24 items-center justify-center rounded-sm border border-[var(--line)] bg-white p-4 text-center font-bold text-[var(--brand-dark)]" key={step}>
                <span className="absolute left-3 top-2 text-xs font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                {step}
                {index < correctionLoop.length - 1 ? <span aria-hidden="true" className="absolute -right-3 top-1/2 z-10 hidden -translate-y-1/2 bg-[var(--surface-soft)] px-1 text-xl text-[var(--brand)] lg:block">→</span> : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="deliverables-heading" className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-9 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:gap-14">
          <SectionHeading
            eyebrow="Trial Deliverables"
            id="deliverables-heading"
            title="What You Can Receive from Mold Trial & Validation"
            body="Depending on project requirements, validation records can include:"
          />
          <ul className="grid gap-x-8 border-y border-[var(--line)] sm:grid-cols-2">
            {deliverables.map((item) => (
              <li className="flex min-h-16 items-center gap-3 border-b border-[var(--line)] py-3 font-semibold text-[var(--brand-dark)]" key={item}>
                <span aria-hidden="true" className="text-[var(--brand)]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="related-capabilities-heading" className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Related Capabilities" id="related-capabilities-heading" title="Continue into Tooling & Production Support" />
          <div className="mt-7 flex flex-wrap gap-x-8 gap-y-4 border-y border-[var(--line)] py-6">
            {relatedCapabilities.map(([label, href]) => (
              <Link className="focus-ring font-bold text-[var(--brand-dark)] transition hover:text-[var(--brand)]" href={href} key={label}>{label} <span aria-hidden="true" className="text-[var(--brand)]">→</span></Link>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="mold-trial-faq-heading" className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,36fr)_minmax(0,64fr)] lg:gap-14">
          <SectionHeading eyebrow="FAQ" id="mold-trial-faq-heading" title="Mold Trial & Validation FAQs" />
          <div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {faqs.map((faq) => (
              <details className="group py-1" key={faq.question}>
                <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-bold text-[var(--brand-dark)]">
                  <span>{faq.question}</span>
                  <span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:hidden">+</span>
                  <span aria-hidden="true" className="hidden text-xl text-[var(--brand)] group-open:inline">−</span>
                </summary>
                <p className="pb-5 leading-7 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--line)] bg-[var(--cta-bg)] py-14 sm:py-16">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.13em] text-[var(--brand)]">Start a Validation Review</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Need Documented Mold Trials Before Tooling Approval?</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Send your CAD files, drawings, resin information, mold requirements and receiving-machine details. Arktech can review the project and define the appropriate mold-trial, sampling and validation scope.</p>
            <p className="mt-4 text-sm font-semibold leading-6 text-[var(--brand-dark)]">Particularly useful for export molds, customer-machine tooling and projects requiring documented approval before shipment.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Upload CAD for DFM Review</Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Request Tooling Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
