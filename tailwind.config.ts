import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        blob: {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "33%": { transform: "translate(40px, -60px) scale(1.12)" },
          "66%": { transform: "translate(-30px, 30px) scale(0.88)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% center" },
          "50%": { backgroundPosition: "100% center" },
        },
        "shimmer-slide": {
          "0%": { transform: "translateX(-100%) skewX(-12deg)" },
          "100%": { transform: "translateX(300%) skewX(-12deg)" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", filter: "drop-shadow(0 0 8px rgba(13,151,235,0.6))" },
          "50%": { opacity: "0.8", filter: "drop-shadow(0 0 20px rgba(13,151,235,1))" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "counter-glow": {
          "0%, 100%": { textShadow: "0 0 10px rgba(255,255,255,0.4)" },
          "50%": { textShadow: "0 0 30px rgba(255,255,255,0.9), 0 0 60px rgba(255,255,255,0.4)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        "border-spin": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
      animation: {
        blob: "blob 10s ease-in-out infinite",
        "blob-slow": "blob 16s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "gradient-shift": "gradient-shift 5s linear infinite",
        "shimmer-slide": "shimmer-slide 3.5s linear infinite",
        "glow-pulse": "glow-pulse 2.5s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "counter-glow": "counter-glow 2s ease-in-out infinite",
        orbit: "orbit 12s linear infinite",
        "border-spin": "border-spin 3s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
