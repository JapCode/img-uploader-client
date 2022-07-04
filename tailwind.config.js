/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        borderC: "#97BEF4",
        fontCPrimary: "#4F4F4F",
        fontCSecondary: "#828282",
        fontCTertiary: "#BDBDBD",
        blueC: "#2F80ED",
        greyC: "#F2F2F2",
        sGreyC: "#E0E0E0",
        bGreyC: "#F6F8FB",
        checkC: "#219653",
      },
      boxShadow: {
        "1xc": "0px 4px 12px rgba(0, 0, 0, 0.1);",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        noto_sans: ["noto_sans", "sans-serif"],
      },
      keyframes: {
        load: {
          "0%": { transform: "translate(0, 0)" },
          "50%": { transform: "translate(200%, 0)" },
          "100%": { transform: "translate(0, 0)" },
        },
        check: {
          "0%": { strokeDasharray: "100%", strokeDashoffset: "100%" },
          "100%": { strokeDasharray: "100%", strokeDashoffset: "0" },
        },
      },
      maxWidth: {
        fullWS: "402px",
      },
      maxHeight: {
        fullHS: "469px",
        imgH: "225px",
      },
      minWidth: {
        minWS: "300px",
      },
      minHeight: {
        minHS: "460px",
      },
      animation: {
        check: "check 0.2s linear forwards",
      },
    },
  },
  plugins: [],
};
