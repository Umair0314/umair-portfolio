"use client";

import { motion } from "framer-motion";
import {
  Link2,
  Search,
  MapPin,
  Code,
  Globe,
  Smartphone,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    id: "off-page-seo",
    icon: Link2,
    number: "01",
    title: "Off-Page SEO",
    tagline: "White-hat link building, outreach, and backlink audits that move rankings — no PBNs, no link farms.",
    accentColor: "from-electric to-blue-400",
    glowColor: "rgba(17,89,175,0.25)",
    items: [
      {
        label: "Off-Page SEO Audit",
        description: "Backlink profile health, toxic link detection, competitor gap analysis",
      },
      {
        label: "Guest Posting & Blogger Outreach",
        description: "High-authority placements through genuine relationship-based outreach",
      },
      {
        label: "Directory Submissions & Citation Building",
        description: "Consistent NAP signals across top directories and niche listings",
      },
    ],
  },
  {
    id: "on-page-seo",
    icon: Search,
    number: "02",
    title: "On-Page & Technical SEO",
    tagline: "Full-site audits and fixes that improve crawlability, relevance, and click-through rate.",
    accentColor: "from-indigo-400 to-electric-light",
    glowColor: "rgba(99,102,241,0.2)",
    items: [
      {
        label: "On-Page SEO Audit",
        description: "Titles, meta, headers, internal linking, and content gap analysis",
      },
      {
        label: "Technical Audit",
        description: "Crawl errors, canonical issues, schema markup, and Core Web Vitals",
      },
      {
        label: "Site Speed & Performance Optimization",
        description: "Image compression, caching, front-end cleanup, and PageSpeed uplift",
      },
      {
        label: "Keyword & Niche Research",
        description: "Identifying high-intent, low-competition keywords to drive targeted organic traffic",
      },
    ],
  },
  {
    id: "local-seo",
    icon: MapPin,
    number: "03",
    title: "Local SEO & Google Business Profile",
    tagline: "Get found by customers searching in your city — audit, fix, and grow your local presence.",
    accentColor: "from-sky-400 to-electric",
    glowColor: "rgba(56,189,248,0.2)",
    items: [
      {
        label: "GMB Audit",
        description: "Profile health check, category accuracy, and ranking blocker identification",
      },
      {
        label: "GMB Creation & Full Setup",
        description: "Complete onboarding for new businesses — photos, services, posts, Q&A",
      },
      {
        label: "NAP Consistency & Location-Targeted Content",
        description: "Local citations, geo-targeted landing pages, and map pack optimization",
      },
      {
        label: "Business Citations & Local SEO Link Building",
        description: "Securing authoritative local directory listings and community-driven backlinks",
      },
    ],
  },
  {
    id: "wordpress-dev",
    icon: Code,
    number: "04",
    title: "WordPress Development",
    tagline: "Custom WordPress builds and fixes — themes, plugins, and full site launches.",
    accentColor: "from-emerald-400 to-teal-500",
    glowColor: "rgba(16,185,129,0.2)",
    items: [
      {
        label: "Custom Theme & Plugin Builds",
        description: "Lightweight, secure code crafted to match precise designs and features",
      },
      {
        label: "Site Migrations & Performance Fixes",
        description: "Seamless transitions between hosts and performance debugging for speed",
      },
      {
        label: "Ongoing Maintenance & SEO Integration",
        description: "System updates, security scans, and configuration of Rank Math SEO tools",
      },
    ],
  },
  {
    id: "nextjs-dev",
    icon: Globe,
    number: "05",
    title: "Next.js & React Web Apps",
    tagline: "Modern, fast web applications built with an AI-assisted workflow for speed without cutting corners.",
    accentColor: "from-purple-400 to-pink-500",
    glowColor: "rgba(168,85,247,0.2)",
    items: [
      {
        label: "Full-Stack App Development",
        description: "Leveraging Next.js App Router, Tailwind CSS, Supabase, and PostgreSQL",
      },
      {
        label: "SaaS MVP Builds",
        description: "Taking your product from specification to active landing page and launch",
      },
      {
        label: "API Integrations & Payments",
        description: "Connecting Stripe payment gateways, external webhooks, and third-party tools",
      },
    ],
  },
  {
    id: "flutter-dev",
    icon: Smartphone,
    number: "06",
    title: "Flutter Mobile App Development",
    tagline: "Cross-platform mobile apps built and shipped fast.",
    accentColor: "from-orange-400 to-amber-500",
    glowColor: "rgba(249,115,22,0.2)",
    items: [
      {
        label: "Android/iOS App Builds",
        description: "Shared Dart codebase compiling to native high-performance mobile apps",
      },
      {
        label: "AI-Assisted Prototyping",
        description: "Rapid development workflows turning wireframes into interactive mockups",
      },
      {
        label: "App Store Deployment Support",
        description: "Handling production builds, metadata prep, and developer account setup",
      },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 20 },
  },
};

export default function Services() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="services"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#07152A] via-navy to-navy-dark overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[400px] h-[400px] bg-electric/10 rounded-full blur-[110px]" />
        <div className="absolute bottom-[10%] right-[5%] w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,_transparent_60%,_#05101E_100%)]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <span className="text-electric-light font-bold text-xs uppercase tracking-widest mb-3">
            What I Offer
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
            Services I Offer
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-electric to-electric-light mt-5 rounded-full" />
          <p className="mt-6 text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed">
            End-to-end SEO and development — strategy, execution, and the code that ships it.
            Every service is driven by data, built on white-hat fundamentals, and focused on sustainable, long-term growth.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.015 }}
                transition={{ type: "spring" as const, stiffness: 300, damping: 22 }}
                className="group relative rounded-2xl border border-slate-800 bg-navy-light/30 backdrop-blur-sm overflow-hidden flex flex-col"
                style={{
                  boxShadow: `0 0 0 1px rgba(255,255,255,0.03), 0 20px 60px -20px ${service.glowColor}`,
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${service.glowColor} 0%, transparent 70%)`,
                  }}
                />

                {/* Top accent line */}
                <div className={`h-1 w-full bg-gradient-to-r ${service.accentColor}`} />

                <div className="p-7 md:p-8 flex flex-col flex-1">
                  {/* Icon row */}
                  <div className="mb-6 flex justify-center">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br ${service.accentColor} shadow-lg`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-extrabold text-white mb-3 leading-snug text-center">
                    {service.title}
                  </h3>

                  {/* Tagline */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-7 border-b border-slate-800 pb-6 min-h-[50px] text-center">
                    {service.tagline}
                  </p>

                  {/* Service items */}
                  <ul className="space-y-4 flex-1">
                    {service.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + idx * 0.07, duration: 0.35 }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle2 className="w-4.5 h-4.5 text-electric-light shrink-0 mt-0.5" />
                        <div>
                          <span className="block text-sm font-semibold text-white">
                            {item.label}
                          </span>
                          <span className="block text-xs text-slate-500 leading-relaxed mt-0.5">
                            {item.description}
                          </span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToContact();
                    }}
                    className={`mt-8 inline-flex items-center justify-center gap-2 text-sm font-bold bg-gradient-to-r ${service.accentColor} bg-clip-text text-transparent group/link`}
                  >
                    Get a free audit
                    <ChevronRight className="w-4 h-4 text-electric-light transition-transform group-hover/link:translate-x-1 duration-200" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Section bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <button
            onClick={scrollToContact}
            className="group inline-flex items-center space-x-2 px-8 py-4 rounded-xl text-sm font-semibold uppercase tracking-wider text-white bg-electric hover:bg-electric-light transition-all duration-300 shadow-[0_0_20px_rgba(17,89,175,0.3)] hover:shadow-[0_0_25px_rgba(17,89,175,0.5)] focus:outline-none"
          >
            <span>Discuss Your Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
        </motion.div>

        {/* Bottom trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-10 text-slate-500 text-xs font-semibold uppercase tracking-widest"
        >
          {["White-Hat Only", "No PBNs Ever", "Data-Driven Strategy", "Transparent Reporting"].map(
            (badge) => (
              <span
                key={badge}
                className="flex items-center gap-2 border border-slate-800 rounded-full px-4 py-2 bg-navy-light/20"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-electric inline-block" />
                {badge}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
