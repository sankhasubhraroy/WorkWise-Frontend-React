/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Rubik", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
        display: ["Kalam", "cursive"],
      },
      colors: {
        pale: {
          bluishGray: "#abb8c3",
          pink: "#f78da7",
          greenCyan: "#7bdcb5",
          cyanBlue: "#8ed1fc",
        },
        vivid: {
          red: "#cf2e2e",
          orange: "#ff6900",
          amber: "#fcb900",
          greenCyan: "#00d084",
          cyanBlue: "#0693e3",
          purple: "#9b51e0",
        },
        primary: "#0d6efd",
        secondary: "#6c757d",
        success: "#198754",
        info: "#0dcaf0",
        warning: "#ffc107",
        danger: "#dc3545",
        highlight: "#b3af54",
        light: "#f8f9fa",
        dark: "#212529",
      },
      backgroundColor: {
        primary: "#7F54B3",
        secondary: "#e9e6ed",
        backdrop: "#000000e1",
      },
      textColor: {
        primary: "#fff",
        secondary: "#515151",
        subtext: "#767676",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [],
};
