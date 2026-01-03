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
                "primary": "rgb(107 36 24)",
                "primary-hover": "#8a3020",
                "background-light": "#F5E6D3",
                "background-dark": "#F5E6D3",
                "surface-dark": "#EBDCC8",
                "surface-light": "#FAF3EA",
                "border-dark": "#D4C5B0",
                "text-main": "#4A1A12",
                "text-muted": "#7D5A50",
            },
            fontFamily: {
                "display": ["Lexend", "sans-serif"],
                "sans": ["Lexend", "sans-serif"],
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "2xl": "1rem",
                "full": "9999px"
            },
        },
    },
    plugins: [
        require("@tailwindcss/container-queries"),
    ],
};
export default config;
