import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  // base: "/telemedicina/",
  base: "/",
  build: {
    outDir: "dist",
  },
  server: {
    historyApiFallback: true,
  },
});
