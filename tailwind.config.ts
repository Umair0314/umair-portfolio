import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: "#173155",
          DEFAULT: "#0B1F3A",
          dark: "#05101E",
        },
        electric: {
          light: "#2578E0",
          DEFAULT: "#1159AF",
          dark: "#0B3C78",
          glow: "#3b82f6",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
