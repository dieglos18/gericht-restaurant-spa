import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "slide-bottom": {
          "0%": {
            transform: "translateY(-25%)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "slide-bottom":
          "slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
      },
    },
  },
  plugins: [],
};

export default config;
