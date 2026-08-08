"use client";

import React, { useState } from "react";
import Image from "next/image";
import ProjectModal from "../ProjectModal";
import { HanddrawnSmiley, BrushStroke } from "../ui/BrandAssets";
import { BackgroundPattern, NoiseOverlay, SectionCounter } from "../ui/PaperAssets";
import BookingEmbed from "../ui/BookingEmbed";

export default function FinalCtaSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 bg-[#7C1117] overflow-hidden paper-grain">
      
      {/* Background Texture */}
      <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-overlay">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Wrinkled paper texture"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <BackgroundPattern variant="crosses" opacity={0.07} size={60} />
      <NoiseOverlay variant="grain02" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Big Headline */}
        <div className="lg:col-span-8 space-y-6">
          <SectionCounter index={13} label="Let's Work Together" />

          <h2 className="text-5xl sm:text-7xl lg:text-9xl font-editorial leading-[0.88] uppercase text-[#F8F3EF] tracking-tight">
            LET'S BUILD SOMETHING{" "}
            <span className="font-brush text-[#D03412] capitalize block sm:inline">
              Outkast.
            </span>
          </h2>

          <BrushStroke variant="sweep" className="w-80 h-8 text-[#D03412]/70" />
        </div>

        {/* Right: scheduler */}
        <div className="lg:col-span-4 relative space-y-4">
          <div className="flex justify-between items-start gap-4">
            <p className="text-base font-mono text-[#F8F3EF]/90 leading-relaxed">
              Your brand deserves more than ordinary. Let's create something unforgettable.
            </p>
            <HanddrawnSmiley className="w-10 h-10 text-[#D03412] shrink-0" />
          </div>

          <BookingEmbed onFallbackClick={() => setIsModalOpen(true)} />
        </div>

      </div>

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
