"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import type { CaseStudyProfile } from "@/lib/case-studies";

type FilterKey = "industry" | "capability" | "challenge";
type Filters = Record<FilterKey, string>;

const emptyFilters: Filters = { industry: "All", capability: "All", challenge: "All" };
const unique = (values: string[]) => ["All", ...Array.from(new Set(values)).sort((a, b) => a.localeCompare(b))];

function ProjectCard({ project }: { project: CaseStudyProfile }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:-translate-y-1 hover:border-[var(--brand)] hover:shadow-md">
      <Link href={`/case-studies/${project.slug}`} className="focus-ring relative block aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]">
        <Image src={project.image} alt={project.imageAlt} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-300 group-hover:scale-[1.025]" />
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{project.industry}</p>
        <h3 className="mt-2 text-xl font-bold leading-snug text-[var(--brand-dark)]">{project.projectName}</h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">{project.challenge[0]}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Project capabilities">
          {project.capabilities.slice(0, 3).map((capability) => <li key={capability} className="rounded-sm bg-[var(--surface-soft)] px-2.5 py-1 text-xs font-semibold text-[var(--brand-dark)]">{capability}</li>)}
        </ul>
        <Link className="focus-ring mt-5 inline-flex w-fit rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={`/case-studies/${project.slug}`}>View Project <span className="ml-1" aria-hidden="true">→</span></Link>
      </div>
    </article>
  );
}

export function CaseStudiesHub({ projects }: { projects: CaseStudyProfile[] }) {
  const [filters, setFilters] = useState<Filters>(emptyFilters);
  const options = useMemo(() => ({
    industry: unique(projects.map((item) => item.industry)),
    capability: unique(projects.flatMap((item) => item.capabilities)),
    challenge: unique(projects.flatMap((item) => item.challenges))
  }), [projects]);
  const filteredProjects = projects.filter((item) =>
    (filters.industry === "All" || item.industry === filters.industry) &&
    (filters.capability === "All" || item.capabilities.includes(filters.capability)) &&
    (filters.challenge === "All" || item.challenges.includes(filters.challenge))
  );

  function activateChallenge(value: string) {
    setFilters({ ...emptyFilters, challenge: value });
    window.requestAnimationFrame(() => document.getElementById("all-projects")?.scrollIntoView({ behavior: "smooth", block: "start" }));
  }

  return (
    <>
      <section id="featured-projects" className="scroll-mt-24 bg-white py-16">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Featured Projects</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Selected Tooling Projects</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Three representative programs show how Arktech connects DFM decisions, tooling execution, sample review and documented approval support.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.filter((item) => item.featured).slice(0, 3).map((project) => <ProjectCard key={project.slug} project={project} />)}</div>
        </div>
      </section>

      <section id="all-projects" className="scroll-mt-24 border-y border-[var(--line)] bg-[var(--surface-soft)] py-16">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Project Library</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Browse Tooling &amp; Manufacturing Projects</h2>
          <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Filter the project examples by industry, engineering capability or the manufacturing challenge addressed.</p>
          <div className="mt-8 grid gap-4 rounded-md border border-[var(--line)] bg-white p-5 lg:grid-cols-3">
            {(["industry", "capability", "challenge"] as FilterKey[]).map((key) => (
              <label key={key} className="grid gap-2 text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">
                {key}
                <select value={filters[key]} onChange={(event) => setFilters((current) => ({ ...current, [key]: event.target.value }))} className="focus-ring min-h-11 rounded-sm border border-[var(--line)] bg-white px-3 text-sm font-semibold normal-case tracking-normal text-[var(--brand-dark)]">
                  {options[key].map((option) => <option key={option}>{option}</option>)}
                </select>
              </label>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between gap-4 text-sm text-[var(--muted)]">
            <p aria-live="polite">Project examples</p>
            {Object.values(filters).some((value) => value !== "All") && <button type="button" onClick={() => setFilters(emptyFilters)} className="focus-ring rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]">Clear filters</button>}
          </div>
          {filteredProjects.length > 0 ? <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{filteredProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div> : <div className="mt-6 rounded-md border border-dashed border-[var(--line)] bg-white p-8 text-center text-[var(--muted)]">No project example matches all three filters. Clear one filter to broaden the results.</div>}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container-page">
          <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Engineering Challenges</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Browse Projects by Challenge</h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {options.challenge.filter((item) => item !== "All").map((challenge) => <button key={challenge} type="button" onClick={() => activateChallenge(challenge)} className="focus-ring flex min-h-20 items-center justify-between rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-5 text-left font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:bg-white">{challenge}<span className="ml-3 text-[var(--brand)]" aria-hidden="true">→</span></button>)}
          </div>
        </div>
      </section>
    </>
  );
}
