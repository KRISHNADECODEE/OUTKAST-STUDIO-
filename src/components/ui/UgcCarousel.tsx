"use client";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Maximize2, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

/* ==========================================================================
   UGC CAROUSEL
   Coverflow deck of vertical reels: the centre phone plays, the two flanking
   it sit angled and dimmed as a preview of what is next. Everything beyond
   those neighbours is unmounted, so six reels never means six decoding videos.

   Only the active card carries a <video>; the rest are posters. That keeps a
   single decode alive at a time, which is what stops the deck juddering on
   phones.
   ========================================================================== */

export type UgcReel = {
  category: string;
  views: string;
  ctr: string;
  /** Doubles as the poster frame for reels that have a clip. */
  img: string;
  video?: string;
  title: string;
};

interface UgcCarouselProps {
  reels: UgcReel[];
  /** Opens the full-size player. */
  onExpand?: (reel: UgcReel) => void;
  className?: string;
}

const SPREAD = 60; // how far a neighbour sits out, as a % of card width
const TILT = 30; // deg of Y rotation on the neighbours
const SHRINK = 0.82; // neighbour scale
const SWIPE = 60; // px of drag before the deck advances

export default function UgcCarousel({ reels, onExpand, className }: UgcCarouselProps) {
  const [active, setActive] = useState(0);
  const [muted, setMuted] = useState(true);
  const [visible, setVisible] = useState(true);

  const videoRef = useRef<HTMLVideoElement>(null);
  const deckRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const total = reels.length;
  const current = reels[active];

  const go = useCallback(
    (next: number) => setActive(((next % total) + total) % total),
    [total]
  );
  const next = useCallback(() => go(active + 1), [go, active]);
  const prev = useCallback(() => go(active - 1), [go, active]);

  /* Signed distance from the active card, wrapped so the deck is a loop
     rather than a strip with two dead ends. */
  const offsetOf = (i: number) => {
    let d = i - active;
    if (d > total / 2) d -= total;
    if (d < -total / 2) d += total;
    return d;
  };

  /* Don't decode a reel nobody is looking at. */
  useEffect(() => {
    const el = deckRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
        const v = videoRef.current;
        if (!v) return;
        if (entry.isIntersecting) void v.play().catch(() => {});
        else v.pause();
      },
      { rootMargin: "200px" }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* The sound choice is the viewer's, so it carries across slides. */
  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    void v.play().catch(() => {});
  };

  const transition = reduce
    ? { duration: 0 }
    : { duration: 0.55, ease: [0.4, 0, 0.2, 1] as const };

  return (
    <div className={cn("relative w-full", className)}>
      {/* ---- The deck ---- */}
      <div
        ref={deckRef}
        role="group"
        aria-roledescription="carousel"
        aria-label="AI UGC ad reels"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") {
            e.preventDefault();
            next();
          } else if (e.key === "ArrowLeft") {
            e.preventDefault();
            prev();
          }
        }}
        className="relative h-[420px] sm:h-[500px] lg:h-[560px] w-full select-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D03412]"
        style={{ perspective: 1400 }}
      >
        {reels.map((reel, i) => {
          const d = offsetOf(i);
          if (Math.abs(d) > 1) return null; // three on screen, never more

          const isActive = d === 0;

          return (
            <div
              key={reel.title}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ zIndex: isActive ? 30 : 20 }}
            >
              <motion.div
                /* Swipe to advance. dragDirectionLock with touch-pan-y keeps a
                   vertical drag scrolling the page instead of being eaten. */
                drag={isActive ? "x" : false}
                dragDirectionLock
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                dragMomentum={false}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -SWIPE) next();
                  else if (info.offset.x > SWIPE) prev();
                }}
                animate={{
                  x: `${d * SPREAD}%`,
                  rotateY: d * TILT,
                  scale: isActive ? 1 : SHRINK,
                  opacity: isActive ? 1 : 0.45,
                }}
                transition={transition}
                aria-hidden={!isActive}
                className={cn(
                  "pointer-events-auto relative h-full aspect-[9/16] rounded-[26px] border-2 bg-[#111111] p-2 shadow-2xl touch-pan-y",
                  isActive
                    ? "border-[#D03412] shadow-[#D03412]/25 cursor-grab active:cursor-grabbing"
                    : "border-[#D03412]/30 cursor-pointer"
                )}
                onClick={() => {
                  if (!isActive) go(i);
                }}
              >
                {/* Notch */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 z-20 h-2.5 w-16 rounded-full border border-white/10 bg-[#111111]" />

                <div className="relative h-full w-full overflow-hidden rounded-[18px] bg-[#7C1117]">
                  {/* Poster always paints, so there is never a black box. */}
                  <Image
                    src={reel.img}
                    alt={reel.category}
                    fill
                    sizes="(min-width: 1024px) 320px, 62vw"
                    className="object-cover"
                  />

                  {isActive && reel.video && visible && (
                    <video
                      ref={videoRef}
                      key={reel.video}
                      className="absolute inset-0 h-full w-full object-cover"
                      autoPlay
                      loop
                      muted={muted}
                      playsInline
                      preload="none"
                      poster={reel.img}
                      aria-label={`${reel.title} — ${reel.category}`}
                    >
                      <source src={reel.video} type="video/mp4" />
                    </video>
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />

                  {/* Neighbours read as "up next" rather than as dead frames. */}
                  {!isActive && (
                    <div className="pointer-events-none absolute inset-0 bg-[#7C1117]/40" />
                  )}

                  {isActive && (
                    <>
                      {reel.video && (
                        <button
                          type="button"
                          onClick={toggleSound}
                          aria-label={muted ? "Unmute reel" : "Mute reel"}
                          className="interactive absolute right-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#F8F3EF]/30 bg-[#111111]/70 text-[#F8F3EF] backdrop-blur-sm transition-colors hover:bg-[#D03412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]"
                        >
                          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
                        </button>
                      )}

                      {onExpand && (
                        <button
                          type="button"
                          onClick={() => onExpand(reel)}
                          aria-label={`Open ${reel.title} full size`}
                          className="interactive absolute left-3 top-3 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-[#F8F3EF]/30 bg-[#111111]/70 text-[#F8F3EF] backdrop-blur-sm transition-colors hover:bg-[#D03412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]"
                        >
                          <Maximize2 size={14} />
                        </button>
                      )}
                    </>
                  )}

                  {/* Metrics bar */}
                  <div className="absolute bottom-2 left-2 right-2 z-10 space-y-1 rounded-md border border-white/10 bg-[#111111]/85 p-2 backdrop-blur-xs">
                    <span className="block truncate text-[9px] font-mono font-bold uppercase tracking-widest text-[#D03412]">
                      {reel.category}
                    </span>
                    <div className="flex justify-between border-t border-white/10 pt-0.5 text-[10px] font-mono font-bold text-[#F8F3EF]/90">
                      <span>{reel.views} VIEWS</span>
                      <span className="text-[#D03412]">{reel.ctr} CTR</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>

      {/* ---- Controls ---- */}
      <div className="mt-8 flex items-center justify-center gap-5">
        <button
          type="button"
          onClick={prev}
          aria-label="Previous reel"
          className="interactive flex h-12 w-12 items-center justify-center rounded-full border border-[#F8F3EF]/30 text-[#F8F3EF] transition-colors hover:border-[#D03412] hover:bg-[#D03412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]"
        >
          <ArrowLeft className="h-5 w-5" />
        </button>

        {/* Dots */}
        <div className="flex items-center gap-2.5">
          {reels.map((reel, i) => (
            <button
              key={reel.title}
              type="button"
              onClick={() => go(i)}
              aria-label={`Go to ${reel.category} reel`}
              aria-current={i === active}
              className={cn(
                "interactive rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]",
                i === active
                  ? "h-2.5 w-7 bg-[#D03412]"
                  : "h-2.5 w-2.5 bg-[#F8F3EF]/30 hover:bg-[#F8F3EF]/60"
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next reel"
          className="interactive flex h-12 w-12 items-center justify-center rounded-full bg-[#D03412] text-[#F8F3EF] transition-colors hover:bg-[#b02a0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412]"
        >
          <ArrowRight className="h-5 w-5" />
        </button>
      </div>

      {/* Caption for the reel on screen */}
      <p
        aria-live="polite"
        className="mt-5 text-center text-xs font-mono uppercase tracking-[0.2em] text-[#F8F3EF]/60"
      >
        <span className="font-bold text-[#F8F3EF]">{current.title}</span>
        <span className="mx-2 text-[#D03412]">/</span>
        {String(active + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}
      </p>
    </div>
  );
}
