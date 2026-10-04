import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { approvedHeroImageForSlug, seoImageAlt } from "@/lib/images";
import type { DetailPageData } from "@/lib/page-data";

type DetailPageProps = {
  page: DetailPageData;
  parentHref: string;
  parentLabel: string;
  includeSiteCta?: boolean;
  canonicalUrl?: string;
};

export function DetailPage({ page, parentHref, parentLabel, includeSiteCta = true, canonicalUrl }: DetailPageProps) {
  const heroImage = approvedHeroImageForSlug(page.slug);
  const breadcrumbSchema = canonicalUrl ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.arktechmold.com" },
      { "@type": "ListItem", position: 2, name: parentLabel, item: "https://www.arktechmold.com/injection-molds" },
      { "@type": "ListItem", position: 3, name: page.title, item: canonicalUrl }
    ]
  } : null;
  const pageSchemas = canonicalUrl ? [
    breadcrumbSchema,
    { "@context": "https://schema.org", "@type": "WebPage", "@id": `${canonicalUrl}#webpage`, name: page.title, description: page.description, url: canonicalUrl },
    { "@context": "https://schema.org", "@type": "Service", name: page.title, serviceType: page.title, description: page.description, url: canonicalUrl, mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` }, provider: { "@type": "Organization", name: "Arktech Mold", url: "https://www.arktechmold.com" }, areaServed: "Worldwide" }
  ] : [];

  return (
    <>
      {pageSchemas.map((schema, index) => <script dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} key={index} type="application/ld+json" />)}
      {canonicalUrl ? <nav aria-label="Breadcrumb" className="border-b border-[var(--line)] bg-white"><ol className="container-page flex flex-wrap items-center gap-2 py-4 text-sm text-[var(--muted)]"><li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href="/">Home</Link></li><li aria-hidden="true">/</li><li><Link className="focus-ring rounded-sm hover:text-[var(--brand)]" href={parentHref}>{parentLabel}</Link></li><li aria-hidden="true">/</li><li aria-current="page" className="font-semibold text-[var(--brand-dark)]">{page.title}</li></ol></nav> : null}
      <PageHero
        eyebrow={page.eyebrow}
        title={page.title}
        body={page.heroBody}
        image={heroImage ? { src: heroImage, alt: seoImageAlt(page.title) } : undefined}
      />
      <section className="py-14">
        <div className="container-page">
          <Link className="focus-ring inline-flex rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={parentHref}>
            Back to {parentLabel}
          </Link>
          {page.intro ? (
            <div className="mt-7 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <p className="max-w-5xl leading-7 text-[var(--muted)]">{page.intro}</p>
            </div>
          ) : null}
          {page.galleryImages ? (
            <div className="mt-7 grid gap-5 md:grid-cols-3">
              {page.galleryImages.map((image) => (
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm" key={image.src}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          ) : null}
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[var(--brand-dark)]">{section.title}</h2>
                <ul className="mt-5 grid gap-3 leading-7 text-[var(--muted)]">
                  {section.items.map((item) => (
                    <li key={item} className="border-l-4 border-[var(--brand)] pl-4">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          {page.processFlow ? (
            <section className="mt-7 rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Process Flow</h2>
              <ol className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {page.processFlow.map((step, index) => (
                  <li className="rounded-sm bg-[var(--surface-soft)] p-4" key={step}>
                    <span className="text-sm font-bold text-[var(--brand)]">{String(index + 1).padStart(2, "0")}</span>
                    <p className="mt-2 text-sm font-bold leading-6 text-[var(--brand-dark)]">{step}</p>
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {page.relatedLinks ? (
            <section className="mt-7 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">Related Capabilities</h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {page.relatedLinks.map((link) => (
                  <Link className="rounded-sm border border-[var(--line)] bg-white px-4 py-3 text-sm font-bold text-[var(--brand-dark)] shadow-sm transition hover:border-[var(--brand)] hover:text-[var(--brand)]" href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          {page.faqs ? (
            <section className="mt-7 rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-[var(--brand-dark)]">FAQ</h2>
              <div className="mt-5 grid gap-3">
                {page.faqs.map((faq) => (
                  <details className="group rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-4" key={faq.question}>
                    <summary className="cursor-pointer text-base font-bold text-[var(--brand-dark)] marker:text-[var(--brand)]">
                      {faq.question}
                    </summary>
                    <p className="mt-3 leading-7 text-[var(--muted)]">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>
          ) : null}

          <div className="mt-7 rounded-sm border border-[var(--line)] bg-[var(--brand-dark)] p-6 text-white">
            <h2 className="text-2xl font-bold">Discuss Your Manufacturing Project</h2>
            <p className="mt-3 max-w-3xl leading-7 text-white/75">
              Send CAD files, drawings, material targets, annual volume, and target lead time. Arktech Mold will review your files for DFM feedback and practical quotation planning.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="focus-ring rounded-sm bg-[var(--brand)] px-4 py-3 text-sm font-bold text-white hover:bg-[var(--brand-hover)]" href="/request-a-quote">
                Upload CAD for DFM Review
              </Link>
              <Link className="focus-ring rounded-sm border border-white/70 bg-transparent px-4 py-3 text-sm font-bold text-white hover:bg-white hover:text-[var(--brand-dark)]" href="/request-a-quote">
                Request Manufacturing Quote
              </Link>
              <Link className="focus-ring rounded-sm border border-white/70 bg-transparent px-4 py-3 text-sm font-bold text-white hover:bg-white hover:text-[var(--brand-dark)]" href="/resources">
                Read Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      {includeSiteCta ? <CTA /> : null}
    </>
  );
}
