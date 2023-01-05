/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'hsl(183, 30%, 60%)',
        secondary: 'hsl(0, 30%, 60%)',
        primaryLight: 'hsl(183, 30%, 75%)',
        secondaryLight: 'hsl(0, 30%, 75%)',
        primaryDark: 'hsl(183, 30%, 40%)',
        secondaryDark: 'hsl(0, 30%, 40%)',
        backgroundLight: 'hsl(44, 85%, 97%)',
        backgroundLightNav: 'hsl(44, 85%, 97%)',
        backgroundDark: 'hsl(0, 0%, 0%)',
        backgroundDarkNav: 'hsl(0, 0%, 0%)',
        lightAccent: 'hsl(183, 20%, 90%)',
        darkAccent: 'hsl(0, 0%, 45%)',
        darkerAccent: 'hsl(183, 10%, 20%)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      background: {
        wavy: "url('./src/assets/Icons/wavy.svg')",
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
        bounceUp: {
          '0%': { transform: 'translateY(0)' },
          '25%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(-8px)' },
          '35%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(0)' },
          '70%': { transform: 'translateY(0)' },
          '90%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        bounceDown: 'bounceDown 4s ease infinite',
        bounceUp: 'bounceUp 4s ease infinite',
      },
    },
    screens: {
      xxs: '1px',
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
