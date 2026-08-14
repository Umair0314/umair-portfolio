import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muhammadumair.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Muhammad Umair — SEO Expert & Web/App Developer | Off-Page, On-Page, Local SEO, Next.js, Flutter",
  description: "Looking for the best SEO expert? Muhammad Umair offers data-driven off-page SEO, technical on-page SEO audits, and local SEO services alongside modern web development. Hire a skilled Next.js developer, WordPress developer, and Flutter developer specialized in premium web app development and Android app development.",
  keywords: [
    "SEO expert",
    "off-page SEO",
    "on-page SEO",
    "local SEO",
    "web development",
    "web app development",
    "Android app development",
    "Next.js developer",
    "WordPress developer",
    "Flutter developer",
    "Muhammad Umair",
    "vibe coding",
  ],
  authors: [{ name: "Muhammad Umair" }],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Umair — SEO Expert & Web/App Developer",
    description: "Data-driven off-page, on-page, and local SEO combined with fast, premium web app development using WordPress, Next.js, and Flutter.",
    url: baseUrl,
    siteName: "Muhammad Umair Portfolio",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/umair.jpeg",
        width: 800,
        height: 800,
        alt: "Muhammad Umair - SEO Specialist and Web/App Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Umair — SEO Expert & Web/App Developer",
    description: "Specialist in off-page SEO link building and custom React/Next.js/Flutter application builds.",
    images: ["/umair.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Additional security and search engines verification can go here */}
      </head>
      <body className={`${inter.variable} font-sans antialiased text-slate-100 bg-navy`}>
        {children}
      </body>
    </html>
  );
}
