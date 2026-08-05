"use client";

import { useEffect } from "react";

/* ==========================================================================
   IDLE ANIMATIONS
   The page runs several infinite CSS animations — two wide marquees and the
   rotating stamps. Browsers keep ticking those even when they are thousands of
   pixels outside the viewport, which on a phone is continuous compositor work
   for something nobody can see.

   This watches every element with an infinite animation and marks the ones
   that are offscreen; the paused rule lives in globals.css. Purely a
   performance measure — nothing looks different.
   ========================================================================== */

const MARGIN = "200px"; // resume slightly before it scrolls into view

export default function IdleAnimations() {
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          (entry.target as HTMLElement).dataset.offscreen = String(!entry.isIntersecting);
        }
      },
      { rootMargin: MARGIN }
    );

    // A timer, not rAF: this must still run on a backgrounded or
    // non-compositing tab, where rAF never fires.
    const id = window.setTimeout(() => {
      document.querySelectorAll<HTMLElement>("body *").forEach((el) => {
        if (getComputedStyle(el).animationIterationCount === "infinite") {
          observer.observe(el);
        }
      });
    }, 0);

    return () => {
      clearTimeout(id);
      observer.disconnect();
      document
        .querySelectorAll<HTMLElement>("[data-offscreen]")
        .forEach((el) => delete el.dataset.offscreen);
    };
  }, []);

  return null;
}
