/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./*.html",
    "./pages/*.html",
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./src/**/*.js",
  ],
  safelist: [
    "w-64",
    "w-1/2",
    "rounded-l-lg",
    "rounded-r-lg",
    "bg-gray-200",
    "grid-cols-4",
    "grid-cols-7",
    "h-6",
    "leading-6",
    "h-9",
    "leading-9",
    "shadow-lg",
    "text-slprimary",
    "text-slsecondary",
    "bg-slprimary",
    "bg-slsecondary",
    "border-slprimary",
    "border-slsecondary",
  ],
  theme: {
    extend: {
      colors: {
        slprimary: {
          DEFAULT: "#043375",
        },
        slsecondary: {
          DEFAULT: "#ffbc58",
        },
        slgray: {
          DEFAULT: "#1f2937",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
