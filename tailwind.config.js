/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-rgba": "rgba(36, 90, 163, 0.2)",
        "blueText-rgba":"rgba(36, 90, 163, 1)",
        "black-rgba": "rgba(20, 20, 20, 1)",
        "blackText-rgba": "rgba(20, 20, 20, 0.6)",
        "orng-rgba": "rgba(245, 134, 52, 1)",
        "borderColor-rgba": "rgba(20, 20, 20, 0.1)",
        "white-rgba": "rgba(255, 255, 255, 1)",
        "white-rgba-10":"rgba(249, 249, 249, 1)",
        "whiteLinkBorder-rgba": "rgba(255, 255, 255, 0.2)",
        "gray-rgba":"rgb(255, 255, 255)"
      },
    },
    screens: {
      s: "290px",
      sm: "375px",
      sm1: "500px",
      md: "768px",
      md1: "900px",
      md2: "901px",
      lg: "1040px",
      lgg:"1300px",
      lg1: "1600px",
      xl: "1920px",
    },
  },
  plugins: [],
};
