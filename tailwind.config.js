/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["'Volkhov', serif"],
        text: ["'Poppins', sans-serif"],
      },
    },
  },
  plugins: [],
};
