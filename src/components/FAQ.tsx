"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqData = [
  {
    question: "What is the best way to hire an SEO expert?",
    answer: "The best way to hire an SEO expert is to look for a practitioner who communicates transparently, relies on white-hat strategies, and provides evidence of real ranking growth. Avoid vendors who promise instant overnight rankings or refuse to share their exact link-building methods. A reliable expert will start by auditing your technical profile and setting clear keyword growth objectives.",
  },
  {
    question: "What's the difference between on-page and off-page SEO?",
    answer: "On-page SEO refers to optimizations made directly on your website, such as improving content relevance, titles, meta tags, and header hierarchy. Off-page SEO focuses on signals external to your site, primarily acquiring authoritative, white-hat backlinks through guest blogging, outreach, and directory citations. Both are critical: on-page SEO makes your site search-engine readable, while off-page SEO builds the domain authority required to rank high.",
  },
  {
    question: "How does local SEO and Google Business Profile optimization work?",
    answer: "Local SEO works by matching search intent for location-specific queries, making sure your business shows up in Google's Map Pack. This involves setting up and optimizing a Google Business Profile (GMB/GBP) with accurate categories, localized keywords, and fresh photos. Consistent Name, Address, and Phone (NAP) citations across business directories are also built to verify your local footprint.",
  },
  {
    question: "Do you build websites as well as do SEO?",
    answer: "Yes, I build fully optimized websites in addition to doing search engine optimization. I design and code websites using WordPress (with custom themes/plugins) and Next.js/React. Doing both ensures your website is built from the ground up with clean semantic HTML, fast load times, and technical SEO configurations, eliminating the gap between developer handoffs and SEO audits.",
  },
  {
    question: "Can you build mobile apps too?",
    answer: "Yes, I build native cross-platform mobile apps for Android and iOS using the Flutter framework. By combining core Dart coding with AI-assisted vibe programming workflows, I can build and prototype functional mobile applications rapidly. I also assist with developer account setup and submission guidelines for both the Apple App Store and Google Play Store.",
  },
  {
    question: "How long does SEO take to show results?",
    answer: "SEO typically takes between 3 to 6 months to start showing meaningful ranking improvements and organic traffic growth. The exact timeline depends on your domain authority, competitor difficulty, and starting technical profile. Technical audits and on-page optimization can yield quick indexation improvements, whereas off-page link-building builds equity over a multi-month timeline.",
  },
  {
    question: "Do you use PBNs, link farms, or paid link schemes?",
    answer: "No, I never use Private Blog Networks (PBNs), link farms, or paid link schemes. I follow strictly white-hat off-page guidelines, building links via guest posting, relationship outreach, and authentic directory submissions. This avoids search penalties and ensures that your traffic growth remains stable and sustainable over the long term.",
  },
  {
    question: "What is your development stack of choice?",
    answer: "My primary development stack consists of Next.js 14, React.js, Tailwind CSS, Supabase, and PostgreSQL for web applications, WordPress (using Kadence or block frameworks) for standard corporate and local SEO sites, and Flutter for mobile applications. This selection allows me to deliver clean code, secure databases, and optimal performance.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-[#08172b] to-navy overflow-hidden"
    >
      {/* Visual background details */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-electric/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[25%] left-[5%] w-[300px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20 items-center text-center">
          <span className="text-electric-light font-bold text-xs uppercase tracking-widest mb-3">
            Got Questions?
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        {/* Accordions list */}
        <div className="space-y-4">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-800 bg-navy-light/20 backdrop-blur-sm overflow-hidden transition-all duration-300"
                style={{
                  boxShadow: isOpen ? "0 4px 20px -2px rgba(17,89,175,0.15)" : "none",
                  borderColor: isOpen ? "rgba(17,89,175,0.3)" : "rgba(30, 41, 59, 1)",
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none group"
                >
                  <div className="flex items-center space-x-3.5 pr-4">
                    <HelpCircle
                      className={`w-5 h-5 transition-colors duration-300 shrink-0 ${
                        isOpen ? "text-electric-light" : "text-slate-500 group-hover:text-slate-400"
                      }`}
                    />
                    <h3
                      className={`text-sm sm:text-base md:text-lg font-bold transition-colors duration-300 ${
                        isOpen ? "text-white" : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {item.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-500 transition-transform duration-300 shrink-0 ${
                      isOpen ? "rotate-180 text-electric-light" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-6 md:px-6 md:pb-8 text-xs sm:text-sm md:text-base text-slate-300 leading-relaxed pl-12 border-t border-slate-850 pt-4 bg-[#08172b]/30">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
