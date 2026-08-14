"use client";

import { motion } from "framer-motion";
import { FolderGit2, Check, ExternalLink } from "lucide-react";

const projectsData = [
  {
    title: "Rotten Deck Repair",
    type: "Full Site Build & SEO · Ongoing",
    desc: "A comprehensive rank-and-rent WordPress project consisting of 47 published pages structured across 12 release phases. Features full Rank Math SEO setup including homepage, trust pages, localized service pages, neighborhood pages, and 15 blog posts, each supported by detailed structured schema markup.",
    outcomes: [
      "47 pages shipped with full on-page SEO structure",
      "Complete schema implementation (LocalBusiness, WebPage, FAQPage, Service)",
      "Sitewide brand color migration executed via CSS overrides and direct content updates"
    ],
    tech: ["WordPress", "Kadence Theme", "Rank Math Pro", "Royal MCP"],
    link: null
  },
  {
    title: "Fence Rockwall Texas",
    type: "Full Site Build & Local SEO · Ongoing",
    desc: "A localized service business website built using WordPress and the Kadence theme with a Stonecorner starter. Designed to rank for Rockwall, TX and surrounding cities (Heath, Fate, Rowlett, Royse City) using hyperlocal, hand-verified content optimized to meet keyword density constraints.",
    outcomes: [
      "Ran a full technical SEO audit via Search Console data",
      "Built out city/location landing page strategy from zero existing pages",
      "Applied 8th-grade readability score and cited real statutes for trust and E-E-A-T"
    ],
    tech: ["WordPress", "Kadence Theme", "Rank Math", "Royal MCP"],
    link: null
  },
  {
    title: "FlagCreators",
    type: "Micro-SaaS Product · Built & Shipped",
    desc: "An AI-powered flag design micro-SaaS web app built on Next.js 14, enabling users to create flag designs using AI. The project spans from a custom drawing canvas to a subscription model and fulfillment print-on-demand webhooks.",
    outcomes: [
      "Built full-stack with Next.js, Supabase, Stripe, and Gemini 2.5 Flash",
      "Shipped a 3-tier pricing model (Free / $2.99 / $4.99)",
      "Fixed canonical tag errors, meta duplication, and indexing issues post-launch"
    ],
    tech: ["Next.js 14", "Tailwind CSS", "Fabric.js", "Supabase", "Stripe", "Gemini 2.5 Flash", "Printful API"],
    link: null
  },
  {
    title: "ReceiptsFaker",
    type: "Owned SaaS Tool · Live",
    desc: "A highly-optimized online receipt maker and generator tool featuring optimized landing pages targeting 18 popular stores. The tool and index structure was designed, developed, and optimized independently end-to-end to capture search demand.",
    outcomes: [
      "28-day GSC results: 56,500+ clicks and 134,000+ impressions",
      "Mobile Google PageSpeed score improved from 54 to 78",
      "Resolved complex canonical bugs and optimized 18 store-specific landing pages"
    ],
    tech: ["WordPress", "Rank Math", "PageSpeed optimization", "Tailwind CSS"],
    link: null
  }
];

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { 
      y: 50, 
      opacity: 0,
      filter: "blur(8px)" 
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      filter: "blur(0px)",
      transition: {
        type: "spring" as const,
        stiffness: 90,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const bulletVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (idx: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: idx * 0.1,
        type: "spring" as const,
        stiffness: 100,
        damping: 10
      }
    })
  };

  const tagVariants = {
    hidden: { scale: 0, rotate: -5 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring" as const,
        stiffness: 200,
        damping: 12
      }
    }
  };

  return (
    <section
      id="projects"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-navy-dark via-navy to-navy-light/20 overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-[30%] left-[5%] w-[400px] h-[400px] bg-electric/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <span className="text-electric-light font-bold text-xs uppercase tracking-widest mb-2">
            Case Studies & SaaS
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Project Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {projectsData.map((project, pIdx) => (
            <motion.div
              key={pIdx}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="flex flex-col justify-between rounded-2xl bg-navy-light/45 border border-slate-800 p-6 sm:p-8 hover:border-electric/40 transition-colors shadow-lg hover:shadow-[0_15px_35px_rgba(17,89,175,0.15)] overflow-hidden relative group"
            >
              {/* Corner decorative light effect */}
              <div className="absolute -top-12 -right-12 w-24 h-24 bg-electric/20 rounded-full blur-2xl group-hover:bg-electric-light/35 transition-colors duration-300" />

              <div>
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 rounded-xl bg-electric/10 text-electric-light border border-electric/25">
                    <FolderGit2 className="w-6 h-6" />
                  </div>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors p-2"
                      aria-label={`Visit ${project.title}`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>

                {/* Meta */}
                <span className="text-[10px] uppercase font-bold tracking-widest text-electric-light/90 block mb-1.5">
                  {project.type}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 group-hover:text-electric-light transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Outcomes */}
                <div className="space-y-3 mb-8">
                  <span className="text-[10px] uppercase font-extrabold tracking-widest text-slate-400 block border-b border-slate-850 pb-2">
                    Key Outcomes &amp; Deliverables
                  </span>
                  <div className="space-y-2.5">
                    {project.outcomes.map((outcome, oIdx) => (
                      <motion.div
                        key={oIdx}
                        custom={oIdx}
                        variants={bulletVariants}
                        className="flex items-start space-x-3 text-xs sm:text-sm text-slate-200"
                      >
                        <span className="w-4.5 h-4.5 rounded-full bg-electric/15 border border-electric/40 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 text-electric-light" />
                        </span>
                        <span>{outcome}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tech stack pills */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-850">
                {project.tech.map((t, tIdx) => (
                  <motion.span
                    key={tIdx}
                    variants={tagVariants}
                    className="px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-semibold bg-navy-light border border-slate-800 text-slate-300 hover:text-white hover:border-electric/30 hover:bg-electric/10 transition-colors"
                  >
                    {t}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
