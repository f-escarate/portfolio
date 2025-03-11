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
        },
        'appear': {
          '0%': { transform: 'scale(0%)' },
          '100%': { transform: 'scale(100%)' },
        },
        'fade-in': {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0px)' },
        },
      },
      animation: {
        'expand-down': '0.1s linear 0s 1 both scale-down',
        'condense-up': '0.1s linear 0s 1 both downscale-up',
        'appear': '0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 both appear',
        'fade-in': '0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s 1 both fade-in',
      }
    }
  }
};

module.exports = config;

