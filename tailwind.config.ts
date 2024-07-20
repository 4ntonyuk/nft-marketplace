import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      "hero": ["96px", {
        lineHeight: "96px",
        letterSpacing: "-2%",
        fontWeight: "700"
      }],
      "headline1": ["64px", {
        lineHeight: "64px",
        letterSpacing: "-2%",
        fontWeight: "700"
      }],
      "headline2": ["48px", {
        lineHeight: "56px",
        letterSpacing: "-2%",
        fontWeight: "700"
      }],
      "headline3": ["40px", {
        lineHeight: "58px",
        letterSpacing: "-1%",
        fontWeight: "700"
      }],
      "headline4": ["32px", {
        lineHeight: "40px",
        letterSpacing: "-1%",
        fontWeight: "700"
      }],
      "body1": ["24px", {
        lineHeight: "32px",
        letterSpacing: "-1%",
        fontWeight: "400"
      }],
      "body2": ["16px", "24px"],
      "caption1": ["14px", "24px"],
      "caption2": ["12px", "20px"],
      "hairline1": ["16px", {
        lineHeight: "16px",
        letterSpacing: "0%",
        fontWeight: "700"
      }],
      "hairline2": ["12px", {
        lineHeight: "12px",
        letterSpacing: "0%",
        fontWeight: "700"
      }],
      "button1": ["16px", {
        lineHeight: "16px",
        letterSpacing: "0%",
        fontWeight: "700"
      }],
      "button2": ["14px", {
        lineHeight: "16px",
        letterSpacing: "0%",
        fontWeight: "700"
      }],
    },
    extend: {
      screens: {
        // "mobile": "375px",
        // "tablet": "1024px",
        // "desktop": "1440px",
        "sm": "582px",
        "md": "930px",
        "lg": "1280px"
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
