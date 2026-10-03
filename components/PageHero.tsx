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
      <div className={`container-page py-14 sm:py-16 ${image ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : ""}`}>
        <div>
          <p className="text-sm font-bold uppercase tracking-wide text-[var(--brand)]">{eyebrow}</p>
          <h1 className="internal-page-title mt-4 text-[var(--brand-dark)]">{title}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">{body}</p>
        </div>
        {image ? (
          <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-[var(--line)] bg-[var(--surface-soft)] shadow-sm">
            <Image
              alt={image.alt}
              className="object-cover object-center"
              fill
              priority
              sizes="(min-width: 1024px) 46vw, 100vw"
              src={image.src}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
