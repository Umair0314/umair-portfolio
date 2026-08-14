"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, TrendingUp } from "lucide-react";

const experienceData = [
  {
    role: "Freelance SEO Specialist & Web Developer",
    company: "Self-Employed",
    period: "2021 – Present",
    location: "Sahiwal, Pakistan (Remote)",
    bullets: [
      "Delivered white-hat off-page SEO for freelance and personal projects for over 5 years, building backlink profiles through guest posting, outreach, and directory submissions — never using PBNs, link farms, or paid link schemes.",
      "Built and launched WordPress and custom-coded websites for clients using HTML/CSS/React, handling everything from layout to on-site content structure.",
      "Adopted AI-assisted 'vibe coding' workflows over the past year to speed up development of web apps and internal tools, pairing hands-on coding knowledge with AI pair-programming to ship features faster without sacrificing code quality.",
      "Managed end-to-end SEO strategy for owned web properties, tracking keyword rankings, organic traffic growth, and backlink health over multi-month campaigns.",
      "Communicated directly with freelance clients to scope SEO and development work, set realistic timelines, and report on ranking and traffic progress.",
    ],
    achievements: [
      "Took an owned property to 56,500+ clicks / 134,000+ impressions in a 28-day window via technical + on-page fixes.",
      "Adopted AI-assisted 'vibe coding' workflows over the past year, cutting feature ship time significantly while maintaining code quality.",
    ],
  },
  {
    role: "On-Page, Technical & Local SEO Focus",
    company: "Self-directed / Freelance Projects",
    period: "2025 – Present",
    location: "Sahiwal, Pakistan",
    bullets: [
      "Ran full technical SEO audits identifying crawl errors, canonical tag issues, thin content, and missing schema, then implemented fixes and tracked ranking recovery.",
      "Optimized on-page elements — titles, meta descriptions, header structure, internal linking — to improve relevance and click-through rate for target keywords.",
      "Set up local SEO fundamentals including Google Business Profile optimization and location-targeted content to improve visibility in local search results.",
      "Improved site performance scores through image optimization, caching, and front-end cleanup, working alongside on-page SEO improvements.",
    ],
    achievements: [
      "Improved PageSpeed mobile score from 54 to 78 on an owned property.",
      "Built and shipped multiple location-targeted content clusters for local service sites.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-navy to-navy-dark overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[30%] right-[5%] w-[300px] h-[300px] bg-electric/10 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Work Experience
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Cards Stack */}
        <div className="space-y-10">
          {experienceData.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-120px" }}
              transition={{ type: "spring" as const, stiffness: 80, damping: 20, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-navy-light/35 border border-slate-800 glow-card p-6 md:p-8 flex flex-col"
            >
              {/* Curtain Overlay Animation */}
              <motion.div
                initial={{ scaleX: 1 }}
                whileInView={{ scaleX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeInOut" as const, delay: index * 0.15 }}
                className="absolute inset-0 bg-electric z-30 origin-right"
              />

              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-electric to-electric-light" />

              {/* Metadata Panel */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#05101E] border-2 border-electric flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(17,89,175,0.4)]">
                    <Briefcase className="w-4 h-4 text-electric-light" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-white tracking-wide">
                      {exp.role}
                    </h3>
                    <span className="text-electric-light text-sm font-semibold tracking-wide">
                      {exp.company}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-1.5 text-slate-400 bg-navy-light/60 border border-slate-800 px-3 py-1 rounded-full text-xs font-semibold self-start shrink-0">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{exp.period}</span>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <div className="space-y-4 mb-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 block border-b border-slate-800 pb-2">
                  Key Responsibilities
                </span>
                <ul className="space-y-3.5">
                  {exp.bullets.map((bullet, bulletIdx) => (
                    <motion.li
                      key={bulletIdx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + bulletIdx * 0.07, duration: 0.3 }}
                      className="flex items-start space-x-3 text-xs sm:text-sm text-slate-300 leading-relaxed"
                    >
                      <CheckCircle2 className="w-4 h-4 text-electric-light shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Achievements Section */}
              {exp.achievements && (
                <div className="mt-auto pt-4 border-t border-slate-800 bg-[#08172b]/50 -mx-6 -mb-6 p-6 md:-mx-8 md:-mb-8 md:p-8 rounded-b-2xl">
                  <div className="flex items-center space-x-2 text-electric-light mb-3">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-xs uppercase font-extrabold tracking-widest text-white">
                      Key Achievements
                    </span>
                  </div>
                  <ul className="space-y-2.5">
                    {exp.achievements.map((ach, achIdx) => (
                      <li
                        key={achIdx}
                        className="text-xs sm:text-sm text-slate-200 pl-4 border-l-2 border-electric leading-relaxed"
                      >
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
