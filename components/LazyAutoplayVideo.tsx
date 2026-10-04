"use client";

import { useEffect, useRef, useState } from "react";

type LazyAutoplayVideoProps = {
  ariaLabel: string;
  className?: string;
  poster: string;
  preload?: "none" | "metadata";
  rootMargin?: string;
  src: string;
  threshold?: number;
};

export function LazyAutoplayVideo({
  ariaLabel,
  className,
  poster,
  preload = "none",
  rootMargin = "300px 0px",
  src,
  threshold = 0.05
}: LazyAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          setShouldAutoplay(!reducedMotion && !saveData);
          if (!reducedMotion && !saveData) void video.play().catch(() => undefined);
        } else {
          video.pause();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !shouldAutoplay) return;
    void video.play().catch(() => undefined);
  }, [shouldAutoplay, shouldLoad]);

  return (
    <video
      aria-label={ariaLabel}
      autoPlay={shouldAutoplay}
      className={className}
      loop
      muted
      playsInline
      poster={poster}
      preload={preload}
      ref={videoRef}
    >
      {shouldLoad ? <source src={src} type="video/mp4" /> : null}
    </video>
  );
}
