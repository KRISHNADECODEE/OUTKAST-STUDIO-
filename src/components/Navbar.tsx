"use client";

import React, { useState, useEffect } from "react";
import { OutkastLogo } from "./ui/BrandAssets";
import ProjectModal from "./ProjectModal";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "WORK", href: "#portfolio" },
    { name: "SERVICES", href: "#services" },
    { name: "APPROACH", href: "#approach" },
    { name: "AI UGC", href: "#ai-ugc" },
    { name: "RESULTS", href: "#results" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-[#7C1117]/90 backdrop-blur-md border-b border-[#D03412]/20 py-4 shadow-2xl"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="interactive group">
            <OutkastLogo />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-[0.2em]">
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

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="interactive px-5 py-2.5 text-xs font-mono tracking-widest text-[#F8F3EF] border border-[#D03412] hover:bg-[#D03412] transition-all duration-300 rounded-sm flex items-center gap-2 group shadow-lg hover:shadow-[#D03412]/30"
            >
              <span>START PROJECT</span>
              <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#F8F3EF] p-2 hover:text-[#D03412] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-30 bg-[#7C1117] pt-24 px-8 flex flex-col gap-6 lg:hidden border-b border-[#D03412]/30">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-editorial tracking-wider text-[#F8F3EF] border-b border-[#8D161D] pb-3"
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsModalOpen(true);
            }}
            className="w-full py-4 text-center text-sm font-mono tracking-widest text-[#F8F3EF] bg-[#D03412] rounded-sm mt-4 font-bold"
          >
            START PROJECT ↗
          </button>
        </div>
      )}

      {/* Project Inquiry Modal */}
      <ProjectModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
