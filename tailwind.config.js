/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mobile: "640px",
        mobile2: "1002px",
        mobile3: "1100px",
        kindle: "1328px",
        tablet: "1424px",
        tablet2: "1519px",
        tablet3: "1615px",
        desktop: "1711px",
        desktop2: "1904px",
        desktop3: "1920px",
      },
      fontSize: {
        s: "1rem",
        sm: "1.5rem",
        sm2: "2rem",
        md: "2.5rem",
        lg: "3rem",
        xl: "3.5rem",
        xxl: "4rem",
      },
      fontFamily: {
        primary: "AvenirGeorgian",
      },
    },
    colors: {
      primaryBlue: "#245AA3",
      primaryBlack: "#141414",
      primaryWhite: "#FFFFFF",
      primaryGray: "rgba(20, 20, 20, 0.10)",
    },
  },
  plugins: [],
};
