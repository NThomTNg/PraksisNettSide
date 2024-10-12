/** @type {import('tailwindcss').Config} */
module.exports = {
  // enable dark mode via class strategy
  darkMode: "class",

  // add the folders and files from your templates
  content: [
    "./*.html", // Adjust the paths according to your project structure
    "./pages/*.html", // Include other directories as needed
    "./layouts/**/*.html",
    "./content/**/*.md",
    "./content/**/*.html",
    "./src/**/*.js",
  ],

  // make sure to safelist these classes when using purge
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
      },
      // extend base Tailwind CSS utility classes
    },
  },

  plugins: [
    // include Flowbite as a plugin in your Tailwind CSS project
    require("flowbite/plugin"),
  ],
};
