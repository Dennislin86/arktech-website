"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

type MoldProject = { title: string; application: string; moldType: string; feature: string; image: string; alt: string; href: string };

const moldProjects: MoldProject[] = [
  { title: "Automotive Sensor Housing Tooling", application: "Automotive sensor housing", moldType: "Multi-cavity production mold", feature: "Glass-filled material · dimensional validation", image: "/images/case-studies/automotive-multi-cavity-mold.webp", alt: "Automotive sensor housing multi-cavity mold and molded parts", href: "/case-studies/automotive-sensor-housing-tooling" },
  { title: "Medical Device Cartridge Tooling", application: "Medical device cartridge", moldType: "Precision injection mold", feature: "Assembly interfaces · critical-dimension review", image: "/images/case-studies/Medical device.png", alt: "Medical diagnostic device with injection molds and molded housing components", href: "/case-studies/medical-device-cartridge-molding" },
  { title: "Smart Home Housing Tooling", application: "Connected-device enclosure", moldType: "Housing and enclosure molds", feature: "Cosmetic surfaces · assembly fit", image: "/images/case-studies/ihgs-housing.webp", alt: "Smart home plastic housing components and assembly", href: "/case-studies/smart-home-plastic-housing" },
  { title: "Two-Shot Light Cover Tooling", application: "Multi-material light cover", moldType: "Coordinated first- and second-shot molds", feature: "Two-shot alignment · visible interface", image: "/images/case-studies/two-shot-light-cover.webp", alt: "First-shot and second-shot molds with finished light-cover component", href: "/case-studies/two-shot-2k-injection-mold-tooling" },
  { title: "Threaded Component Unscrewing Mold", application: "Internally threaded plastic component", moldType: "Unscrewing injection mold", feature: "Controlled core release · mechanism validation", image: "/images/case-studies/unscrewing-mold.webp", alt: "Unscrewing mold with threaded plastic components", href: "/case-studies/unscrewing-threaded-component-mold" },
  { title: "Fan Blade Complex Tooling", application: "Molded fan blade", moldType: "Complex injection mold", feature: "Coordinated actions · production tooling", image: "/images/case-studies/fan-blade-mold.webp", alt: "Complex fan blade injection mold and molded fan component", href: "/request-a-quote" }
];

function ProjectCard({ project }: { project: MoldProject }) {
  return <Link aria-label={`View ${project.title}`} className="focus-ring group flex h-full flex-col overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)]" href={project.href}><div className="relative aspect-[16/10] overflow-hidden bg-[var(--surface-soft)]"><Image alt={project.alt} className="object-cover object-center transition duration-300 group-hover:scale-[1.03] motion-reduce:transition-none" draggable={false} fill sizes="(min-width: 1280px) 30vw, (min-width: 768px) 42vw, 86vw" src={project.image} /></div><div className="flex flex-1 flex-col border-t border-[var(--line)] p-4"><h3 className="text-lg font-bold leading-tight text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">{project.title}</h3><dl className="mt-3 grid gap-2 text-sm leading-5"><div><dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">Application</dt><dd className="text-[var(--muted)]">{project.application}</dd></div><div><dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">Mold Type</dt><dd className="font-semibold text-[var(--brand-dark)]">{project.moldType}</dd></div><div><dt className="text-[10px] font-bold uppercase tracking-[0.1em] text-[var(--brand)]">Engineering Features</dt><dd className="text-[var(--muted)]">{project.feature}</dd></div></dl><span className="mt-4 text-sm font-bold text-[var(--brand)]">{project.href === "/request-a-quote" ? "Discuss a Similar Project" : "View Project"} <span aria-hidden="true">→</span></span></div></Link>;
}

export function InjectionMoldProjectsCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  const scrollProjects = useCallback((direction: -1 | 1) => {
    const track = trackRef.current;
    if (!track) return;
    const atEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
    const atStart = track.scrollLeft <= 8;
    if ((direction === 1 && atEnd) || (direction === -1 && atStart)) {
      track.scrollTo({ left: direction === 1 ? 0 : track.scrollWidth, behavior: reducedMotion ? "auto" : "smooth" });
      return;
    }
    track.scrollBy({ left: direction * Math.max(track.clientWidth * 0.48, 280), behavior: reducedMotion ? "auto" : "smooth" });
  }, [reducedMotion]);

  useEffect(() => {
    if (paused || reducedMotion) return;
    const timer = window.setInterval(() => scrollProjects(1), 9000);
    return () => window.clearInterval(timer);
  }, [paused, reducedMotion, scrollProjects]);

  return <section aria-labelledby="real-mold-projects-heading" className="overflow-x-clip bg-white py-14 sm:py-16" id="real-injection-mold-projects"><div className="container-page"><div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"><div className="max-w-4xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[var(--brand)]">Real Injection Mold Projects</p><h2 className="mt-3 text-3xl font-bold text-[var(--brand-dark)] sm:text-4xl" id="real-mold-projects-heading">Completed Injection Molds Built by Arktech</h2><p className="mt-4 max-w-3xl leading-7 text-[var(--muted)]">Explore real injection molds manufactured for different part geometries, production volumes and molding requirements, including multi-cavity, complex, two-shot and unscrewing tooling.</p></div><div aria-label="Injection mold project carousel controls" className="flex gap-3" role="group"><button aria-label="Previous injection mold projects" className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => scrollProjects(-1)} type="button">←</button><button aria-label={paused ? "Play injection mold project carousel" : "Pause injection mold project carousel"} aria-pressed={paused} className="focus-ring inline-flex min-w-11 items-center justify-center rounded-full border border-[var(--line)] bg-white px-3 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => setPaused((value) => !value)} type="button">{paused ? "Play" : "Pause"}</button><button aria-label="Next injection mold projects" className="focus-ring inline-flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)]" onClick={() => scrollProjects(1)} type="button">→</button></div></div><div aria-label="Completed injection mold projects" className="mt-8 grid min-w-0 max-w-full snap-x snap-mandatory grid-flow-col grid-rows-1 auto-cols-[86%] gap-5 overflow-x-auto overscroll-x-contain scroll-smooth pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:auto-cols-[60%] md:grid-rows-2 md:auto-cols-[42%] lg:auto-cols-[34%] xl:auto-cols-[31%] motion-reduce:scroll-auto" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false); }} onFocus={() => setPaused(true)} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} ref={trackRef} role="region" tabIndex={0}>{moldProjects.map((project) => <div className="snap-start" key={project.title}><ProjectCard project={project} /></div>)}</div></div></section>;
}
