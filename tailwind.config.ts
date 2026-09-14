import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class', // Enable class-based dark mode
    theme: {
        extend: {
            fontFamily: {
                sans: ["'Inter'", "sans-serif"],
                serif: ["'Playfair Display'", "serif"],
            },
            colors: {
                theme: {
                    bg: "var(--theme-bg)",
                    surface: "var(--theme-surface)",
                    border: "var(--theme-border)",
                    text: "var(--theme-text)",
                    "text-muted": "var(--theme-text-muted)",
                    accent: "var(--theme-accent)",
                    secondary: "var(--theme-secondary)",
                },
            },
        },
    },
    plugins: [],
};
export default config;
