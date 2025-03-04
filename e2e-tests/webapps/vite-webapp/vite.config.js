import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: "src/index.ts",
      formats: ["es"],
    },
    rollupOptions: {
      external: [
        /^lit/,
        /node_modules/,
        '@mmomui/components/styles',
        '@mmomui/components'
      ],
      
    },
  },
});
