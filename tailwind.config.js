/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      background: "#111111",
      divBackground: "#C8C6C3",
      white: "#C8C6C3",
      button: "#FF5C00",
    },
    fontFamily: {
      Krona: ["Krona One", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      Montserrat: ["Montserrat", "sans-serif"],
    },
    fontSize: {
      clamp: "clamp(1rem, 14vw, 15.5rem)",
      mid: "clamp(1rem,7vw,4rem)",
      text: "18px",
    },
  },
  plugins: [],
};
