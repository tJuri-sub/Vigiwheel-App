/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Outfit: ["Outfit", "Helvetica"],
      },
      boxShadow: {
        "3xl": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.4)",
      },
    },
  },
  plugins: [],
};
