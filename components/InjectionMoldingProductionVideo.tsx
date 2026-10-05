"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const VIDEO_SRC = "/videos/injection-molding-production.mp4";
const POSTER_SRC = "/images/process/export-delivery-production-support-molding.png";

export function InjectionMoldingProductionVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [posterOnly, setPosterOnly] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const saveData = Boolean((navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData);
    const updatePlaybackPreference = () => setPosterOnly(mediaQuery.matches || mobileQuery.matches || saveData);

    updatePlaybackPreference();
    mediaQuery.addEventListener("change", updatePlaybackPreference);
    mobileQuery.addEventListener("change", updatePlaybackPreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePlaybackPreference);
      mobileQuery.removeEventListener("change", updatePlaybackPreference);
    };
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || posterOnly) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { rootMargin: "160px 0px", threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [posterOnly]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isInView && !posterOnly) {
      void video.play().catch(() => {
        // The poster remains visible when a browser blocks muted autoplay.
      });
    } else {
      video.pause();
    }
  }, [isInView, posterOnly]);

  return (
    <div
      ref={containerRef}
      className="relative aspect-video overflow-hidden rounded-md border border-[var(--line)] bg-white shadow-sm"
    >
      {posterOnly ? (
        <Image
          src={POSTER_SRC}
          alt="Injection mold installed for plastic injection molding production"
          fill
          sizes="(min-width: 1024px) 55vw, 100vw"
          className="object-cover object-center"
        />
      ) : (
        <video
          ref={videoRef}
          aria-label="Plastic injection molding production after mold trial and process validation"
          autoPlay
          className="h-full w-full object-cover object-[center_52%]"
          loop
          muted
          playsInline
          poster={POSTER_SRC}
          preload="metadata"
        >
          {isInView ? <source src={VIDEO_SRC} type="video/mp4" /> : null}
        </video>
      )}
    </div>
  );
}
