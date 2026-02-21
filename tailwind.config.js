/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        abyss: '#06070B',
        ink: '#0F1220',
        accent: '#80FFE2',
        violet: '#8A5CFF'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 60px rgba(128,255,226,0.25)'
      }
    }
  },
  plugins: []
};
