import { defineConfig } from 'vite';
import { resolve } from 'path'; // Import resolve from path module

export default defineConfig({
  base: '/cyberdude-challenges/',
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        update: resolve(__dirname, 'update.html'),
        success: resolve(__dirname, 'success.html'),
        mainjs: resolve(__dirname, './assets/js/main.js'),
        canceljs: resolve(__dirname, './assets/js/cancel.js'),
        updatejs: resolve(__dirname, './assets/js/update.js'),
        customcss : resolve(__dirname , '/assets/css/custom.css')
      },
    },
  },
});
