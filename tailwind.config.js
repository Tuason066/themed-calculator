/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./dist/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        /* backgrounds */
        'primary-bg': 'hsl(var(--primary-bg) / <alpha-value>)',
        'light-primary-bg': 'hsl(var(--light-primary-bg) / <alpha-value>)',
        'dark-primary-bg': 'hsl(var(--dark-primary-bg) / <alpha-value>)',

        /* keys */
        'key-neutral-bg': 'hsl(var(--key-neutral-bg) / <alpha-value>)',
        'key-neutral-shadow': 'hsl(var(--key-neutral-shadow) / <alpha-value>)',

        'key-accent-bg': 'hsl(var(--key-accent-bg) / <alpha-value>)',
        'key-accent-shadow': 'hsl(var(--key-accent-shadow) / <alpha-value>)',

        'key-primary-bg': 'hsl(var(--key-primary-bg) / <alpha-value>)',
        'key-primary-shadow': 'hsl(var(--key-primary-shadow) / <alpha-value>)',

        /* text */
        'color-primary': 'hsl(var(--color-primary) / <alpha-value>)',
        'color-accent': 'hsl(var(--color-accent) / <alpha-value>)',
        'color-neutral': 'hsl(var(--color-neutral) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
