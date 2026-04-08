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
        ink: "#0e0e0e",
        ink2: "#181818",
        ink3: "#222222",
        sand: "#f4f1ec",
        sand2: "#e8e4dc",
        gold: "#c49a3c",
        gold2: "#dbb86a",
        muted: "#8a8880",
        border: "rgba(255,255,255,0.07)",
        "border-light": "rgba(0,0,0,0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};
export default config;
