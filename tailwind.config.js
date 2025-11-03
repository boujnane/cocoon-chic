/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",       // app router
      "./components/**/*.{js,ts,jsx,tsx}", // composants
    ],
    theme: {
      extend: {
        colors: {
          bg: 'var(--color-bg)',
          primary: 'var(--color-primary)',
          secondary: 'var(--color-secondary)',
          dark: 'var(--color-dark)',
          popover: 'var(--popover)',
          'popover-foreground': 'var(--popover-foreground)',
          accent: 'var(--accent)',
          'accent-foreground': 'var(--accent-foreground)',
          muted: 'var(--muted)',
          'muted-foreground': 'var(--muted-foreground)',
          border: 'var(--border)',
          ring: 'var(--ring)',
        },
        fontFamily: {
          title: ['"Playfair Display"', 'serif'],
          body: ['"Inter"', 'sans-serif'],
        },
      },
    },
    plugins: [],
  }
  