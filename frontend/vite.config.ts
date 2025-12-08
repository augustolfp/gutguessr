import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
// https://docs.docker.com/guides/reactjs/develop/
// https://vite.dev/config/preview-options
// https://www.buildwithmatija.com/blog/configuring-development-containers-docker-guide
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  server: {
    // Configurar o host para escutar todos os endereços:
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
});
