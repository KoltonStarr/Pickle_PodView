import animate from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  // Files where Tailwind should look for class names.
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      // Extend the default theme here; changes affect the whole app.
    },
  },
  // Plugins add extra utilities; this one provides animation helpers.
  plugins: [animate],
};
