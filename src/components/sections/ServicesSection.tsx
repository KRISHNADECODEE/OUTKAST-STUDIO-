"use client";

import React from "react";
import Image from "next/image";
import { GiantBrushX } from "../ui/BrandAssets";
import { Monitor, Megaphone, Calendar, Cpu, Landmark, Flame } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      num: "01",
      title: "PORTFOLIO WEBSITES",
      desc: "Custom, high-converting portfolio websites that showcase your work and build instant trust.",
      icon: Monitor,
    },
    {
      num: "02",
      title: "META ADS",
      desc: "Data-driven ad campaigns on Facebook & Instagram that bring leads, sales and real growth.",
      icon: Megaphone,
    },
    {
      num: "03",
      title: "CREATIVE 30 DAYS CONTENT CALENDAR",
      desc: "Done-for-you content calendars packed with ideas, hooks and captions that keep you consistent.",
      icon: Calendar,
    },
    {
      num: "04",
      title: "AI UGC ADS {MAIN}",
      desc: "AI-generated UGC style ads that look real, feel native and convert like crazy.",
      icon: Cpu,
      isFlagship: true,
    },
    {
      num: "05",
      title: "BRAND BUILDING",
      desc: "We build powerful brand identities that stand out, connect and create long-term impact.",
      icon: Landmark,
    },
    {
      num: "06",
      title: "MORE THAN AN AGENCY",
      desc: "We don't just deliver services. We become your growth partner and creative backbone.",
      icon: Flame,
    },
  ];

  return (
    <section id="services" className="relative py-28 px-4 sm:px-8 lg:px-12 bg-[#8D161D] overflow-hidden paper-grain border-b border-[#D03412]/30">
      
      {/* Seamless Wrinkled Paper Background Overlay */}
      <div className="absolute inset-0 opacity-30 pointer-events-none mix-blend-multiply">
        <Image
          src="/assets/paper-bg.jpg"
          alt="Paper texture background"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Right Layered Paper Rip Revealing Kraft & Red Brush X (Exact Mockup 3 Match) */}
      <div className="absolute top-0 right-0 w-72 h-72 pointer-events-none overflow-hidden z-0 hidden lg:block">
        <div className="w-full h-full bg-[#D4B896] clip-path-torn-top-right relative">
          <GiantBrushX className="w-64 h-64 text-[#D03412] opacity-80 absolute top-2 right-2" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
        
        {/* Left gutter — pagination now lives in the fixed ScrollRail */}
        <div className="hidden lg:block lg:col-span-1" />

        {/* Left Content Column */}
        <div className="lg:col-span-4 space-y-6 sticky top-28">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest text-[#D03412]">
            <span className="border-b border-[#D03412] pb-0.5 font-bold uppercase">
              WHAT WE DO • 04 / 06
            </span>
          </div>

          <h2 className="text-5xl sm:text-7xl lg:text-[76px] font-editorial leading-[0.88] uppercase text-[#F8F3EF] tracking-tight">
            SERVICES
            <br />
            THAT BUILD
            <br />
            <span className="font-brush text-[#D03412] capitalize tracking-normal block text-6xl sm:text-8xl mt-1">
              Brands.
            </span>
          </h2>

          <p className="text-xs sm:text-sm font-mono text-[#F8F3EF]/80 leading-relaxed max-w-sm border-l-2 border-[#D03412] pl-3">
            End-to-end creative and digital solutions to grow your brand, attract attention and convert it into real results.
          </p>

          <div className="pt-8 space-y-1 text-[10px] font-mono text-[#D03412] uppercase font-bold tracking-widest">
            <p>BUILT DIFFERENT.</p>
            <p>MADE TO OUTKAST.</p>
            <p className="text-[#F8F3EF]/50">OUTKAST STUDIOS © 2026</p>
          </div>
        </div>

        {/* Right 6 Cards Grid (Exact 3x2 Layout Matching Mockup 3) */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {services.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.num}
                className={`interactive relative bg-[#7C1117]/80 border p-6 rounded-sm flex flex-col justify-between space-y-4 group paper-grain transition-all duration-300 hover:-translate-y-1 shadow-xl ${
                  item.isFlagship
                    ? "border-[#D03412] ring-1 ring-[#D03412]/50 bg-[#7C1117]"
                    : "border-[#D03412]/30 hover:border-[#D03412]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-sm bg-[#8D161D] border border-[#D03412]/40 flex items-center justify-center text-[#D03412] group-hover:bg-[#D03412] group-hover:text-white transition-colors">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-mono text-[#D03412] font-bold">{item.num}</span>
                </div>

                <div className="space-y-2 my-auto">
                  <h3 className="text-base font-editorial text-[#F8F3EF] tracking-wider group-hover:text-[#D03412] transition-colors uppercase leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-mono text-[#F8F3EF]/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                {item.isFlagship && (
                  <span className="text-[9px] font-mono tracking-widest text-[#D03412] font-bold uppercase block pt-2 border-t border-[#D03412]/30">
                    ★ FLAGSHIP SERVICE
                  </span>
                )}
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
