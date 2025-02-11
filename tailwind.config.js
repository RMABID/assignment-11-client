/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#D2B48C",
        secondary_primary: "#6D4715",
        // lightHover: "#fcf4ff",
        // darkHover: "#2a004a",
        // darkTheme: "#11001F",
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
  darkMode: "selector",
  plugins: [require("daisyui")],
};
