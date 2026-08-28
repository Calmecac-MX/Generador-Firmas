import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        calmecac: {
          dark: "#08080a",
          card: "#111317",
          cardHover: "#181c23",
          border: "#202732",
          orange: "#10b981", // Primary Esmeralda Tech Accent
          orangeHover: "#059669",
          emerald: "#10b981",
          emeraldHover: "#059669",
          amber: "#f59e0b",
          gold: "#d97706",
          cyan: "#06b6d4",
          text: "#f4f4f5",
          muted: "#a1a1aa",
          subtle: "#71717a",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "Courier New", "monospace"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(16, 185, 129, 0.3)",
        "glow-amber": "0 0 20px rgba(245, 158, 11, 0.25)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
      },
    },
  },
  plugins: [],
};

export default config;
