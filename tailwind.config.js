const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "400px",
      nav: "1000px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#ffffff",
        accent: "#000000",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
  ],
}
