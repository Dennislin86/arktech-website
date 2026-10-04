import Image from "next/image";
import Link from "next/link";
import { FullBleedHero } from "@/components/FullBleedHero";
import type { IndustryLandingPageData } from "@/lib/industry-landing-pages";
import { industryProcess } from "@/lib/industry-landing-pages";
import { site } from "@/lib/site";

const eyebrowClass = "text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]";
const h2Class = "mt-3 max-w-4xl text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl lg:text-[46px]";
const introClass = "mt-4 max-w-3xl text-base leading-7 text-[var(--muted)] sm:text-lg";
const primaryButton = "focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 text-center font-bold text-white transition hover:bg-[var(--brand-hover)]";
const secondaryButton = "focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] bg-white px-5 text-center font-bold text-[var(--brand-dark)] transition hover:bg-[var(--brand-dark)] hover:text-white";

function SectionHeading({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return <div><p className={eyebrowClass}>{eyebrow}</p><h2 className={h2Class}>{title}</h2><p className={introClass}>{intro}</p></div>;
}

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link className="focus-ring inline-flex items-center gap-2 rounded-sm font-bold text-[var(--brand)] transition hover:text-[var(--brand-hover)]" href={href}>{children}<span aria-hidden="true">→</span></Link>;
}

export function IndustryLandingPage({ page }: { page: IndustryLandingPageData }) {
  const pageUrl = `${site.url}/industries/${page.slug}/`;
  const schemas = [
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: page.seoTitle, description: page.metaDescription, isPartOf: { "@id": `${site.url}/#website` }, about: [page.navTitle, "Injection mold manufacturing", "Plastic injection molding"] },
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` }, { "@type": "ListItem", position: 2, name: "Industries", item: `${site.url}/industries/` }, { "@type": "ListItem", position: 3, name: page.navTitle, item: pageUrl }] },
    { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: page.faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) }
  ];

  return <>
    {schemas.map((schema, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replaceAll("<", "\\u003c") }} key={index} type="application/ld+json" />)}

    <FullBleedHero
      backgroundImages={[{ src: page.heroImage, alt: page.heroAlt, position: page.heroPosition ?? "center" }]}
      breadcrumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: page.navTitle }]}
      description={page.heroCopy}
      eyebrow={page.eyebrow}
      height="standard"
      overlay="strong"
      primaryCta={{ label: "Upload CAD for DFM Review", href: "/request-a-quote" }}
      secondaryCta={{ label: page.secondaryCta, href: "/request-a-quote" }}
      supportingLine="DFM Engineering · Export Tooling · Mold Trial · Plastic Injection Molding"
      title={page.h1}
    />

    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="TYPICAL APPLICATIONS" title={page.applicationsHeading} intro={page.applicationsIntro} />
        <div className="mt-9 grid gap-8 lg:grid-cols-[minmax(0,42fr)_minmax(0,58fr)] lg:items-stretch">
          <div className="relative min-h-[320px] overflow-hidden rounded-sm border border-[var(--line)] sm:min-h-[420px] lg:min-h-0">
            <Image alt={page.applicationAlt} className="object-cover object-center" fill loading="lazy" sizes="(min-width: 1024px) 40vw, 100vw" src={page.applicationImage} />
          </div>
          <div className="grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
            {page.applications.map(([title, body]) => <article className="bg-white p-5 sm:p-6" key={title}><h3 className="text-xl font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{body}</p></article>)}
          </div>
        </div>
      </div>
    </section>

    <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-14">
        <div className="lg:sticky lg:top-28 lg:self-start"><SectionHeading eyebrow="ENGINEERING PRIORITIES" title={page.engineeringHeading} intro={page.engineeringIntro} /><div className="mt-6"><ArrowLink href="/injection-molding-engineering">Explore DFM Engineering</ArrowLink></div></div>
        <ol className="grid gap-x-9 sm:grid-cols-2">
          {page.engineeringConsiderations.map(([title, body], index) => <li className="grid grid-cols-[44px_1fr] gap-3 border-t border-[var(--line)] py-5" key={title}><span className="font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-1 leading-7 text-[var(--muted)]">{body}</p></div></li>)}
        </ol>
      </div>
    </section>

    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="TOOLING & MOLDING" title={page.toolingHeading} intro={page.toolingIntro} />
        <div className="mt-9 grid gap-x-8 border-y border-[var(--line)] md:grid-cols-2 xl:grid-cols-5">
          {page.toolingConsiderations.map(([title, body], index) => <article className="border-b border-[var(--line)] py-6 last:border-b-0 md:px-5 xl:border-b-0 xl:border-r xl:first:pl-0 xl:last:border-r-0 xl:last:pr-0" key={title}><span className="text-sm font-bold text-[var(--brand)]">0{index + 1}</span><h3 className="mt-3 text-lg font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="RELEVANT MOLD CAPABILITIES" title={`Injection Mold Types for ${page.navTitle}`} intro={page.moldTypesIntro} />
        <div className="mt-9 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-4">
          {page.moldTypes.map((item) => item.href ? <Link className="focus-ring group bg-white p-6 transition hover:bg-[#FAFBFC]" href={item.href} key={item.title}><h3 className="text-xl font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{item.body}</p><span className="mt-4 inline-flex font-bold text-[var(--brand)]">Explore <span className="ml-2" aria-hidden="true">→</span></span></Link> : <article className="bg-white p-6" key={item.title}><h3 className="text-xl font-bold text-[var(--brand-dark)]">{item.title}</h3><p className="mt-2 leading-7 text-[var(--muted)]">{item.body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-[var(--brand-dark)] py-14 text-white sm:py-16 lg:py-20">
      <div className="container-page grid gap-9 lg:grid-cols-[minmax(0,58fr)_minmax(0,42fr)] lg:items-center lg:gap-12">
        <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-white/15 bg-white/5"><Image alt={page.evidence.alt} className="object-cover object-center" fill loading="lazy" sizes="(min-width: 1024px) 58vw, 100vw" src={page.evidence.image} /></div>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#FFB8BB]">{page.evidence.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight sm:text-4xl">{page.evidence.title}</h2>
          <p className="mt-4 text-base leading-7 text-[#CBD5E1] sm:text-lg">{page.evidence.summary}</p>
          <dl className="mt-7 divide-y divide-white/15 border-y border-white/15">
            <div className="py-4"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#FFB8BB]">Application</dt><dd className="mt-2 leading-7 text-slate-200">{page.evidence.application}</dd></div>
            <div className="py-4"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#FFB8BB]">Engineering focus</dt><dd className="mt-2 leading-7 text-slate-200">{page.evidence.engineeringFocus}</dd></div>
            <div className="py-4"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-[#FFB8BB]">Validation</dt><dd className="mt-2 leading-7 text-slate-200">{page.evidence.validation}</dd></div>
          </dl>
          {page.evidence.href ? <div className="mt-6"><Link className="focus-ring inline-flex rounded-sm font-bold text-[#FFB8BB] hover:text-white" href={page.evidence.href}>{page.evidence.linkLabel ?? "Explore project"}<span className="ml-2" aria-hidden="true">→</span></Link></div> : null}
        </div>
      </div>
    </section>

    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-page">
        <SectionHeading eyebrow="DFM TO PRODUCTION" title={`From ${page.navTitle} CAD Data to Approved Production`} intro={page.processIntro} />
        <ol className="mt-9 grid border-y border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {industryProcess.map(([number, title]) => <li className="border-b border-[var(--line)] py-6 sm:px-5 xl:border-b-0 xl:border-r xl:first:pl-0 xl:last:border-r-0" key={title}><span className="font-bold text-[var(--brand)]">{number}</span><h3 className="mt-3 text-lg font-bold leading-snug text-[var(--brand-dark)]">{title}</h3></li>)}
        </ol>
      </div>
    </section>

    <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
      <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-14">
        <div><SectionHeading eyebrow="QUALITY & VALIDATION" title={page.validationHeading} intro={page.validationIntro} /><div className="mt-6"><ArrowLink href="/company/quality-documentation">Quality & Documentation</ArrowLink></div></div>
        <div className="grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
          {page.validationItems.map(([title, body]) => <article className="bg-white p-5 sm:p-6" key={title}><h3 className="font-bold text-[var(--brand-dark)]">{title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p></article>)}
        </div>
      </div>
    </section>

    <section className="bg-white py-14 sm:py-16 lg:py-20">
      <div className="container-page grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div><SectionHeading eyebrow="RELATED CAPABILITIES" title="Continue into Tooling & Production" intro="Move from the industry application into the capability page that matches the project stage." /><div className="mt-7 grid gap-4">{page.relatedCapabilities.map((item) => <Link className="focus-ring group rounded-sm border border-[var(--line)] p-5 transition hover:border-[var(--brand)]" href={item.href} key={item.title}><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-2 text-sm leading-6 text-[var(--muted)]">{item.body}</p></Link>)}</div></div>
        <div><SectionHeading eyebrow="ENGINEERING RESOURCES" title="Prepare the Part Before Tooling Release" intro="Use application-relevant technical guides to prepare geometry, materials and tooling requirements." /><div className="mt-7 divide-y divide-[var(--line)] border-y border-[var(--line)]">{page.resources.map((item) => <Link className="focus-ring group block py-5" href={item.href} key={item.title}><div className="flex justify-between gap-4"><div><h3 className="text-lg font-bold text-[var(--brand-dark)] group-hover:text-[var(--brand)]">{item.title}</h3><p className="mt-1 text-sm leading-6 text-[var(--muted)]">{item.body}</p></div><span className="font-bold text-[var(--brand)]" aria-hidden="true">→</span></div></Link>)}</div></div>
      </div>
    </section>

    <section className="border-y border-[var(--line)] bg-[#F5F7FA] py-14 sm:py-16 lg:py-20">
      <div className="container-page"><SectionHeading eyebrow="FAQ" title={`${page.navTitle} Injection Molding FAQ`} intro="Practical answers for engineering, sourcing and product teams preparing an RFQ." /><div className="mt-9 grid gap-4 lg:grid-cols-2">{page.faqs.map(([question, answer]) => <details className="group rounded-sm border border-[var(--line)] bg-white p-5 open:border-[var(--brand)]" key={question}><summary className="focus-ring cursor-pointer list-none pr-8 text-lg font-bold text-[var(--brand-dark)] marker:content-none">{question}<span className="float-right text-[var(--brand)]" aria-hidden="true">+</span></summary><p className="mt-4 leading-7 text-[var(--muted)]">{answer}</p></details>)}</div></div>
    </section>

    <section className="border-t border-[var(--cta-border)] bg-[var(--cta-bg)] py-12 sm:py-16 lg:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[minmax(0,58fr)_minmax(320px,42fr)] lg:items-center lg:gap-12">
        <div><p className={eyebrowClass}>{page.ctaEyebrow}</p><h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--cta-heading)] sm:text-4xl">{page.ctaHeading}</h2><p className="mt-4 max-w-3xl text-base leading-7 text-[var(--cta-body)] sm:text-lg">{page.ctaCopy}</p></div>
        <div className="grid gap-3 sm:grid-cols-2 lg:min-w-[440px] lg:justify-self-end"><Link className={primaryButton} href="/request-a-quote">Upload CAD</Link><Link className={secondaryButton} href="/request-a-quote">Request Tooling Quote</Link></div>
      </div>
    </section>
  </>;
}
