"use client";

import Image from "next/image";
import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";

type Drawing = {
  alt: string;
  ariaLabel: string;
  height: number;
  src: string;
  title: string;
  width: number;
};

const drawings: Drawing[] = [
  {
    alt: "2D mold design drawing with dimensions and tooling details",
    ariaLabel: "Open the full-resolution mold 2D drawing",
    height: 2200,
    src: "/images/Engineering/Mold 2d drawing.png",
    title: "Mold 2D Drawing",
    width: 3146
  },
  {
    alt: "3D CAD view of an injection mold assembly",
    ariaLabel: "Open the full-resolution mold 3D drawing",
    height: 2024,
    src: "/images/Engineering/Mold 3d drawing.png",
    title: "Mold 3D Drawing",
    width: 2074
  }
];

const zoomLevels = [1, 1.5, 2, 3];

export function MoldDrawingPreview() {
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

  const activeDrawing = activeIndex === null ? null : drawings[activeIndex];
  const zoom = zoomLevels[zoomIndex];

  return (
    <>
      <div className="mt-6 grid gap-3 sm:grid-cols-2" aria-label="Mold design drawing examples">
        {drawings.map((drawing, index) => (
          <figure className="min-w-0" key={drawing.title}>
            <figcaption className="mb-2 text-sm font-bold leading-5 text-[var(--brand-dark)]">{drawing.title}</figcaption>
            <button
              aria-haspopup="dialog"
              aria-label={drawing.ariaLabel}
              className="focus-ring group relative block aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-md border border-[var(--line)] bg-[#edf1f4] transition hover:border-[var(--brand)]"
              onClick={() => openPreview(index)}
              ref={(node) => { triggerRefs.current[index] = node; }}
              type="button"
            >
              <Image
                alt={drawing.alt}
                className="object-contain object-center p-1.5 transition duration-300 group-hover:opacity-95 motion-reduce:transition-none"
                fill
                loading="lazy"
                sizes="(min-width: 1280px) 270px, (min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw"
                src={drawing.src}
              />
            </button>
          </figure>
        ))}
      </div>

      {activeDrawing ? (
        <div
          aria-describedby="mold-drawing-dialog-description"
          aria-labelledby="mold-drawing-dialog-title"
          aria-modal="true"
          className="fixed inset-0 z-[110] flex flex-col bg-[#071b2b]/95 p-3 sm:p-5"
          onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col overflow-hidden rounded-md border border-white/15 bg-[#e8edf1] shadow-2xl">
            <div className="flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-black/10 bg-white px-3 py-2 sm:px-4">
              <div className="min-w-0 flex-1 pr-2">
                <h2 className="truncate text-sm font-bold text-[var(--brand-dark)] sm:text-base" id="mold-drawing-dialog-title">{activeDrawing.title}</h2>
                <p className="sr-only" id="mold-drawing-dialog-description">Use the zoom controls, then scroll horizontally and vertically to inspect the drawing.</p>
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
                aria-label="Close mold drawing preview"
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
                  alt={activeDrawing.alt}
                  className="h-auto w-full max-w-none"
                  height={activeDrawing.height}
                  sizes="100vw"
                  src={activeDrawing.src}
                  unoptimized
                  width={activeDrawing.width}
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
