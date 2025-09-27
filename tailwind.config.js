/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2F80ED',
          600: '#2967c7',
        },
        accent: {
          DEFAULT: '#9B51E0',
          600: '#8445c7',
        },
        navy: {
          DEFAULT: '#0A0F1C',
        },
      },
    },
  },
  plugins: [],
};
