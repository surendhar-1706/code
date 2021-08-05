const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.coolGray,
      red: colors.red,
      yellow: colors.amber,
      blue: colors.blue,
      green: colors.green,
      teal: colors.teal,
      emerald: colors.emerald,
      cyan: colors.cyan,
      upworkgreen: {
        light: "#14a800",
        dark: "#45793e",
        verified: "#3c8224",
        copylink: "#6cc85f",
      },
      upworkmodal: {
        trans: "#788083",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
