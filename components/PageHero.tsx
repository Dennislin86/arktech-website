import Image from "next/image";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  body: string;
  image?: {
    src: string;
    alt: string;
  };
};

export function PageHero({ eyebrow, title, body, image }: PageHeroProps) {
  return (
    <section className="border-b border-[var(--line)] bg-white">
      <div className={`container-page py-12 sm:py-14 lg:py-16 ${image ? "grid gap-8 xl:grid-cols-[minmax(0,38fr)_minmax(0,62fr)] lg:items-center lg:gap-12" : ""}`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{eyebrow}</p>
          <h1 className={`${image ? "split-hero-title" : "internal-page-title"} mt-4 text-[var(--brand-dark)]`}>{title}</h1>
          <p className="mt-5 max-w-[42rem] text-base leading-7 text-[var(--muted)] sm:text-lg sm:leading-8">{body}</p>
        </div>
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image
              alt={image.alt}
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              src={image.src}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
