"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { OutkastMark } from "./ui/Wordmark";
import { NoiseOverlay } from "./ui/PaperAssets";

/* ==========================================================================
   13. LOADING ANIMATION
   Runs the four beats from the asset sheet in sequence:
   paper unfold -> logo spin -> brush swipe -> text reveal -> curtain out.
   Shows once per tab (sessionStorage), and is skipped entirely for anyone
   who has asked for reduced motion.
   ========================================================================== */

const TAGLINE = "CREATIVE WEBSITES • AI ADVERTISING • BRAND BUILDING";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const alreadyPlayed = sessionStorage.getItem("outkast-intro") === "done";

    if (reduced || alreadyPlayed) return;

    setVisible(true);
    document.body.style.overflow = "hidden";

    const timer = window.setTimeout(() => {
      sessionStorage.setItem("outkast-intro", "done");
      setVisible(false);
    }, 2600);

    return () => {
      window.clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.style.overflow = "";
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#7C1117] overflow-hidden"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          <NoiseOverlay variant="grain02" />

          {/* Beat 1 — paper unfold: two halves parting to reveal the mark */}
          <motion.div
            className="absolute inset-x-0 top-0 h-1/2 bg-[#8D161D] origin-top"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 h-1/2 bg-[#8D161D] origin-bottom"
            initial={{ scaleY: 1 }}
            animate={{ scaleY: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.15 }}
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-8">
            {/* Beat 2 — logo spin: ring sweeps around the mark */}
            <div className="relative flex items-center justify-center">
              <motion.svg
                viewBox="0 0 120 120"
                className="absolute w-44 h-44 md:w-56 md:h-56 text-[#D03412]"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ rotate: 0, opacity: 0 }}
                animate={{ rotate: 360, opacity: 1 }}
                transition={{ duration: 1.6, ease: "easeInOut", delay: 0.5 }}
              >
                <motion.circle
                  cx="60"
                  cy="60"
                  r="54"
                  strokeDasharray="340"
                  initial={{ strokeDashoffset: 340 }}
                  animate={{ strokeDashoffset: 40 }}
                  transition={{ duration: 1.4, ease: "easeInOut", delay: 0.5 }}
                />
              </motion.svg>

              <motion.div
                initial={{ scale: 0.82, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.55 }}
              >
                <OutkastMark className="h-14 md:h-20 w-auto text-[#F8F3EF]" />
              </motion.div>
            </div>

            {/* Beat 3 — brush swipe wiping across the tagline */}
            <div className="relative overflow-hidden">
              <motion.p
                className="text-[10px] md:text-xs font-mono tracking-[0.32em] text-[#F8F3EF]/70 uppercase text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 1.5 }}
              >
                {TAGLINE}
              </motion.p>

              {/* Beat 4 — text reveal: the swipe uncovers the line */}
              <motion.span
                className="absolute inset-0 bg-[#D03412] origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: [0, 1, 1, 0] }}
                transition={{
                  duration: 1.1,
                  times: [0, 0.42, 0.58, 1],
                  ease: [0.76, 0, 0.24, 1],
                  delay: 1.1,
                }}
                style={{ transformOrigin: "left" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
