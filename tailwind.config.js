/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-green": "#66ff91",
        "primary-gray": "#cfcfd1",
        "primary-black": "#26252b",
      },
      backgroundColor: {
        "dark-gray": "#e9e9ec",
        "light-gray": "#f4f4f5",
      },
    },
  },
  plugins: [],
};
