import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/news_explorer_frontend/",
  plugins: [react()],
  server: {
    open: true,
  },
});
