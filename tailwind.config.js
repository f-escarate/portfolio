/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto Condensed']
      },
      colors: {
        primary: {
          50: '#FFF5F2',
          100: '#FFF1EE',
          200: '#FFE4DE',
          300: '#FFD5CC',
          400: '#FFBCAD',
          500: '#FE795D',
          600: '#EF562F',
          700: '#EB4F27',
          800: '#CC4522',
          900: '#A5371B'
        }
      },
      keyframes: {
        'scale-down': {
          from: { transform: 'translateY(-50%) scaleY(0%)', height: '0px' },
          to: { transform: 'translateY(0%) scaleY(100%)', height: 'auto' },
        },
        'downscale-up': {
          from: { transform: 'translateY(0%) scaleY(100%)', height: 'auto' },
          to: { transform: 'translateY(-50%) scaleY(0%)', height: '0px' },
        }
      },
      animation: {
        'expand-down': '0.15s linear 0s 1 both scale-down',
        'condense-up': '0.15s linear 0s 1 both downscale-up',
      }
    }
  }
};

module.exports = config;

