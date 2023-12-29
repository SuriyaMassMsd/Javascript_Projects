/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./sucess.html",
    "./update.html",
    "./**/*.js",
    "./assets/js/update.js**/*.js",
    "./assets/js/cancel.js**/*.js",
    "./assets/js/main.js**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

