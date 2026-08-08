"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      quote:
        "OUTKAST completely changed how our brand looks online. The results have been insane. Their attention to luxury paper aesthetic and typography is unmatched.",
      author: "Aarav Malhotra",
      role: "Founder, WildLens",
      project: "WildLens Portfolio Website",
      img: "/assets/ugc-fashion.jpg",
    },
    {
      quote:
        "The mystic editorial branding and custom web experience created by OUTKAST blew our audience away. Conversions doubled within 30 days of launch.",
      author: "Dr. K. Sharma",
      role: "Founder, The Masked Astrologer",
      project: "The Masked Astrologer",
      img: "/assets/ugc-skincare.jpg",
    },
    {
      quote:
        "Their AI UGC ad campaigns and high-converting travel website elevated our bookings to international clients instantly. Real growth partners.",
      author: "Suraj Upadhyay",
      role: "CEO, SU Tour & Travel",
      project: "SU Tour & Travel",
      img: "/assets/ugc-fitness.jpg",
    },
    {
      quote:
        "OUTKAST built an aggressive, raw, high-fashion web experience that set us apart from every streetwear competitor. They don't follow trends—they define them.",
      author: "Devansh Mehta",
      role: "Creative Lead, XTRM",
      project: "XTRM",
      img: "/assets/greek-statue.jpg",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      aria-label="Client testimonials"
      className="relative py-28 px-6 md:px-12 bg-[#8D161D] overflow-hidden border-t border-b border-[#D03412]/30 paper-grain"
    >
      
      {/* Texture background */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="dots" opacity={0.07} size={34} />
      <NoiseOverlay variant="scratches" />

      <div className="max-w-7xl mx-auto space-y-12 relative z-10">
        
        {/* Label */}
        <SectionCounter index={10} label="Clients Love Us" />

        {/* Testimonial Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Quote Content */}
          <div className="lg:col-span-8 space-y-6">
            <Quote size={48} className="text-[#D03412] opacity-80" />

            <p className="text-2xl sm:text-4xl font-editorial leading-tight text-[#F8F3EF]">
              “{current.quote}”
            </p>

            <div className="pt-4 border-l-2 border-[#D03412] pl-4 space-y-1">
              <h4 className="text-lg font-editorial text-[#D03412]">{current.author}</h4>
              <p className="text-xs font-mono text-[#F8F3EF]/70">{current.role}</p>
              <span className="text-[10px] font-mono text-[#D03412] font-bold tracking-widest uppercase block">
                {current.project}
              </span>
            </div>
          </div>

          {/* Client Photo in Torn Frame */}
          <div className="lg:col-span-4 flex flex-col items-center">
            <div className="relative w-full max-w-xs aspect-[4/5] rounded-sm overflow-hidden border border-[#D03412]/40 shadow-2xl group">
              <Image
                src={current.img}
                alt={current.author}
                fill
                sizes="(min-width: 1024px) 20rem, 100vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#7C1117] via-transparent to-transparent opacity-80" />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4 mt-6">
              <button
                onClick={handlePrev}
                className="interactive w-12 h-12 rounded-full border border-[#D03412]/40 bg-[#7C1117] hover:bg-[#D03412] text-[#F8F3EF] flex items-center justify-center transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={22} />
              </button>
              <span className="text-xs font-mono text-[#F8F3EF]/70">
                0{currentIndex + 1} / 0{testimonials.length}
              </span>
              <button
                onClick={handleNext}
                className="interactive w-12 h-12 rounded-full border border-[#D03412]/40 bg-[#7C1117] hover:bg-[#D03412] text-[#F8F3EF] flex items-center justify-center transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={22} />
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
