import Image from "next/image";
import Link from "next/link";
import type { InjectionMoldingProcessPageData } from "@/lib/injection-molding-process-pages";
import { site } from "@/lib/site";

function SectionHeading({ eyebrow, title, body }: { eyebrow: string; title: string; body?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold leading-[1.12] tracking-[-0.02em] text-[var(--brand-dark)] sm:text-4xl">{title}</h2>
      {body ? <p className="mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg">{body}</p> : null}
    </div>
  );
}

export function InjectionMoldingProcessPage({ page }: { page: InjectionMoldingProcessPageData }) {
  const pageUrl = `${site.url}/plastic-injection-molding/${page.slug}`;
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.metaDescription,
      url: pageUrl,
      provider: { "@id": `${site.url}/#organization` }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` },
        { "@type": "ListItem", position: 2, name: "Plastic Injection Molding", item: `${site.url}/plastic-injection-molding/` },
        { "@type": "ListItem", position: 3, name: page.navLabel, item: pageUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } }))
    }
  ];

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas).replaceAll("<", "\\u003c") }} type="application/ld+json" />

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page py-4">
          <nav aria-label="Breadcrumb" className="text-sm text-[var(--muted)]">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link></li><li aria-hidden="true">/</li>
              <li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/plastic-injection-molding">Plastic Injection Molding</Link></li><li aria-hidden="true">/</li>
              <li aria-current="page" className="font-semibold text-[var(--brand-dark)]">{page.navLabel}</li>
            </ol>
          </nav>
        </div>
        <div className="container-page grid gap-9 pb-12 pt-5 lg:grid-cols-[minmax(0,43fr)_minmax(0,57fr)] lg:items-center lg:gap-12 lg:pb-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.15em] text-[var(--brand)]">{page.eyebrow}</p>
            <h1 className="internal-page-title mt-4 text-[var(--brand-dark)]">{page.h1}</h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted)]">{page.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">{page.ctaLabel}</Link>
              <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-6 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white" href="#project-requirements">Review Project Requirements</Link>
            </div>
          </div>
          <figure className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
            <Image alt={page.heroAlt} className={`${page.heroFit === "contain" ? "object-contain" : "object-cover"} object-center`} fill priority sizes="(min-width: 1024px) 52vw, 100vw" src={page.heroImage} />
          </figure>
        </div>
      </section>

      <section className="scroll-mt-28 bg-[var(--surface-soft)] py-14 sm:py-16" id="project-requirements">
        <div className="container-page">
          <SectionHeading eyebrow="Product Requirements" title={page.requirementsTitle} body={page.requirementsIntro} />
          <div className="mt-8 grid overflow-hidden rounded-sm border border-[var(--line)] bg-white sm:grid-cols-2">
            {page.requirements.map((item, index) => <article className={`p-5 sm:p-6 ${index % 2 ? "border-t border-[var(--line)] sm:border-l sm:border-t-0" : index >= 2 ? "border-t border-[var(--line)]" : ""}`} key={item.title}><h3 className="text-lg font-bold text-[var(--brand-dark)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[0.4fr_0.6fr] lg:gap-14">
          <SectionHeading eyebrow="Process Review" title={page.considerationsTitle} body={page.considerationsIntro} />
          <dl className="divide-y divide-[var(--line)] border-y border-[var(--line)]">
            {page.considerations.map((item) => <div className="grid gap-1 py-4 sm:grid-cols-[0.34fr_0.66fr] sm:gap-6" key={item.title}><dt className="font-bold text-[var(--brand-dark)]">{item.title}</dt><dd className="text-sm leading-6 text-[var(--muted)]">{item.body}</dd></div>)}
          </dl>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Real Evidence" title={page.evidenceTitle} body={page.evidenceIntro} />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {page.evidence.map((item) => <figure className="overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={item.title}><div className="relative aspect-[16/10] overflow-hidden bg-white"><Image alt={item.alt} className={`${item.fit === "contain" ? "object-contain" : "object-cover"} object-center`} fill sizes="(min-width: 768px) 33vw, 100vw" src={item.image} /></div><figcaption className="p-5"><h3 className="text-lg font-bold text-[var(--brand-dark)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p></figcaption></figure>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page grid gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <SectionHeading eyebrow="Inspection" title={page.inspectionTitle} body={page.inspectionIntro} />
            <ul className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">{page.inspectionPoints.map((item) => <li className="flex gap-3 py-3.5 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}><span aria-hidden="true" className="text-[var(--brand)]">—</span><span>{item}</span></li>)}</ul>
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">What to Share for Review</p>
            <h2 className="mt-3 text-3xl font-bold leading-[1.12] text-[var(--brand-dark)]">Project Information for a Useful Quotation</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)]">The quotation review is more reliable when the part, material, production and inspection requirements are provided together.</p>
            <ol className="mt-7 grid gap-3 sm:grid-cols-2">{page.quoteInputs.map((item, index) => <li className="flex min-h-20 gap-3 border border-[var(--line)] bg-[var(--surface-soft)] p-4" key={item}><span className="font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><span className="text-sm font-semibold leading-6 text-[var(--brand-dark)]">{item}</span></li>)}</ol>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-10 sm:py-12">
        <div className="container-page grid gap-6 lg:grid-cols-[0.32fr_0.68fr] lg:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Technical Paths</p><h2 className="mt-3 text-2xl font-bold leading-tight text-[var(--brand-dark)]">Continue the Project Review</h2></div>
          <nav aria-label={`Related links for ${page.navLabel}`} className="grid gap-x-6 sm:grid-cols-2">{page.related.map((item) => <Link className="focus-ring flex min-h-12 items-center justify-between rounded-sm border-b border-[var(--line)] font-bold text-[var(--brand-dark)] hover:text-[var(--brand)]" href={item.href} key={item.href}>{item.label}<span aria-hidden="true">→</span></Link>)}</nav>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container-page max-w-5xl">
          <SectionHeading eyebrow="FAQ" title={`${page.navLabel} FAQ`} />
          <div className="mt-8 divide-y divide-[var(--line)] border-y border-[var(--line)]">{page.faqs.map((faq) => <details className="group" key={faq.question}><summary className="focus-ring flex min-h-14 cursor-pointer list-none items-center justify-between gap-5 rounded-sm py-4 font-bold text-[var(--brand-dark)] marker:hidden"><span>{faq.question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] transition group-open:rotate-45 motion-reduce:transition-none">+</span></summary><p className="max-w-4xl pb-5 pr-10 text-sm leading-7 text-[var(--muted)] sm:text-base">{faq.answer}</p></details>)}</div>
        </div>
      </section>

      <section className="border-y border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-14">
        <div className="container-page flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Review</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">Discuss Your {page.navLabel} Requirements</h2><p className="mt-4 text-base leading-7 text-[var(--cta-body)]">Share the part files, exact material information, expected production stage and inspection requirements so the tooling and molding scope can be reviewed together.</p></div>
          <Link className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[var(--brand)] px-6 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">{page.ctaLabel}</Link>
        </div>
      </section>
    </>
  );
}
