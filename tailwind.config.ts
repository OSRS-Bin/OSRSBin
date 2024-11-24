import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import tailwindAnimate from "tailwindcss-animate";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      // xl: "1280px",
      // "2xl": "1536px",
    },
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(from var(--background) h s l / <alpha-value>)",
        foreground: "hsl(from var(--foreground) h s l / <alpha-value>)",
        primary: {
          DEFAULT: "hsl(from var(--primary) h s l / <alpha-value>)",
          foreground:
            "hsl(from var(--primary-foreground) h s l / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "hsl(from var(--secondary) h s l / <alpha-value>)",
          foreground:
            "hsl(from var(--secondary-foreground) h s l / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(from var(--popover) h s l / <alpha-value>)",
          foreground:
            "hsl(from var(--popover-foreground) h s l / <alpha-value>)",
        },
        accent: {
          DEFAULT: "hsl(from var(--accent) h s l / <alpha-value>)",
          foreground:
            "hsl(from var(--accent-foreground) h s l / <alpha-value>)",
        },
        header: "hsl(from var(--header) h s l / <alpha-value>)",
        "header-lighter":
          "hsl(from var(--header-lighter) h s l / <alpha-value>)",
        card: {
          DEFAULT: "hsl(from var(--card) h s l / <alpha-value>)",
          foreground: "hsl(from var(--card-foreground) h s l / <alpha-value>)",
        },
        border: "hsl(from var(--border) h s l / <alpha-value>)",
      },
      fontFamily: {
        runescape: ["var(--font-runescape)", ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    tailwindAnimate,
  ],
};
export default config;
