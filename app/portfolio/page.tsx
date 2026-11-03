import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PortfolioGallery } from "@/components/PortfolioGallery";
import { caseStudies } from "@/lib/case-studies";
import { portfolioItems } from "@/lib/portfolio";
import { site } from "@/lib/site";

const title = "Injection Mold & Plastic Parts Portfolio | Arktech";
const description = "Explore Arktech's injection mold tooling and molded plastic parts for automotive, smart home, consumer electronics, medical, home appliance and industrial applications.";
const canonical = `${site.url}/portfolio`;

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical },
  openGraph: {
    title,
    description,
    type: "website",
    url: canonical,
    images: [{ url: portfolioItems[0].image, alt: portfolioItems[0].altText }]
  }
};

const selectedCaseStudies = caseStudies.filter((item) => item.featured).slice(0, 3);

export default function PortfolioPage() {
  return (
    <>
      <section aria-labelledby="portfolio-hero-heading" className="relative isolate overflow-hidden bg-[var(--brand-dark)] text-white">
        <Image
          alt="Mirror-polished injection molds with transparent molded plastic enclosures"
          className="-z-20 object-cover object-center"
          fill
          preload
          sizes="100vw"
          src="/images/portfolio/mirror-polished-injection-mold-transparent-plastic-parts.webp"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,54,35,.96)_0%,rgba(15,54,35,.91)_46%,rgba(15,54,35,.58)_68%,rgba(15,54,35,.16)_100%)]" />
        <div className="container-page flex min-h-[640px] items-center py-12 sm:min-h-[650px] sm:py-14 lg:min-h-[660px] lg:py-16">
          <div className="w-full max-w-[720px] lg:w-[60%]">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-red-200">Portfolio</p>
            <h1 className="split-hero-title mt-4" id="portfolio-hero-heading">Injection Mold &amp; Plastic Parts Portfolio</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100">Explore real Arktech injection molds and molded plastic parts across automotive, smart home, consumer electronics, medical, home appliance and industrial applications.</p>
            <Link className="focus-ring mt-8 inline-flex min-h-12 items-center rounded-sm bg-[var(--accent)] px-5 font-bold text-white hover:brightness-90" href="#portfolio-gallery">Explore the Portfolio</Link>
          </div>
        </div>
      </section>

      <section className="border-b border-[var(--line)] bg-white py-10 sm:py-12">
        <div className="container-page grid gap-5 lg:grid-cols-[.7fr_1.3fr] lg:gap-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Manufacturing Evidence</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Real Tooling and Molded Components</h2>
          </div>
          <div className="space-y-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
            <p>This portfolio brings together real Arktech project photography in one place. Browse completed injection molds and molded plastic parts without leaving the page.</p>
            <p>Use the category and industry filters to narrow the gallery, then follow the related capability links for engineering and manufacturing context.</p>
          </div>
        </div>
      </section>

      <section className="scroll-mt-24 bg-white py-12 sm:py-14" id="portfolio-gallery">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Gallery</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Injection Molds &amp; Plastic Parts</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Explore injection mold and plastic part projects by industry, with tooling examples organized by mold type.</p>
          </div>
          <div className="mt-6">
            <PortfolioGallery items={portfolioItems} />
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--line)] bg-[var(--surface-soft)] py-14 sm:py-16">
        <div className="container-page">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Selected Case Studies</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-[var(--brand-dark)] sm:text-4xl">Engineering Context Behind the Projects</h2>
            <p className="mt-4 leading-7 text-[var(--muted)]">Review selected project examples covering DFM, tooling, mold trials and inspection requirements.</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {selectedCaseStudies.map((project) => (
              <article className="flex h-full flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white" key={project.slug}>
                <div className="relative aspect-[4/3] overflow-hidden bg-[#eef2f5]">
                  <Image alt={project.imageAlt} className="object-cover object-center" fill loading="lazy" sizes="(min-width: 1024px) 352px, (min-width: 768px) 33vw, 100vw" src={project.image} />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{project.industry}</p>
                  <h3 className="mt-2 text-xl font-bold leading-snug text-[var(--brand-dark)]">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">{project.projectOverview}</p>
                  <Link className="focus-ring mt-auto inline-flex min-h-11 items-center self-start rounded-sm pt-4 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/case-studies/${project.slug}`}>View Case Study <span aria-hidden="true" className="ml-2">→</span></Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="container-page flex flex-col justify-between gap-6 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6 sm:p-8 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Project</p>
            <h2 className="mt-2 text-3xl font-bold text-[var(--brand-dark)]">Discuss Your Injection Mold or Plastic Part</h2>
            <p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Share your CAD files, material requirements and expected production needs for an engineering and tooling review.</p>
          </div>
          <Link className="focus-ring inline-flex min-h-12 shrink-0 items-center justify-center rounded-sm bg-[var(--accent)] px-5 font-bold text-white hover:brightness-90" href="/request-a-quote">Request a Quote</Link>
        </div>
      </section>
    </>
  );
}
