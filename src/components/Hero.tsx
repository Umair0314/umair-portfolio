"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight, ArrowDown } from "lucide-react";

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


// Custom Fiverr icon SVG
function FiverrIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="Fiverr"
    >
      <path d="M11.5 8c0-1.38.85-2 2-2h1v1.5h-1c-.55 0-.8.22-.8.5V9H15v1.5h-2.3V18H11v-7.5H9.5V9H11V8zm7.3 2.5c0-1.38.85-2 2-2h1v1.5h-1c-.55 0-.8.22-.8.5V11h2v1.5h-2V18h-1.8v-5.5h-1.3v-1.8H18.8v-.2z" />
    </svg>
  );
}

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 25, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
        duration: 0.5,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 260,
        damping: 15,
      },
    },
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-gradient-to-b from-navy-dark via-navy to-[#08172b]"
    >
      {/* Visual background details */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[350px] h-[350px] bg-electric/15 rounded-full blur-[100px] animate-pulse duration-5000" />
        <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-electric-light/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_60%,_#0B1F3A_100%)]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Logo badge */}
          <motion.div
            variants={itemVariants}
            className="mb-6 px-4 py-1.5 rounded-full border border-electric/30 bg-electric/10 text-electric-light text-xs font-semibold uppercase tracking-wider flex items-center space-x-1.5"
          >
            <span className="w-2 h-2 rounded-full bg-electric animate-ping" />
            <span>Available for Freelance Projects</span>
          </motion.div>

          {/* Name Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-4"
          >
            Muhammad Umair
          </motion.h1>

          {/* Designations Banner */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-xl md:text-2xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-electric-light mb-8"
          >
            SEO Specialist <span className="text-electric/70">|</span> Web & App Developer <span className="text-electric/70">|</span> AI-Assisted Builder
          </motion.p>

          {/* Core Introduction Paragraph */}
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mb-10 text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed text-center space-y-4 px-2 sm:px-6"
          >
            <p>
              I&apos;m a freelance SEO specialist and web developer with 5+ years of hands-on
              off-page SEO experience — link building, outreach, and backlink strategy that
              actually moves rankings. Over the last year I expanded into on-page, technical,
              and local SEO, running full-site audits and schema implementations that took one
              of my own projects to{" "}
              <strong className="text-white">56,500+ clicks</strong> and{" "}
              <strong className="text-white">134,000+ impressions</strong> in 28 days.
            </p>
            <p>
              On the dev side, I build fast, modern web apps and WordPress sites using Next.js,
              React, WordPress, and Flutter, using AI-assisted &quot;vibe coding&quot; workflows to ship
              production apps far faster than traditional timelines. I own projects end to end —
              from ranking strategy to the code that ships it.
            </p>
          </motion.div>

          {/* Action CTAs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mb-12 w-full justify-center sm:w-auto px-6"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-electric hover:bg-electric-light transition-all duration-300 shadow-[0_0_20px_rgba(17,89,175,0.3)] hover:shadow-[0_0_25px_rgba(17,89,175,0.5)] focus:outline-none"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-200" />
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center justify-center space-x-2 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-slate-200 border border-slate-700 bg-navy-light/40 hover:bg-slate-800/60 hover:text-white transition-all duration-300 focus:outline-none"
            >
              <span>Get In Touch</span>
            </button>
          </motion.div>

          {/* Staggered Social Icon Grid */}
          <motion.div
            variants={containerVariants}
            className="flex items-center justify-center gap-5"
          >
            <motion.a
              variants={iconVariants}
              href="https://www.linkedin.com/in/muhammad-umair-0a7b69125/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-3 rounded-full border border-slate-800 bg-[#0B1F3A]/60 text-slate-400 hover:text-white hover:border-electric/50 hover:bg-electric/10 hover:scale-110 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <LinkedinIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              variants={iconVariants}
              href="https://www.fiverr.com/hafizumair14"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Fiverr"
              className="p-3 rounded-full border border-slate-800 bg-[#0B1F3A]/60 text-slate-400 hover:text-white hover:border-electric/50 hover:bg-electric/10 hover:scale-110 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <FiverrIcon className="w-5 h-5" />
            </motion.a>
            <motion.a
              variants={iconVariants}
              href="mailto:m.umair0314@gmail.com"
              aria-label="Email"
              className="p-3 rounded-full border border-slate-800 bg-[#0B1F3A]/60 text-slate-400 hover:text-white hover:border-electric/50 hover:bg-electric/10 hover:scale-110 transition-all duration-200 shadow-md flex items-center justify-center"
            >
              <Mail className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-1 opacity-70 animate-bounce cursor-pointer" onClick={() => scrollToSection("about")}>
        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">Scroll Down</span>
        <ArrowDown className="w-4 h-4 text-electric-light" />
      </div>
    </section>
  );
}
