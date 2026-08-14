"use client";

import { Mail, ArrowUp } from "lucide-react";
import Image from "next/image";

// Custom LinkedIn icon SVG
function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-label="LinkedIn"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-dark border-t border-slate-900 py-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">

        {/* Left: Branding & Tagline */}
        <div className="flex items-center gap-3">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border-2 border-electric/40 shadow-[0_0_12px_rgba(17,89,175,0.3)] shrink-0">
            <Image src="/umair.jpeg" alt="Muhammad Umair" fill className="object-cover" sizes="40px" />
          </div>
          <div className="text-center md:text-left">
            <span className="font-extrabold text-white text-lg tracking-wider block mb-0.5">
              Muhammad Umair
            </span>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              SEO that ranks. Code that ships.
            </span>
          </div>
        </div>

        {/* Center: Social Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com/in/muhammad-umair-0a7b69125/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-lg border border-slate-800 bg-[#0B1F3A]/40 text-slate-400 hover:text-white hover:border-electric/30 hover:bg-electric/10 transition-all duration-200"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a
            href="https://www.fiverr.com/hafizumair14"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Fiverr"
            className="px-2.5 py-1.5 rounded-lg border border-slate-800 bg-[#0B1F3A]/40 text-slate-400 hover:text-white hover:border-electric/30 hover:bg-electric/10 text-[9px] font-black uppercase tracking-tighter"
          >
            Fiverr
          </a>
          <a
            href="mailto:m.umair0314@gmail.com"
            aria-label="Email"
            className="p-2.5 rounded-lg border border-slate-800 bg-[#0B1F3A]/40 text-slate-400 hover:text-white hover:border-electric/30 hover:bg-electric/10 transition-all duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        {/* Right: Scroll-to-top & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-navy-light/60 border border-slate-800 hover:border-electric/35 text-slate-400 hover:text-white transition-all duration-200 hover:scale-105"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 text-electric-light" />
          </button>
          <span className="text-[10px] text-slate-500 font-medium">
            &copy; {new Date().getFullYear()} Muhammad Umair. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
