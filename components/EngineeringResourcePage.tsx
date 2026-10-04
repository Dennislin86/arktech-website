import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import type { EngineeringResource } from "@/lib/engineering-resources";
import { site } from "@/lib/site";

export function EngineeringResourcePage({ resource }: { resource: EngineeringResource }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "TechArticle",
      headline: resource.title,
      description: resource.description,
      image: `${site.url}${resource.image}`,
      mainEntityOfPage: `${site.url}${resource.path}`,
      author: { "@id": `${site.url}/#organization` },
      publisher: { "@id": `${site.url}/#organization` }
    },
    ...(resource.faq?.length
      ? [{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: resource.faq.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: { "@type": "Answer", text: item.answer }
          }))
        }]
      : [])
  ];

  return (
    <>
      {schema.map((item, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(item).replaceAll("<", "\\u003c") }} key={index} type="application/ld+json" />)}

      <article>
        <header className="border-b border-[var(--line)] bg-white">
          <div className="container-page py-10 sm:py-14 lg:py-16">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-sm font-semibold text-[var(--muted)]">
              <Link className="hover:text-[var(--brand)]" href="/">Home</Link><span aria-hidden="true">/</span>
              <Link className="hover:text-[var(--brand)]" href="/resources">Resources</Link><span aria-hidden="true">/</span>
              <span aria-current="page" className="text-[var(--brand-dark)]">{resource.shortTitle}</span>
            </nav>
            <div className="mt-7 grid gap-9 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{resource.kind === "pillar" ? "ENGINEERING GUIDE" : resource.topic}</p>
                <h1 className="split-hero-title mt-4 text-[var(--brand-dark)]">{resource.title}</h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-[var(--muted)]">{resource.description}</p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white hover:bg-[var(--brand-hover)]" href="#engineering-guide">Read the guide</a>
                  <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)] hover:bg-[var(--brand-dark)] hover:text-white" href="/request-a-quote">Upload CAD for DFM Review</Link>
                </div>
              </div>
              <figure className="overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
                <div className="relative aspect-[16/10]"><Image alt={resource.imageAlt} className="object-cover" fill priority sizes="(min-width: 1024px) 62vw, 100vw" src={resource.image} /></div>
              </figure>
            </div>
          </div>
        </header>

        <section className="bg-[var(--surface-soft)] py-12 sm:py-14">
          <div className="container-page grid gap-8 lg:grid-cols-[.7fr_1.3fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Short Answer</p>
              <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">What engineers need to know</h2>
              <p className="mt-4 leading-7 text-[var(--muted)]">{resource.answer}</p>
            </div>
            <div className="grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2">
              {resource.takeaways.map((item, index) => <div className="bg-white p-5" key={item}><span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span><p className="mt-2 font-bold leading-6 text-[var(--brand-dark)]">{item}</p></div>)}
            </div>
          </div>
        </section>

        <section className="scroll-mt-24 bg-white py-14 sm:py-18" id="engineering-guide">
          <div className="container-page grid gap-10 lg:grid-cols-[minmax(0,.72fr)_minmax(280px,.28fr)] lg:gap-14">
            <div className="space-y-10">
              {resource.sections.map((section, index) => (
                <section className="border-b border-[var(--line)] pb-9 last:border-0" key={section.title}>
                  <div className="grid gap-4 sm:grid-cols-[3.5rem_1fr]">
                    <span className="text-2xl font-extrabold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                    <div><h2 className="text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">{section.title}</h2><p className="mt-4 leading-7 text-[var(--muted)]">{section.body}</p>{section.bullets?.length ? <ul className="mt-5 grid gap-3 sm:grid-cols-2">{section.bullets.map((item) => <li className="border-l-2 border-[var(--brand)] pl-3 text-sm font-semibold leading-6 text-[var(--brand-dark)]" key={item}>{item}</li>)}</ul> : null}</div>
                  </div>
                </section>
              ))}
            </div>
            <aside className="h-fit rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6 lg:sticky lg:top-28">
              <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Practical Review Points</p>
              <ul className="mt-5 grid gap-4">{resource.practical.map((item) => <li className="flex gap-3 text-sm leading-6 text-[var(--muted)]" key={item}><span aria-hidden="true" className="font-bold text-[var(--brand)]">✓</span><span>{item}</span></li>)}</ul>
              <Link className="focus-ring mt-6 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={resource.capability.href}>{resource.capability.label} →</Link>
            </aside>
          </div>
        </section>

        <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-14 sm:py-16">
          <div className="container-page">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Continue the Engineering Review</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl">Related Topics &amp; Project Evidence</h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {resource.related.map((item) => <Link className="focus-ring group flex min-h-28 items-center justify-between rounded-sm border border-[var(--line)] bg-white p-5 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)]" href={item.href} key={item.href}><span>{item.label}</span><span aria-hidden="true" className="text-[var(--brand)] transition group-hover:translate-x-1">→</span></Link>)}
              <Link className="focus-ring group flex min-h-28 items-center justify-between rounded-sm border border-[var(--line)] bg-white p-5 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)]" href={resource.capability.href}><span>{resource.capability.label}</span><span aria-hidden="true" className="text-[var(--brand)] transition group-hover:translate-x-1">→</span></Link>
              {resource.caseStudy ? <Link className="focus-ring group flex min-h-28 items-center justify-between rounded-sm border border-[var(--line)] bg-white p-5 font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)]" href={resource.caseStudy.href}><span>{resource.caseStudy.label}</span><span aria-hidden="true" className="text-[var(--brand)] transition group-hover:translate-x-1">→</span></Link> : null}
            </div>
          </div>
        </section>

        {resource.faq?.length ? <section className="bg-white py-14 sm:py-16"><div className="container-page grid gap-8 lg:grid-cols-[.35fr_.65fr]"><div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Engineering FAQ</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)]">Questions about {resource.shortTitle.toLowerCase()}</h2></div><div className="divide-y divide-[var(--line)] border-y border-[var(--line)]">{resource.faq.map((item) => <details className="group px-1" key={item.question}><summary className="focus-ring flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-[var(--brand-dark)]"><span>{item.question}</span><span aria-hidden="true" className="text-xl text-[var(--brand)] group-open:hidden">+</span><span aria-hidden="true" className="hidden text-xl text-[var(--brand)] group-open:inline">−</span></summary><p className="max-w-3xl pb-5 leading-7 text-[var(--muted)]">{item.answer}</p></details>)}</div></div></section> : null}
      </article>

      <CTA />
    </>
  );
}
