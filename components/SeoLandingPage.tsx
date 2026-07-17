import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { getSeoPage, type SeoLandingPage as SeoLandingPageData } from "@/lib/seo-pages";

const processSteps = ["RFQ", "DFM Review", "Tool Design", "Tooling Manufacturing", "Sampling", "Mass Production"];

function JsonLd({ data }: { data: Record<string, unknown> | Array<Record<string, unknown>> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replaceAll("<", "\\u003c") }} />;
}

export function SeoLandingPage({ page }: { page: SeoLandingPageData }) {
  const pageUrl = `${site.url}/seo/${page.slug}`;
  const relatedPages = page.relatedSeoSlugs.map(getSeoPage).filter((item): item is SeoLandingPageData => Boolean(item));
  const schemas = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.company.legalName,
      url: site.url,
      email: site.email,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.company.factoryAddress,
        addressLocality: "Shenzhen",
        addressRegion: "Guangdong",
        addressCountry: "CN"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: page.h1,
      description: page.metaDescription,
      url: pageUrl,
      provider: { "@id": `${site.url}/#organization` },
      areaServed: ["Europe", "North America"],
      audience: page.industries.slice(0, 3).map((name) => ({ "@type": "BusinessAudience", name }))
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: site.url },
        { "@type": "ListItem", position: 2, name: "SEO Manufacturing Resources", item: `${site.url}/seo` },
        { "@type": "ListItem", position: 3, name: page.h1, item: pageUrl }
      ]
    }
  ];

  return (
    <>
      <JsonLd data={schemas} />

      <section className="relative overflow-hidden bg-[var(--brand-dark)] text-white">
        <Image src={page.heroImage} alt={page.heroAlt} fill priority sizes="100vw" className="object-cover opacity-35" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(23,55,94,0.98),rgba(23,55,94,0.9),rgba(23,55,94,0.55))]" />
        <div className="container-page relative py-16 sm:py-20 lg:py-24">
          <nav aria-label="Breadcrumb" className="text-sm text-white/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link className="hover:text-white" href="/">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link className="hover:text-white" href="/seo">Manufacturing Resources</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-white">{page.h1}</li>
            </ol>
          </nav>
          <p className="mt-8 text-xs font-bold uppercase tracking-[0.16em] text-[#f1c5c5]">Engineering & Manufacturing in China</p>
          <h1 className="mt-4 max-w-5xl text-4xl font-semibold leading-tight tracking-[-0.02em] sm:text-5xl">{page.h1}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/85">{page.subtitle}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-6 font-bold text-white hover:brightness-90" href="/request-a-quote">
              Request RFQ
            </Link>
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-white/70 bg-white/10 px-6 font-bold text-white hover:bg-white hover:text-[var(--brand-dark)]" href="/resources">
              Download Capability Sheet
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Buyer Challenges</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-[var(--brand-dark)] sm:text-4xl">{page.painPointHeading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {page.painPoints.map((point) => (
              <article key={point.title} className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-bold text-[var(--brand-dark)]">{point.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{point.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="capabilities" className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Manufacturing Capabilities</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-[var(--brand-dark)] sm:text-4xl">{page.capabilityHeading}</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.capabilities.map((capability) => (
              <article key={capability.title} className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-bold text-[var(--brand-dark)]">{capability.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{capability.body}</p>
              </article>
            ))}
          </div>
          <nav aria-label="Related manufacturing services" className="mt-8 flex flex-wrap gap-3">
            {page.serviceLinks.map((link) => (
              <Link key={link.href} className="focus-ring rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--brand)] shadow-sm hover:border-[var(--brand)]" href={link.href}>
                {link.label} →
              </Link>
            ))}
          </nav>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Process Flow</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--brand-dark)] sm:text-4xl">From manufacturing RFQ to mass production</h2>
          <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, index) => (
              <li key={step} className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-sm">
                <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 font-bold text-[var(--brand-dark)]">{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Industries We Serve</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--brand-dark)]">Manufacturing support for technical product teams</h2>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {page.industries.map((industry) => (
              <li key={industry} className="border-l-4 border-[var(--brand)] bg-[var(--surface-soft)] px-4 py-3 font-bold text-[var(--brand-dark)]">{industry}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[var(--surface-soft)] py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Manufacturing Case Study</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold text-[var(--brand-dark)] sm:text-4xl">A practical production challenge and documented result</h2>
          <article className="mt-8 rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm sm:p-8">
            <dl className="grid gap-6 md:grid-cols-2">
              <div><dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Product type</dt><dd className="mt-2 text-lg font-bold text-[var(--brand-dark)]">{page.caseStudy.productType}</dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Material</dt><dd className="mt-2 text-lg font-bold text-[var(--brand-dark)]">{page.caseStudy.material}</dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Challenge</dt><dd className="mt-2 leading-7 text-[var(--muted)]">{page.caseStudy.challenge}</dd></div>
              <div><dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Solution</dt><dd className="mt-2 leading-7 text-[var(--muted)]">{page.caseStudy.solution}</dd></div>
              <div className="md:col-span-2"><dt className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">Result</dt><dd className="mt-2 leading-7 text-[var(--muted)]">{page.caseStudy.result}</dd></div>
            </dl>
            <Link className="mt-6 inline-flex font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/case-studies">View more manufacturing case studies →</Link>
          </article>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div className="relative min-h-80 overflow-hidden rounded-sm border border-[var(--line)] shadow-sm">
            <Image src="/images/seo/arktech-tooling-manufacturing-hero.png" alt="Arktech tooling manufacturing, quality inspection and export production capability" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Why Arktech</p>
            <h2 className="mt-3 text-3xl font-semibold text-[var(--brand-dark)]">Quality systems and export manufacturing experience</h2>
            <ul className="mt-6 grid gap-3">
              {page.trustPoints.map((point) => (
                <li key={point} className="flex gap-3 rounded-sm border border-[var(--line)] bg-white p-4 shadow-sm">
                  <span aria-hidden="true" className="mt-2 size-2 shrink-0 rounded-full bg-[var(--brand)]" />
                  <span className="leading-7 text-[var(--muted)]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container-page">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Frequently Asked Questions</p>
          <h2 className="mt-3 text-3xl font-semibold text-[var(--brand-dark)]">Questions from engineering and sourcing teams</h2>
          <div className="mt-8 grid gap-4">
            {page.faqs.map((faq) => (
              <details key={faq.question} className="group rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-5">
                <summary className="cursor-pointer font-bold text-[var(--brand-dark)]">{faq.question}</summary>
                <p className="mt-3 max-w-4xl leading-7 text-[var(--muted)]">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--brand-dark)] py-16 text-white">
        <div className="container-page grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#f1c5c5]">24-Hour RFQ Response</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Get a Manufacturing Quote in 24 Hours</h2>
            <p className="mt-4 leading-7 text-white/80">Share your project basics. For CAD uploads and detailed specifications, continue to the secure RFQ page.</p>
            <nav aria-label="Related SEO manufacturing pages" className="mt-6 grid gap-2 text-sm">
              {relatedPages.map((related) => (
                <Link key={related.slug} className="font-bold text-white/85 hover:text-white" href={`/seo/${related.slug}`}>{related.h1} →</Link>
              ))}
              <Link className="font-bold text-white/85 hover:text-white" href="/contact">Contact Arktech →</Link>
            </nav>
          </div>
          <form action="/request-a-quote" method="get" className="rounded-sm bg-white p-6 text-[var(--foreground)] shadow-xl">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-bold">Name<input required name="name" className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal outline-none focus:border-[var(--brand)]" /></label>
              <label className="grid gap-2 text-sm font-bold">Work Email<input required name="email" type="email" className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal outline-none focus:border-[var(--brand)]" /></label>
              <label className="grid gap-2 text-sm font-bold">Company<input name="company" className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal outline-none focus:border-[var(--brand)]" /></label>
              <label className="grid gap-2 text-sm font-bold">Annual Volume<input name="annual-volume" className="min-h-12 rounded-sm border border-[var(--line)] px-3 font-normal outline-none focus:border-[var(--brand)]" /></label>
            </div>
            <label className="mt-4 grid gap-2 text-sm font-bold">Project summary<textarea required name="project-summary" className="min-h-28 rounded-sm border border-[var(--line)] p-3 font-normal outline-none focus:border-[var(--brand)]" /></label>
            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <button type="submit" className="min-h-12 rounded-sm bg-[var(--brand)] px-5 font-bold text-white hover:brightness-90">Request RFQ</button>
              <Link href="/request-a-quote" className="inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand-dark)] px-5 font-bold text-[var(--brand-dark)]">Upload CAD Files</Link>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
