import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import svgr from '@svgr/rollup' 

// https://vite.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0
  },
  plugins: [react(), tailwindcss(), svgr({
    exportType: "named",
    ref: true,
    svgo: false,
    dimensions: false,
    typescript: true,
  }),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})