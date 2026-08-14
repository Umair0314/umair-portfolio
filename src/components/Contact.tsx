"use client";

import { motion as motionHelper } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

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

// Custom WhatsApp icon SVG
function WhatsappIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-label="WhatsApp"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.705 1.459h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Contact() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#08172b] to-navy-dark overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-electric/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-emerald-500/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20 items-center text-center">
          <span className="text-electric-light font-bold text-xs uppercase tracking-widest mb-3">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Let&apos;s Connect
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
          <p className="mt-6 text-slate-400 text-sm md:text-base max-w-xl leading-relaxed">
            Have a project in mind or need an SEO audit? Reach out directly via WhatsApp, email, or telephone.
          </p>
        </div>

        {/* Channels Dashboard Grid */}
        <motionHelper.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10"
        >
          {/* Primary Call: WhatsApp */}
          <motionHelper.a
            variants={itemVariants}
            href="https://wa.me/923131786840"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-slate-800 bg-[#0c2a1c]/30 backdrop-blur-sm p-8 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_-15px_rgba(16,185,129,0.15)] hover:border-emerald-500/40 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shadow-lg group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <WhatsappIcon className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-400/80 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3.5 py-1">
                  Fastest Response
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide">
                Chat on WhatsApp
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Tap to open a direct chat conversation. Perfect for quick questions, project scoping, or instant check-ins.
              </p>
            </div>
            <div className="flex items-center text-sm font-bold text-emerald-400 group-hover:text-emerald-300 transition-colors">
              <span>Start Conversation</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </div>
          </motionHelper.a>

          {/* Primary Call: Email */}
          <motionHelper.a
            variants={itemVariants}
            href="mailto:m.umair0314@gmail.com"
            whileHover={{ y: -6 }}
            className="group relative rounded-2xl border border-slate-800 bg-[#071933]/30 backdrop-blur-sm p-8 flex flex-col justify-between overflow-hidden shadow-[0_15px_35px_-15px_rgba(17,89,175,0.15)] hover:border-electric/40 transition-colors"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric/5 to-transparent pointer-events-none" />
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-electric/10 text-electric-light border border-electric/20 flex items-center justify-center shadow-lg group-hover:bg-electric group-hover:text-white transition-all duration-300">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-electric-light/80 bg-electric/10 border border-electric/20 rounded-full px-3.5 py-1">
                  Inbox
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 tracking-wide">
                Send an Email
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Send detailed specifications, files, or audit requests. I normally respond to all professional emails within 24 hours.
              </p>
            </div>
            <div className="flex items-center text-sm font-bold text-electric-light group-hover:text-electric-light/90 transition-colors">
              <span>m.umair0314@gmail.com</span>
              <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-200" />
            </div>
          </motionHelper.a>
        </motionHelper.div>

        {/* Secondary Details Grid */}
        <motionHelper.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {/* Call Card */}
          <motionHelper.a
            variants={itemVariants}
            href="tel:+923131786840"
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-slate-800/80 bg-navy-light/20 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-md"
          >
            <div className="flex items-center space-x-3.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                <Phone className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Call Directly</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-electric-light transition-colors">
              +92 313 1786840
            </span>
          </motionHelper.a>

          {/* Fiverr Profile */}
          <motionHelper.a
            variants={itemVariants}
            href="https://fiverr.com/hafizumair14"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-slate-800/80 bg-navy-light/20 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-md"
          >
            <div className="flex items-center space-x-3.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                <FiverrIcon className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Fiverr Gig</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
              fiverr.com/hafizumair14
            </span>
          </motionHelper.a>

          {/* LinkedIn Profile */}
          <motionHelper.a
            variants={itemVariants}
            href="https://www.linkedin.com/in/muhammad-umair-0a7b69125/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="group rounded-xl border border-slate-800/80 bg-navy-light/20 p-6 flex flex-col justify-between hover:border-slate-700/80 transition-all shadow-md"
          >
            <div className="flex items-center space-x-3.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                <LinkedinIcon className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">LinkedIn Connect</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-white group-hover:text-electric-light transition-colors">
              linkedin.com/in/muhammad-umair
            </span>
          </motionHelper.a>

          {/* Location Card */}
          <motionHelper.div
            variants={itemVariants}
            className="rounded-xl border border-slate-800/80 bg-navy-light/20 p-6 flex flex-col justify-between shadow-md"
          >
            <div className="flex items-center space-x-3.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center">
                <MapPin className="w-4.5 h-4.5" />
              </div>
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500">Location</span>
            </div>
            <span className="text-sm sm:text-base font-bold text-slate-200">
              Sahiwal, Punjab, PK
            </span>
          </motionHelper.div>
        </motionHelper.div>
      </div>
    </section>
  );
}
