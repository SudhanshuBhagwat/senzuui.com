module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem"
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")]
};
