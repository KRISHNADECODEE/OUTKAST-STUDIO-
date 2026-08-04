"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/* ==========================================================================
   1. CUSTOM CURSOR — default / pointer / magnetic hover
   Driven by motion values rather than React state, so moving the mouse never
   triggers a re-render. On an interactive target the ring is pulled toward
   that element's centre (the "magnetic" state) and picks up a glow.
   ========================================================================== */

const MAGNET_STRENGTH = 0.42; // 0 = free, 1 = pinned to element centre
const INTERACTIVE = "a, button, [role='button'], input, textarea, select, .interactive";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);

  // Raw target position — the ring lags behind via spring, the dot tracks tightly.
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);

  const ringX = useSpring(x, { stiffness: 260, damping: 26, mass: 0.55 });
  const ringY = useSpring(y, { stiffness: 260, damping: 26, mass: 0.55 });
  const dotX = useSpring(x, { stiffness: 900, damping: 38, mass: 0.1 });
  const dotY = useSpring(y, { stiffness: 900, damping: 38, mass: 0.1 });

  const ringLeft = useTransform(ringX, (v) => v - 20);
  const ringTop = useTransform(ringY, (v) => v - 20);
  const dotLeft = useTransform(dotX, (v) => v - 4);
  const dotTop = useTransform(dotY, (v) => v - 4);

  useEffect(() => {
    // Only on devices with a real pointer — never on touch.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const onMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const magnet = target?.closest?.(INTERACTIVE) as HTMLElement | null;

      if (magnet) {
        // Magnetic hover: ease the cursor toward the element's centre.
        const r = magnet.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        x.set(e.clientX + (cx - e.clientX) * MAGNET_STRENGTH);
        y.set(e.clientY + (cy - e.clientY) * MAGNET_STRENGTH);
        setHovered(true);
      } else {
        x.set(e.clientX);
        y.set(e.clientY);
        setHovered(false);
      }
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onLeave = () => {
      x.set(-200);
      y.set(-200);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseleave", onLeave);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* Magnetic glow — only present over an interactive target */}
      <motion.div
        className="fixed top-0 left-0 w-16 h-16 rounded-full pointer-events-none z-[60] hidden md:block"
        style={{
          left: ringLeft,
          top: ringTop,
          x: -12,
          y: -12,
          background:
            "radial-gradient(circle, rgba(208,52,18,0.55) 0%, rgba(208,52,18,0) 68%)",
        }}
        animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.4 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full border pointer-events-none z-[61] hidden md:block"
        style={{ left: ringLeft, top: ringTop }}
        animate={{
          scale: clicking ? 0.75 : hovered ? 1.55 : 1,
          borderColor: hovered ? "#D03412" : "rgba(248,243,239,0.45)",
          borderWidth: hovered ? 2 : 1,
        }}
        transition={{ type: "spring", stiffness: 320, damping: 24 }}
      />

      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#D03412] pointer-events-none z-[62] hidden md:block"
        style={{ left: dotLeft, top: dotTop }}
        animate={{ scale: clicking ? 2.1 : hovered ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 600, damping: 30 }}
      />
    </>
  );
}
