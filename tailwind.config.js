/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2B48C",
      },

      fontFamily: {
        agu: ["Agu Display", "serif"],
      },
      backgroundColor: {
        primary: "#D2B48C",
      },
    },
  },
  plugins: [require("daisyui")],
};
