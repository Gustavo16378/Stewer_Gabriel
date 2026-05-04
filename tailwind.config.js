/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        carbon:   '#0c0c0c',
        charcoal: '#141414',
        graphite: '#1e1e1e',
        smoke:    '#2e2e2e',
        wire:     '#3a3a3a',
        cream:    '#f0ebe4',
        ivory:    '#c8c3bc',
        sand:     '#8a8178',
        gold:     '#c4a882',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.3em',
      },
    },
  },
  plugins: [],
}
