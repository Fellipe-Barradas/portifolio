/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#EFEAC5",
        text_primary: "#27191C",
      },
      fontFamily: {
        primary: ["Noto Sans", "sans-serif"],
      },

    },
  },
  plugins: [],
}