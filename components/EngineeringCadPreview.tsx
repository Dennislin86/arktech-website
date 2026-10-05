"use client";

import Image from "next/image";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

const src = "/images/Engineering/injection-mold-engineering-dfm-analysis.webp";
const alt = "Injection mold DFM engineering review on CAD workstations";
const zoomLevels = [1, 1.5, 2, 3];

export function EngineeringCadPreview() {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const close = useCallback(() => {
    setIsOpen(false);
    setZoomIndex(0);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKeyDown = (event: globalThis.KeyboardEvent) => { if (event.key === "Escape") close(); };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [close, isOpen]);

  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>("button:not([disabled])"));
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;
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
      <figure className="min-w-0">
        <button
          aria-haspopup="dialog"
          aria-label="Open injection mold engineering and DFM analysis image at a larger size"
          className="focus-ring group block w-full cursor-zoom-in overflow-hidden rounded-md border border-[var(--line)] bg-white"
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Image alt={alt} className="h-auto w-full transition group-hover:opacity-95 motion-reduce:transition-none" height={1086} sizes="(min-width: 1024px) 42vw, 100vw" src={src} width={1448} />
        </button>
      </figure>
      {isOpen ? (
        <div
          aria-describedby="engineering-cad-description"
          aria-labelledby="engineering-cad-title"
          aria-modal="true"
          className="fixed inset-0 z-[110] flex flex-col bg-[#071b2b]/95 p-3 sm:p-5"
          onClick={(event) => { if (event.target === event.currentTarget) close(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="mx-auto flex min-h-0 w-full max-w-[1500px] flex-1 flex-col overflow-hidden rounded-md border border-white/15 bg-[#edf1f4] shadow-2xl">
            <div className="flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-black/10 bg-white px-3 py-2 sm:px-4">
              <div className="min-w-0 flex-1 pr-2">
                <h2 className="text-sm font-bold text-[var(--brand-dark)] sm:text-base" id="engineering-cad-title">Injection mold engineering and DFM analysis</h2>
                <p className="sr-only" id="engineering-cad-description">Use the zoom controls, then scroll to inspect the complete engineering image.</p>
              </div>
              <button aria-label="Zoom out" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] disabled:opacity-40" disabled={zoomIndex === 0} onClick={() => setZoomIndex((value) => Math.max(0, value - 1))} type="button">−</button>
              <output aria-live="polite" className="min-w-16 text-center text-sm font-semibold text-[var(--brand-dark)]">{Math.round(zoom * 100)}%</output>
              <button aria-label="Zoom in" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] disabled:opacity-40" disabled={zoomIndex === zoomLevels.length - 1} onClick={() => setZoomIndex((value) => Math.min(zoomLevels.length - 1, value + 1))} type="button">+</button>
              <button aria-label="Close injection mold engineering image preview" className="focus-ring inline-flex h-11 items-center justify-center rounded-sm bg-[var(--brand-dark)] px-4 text-sm font-bold text-white hover:bg-[var(--brand)]" onClick={close} ref={closeRef} type="button">Close</button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-5">
              <div className="mx-auto origin-top" style={{ width: `${zoom * 100}%` }}>
                <Image alt={alt} className="h-auto w-full max-w-none" height={1086} sizes="100vw" src={src} unoptimized width={1448} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
