import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#121615",
        panel: "#1c221f",
        olive: "#687755",
        rust: "#b55a36",
        sand: "#dbc49d",
        fog: "#aeb5ad"
      }
    }
  },
  plugins: []
};

export default config;
