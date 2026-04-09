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
        navy: "#0B1F3A",
        navyMid: "#122848",
        navyLight: "#1A3A5C",
        gold: "#C9A84C",
        goldLight: "#E2C47A",
        teal: "#2A7F7F",
        tealLight: "#3AA0A0",
        white: "#FFFFFF",
        offWhite: "#F7F6F2",
        gray100: "#EEF0F3",
        gray300: "#C4C9D4",
        gray500: "#8892A4",
        gray700: "#4A5568",
        text: "#1A2840",
        // keep your existing ones too
        ink: "#0e0e0e",
        ink2: "#181818",
        ink3: "#222222",
        sand: "#f4f1ec",
        sand2: "#e8e4dc",
        gold2: "#dbb86a",
        muted: "#8a8880",
        border: "rgba(255,255,255,0.07)",
        "border-light": "rgba(0,0,0,0.08)",
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Outfit'", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
    },
  },
  plugins: [],
};

export default config;