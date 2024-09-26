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
        neueMed: ["med", "sans-serif"],
        neueBold: ["bold", "sans-serif"],
        neueItalic: ["italic", "sans-serif"],
        neueBoldItalic: ["bolditalic", "sans-serif"],
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
        95: "95%",
        90: "90%",
        85: "85%",
        50: "50%",
        40: "40%",
        335: "335px",
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
        shadow: "#474232",
        grayWhite: "#B6B5B5",
        lightBlack: "#1C1C1C",
        backgroundColor: "#FAF9F6",
        backgroundCard: "#fffefa",
        beige: "#F5F5DC",
      },
      keyframes: {
        gradient: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
      animation: {
        gradient: "gradient 120s ease infinite",
      },
    },
  },
  plugins: [],
};
