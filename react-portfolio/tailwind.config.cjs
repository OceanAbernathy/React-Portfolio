/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#7AB5B8',
        secondary: '#B87A7A',
        primaryLight: '#ACD0D2',
        secondaryLight: '#D2ACAC',
        primaryDark: '#478285',
        backgroundLight: 'hsl(44, 85%, 97%)',
        backgroundLightNav: 'hsl(44, 85%, 97%)',
        backgroundDark: 'hsl(0, 0%, 0%)',
        backgroundDarkNav: 'hsl(0, 0%, 0%)',
        darkAccent: '#737373',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        mono: ['Roboto Mono', 'monospace'],
      },
      backgroundImage: {
        'hero-pattern': "url('./src/assets/texture.png')",
        'hero-pattern-inverted': "url('./src/assets/texture_inverted.png')",
      },
      boxShadow: {
        nav: '0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 4px 4px -2px rgb(0 0 0 / 0.1)',
        navDark:
          '0 -4px 6px -1px rgb(255 255 255 / 0.075), 0 4px 4px -2px rgb(255 255 255 / 0.1)',
      },
      keyframes: {
        bounceDown: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(5px)' },
          '35%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0)' },
          '70%': { transform: 'translateY(0)' },
          '90%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounceDown: 'bounceDown 4s ease infinite',
      },
    },
    screens: {
      xs: '480px',
      ss: '620px',
      sm: '768px',
      md: '1060px',
      lg: '1200px',
      xl: '1700px',
    },
  },
  plugins: [],
};
