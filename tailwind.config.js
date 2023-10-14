/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        Kanit: ["Kanit", "sans-serif"],
        Oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  /*eslint-env node*/
  plugins: [
    require("daisyui"),
    require("tailwindcss-animated"),
    // Plugin lainnya (jika ada)
  ],
};
