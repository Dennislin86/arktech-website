import Image from "next/image";
import Link from "next/link";
import { CTA } from "@/components/CTA";
import { PageHero } from "@/components/PageHero";
import { seoImageAlt, seoImageForSlug } from "@/lib/images";
import type { DetailPageData } from "@/lib/page-data";

type DetailPageProps = {
  page: DetailPageData;
  parentHref: string;
  parentLabel: string;
};

export function DetailPage({ page, parentHref, parentLabel }: DetailPageProps) {
  return (
    <>
      <PageHero eyebrow={page.eyebrow} title={page.heroTitle} body={page.heroBody} />
      <section className="py-14">
        <div className="container-page">
          <Link className="focus-ring inline-flex rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={parentHref}>
            Back to {parentLabel}
          </Link>
          <div className="relative mt-7 aspect-[16/7] overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-sm">
            <Image
              src={seoImageForSlug(page.slug)}
              alt={seoImageAlt(page.title)}
              fill
              sizes="(min-width: 1120px) 1120px, calc(100vw - 32px)"
              className="object-cover"
            />
          </div>
          <div className="mt-7 grid gap-5 lg:grid-cols-2">
            {page.sections.map((section) => (
              <article key={section.title} className="rounded-sm border border-[var(--line)] bg-white p-6 shadow-sm">
                <h2 className="text-2xl font-bold">{section.title}</h2>
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
          <div className="mt-5 rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] p-6">
            <h2 className="text-2xl font-bold">Next Step</h2>
            <p className="mt-3 max-w-3xl leading-7 text-[var(--muted)]">
              Send CAD files, drawings, material targets, annual volume, and target lead time. Arktech Mold will use your files only for engineering review and quotation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link className="focus-ring rounded-sm bg-[var(--accent)] px-4 py-3 text-sm font-bold text-white hover:brightness-90" href="/request-a-quote">
                Request a Quote
              </Link>
              <Link className="focus-ring rounded-sm bg-white px-4 py-3 text-sm font-bold text-[var(--brand)] shadow-sm hover:text-[var(--brand-dark)]" href="/case-studies">
                View Case Studies
              </Link>
              <Link className="focus-ring rounded-sm bg-white px-4 py-3 text-sm font-bold text-[var(--brand)] shadow-sm hover:text-[var(--brand-dark)]" href="/resources">
                Read Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
