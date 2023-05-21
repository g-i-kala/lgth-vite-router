/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        color01: "#0B3C73",
        color02: "#4271A6",
        color03: "#B4DFDF",
        color04: "#6DDADA",
        color05: "#FFFFFF",
        color06: "#000000"
      },
      fontFamily: {
        titillium: ["titillium_regular", "sans-serif"],
        poppins_regular: ["poppins_regular", "sans-serif"],
        poppins_semibold: ["poppins_semibold", "sans-serif"],
        poppins_bold: ["poppins_bold", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};

