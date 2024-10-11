/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        md: "20px",
        lg: "40px",
        xl: "60px",
      },
      spacing: {
        xsm: "5px",
        sm: "8px",
        md: "10px",
        lg: "25px",
        "4xl": "200px",
      },
      backgroundColor: {
        silk: "#e0e0e0",
        red: "#e74141",
        yellow: "#ffe5b4",
      },
      colors: {
        red: "#e74141",
      },
      fontFamily: {
        orbid: "orbid",
      },
      borderRadius: {
        md: "15px",
      },
    },
  },
  plugins: [],
};
