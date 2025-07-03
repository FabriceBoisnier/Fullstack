import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      "@layout": resolve(__dirname, "./src/components/layout"),
      "@routing": resolve(__dirname, "./src/components/routing"),
      "@forms": resolve(__dirname, "./src/components/forms"),
      "@interfaces": resolve(__dirname, "./src/interfaces"),
      "@pages": resolve(__dirname, "./src/pages"),
      "@store": resolve(__dirname, "./src/store"),
    },
  },
});
