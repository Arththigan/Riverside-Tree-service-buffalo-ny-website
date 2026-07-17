/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Fraunces"', 'Georgia', 'serif'],
      },
      colors: {
        forest: {
          50: '#f3f7f2',
          100: '#e3ece1',
          200: '#c6d8c2',
          300: '#9fbb99',
          400: '#719868',
          500: '#4f7a45',
          600: '#3c6036',
          700: '#2f4b2b',
          800: '#243a21',
          900: '#1a2c18',
          950: '#0e1a0d',
        },
        river: {
          50: '#eef6fb',
          100: '#d6ecf6',
          200: '#b0d9ec',
          300: '#7bbfda',
          400: '#45a1c4',
          500: '#2a85ad',
          600: '#1f6a8e',
          700: '#1c5573',
          800: '#1c4660',
          900: '#1b3a51',
          950: '#102738',
        },
        bark: {
          50: '#faf6f1',
          100: '#f0e6d8',
          200: '#dec6a6',
          300: '#c9a074',
          400: '#b67f4f',
          500: '#a0683f',
          600: '#855233',
          700: '#6b4229',
          800: '#523320',
          900: '#3a2417',
        },
        sand: {
          50: '#fbf9f6',
          100: '#f4efe7',
          200: '#e9dfd0',
        },
      },
      boxShadow: {
        'soft': '0 1px 2px rgba(15,30,12,0.04), 0 8px 24px -8px rgba(15,30,12,0.12)',
        'lift': '0 2px 4px rgba(15,30,12,0.05), 0 24px 48px -16px rgba(15,30,12,0.22)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'grow-bar': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'fade-in': 'fade-in 0.8s ease both',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'grow-bar': 'grow-bar 1.2s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
