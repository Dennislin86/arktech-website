"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const videoSrc = "/videos/mold-components/mold-component-cmm-inspection-hero.mp4";
const posterSrc = "/images/mold-components/mold-component-cmm-inspection-poster.webp";

type NavigatorWithConnection = Navigator & {
  connection?: { saveData?: boolean };
};

export function MoldSparePartsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const visibleRef = useRef(true);
  const userPausedRef = useRef(false);
  const [hasVideoFrame, setHasVideoFrame] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoEligible, setVideoEligible] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    const desktop = window.matchMedia("(min-width: 768px)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const saveData = Boolean((navigator as NavigatorWithConnection).connection?.saveData);

    const stopAndDetach = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      setHasVideoFrame(false);
      setIsPlaying(false);
    };

    const syncPlayback = () => {
      const eligible = desktop.matches && !reducedMotion.matches && !saveData && !videoFailed;
      setVideoEligible(eligible);
      if (!eligible) {
        stopAndDetach();
        return;
      }

      if (video.getAttribute("src") !== videoSrc) {
        video.src = videoSrc;
        video.load();
      }

      if (visibleRef.current && document.visibilityState === "visible" && !userPausedRef.current) {
        void video.play().catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.2;
        syncPlayback();
      },
      { threshold: [0, 0.2, 0.6] }
    );

    const handleVisibility = () => syncPlayback();
    observer.observe(section);
    desktop.addEventListener("change", syncPlayback);
    reducedMotion.addEventListener("change", syncPlayback);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", syncPlayback);
      reducedMotion.removeEventListener("change", syncPlayback);
      document.removeEventListener("visibilitychange", handleVisibility);
      video.pause();
    };
  }, [videoFailed]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video || !videoEligible) return;

    if (!video.paused) {
      userPausedRef.current = true;
      video.pause();
      return;
    }

    userPausedRef.current = false;
    if (video.getAttribute("src") !== videoSrc) {
      video.src = videoSrc;
      video.load();
    }
    void video.play().catch(() => setIsPlaying(false));
  };

  return (
    <section className="relative isolate flex min-h-[650px] overflow-hidden bg-[#071b2b] text-white sm:min-h-[660px] lg:min-h-[680px]" ref={sectionRef}>
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-30 w-full md:w-[68%]">
        <Image alt="" className="object-cover object-center" fill priority quality={86} sizes="(min-width: 768px) 68vw, 100vw" src={posterSrc} />
      </div>
      <div aria-hidden="true" className="absolute inset-y-0 right-0 -z-20 hidden w-[68%] md:block">
        <video
          className={`h-full w-full object-cover object-center transition-opacity duration-500 ${hasVideoFrame ? "opacity-100" : "opacity-0"}`}
          loop
          muted
          onCanPlay={() => setHasVideoFrame(true)}
          onError={() => { setVideoFailed(true); setHasVideoFrame(false); setIsPlaying(false); }}
          onPause={() => setIsPlaying(false)}
          onPlay={() => setIsPlaying(true)}
          playsInline
          poster={posterSrc}
          preload="none"
          ref={videoRef}
          tabIndex={-1}
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(5,25,45,0.99)_0%,rgba(5,25,45,0.96)_43%,rgba(5,25,45,0.68)_68%,rgba(5,25,45,0.24)_100%)]" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(5,25,45,0.18)_0%,rgba(5,25,45,0.04)_56%,rgba(5,25,45,0.42)_100%)]" />

      <div className="container-page flex w-full flex-col justify-center py-12 sm:py-14 lg:py-16">
        <nav aria-label="Breadcrumb" className="mb-7 text-sm text-slate-200/85 sm:text-[15px]">
          <ol className="flex flex-wrap items-center gap-2">
            <li><Link className="focus-ring rounded-sm transition hover:text-white" href="/">Home</Link></li>
            <li aria-hidden="true" className="text-slate-300/60">/</li>
            <li><Link className="focus-ring rounded-sm transition hover:text-white" href="/injection-molds">Injection Molds</Link></li>
            <li aria-hidden="true" className="text-slate-300/60">/</li>
            <li aria-current="page" className="font-medium text-white/90">Mold Spare Parts</li>
          </ol>
        </nav>

        <div className="max-w-[52rem]">
          <p className="text-sm font-bold uppercase tracking-[0.1em] text-red-300 sm:text-[15px]">CUSTOM MOLD COMPONENTS &amp; TOOLING SUPPORT</p>
          <h1 className="mt-4 text-balance text-[clamp(2.25rem,6vw,2.75rem)] font-bold leading-[1.06] tracking-[-0.025em] text-white [text-shadow:0_2px_18px_rgba(0,0,0,0.28)] sm:text-[clamp(2.625rem,5vw,3.125rem)] lg:text-[clamp(2.875rem,4vw,3.65rem)]">Injection Mold Components, Spare Parts &amp; Replacement Inserts</h1>
          <p className="mt-5 max-w-[47rem] text-base leading-7 text-slate-100 sm:text-lg sm:leading-8">Arktech manufactures custom injection mold components from customer drawings and supports project-specific spare parts and replacement inserts for existing tooling.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm bg-[var(--brand)] px-5 py-3 text-center text-sm font-bold text-white transition hover:bg-[var(--brand-hover)] sm:text-base" href="/request-a-quote">Request a Mold Component Quote <span aria-hidden="true" className="ml-2">→</span></Link>
            <Link className="focus-ring inline-flex min-h-13 items-center justify-center rounded-sm border border-white/80 bg-white/5 px-5 py-3 text-center text-sm font-bold text-white backdrop-blur-[2px] transition hover:border-white hover:bg-white hover:text-[var(--brand-dark)] sm:text-base" href="#spare-parts-scope">Explore Mold Components <span aria-hidden="true" className="ml-2">↓</span></Link>
          </div>
          <p className="mt-5 max-w-2xl text-sm font-semibold leading-6 text-slate-200">CMM inspection of a machined mold component.</p>
        </div>
      </div>

      {videoEligible && !videoFailed ? (
        <button
          aria-label={isPlaying ? "Pause mold component inspection background video" : "Play mold component inspection background video"}
          className="focus-ring absolute bottom-5 right-5 hidden min-h-11 items-center rounded-full border border-white/50 bg-[#071b2b]/70 px-4 text-sm font-bold text-white backdrop-blur-sm transition hover:border-white hover:bg-[#071b2b] md:inline-flex"
          onClick={togglePlayback}
          type="button"
        >
          <span aria-hidden="true" className="mr-2">{isPlaying ? "Ⅱ" : "▶"}</span>{isPlaying ? "Pause" : "Play"}
        </button>
      ) : null}
    </section>
  );
}
