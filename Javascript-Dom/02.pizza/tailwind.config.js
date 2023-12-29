/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./sucess.html",
    "./update.html",
    "./assets/js/**/*.js", // Include all JS files in the 'assets/js' folder and its subfolders
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
