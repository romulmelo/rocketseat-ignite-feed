/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      gray: {
        1: "#121214",
        2: "#202024",
        3: "#323238",
        4: "#7C7C8A",
        5: "#8D8D99",
        6: "#C4C4CC",
        7: "#E1E1E6"
      },
      green: {
        DEFAULT: "#00875F",
        light: "#00B37E"
      },
      red: "#F75A68",
      white: "#FFFFFF"
    },
    extend: {
      fontFamily: {
        sans: ["Roboto", defaultTheme.fontFamily.sans]
      }
    }
  },
  plugins: []
}
