/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        elements: "var(--elements)",
        background: "var(--background)",
        text: "var(--text)",
        input: "var(--input)",
      },
    },
  },
  plugins: [],
};
