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
        zinc: {
          750: "#36363e",
          850: '#202023'
        },
      },
      animation: {
        blob: "blob 7s infinite",
        gradient: "gradient 15s ease infinite",
        floatWord: "floatWord 20s linear infinite",
        'loading-bar': 'loading-bar 2s ease-in-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'fade-in': 'fadeIn 0.5s ease-in',
        'fade-in-delay': 'fadeIn 0.5s ease-in 0.2s',
        'fade-in-up': 'fadeInUp 0.5s ease-out',
        'fade-in-left': 'fadeInLeft 0.5s ease-out',
        'fade-in-right': 'fadeInRight 0.5s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out 2s infinite',
        'float-delay-2': 'float 6s ease-in-out 4s infinite',
        'ping': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'spin-reverse': 'spin 6s linear infinite reverse',
        'slide-in': 'slideIn 1s ease-out forwards',
        'spin-slow': 'spin 3s linear infinite',
        'loading-progress': 'loadingProgress 1s ease-in-out infinite',
        'fade-out': 'fadeOut 0.5s ease-out forwards',
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
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
        ping: {
          '75%, 100%': {
            transform: 'scale(1.5)',
            opacity: '0',
          },
        },
        slideIn: {
          '0%': { 
            transform: 'translateX(-100%)',
            opacity: '0'
          },
          '100%': { 
            transform: 'translateX(0)',
            opacity: '1'
          }
        },
        loadingProgress: {
          '0%': { 
            transform: 'translateX(-100%)',
          },
          '100%': { 
            transform: 'translateX(100%)',
          }
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        }
      },
    },
  },
  plugins: [],
};

export default config;
