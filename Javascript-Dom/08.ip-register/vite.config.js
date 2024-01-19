import { defineConfig } from "vite";
import { resolve } from "path"; // Import resolve from path module

export default defineConfig({
  base: "/cyberdude-challenges/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.html"),
        update: resolve(__dirname, "./create.html"),
        success: resolve(__dirname, "./login.html"),
        mainjs: resolve(__dirname, "./assets/js/main.js"),
        canceljs: resolve(__dirname, "./assets/js/create.js"),
        updatejs: resolve(__dirname, "./assets/js/login.js"),
        // customcss : resolve(__dirname , '/assets/css/custom.css')
      },
    },
  },
});
