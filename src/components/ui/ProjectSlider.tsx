"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

export type SlideProject = {
  id: string | number;
  title: string;
  category: string;
  tagline: string;
  headline: string;
  imageSrc: string;
  url: string;
};

interface ProjectSliderProps {
  projects: SlideProject[];
  className?: string;
}

/* Slide timing lifted straight from the reference component: the frame slides
   on the Y axis, the copy on the X axis, both direction-aware. */
const EASE = [0.4, 0, 0.2, 1] as const;
const DURATION = 0.6;

const imageVariants = {
  enter: (direction: "left" | "right") => ({
    y: direction === "right" ? "100%" : "-100%",
    opacity: 0,
  }),
  center: { y: 0, opacity: 1 },
  exit: (direction: "left" | "right") => ({
    y: direction === "right" ? "-100%" : "100%",
    opacity: 0,
  }),
};

const textVariants = {
  enter: (direction: "left" | "right") => ({
    x: direction === "right" ? 50 : -50,
    opacity: 0,
  }),
  center: { x: 0, opacity: 1 },
  exit: (direction: "left" | "right") => ({
    x: direction === "right" ? -50 : 50,
    opacity: 0,
  }),
};

export const ProjectSlider = ({ projects, className }: ProjectSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const reduce = useReducedMotion();

  const active = projects[currentIndex];
  const total = projects.length;

  const go = (next: number, dir: "left" | "right") => {
    setDirection(dir);
    setCurrentIndex((next + total) % total);
  };

  const handleNext = () => go(currentIndex + 1, "right");
  const handlePrev = () => go(currentIndex - 1, "left");

  // The three upcoming projects, so the strip never shows the one on screen.
  const upcoming = Array.from({ length: Math.min(3, total - 1) }, (_, i) => ({
    index: (currentIndex + i + 1) % total,
    project: projects[(currentIndex + i + 1) % total],
  }));

  const transition = reduce ? { duration: 0 } : { duration: DURATION, ease: EASE };
  const hasLiveUrl = active.url && active.url !== "#";

  return (
    <div className={cn("relative w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
        {/* ---- Left rail: counter, label, thumbnails ---- */}
        {/* On phones this drops below the copy: image, then text, then thumbs */}
        <div className="md:col-span-3 flex flex-col justify-between order-3 md:order-1">
          <div className="flex items-center md:items-start justify-between md:flex-col md:gap-6">
            <span className="text-xs font-mono tracking-widest tabular-nums text-[#F8F3EF]/60">
              <span className="text-[#D03412] font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(total).padStart(2, "0")}
            </span>

            <h3 className="hidden md:block text-[10px] font-mono font-bold tracking-[0.35em] uppercase text-[#F8F3EF]/40 [writing-mode:vertical-rl] rotate-180">
              Selected Work
            </h3>
          </div>

          <div className="flex gap-3 mt-8 md:mt-0">
            {upcoming.map(({ index, project }) => (
              <button
                key={project.id}
                type="button"
                onClick={() => go(index, index > currentIndex ? "right" : "left")}
                aria-label={`View ${project.title}`}
                className="interactive group relative w-16 h-20 md:w-20 md:h-24 shrink-0 overflow-hidden rounded-sm border border-[#D03412]/30 opacity-60 hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412] transition-opacity duration-300"
              >
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="80px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute inset-0 bg-[#7C1117]/40 group-hover:bg-transparent transition-colors" />
              </button>
            ))}
          </div>
        </div>

        {/* ---- Centre: the sliding frame ---- */}
        <div className="md:col-span-4 order-1 md:order-2">
          <motion.div
            /* Swipe to change slides on touch. dragDirectionLock plus
               touch-pan-y means a vertical drag still scrolls the page
               natively rather than being swallowed by the slider. */
            drag="x"
            dragDirectionLock
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            dragMomentum={false}
            onDragEnd={(_, info) => {
              const threshold = 60;
              if (info.offset.x < -threshold) handleNext();
              else if (info.offset.x > threshold) handlePrev();
            }}
            className="relative w-full aspect-[9/13] md:aspect-auto md:h-[480px] overflow-hidden rounded-sm border border-[#D03412]/30 bg-[#111111] touch-pan-y select-none cursor-grab active:cursor-grabbing"
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={imageVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="absolute inset-0"
              >
                <Image
                  src={active.imageSrc}
                  alt={active.title}
                  fill
                  sizes="(min-width: 768px) 34vw, 100vw"
                  className="object-cover"
                  priority
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80" />
              </motion.div>
            </AnimatePresence>

            <span className="absolute top-4 right-4 z-10 text-[10px] font-mono font-bold tracking-widest text-[#D03412]">
              {String(currentIndex + 1).padStart(2, "0")}
            </span>

            {/* Swipe affordance, touch only */}
            <span className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-[9px] font-mono tracking-[0.2em] uppercase text-[#F8F3EF]/50">
              swipe
            </span>
          </motion.div>
        </div>

        {/* ---- Right: copy and controls ---- */}
        <div className="md:col-span-5 flex flex-col justify-between order-2 md:order-3">
          <div className="relative overflow-hidden md:pt-10 min-h-[210px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
              >
                <p className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#D03412]">
                  {active.category}
                </p>

                <h3 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-editorial font-extrabold uppercase leading-[0.92] tracking-tight text-[#F8F3EF]">
                  {active.headline}
                </h3>

                <p className="mt-4 text-sm font-mono text-[#F8F3EF]/70 border-l-2 border-[#D03412] pl-3">
                  {active.tagline}
                </p>

                <p className="mt-5 text-xs font-mono tracking-widest uppercase text-[#F8F3EF]/50">
                  {active.title}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 mt-8">
            <button
              type="button"
              onClick={handlePrev}
              aria-label="Previous project"
              className="interactive w-12 h-12 rounded-full border border-[#F8F3EF]/30 text-[#F8F3EF] flex items-center justify-center hover:border-[#D03412] hover:bg-[#D03412] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412] transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              aria-label="Next project"
              className="interactive w-12 h-12 rounded-full bg-[#D03412] text-[#F8F3EF] flex items-center justify-center hover:bg-[#b02a0e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D03412] transition-colors"
            >
              <ArrowRight className="w-5 h-5" />
            </button>

            {hasLiveUrl && (
              <a
                href={active.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive ml-auto inline-flex items-center gap-2 pb-1 border-b border-[#D03412] text-[#D03412] font-mono text-xs tracking-[0.2em] uppercase font-bold hover:text-[#F8F3EF] transition-colors"
              >
                <span>LIVE DEMO</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
