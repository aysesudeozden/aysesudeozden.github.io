import type { Config } from "tailwindcss";

// Renkler globals.css içindeki değişkenlerden gelir (açık ve koyu tema için
// ayrı değerler). RGB kanalları olarak tanımlı ki `text-ink/60` gibi
// saydamlık sınıfları çalışsın.
const v = (name: string) => `rgb(var(--${name}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        // yalnızca vurgu için: adındaki italik
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        bg: v("bg"),
        surface: v("surface"),
        ink: v("ink"),
        muted: v("muted"),
        dim: v("dim"),
        line: "rgb(var(--ink) / 0.12)",
        bordo: { DEFAULT: v("bordo"), text: v("bordo-text") },
      },
      keyframes: {
        grain: {
          "0%, 100%": { transform: "translate(0, 0)" },
          "20%": { transform: "translate(-3%, 2%)" },
          "40%": { transform: "translate(2%, -3%)" },
          "60%": { transform: "translate(-2%, -1%)" },
          "80%": { transform: "translate(3%, 3%)" },
        },
        blink: { "0%, 49%": { opacity: "1" }, "50%, 100%": { opacity: "0" } },
        rise: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        // imlecin ucunda bir damla belirir, düşer ve kaybolur; sonra bekler
        drip: {
          "0%": { transform: "translateY(0) scale(0)", opacity: "0" },
          "10%": { transform: "translateY(0) scale(1)", opacity: "1" },
          "22%": { transform: "translateY(2px) scale(1)", opacity: "1" },
          "36%": { transform: "translateY(70px) scale(0.85)", opacity: "0" },
          "100%": { transform: "translateY(70px) scale(0.85)", opacity: "0" },
        },
      },
      animation: {
        grain: "grain 0.6s steps(5) infinite",
        blink: "blink 1.1s step-end infinite",
        rise: "rise 0.9s cubic-bezier(.2,.7,.2,1) both",
        drip: "drip 8s cubic-bezier(.55,0,.75,.4) infinite both",
      },
    },
  },
  plugins: [],
};
export default config;
