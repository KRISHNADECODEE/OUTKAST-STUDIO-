"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, Send } from "lucide-react";
import confetti from "canvas-confetti";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ isOpen, onClose }: ProjectModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$5k - $10k",
    message: "",
  });

  const servicesList = [
    "Portfolio Website",
    "AI UGC Ads {Flagship}",
    "Meta Ads Campaign",
    "30 Days Content Calendar",
    "Brand Identity & Building",
    "Full Growth Partnership",
  ];

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#D03412", "#F8F3EF", "#8D161D"],
    });
    setTimeout(() => {
      setSubmitted(false);
      onClose();
    }, 3000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#111111]/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-2xl bg-[#8D161D] border border-[#D03412]/40 p-6 md:p-10 rounded-sm shadow-2xl z-10 my-auto text-[#F8F3EF] overflow-hidden paper-grain"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 text-[#F8F3EF]/70 hover:text-[#D03412] transition-colors"
            >
              <X size={24} />
            </button>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-16 h-16 text-[#D03412] mx-auto animate-bounce" />
                <h3 className="text-3xl font-editorial tracking-wider">PROJECT BRIEF RECEIVED</h3>
                <p className="text-sm text-[#F8F3EF]/80 max-w-md mx-auto">
                  Thank you! Our creative director will review your brief and reach out within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-[#D03412] uppercase block mb-1">
                    START A PROJECT
                  </span>
                  <h2 className="text-2xl md:text-3xl font-editorial tracking-tight">
                    LET'S BUILD SOMETHING OUTKAST.
                  </h2>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-xs font-mono tracking-wider text-[#F8F3EF]/70 block mb-2 uppercase">
                    Select Services Needed:
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {servicesList.map((service) => (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-3 py-2 text-xs font-mono border rounded-sm transition-all text-left truncate ${
                          selectedServices.includes(service)
                            ? "border-[#D03412] bg-[#D03412] text-white"
                            : "border-[#D03412]/30 bg-[#7C1117]/60 text-[#F8F3EF]/80 hover:border-[#D03412]"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-mono text-[#F8F3EF]/70 block mb-1">YOUR NAME *</label>
                    <input
                      required
                      type="text"
                      placeholder="Aarav Malhotra"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#7C1117] border border-[#D03412]/30 p-3 text-sm rounded-sm focus:outline-none focus:border-[#D03412]"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-mono text-[#F8F3EF]/70 block mb-1">YOUR EMAIL *</label>
                    <input
                      required
                      type="email"
                      placeholder="Oukast.studio2026@gmail.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#7C1117] border border-[#D03412]/30 p-3 text-sm rounded-sm focus:outline-none focus:border-[#D03412]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono text-[#F8F3EF]/70 block mb-1">PROJECT DETAILS / GOALS</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your brand, goals, and timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#7C1117] border border-[#D03412]/30 p-3 text-sm rounded-sm focus:outline-none focus:border-[#D03412]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#D03412] hover:bg-[#b02a0e] text-white font-mono text-sm tracking-widest uppercase font-bold rounded-sm transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  <span>SUBMIT PROJECT BRIEF</span>
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
