/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        titleFont : ['Inter', "sans-serif" ],
        fontPhone : ['Poppins', "sans-seri"]
      }
    },
  },
  plugins: [],
}