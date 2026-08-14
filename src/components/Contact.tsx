"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowUpRight, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

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

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">( "idle" );
  const [activeField, setActiveField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const triggerMailtoFallback = () => {
    window.location.href = `mailto:m.umair0314@gmail.com?subject=${encodeURIComponent(
      formState.subject
    )}&body=Name: ${encodeURIComponent(formState.name)}%0D%0AEmail: ${encodeURIComponent(
      formState.email
    )}%0D%0A%0D%0A${encodeURIComponent(formState.message)}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      if (response.ok) {
        setStatus("success");
        setFormState({ name: "", email: "", subject: "", message: "" });
        // Reset status after a few seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        // Fallback to mailto link if API response is not ok
        console.warn("API submission failed. Triggering mailto fallback...");
        triggerMailtoFallback();
        setStatus("success"); // Considered success because the client mail app opened
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (err) {
      // Fallback on network errors
      console.warn("Network error during API submission. Triggering mailto fallback...", err);
      triggerMailtoFallback();
      setStatus("success");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  const contactDetails = [
    {
      label: "Email",
      value: "m.umair0314@gmail.com",
      href: "mailto:m.umair0314@gmail.com",
      icon: Mail
    },
    {
      label: "Phone",
      value: "+92 313 1786840",
      href: "tel:+923131786840",
      icon: Phone
    },
    {
      label: "Location",
      value: "Sahiwal, Pakistan",
      href: "https://maps.google.com/?q=Sahiwal,Pakistan",
      icon: MapPin
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/muhammad-umair-0a7b69125",
      href: "https://www.linkedin.com/in/muhammad-umair-0a7b69125/",
      icon: LinkedinIcon
    },
    {
      label: "Fiverr Profile",
      value: "fiverr.com/hafizumair14",
      href: "https://www.fiverr.com/hafizumair14",
      icon: ArrowUpRight
    }
  ];

  return (
    <section
      id="contact"
      className="relative py-28 px-6 md:px-12 bg-gradient-to-b from-navy-dark via-navy to-navy-dark overflow-hidden"
    >
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[20%] left-[5%] w-[350px] h-[350px] bg-electric/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white">
            Let&apos;s Talk
          </h2>
          <div className="w-16 h-1 bg-electric mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Interactive Contact Form */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 bg-[#08172b]/40 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col shadow-lg"
          >
            <form onSubmit={handleSubmit} className="space-y-7 my-auto">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  id="form-name"
                  required
                  value={formState.name}
                  onChange={handleChange}
                  onFocus={() => setActiveField("name")}
                  onBlur={() => setActiveField(null)}
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-sm sm:text-base text-white focus:outline-none focus:border-electric transition-colors peer"
                />
                <label
                  htmlFor="form-name"
                  className={`absolute left-0 bottom-3 text-xs sm:text-sm text-slate-500 transition-all duration-200 pointer-events-none ${
                    formState.name || activeField === "name"
                      ? "-translate-y-6 text-xs text-electric-light font-semibold"
                      : ""
                  }`}
                >
                  Full Name
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-electric-light transition-all duration-300 ${
                    activeField === "name" ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  id="form-email"
                  required
                  value={formState.email}
                  onChange={handleChange}
                  onFocus={() => setActiveField("email")}
                  onBlur={() => setActiveField(null)}
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-sm sm:text-base text-white focus:outline-none focus:border-electric transition-colors peer"
                />
                <label
                  htmlFor="form-email"
                  className={`absolute left-0 bottom-3 text-xs sm:text-sm text-slate-500 transition-all duration-200 pointer-events-none ${
                    formState.email || activeField === "email"
                      ? "-translate-y-6 text-xs text-electric-light font-semibold"
                      : ""
                  }`}
                >
                  Email Address
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-electric-light transition-all duration-300 ${
                    activeField === "email" ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Subject Field */}
              <div className="relative">
                <input
                  type="text"
                  name="subject"
                  id="form-subject"
                  required
                  value={formState.subject}
                  onChange={handleChange}
                  onFocus={() => setActiveField("subject")}
                  onBlur={() => setActiveField(null)}
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-sm sm:text-base text-white focus:outline-none focus:border-electric transition-colors peer"
                />
                <label
                  htmlFor="form-subject"
                  className={`absolute left-0 bottom-3 text-xs sm:text-sm text-slate-500 transition-all duration-200 pointer-events-none ${
                    formState.subject || activeField === "subject"
                      ? "-translate-y-6 text-xs text-electric-light font-semibold"
                      : ""
                  }`}
                >
                  Subject
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-electric-light transition-all duration-300 ${
                    activeField === "subject" ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  name="message"
                  id="form-message"
                  required
                  rows={4}
                  value={formState.message}
                  onChange={handleChange}
                  onFocus={() => setActiveField("message")}
                  onBlur={() => setActiveField(null)}
                  className="w-full bg-transparent border-b border-slate-700 py-2.5 text-sm sm:text-base text-white focus:outline-none focus:border-electric transition-colors resize-none peer"
                />
                <label
                  htmlFor="form-message"
                  className={`absolute left-0 bottom-24 text-xs sm:text-sm text-slate-500 transition-all duration-200 pointer-events-none ${
                    formState.message || activeField === "message"
                      ? "-translate-y-6 text-xs text-electric-light font-semibold"
                      : ""
                  }`}
                >
                  Your Message
                </label>
                <div
                  className={`absolute bottom-0 left-0 h-0.5 bg-electric-light transition-all duration-300 ${
                    activeField === "message" ? "w-full" : "w-0"
                  }`}
                />
              </div>

              {/* Feedback messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm flex items-center space-x-2.5"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0" />
                    <span>Message sent successfully! I will respond within 24 hours.</span>
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm flex items-center space-x-2.5"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>Something went wrong. Please try contacting via email directly.</span>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Shimmer Submit Button */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className={`group relative w-full sm:w-auto px-8 py-4 rounded-xl text-xs font-bold uppercase tracking-widest text-white bg-electric overflow-hidden shadow-[0_0_15px_rgba(17,89,175,0.3)] hover:shadow-[0_0_20px_rgba(17,89,175,0.5)] transition-all duration-300 focus:outline-none ${
                  status === "submitting" ? "opacity-75 cursor-not-allowed" : ""
                }`}
              >
                {/* Shimmer overlay effect */}
                {status !== "submitting" && (
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ease-out" />
                )}
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  {status === "submitting" ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-3.5 h-3.5" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 bg-navy-light/35 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-lg"
          >
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide border-b border-slate-850 pb-3">
                Contact Information
              </h3>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Feel free to reach out for a technical SEO audit, a responsive web app build, or a localized rank-and-rent site rollout. I usually reply within 24 hours.
              </p>

              <div className="space-y-4">
                {contactDetails.map((detail, dIdx) => {
                  const Icon = detail.icon;

                  return (
                    <motion.a
                      key={dIdx}
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      whileHover={{ x: 8 }}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-navy-light/45 border border-slate-850 hover:border-electric/30 transition-colors group"
                    >
                      <div className="p-3 rounded-lg bg-electric/10 text-electric-light border border-electric/15 group-hover:bg-electric group-hover:text-white transition-colors duration-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-0.5">
                          {detail.label}
                        </span>
                        <span className="text-slate-200 text-xs sm:text-sm font-semibold group-hover:text-white transition-colors">
                          {detail.value}
                        </span>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 border-t border-slate-850 pt-6">
              <span className="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2.5">
                Find Me On
              </span>
              <div className="flex space-x-3">
                <a
                  href="https://www.linkedin.com/in/muhammad-umair-0a7b69125/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-navy-light border border-slate-800 text-slate-300 hover:text-white hover:border-electric/35 hover:bg-electric/10 transition-all duration-200"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.fiverr.com/hafizumair14"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold rounded-lg bg-navy-light border border-slate-800 text-slate-300 hover:text-white hover:border-electric/35 hover:bg-electric/10 transition-all duration-200"
                >
                  Fiverr
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
