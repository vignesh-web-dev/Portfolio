/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      blackShade: "#131315",
      textgrey: "#c4c4c4",
      green: "#29F401",
      white: "#ffffff",
      black: "#000000",
    },
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        bricolage: ["Bricolage Grotesque", "sans-serif"],
        antonio: ["Antonio", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
      // fontSize: {
      //   head: "clamp(2rem, 5vw, 5rem)",
      // },
    },
  },
  plugins: [],
};
