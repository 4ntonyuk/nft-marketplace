/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM Sans"],
        roboto: ["Roboto"],
        poppins: ["Poppins"],
        inter: ["Inter"],
      },     
    },
  },
  plugins: [],
};
