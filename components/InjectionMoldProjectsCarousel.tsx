"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

type MoldProject = {
  title: string;
  description: string;
  image: string;
  alt: string;
  href?: string;
};

const moldProjects: MoldProject[] = [
  {
    title: "Precision Injection Mold",
    description: "Precision production tooling for controlled dimensions and repeatable molding.",
    image: "/images/mold-types/Precision-Molds.png",
    alt: "Completed precision injection mold for controlled-dimension plastic parts"
  },
  {
    title: "Complex Injection Mold",
    description: "Production tooling with coordinated side actions, sliders and complex mold movement.",
    image: "/images/mold-types/complex-injection-molds.png",
    alt: "Completed complex injection mold with slider and side-action mechanisms"
  },
  {
    title: "Multi-Cavity Injection Mold",
    description: "Multi-cavity tooling developed for balanced filling and repeat production.",
    image: "/images/mold-types/multi-cavity-injection-molds.webp",
    alt: "Multi-cavity injection mold for repeat production",
    href: "/tooling-examples/multi-cavity-molds"
  },
  {
    title: "Hot Runner Mold",
    description: "Production tooling with integrated hot runner delivery for controlled filling.",
    image: "/images/mold-types/hot-runner-molds.webp",
    alt: "Completed hot runner injection mold for controlled production molding",
    href: "/tooling-examples/hot-runner-molds"
  },
  {
    title: "Two-Shot / 2K Mold",
    description: "Two-material tooling developed around shot sequence and machine configuration.",
    image: "/images/mold-types/two-shot-2k-bi-injection-molds.webp",
    alt: "Two-shot 2K injection mold for multi-material plastic parts",
    href: "/tooling-examples/two-shot-2k-molds"
  },
  {
    title: "Insert Molding Tool",
    description: "Production tooling for molding plastic around prepared inserts and components.",
    image: "/images/mold-types/insert-molding-tools.webp",
    alt: "Completed insert molding tool for plastic parts with integrated inserts",
    href: "/tooling-examples/insert-molds"
  },
  {
    title: "Unscrewing Mold",
    description: "Mechanically driven tooling for reliable release of threaded plastic components.",
    image: "/images/mold-types/unscrewing-molds.webp",
    alt: "Unscrewing injection mold for threaded plastic components",
    href: "/tooling-examples/unscrewing-molds"
  },
  {
    title: "Large Injection Mold",
    description: "Large-format production mold for structural plastic components and housings.",
    image: "/images/mold-types/large-component-molds.JPG",
    alt: "Large injection mold for structural plastic component production",
    href: "/tooling-examples/large-component-molds"
  },
  {
    title: "Prototype Injection Mold",
    description: "Prototype tooling for engineering samples, validation and early production builds.",
    image: "/images/mold-types/prototype-injection-mold.webp",
    alt: "Prototype injection mold for engineering sample validation"
  }
];

function ProjectCard({ project }: { project: MoldProject }) {
  const content = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-soft)]">
        <Image
          alt={project.alt}
          className="object-cover object-center transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none"
          draggable={false}
          fill
          sizes="(min-width: 1280px) 30vw, (min-width: 1024px) 36vw, (min-width: 640px) 60vw, 86vw"
          src={project.image}
        />
      </div>
      <div className="flex min-h-[8.75rem] flex-1 flex-col border-t border-[var(--line)] p-4 sm:p-5">
        <h3 className="text-xl font-bold leading-tight text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{project.title}</h3>
        <p className="mt-2 flex-1 text-sm leading-6 text-[var(--muted)]">{project.description}</p>
        {project.href ? <span className="mt-3 text-sm font-bold text-[var(--brand)]">Explore <span aria-hidden="true" className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transition-none">→</span></span> : null}
      </div>
    </>
  );

  const className = "group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:border-[var(--brand)] focus-visible:border-[var(--brand)] motion-reduce:transition-none";

  if (project.href) {
    return <Link aria-label={`Explore ${project.title}`} className={`focus-ring ${className}`} href={project.href}>{content}</Link>;
  }

  return <article className={className}>{content}</article>;
}

export function InjectionMoldProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollProjects(direction: -1 | 1) {
    const track = trackRef.current;
    if (!track) return;

    const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.82, 280), behavior });
  }

  return (
    <section aria-labelledby="real-mold-projects-heading" className="bg-white py-14 sm:py-16" id="real-injection-mold-projects">
      <div className="container-page">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-4xl">
            <p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Real Injection Mold Projects</p>
            <h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl" id="real-mold-projects-heading">Completed Injection Molds Built by Arktech</h2>
            <p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Explore real completed molds across different part geometries, production requirements and tooling configurations.</p>
          </div>
          <div aria-label="Injection mold project carousel controls" className="flex gap-3" role="group">
            <button aria-label="Previous injection mold projects" className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => scrollProjects(-1)} type="button">←</button>
            <button aria-label="Next injection mold projects" className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => scrollProjects(1)} type="button">→</button>
          </div>
        </div>

        <div
          aria-label="Completed injection mold projects"
          className="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden motion-reduce:scroll-auto"
          ref={trackRef}
          role="region"
          tabIndex={0}
        >
          {moldProjects.map((project) => (
            <div className="shrink-0 basis-[86%] snap-start sm:basis-[62%] lg:basis-[38%] xl:basis-[34%]" key={project.title}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-col gap-5 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-bold text-[var(--brand-dark)]">Have a similar mold project?</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm border border-[var(--brand)] bg-white px-5 font-bold text-[var(--brand)] transition hover:bg-[var(--brand)] hover:text-white" href="#mold-types">Explore Mold Types →</Link>
            <Link className="focus-ring inline-flex min-h-12 items-center justify-center rounded-sm bg-[var(--brand)] px-5 font-bold text-white transition hover:bg-[var(--brand-hover)]" href="/request-a-quote">Request Tooling Quote →</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
