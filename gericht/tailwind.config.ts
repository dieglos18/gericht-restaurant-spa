export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        base: ['"Cormorant Upright"', "serif"],
        alt: ['"Open Sans"', "sans-serif"],
      },
      colors: {
        golden: "#DCCA87",
        dark: "#0C0C0C",
        gray: "#545454",
        crimson: "#F5EFDB",
        grey: "#AAAAAA",
        light: "#FFFFFF",
      },
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
