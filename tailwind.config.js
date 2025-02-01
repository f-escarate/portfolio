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
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        pale: 'var(--pale)',
        active: 'var(--active)',
        hover: 'var(--hover)',
        light: 'var(--light)',
        'light-hover': 'var(--light-hover)',
        href: 'var(--href)',
        dark: 'var(--dark)',
      },
      keyframes: {
        'scale-down': {
          from: { transform: 'translateY(-50%) scaleY(0%)', maxHeight: '0px' },
          to: { transform: 'translateY(0%) scaleY(100%)', maxHeight: '9999999px' },
        },
        'downscale-up': {
          from: { transform: 'translateY(0%) scaleY(100%)', maxHeight: '9999999px' },
          to: { transform: 'translateY(-50%) scaleY(0%)', maxHeight: '0px' },
        }
      },
      animation: {
        'expand-down': '0.1s linear 0s 1 both scale-down',
        'condense-up': '0.1s linear 0s 1 both downscale-up',
      }
    }
  }
};

module.exports = config;

