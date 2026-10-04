"use client";

import Image from "next/image";
import Link from "next/link";
import { CSSProperties, KeyboardEvent, useCallback, useEffect, useRef, useState } from "react";
import manifest from "@/generated/tooling-gallery-manifest.json";
import styles from "./ToolingGallery.module.css";

type GalleryCategory = "mould" | "plastic-part";

type GalleryItem = {
  id: string;
  category: GalleryCategory;
  image: string;
  width: number;
  height: number;
  title: string;
  alt: string;
  caseStudyUrl?: string;
  order: number;
};

const items = manifest.items as GalleryItem[];

function splitRows(categoryItems: GalleryItem[]) {
  return [categoryItems.filter((_, index) => index % 2 === 0), categoryItems.filter((_, index) => index % 2 === 1)];
}

function GalleryCard({ item, clone = false, onOpen }: { item: GalleryItem; clone?: boolean; onOpen: (item: GalleryItem, trigger: HTMLButtonElement) => void }) {
  return (
    <button
      aria-label={clone ? undefined : `View ${item.title} larger`}
      className={`${styles.card} focus-ring group shrink-0 overflow-hidden rounded-md border border-[var(--line)] bg-white text-left transition hover:border-[var(--brand)]`}
      onClick={clone ? undefined : (event) => onOpen(item, event.currentTarget)}
      tabIndex={clone ? -1 : 0}
      type="button"
    >
      <span className="relative block aspect-[16/10] overflow-hidden bg-[#eef2f5]">
        <Image
          alt={clone ? "" : item.alt}
          className="object-contain object-center transition duration-300 group-hover:scale-[1.02] motion-reduce:transition-none"
          fill
          loading="lazy"
          sizes="(min-width: 1280px) 280px, (min-width: 768px) 22vw, 72vw"
          src={item.image}
        />
      </span>
      <span className="block border-t border-[var(--line)] px-3 py-2.5 text-sm font-semibold leading-5 text-[var(--brand-dark)] transition group-hover:text-[var(--brand)]">
        {item.title}
      </span>
    </button>
  );
}

function GalleryRow({ direction, rowItems, onOpen }: { direction: "left" | "right"; rowItems: GalleryItem[]; onOpen: (item: GalleryItem, trigger: HTMLButtonElement) => void }) {
  if (!rowItems.length) return null;
  const shouldAnimate = rowItems.length >= 3;
  const duration = Math.max(34, rowItems.length * 10);
  const style = { "--gallery-duration": `${duration}s` } as CSSProperties;

  return (
    <div className={styles.rowViewport}>
      <div className={`${styles.track} ${shouldAnimate ? direction === "left" ? styles.movingLeft : styles.movingRight : "mx-auto"}`} style={style}>
        <div className={styles.sequence}>
          {rowItems.map((item) => <GalleryCard item={item} key={item.id} onOpen={onOpen} />)}
        </div>
        {shouldAnimate ? (
          <div aria-hidden="true" className={`${styles.sequence} ${styles.clone}`}>
            {rowItems.map((item) => <GalleryCard clone item={item} key={`clone-${item.id}`} onOpen={onOpen} />)}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export function ToolingGallery() {
  const [paused, setPaused] = useState(false);
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const mouldRows = splitRows(items.filter((item) => item.category === "mould"));
  const partRows = splitRows(items.filter((item) => item.category === "plastic-part"));

  const closeModal = useCallback(() => {
    setActiveItem(null);
    window.requestAnimationFrame(() => openerRef.current?.focus());
  }, []);

  function openModal(item: GalleryItem, trigger: HTMLButtonElement) {
    openerRef.current = trigger;
    setActiveItem(item);
  }

  useEffect(() => {
    if (!activeItem) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === "Escape") closeModal();
    }

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [activeItem, closeModal]);

  function trapFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "Tab") return;
    const focusable = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]'));
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

  const hasMoulds = mouldRows.some((row) => row.length);
  const hasParts = partRows.some((row) => row.length);
  if (!hasMoulds && !hasParts) return null;

  return (
    <section aria-labelledby="tooling-gallery-heading" className={`bg-white py-14 sm:py-16 ${styles.gallery} ${paused ? styles.paused : ""}`}>
      <div className="container-page">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)] sm:text-sm">Real Tooling &amp; Molded Parts</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-[-0.015em] text-[var(--brand-dark)] sm:text-4xl" id="tooling-gallery-heading">Injection Molds &amp; Molded Parts</h2>
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">Explore a selection of injection molds and plastic parts manufactured by Arktech for customer projects.</p>
          </div>
          <button
            aria-pressed={paused}
            className="focus-ring inline-flex min-h-11 shrink-0 items-center justify-center self-start rounded-sm border border-[var(--line-strong)] bg-white px-4 text-sm font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] sm:self-auto"
            onClick={() => setPaused((value) => !value)}
            type="button"
          >
            <span aria-hidden="true" className="mr-2 text-[var(--brand)]">{paused ? "▶" : "Ⅱ"}</span>
            {paused ? "Play gallery" : "Pause gallery"}
          </button>
        </div>

        <div className="mt-8 space-y-7 sm:mt-9 sm:space-y-8">
          {hasMoulds ? (
            <div aria-labelledby="injection-molds-gallery-label">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-dark)]" id="injection-molds-gallery-label">Injection Molds</h3>
              <div className="space-y-3">
                <GalleryRow direction="left" onOpen={openModal} rowItems={mouldRows[0]} />
                <GalleryRow direction="right" onOpen={openModal} rowItems={mouldRows[1]} />
              </div>
            </div>
          ) : null}

          {hasParts ? (
            <div aria-labelledby="plastic-parts-gallery-label">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-[var(--brand-dark)]" id="plastic-parts-gallery-label">Plastic Parts</h3>
              <div className="space-y-3">
                <GalleryRow direction="left" onOpen={openModal} rowItems={partRows[0]} />
                <GalleryRow direction="right" onOpen={openModal} rowItems={partRows[1]} />
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {activeItem ? (
        <div
          aria-labelledby="tooling-gallery-dialog-title"
          aria-modal="true"
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#081f33]/85 p-4 backdrop-blur-sm"
          onClick={(event) => { if (event.target === event.currentTarget) closeModal(); }}
          onKeyDown={trapFocus}
          role="dialog"
        >
          <div className="relative flex max-h-[92vh] w-full max-w-5xl flex-col overflow-hidden rounded-md bg-white shadow-2xl">
            <button
              aria-label="Close image preview"
              className="focus-ring absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-[var(--brand-dark)] text-2xl font-medium text-white hover:bg-[var(--brand)]"
              onClick={closeModal}
              ref={closeRef}
              type="button"
            >
              ×
            </button>
            <div className="relative min-h-0 flex-1 bg-[#eef2f5]" style={{ aspectRatio: `${activeItem.width} / ${activeItem.height}` }}>
              <Image alt={activeItem.alt} className="object-contain object-center" fill sizes="(min-width: 1024px) 960px, 94vw" src={activeItem.image} />
            </div>
            <div className="flex flex-col gap-3 border-t border-[var(--line)] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
              <div>
                <h3 className="text-lg font-bold text-[var(--brand-dark)]" id="tooling-gallery-dialog-title">{activeItem.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[var(--muted)]">{activeItem.alt}</p>
              </div>
              {activeItem.caseStudyUrl ? <Link className="focus-ring inline-flex min-h-11 shrink-0 items-center font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={activeItem.caseStudyUrl}>View Project <span aria-hidden="true" className="ml-2">→</span></Link> : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
