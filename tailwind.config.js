/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        neueThin: ["thin", "sans-serif"],
        neueBook: ["book", "sans-serif"],
        neueMed: [",ed", "sans-serif"],
        neueBold: ["bold", "sans-serif"],
        neueItalic: ["italic", "sans-serif"],
      },
      height: {
        ninetyFiveVH: "95vh",
      },
      minWidth: {
        nav: "231px",
      },
      colors: {
        darkGray: "#535351",
        grayWhite: "#B6B5B5",
        lightBlack: "1C1C1C",
        backgroundColor: "#FAF9F6",
      },
      keyframes: {
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeInLeft: {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0px)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeOut: {
          "0%": { opacity: 1 },
          "100%": { opacity: 0 },
        },
      },
      animation: {
        fadeInRightFast: "fadeInRight 0.75s ease-in-out",
        fadeInRightMed: "fadeInRight 1s ease-in-out",
        fadeInRightSlow: "fadeInRight 1.25s ease-in-out",
        fadeInLeftFast: "fadeInLeft 0.75s ease-in-out",
        fadeInLeftMed: "fadeInLeft 1s ease-in-out",
        fadeInLeftSlow: "fadeInLeft 1.25s ease-in-out",
        fadeInFast: "fadeIn 0.75s ease-in-out",
        fadeInMed: "fadeIn 1s ease-in-out",
        fadeInSlow: "fadeIn 1.25s ease-in-out",
      },
    },
  },
  plugins: [],
};
