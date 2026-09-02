"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="relative py-28 px-6 md:px-12 bg-navy overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col mb-16 md:mb-24 items-center text-center">
          <span className="text-electric-light font-bold text-xs uppercase tracking-widest mb-2">
            Qualifications
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Certificates
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative w-full max-w-4xl aspect-[1.414] rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <Image
              src="/muhammad-umair.jpg"
              alt="Muhammad Umair Semrush Certificate"
              fill
              className="object-contain bg-navy-light/40"
              sizes="(max-w-1024px) 100vw, 1024px"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
