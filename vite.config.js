import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { fileURLToPath, URL } from "node:url";
import path from "node:path";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      // you need to set i18n resource including paths
      include: path.resolve(__dirname, "./path/to/src/locales/**"),
    }),
  ],
  server: {
    host: true,
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
