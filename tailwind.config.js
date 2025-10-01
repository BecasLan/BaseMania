/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        base: {
          blue: '#0052FF',
          lightBlue: '#0066FF',
          darkBlue: '#0040CC',
          accent: '#00D4FF',
          dark: '#0A0B0D',
          darker: '#050608',
        },
      },
      backgroundImage: {
        'gradient-base': 'linear-gradient(135deg, #0052FF 0%, #00D4FF 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0B0D 0%, #050608 100%)',
      },
    },
  },
  plugins: [],
}