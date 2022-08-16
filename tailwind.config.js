/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      light: "Iransans Light",
      helvetica: "helvetica",
    },
    extend: {
      colors: {
        back: "#f9f9f9",
        primary: {
          100: "#FEECFE",
          200: "#F99FF9",
          500: "#F566F5",
          900: "#c20cc2",
        },
        secondary: "#F2CD60",
        accent: "#25BA75",
      },
    },
  },
  plugins: [],
};
