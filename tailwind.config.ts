import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#111827",
        muted: "#6B7280",
        border: "#E5E7EB",
        soft: "#F4F9FF",
      },
    },
  },
  plugins: [],
};

export default config;
