import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                theme: {
                    bg: "var(--theme-bg)",
                    surface: "var(--theme-surface)",
                    border: "var(--theme-border)",
                    text: "var(--theme-text)",
                    'text-muted': "var(--theme-text-muted)",
                    accent: "var(--theme-accent)",
                    'accent-hover': "var(--theme-accent-hover)",
                }
            }
        },
    },
    plugins: [],
};
export default config;
