import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import Cookies from "universal-cookie";

const path = require("path");

const cookies = new Cookies();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@services": path.resolve(__dirname, "src/services"),
    },
  },
});

export { cookies };
