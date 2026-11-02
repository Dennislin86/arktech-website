"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PortfolioCategory, PortfolioItem } from "@/lib/portfolio";

const categories: PortfolioCategory[] = ["Injection Molds", "Plastic Parts"];
const acronymMap: Record<string, string> = {
  "2k": "2K",
  abs: "ABS",
  cnc: "CNC",
  dfm: "DFM",
  ev: "EV",
  gf: "GF",
  gf30: "GF30",
  iot: "IoT",
  pa: "PA",
  pbt: "PBT",
  pc: "PC",
  pom: "POM",
  pps: "PPS",
  ppsu: "PPSU",
  tpe: "TPE",
  usa: "USA"
};

type PortfolioGroup = {
  name: string;
  items: PortfolioItem[];
};

function formatDisplayTitle(value: string) {
  return value
    .replace(/\bhigh temperature\b/gi, "high-temperature")
    .split(/(\s+|\/|-)/)
    .map((part) => {
      if (/^(\s+|\/|-)$/.test(part)) return part;
      const normalized = part.toLowerCase();
      return acronymMap[normalized] ?? `${normalized.charAt(0).toUpperCase()}${normalized.slice(1)}`;
    })
    .join("");
}

function groupItems(items: PortfolioItem[], category: PortfolioCategory, filter: string): PortfolioGroup[] {
  const grouped = new Map<string, PortfolioItem[]>();

  for (const item of items.filter((entry) => {
    if (entry.category !== category) return false;
    if (filter === "All") return true;
    return category === "Injection Molds" ? entry.industry === filter : entry.moldTypeProcess === filter;
  })) {
    const groupName = category === "Injection Molds" ? item.moldTypeProcess : item.industry;
    const current = grouped.get(groupName) ?? [];
    current.push(item);
    grouped.set(groupName, current);
  }

  return [...grouped.entries()]
    .map(([name, group]) => ({
      name,
      items: group.sort((left, right) => left.sortOrder - right.sortOrder)
    }))
    .sort((left, right) => {
      const orderDifference = Math.min(...left.items.map((item) => item.sortOrder)) - Math.min(...right.items.map((item) => item.sortOrder));
      return orderDifference || left.name.localeCompare(right.name);
    });
}

function groupDescription(category: PortfolioCategory, group: PortfolioGroup) {
  if (category === "Injection Molds") {
    return `${group.items.length} ${group.name} tooling ${group.items.length === 1 ? "example" : "examples"} from the published Portfolio data.`;
  }

  return `${group.items.length} molded-part ${group.items.length === 1 ? "example" : "examples"} for ${group.name} applications.`;
}

function displayTags(item: PortfolioItem) {
  const tags = [...new Set(item.tags.map((tag) => tag.trim()).filter(Boolean))];
  return (tags.length ? tags : [item.moldTypeProcess]).slice(0, 2);
}

function cardEyebrow(item: PortfolioItem) {
  return item.category === "Injection Molds" ? item.industry : item.moldTypeProcess || item.category;
}

function PortfolioCard({
  item,
  horizontal,
  onOpen
}: {
  item: PortfolioItem;
  horizontal: boolean;
  onOpen: (item: PortfolioItem) => void;
}) {
  const moldImage = item.category === "Injection Molds";

  return (
    <article
      className={`group min-w-0 overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-[0_8px_24px_rgba(15,35,60,0.05)] ${horizontal ? "shrink-0 snap-start basis-[84%] sm:basis-[46%] lg:basis-[42%] xl:basis-[27%]" : "h-full"}`}
    >
      <button
        aria-label={`View details for ${item.imageTitle}`}
        className="focus-ring block h-full w-full cursor-zoom-in rounded-sm text-left"
        onClick={() => onOpen(item)}
        type="button"
      >
        <span className="relative block aspect-[4/3] overflow-hidden bg-[#f4f6f8]">
          <Image
            alt={item.altText}
            className={`${moldImage ? "object-contain" : "object-cover"} object-center transition duration-300 group-hover:scale-[1.015] motion-reduce:transition-none`}
            fill
            loading="lazy"
            sizes={horizontal
              ? "(min-width: 1280px) 25vw, (min-width: 768px) 45vw, 85vw"
              : "(min-width: 1280px) 25vw, (min-width: 640px) 45vw, 100vw"}
            src={item.image}
            title={item.imageTitle}
          />
        </span>

        <span className="block px-4 py-4 sm:px-5">
          <span className="block text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{cardEyebrow(item)}</span>
          <span className="mt-2 line-clamp-2 block text-lg font-bold leading-snug text-[var(--brand-dark)] sm:text-xl">
            {formatDisplayTitle(item.imageTitle)}
          </span>
        </span>
      </button>
    </article>
  );
}

function HorizontalPortfolioRow({
  active,
  group,
  onOpen
}: {
  active: boolean;
  group: PortfolioGroup;
  onOpen: (item: PortfolioItem) => void;
}) {
  const rowRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState({ canScroll: false, atStart: true, atEnd: false });

  const updateScrollState = useCallback(() => {
    const row = rowRef.current;
    if (!row) return;

    const maximum = Math.max(0, row.scrollWidth - row.clientWidth);
    setScrollState({
      canScroll: maximum > 4,
      atStart: row.scrollLeft <= 4,
      atEnd: row.scrollLeft >= maximum - 4
    });
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row) return;

    updateScrollState();
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(row);
    row.addEventListener("scroll", updateScrollState, { passive: true });

    return () => {
      observer.disconnect();
      row.removeEventListener("scroll", updateScrollState);
    };
  }, [active, group.items.length, updateScrollState]);

  function scroll(direction: -1 | 1) {
    const row = rowRef.current;
    if (!row) return;
    row.scrollBy({ left: direction * Math.max(row.clientWidth * 0.82, 280), behavior: "smooth" });
  }

  return (
    <div className="relative">
      {scrollState.canScroll ? (
        <div className="absolute -top-13 right-0 hidden items-center gap-2 sm:flex">
          <button
            aria-label={`Scroll ${group.name} left`}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] disabled:cursor-not-allowed disabled:opacity-35"
            disabled={scrollState.atStart}
            onClick={() => scroll(-1)}
            type="button"
          >
            <span aria-hidden="true">←</span>
          </button>
          <button
            aria-label={`Scroll ${group.name} right`}
            className="focus-ring inline-flex size-10 items-center justify-center rounded-full border border-[var(--line)] bg-white text-xl font-bold text-[var(--brand-dark)] transition hover:border-[var(--brand)] hover:text-[var(--brand)] disabled:cursor-not-allowed disabled:opacity-35"
            disabled={scrollState.atEnd}
            onClick={() => scroll(1)}
            type="button"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      ) : null}

      <div
        className="flex touch-pan-x snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 sm:gap-5"
        ref={rowRef}
      >
        {group.items.map((item) => <PortfolioCard horizontal item={item} key={item.id} onOpen={onOpen} />)}
      </div>
    </div>
  );
}

export function PortfolioGallery({ items }: { items: PortfolioItem[] }) {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory>("Injection Molds");
  const [filters, setFilters] = useState<Record<PortfolioCategory, string>>({
    "Injection Molds": "All",
    "Plastic Parts": "All"
  });
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(() => new Set());
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const categoryItems = useMemo(() => ({
    "Injection Molds": items.filter((item) => item.category === "Injection Molds"),
    "Plastic Parts": items.filter((item) => item.category === "Plastic Parts")
  }), [items]);

  const filterOptions = useMemo(() => ({
    "Injection Molds": [...new Set(categoryItems["Injection Molds"].map((item) => item.industry))].sort(),
    "Plastic Parts": [...new Set(categoryItems["Plastic Parts"].map((item) => item.moldTypeProcess))].filter(Boolean).sort()
  }), [categoryItems]);

  const groupsByCategory = useMemo(() => ({
    "Injection Molds": groupItems(items, "Injection Molds", filters["Injection Molds"]),
    "Plastic Parts": groupItems(items, "Plastic Parts", filters["Plastic Parts"])
  }), [filters, items]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (selectedItem && dialog && !dialog.open) dialog.showModal();
  }, [selectedItem]);

  function openDetails(item: PortfolioItem) {
    openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelectedItem(item);
  }

  function closeDetails() {
    dialogRef.current?.close();
  }

  function handleDialogClose() {
    setSelectedItem(null);
    requestAnimationFrame(() => openerRef.current?.focus());
  }

  function updateFilter(category: PortfolioCategory, value: string) {
    setFilters((current) => ({ ...current, [category]: value }));
  }

  function toggleExpanded(category: PortfolioCategory, groupName: string) {
    const key = `${category}:${groupName}`;
    setExpandedGroups((current) => {
      const next = new Set(current);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  return (
    <div>
      <div aria-label="Portfolio categories" className="grid grid-cols-2 border-b border-[var(--line)]" role="tablist">
        {categories.map((category) => {
          const selected = activeCategory === category;
          const count = categoryItems[category].length;
          return (
            <button
              aria-controls={`portfolio-gallery-panel-${category === "Injection Molds" ? "molds" : "parts"}`}
              aria-selected={selected}
              className={`focus-ring min-h-14 border-b-2 px-3 py-3 text-sm font-bold transition sm:px-4 sm:text-base ${selected ? "border-[var(--brand)] text-[var(--brand)]" : "border-transparent text-[var(--muted)] hover:text-[var(--brand-dark)]"}`}
              id={`portfolio-tab-${category === "Injection Molds" ? "molds" : "parts"}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              tabIndex={selected ? 0 : -1}
              type="button"
            >
              {category} <span className="ml-1 font-medium text-current/70">({count})</span>
            </button>
          );
        })}
      </div>

      {categories.map((category) => {
        const active = activeCategory === category;
        const visibleGroups = groupsByCategory[category];
        const selectedFilter = filters[category];
        const filterLabel = category === "Injection Molds" ? "Industry" : "Process";
        const visibleCount = visibleGroups.reduce((total, group) => total + group.items.length, 0);

        return (
          <div
            aria-labelledby={`portfolio-tab-${category === "Injection Molds" ? "molds" : "parts"}`}
            className="pt-5 sm:pt-6"
            hidden={!active}
            id={`portfolio-gallery-panel-${category === "Injection Molds" ? "molds" : "parts"}`}
            key={category}
            role="tabpanel"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--line)] pb-5">
              <label className="flex min-w-0 items-center gap-3 text-sm font-bold text-[var(--brand-dark)]">
                <span className="shrink-0">{filterLabel}</span>
                <select
                  className="focus-ring min-h-11 max-w-full rounded-sm border border-[var(--line)] bg-white px-3 font-normal text-[var(--foreground)]"
                  onChange={(event) => updateFilter(category, event.target.value)}
                  value={selectedFilter}
                >
                  <option value="All">All {category === "Injection Molds" ? "Industries" : "Processes"}</option>
                  {filterOptions[category].map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </label>
              <p aria-live="polite" className="text-sm text-[var(--muted)]">
                {visibleGroups.length} {visibleGroups.length === 1 ? "category" : "categories"} · {visibleCount} projects
              </p>
            </div>

            {visibleGroups.length ? (
              <div className="divide-y divide-[var(--line)]">
                {visibleGroups.map((group) => {
                  const groupKey = `${category}:${group.name}`;
                  const expanded = expandedGroups.has(groupKey);
                  return (
                    <section className="py-8 sm:py-10" key={group.name}>
                      <div className="mb-5 flex items-start justify-between gap-5 pr-0 sm:pr-24">
                        <div className="min-w-0">
                          <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">
                            {category === "Injection Molds" ? "Mold Process" : "Application Industry"}
                          </p>
                          <h3 className="mt-2 text-2xl font-bold text-[var(--brand-dark)]">
                            {formatDisplayTitle(group.name)} <span className="text-base font-medium text-[var(--muted)]">({group.items.length})</span>
                          </h3>
                          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">{groupDescription(category, group)}</p>
                        </div>
                        {group.items.length > 4 ? (
                          <button
                            aria-expanded={expanded}
                            className="focus-ring min-h-11 shrink-0 rounded-sm px-2 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]"
                            onClick={() => toggleExpanded(category, group.name)}
                            type="button"
                          >
                            {expanded ? "Show Less" : "View All"}
                          </button>
                        ) : null}
                      </div>

                      {expanded ? (
                        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                          {group.items.map((item) => <PortfolioCard horizontal={false} item={item} key={item.id} onOpen={openDetails} />)}
                        </div>
                      ) : (
                        <HorizontalPortfolioRow active={active} group={group} onOpen={openDetails} />
                      )}
                    </section>
                  );
                })}
              </div>
            ) : (
              <div className="rounded-sm border border-[var(--line)] bg-[var(--surface-soft)] px-5 py-8 text-[var(--muted)] sm:px-6">
                No published {category.toLowerCase()} records match this filter in the current Excel data.
              </div>
            )}
          </div>
        );
      })}

      <dialog
        aria-label="Portfolio project details"
        className="m-auto max-h-[92vh] w-[min(94vw,1050px)] max-w-none overflow-y-auto rounded-sm border border-[var(--line)] bg-white p-0 text-[var(--foreground)] shadow-2xl backdrop:bg-slate-950/75"
        onClick={(event) => {
          if (event.target === event.currentTarget) closeDetails();
        }}
        onClose={handleDialogClose}
        ref={dialogRef}
      >
        {selectedItem ? (
          <div className="relative grid min-w-0 lg:grid-cols-[minmax(0,1.35fr)_minmax(300px,.65fr)]">
            <button
              aria-label="Close portfolio details"
              className="focus-ring absolute right-3 top-3 z-10 inline-flex size-11 items-center justify-center rounded-full border border-[var(--line)] bg-white/95 text-2xl font-bold text-[var(--brand-dark)] shadow-md hover:text-[var(--brand)]"
              onClick={closeDetails}
              type="button"
            >
              <span aria-hidden="true">×</span>
            </button>
            <div className="relative aspect-[4/3] min-h-0 overflow-hidden bg-[#f4f6f8] lg:aspect-auto lg:min-h-[560px]">
              <Image
                alt={selectedItem.altText}
                className={`${selectedItem.category === "Injection Molds" ? "object-contain" : "object-cover"} object-center`}
                fill
                loading="lazy"
                sizes="(min-width: 1024px) 65vw, 92vw"
                src={selectedItem.image}
              />
            </div>
            <div className="flex flex-col p-5 pt-16 sm:p-7 sm:pt-16 lg:p-8 lg:pt-20">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--brand)]">{cardEyebrow(selectedItem)}</p>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-[var(--brand-dark)] sm:text-3xl">
                {formatDisplayTitle(selectedItem.imageTitle)}
              </h3>
              <p className="mt-5 leading-7 text-[var(--muted)]">{selectedItem.shortDescription}</p>
              {selectedItem.caption ? <p className="mt-4 border-l-2 border-[var(--brand)] pl-4 text-sm leading-6 text-[var(--foreground)]">{selectedItem.caption}</p> : null}
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Portfolio item tags">
                {displayTags(selectedItem).map((tag) => (
                  <span className="rounded-full bg-[var(--surface-soft)] px-3 py-1.5 text-xs font-bold text-[var(--foreground)]" key={tag}>{tag}</span>
                ))}
              </div>
              <Link
                className="focus-ring mt-7 inline-flex min-h-11 items-center self-start rounded-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]"
                href={selectedItem.relatedExistingPage}
                onClick={closeDetails}
              >
                Explore Related Capability <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </div>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
