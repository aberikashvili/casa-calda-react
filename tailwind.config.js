/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      primaryBlue: "#245AA3",
      primaryBlack: "#141414",
      primaryWhite: "#FFFFFF",
      primaryGray: "rgba(20, 20, 20, 0.10)"
    }
  },
  plugins: [],
}

