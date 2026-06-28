"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const serviceMenu = [
  { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing" },
  { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding" },
  { label: "Die Casting Mold Manufacturing", href: "/services/die-casting-mold" },
  { label: "CNC Metal Parts", href: "/services/cnc-metal-parts" },
  { label: "Plastic Housing Manufacturing", href: "/services/plastic-housing-manufacturing" },
  { label: "Plastic + Metal Assembly", href: "/services/plastic-metal-assembly" },
  { label: "DFM Engineering Support", href: "/services/dfm-engineering" }
];

const industryMenu = [
  { label: "Robotics", href: "/industries/robotics" },
  { label: "Medical Devices", href: "/industries/medical-devices" },
  { label: "Industrial Automation", href: "/industries/industrial-automation" },
  { label: "Smart Home", href: "/industries/smart-home" },
  { label: "New Energy", href: "/industries/new-energy" },
  { label: "Outdoor Products", href: "/industries/outdoor-products" },
  { label: "Pet Tech", href: "/industries/pet-tech" }
];

type MegaMenuProps = {
  items: typeof serviceMenu;
  overviewHref: string;
  overviewLabel: string;
};

function MegaMenu({ items, overviewHref, overviewLabel }: MegaMenuProps) {
  return (
    <div className="invisible absolute left-1/2 top-full z-50 w-[min(680px,calc(100vw-32px))] -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
      <div className="rounded-sm border border-[var(--line)] bg-white p-5 shadow-xl">
        <div className="grid gap-1 sm:grid-cols-2">
          {items.map((item) => (
            <Link
              key={item.href}
              className="focus-ring rounded-sm px-3 py-3 text-sm font-bold text-[var(--foreground)] hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]"
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>
        <div className="mt-4 border-t border-[var(--line)] pt-4">
          <Link className="focus-ring inline-flex text-sm font-bold text-[var(--brand)] hover:text-[var(--brand-dark)]" href={overviewHref}>
            {overviewLabel}
          </Link>
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-white/95 backdrop-blur">
      <div
        className={`mx-auto flex w-[min(1320px,calc(100%-32px))] items-center justify-between gap-4 transition-all duration-200 ${
          scrolled ? "min-h-12 py-1.5" : "min-h-14 py-2"
        }`}
      >
        <Link className="focus-ring flex items-center rounded-sm" href="/" aria-label="Arktech Mold plastic tooling and molding home">
          <Image
            src="/images/arktech-mold-logo.png"
            alt="Arktech Mold plastic tooling and molding logo"
            width={220}
            height={68}
            priority
            className={`w-auto object-contain transition-all duration-200 ${scrolled ? "h-8" : "h-10"}`}
          />
          <span className="sr-only">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 xl:flex" aria-label="Main navigation">
          {site.nav.map((item) => {
            const menu = item.href === "/services" ? serviceMenu : item.href === "/industries" ? industryMenu : null;

            return (
              <div key={item.href} className="group relative">
                <Link
                  className="focus-ring whitespace-nowrap rounded-sm px-2.5 py-2 text-sm font-medium text-[var(--brand-dark)] hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]"
                  href={item.href}
                >
                  {item.label}
                </Link>
                {menu ? (
                  <MegaMenu
                    items={menu}
                    overviewHref={item.href}
                    overviewLabel={`View All ${item.label}`}
                  />
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <span className="hidden whitespace-nowrap rounded-sm border border-[#6aa84f]/40 bg-[#6aa84f]/10 px-3 py-2 text-xs font-bold text-[#4d8735] lg:inline-flex">
            ISO 9001 Certified
          </span>
          <Link
            className="focus-ring inline-flex min-h-10 items-center whitespace-nowrap rounded-sm bg-[var(--accent)] px-4 text-sm font-bold text-white shadow-sm hover:brightness-90"
            href="/request-a-quote"
          >
            Start Your RFQ
          </Link>
        </div>
      </div>

      <nav
        className={`mx-auto flex w-[min(1320px,calc(100%-32px))] gap-2 overflow-x-auto transition-all duration-200 xl:hidden ${
          scrolled ? "max-h-0 overflow-hidden pb-0 opacity-0" : "max-h-16 pb-3 opacity-100"
        }`}
        aria-label="Mobile navigation"
      >
        {site.nav.map((item) => (
          <Link
            key={item.href}
            className="focus-ring shrink-0 rounded-sm border border-[var(--line)] bg-white px-3 py-2 text-sm font-medium text-[var(--brand-dark)]"
            href={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
