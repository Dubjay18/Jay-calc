/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        newBlue: "#125488",
        sky: "#2A93D5",
        lightblue: "#37CAEC",
        newGreen: "#3DD9D6",
      },
      spacing: {
        "2x": "20px",
        "3x": "30px",
      },
      borderRadius: {
        "4xl": "40px",
      },
    },
  },
  plugins: [],
};
