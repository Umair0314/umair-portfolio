"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { TrendingUp, MousePointerClick, Eye, Share2, Layers } from "lucide-react";

// Stat Counter subcomponent
function StatCounter({
  target,
  duration = 1500,
  suffix = "",
  decimals = 0
}: {
  target: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (isInView) {
      const start = 0;
      const end = target;
      const totalSteps = 60;
      const stepTime = duration / totalSteps;
      const increment = (end - start) / totalSteps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const nextVal = start + increment * currentStep;
        if (currentStep >= totalSteps) {
          setVal(end);
          clearInterval(timer);
        } else {
          setVal(nextVal);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {val.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function Results() {
  const stats = [
    {
      label: "Total Clicks (28 Days)",
      target: 56.5,
      decimals: 1,
      suffix: "K",
      icon: MousePointerClick
    },
    {
      label: "Total Impressions (28 Days)",
      target: 134,
      decimals: 0,
      suffix: "K",
      icon: Eye
    },
    {
      label: "Pages Shipped (Rotten Deck)",
      target: 47,
      decimals: 0,
      suffix: "",
      icon: Layers
    },
    {
      label: "Landing Pages (ReceiptsFaker)",
      target: 18,
      decimals: 0,
      suffix: "",
      icon: Share2
    }
  ];

  return (
    <section
      id="results"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-navy to-navy-dark overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-[10%] right-[10%] w-[350px] h-[350px] bg-electric/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Results, Not Just Claims
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Device Mockup displaying GSC Screenshot */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" as const }}
              className="relative w-full rounded-2xl bg-navy-light/40 border border-slate-800 shadow-[0_20px_50px_rgba(17,89,175,0.15)] overflow-hidden"
            >
              {/* Browser bar */}
              <div className="w-full h-11 bg-navy-dark/80 border-b border-slate-850 px-4 flex items-center justify-between">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="text-[10px] sm:text-xs text-slate-500 font-mono tracking-wide">
                  Google Search Console · Performance
                </div>
                <div className="w-6" /> {/* Spacer */}
              </div>

              {/* Image Frame */}
              <div className="relative p-2 bg-[#05101E]">
                <div className="relative aspect-[16/10] w-full rounded-lg overflow-hidden border border-slate-900">
                  <Image
                    src="/gsc_growth.jpeg"
                    alt="Google Search Console 28 Day Performance Growth"
                    fill
                    className="object-cover"
                    sizes="(max-w-768px) 100vw, 600px"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Stat blocks Grid */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-electric-light">
                <TrendingUp className="w-5 h-5 animate-pulse" />
                <span className="text-xs uppercase font-extrabold tracking-widest text-slate-400">
                  Proof of Performance
                </span>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">
                Here is a direct look at the organic performance of one of my personal SEO properties. By identifying and fixing technical errors, setting clean canonical structures, and building a high-authority backlink strategy, the project saw explosive, exponential growth in search traffic.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, idx) => {
                const Icon = stat.icon;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.4 }}
                    className="p-5 rounded-xl bg-navy-light/35 border border-slate-800 hover:border-electric/30 transition-colors shadow-md flex flex-col justify-between"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block">
                        {stat.label.split(" (")[0]}
                      </span>
                      <Icon className="w-4 h-4 text-electric-light" />
                    </div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      <StatCounter
                        target={stat.target}
                        suffix={stat.suffix}
                        decimals={stat.decimals}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
