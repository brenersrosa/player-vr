/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
        custom:
          '0px 8px 4px 0px rgba(0, 0, 0, 0.05), 0px 1px 1px 0px rgba(255, 255, 255, 0.30) inset, 0px -1px 1px 0px rgba(255, 255, 255, 0.10) inset',
        box: '0px 0px 200px rgba(0, 0, 0, 0)',
      },
    },
  },
  plugins: [],
}
