"use client";

import Image from "next/image";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

const alt = "Overview of 21 DFM report pages for injection mold design review";
const previewSrc = "/images/Engineering/arktech-dfm-mold-design-report-overview.webp";
const fullResolutionSrc = "/images/Engineering/DFM report.png";
const zoomLevels = [1, 1.5, 2, 3];

export function DfmReportPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const closePreview = useCallback(() => {
    setIsOpen(false);
    setZoomIndex(0);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") closePreview();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closePreview, isOpen]);

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

  const zoom = zoomLevels[zoomIndex];

  return (
    <>
      <figure className="flex min-w-0 justify-center lg:justify-start">
        <button
          aria-haspopup="dialog"
          aria-label="Open the complete 21-page DFM report overview"
          className="focus-ring group block cursor-zoom-in overflow-hidden rounded-md border border-[var(--line)] bg-[#edf1f4] transition hover:border-[var(--brand)]"
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Image
            alt={alt}
            className="h-auto max-h-none w-full object-contain object-center transition duration-300 group-hover:opacity-95 motion-reduce:transition-none md:max-h-[900px] md:w-auto"
            height={2964}
            sizes="(min-width: 1280px) 520px, (min-width: 1024px) 46vw, 100vw"
            src={previewSrc}
            unoptimized
            width={1600}
          />
        </button>
      </figure>

      {isOpen ? (
        <div
          aria-describedby="dfm-report-dialog-description"
          aria-labelledby="dfm-report-dialog-title"
          aria-modal="true"
          className="fixed inset-0 z-[110] flex flex-col bg-[#071b2b]/95 p-3 sm:p-5"
          onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="mx-auto flex min-h-0 w-full max-w-[1500px] flex-1 flex-col overflow-hidden rounded-md border border-white/15 bg-[#e8edf1] shadow-2xl">
            <div className="flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-black/10 bg-white px-3 py-2 sm:px-4">
              <div className="min-w-0 flex-1 pr-2">
                <h2 className="truncate text-sm font-bold text-[var(--brand-dark)] sm:text-base" id="dfm-report-dialog-title">21-page DFM report overview</h2>
                <p className="sr-only" id="dfm-report-dialog-description">Use the zoom controls, then scroll horizontally and vertically to inspect the complete report.</p>
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
                aria-label="Close DFM report preview"
                className="focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-sm bg-[var(--brand-dark)] px-3 text-sm font-bold text-white transition hover:bg-[var(--brand)]"
                onClick={closePreview}
                ref={closeRef}
                type="button"
              >
                Close
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-5">
              <div className="mx-auto origin-top" style={{ width: `${zoom * 100}%` }}>
                <Image
                  alt={alt}
                  className="h-auto w-full max-w-none"
                  height={9188}
                  sizes="100vw"
                  src={fullResolutionSrc}
                  unoptimized
                  width={4960}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
