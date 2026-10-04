"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type MenuLink = { label: string; href?: string; external?: boolean; emphasis?: boolean; priority?: boolean; secondary?: boolean; staticCapability?: boolean };
type MenuGroup = { title: string; links: MenuLink[] };
type NavigationItem = { id: string; label: string; href: string; groups: MenuGroup[]; overview?: MenuLink };

const groupWebsite = "https://www.arktech-group.com";

const megaMenuSectionHeading = "text-[14px] font-bold uppercase leading-[1.25] tracking-[0.08em] text-[var(--brand)] lg:text-[15px]";
const megaMenuPrimaryLink = "text-[16px] font-bold leading-[1.35] text-[var(--brand)] lg:text-[18px]";
const megaMenuSecondaryLink = "text-[16px] font-medium leading-[1.35] text-[var(--brand-dark)] lg:text-[17px]";
const megaMenuSupportingLink = "text-[16px] font-medium leading-[1.35] text-[var(--muted)] lg:text-[17px]";

function activeMenuLinkLabel(item: NavigationItem, pathname: string) {
  if (item.id === "injection-molds" && pathname === "/services/injection-mold-manufacturing") return undefined;
  return item.groups.flatMap((group) => group.links).find((link) => link.href === pathname && link.href.startsWith("/"))?.label;
}

function isTopLevelActive(item: NavigationItem, pathname: string) {
  if (item.id === "resources" && pathname.startsWith("/case-studies")) return true;
  if (item.id === "capabilities" && (pathname.startsWith("/services/") || pathname === "/injection-molding-engineering")) return true;
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

const navigation: NavigationItem[] = [
  {
    id: "capabilities",
    label: "Capabilities",
    href: "/manufacturing-capabilities",
    groups: [
      {
        title: "Export Tooling",
        links: [
          { label: "Injection Mold Manufacturing", href: "/services/injection-mold-manufacturing", emphasis: true },
          { label: "Engineering & DFM", href: "/injection-molding-engineering" },
          { label: "Mold Design & Approval", href: "/services/injection-mold-manufacturing" },
          { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
          { label: "Quality & Documentation", href: "/company/quality-documentation" }
        ]
      },
      {
        title: "Injection Molding",
        links: [
          { label: "Plastic Injection Molding", href: "/services/plastic-injection-molding", emphasis: true },
          { label: "Production Options", href: "/services/injection-molding-production-options" },
          { label: "Insert & Overmolding", staticCapability: true },
          { label: "Two-Shot / 2K Molding", href: "/injection-molds/two-shot-2k-molds" },
          { label: "Transparent Part Injection Molding", staticCapability: true },
          { label: "Engineering Plastics Injection Molding", staticCapability: true }
        ]
      },
      {
        title: "Engineering",
        links: [
          { label: "Co-Design & Product Engineering", href: "/injection-molding-engineering#co-design", emphasis: true },
          { label: "DFM for Plastic Parts", href: "/injection-molding-engineering#engineering-review" },
          { label: "Moldflow Analysis", href: "/injection-molding-engineering#moldflow-analysis" },
          { label: "Material & Tolerance Review", staticCapability: true }
        ]
      },
      {
        title: "Arktech Group",
        links: [
          { label: "Extended Manufacturing by Arktech Group ↗", href: groupWebsite, external: true, emphasis: true },
          { label: "CNC Machining", staticCapability: true },
          { label: "Die Casting", staticCapability: true },
          { label: "Sheet Metal Fabrication", staticCapability: true },
          { label: "Rapid Prototyping", staticCapability: true },
          { label: "Vacuum Casting", staticCapability: true },
          { label: "Assembly", href: "/services/plastic-metal-assembly" }
        ]
      }
    ],
    overview: { label: "View All Capabilities", href: "/manufacturing-capabilities" }
  },
  {
    id: "injection-molds",
    label: "Injection Molds",
    href: "/injection-molds",
    groups: [
      {
        title: "Mold Types",
        links: [
          { label: "Multi-Cavity Molds", href: "/injection-molds/multi-cavity-molds" },
          { label: "Family Molds", href: "/injection-molds/family-molds" },
          { label: "Large Injection Molds", href: "/injection-molds/large-injection-molds" },
          { label: "Complex Injection Molds", href: "/injection-molds/complex-injection-molds" },
          { label: "Insert Molding Tools", href: "/injection-molds/insert-molding-tools" },
          { label: "Overmolding Tools", href: "/injection-molds/overmolding-tools" },
          { label: "Two-Shot / 2K Molds", href: "/injection-molds/two-shot-2k-molds" },
          { label: "Unscrewing Molds", href: "/injection-molds/unscrewing-molds" },
          { label: "Hot Runner Molds", href: "/injection-molds/hot-runner-molds" },
          { label: "High-Temperature Injection Molds", href: "/injection-molds#high-temperature-injection-molds" }
        ]
      },
      {
        title: "Tooling Support",
        links: [
          { label: "Mold Trial & Validation", href: "/injection-molds/mold-trial-validation" },
          { label: "Tooling Documentation", href: "/injection-molds/tooling-documentation" },
          { label: "Mold Spare Parts", href: "/injection-molds/mold-spare-parts" },
          { label: "Export Tooling & Mold Transfer", href: "/injection-molds/export-tooling-transfer" }
        ]
      },
      {
        title: "Die Casting Tooling",
        links: [{ label: "Die Casting Tooling →", href: groupWebsite, external: true, priority: true }]
      }
    ],
    overview: { label: "View All Injection Molds", href: "/injection-molds" }
  },
  {
    id: "industries",
    label: "Industries",
    href: "/industries",
    groups: [
      {
        title: "Industries We Serve",
        links: [
          { label: "Smart Home & IoT", href: "/industries/smart-home-iot" },
          { label: "Home Appliances", href: "/industries/home-appliances" },
          { label: "Consumer Electronics", href: "/industries/consumer-electronics" },
          { label: "Pet Tech Products", href: "/industries/pet-tech" },
          { label: "Automotive Components", href: "/industries/automotive" },
          { label: "Industrial Automation", href: "/industries/industrial-automation" },
          { label: "Medical Device Components", href: "/industries/medical-devices" }
        ]
      }
    ],
    overview: { label: "View All Industries →", href: "/industries" }
  },
  {
    id: "resources",
    label: "Resources",
    href: "/resources",
    groups: [
      {
        title: "Engineering Guides",
        links: [
          { label: "DFM Guide", href: "/resources/dfm-guide" },
          { label: "Injection Molding Guide", href: "/resources/injection-molding-guide" },
          { label: "Material Selection Guide", href: "/resources/material-selection-guide" },
          { label: "Mold Design Guidelines", href: "/resources/mold-design-guidelines" },
          { label: "Manufacturing FAQ", href: "/resources/faq" }
        ]
      },
      {
        title: "Project Resources",
        links: [
          { label: "Quality & Documentation", href: "/company/quality-documentation" },
          { label: "Project Management", href: "/company/project-management" },
          { label: "Tooling Transfer & Export", href: "/services/injection-mold-manufacturing" },
          { label: "Case Studies", href: "/case-studies" }
        ]
      },
      {
        title: "Case Studies",
        links: [{ label: "View Case Studies", href: "/case-studies" }]
      },
      {
        title: "Start a Project",
        links: [
          { label: "Upload CAD for DFM Review →", href: "/request-a-quote", emphasis: true },
          { label: "Request Tooling Quote →", href: "/request-a-quote" }
        ]
      }
    ],
    overview: { label: "View All Resources", href: "/resources" }
  },
  {
    id: "company",
    label: "Company",
    href: "/company",
    groups: [
      { title: "About Arktech", links: [{ label: "About Arktech Mold", href: "/company" }, { label: "Arktech Group ↗", href: groupWebsite, external: true }] },
      { title: "Quality & Projects", links: [{ label: "Quality & Documentation", href: "/company/quality-documentation" }, { label: "Project Management", href: "/company/project-management" }, { label: "Tooling Transfer & Export", href: "/services/injection-mold-manufacturing" }] },
      { title: "Contact & Locations", links: [{ label: "Contact Us", href: "/contact" }, { label: "Shenzhen Head Office", href: "/contact" }, { label: "Dongguan Factory", href: "/contact" }, { label: "engineering@arktechmold.com", href: "mailto:engineering@arktechmold.com", secondary: true }, { label: "+86 755 2314 8996", href: "tel:+8675523148996", secondary: true }] },
      { title: "Start Your Project", links: [{ label: "Upload CAD for DFM Review →", href: "/request-a-quote", emphasis: true }] }
    ]
  }
];

function MenuLinkItem({ item, onNavigate, tabIndex, active = false }: { item: MenuLink; onNavigate?: () => void; tabIndex?: number; active?: boolean }) {
  const hierarchy = item.secondary ? megaMenuSupportingLink : item.emphasis ? megaMenuPrimaryLink : item.priority ? `${megaMenuSecondaryLink} font-semibold` : megaMenuSecondaryLink;
  if (!item.href) return <span aria-disabled="true" className={`block text-balance py-2 ${item.staticCapability ? megaMenuSecondaryLink : megaMenuSupportingLink}`}>{item.label}</span>;
  const classes = `focus-ring block rounded-sm py-2 text-balance transition-colors duration-200 ease-out hover:text-[var(--brand)] ${hierarchy} ${item.secondary ? "whitespace-nowrap" : ""} ${active ? "!font-semibold !text-[var(--brand)]" : ""}`;
  if (item.external) return <a className={classes} href={item.href} onClick={onNavigate} rel="noopener noreferrer" tabIndex={tabIndex} target="_blank">{item.label}</a>;
  if (item.href.startsWith("mailto:") || item.href.startsWith("tel:")) return <a className={classes} href={item.href} onClick={onNavigate} tabIndex={tabIndex}>{item.label}</a>;
  return <Link aria-current={active ? "page" : undefined} className={classes} href={item.href} onClick={onNavigate} tabIndex={tabIndex}>{item.label}</Link>;
}

function DesktopPanel({ item, open, onEnter, onLeave }: { item: NavigationItem; open: boolean; onEnter: () => void; onLeave: () => void }) {
  const isCompany = item.id === "company";
  const isResources = item.id === "resources";
  const isCapabilities = item.id === "capabilities";
  const isInjectionMolds = item.id === "injection-molds";
  const isIndustries = item.id === "industries";
  const pathname = usePathname();
  const activeLabel = activeMenuLinkLabel(item, pathname);
  const moldTypeColumnBreak = isInjectionMolds ? 4 : Math.ceil((item.groups[0]?.links.length ?? 0) / 2);
  const columns = isCompany ? "grid-cols-[21fr_23fr_25fr_31fr]" : isResources ? "grid-cols-[30fr_27fr_43fr]" : isCapabilities ? "grid-cols-[1.05fr_1.05fr_0.95fr_0.95fr]" : isInjectionMolds ? "grid-cols-[minmax(0,2fr)_minmax(250px,0.78fr)]" : isIndustries ? "grid-cols-1" : item.groups.length === 4 ? "grid-cols-4" : item.groups.length === 2 ? "grid-cols-2" : "grid-cols-3";
  return (
    <div aria-hidden={!open} className={`absolute inset-x-0 top-full z-[9999] hidden border-t border-[var(--line)] bg-white shadow-[0_18px_35px_rgba(15,35,60,0.10)] transition duration-150 lg:block ${open ? "visible translate-y-0 opacity-100" : "invisible -translate-y-1 opacity-0"}`} id={`${item.id}-mega-menu`} onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <div className={`mx-auto grid w-[min(1240px,calc(100%-48px))] ${isResources || isCompany ? "gap-8 py-7" : "gap-10 py-8"} ${columns}`}>
        {isInjectionMolds ? (
          <>
            <section aria-labelledby="injection-molds-mold-types">
              <h2 className={megaMenuSectionHeading} id="injection-molds-mold-types">Mold Types</h2>
              <div className="mt-6 grid grid-cols-2 gap-x-12">
                <div className="grid content-start gap-1">
                  {item.groups[0].links.slice(0, moldTypeColumnBreak).map((link) => <MenuLinkItem active={activeLabel === link.label} item={link} key={link.label} tabIndex={open ? undefined : -1} />)}
                </div>
                <div className="grid content-start gap-1">
                  {item.groups[0].links.slice(moldTypeColumnBreak).map((link) => <MenuLinkItem active={activeLabel === link.label} item={link} key={link.label} tabIndex={open ? undefined : -1} />)}
                </div>
              </div>
            </section>
            <aside className="border-l border-[var(--line)] pl-10">
              <section aria-labelledby="injection-molds-tooling-support">
                <h2 className={megaMenuSectionHeading} id="injection-molds-tooling-support">Tooling Support</h2>
                <div className="mt-5 grid gap-1">
                  {item.groups[1].links.map((link) => <MenuLinkItem active={activeLabel === link.label} item={link} key={link.label} tabIndex={open ? undefined : -1} />)}
                </div>
              </section>
              <section aria-labelledby="injection-molds-die-casting" className="mt-7 border-t border-[var(--line)] pt-6">
                <h2 className={megaMenuSectionHeading} id="injection-molds-die-casting">Die Casting Tooling</h2>
                <div className="mt-4">
                  <MenuLinkItem item={item.groups[2].links[0]} tabIndex={open ? undefined : -1} />
                  <p className="mt-0.5 text-sm leading-5 text-[var(--muted)]">by Arktech Group</p>
                </div>
              </section>
            </aside>
          </>
        ) : isIndustries ? (
          <section aria-labelledby="industries-we-serve" className="mx-auto w-full max-w-5xl">
            <h2 className={megaMenuSectionHeading} id="industries-we-serve">Industries We Serve</h2>
            <div className="mt-6 grid grid-cols-2 gap-x-14">
              <div className="grid content-start gap-1">
                {item.groups[0].links.slice(0, 4).map((link) => <MenuLinkItem active={activeLabel === link.label} item={link} key={link.label} tabIndex={open ? undefined : -1} />)}
              </div>
              <div className="grid content-start gap-1">
                {item.groups[0].links.slice(4).map((link) => <MenuLinkItem active={activeLabel === link.label} item={link} key={link.label} tabIndex={open ? undefined : -1} />)}
              </div>
            </div>
          </section>
        ) : (isResources ? item.groups.slice(0, 2) : isCompany ? item.groups.slice(0, 3) : item.groups).map((group) => {
          const headingId = `${item.id}-${group.title.replaceAll(" ", "-").toLowerCase()}`;
          return (
            <section aria-labelledby={headingId} key={group.title}>
              <h2 className={megaMenuSectionHeading} id={headingId}>{group.title}</h2>
              <div className="mt-6 grid gap-1">{group.links.map((link) => <MenuLinkItem active={activeLabel === link.label} item={link} key={link.label} tabIndex={open ? undefined : -1} />)}</div>
              {isResources && group.title === "Project Resources" ? (
                <div className="mt-7 border-t border-[var(--line)] pt-6">
                  <h2 className={megaMenuSectionHeading}>Start a Project</h2>
                  <div className="mt-5 grid gap-1">
                    <MenuLinkItem item={{ label: "Upload CAD for DFM Review →", href: "/request-a-quote", emphasis: true }} tabIndex={open ? undefined : -1} />
                    <MenuLinkItem item={{ label: "Request Tooling Quote →", href: "/request-a-quote" }} tabIndex={open ? undefined : -1} />
                  </div>
                </div>
              ) : null}
            </section>
          );
        })}
        {isResources ? (
          <>
            <aside className="border-l border-[var(--line)] pl-8">
              <h2 className={megaMenuSectionHeading}>Case Studies</h2>
              <div className="mt-6 grid grid-cols-[168px_1fr] gap-5">
                <div className="relative aspect-[3/2] overflow-hidden rounded-sm bg-[var(--surface-soft)]">
                  <Image alt="Real Arktech complex injection mold tooling project" className="object-cover object-center" fill sizes="168px" src="/images/mold-types/complex-injection-molds.png" />
                </div>
                <div>
                  <p className="text-[19px] font-bold leading-[1.35] text-[var(--brand-dark)]">Real Tooling Projects</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted)]">See how Arktech supports export tooling projects from DFM and mold design through manufacturing, mold trial, validation and delivery.</p>
                  <Link className="focus-ring mt-3 inline-flex text-[16px] font-bold text-[var(--brand)] transition-colors duration-200 hover:text-[var(--brand-dark)]" href="/case-studies" tabIndex={open ? undefined : -1}>View Case Studies →</Link>
                </div>
              </div>
            </aside>
          </>
        ) : null}
        {isCompany ? (
          <aside className="border-l border-[var(--line)] pl-8">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm bg-[var(--surface-soft)]">
              <Image alt="Complete large injection mold manufactured by Arktech Mold" className="object-contain object-center" fill sizes="(min-width: 1024px) 28vw, 0px" src="/images/mold-types/large-component-molds.JPG" />
            </div>
            <div className="mt-4">
              <p className="text-[18px] font-bold leading-snug text-[var(--brand-dark)]">Start Your Next Tooling Project</p>
              <p className="mt-1.5 text-[16px] leading-6 text-[var(--muted)]">Engineering review before quotation.</p>
              <Link className="focus-ring mt-3 inline-flex text-[16px] font-bold text-[var(--brand)] transition-colors duration-200 hover:text-[var(--brand-dark)]" href="/request-a-quote" tabIndex={open ? undefined : -1}>Upload CAD for DFM Review →</Link>
            </div>
          </aside>
        ) : null}
      </div>
      {item.overview ? <div className="border-t border-[var(--line)]"><div className="mx-auto w-[min(1240px,calc(100%-48px))] py-3"><MenuLinkItem item={{ ...item.overview, emphasis: true }} tabIndex={open ? undefined : -1} /></div></div> : null}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileItem, setOpenMobileItem] = useState<string | null>(null);
  const [openDesktopItem, setOpenDesktopItem] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  const cancelClose = () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  const openMenu = (id: string) => { cancelClose(); setOpenDesktopItem(id); };
  const scheduleClose = () => { cancelClose(); closeTimer.current = setTimeout(() => setOpenDesktopItem(null), 180); };

  useEffect(() => {
    const onPointerDown = (event: MouseEvent) => { if (headerRef.current && !headerRef.current.contains(event.target as Node)) setOpenDesktopItem(null); };
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === "Escape") { setOpenDesktopItem(null); setMobileOpen(false); } };
    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => { document.removeEventListener("mousedown", onPointerDown); document.removeEventListener("keydown", onKeyDown); cancelClose(); };
  }, []);

  return (
    <header className="sticky top-0 z-[100] overflow-visible border-b border-[var(--line)] bg-white/95 backdrop-blur" ref={headerRef}>
      <div className={`mx-auto flex h-16 w-[min(1320px,calc(100%-24px))] items-center justify-between gap-3 overflow-visible lg:w-[min(1320px,calc(100%-32px))] ${isHomepage ? "lg:h-[88px]" : "lg:h-[72px]"}`}>
        <Link aria-label="Arktech home" className="focus-ring flex shrink-0 items-center rounded-sm" href="/">
          <Image alt="Arktech injection mold tooling and manufacturing" className="h-14 w-auto object-contain lg:h-[58px]" height={68} priority src="/images/arktech-mold-logo.png" width={220} />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-1 overflow-visible lg:flex xl:gap-2" onMouseLeave={scheduleClose}>
          {navigation.map((item) => {
            const open = openDesktopItem === item.id;
            return (
              <button aria-controls={`${item.id}-mega-menu`} aria-expanded={open} aria-haspopup="true" className={`focus-ring inline-flex items-center gap-1 whitespace-nowrap rounded-sm px-2.5 py-2 text-[16px] font-semibold tracking-[0.01em] transition-colors duration-200 hover:text-[var(--brand)] xl:px-3 ${open || isTopLevelActive(item, pathname) ? "text-[var(--brand)]" : "text-[var(--brand-dark)]"}`} key={item.id} onClick={() => openMenu(item.id)} onFocus={() => openMenu(item.id)} onMouseEnter={() => openMenu(item.id)} type="button">
                {item.label}<span aria-hidden="true" className={`text-[10px] transition-transform ${open ? "rotate-180" : ""}`}>▼</span>
              </button>
            );
          })}
        </nav>
        <div className="flex shrink-0 items-center gap-2">
          <Link aria-label="Request a quote" className={`focus-ring inline-flex items-center justify-center rounded-sm bg-[var(--brand)] text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--brand-hover)] ${isHomepage ? "h-10 px-3.5 sm:px-4 lg:h-11 lg:px-5" : "h-10 px-3.5 sm:px-4"}`} href="/request-a-quote"><span className="sm:hidden">Quote</span><span className="hidden sm:inline">Request a Quote</span></Link>
          <button aria-controls="mobile-menu" aria-expanded={mobileOpen} aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"} className="focus-ring inline-flex size-10 items-center justify-center rounded-sm border border-[var(--line)] text-[var(--brand-dark)] lg:hidden" onClick={() => setMobileOpen((open) => !open)} type="button"><span aria-hidden="true" className="text-xl leading-none">{mobileOpen ? "×" : "☰"}</span></button>
        </div>
      </div>
      {navigation.map((item) => <DesktopPanel item={item} key={item.id} onEnter={() => openMenu(item.id)} onLeave={scheduleClose} open={openDesktopItem === item.id} />)}
      <nav aria-label="Mobile navigation" className={`overflow-y-auto border-t border-[var(--line)] bg-white transition-[max-height,opacity] duration-200 lg:hidden ${mobileOpen ? "max-h-[calc(100vh-4rem)] opacity-100" : "max-h-0 border-t-0 opacity-0"}`} id="mobile-menu">
        <div className="mx-auto grid w-[min(720px,calc(100%-24px))] gap-1 py-3">
          {navigation.map((item) => {
            const expanded = openMobileItem === item.id;
            return (
              <div className="border-b border-[var(--line)] last:border-b-0" key={item.id}>
                <button aria-controls={`${item.id}-mobile-panel`} aria-expanded={expanded} className="focus-ring flex w-full items-center justify-between rounded-sm px-3 py-3 text-left text-[15px] font-semibold tracking-[0.015em] text-[var(--brand-dark)] hover:bg-[var(--surface-soft)] hover:text-[var(--brand)]" onClick={() => setOpenMobileItem(expanded ? null : item.id)} type="button">{item.label}<span aria-hidden="true" className="text-xl font-normal">{expanded ? "−" : "+"}</span></button>
                <div className={`bg-[var(--surface-soft)] px-4 ${expanded ? "block py-3" : "hidden"}`} id={`${item.id}-mobile-panel`}>
                  {item.groups.map((group) => (
                    <section className="mb-6 last:mb-0" key={group.title}>
                      <h2 className={megaMenuSectionHeading}>{group.title}</h2>
                      <div className="mt-3 grid gap-1">{group.links.map((link) => <MenuLinkItem active={activeMenuLinkLabel(item, pathname) === link.label} item={link} key={link.label} onNavigate={() => setMobileOpen(false)} />)}</div>
                      {item.id === "injection-molds" && group.title === "Die Casting Tooling" ? <p className="mt-0.5 text-sm leading-5 text-[var(--muted)]">by Arktech Group</p> : null}
                    </section>
                  ))}
                  {item.overview ? <div className="mt-3 border-t border-[var(--line)] pt-2"><MenuLinkItem item={{ ...item.overview, emphasis: true }} onNavigate={() => setMobileOpen(false)} /></div> : null}
                </div>
              </div>
            );
          })}
          <Link className="focus-ring mt-3 inline-flex min-h-11 items-center justify-center rounded-sm bg-[var(--brand)] px-4 text-sm font-semibold text-white" href="/request-a-quote" onClick={() => setMobileOpen(false)}>Request a Quote</Link>
        </div>
      </nav>
    </header>
  );
}
