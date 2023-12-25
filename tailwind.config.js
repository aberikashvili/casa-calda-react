/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
      s: "290px",
      sm: "375px",
      sm1: "500px",
      md: "768px",
      md1: "900px",
      md2: "901px",
      lg: "1040px",
      lg1: "1600px",
      xl: "1920px",
      }
    },
    colors: {
      primaryBlue: "#245AA3",
      primaryBlack: "#141414",
      primaryWhite: "#FFFFFF",
      primaryGray: "rgba(20, 20, 20, 0.10)"
    }
  },
  plugins: [],
}

