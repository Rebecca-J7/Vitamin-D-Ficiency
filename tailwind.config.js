/** @type {import('tailwindcss').Config} */
import tailwindcssAnimated from "tailwindcss-animated";

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      spacing: {
        "word-1": "21.25em",
        "word-2": "27em",
        "word-3": "10em",
      },
      keyframes: {
        fadeDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        blink: {
          "50%": { borderRightColor: "transparent" },
          "100%": { borderRightColor: "white" },
        },
      },
      animation: {
        "fade-down": "fadeDown .7s ease-in-out",
        "fade-right": "fadeRight 0.5s ease-in-out",
        typing: "typing 7s steps(70, end) forwards",
        blink: "blink .7s infinite",
      },
      boxShadow: {
        "3xl": "0px 8px 20px 8px #1C090A80",
        "5xl": "0px 10px 50px 30px #1C090AFC",
      },
      colors: {
        web: {
          "ss-blue": "#8CC0FC",
          "ss-purple": "#BE9BD7",
          "ss-pink": "#E8A3DA",
          "ss-cyan": "#8DC6DA",
        },
      },
      fontFamily: {
        afacad: ["Afacad", "sans-serif"], // Add the font family here
      },
    },
  },

  plugins: [tailwindcssAnimated],
};
