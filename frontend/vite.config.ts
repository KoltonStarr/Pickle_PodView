import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// Vite's configuration influences how the dev server and build work.
// Adjust aliases or plugins here to change application behavior.
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Using `@/` lets us reference files from the `src` directory.
      "@": path.resolve(__dirname, "src"),
    },
  },
});
