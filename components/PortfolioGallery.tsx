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
  iot: "IoT",
  pc: "PC",
  pps: "PPS",
  ppsu: "PPSU"
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

function groupItems(items: PortfolioItem[], category: PortfolioCategory): PortfolioGroup[] {
  const grouped = new Map<string, PortfolioItem[]>();

  for (const item of items.filter((entry) => entry.category === category)) {
    const groupName = category === "Injection Molds" ? item.moldTypeProcess : item.industry;
    const current = grouped.get(groupName) ?? [];
    current.push(item);
    grouped.set(groupName, current);
  }

  return [...grouped.entries()]
    .map(([name, group]) => ({ name, items: group }))
    .sort((left, right) => {
      const orderDifference = Math.min(...left.items.map((item) => item.sortOrder)) - Math.min(...right.items.map((item) => item.sortOrder));
      return orderDifference || left.name.localeCompare(right.name);
    });
}

function groupDescription(category: PortfolioCategory, group: PortfolioGroup) {
  if (category === "Injection Molds") {
    return `Browse ${group.items.length} tooling ${group.items.length === 1 ? "example" : "examples"} grouped by the recorded ${group.name} process.`;
  }

  return `Browse ${group.items.length} molded-part ${group.items.length === 1 ? "example" : "examples"} for ${group.name} applications.`;
}

function displayTags(item: PortfolioItem) {
  const tags = [...new Set(item.tags.map((tag) => tag.trim()).filter(Boolean))];
  return (tags.length ? tags : [item.moldTypeProcess]).slice(0, 2);
}

function PortfolioCard({ item, horizontal }: { item: PortfolioItem; horizontal: boolean }) {
  const moldImage = item.category === "Injection Molds";

  return (
    <article
      className={`group flex min-w-0 flex-col overflow-hidden rounded-sm border border-[var(--line)] bg-white shadow-[0_8px_24px_rgba(15,35,60,0.05)] ${horizontal ? "h-auto shrink-0 snap-start basis-[84%] sm:basis-[46%] lg:basis-[31%] xl:basis-[28%]" : "h-full"}`}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-[#f4f6f8]">
        <Image
          alt={item.altText}
          className={`${moldImage ? "object-contain" : "object-cover"} object-center transition duration-300 group-hover:scale-[1.015] motion-reduce:transition-none`}
          fill
          loading="lazy"
          sizes={horizontal
            ? "(min-width: 1280px) 28vw, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 84vw"
            : "(min-width: 1280px) 280px, (min-width: 1024px) 31vw, (min-width: 640px) 46vw, 100vw"}
          src={item.image}
          title={item.imageTitle}
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--brand)]">{item.industry}</p>
        <h4 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-[var(--brand-dark)] sm:text-xl">
          {formatDisplayTitle(item.imageTitle)}
        </h4>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-[var(--muted)]">{item.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2" aria-label="Portfolio item tags">
          {displayTags(item).map((tag) => (
            <span className="rounded-full bg-[var(--surface-soft)] px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.08em] text-[var(--foreground)]" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <Link
          className="focus-ring mt-auto inline-flex min-h-11 items-center self-start rounded-sm pt-4 font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]"
          href={item.relatedExistingPage}
        >
          Explore Related Capability <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </div>
    </article>
  );
}

function HorizontalPortfolioRow({ active, group }: { active: boolean; group: PortfolioGroup }) {
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
        {group.items.map((item) => <PortfolioCard horizontal item={item} key={item.id} />)}
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

  const groupsByCategory = useMemo(() => ({
    "Injection Molds": groupItems(items, "Injection Molds"),
    "Plastic Parts": groupItems(items, "Plastic Parts")
  }), [items]);

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
          const count = items.filter((item) => item.category === category).length;
          return (
            <button
              aria-controls={`portfolio-gallery-panel-${category === "Injection Molds" ? "molds" : "parts"}`}
              aria-selected={selected}
              className={`focus-ring min-h-14 border-b-2 px-3 py-3 text-sm font-bold transition sm:px-4 sm:text-base ${selected ? "border-[var(--brand)] text-[var(--brand)]" : "border-transparent text-[var(--muted)] hover:text-[var(--brand-dark)]"}`}
              id={`portfolio-tab-${category === "Injection Molds" ? "molds" : "parts"}`}
              key={category}
              onClick={() => setActiveCategory(category)}
              role="tab"
              type="button"
            >
              {category} <span className="ml-1 font-medium text-current/70">({count})</span>
            </button>
          );
        })}
      </div>

      {categories.map((category) => {
        const active = activeCategory === category;
        const allGroups = groupsByCategory[category];
        const selectedFilter = filters[category];
        const visibleGroups = selectedFilter === "All" ? allGroups : allGroups.filter((group) => group.name === selectedFilter);
        const filterLabel = category === "Injection Molds" ? "Process" : "Industry";

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
                  <option value="All">All {category === "Injection Molds" ? "processes" : "industries"}</option>
                  {allGroups.map((group) => (
                    <option key={group.name} value={group.name}>{group.name} ({group.items.length})</option>
                  ))}
                </select>
              </label>
              <p aria-live="polite" className="text-sm text-[var(--muted)]">
                {allGroups.length} {allGroups.length === 1 ? "category" : "categories"} · {items.filter((item) => item.category === category).length} projects
              </p>
            </div>

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
                        {group.items.map((item) => <PortfolioCard horizontal={false} item={item} key={item.id} />)}
                      </div>
                    ) : (
                      <HorizontalPortfolioRow active={active} group={group} />
                    )}
                  </section>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
