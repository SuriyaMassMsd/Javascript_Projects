import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/cyberdude-challenges/",
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        create: resolve(__dirname, "create.html"),
        login: resolve(__dirname, "login.html"),
        mainjs: resolve(__dirname, "./assets/js/main.js"),
        createjs: resolve(__dirname, "./assets/js/create.js"),
        loginjs: resolve(__dirname, "./assets/js/login.js"),
      },
    },
  },
});
