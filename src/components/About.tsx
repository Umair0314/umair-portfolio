"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Compass, Target, ArrowRight } from "lucide-react";

export default function About() {
  const [flippedMission, setFlippedMission] = useState(false);
  const [flippedVision, setFlippedVision] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#08172b] to-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image with shadow bloom */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-8">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden group shadow-[0_0_50px_-10px_rgba(17,89,175,0.4)]"
            >
              {/* Shadow Bloom Effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-electric/30 to-transparent opacity-60 z-10 group-hover:scale-105 transition-transform duration-500" />
              <Image
                src="/umair.jpeg"
                alt="Muhammad Umair"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 400px"
                priority
              />
            </motion.div>


          </div>

          {/* Right Column: Bio summary & Mission/Vision Flip Cards */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white tracking-wide">
                SEO Specialist &amp; Developer based in Pakistan
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Self-employed SEO specialist and web developer with 5+ years of hands-on experience
                in white-hat off-page SEO — link building, guest posting, and outreach for clients
                across multiple industries. In the past year I expanded into on-page SEO, technical
                SEO, and local SEO: full-site audits, schema markup, and Google Business Profile
                optimization.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                I build and maintain sites using WordPress, Next.js, and React, and
                I&apos;ve adopted AI-assisted &quot;vibe coding&quot; workflows to ship functional web apps and
                SaaS tools faster without sacrificing code quality. I learned development hands-on
                at a software house rather than through formal education, and I bring that
                practical, results-first approach into every project — sticking strictly to
                white-hat SEO, no PBNs, no link farms, no shortcuts.
              </p>
            </motion.div>

            {/* Mission & Vision Flipping Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {/* Mission Card */}
              <div 
                className="h-44 perspective cursor-pointer"
                onClick={() => setFlippedMission(!flippedMission)}
              >
                <motion.div
                  className="w-full h-full relative preserve-3d transition-transform duration-500"
                  animate={{ rotateY: flippedMission ? 180 : 0 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-navy-light/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-electric/40 transition-colors">
                    <div className="flex items-center space-x-3 text-electric-light">
                      <Target className="w-6 h-6" />
                    <h4 className="font-bold text-white tracking-wide">My Mission</h4>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Click to reveal the driving core behind every single rank, audit, and custom-coded module.
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center">
                      Flip Card <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden bg-electric/15 border border-electric/40 rounded-xl p-6 flex flex-col justify-between [transform:rotateY(180deg)]">
                    <div className="flex items-center space-x-3 text-electric-light">
                      <Target className="w-6 h-6" />
                    <h4 className="font-bold text-white tracking-wide">My Mission</h4>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                      &quot;Build things that rank, load fast, and actually make clients money — no shortcuts, no fluff.&quot;
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-electric-light">
                      Core Commitment
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Vision Card */}
              <div 
                className="h-44 perspective cursor-pointer"
                onClick={() => setFlippedVision(!flippedVision)}
              >
                <motion.div
                  className="w-full h-full relative preserve-3d transition-transform duration-500"
                  animate={{ rotateY: flippedVision ? 180 : 0 }}
                >
                  {/* Front Side */}
                  <div className="absolute inset-0 backface-hidden bg-navy-light/40 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-electric/40 transition-colors">
                    <div className="flex items-center space-x-3 text-electric-light">
                      <Compass className="w-6 h-6" />
                    <h4 className="font-bold text-white tracking-wide">My Vision</h4>
                    </div>
                    <p className="text-slate-400 text-xs leading-relaxed">
                      Click to see what we aim to solve for small businesses looking to establish digital authority.
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 flex items-center">
                      Flip Card <ArrowRight className="w-3 h-3 ml-1" />
                    </span>
                  </div>

                  {/* Back Side */}
                  <div className="absolute inset-0 backface-hidden bg-electric/15 border border-electric/40 rounded-xl p-6 flex flex-col justify-between [transform:rotateY(180deg)]">
                    <div className="flex items-center space-x-3 text-electric-light">
                      <Compass className="w-6 h-6" />
                    <h4 className="font-bold text-white tracking-wide">My Vision</h4>
                    </div>
                    <p className="text-white text-xs sm:text-sm font-semibold leading-relaxed">
                      &quot;To be the go-to freelancer for small businesses who need SEO and a website that work together, not two separate vendors pointing fingers at each other.&quot;
                    </p>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-electric-light">
                      Future Focus
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Quick Navigation Jump Buttons */}
            <div className="pt-6">
              <span className="text-xs uppercase font-bold tracking-widest text-slate-400 block mb-3">
                Quick Jump:
              </span>
              <div className="flex flex-wrap gap-2.5">
                {["services", "experience", "projects", "skills", "results", "faq"].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-300 border border-slate-800 rounded-lg hover:border-electric/50 hover:bg-electric/10 hover:text-white transition-all duration-200 capitalize"
                  >
                    {section === "faq" ? "FAQ" : section.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
