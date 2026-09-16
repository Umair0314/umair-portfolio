"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Search, Globe, MapPin, Code, Cpu } from "lucide-react";

// Individual Skill Progress Bar Component
function SkillBar({ name, value }: { name: string; value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 1000; // 1 second
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between text-xs sm:text-sm">
        <span className="text-slate-300 font-medium">{name}</span>
        <span className="text-electric-light font-bold">{count}%</span>
      </div>
      <div className="h-2 w-full bg-slate-900 rounded-full overflow-hidden border border-slate-800/40">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${value}%` } : {}}
          transition={{ duration: 1, ease: "easeOut" as const }}
          className="h-full bg-gradient-to-r from-electric to-electric-light rounded-full"
        />
      </div>
    </div>
  );
}

const skillsCategories = [
  {
    title: "Local SEO",
    icon: MapPin,
    skills: [
      { name: "Google Business Profile", value: 96 },
      { name: "NAP Consistency", value: 95 },
      { name: "Local Content Strategy", value: 93 }
    ]
  },
  {
    title: "Off-Page SEO",
    icon: Search,
    skills: [
      { name: "Link Building", value: 95 },
      { name: "Guest Posting & Outreach", value: 94 },
      { name: "Backlink Analysis", value: 92 },
      { name: "Directory Submissions", value: 91 }
    ]
  },
  {
    title: "On-Page & Technical SEO",
    icon: Globe,
    skills: [
      { name: "Site Audits", value: 94 },
      { name: "Schema Markup", value: 93 },
      { name: "Core Web Vitals", value: 91 },
      { name: "Keyword Research", value: 95 }
    ]
  },
  {
    title: "Web Development",
    icon: Code,
    skills: [
      { name: "WordPress (Custom Themes/Plugins)", value: 90 },
      { name: "HTML5 / CSS3 / Vanilla JS", value: 88 },
      { name: "Next.js / React.js", value: 78 },
      { name: "Flutter (App Development)", value: 70 }
    ]
  },
  {
    title: "AI-Assisted Development",
    icon: Cpu,
    skills: [
      { name: "Vibe Coding (Cursor/Antigravity)", value: 85 },
      { name: "Supabase & Postgres Database", value: 75 },
      { name: "Stripe Payment Integrations", value: 75 }
    ]
  }
];

export default function Skills() {
  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 110,
        damping: 15,
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="skills"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#08172b] to-navy overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-electric/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
          <span className="text-electric-light font-bold text-xs uppercase tracking-widest mb-2">
            Core Capabilities
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Skills &amp; Expertise
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {skillsCategories.map((category, catIdx) => {
            const Icon = category.icon;
            
            return (
              <motion.div
                key={catIdx}
                variants={cardVariants}
                className="rounded-2xl bg-navy-light/45 border border-slate-800 p-6 md:p-8 hover:border-electric/30 transition-colors shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 mb-6 border-b border-slate-850 pb-4">
                    <div className="p-2.5 rounded-lg bg-electric/10 text-electric-light border border-electric/20">
                      <Icon className="w-5.5 h-5.5" />
                    </div>
                    <h3 className="text-lg font-bold text-white tracking-wide">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-5">
                    {category.skills.map((skill, skillIdx) => (
                      <SkillBar
                        key={skillIdx}
                        name={skill.name}
                        value={skill.value}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
