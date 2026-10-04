import Image from "next/image";
import Link from "next/link";
import type { IndustryLandingPageData } from "@/lib/industry-landing-pages";
import { site } from "@/lib/site";

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]";
const h2Class = "mt-3 max-w-4xl text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]";
const introClass = "mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg";
const primaryButton = "focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]";
const secondaryButton = "focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white";

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link className="focus-ring inline-flex items-center gap-2 font-bold text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href={href}>
      {children}<span aria-hidden="true">→</span>
    </Link>
  );
}

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <div>
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className={h2Class}>{title}</h2>
      <p className={introClass}>{intro}</p>
    </div>
  );
}

export function IndustryLandingPage({ page }: { page: IndustryLandingPageData }) {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries` },
      { "@type": "ListItem", position: 3, name: page.navTitle, item: `${site.url}/industries/${page.slug}` }
    ]
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map(([question, answer]) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: { "@type": "Answer", text: answer }
    }))
  };

  return (
    <div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c") }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }} />

      <section className="border-b border-[var(--line)] bg-white">
        <div className="container-page py-5 text-sm text-[var(--muted)]">
          <Link className="focus-ring hover:text-[var(--brand)]" href="/">Home</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <Link className="focus-ring hover:text-[var(--brand)]" href="/industries">Industries</Link>
          <span aria-hidden="true" className="px-2">/</span>
          <span className="text-[var(--brand-dark)]">{page.navTitle}</span>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-[#F4F7FA]">
        <div className="container-page grid gap-9 py-12 sm:py-14 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12 lg:py-16">
          <div>
            <p className={eyebrowClass}>{page.eyebrow}</p>
            <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">{page.h1}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">{page.heroCopy}</p>
            <p className="mt-5 text-sm font-semibold leading-6 text-[var(--brand-dark)]">DFM Engineering · Export Tooling · Mold Trial · Injection Molding</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link className={primaryButton} href="/request-a-quote">Upload CAD for DFM Review</Link>
              <Link className={secondaryButton} href="/request-a-quote">Request Tooling Quote</Link>
            </div>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-white">
            <Image alt={page.heroAlt} className="object-cover object-center" fill priority sizes="(min-width: 1024px) 62vw, 100vw" src={page.heroImage} />
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow={page.applicationsEyebrow ?? `${page.navTitle.toUpperCase()} APPLICATIONS`} title={page.applicationsHeading} intro={page.applicationsIntro} />
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-stretch">
            <div className="relative min-h-[320px] overflow-hidden rounded-sm border border-[var(--line)] sm:min-h-[420px] lg:min-h-0">
              <Image alt={page.applicationAlt} className="object-cover object-center" fill sizes="(min-width: 1024px) 40vw, 100vw" src={page.applicationImage} />
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {page.applications.map(([title, body]) => (
                <article className="bg-white p-5 sm:p-6" key={title}>
                  <h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-14">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading eyebrow="ENGINEERING CONSIDERATIONS" title={page.engineeringHeading} intro={page.engineeringIntro} />
            <div className="mt-6"><ArrowLink href="/injection-molding-engineering">Explore DFM Engineering</ArrowLink></div>
          </div>
          <ol className="grid gap-x-9 gap-y-0 sm:grid-cols-2">
            {page.engineeringConsiderations.map(([title, body], index) => (
              <li className="grid grid-cols-[44px_1fr] gap-3 border-t border-[var(--line)] py-5" key={title}>
                <span className="font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <div><h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-1 leading-7 text-[var(--muted)]">{body}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="CORE CAPABILITIES" title={page.capabilitiesHeading ?? `Tooling, Molding & Engineering for ${page.navTitle}`} intro={page.capabilityIntro} />
          <div className="mt-9 grid gap-5 md:grid-cols-2">
            {page.capabilities.map((item, index) => (
              <Link className="focus-ring group grid min-h-52 grid-cols-[52px_1fr] gap-4 rounded-sm border border-[var(--line)] bg-white p-6 transition hover:border-[var(--brand)]" href={item.href} key={item.title}>
                <span className="text-lg font-bold text-[var(--brand)]">0{index + 1}</span>
                <div><h3 className="text-2xl font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-3 leading-7 text-[var(--muted)]">{item.body}</p><span className="mt-5 inline-flex font-bold text-[var(--brand)]">Explore capability <span className="ml-2" aria-hidden="true">→</span></span></div>
              </Link>
            ))}
          </div>
          {page.extendedManufacturing ? (
            <div className="mt-7 flex flex-col justify-between gap-4 border-y border-[var(--line)] py-5 lg:flex-row lg:items-center">
              <div><p className="font-bold text-[var(--brand-dark)]">Extended Manufacturing by Arktech Group</p><p className="mt-1 text-sm leading-6 text-[var(--muted)]">Supporting metal parts, prototypes and product-completion processes can be coordinated separately through Arktech Group where required.<br />{page.extendedManufacturing.join(" · ")}</p></div>
              <a className="focus-ring font-bold text-[var(--brand)]" href="https://www.arktech-group.com" rel="noopener noreferrer" target="_blank">Explore Arktech Group <span aria-hidden="true">↗</span></a>
            </div>
          ) : null}
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--brand-dark)] py-14 text-white sm:py-16 lg:py-20">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#FFB8BB]">DEVELOPMENT TO PRODUCTION</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-bold leading-tight sm:text-4xl lg:text-[46px]">{page.lifecycleHeading ?? "A Controlled Path from Product Data to Molded-Part Supply"}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-[#CBD5E1] sm:text-lg">{page.lifecycleIntro}</p>
          <ol className="mt-9 grid gap-0 border-t border-white/20 md:grid-cols-2 xl:grid-cols-3">
            {page.lifecycle.map(([title, body], index) => (
              <li className="border-b border-white/20 py-6 md:px-6 md:first:pl-0 xl:border-r xl:[&:nth-child(3n)]:border-r-0" key={title}>
                <span className="text-sm font-bold text-[#FFB8BB]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-xl font-bold">{title}</h3>
                <p className="mt-2 leading-7 text-[#CBD5E1]">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="MATERIALS" title={page.materialsHeading ?? `Material Families for ${page.navTitle} Components`} intro={page.materialIntro} />
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {page.materials.map((group) => (
              <article className="border-t-4 border-[var(--brand)] bg-[#F5F7FA] p-6" key={group.title}>
                <h3 className="text-2xl font-bold text-[var(--brand-dark)]">{group.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{group.body}</p>
                <ul className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <li className="rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-sm font-semibold text-[var(--brand-dark)]" key={item}>{item}</li>)}</ul>
              </article>
            ))}
          </div>
          <div className="mt-7"><ArrowLink href="/resources/material-selection-guide">View Material Selection Guide</ArrowLink></div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="QUALITY & VALIDATION" title={page.qualityHeading ?? `Inspection & Sample Validation for ${page.navTitle}`} intro={page.qualityIntro} />
          <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,52fr)_minmax(0,48fr)] lg:items-stretch">
            <div className="grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {page.qualityItems.map(([title, body]) => <article className="bg-white p-5" key={title}><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}
            </div>
            <div className="grid min-h-[420px] grid-cols-2 grid-rows-2 gap-3">
              <div className="relative row-span-2 overflow-hidden rounded-sm border border-[var(--line)]"><Image alt={`Dimensional inspection and sample validation for ${page.navTitle.toLowerCase()} molded components`} className="object-cover object-center" fill sizes="(min-width: 1024px) 24vw, 50vw" src="/images/process/sample-validation-inspection-cmm.png" /></div>
              <div className="relative overflow-hidden rounded-sm border border-[var(--line)]"><Image alt="Anonymized dimensional inspection report for critical molded-part measurements" className="object-cover object-center" fill sizes="(min-width: 1024px) 20vw, 50vw" src="/images/quality/dimensional-inspection-report-anonymized.webp" /></div>
              <div className="relative overflow-hidden rounded-sm border border-[var(--line)]"><Image alt="Molded trial samples prepared for engineering review and validation" className="object-cover object-center" fill sizes="(min-width: 1024px) 20vw, 50vw" src="/images/injection-mold-manufacturing/molded-trial-sample-evidence.webp" /></div>
            </div>
          </div>
          <div className="mt-7"><ArrowLink href="/company/quality-documentation">View Quality & Documentation</ArrowLink></div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="RELEVANT MOLD TYPES" title={`Injection Mold Types for ${page.navTitle} Programs`} intro={page.moldTypesIntro} />
          <div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-3">
            {page.moldTypes.map((item) => {
              const content = <><h3 className="text-xl font-bold text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{item.body}</p>{item.href ? <span className="mt-4 inline-flex font-bold text-[var(--brand)]">Explore <span className="ml-2" aria-hidden="true">→</span></span> : null}</>;
              return item.href ? <Link className="focus-ring group bg-white p-6 transition hover:bg-[#FAFBFC]" href={item.href} key={item.title}>{content}</Link> : <article className="bg-white p-6" key={item.title}>{content}</article>;
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="TYPICAL PROJECT SCOPES" title={page.examplesHeading ?? `Representative ${page.navTitle} Tooling Applications`} intro={page.examplesIntro} />
          <div className="mt-9 grid gap-5 lg:grid-cols-3">
            {page.examples.map((item, index) => (
              <article className="flex min-h-80 flex-col rounded-sm border border-[var(--line)] bg-white p-6" key={item.title}>
                <span className="text-sm font-bold text-[var(--brand)]">SCOPE {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-2xl font-bold text-[var(--brand-dark)]">{item.title}</h3>
                <dl className="mt-6 space-y-4 text-sm"><div><dt className="font-bold uppercase tracking-wide text-[var(--brand)]">Application</dt><dd className="mt-1 leading-6 text-[var(--muted)]">{item.application}</dd></div><div><dt className="font-bold uppercase tracking-wide text-[var(--brand)]">Engineering focus</dt><dd className="mt-1 leading-6 text-[var(--muted)]">{item.focus}</dd></div><div><dt className="font-bold uppercase tracking-wide text-[var(--brand)]">Potential support</dt><dd className="mt-1 leading-6 text-[var(--muted)]">{item.support}</dd></div></dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="ENGINEERING RESOURCES" title="Plan the Part Before Releasing Tooling" intro="Use these practical engineering guides to prepare geometry, materials and tooling requirements for review." />
            <div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">
              {page.resources.map((item) => <Link className="focus-ring group block py-5" href={item.href} key={item.title}><div className="flex items-start justify-between gap-4"><div><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.body}</p></div><span className="font-bold text-[var(--brand)]" aria-hidden="true">→</span></div></Link>)}
            </div>
          </div>
          <div>
            <SectionHeading eyebrow="RELATED CAPABILITIES" title="Continue into Tooling & Production" intro="Move from industry requirements into the capability page that matches your current project stage." />
            <div className="mt-7 grid gap-4">
              {page.relatedCapabilities.map((item) => <Link className="focus-ring group rounded-sm border border-[var(--line)] p-5 transition hover:border-[var(--brand)]" href={item.href} key={item.title}><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p></Link>)}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
        <div className="container-page">
          <SectionHeading eyebrow="FAQ" title={`${page.navTitle} Injection Molding FAQ`} intro="Practical answers for product teams preparing a tooling or molding RFQ." />
          <div className="mt-9 grid gap-4 lg:grid-cols-2">
            {page.faqs.map(([question, answer]) => <details className="group rounded-sm border border-[var(--line)] bg-white p-5 open:border-[var(--brand)]" key={question}><summary className="focus-ring cursor-pointer list-none pr-8 text-lg font-bold text-[var(--brand-dark)] marker:content-none">{question}<span className="float-right text-[var(--brand)]" aria-hidden="true">+</span></summary><p className="mt-4 leading-7 text-[var(--muted)]">{answer}</p></details>)}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center lg:gap-12">
          <div><p className={eyebrowClass}>{page.ctaEyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">{page.ctaHeading}</h2><p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cta-body)] sm:text-lg">{page.ctaCopy}</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end"><Link className={primaryButton} href="/request-a-quote">Upload CAD for DFM Review</Link><Link className={secondaryButton} href="/request-a-quote">Request Tooling Quote</Link></div>
        </div>
      </section>
    </div>
  );
}
