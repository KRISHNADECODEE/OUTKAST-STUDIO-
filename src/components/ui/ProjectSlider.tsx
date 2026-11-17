"use client";

import * as React from "react";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type SlideProject = {
  id: string | number;
  title: string;
  category: string;
  tagline: string;
  headline: string;
  imageSrc: string;
  url: string;
  servicesProvided?: string[];
  summary?: string;
};

interface ProjectSliderProps {
  projects: SlideProject[];
  className?: string;
}

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

  // Upcoming thumbnails
  const upcoming = Array.from({ length: Math.min(3, total - 1) }, (_, i) => ({
    index: (currentIndex + i + 1) % total,
    project: projects[(currentIndex + i + 1) % total],
  }));

  const transition = reduce ? { duration: 0 } : { duration: DURATION, ease: EASE };
  const hasLiveUrl = active.url && active.url !== "#";

  return (
    <div className={cn("relative w-full", className)}>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">
        {/* Left rail: counter, label, thumbnails */}
        <div className="md:col-span-3 flex flex-col justify-between order-3 md:order-1">
          <div className="flex items-center md:items-start justify-between md:flex-col md:gap-6">
            <span className="text-xs font-mono tracking-widest tabular-nums text-[#F8F3EF]/70">
              <span className="text-[#D03412] font-bold">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              {" / "}
              {String(total).padStart(2, "0")}
            </span>

            <h3 className="hidden md:block text-[10px] font-mono font-bold tracking-[0.35em] uppercase text-[#F8F3EF]/40 [writing-mode:vertical-rl] rotate-180">
              Verified Client Work
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

        {/* Centre: Sliding Mockup Frame */}
        <div className="md:col-span-4 order-1 md:order-2">
          <motion.div
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
            className="relative w-full aspect-[9/13] md:aspect-auto md:h-[500px] overflow-hidden rounded-sm border border-[#D03412]/30 bg-[#111111] touch-pan-y select-none cursor-grab active:cursor-grabbing shadow-2xl"
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
                <span className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-85" />
              </motion.div>
            </AnimatePresence>

            <span className="absolute top-4 right-4 z-10 text-[10px] font-mono font-bold tracking-widest text-[#D03412] bg-[#111111]/80 px-2.5 py-1 rounded-sm border border-[#D03412]/40">
              {String(currentIndex + 1).padStart(2, "0")} • VERIFIED
            </span>

            {/* Swipe affordance on touch */}
            <span className="md:hidden absolute bottom-3 left-1/2 -translate-x-1/2 z-10 text-[9px] font-mono tracking-[0.2em] uppercase text-[#F8F3EF]/60">
              swipe left / right
            </span>
          </motion.div>
        </div>

        {/* Right: Project Details & Controls */}
        <div className="md:col-span-5 flex flex-col justify-between order-2 md:order-3">
          <div className="relative overflow-hidden md:pt-6 min-h-[280px]">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={textVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={transition}
                className="space-y-4"
              >
                <div className="flex items-center gap-2">
                  <span className="text-[11px] font-mono font-bold tracking-[0.25em] uppercase text-[#D03412]">
                    {active.category}
                  </span>
                  <span className="text-[#F8F3EF]/40">•</span>
                  <span className="text-[10px] font-mono tracking-widest uppercase text-[#F8F3EF]/60">
                    {active.tagline}
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-extrabold uppercase leading-[0.92] tracking-tight text-[#F8F3EF]">
                  {active.headline}
                </h3>

                <h4 className="text-sm font-mono tracking-wider uppercase text-[#D03412] font-bold">
                  {active.title}
                </h4>

                {/* Honest Project Summary */}
                <p className="text-xs sm:text-sm font-mono text-[#F8F3EF]/80 leading-relaxed border-l-2 border-[#D03412] pl-3">
                  {active.summary || active.tagline}
                </p>

                {/* Services Provided Chips */}
                {active.servicesProvided && active.servicesProvided.length > 0 && (
                  <div className="pt-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F8F3EF]/50 block mb-1.5 font-bold">
                      Services Delivered:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {active.servicesProvided.map((service, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-mono uppercase tracking-wider bg-[#8D161D]/80 border border-[#D03412]/30 text-[#F8F3EF]/90 px-2 py-0.5 rounded-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-3 mt-8 pt-4 border-t border-[#D03412]/20">
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
                <span>VISIT LIVE DEMO</span>
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
