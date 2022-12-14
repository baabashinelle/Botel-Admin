/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        header: ["'Volkhov', serif"],
        text: ["'Poppins', sans-serif"],
      },
      colors: {
        "primary-o": "#FA7436",
        "primary-b": "#222222",
        "secondary-b": "#4086F4",
        "secondary-y": "#FFB60A",
        "text-b": "#222222",
        "text-gray": "#444444",
        "text-light": "#666666",
        "icon-gray": "#999999",
        "icon-light": "#e5e5e5",
        "icon-o": "#fa7436",
        "btn-o": "#fa7436",
        "bg-o": "#fa7436",
        "bg-c": "#fefcfb",
        "bg-off": "#f7f8fc",
      },
    },
  },
  plugins: [],
};
