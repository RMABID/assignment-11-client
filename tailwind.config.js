/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2B48C",
        secondary_primary: "#6D4715",
      },

      fontFamily: {
        agu: ["Agu Display", "serif"],
        Garamond: ["EB Garamond", " serif"],
      },
      backgroundColor: {
        primary: "#D2B48C",
        secondary_primary: "#6D4715",
      },
    },
  },
  plugins: [require("daisyui")],
};
