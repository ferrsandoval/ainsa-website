/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Paleta personalizada AINSA
        'ainsa': {
          'gray': '#a7a9ac',      // Color principal
          'white': '#ffffff',     // Fondo y texto claro
          'black': '#000000',     // Texto principal
          'red': '#a32714',       // Acentos y CTAs
        },
        // Colores del sistema basados en la paleta
        primary: {
          50: '#f8f9fa',
          100: '#f1f2f3',
          200: '#e3e5e7',
          300: '#d1d4d7',
          400: '#a7a9ac',  // Color principal
          500: '#8d9094',
          600: '#73767a',
          700: '#5a5d61',
          800: '#404347',
          900: '#272a2e',
        },
        accent: {
          50: '#fdf2f2',
          100: '#fce7e7',
          200: '#f9d1d1',
          300: '#f5b0b0',
          400: '#ed7e7e',
          500: '#a32714',  // Color de acento
          600: '#8f2211',
          700: '#7b1d0e',
          800: '#67180b',
          900: '#531308',
        },
        neutral: {
          50: '#ffffff',
          100: '#f8f9fa',
          200: '#f1f2f3',
          300: '#e3e5e7',
          400: '#d1d4d7',
          500: '#a7a9ac',
          600: '#8d9094',
          700: '#73767a',
          800: '#404347',
          900: '#000000',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
