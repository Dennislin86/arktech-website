"use client";

import Image from "next/image";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

type Evidence = {
  alt: string;
  ariaLabel: string;
  height: number;
  id: string;
  objectFit: "contain" | "cover";
  src: string;
  title: string;
  width: number;
};

const evidence: Evidence[] = [
  {
    alt: "Injection mold trial report",
    ariaLabel: "Open the injection mold trial report",
    height: 4221,
    id: "trial-report",
    objectFit: "contain",
    src: "/images/quality/arktech-mold-trial-report-overview.webp",
    title: "Mold Trial Out Report",
    width: 2000
  },
  {
    alt: "Injection mold trial at Arktech",
    ariaLabel: "Open the Arktech injection mold trial image",
    height: 924,
    id: "trial-machine",
    objectFit: "cover",
    src: "/images/quality/arktech-mold-trial-machine.webp",
    title: "Mold Trial Video in 3 Cycle",
    width: 1400
  },
  {
    alt: "Sample inspection report with dimensional measurement results",
    ariaLabel: "Open the sample inspection report with dimensional measurement results",
    height: 1024,
    id: "dimensional-report",
    objectFit: "contain",
    src: "/images/Mold trail/Sample Inspection Report.png",
    title: "Sample Inspection Report",
    width: 874
  },
  {
    alt: "Injection molding process parameter record",
    ariaLabel: "Open the injection molding process parameter record",
    height: 2048,
    id: "molding-parameters",
    objectFit: "contain",
    src: "/images/quality/arktech-injection-molding-parameters.webp",
    title: "Injection Parameter Sheet",
    width: 1450
  }
];

const zoomLevels = [1, 1.5, 2, 3];

function EvidenceButton({ item, onOpen, className }: { item: Evidence; onOpen: () => void; className: string }) {
  return (
    <figure className="flex h-full min-w-0 flex-col">
      <figcaption className="mb-2 text-sm font-bold leading-5 text-[var(--brand-dark)]">{item.title}</figcaption>
      <button
        aria-haspopup="dialog"
        aria-label={item.ariaLabel}
        className={`focus-ring group relative block min-h-44 w-full flex-1 cursor-zoom-in overflow-hidden rounded-md border border-[var(--line)] bg-white transition hover:border-[var(--brand)] ${className}`}
        onClick={onOpen}
        type="button"
      >
        <Image
          alt={item.alt}
          className={`${item.objectFit === "cover" ? "object-cover object-center" : "object-contain object-center p-1.5"} transition duration-300 group-hover:opacity-95 motion-reduce:transition-none`}
          fill
          loading="lazy"
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 48vw, 100vw"
          src={item.src}
        />
      </button>
    </figure>
  );
}

export function ValidationEvidenceGallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [zoomIndex, setZoomIndex] = useState(0);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const closePreview = useCallback(() => {
    const returnIndex = activeIndex;
    setActiveIndex(null);
    setZoomIndex(0);
    window.requestAnimationFrame(() => {
      if (returnIndex !== null) triggerRefs.current[returnIndex]?.focus();
    });
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") closePreview();
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoomIndex((value) => Math.min(zoomLevels.length - 1, value + 1));
      }
      if (event.key === "-") {
        event.preventDefault();
        setZoomIndex((value) => Math.max(0, value - 1));
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, closePreview]);

  function openPreview(index: number) {
    setZoomIndex(0);
    setActiveIndex(index);
  }

  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;

    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled])"));
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  const activeEvidence = activeIndex === null ? null : evidence[activeIndex];
  const zoom = zoomLevels[zoomIndex];

  return (
    <>
      <div className="grid min-w-0 gap-3 md:h-[520px] md:grid-cols-2">
        <div ref={(node) => { triggerRefs.current[0] = node?.querySelector("button") ?? null; }}>
          <EvidenceButton className="aspect-[4/5] md:aspect-auto" item={evidence[0]} onOpen={() => openPreview(0)} />
        </div>
        <div className="grid min-w-0 gap-3 md:min-h-0 md:grid-rows-2">
          <div ref={(node) => { triggerRefs.current[1] = node?.querySelector("button") ?? null; }}>
            <EvidenceButton className="aspect-[16/10] md:aspect-auto" item={evidence[1]} onOpen={() => openPreview(1)} />
          </div>
          <div className="grid min-w-0 gap-3 sm:grid-cols-2 md:min-h-0">
            <div ref={(node) => { triggerRefs.current[2] = node?.querySelector("button") ?? null; }}>
              <EvidenceButton className="aspect-[4/3] sm:aspect-auto" item={evidence[2]} onOpen={() => openPreview(2)} />
            </div>
            <div ref={(node) => { triggerRefs.current[3] = node?.querySelector("button") ?? null; }}>
              <EvidenceButton className="aspect-[4/3] sm:aspect-auto" item={evidence[3]} onOpen={() => openPreview(3)} />
            </div>
          </div>
        </div>
      </div>

      {activeEvidence ? (
        <div
          aria-describedby="validation-evidence-dialog-description"
          aria-labelledby="validation-evidence-dialog-title"
          aria-modal="true"
          className="fixed inset-0 z-[110] flex flex-col bg-[#071b2b]/95 p-3 sm:p-5"
          onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col overflow-hidden rounded-md border border-white/15 bg-[#e8edf1] shadow-2xl">
            <div className="flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-black/10 bg-white px-3 py-2 sm:px-4">
              <div className="min-w-0 flex-1 pr-2">
                <h2 className="truncate text-sm font-bold text-[var(--brand-dark)] sm:text-base" id="validation-evidence-dialog-title">{activeEvidence.title}</h2>
                <p className="sr-only" id="validation-evidence-dialog-description">Use the zoom controls, then scroll horizontally and vertically to inspect the image.</p>
              </div>
              <button
                aria-label="Zoom out"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={zoomIndex === 0}
                onClick={() => setZoomIndex((value) => Math.max(0, value - 1))}
                type="button"
              >
                −
              </button>
              <output aria-live="polite" className="min-w-16 text-center text-sm font-semibold text-[var(--brand-dark)]">{Math.round(zoom * 100)}%</output>
              <button
                aria-label="Zoom in"
                className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] disabled:cursor-not-allowed disabled:opacity-40"
                disabled={zoomIndex === zoomLevels.length - 1}
                onClick={() => setZoomIndex((value) => Math.min(zoomLevels.length - 1, value + 1))}
                type="button"
              >
                +
              </button>
              <button
                aria-label="Close validation evidence preview"
                className="focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-sm bg-[var(--brand-dark)] px-3 text-sm font-bold text-white transition hover:bg-[var(--brand)]"
                onClick={closePreview}
                ref={closeRef}
                type="button"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-5" style={{ touchAction: "pan-x pan-y pinch-zoom" }}>
              <div className="mx-auto origin-top" style={{ width: `${zoom * 100}%` }}>
                <Image
                  alt={activeEvidence.alt}
                  className="h-auto w-full max-w-none"
                  height={activeEvidence.height}
                  sizes="100vw"
                  src={activeEvidence.src}
                  unoptimized
                  width={activeEvidence.width}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
