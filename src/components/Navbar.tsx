"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Certificates", id: "certificates" },
  { label: "Experience", id: "experience" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Results", id: "results" },
  { label: "FAQ", id: "faq" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver to watch which section is currently active in the viewport
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -50% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0B1F3A]/80 backdrop-blur-md border-b border-electric/20 py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection("home")}
            className="flex items-center space-x-2.5 group focus:outline-none"
          >
            <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-electric/50 shadow-[0_0_12px_rgba(17,89,175,0.4)] group-hover:scale-105 transition-transform duration-200 shrink-0">
              <Image
                src="/umair.jpeg"
                alt="Muhammad Umair"
                fill
                className="object-cover"
                sizes="40px"
              />
            </div>
            <span className="font-semibold text-white tracking-wide text-lg hidden sm:inline group-hover:text-electric-light transition-colors duration-200">
              Muhammad Umair
            </span>
          </button>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-200 focus:outline-none ${
                  activeSection === item.id ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-electric"
                    transition={{ type: "spring" as const, stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center space-x-1 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-electric/40 bg-gradient-to-r from-electric/10 to-electric-light/10 hover:from-electric hover:to-electric-light transition-all duration-300 hover:border-transparent hover:shadow-[0_0_15px_rgba(17,89,175,0.4)]"
            >
              <span>Work With Me</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white focus:outline-none p-1.5 rounded-lg border border-slate-700 bg-navy-light/45"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[72px] left-0 w-full z-45 bg-[#0B1F3A]/95 backdrop-blur-lg border-b border-electric/30 md:hidden flex flex-col px-6 py-8 space-y-4 shadow-xl"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left py-3.5 px-4 rounded-xl text-base font-semibold tracking-wide border transition-all duration-200 ${
                  activeSection === item.id
                    ? "bg-electric/25 border-electric text-white shadow-[inset_0_0_10px_rgba(17,89,175,0.2)]"
                    : "border-transparent text-slate-400 hover:bg-slate-800/40 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="w-full mt-4 flex items-center justify-center space-x-2 py-4 rounded-xl font-bold uppercase tracking-wider text-white bg-electric shadow-[0_0_15px_rgba(17,89,175,0.4)] hover:bg-electric-light transition-all duration-200"
            >
              <span>Get In Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
