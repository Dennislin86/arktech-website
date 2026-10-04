import Image from "next/image";
import Link from "next/link";
import type { CaseStudyProfile } from "@/lib/case-studies";

function EvidenceSection({ eyebrow, title, items }: { eyebrow: string; title: string; items: string[] }) {
  return (
    <section className="border-t border-[var(--line)] py-12">
      <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{eyebrow}</p>
      <h2 className="mt-2 text-2xl font-bold sm:text-3xl">{title}</h2>
      <ul className="mt-5 grid gap-3 leading-7 text-[var(--muted)]">
        {items.map((item) => <li key={item} className="border-l-4 border-[var(--brand)] pl-4">{item}</li>)}
      </ul>
    </section>
  );
}

export function CaseStudyDetail({ project, relatedProjects }: { project: CaseStudyProfile; relatedProjects: CaseStudyProfile[] }) {
  const facts = [
    ["Customer type", project.customerType],
    ["Region", project.region],
    ["Industry", project.industry],
    ["Material / focus", project.manufacturingScope[1]?.replace(/^Material:\s*/i, "") ?? project.productCategory]
  ];

  return (
    <div>
      <section className="border-b border-[var(--line)] bg-[var(--surface-soft)] py-12 sm:py-16">
        <div className="container-page">
          <Link className="focus-ring inline-flex rounded-sm text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href="/case-studies">← Back to Case Studies</Link>
          <div className="mt-7 grid items-center gap-8 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:gap-12">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[var(--brand)]">{project.industry} Case Study</p>
              <h1 className="split-hero-title mt-3">{project.projectName}</h1>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{project.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2" aria-label="Capabilities used">
                {project.capabilities.map((item) => <li key={item} className="rounded-sm bg-white px-3 py-2 text-sm font-semibold text-[var(--brand-dark)] shadow-sm">{item}</li>)}
              </ul>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm">
              <Image src={project.image} alt={project.imageAlt} fill priority loading="eager" sizes="(min-width: 1024px) 55vw, 100vw" className="object-cover" />
            </div>
          </div>
          <dl className="mt-8 grid gap-px overflow-hidden rounded-sm border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(([label, value]) => <div key={label} className="bg-white p-4"><dt className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{label}</dt><dd className="mt-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]">{value}</dd></div>)}
          </dl>
        </div>
      </section>

      <div className="container-page py-4 sm:py-8">
        <section className="py-10">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Overview</p>
          <h2 className="mt-2 text-3xl font-bold">The tooling program</h2>
          <p className="mt-5 max-w-4xl text-lg leading-8 text-[var(--muted)]">{project.projectOverview}</p>
        </section>
        <EvidenceSection eyebrow="Engineering Challenge" title="What the project needed to control" items={project.challenge} />
        <EvidenceSection eyebrow="DFM & Engineering Review" title="Risks reviewed before tooling release" items={project.dfmReview} />
        <EvidenceSection eyebrow="Tooling Solution" title="Manufacturing strategy and mold scope" items={project.toolingSolution} />
        <EvidenceSection eyebrow="Mold Trial & Engineering Corrections" title="How samples supported tooling review" items={project.trialValidation} />
        <EvidenceSection eyebrow="Inspection & Validation" title="Evidence used for customer approval" items={project.inspectionValidation} />
        <EvidenceSection eyebrow="Project Result" title="Verified project outcome" items={project.result} />

        <section className="border-t border-[var(--line)] py-12">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Gallery</p>
          <h2 className="mt-2 text-3xl font-bold">Tooling and project evidence</h2>
          <div className={`mt-6 grid gap-5 ${project.gallery.length > 1 ? "md:grid-cols-2" : "max-w-3xl"}`}>
            {project.gallery.map((image) => <figure key={`${image.src}-${image.caption}`} className="overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm"><div className="relative aspect-[4/3] bg-[var(--surface-soft)]"><Image src={image.src} alt={image.alt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-contain" /></div><figcaption className="p-4 text-sm leading-6 text-[var(--muted)]">{image.caption}</figcaption></figure>)}
          </div>
        </section>

        <section className="border-t border-[var(--line)] py-12">
          <div className="grid gap-6 lg:grid-cols-3">
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Capabilities</p><div className="mt-4 flex flex-wrap gap-2">{project.related.filter((link) => !link.href.startsWith("/industries/")).map((link) => <Link key={link.href} href={link.href} className="focus-ring rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-sm font-bold text-[var(--brand-dark)] hover:border-[var(--brand)]">{link.label}</Link>)}</div></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Industry</p><div className="mt-4"><Link href={project.industryLink} className="focus-ring inline-flex rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-sm font-bold text-[var(--brand-dark)] hover:border-[var(--brand)]">{project.industry}</Link></div></div>
            <div><p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Related Projects</p><div className="mt-4 grid gap-2">{relatedProjects.map((item) => <Link key={item.slug} href={`/case-studies/${item.slug}`} className="focus-ring text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]">{item.projectName} →</Link>)}</div></div>
          </div>
        </section>
      </div>

      <section className="border-t border-[var(--line)] bg-[var(--surface-soft)] py-14">
        <div className="container-page flex flex-col justify-between gap-6 md:flex-row md:items-center">
          <div><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Start Your Tooling Review</p><h2 className="mt-2 text-3xl font-bold">Have a similar injection mold project?</h2><p className="mt-3 max-w-2xl leading-7 text-[var(--muted)]">Send your CAD files and project requirements for engineering review and practical tooling feedback.</p></div>
          <div className="flex flex-wrap gap-3"><Link href="/request-a-quote" className="focus-ring rounded-sm bg-[var(--accent)] px-5 py-3 font-bold text-white hover:brightness-90">Upload CAD for DFM Review</Link><Link href="/contact" className="focus-ring rounded-sm border border-[var(--brand-dark)] px-5 py-3 font-bold text-[var(--brand-dark)] hover:bg-white">Request Tooling Quote</Link></div>
        </div>
      </section>
    </div>
  );
}
