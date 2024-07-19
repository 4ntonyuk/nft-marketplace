import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      "xs": ["12px", "12px"],
      "sm": ["14px", "24px"],
      "base": ["16px", "24px"],
      "lg": ["18px", "24px"],
      "xl": ["24px", "32px"],
      "2xl": ["32px", "40px"],
      "3xl": ["40px", "48px"],
      "4xl": ["48px", "56px"],
      "5xl": ["64px", "64px"],
      "6xl": ["96px", "96px"],
    },
    extend: {
      screens: {
        "mobile": "375px",
        "tablet": "1024px",
        "desktop": "1440px"
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "inter": ["Inter", "sans-serif"],
        "poppins": ["Poppins", "sans-serif"],
        "dmsans": ["DM Sans", "sans-serif"],
      },
      colors: {
        primary: {
          "blue": "#3772FF",
          "purple": "#9757D7",
          "red": "#EF466F",
          "green": "#45B26B",
        },
        secondary: {
          "sky": "#4BC9F0",
          "biege": "#E4D7CF",
          "yellow": "#FFD166",
          "purple": "#CDB4DB"
        },
        neutrals: {
          "1": "#141416", // darker
          "2": "#23262F",
          "3": "#353945",
          "4": "#777E90",
          "5": "#B1B5C3",
          "6": "#E6E8EC",
          "7": "#F4F5F6",
          "8": "#FCFCFD", // lighter
        },
        boxShadow: {
          "1": "0 8px 16px -8px rgba(15, 15, 15, 0.2)",
          "2": "0 24px 24px -16px rgba(15, 15, 15, 0.2)",
          "3": "0 40px 32px -24px rgba(15, 15, 15, 0.12)",
          "4": "0 64px 64px -48px rgba(31, 47, 70, 0.12)",
          "5": "0 16px 64px -48px rgba(31, 47, 70, 0.4)",
        }
      }
    },
  },
  plugins: [],
};
export default config;
