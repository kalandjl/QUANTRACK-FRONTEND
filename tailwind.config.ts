import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        blob: "blob 7s infinite",
        gradient: "gradient 15s ease infinite",
        floatWord: "floatWord 20s linear infinite",
        'loading-bar': 'loading-bar 2s ease-in-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        gradient: {
          "0%, 100%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
        floatWord: {
          "0%": {
            transform: "translateX(0) translateY(0) rotate(0deg)",
            opacity: "0",
          },
          "5%": {
            opacity: "0.03",
          },
          "45%": {
            opacity: "0.03",
          },
          "50%": {
            opacity: "0",
          },
          "100%": {
            transform: "translateX(100px) translateY(-50px) rotate(10deg)",
            opacity: "0",
          },
        },
        'loading-bar': {
          '0%': {
            width: '0',
            opacity: '0.1',
          },
          '50%': {
            opacity: '0.3',
          },
          '100%': {
            width: '100%',
            opacity: '0.1',
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
