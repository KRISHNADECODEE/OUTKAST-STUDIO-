"use client";

import React from "react";
import { OutkastLogo, CircularStamp } from "../ui/BrandAssets";
import { Instagram, Mail, Globe, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#111111] text-[#F8F3EF] pt-20 pb-12 px-6 md:px-12 border-t border-[#D03412]/30 paper-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F8F3EF]/10">
          
          {/* Col 1: Brand */}
          <div className="lg:col-span-2 space-y-6">
            <OutkastLogo className="h-10 w-auto" />
            <p className="text-xs font-mono text-[#F8F3EF]/70 max-w-sm leading-relaxed">
              We craft bold, high-performance websites, AI UGC ads, and brand identities for ambitious clients who refuse to look ordinary.
            </p>

            <div className="flex items-center gap-4 text-xs font-mono">
              <a
                href="mailto:Oukast.studio2026@gmail.com"
                className="interactive text-[#D03412] hover:text-[#F8F3EF] transition-colors flex items-center gap-2 font-bold"
              >
                <Mail size={16} />
                <span>Oukast.studio2026@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#D03412] uppercase tracking-widest font-bold">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F8F3EF]/80">
              <li><a href="#portfolio" className="hover:text-[#D03412] transition-colors">Work</a></li>
              <li><a href="#services" className="hover:text-[#D03412] transition-colors">Services</a></li>
              <li><a href="#approach" className="hover:text-[#D03412] transition-colors">Approach</a></li>
              <li><a href="#ai-ugc" className="hover:text-[#D03412] transition-colors">AI UGC Showcase</a></li>
              <li><a href="#contact" className="hover:text-[#D03412] transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#D03412] uppercase tracking-widest font-bold">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F8F3EF]/80">
              <li><a href="#services" className="hover:text-[#D03412] transition-colors">Portfolio Websites</a></li>
              <li><a href="#services" className="hover:text-[#D03412] transition-colors">Meta Ads Campaigns</a></li>
              <li><a href="#ai-ugc" className="hover:text-[#D03412] transition-colors text-[#D03412] font-bold">AI UGC Ads {'{MAIN}'}</a></li>
              <li><a href="#services" className="hover:text-[#D03412] transition-colors">30 Days Content Calendar</a></li>
              <li><a href="#services" className="hover:text-[#D03412] transition-colors">Brand Building</a></li>
            </ul>
          </div>

          {/* Col 4: Socials & Managed Pages */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#D03412] uppercase tracking-widest font-bold">
              FOLLOW US & PAGES
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F8F3EF]/80">
              <li>
                <a
                  href="https://www.instagram.com/outkast._.studio/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive hover:text-[#D03412] transition-colors flex items-center gap-1.5"
                >
                  <Instagram size={14} className="text-[#D03412]" />
                  <span>@outkast._.studio</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/the_masked_astrologer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive hover:text-[#D03412] transition-colors flex items-center gap-1.5 text-white/60"
                >
                  <span>@the_masked_astrologer</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/crackupscexams"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="interactive hover:text-[#D03412] transition-colors flex items-center gap-1.5 text-white/60"
                >
                  <span>@crackupscexams</span>
                  <ArrowUpRight size={12} />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Rights & Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs font-mono text-[#F8F3EF]/50">
          <p>© OUTKAST STUDIO 2026. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#D03412] uppercase font-bold">BUILT DIFFERENT.</span>
            <span>MADE TO OUTKAST.</span>
          </div>
          <div className="hidden sm:block">
            <CircularStamp />
          </div>
        </div>

      </div>
    </footer>
  );
}
