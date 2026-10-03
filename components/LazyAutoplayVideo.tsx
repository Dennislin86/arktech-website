"use client";

import { useEffect, useRef, useState } from "react";

type LazyAutoplayVideoProps = {
  ariaLabel: string;
  className?: string;
  poster: string;
  preload?: "none" | "metadata";
  src: string;
};

export function LazyAutoplayVideo({ ariaLabel, className, poster, preload = "none", src }: LazyAutoplayVideoProps) {
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
      { rootMargin: "300px 0px", threshold: 0.05 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

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
