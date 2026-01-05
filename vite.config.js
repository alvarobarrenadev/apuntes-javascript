import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  base: "/apuntes-javascript/", // Solo para Github Pages. Para desplegar en Vercel, solo poner /
  build: {
    rollupOptions: {
      input: {
        // Main
        main: resolve(__dirname, "index.html"),
        
        // Módulo 1: Fundamentos
        modulo1: resolve(__dirname, "src/pages/modulo-1/index.html"),
        modulo1clase1: resolve(__dirname, "src/pages/modulo-1/clase-1.html"),
        modulo1clase2: resolve(__dirname, "src/pages/modulo-1/clase-2.html"),
        modulo1clase3: resolve(__dirname, "src/pages/modulo-1/clase-3.html"),
        
        // Módulo 2: Funciones
        modulo2: resolve(__dirname, "src/pages/modulo-2/index.html"),
        modulo2clase4: resolve(__dirname, "src/pages/modulo-2/clase-4.html"),
        modulo2clase5: resolve(__dirname, "src/pages/modulo-2/clase-5.html"),
        modulo2clase6: resolve(__dirname, "src/pages/modulo-2/clase-6.html"),
        modulo2clase7: resolve(__dirname, "src/pages/modulo-2/clase-7.html"),
      },
    },
  },
  resolve: {
    alias: {
      // Alias principal para la carpeta src
      "@": resolve(__dirname, "./src"),

      // Alias específicos para Sass
      "@sass": resolve(__dirname, "./src/sass"),
      "@abstracts": resolve(__dirname, "./src/sass/abstracts"),
      "@components": resolve(__dirname, "./src/sass/components"),
      "@layout": resolve(__dirname, "./src/sass/layout"),
      "@themes": resolve(__dirname, "./src/sass/themes"),
      "@base": resolve(__dirname, "./src/sass/base"),
      "@pages": resolve(__dirname, "./src/sass/pages"),
      "@vendors": resolve(__dirname, "./src/sass/vendors"),
    },
  },
  css: {
    devSourcemap: true, // Facilita la depuración de Sass
    preprocessorOptions: {
      scss: {
        includePaths: [
          resolve(__dirname, "./src/sass"),
          resolve(__dirname, "./src/sass/abstracts"),
          resolve(__dirname, "./src/sass/components"),
          resolve(__dirname, "./src/sass/layout"),
          resolve(__dirname, "./src/sass/base"),
          resolve(__dirname, "./src/sass/pages"),
          resolve(__dirname, "./src/sass/themes"),
          resolve(__dirname, "./src/sass/vendors"),
        ],
      },
    },
  },
});