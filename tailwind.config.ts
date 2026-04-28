import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                mono: ["'JetBrains Mono'", "'Courier New'", "monospace"],
            },
            colors: {
                theme: {
                    bg: "var(--theme-bg)",
                    surface: "var(--theme-surface)",
                    "surface-2": "var(--theme-surface-2)",
                    border: "var(--theme-border)",
                    "border-subtle": "var(--theme-border-subtle)",
                    text: "var(--theme-text)",
                    "text-muted": "var(--theme-text-muted)",
                    "text-dim": "var(--theme-text-dim)",
                    accent: "var(--theme-accent)",
                    "accent-hover": "var(--theme-accent-hover)",
                    amber: "var(--theme-amber)",
                    "amber-muted": "var(--theme-amber-muted)",
                },
                syn: {
                    string: "var(--syn-string)",
                    key: "var(--syn-key)",
                    number: "var(--syn-number)",
                    bool: "var(--syn-bool)",
                    comment: "var(--syn-comment)",
                    property: "var(--syn-property)",
                },
            },
            animation: {
                marquee: "marquee 30s linear infinite",
                blink: "blink 1.2s step-end infinite",
                glowPulse: "glowPulse 3s ease-in-out infinite",
                fadeInUp: "fadeInUp 0.5s ease forwards",
            },
            keyframes: {
                marquee: {
                    "0%": { transform: "translateX(0%)" },
                    "100%": { transform: "translateX(-100%)" },
                },
                blink: {
                    "0%, 100%": { opacity: "1" },
                    "50%": { opacity: "0" },
                },
                glowPulse: {
                    "0%, 100%": { boxShadow: "0 0 8px var(--theme-accent-glow)" },
                    "50%": { boxShadow: "0 0 20px var(--theme-accent-glow)" },
                },
                fadeInUp: {
                    from: { opacity: "0", transform: "translateY(16px)" },
                    to: { opacity: "1", transform: "translateY(0)" },
                },
            },
        },
    },
    plugins: [],
};
export default config;
