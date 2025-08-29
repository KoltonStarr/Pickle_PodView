/**
 * PostCSS runs CSS transforms after build.
 * Tailwind and Autoprefixer are configured here.
 */
export default {
  plugins: {
    // Generates Tailwind utilities based on our config.
    tailwindcss: {},
    // Adds vendor prefixes so CSS works across browsers.
    autoprefixer: {},
  },
};
