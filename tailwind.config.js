/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#0a0a1a',
        'primary-neon': '#00f6ff',
        'secondary-neon': '#ff00ff',
        'accent-neon': '#39ff14',
        'light-gray': '#d1d5db',
        'medium-gray': '#4b5563',
      },
      fontFamily: {
        'sans': ['"Segoe UI"', 'Roboto', 'sans-serif'],
        'mono': ['"Fira Code"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px #00f6ff, 0 0 10px #00f6ff, 0 0 15px #00f6ff' },
          '50%': { boxShadow: '0 0 10px #00f6ff, 0 0 20px #00f6ff, 0 0 30px #00f6ff' },
        },
        pulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.05)', opacity: '0.9' },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'glow': 'glow 2.5s infinite ease-in-out',
        'pulse': 'pulse 2s infinite ease-in-out',
      }
    },
  },
  plugins: [],
};