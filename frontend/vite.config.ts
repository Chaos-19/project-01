import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: {
            "/api": {
                target: "http://localhost:3500", // The backend server you want to proxy to
                changeOrigin: true,
                secure: false,
                rewrite: path => path.replace(/^\/api/, "")
            }
        }
    },
    plugins: [react()]
});