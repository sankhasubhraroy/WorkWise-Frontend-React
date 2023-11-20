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
          purple: "#6787FE",
          sky: "#2261E81A",
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
      backgroundImage: {
        midnight:
          "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
        electricGrass:
          "linear-gradient(135deg,rgb(202,248,128) 0%,rgb(113,206,126) 100%)",
        paleOcean:
          "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
        dusk: "linear-gradient(135deg,rgb(255,203,112) 0%,rgb(199,81,192) 50%,rgb(65,88,208) 100%)",
        bordeaux:
          "linear-gradient(135deg,rgb(254,205,165) 0%,rgb(254,45,45) 50%,rgb(107,0,62) 100%)",
        blushPurple:
          "linear-gradient(135deg,rgb(255,206,236) 0%,rgb(152,150,240) 100%)",
        coolToWarm:
          "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
        matt: "linear-gradient(135deg,rgb(238,238,238) 0%,rgb(169,184,195) 100%)",
        tomato:
          "linear-gradient(135deg,rgba(255,105,0,1) 0%,rgb(207,46,46) 100%)",
        pumkin:
          "linear-gradient(135deg,rgba(252,185,0,1) 0%,rgba(255,105,0,1) 100%)",
        greenCyan:
          "linear-gradient(135deg,rgb(122,220,180) 0%,rgb(0,208,130) 100%)",
        blushPurple2:
          "linear-gradient(135deg,rgba(6,147,227,1) 0%,rgb(155,81,224) 100%)",
      },
      textColor: {
        primary: "#fff",
        secondary: "#515151",
        subtext: "#767676",
      },
      borderWidth: {
        2.5: "2.5px",
        3: "3px",
        3.5: "3.5px",
      },
      borderColor: {
        primary: "#d6d6d6",
        secondary: "#F1F1F1",
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
      height: {
        100: "25rem",
        104: "26rem",
        120: "30rem",
        136: "34rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        192: "48rem",
        200: "50rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
      },
      width: {
        100: "25rem",
        104: "26rem",
        120: "30rem",
        136: "34rem",
        144: "36rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        192: "48rem",
        200: "50rem",
        208: "52rem",
        224: "56rem",
        240: "60rem",
      },
      boxShadow: {
        nav: "0 18px 40px -30px rgba(35,38,58,.50)",
      },
    },
  },
  plugins: [],
};
