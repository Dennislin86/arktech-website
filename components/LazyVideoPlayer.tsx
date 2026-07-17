"use client";

import Image from "next/image";
import { useState } from "react";

type LazyVideoPlayerProps = {
  poster: string;
  posterAlt: string;
  mp4Src: string;
  webmSrc?: string;
  label: string;
  className?: string;
};

export function LazyVideoPlayer({ poster, posterAlt, mp4Src, webmSrc, label, className = "" }: LazyVideoPlayerProps) {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  if (isVideoLoaded) {
    return (
      <video
        aria-label={label}
        className={`h-full w-full object-cover ${className}`}
        controls
        playsInline
        poster={poster}
        preload="none"
      >
        {webmSrc ? <source src={webmSrc} type="video/webm" /> : null}
        <source src={mp4Src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <button
      aria-label={`Play ${label}`}
      className={`group relative h-full w-full overflow-hidden text-left ${className}`}
      onClick={() => setIsVideoLoaded(true)}
      type="button"
    >
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority={false}
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover transition duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-[var(--brand-dark)]/20 transition group-hover:bg-[var(--brand-dark)]/10" />
      <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-[var(--brand)] shadow-lg transition group-hover:scale-105">
        <span className="ml-1 h-0 w-0 border-y-[12px] border-l-[18px] border-y-transparent border-l-[var(--brand)]" />
      </span>
      <span className="absolute bottom-4 left-4 rounded-sm bg-white/95 px-3 py-2 text-sm font-bold text-[var(--brand-dark)] shadow-sm">
        Watch factory video
      </span>
    </button>
  );
}
