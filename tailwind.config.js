/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mainColor: "#6C63FF",
        textColor: "#0C0C0C",
        textColorDark :'#f5f5f4',
        bgSoft: "#fff",
        bgSoftDark: "#171717",
        textSoft: "#474E68",
        textSoftDark: "#6c7278",
        altColor : '#6D67E4'
      },
    },
  },
  plugins: [],
};
