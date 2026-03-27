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
        gold: {
          50:  '#fefdf0',
          100: '#fdf9d3',
          200: '#fbf0a3',
          300: '#f8e263',
          400: '#f5ce2a',
          500: '#e8b90d',
          600: '#c99208',
          700: '#a06e0a',
          800: '#845710',
          900: '#704813',
          950: '#412507',
        },
        cream: '#faf7f2',
        charcoal: '#1a1a1a',
        rose: '#c9726b',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
        jost: ['Jost', 'sans-serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #c99208 0%, #f8e263 50%, #c99208 100%)',
        'hero-gradient': 'linear-gradient(180deg, rgba(26,26,26,0.85) 0%, rgba(26,26,26,0.4) 60%, rgba(26,26,26,0.75) 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'shimmer': 'shimmer 2.5s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
