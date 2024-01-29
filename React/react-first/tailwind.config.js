/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    fontFamily: {
      titleFont: ["Passion One", "sans-serif"],
      cartFont: ["Roboto", "sans-serif"],
      titleCart: ["Montserrat", "sans-serif"],
      card: ["Lora", "serif"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
