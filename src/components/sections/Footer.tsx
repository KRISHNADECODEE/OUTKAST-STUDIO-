"use client";

import React from "react";
import Link from "next/link";
import { OutkastLogo, CircularStamp } from "../ui/BrandAssets";
import { Instagram, Mail, Globe, ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { BUSINESS_CONFIG, getEmailHref, getSocialUrl, getWhatsAppUrl, getPhoneHref } from "@/lib/business-config";

export default function Footer() {
  const emailInfo = getEmailHref();
  const phone = getPhoneHref();
  const instagram = getSocialUrl("instagram");
  const behance = getSocialUrl("behance");
  const dribbble = getSocialUrl("dribbble");
  const { url: whatsappUrl, isConfigured: isWhatsAppConfigured } = getWhatsAppUrl();

  return (
    <footer className="relative bg-[#111111] text-[#F8F3EF] pt-20 pb-12 px-6 md:px-12 border-t border-[#D03412]/30 paper-grain">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Top Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#F8F3EF]/10">
          {/* Col 1: Brand & Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            <OutkastLogo className="h-10 w-auto" />
            <p className="text-xs font-mono text-[#F8F3EF]/75 max-w-sm leading-relaxed">
              {BUSINESS_CONFIG.positioningStatement}
            </p>

            <div className="space-y-3 pt-1">
              {/* Official Email — Editable Placeholder Compliant */}
              <div className="flex items-center gap-3 text-xs font-mono">
                <a
                  href={emailInfo.href}
                  className="interactive text-[#D03412] hover:text-[#F8F3EF] transition-colors flex items-center gap-2 font-bold"
                >
                  <Mail size={16} />
                  <span>
                    {emailInfo.isConfigured
                      ? emailInfo.display
                      : "Direct Studio Inquiries via Brief Form"}
                  </span>
                </a>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-2 text-xs font-mono text-[#F8F3EF]/60">
                <Globe size={14} className="text-[#D03412]" />
                <span>{BUSINESS_CONFIG.locationDisplay}</span>
              </div>

              {/* Direct Studio Call */}
              <div className="flex items-center gap-2 text-xs font-mono">
                <a
                  href={phone.href}
                  className="interactive text-[#F8F3EF]/90 hover:text-[#D03412] transition-colors flex items-center gap-2 font-bold"
                >
                  <Phone size={14} className="text-[#D03412]" />
                  <span>{phone.display}</span>
                </a>
              </div>

              {/* WhatsApp direct if configured */}
              {isWhatsAppConfigured && (
                <div className="flex items-center gap-2 text-xs font-mono">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive text-[#25D366] hover:underline flex items-center gap-1.5 font-bold"
                  >
                    <MessageCircle size={15} />
                    <span>WhatsApp Direct Support</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#D03412] uppercase tracking-widest font-bold">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F8F3EF]/80">
              <li>
                <Link href="/work" className="hover:text-[#D03412] transition-colors font-medium">
                  Client Case Studies
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#D03412] transition-colors font-medium">
                  Studio Growth Blog
                </Link>
              </li>
              <li>
                <Link href="/ai-video-advertising" className="hover:text-[#D03412] transition-colors text-[#D03412] font-bold">
                  AI Video Advertising ★
                </Link>
              </li>
              <li>
                <a href="#what-we-do" className="hover:text-[#D03412] transition-colors">
                  What We Do
                </a>
              </li>
              <li>
                <a href="#why" className="hover:text-[#D03412] transition-colors">
                  Why Outkast
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#D03412] transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#D03412] transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D03412] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Regional Hubs */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#D03412] uppercase tracking-widest font-bold">
              REGIONAL HUBS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F8F3EF]/80">
              <li>
                <Link href="/haridwar" className="hover:text-[#D03412] transition-colors">
                  Creative Agency Haridwar
                </Link>
              </li>
              <li>
                <Link href="/rishikesh" className="hover:text-[#D03412] transition-colors">
                  Creative Agency Rishikesh
                </Link>
              </li>
              <li>
                <Link href="/website-development-haridwar" className="hover:text-[#D03412] transition-colors">
                  Web Dev Haridwar
                </Link>
              </li>
              <li>
                <Link href="/website-development-rishikesh" className="hover:text-[#D03412] transition-colors">
                  Web Dev Rishikesh
                </Link>
              </li>
              <li>
                <Link href="/social-media-management-haridwar" className="hover:text-[#D03412] transition-colors">
                  Social Media Haridwar
                </Link>
              </li>
              <li>
                <Link href="/social-media-management-rishikesh" className="hover:text-[#D03412] transition-colors">
                  Social Media Rishikesh
                </Link>
              </li>
              <li>
                <Link href="/branding-agency-haridwar" className="hover:text-[#D03412] transition-colors">
                  Branding Agency Haridwar
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Socials */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono text-[#D03412] uppercase tracking-widest font-bold">
              CONNECT
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F8F3EF]/80">
              {instagram.isConfigured ? (
                <li>
                  <a
                    href={instagram.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive hover:text-[#D03412] transition-colors flex items-center gap-1.5"
                  >
                    <Instagram size={14} className="text-[#D03412]" />
                    <span>@outkast.studios.official</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ) : (
                <li className="text-[#F8F3EF]/40 font-mono text-xs">Instagram [Pending Config]</li>
              )}

              {behance.isConfigured ? (
                <li>
                  <a
                    href={behance.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive hover:text-[#D03412] transition-colors flex items-center gap-1.5"
                  >
                    <span>Behance Portfolio</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ) : (
                <li>
                  <a href="#contact" className="hover:text-[#D03412] transition-colors text-white/60">
                    <span>Behance [Inquire]</span>
                  </a>
                </li>
              )}

              {dribbble.isConfigured ? (
                <li>
                  <a
                    href={dribbble.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="interactive hover:text-[#D03412] transition-colors flex items-center gap-1.5"
                  >
                    <span>Dribbble Shots</span>
                    <ArrowUpRight size={12} />
                  </a>
                </li>
              ) : (
                <li>
                  <a href="#contact" className="hover:text-[#D03412] transition-colors text-white/60">
                    <span>Dribbble [Inquire]</span>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Rights & Stamp */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-4 text-xs font-mono text-[#F8F3EF]/50">
          <p>© {new Date().getFullYear()} OUTKAST STUDIOS. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-6">
            <span className="text-[#D03412] uppercase font-bold">BUILT DIFFERENT.</span>
            <span>MADE TO OUTKAST.</span>
          </div>
          <div className="hidden sm:block">
            <CircularStamp className="w-16 h-16 opacity-75" />
          </div>
        </div>
      </div>
    </footer>
  );
}
