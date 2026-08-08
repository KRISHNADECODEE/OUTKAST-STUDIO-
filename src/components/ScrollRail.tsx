"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* ==========================================================================
   SCROLL RAIL — live section pagination
   A fixed rail pinned to the left edge. The ring travels down to whichever
   dot matches the section currently under the probe line, so the rail reads
   as a live table of contents rather than a static decoration. Dots are real
   anchors, so it doubles as a vertical navbar.
   ========================================================================== */

/* The chapters the rail paginates through, in page order. The counter reads
   straight off this list, so adding an entry re-numbers everything. */
const CHAPTERS = [
  { id: "hero", label: "Intro" },
  { id: "what-we-do", label: "What We Do" },
  { id: "approach", label: "Approach" },
  { id: "services", label: "Services" },
  { id: "portfolio", label: "Work" },
  { id: "why", label: "Why Outkast" },
  { id: "results", label: "Results" },
  { id: "ai-ugc", label: "AI UGC Ads" },
  { id: "process", label: "Process" },
  { id: "testimonials", label: "Testimonials" },
  { id: "results-grid", label: "Client Results" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

/* Sized so the whole rail still clears a short laptop viewport: 13 chapters at
   this step is ~324px of track, ~440px including the counter and label. */
const DOT = 9; // dot diameter
const STEP = 27; // centre-to-centre spacing between dots
const RING = 23; // travelling ring diameter
const HIT = 24; // click target around each dot
const TRACK = (CHAPTERS.length - 1) * STEP + DOT;
const PROBE = 0.42; // a section is "current" once its top crosses this much of the viewport

export default function ScrollRail() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    let frame = 0;

    const measure = () => {
      frame = 0;
      const probe = window.innerHeight * PROBE;
      // The current chapter is the last one whose top has crossed the probe.
      let next = 0;
      CHAPTERS.forEach((chapter, i) => {
        const el = document.getElementById(chapter.id);
        if (el && el.getBoundingClientRect().top <= probe) next = i;
      });
      setActive((prev) => (prev === next ? prev : next));
    };

    // Lenis drives scroll from rAF, so coalesce to one measure per frame.
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const travel = reduce
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 24, mass: 0.7 };

  return (
    <aside
      aria-label="Section navigation"
      /* Width is pinned to the track so the rail can never grow into the
         content column on narrower desktops. */
      style={{ width: 40 }}
      className="hidden lg:flex fixed left-1 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-5 select-none"
    >
      {/* Dot track */}
      <div className="relative" style={{ height: TRACK, width: RING }}>
        {/* Unfilled spine */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px bg-[#F8F3EF]/15"
          style={{ top: DOT / 2, bottom: DOT / 2 }}
        />

        {/* Progress fill, grows as the ring descends */}
        <motion.div
          className="absolute left-1/2 -translate-x-1/2 w-px bg-[#D03412]"
          style={{ top: DOT / 2 }}
          animate={{ height: active * STEP }}
          transition={travel}
        />

        {/* The travelling ring */}
        <motion.div
          aria-hidden
          className="absolute left-1/2 rounded-full border border-[#D03412] z-10"
          style={{
            width: RING,
            height: RING,
            marginLeft: -RING / 2,
            top: (DOT - RING) / 2,
            boxShadow: "0 0 14px rgba(208,52,18,0.35)",
          }}
          animate={{ y: active * STEP }}
          transition={travel}
        />

        {/* Dots — real anchors, so this works as navigation too */}
        {CHAPTERS.map((chapter, i) => {
          const isActive = i === active;
          return (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              aria-label={`${chapter.label} — section ${i + 1} of ${CHAPTERS.length}`}
              aria-current={isActive ? "true" : undefined}
              className="interactive group absolute left-1/2 -translate-x-1/2 z-20 flex items-center justify-center"
              style={{ top: i * STEP + DOT / 2 - HIT / 2, width: HIT, height: HIT }}
            >
              <motion.span
                className={`rounded-full block ${
                  isActive
                    ? "bg-[#D03412]"
                    : "bg-[#7C1117] border border-[#F8F3EF]/40 group-hover:border-[#D03412]"
                }`}
                style={{ width: DOT, height: DOT }}
                animate={{ scale: isActive ? 1.15 : 1 }}
                transition={travel}
              />

              {/* Chapter name on hover — chipped so it stays legible if it
                  reaches over the content column */}
              <span className="absolute left-full ml-2 px-2 py-1 rounded-sm bg-[#111111]/85 border border-[#D03412]/30 text-[9px] font-mono uppercase tracking-widest whitespace-nowrap text-[#F8F3EF]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                {chapter.label}
              </span>
            </a>
          );
        })}
      </div>

      {/* Live counter, under the dots as on the reference slide */}
      <div className="font-mono tabular-nums text-[9px] tracking-wider leading-none whitespace-nowrap">
        <motion.span
          key={active}
          initial={reduce ? false : { y: -7, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
          className="text-[#D03412] font-bold inline-block"
        >
          {String(active + 1).padStart(2, "0")}
        </motion.span>
        <span className="text-[#F8F3EF]/35"> / {String(CHAPTERS.length).padStart(2, "0")}</span>
      </div>

      {/* Scroll hint — retires once you're on the last chapter */}
      <motion.div
        className="writing-mode-vertical text-[10px] font-mono tracking-widest text-[#F8F3EF]/40 uppercase mt-2 flex items-center gap-2"
        animate={{ opacity: active === CHAPTERS.length - 1 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span>SCROLL</span>
        <span>↓</span>
      </motion.div>
    </aside>
  );
}
