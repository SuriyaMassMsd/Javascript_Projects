/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,json}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-seri"],
      },
    },
  },
  plugins: [],
};
