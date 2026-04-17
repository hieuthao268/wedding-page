/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          light: '#D3D9D8',
          DEFAULT: '#BFC8C7',
          dark: '#A6B2B1',
        },
        beige: {
          DEFAULT: '#FAF9F6',
          dark: '#F2F1EC',
        },
        charcoal: {
          DEFAULT: '#2D2D2D',
          muted: '#666666',
        },
        accent: {
          gold: '#C5A059',
          pink: '#E8D5D5',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Montserrat"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
