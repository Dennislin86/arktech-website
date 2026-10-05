"use client";

import Image from "next/image";
import { KeyboardEvent, useCallback, useEffect, useId, useRef, useState } from "react";

type QualityRecordPreviewProps = {
  alt: string;
  aspect?: "document" | "landscape" | "wide";
  caption: string;
  height: number;
  preload?: boolean;
  sizes: string;
  src: string;
  width: number;
};

const zoomLevels = [1, 1.5, 2, 3];

const aspectClasses = {
  document: "aspect-[4/3]",
  landscape: "aspect-[7/5]",
  wide: "aspect-[16/10]"
};

export function QualityRecordPreview({ alt, aspect = "landscape", caption, height, preload = false, sizes, src, width }: QualityRecordPreviewProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [zoomIndex, setZoomIndex] = useState(0);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const titleId = useId();
  const descriptionId = useId();

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

    const onKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") closePreview();
      if (event.key === "+" || event.key === "=") {
        event.preventDefault();
        setZoomIndex((value) => Math.min(zoomLevels.length - 1, value + 1));
      }
      if (event.key === "-") {
        event.preventDefault();
        setZoomIndex((value) => Math.max(0, value - 1));
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [closePreview, isOpen]);

  const trapFocus = (event: KeyboardEvent<HTMLDivElement>) => {
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
  };

  const zoom = zoomLevels[zoomIndex];

  return (
    <>
      <figure className="min-w-0">
        <button
          aria-haspopup="dialog"
          aria-label={`Enlarge ${caption}`}
          className={`focus-ring group relative block w-full cursor-zoom-in overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm transition hover:border-[var(--brand)] ${aspectClasses[aspect]}`}
          onClick={() => setIsOpen(true)}
          ref={triggerRef}
          type="button"
        >
          <Image
            alt={alt}
            className="object-contain object-center p-2 transition duration-300 group-hover:opacity-95 motion-reduce:transition-none"
            fill
            loading={preload ? "eager" : "lazy"}
            sizes={sizes}
            src={src}
          />
        </button>
        <figcaption className="mt-2 text-sm font-semibold leading-6 text-[var(--brand-dark)]">
          {caption}<span className="ml-2 font-normal text-[var(--muted)]">Select to enlarge</span>
        </figcaption>
      </figure>

      {isOpen ? (
        <div
          aria-describedby={descriptionId}
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[110] flex flex-col bg-[#071b2b]/95 p-3 sm:p-5"
          onClick={(event) => { if (event.target === event.currentTarget) closePreview(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="mx-auto flex min-h-0 w-full max-w-[1600px] flex-1 flex-col overflow-hidden rounded-md border border-white/15 bg-[#e8edf1] shadow-2xl">
            <div className="flex min-h-14 shrink-0 flex-wrap items-center gap-2 border-b border-black/10 bg-white px-3 py-2 sm:px-4">
              <div className="min-w-0 flex-1 pr-2">
                <h2 className="truncate text-sm font-bold text-[var(--brand-dark)] sm:text-base" id={titleId}>{caption}</h2>
                <p className="sr-only" id={descriptionId}>Use the zoom controls, then scroll horizontally and vertically to inspect the complete image.</p>
              </div>
              <button aria-label="Zoom out" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] disabled:cursor-not-allowed disabled:opacity-40" disabled={zoomIndex === 0} onClick={() => setZoomIndex((value) => Math.max(0, value - 1))} type="button">−</button>
              <output aria-live="polite" className="min-w-16 text-center text-sm font-semibold text-[var(--brand-dark)]">{Math.round(zoom * 100)}%</output>
              <button aria-label="Zoom in" className="focus-ring inline-flex h-11 w-11 items-center justify-center rounded-sm border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] disabled:cursor-not-allowed disabled:opacity-40" disabled={zoomIndex === zoomLevels.length - 1} onClick={() => setZoomIndex((value) => Math.min(zoomLevels.length - 1, value + 1))} type="button">+</button>
              <button aria-label={`Close ${caption} preview`} className="focus-ring inline-flex h-11 min-w-11 items-center justify-center rounded-sm bg-[var(--brand-dark)] px-3 text-sm font-bold text-white transition hover:bg-[var(--brand)]" onClick={closePreview} ref={closeRef} type="button">Close</button>
            </div>
            <div className="min-h-0 flex-1 overflow-auto overscroll-contain p-3 sm:p-5" style={{ touchAction: "pan-x pan-y pinch-zoom" }}>
              <div className="mx-auto origin-top" style={{ width: `${zoom * 100}%` }}>
                <Image alt={alt} className="h-auto w-full max-w-none" height={height} sizes="100vw" src={src} unoptimized width={width} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
