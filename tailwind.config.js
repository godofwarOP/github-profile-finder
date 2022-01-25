module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  darkMode: true,
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    rtl: false,
  },
};
