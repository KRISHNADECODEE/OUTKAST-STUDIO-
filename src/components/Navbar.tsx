"use client";

import React, { useState, useEffect } from "react";
import { OutkastLogo } from "./ui/BrandAssets";
import ProjectModal from "./ProjectModal";
import { Menu, X, ArrowUpRight, Instagram, Phone } from "lucide-react";
import { getSocialUrl, getPhoneHref } from "@/lib/business-config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const instagram = getSocialUrl("instagram");
  const phone = getPhoneHref();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "SERVICES", href: "#what-we-do" },
    { name: "OUR WORK", href: "#portfolio" },
    { name: "AI ADS", href: "#ai-ugc" },
    { name: "BRANDING", href: "#brand-building" },
    { name: "PROCESS", href: "#process" },
    { name: "HOW WE WORK", href: "#how-we-work" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#7C1117]/95 backdrop-blur-md border-b border-[#D03412]/30 py-4 shadow-2xl"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="interactive group" aria-label="Outkast Studios Home">
            <OutkastLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-[0.18em]">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative py-1 text-[#F8F3EF]/80 hover:text-[#F8F3EF] transition-colors group interactive"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D03412] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Action Button & Social */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Follow Outkast Studios on Instagram"
              className="interactive p-2.5 text-[#F8F3EF]/80 hover:text-[#D03412] border border-[#F8F3EF]/15 hover:border-[#D03412] rounded-sm transition-all duration-300"
            >
              <Instagram size={15} />
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="interactive px-5 py-2.5 text-xs font-mono tracking-widest text-[#F8F3EF] border border-[#D03412] hover:bg-[#D03412] transition-all duration-300 rounded-sm flex items-center gap-2 group shadow-lg hover:shadow-[#D03412]/30 font-bold"
            >
              <span>LET&apos;S TALK</span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F8F3EF] p-2 hover:text-[#D03412] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#7C1117] pt-28 px-8 flex flex-col gap-5 lg:hidden border-b border-[#D03412]/30 overflow-y-auto pb-10 paper-grain">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-editorial tracking-wider text-[#F8F3EF] border-b border-[#8D161D] pb-3 hover:text-[#D03412] transition-colors uppercase"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full py-4 text-center text-xs font-mono tracking-widest uppercase text-[#F8F3EF] bg-[#D03412] rounded-sm mt-4 font-bold shadow-xl"
          >
            START A PROJECT BRIEF ↗
          </button>

          <div className="flex items-center gap-3 pt-3">
            <a
              href={phone.href}
              className="interactive flex-1 py-3 px-3 bg-[#111111] border border-[#D03412]/50 text-center text-xs font-mono tracking-wider uppercase font-bold text-[#F8F3EF] rounded-sm flex items-center justify-center gap-2"
            >
              <Phone size={14} className="text-[#D03412]" />
              <span>CALL: {phone.display}</span>
            </a>
            <a
              href={instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="interactive py-3 px-4 border border-[#D03412] text-[#F8F3EF] hover:bg-[#D03412] rounded-sm flex items-center justify-center transition-colors"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      )}

      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
