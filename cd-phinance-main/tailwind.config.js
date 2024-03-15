/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        "mobile-s": '319px',
        "mobile-m": '359px',
        "mobile-l": '411px',
        "tablet-m": "767px",
        "tablet-l": '1023px',
        "desktop": '1279px',
      },
      fontFamily: {
        Acrom_Light: ['Acrom_light', "sans-serif"],
        Acrom_Regular: ['Acrom_Regular', "sans-serif"],
        Acrom_Bold: ['Acrom_Bold', "sans-serif"],
      },
      keyframes: {
      },
      transitionProperty: {
        'max-height': 'max-height'
      },
      animation: {
        'grow': 'grow 1s ease-out',
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scaleY(0)'  },
          '100%': { transform: 'scaleY(1) '},
        }
      }
    },
  },
  plugins: [],
};
