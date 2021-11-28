module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        "8xl": "90rem",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
