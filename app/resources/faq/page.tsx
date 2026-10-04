import type { Metadata } from "next";
import Link from "next/link";
import { manufacturingFaqCategories, popularFaqLinks } from "@/lib/manufacturing-faq";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Injection Molding & Tooling FAQ | Manufacturing Help Center | Arktech Mold" },
  description:
    "Find answers to common questions about injection mold manufacturing, plastic injection molding, DFM, materials, mold trials, quality documentation, tooling transfer and RFQ requirements.",
  alternates: { canonical: "/resources/faq" },
  openGraph: {
    title: "Injection Molding & Tooling FAQ | Manufacturing Help Center | Arktech Mold",
    description:
      "Practical answers about tooling, molding, DFM, materials, quality documentation, export delivery and RFQ requirements.",
    url: `${site.url}/resources/faq`,
    type: "website"
  }
};

const relatedGuides = [
  { label: "DFM Guide", href: "/resources/dfm-guide", description: "Review draft, wall thickness, ribs, bosses, gates and cosmetic surfaces before tooling." },
  { label: "Material Selection Guide", href: "/resources/material-selection-guide", description: "Compare performance and molding considerations for common thermoplastic families." },
  { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines", description: "Understand gate strategy, thermal balance, resin sensitivity and maintenance planning." }
];

const relatedCapabilities = [
  { label: "Injection Mold Manufacturing", href: "/injection-mold-manufacturing" },
  { label: "Plastic Injection Molding", href: "/plastic-injection-molding" },
  { label: "DFM Engineering", href: "/injection-molding-engineering" },
  { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
  { label: "Quality & Documentation", href: "/company/quality-documentation" }
];

function questionId(categoryId: string, itemIndex: number) {
  return `${categoryId}-question-${itemIndex + 1}`;
}

export default function ManufacturingFaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: manufacturingFaqCategories.flatMap((category) =>
      category.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer }
      }))
    )
  };

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} type="application/ld+json" />

      <section className="border-b border-[var(--line)] bg-white py-12 sm:py-14 lg:py-16">
        <div className="container-page max-w-5xl">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Manufacturing Help Center</p>
          <h1 className="internal-page-title mt-3 text-[var(--brand-dark)]">
            Injection Molding &amp; Tooling FAQs
          </h1>
          <p className="mt-4 max-w-3xl text-lg font-semibold leading-8 text-[var(--brand-dark)] sm:text-xl">
            Manufacturing Help Center for Tooling, Molding, DFM, Materials &amp; Export
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
            Find practical answers about injection mold manufacturing, plastic injection molding, DFM, materials, mold trials, quality documentation, tooling transfer and project quotation.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="#popular-questions">
              Browse Popular Questions
            </a>
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-6 font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">
              Upload CAD for DFM Review
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-12 sm:py-14" id="popular-questions">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Popular Questions</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Common Questions from Tooling &amp; Molding Buyers</h2>
          <div className="mt-7 grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {popularFaqLinks.map((item) => (
              <a className="focus-ring group flex min-h-36 flex-col justify-between rounded-sm border border-[var(--line)] bg-white p-5 transition hover:-translate-y-0.5 hover:border-red-200 hover:shadow-sm" href={`#${questionId(item.categoryId, item.itemIndex)}`} key={item.question}>
                <span className="font-bold leading-6 text-[var(--brand-dark)]">{item.question}</span>
                <span className="mt-4 text-sm font-bold text-[var(--brand)]">View answer →</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="FAQ categories" className="border-y border-[var(--line)] bg-white py-5">
        <div className="container-page flex flex-wrap gap-2">
          {manufacturingFaqCategories.map((category) => (
            <a className="focus-ring inline-flex min-h-10 items-center rounded-full border border-[var(--line)] bg-white px-4 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={`#${category.id}`} key={category.id}>
              {category.shortLabel}
            </a>
          ))}
        </div>
      </nav>

      <div id="faq-categories">
        {manufacturingFaqCategories.map((category, categoryIndex) => (
          <section className={`scroll-mt-24 py-12 sm:py-16 ${categoryIndex % 2 === 0 ? "bg-white" : "bg-[var(--surface-soft)]"}`} id={category.id} key={category.id}>
            <div className="container-page grid gap-8 lg:grid-cols-[minmax(250px,0.34fr)_minmax(0,0.66fr)] lg:gap-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{String(categoryIndex + 1).padStart(2, "0")} · {category.shortLabel}</p>
                <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">{category.title}</h2>
                <p className="mt-4 leading-7 text-[var(--muted)]">{category.description}</p>
                <Link className="focus-ring mt-5 inline-flex font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={category.relatedHref}>
                  {category.relatedLabel} →
                </Link>
              </div>

              <div className="divide-y divide-[var(--line)] border-y border-[var(--line)] bg-white">
                {category.items.map((item, itemIndex) => (
                  <details className="group scroll-mt-28 px-5 sm:px-6" id={questionId(category.id, itemIndex)} key={item.question}>
                    <summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-5 py-5 font-bold leading-6 text-[var(--brand-dark)] marker:hidden">
                      <span>{item.question}</span>
                      <span aria-hidden="true" className="shrink-0 text-xl font-medium text-[var(--brand)] group-open:hidden">+</span>
                      <span aria-hidden="true" className="hidden shrink-0 text-xl font-medium text-[var(--brand)] group-open:inline">−</span>
                    </summary>
                    <p className="max-w-3xl pb-5 leading-7 text-[var(--muted)]">{item.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="border-y border-[var(--line)] bg-white py-12 sm:py-16">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Engineering Guides</p>
          <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Explore More Engineering Resources</h2>
          <div className="mt-7 grid gap-4 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link className="focus-ring group rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6 transition hover:border-red-200 hover:bg-white" href={guide.href} key={guide.label}>
                <h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{guide.label}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{guide.description}</p>
                <span className="mt-5 inline-flex text-sm font-bold text-[var(--brand)]">Read guide →</span>
              </Link>
            ))}
          </div>

          <div className="mt-10 border-t border-[var(--line)] pt-8">
            <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Related Capabilities</h2>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
              {relatedCapabilities.map((capability) => (
                <Link className="focus-ring font-bold text-[var(--brand)] transition hover:text-[var(--brand-dark)]" href={capability.href} key={capability.label}>
                  {capability.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,56fr)_minmax(320px,44fr)] lg:items-center lg:gap-12">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand)]">Still Have a Project Question?</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Send Us Your CAD Files &amp; Project Requirements</h2>
            <p className="mt-4 text-base leading-7 text-[var(--cta-body)] sm:text-lg">
              If your question depends on part geometry, material, tooling structure or production requirements, send us your CAD files and drawings for an engineering review.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:min-w-[320px] lg:flex-col lg:justify-self-end">
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--brand)] bg-[var(--brand)] px-6 font-bold text-white transition hover:border-[var(--brand-hover)] hover:bg-[var(--brand-hover)]" href="/request-a-quote">
              Upload CAD for DFM Review
            </Link>
            <Link className="focus-ring inline-flex min-h-14 items-center justify-center rounded-sm border border-[var(--cta-heading)] bg-white px-6 font-bold text-[var(--cta-heading)] transition hover:bg-[var(--cta-heading)] hover:text-white" href="/request-a-quote">
              Request Tooling Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
