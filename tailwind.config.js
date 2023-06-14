/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.html"],
  theme: {
    extend: {
      //
      animation: {
        "bell": "bell .2s ease infinite",
        "rightShake": "rightShake 1s linear infinite",
        "leftShake": "leftShake 1s linear infinite",
      },
      //
      keyframes: {
        //
        bell: {
          "0%": { transform: "totate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "totate(-15deg)" },
          "75%": { transform: "totate(15deg)" },
          "100%": { transform: "totate(-10deg)" },
        },
        //
        rightShake: {
          "0%": {
            opacity: "0",
            scale: "2",
            transform: "translateX(0)",
          },
          "5%": {
            opacity: ".2",
          },
          "10%": {
            opacity: ".5",
          },
          "20%,50%": {
            opacity: "1",
          },
          "70%": {
            opacity: ".5",
          },
          "80%": {
            opacity: ".2",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(1em)",
          },
        },
        //
        leftShake: {
          "0%": {
            opacity: "0",
            scale: "2",
            transform: "translateX(0)",
          },
          "5%": {
            opacity: ".2",
          },
          "10%": {
            opacity: ".5",
          },
          "20%,50%": {
            opacity: "1",
          },
          "70%": {
            opacity: ".5",
          },
          "80%": {
            opacity: ".2",
          },
          "100%": {
            opacity: "0",
            transform: "translateX(-1em)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animation-delay")],
};
