import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--ds-bg)",
        ink: "var(--ds-text)",
        accent: "var(--ds-accent)",
        tint: "var(--ds-surface-tint)",
        surface: "var(--ds-surface)",
        hairline: "var(--ds-border-color)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Instrument Serif", "serif"],
      },
      maxWidth: {
        shell: "76rem",
      },
    },
  },
  plugins: [],
};

export default config;
