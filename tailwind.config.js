/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6047EC",
        secondary: "#111111", 
      },
      fontFamily: {
        exo2: '"Exo 2", sans-serif',
      },
      spacing: {
        max_width: "1920px",
        content_width: "1280px",
      },
    },
  },
  plugins: [],
}