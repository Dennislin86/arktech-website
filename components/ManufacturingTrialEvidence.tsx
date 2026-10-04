"use client";

import Image from "next/image";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

type TrialEvidence = {
  alt: string;
  ariaLabel: string;
  height: number;
  label: string;
  src: string;
  width: number;
};

const evidence: TrialEvidence[] = [
  {
    alt: "Injection mold trial report documenting mold condition and validation",
    ariaLabel: "Open the mold trial report at full size",
    height: 1037,
    label: "Trial Report",
    src: "/images/injection-mold-manufacturing/mold-trial-report-evidence.webp",
    width: 1400
  },
  {
    alt: "Dimensional inspection report for injection molded trial samples",
    ariaLabel: "Open the dimensional inspection report at full size",
    height: 750,
    label: "Dimensional Inspection",
    src: "/images/quality/dimensional-inspection-report-anonymized.webp",
    width: 1050
  },
  {
    alt: "Injection molding process parameter sheet from mold trial",
    ariaLabel: "Open the injection molding process parameters at full size",
    height: 1142,
    label: "Process Parameters",
    src: "/images/injection-mold-manufacturing/injection-molding-process-parameters.webp",
    width: 1200
  }
];

const zoomLevels = [1, 1.5, 2, 3];

function EvidenceButton({ item, onOpen, main = false }: { item: TrialEvidence; onOpen: () => void; main?: boolean }) {
  return (
    <button
      aria-haspopup="dialog"
      aria-label={item.ariaLabel}
      className="focus-ring group block w-full cursor-zoom-in overflow-hidden rounded-sm border border-[var(--line)] bg-white text-left transition hover:border-[var(--brand)]"
      onClick={onOpen}
      type="button"
    >
      <span className={`relative block overflow-hidden bg-white ${main ? "aspect-video" : "aspect-[4/3]"}`}>
        <Image
          alt={item.alt}
          className="object-contain object-center p-1 transition duration-300 group-hover:opacity-95 motion-reduce:transition-none"
          fill
          loading="lazy"
          sizes={main ? "(min-width: 1280px) 56vw, (min-width: 1024px) 54vw, 100vw" : "(min-width: 1280px) 28vw, (min-width: 1024px) 27vw, (min-width: 640px) 50vw, 100vw"}
          src={item.src}
        />
      </span>
      <span className="block border-t border-[var(--line)] px-3 py-2 text-sm font-semibold text-[var(--brand-dark)]">{item.label}</span>
    </button>
  );
}

export function ManufacturingTrialEvidence() {
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
      <div aria-label="Documented mold trial evidence" className="space-y-3">
        <div ref={(node) => { triggerRefs.current[0] = node?.querySelector("button") ?? null; }}>
          <EvidenceButton item={evidence[0]} main onOpen={() => openPreview(0)} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {evidence.slice(1).map((item, offset) => {
            const index = offset + 1;
            return (
              <div key={item.label} ref={(node) => { triggerRefs.current[index] = node?.querySelector("button") ?? null; }}>
                <EvidenceButton item={item} onOpen={() => openPreview(index)} />
              </div>
            );
          })}
        </div>
      </div>

      {activeEvidence ? (
        <div
          aria-describedby="manufacturing-trial-dialog-description"
          aria-labelledby="manufacturing-trial-dialog-title"
          aria-modal="true"
          className="fixed inset-0 z-[110] flex flex-col bg-[#071b2b]/95 p-3 sm:p-5"
          onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col overflow-hidden rounded-md border border-white/15 bg-[#e8edf1] shadow-2xl">
            <div className="flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-black/10 bg-white px-3 py-2 sm:px-4">
              <div className="min-w-0 flex-1 pr-2">
                <h2 className="truncate text-sm font-bold text-[var(--brand-dark)] sm:text-base" id="manufacturing-trial-dialog-title">{activeEvidence.label}</h2>
                <p className="sr-only" id="manufacturing-trial-dialog-description">Use the zoom controls, then scroll horizontally and vertically to inspect the report.</p>
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
                aria-label="Close trial evidence preview"
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
