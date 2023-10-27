/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      screens: {
        msm: "350px",
        wrapYear: "565px",
      },
      fontFamily: {
        neueThin: ["thin", "sans-serif"],
        neueBook: ["book", "sans-serif"],
        neueMed: [",ed", "sans-serif"],
        neueBold: ["bold", "sans-serif"],
        neueItalic: ["italic", "sans-serif"],
      },
      spacing: {
        100: "100px",
        200: "200px",
        300: "300px",
        400: "400px",
        500: "500px",
        600: "600px",
        700: "700px",
      },
      height: {
        ninetyFiveVH: "95vh",
        90: "90%",
        85: "85%",
        50: "50%",
        40: "40%",
      },
      width: {
        95: "95%",
        90: "90%",
        85: "85%",
        80: "80%",
        75: "75%",
        70: "70%",
        65: "65%",
        60: "60%",
        55: "55%",
        50: "50%",
        45: "45%",
        40: "40%",
        35: "35%",
        30: "30%",
        25: "25%",
        20: "20%",
      },
      minWidth: {
        nav: "231px",
      },
      backgroundSize: {
        400: "400% 400%",
      },
      boxShadow: {
        rootShadow: "-15px 15px #474232",
      },
      colors: {
        darkGray: "#535351",
        grayWhite: "#B6B5B5",
        lightBlack: "#1C1C1C",
        backgroundColor: "#FAF9F6",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
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
        gradient: "gradient 15s ease infinite",
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
