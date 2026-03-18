import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": "http://localhost:5001", // For local dev
    },
  },
  optimizeDeps: {
    include: [
      "@chakra-ui/react",
      "@chakra-ui/icons",
      "@emotion/react",
      "@emotion/styled",
      "framer-motion",
    ],
    esbuildOptions: {
      loader: {
        ".js": "jsx",
      },
    },
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
      include: [/node_modules/],
    },
  },
  publicDir: 'public'
});
