import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certificates from "@/components/Certificates";

export default function Home() {
  const baseUrl = "https://muhammadumair.com";

  // Schema.org Person definition for LLM & Search Engine discovery
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Muhammad Umair",
    "jobTitle": "SEO Specialist & Web/App Developer",
    "url": baseUrl,
    "image": `${baseUrl}/umair.jpeg`,
    "sameAs": [
      "https://www.linkedin.com/in/muhammad-umair-0a7b69125/",
      "https://fiverr.com/hafizumair14"
    ],
    "knowsAbout": [
      "SEO Specialist",
      "Off-Page SEO",
      "On-Page SEO",
      "Technical SEO",
      "Local SEO",
      "Google Business Profile Optimization",
      "Web Development",
      "WordPress Development",
      "Next.js Development",
      "React Development",
      "Flutter Development",
      "AI-Assisted Development",
      "Vibe Coding"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sahiwal",
      "addressCountry": "PK"
    }
  };

  // Schema.org ProfessionalService catalog definition
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Muhammad Umair - SEO Expert & Web/App Developer",
    "image": `${baseUrl}/umair.jpeg`,
    "telephone": "+923131786840",
    "email": "m.umair0314@gmail.com",
    "url": baseUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sahiwal",
      "addressRegion": "Punjab",
      "addressCountry": "PK"
    },
    "areaServed": "Worldwide",
    "priceRange": "$$",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SEO & Development Services Catalog",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Off-Page SEO",
            "description": "White-hat link building, blogger outreach, and guest posting campaigns to build organic authority without PBNs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "On-Page & Technical SEO",
            "description": "Full-site technical audits, header hierarchies, keyword density optimization, speed performance, and Core Web Vitals fixes."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Local SEO & Google Business Profile",
            "description": "Optimizing local citations, ensuring Name-Address-Phone (NAP) consistency, and ranking map packs."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WordPress Development",
            "description": "Custom lightweight theme and plugin development, performance tuning, and migrations."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Next.js & React Web Apps",
            "description": "Building lightning-fast full-stack web applications with Tailwind, Supabase, Stripe, and modern layouts."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Flutter Mobile App Development",
            "description": "Native cross-platform Android and iOS application construction with rapid AI-assisted prototyping."
          }
        }
      ]
    }
  };

  // Schema.org FAQPage definition matching website FAQ content
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the best way to hire an SEO expert?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The best way to hire an SEO expert is to look for a practitioner who communicates transparently, relies on white-hat strategies, and provides evidence of real ranking growth. Avoid vendors who promise instant overnight rankings or refuse to share their exact link-building methods. A reliable expert will start by auditing your technical profile and setting clear keyword growth objectives."
        }
      },
      {
        "@type": "Question",
        "name": "What's the difference between on-page and off-page SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "On-page SEO refers to optimizations made directly on your website, such as improving content relevance, titles, meta tags, and header hierarchy. Off-page SEO focuses on signals external to your site, primarily acquiring authoritative, white-hat backlinks through guest blogging, outreach, and directory citations. Both are critical: on-page SEO makes your site search-engine readable, while off-page SEO builds the domain authority required to rank high."
        }
      },
      {
        "@type": "Question",
        "name": "How does local SEO and Google Business Profile optimization work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Local SEO works by matching search intent for location-specific queries, making sure your business shows up in Google's Map Pack. This involves setting up and optimizing a Google Business Profile (GMB/GBP) with accurate categories, localized keywords, and fresh photos. Consistent Name, Address, and Phone (NAP) citations across business directories are also built to verify your local footprint."
        }
      },
      {
        "@type": "Question",
        "name": "Do you build websites as well as do SEO?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I build fully optimized websites in addition to doing search engine optimization. I design and code websites using WordPress (with custom themes/plugins) and Next.js/React. Doing both ensures your website is built from the ground up with clean semantic HTML, fast load times, and technical SEO configurations, eliminating the gap between developer handoffs and SEO audits."
        }
      },
      {
        "@type": "Question",
        "name": "Can you build mobile apps too?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, I build native cross-platform mobile apps for Android and iOS using the Flutter framework. By combining core Dart coding with AI-assisted vibe programming workflows, I can build and prototype functional mobile applications rapidly. I also assist with developer account setup and submission guidelines for both the Apple App Store and Google Play Store."
        }
      },
      {
        "@type": "Question",
        "name": "How long does SEO take to show results?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "SEO typically takes between 3 to 6 months to start showing meaningful ranking improvements and organic traffic growth. The exact timeline depends on your domain authority, competitor difficulty, and starting technical profile. Technical audits and on-page optimization can yield quick indexation improvements, whereas off-page link-building builds equity over a multi-month timeline."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-navy text-slate-100 flex flex-col selection:bg-electric selection:text-white">
      {/* JSON-LD Structured Data Injection for AEO/SEO/GEO engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header / Sticky Nav */}
      <Navbar />

      {/* Main Single Page Content */}
      <main className="flex-grow">
        {/* Landing Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Certificates Section */}
        <Certificates />

        {/* Experience Section */}
        <Experience />

        {/* Services Section */}
        <Services />

        {/* Projects / Case Studies Section */}
        <Projects />

        {/* Skills Section */}
        <Skills />

        {/* Results Section */}
        <Results />

        {/* FAQ Accordions Section */}
        <FAQ />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
