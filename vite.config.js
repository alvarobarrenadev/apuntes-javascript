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

        // Módulo 3: Arrays y Objetos
        modulo3: resolve(__dirname, "src/pages/modulo-3/index.html"),
        modulo3clase8: resolve(__dirname, "src/pages/modulo-3/clase-8.html"),
        modulo3clase9: resolve(__dirname, "src/pages/modulo-3/clase-9.html"),
        modulo3clase10: resolve(__dirname, "src/pages/modulo-3/clase-10.html"),
        modulo3clase11: resolve(__dirname, "src/pages/modulo-3/clase-11.html"),
        modulo3clase12: resolve(__dirname, "src/pages/modulo-3/clase-12.html"),
        modulo3clase13: resolve(__dirname, "src/pages/modulo-3/clase-13.html"),
        modulo3clase14: resolve(__dirname, "src/pages/modulo-3/clase-14.html"),

        // Módulo 4: Prototipos y Clases
        modulo4: resolve(__dirname, "src/pages/modulo-4/index.html"),
        modulo4clase15: resolve(__dirname, "src/pages/modulo-4/clase-15.html"),
        modulo4clase16: resolve(__dirname, "src/pages/modulo-4/clase-16.html"),
        modulo4clase17: resolve(__dirname, "src/pages/modulo-4/clase-17.html"),
        modulo4clase18: resolve(__dirname, "src/pages/modulo-4/clase-18.html"),

        // Módulo 5: ES6 y Tooling
        modulo5: resolve(__dirname, "src/pages/modulo-5/index.html"),
        modulo5clase19: resolve(__dirname, "src/pages/modulo-5/clase-19.html"),

        // Módulo 6: DOM
        modulo6: resolve(__dirname, "src/pages/modulo-6/index.html"),
        modulo6clase20: resolve(__dirname, "src/pages/modulo-6/clase-20.html"),
        modulo6clase21: resolve(__dirname, "src/pages/modulo-6/clase-21.html"),
        modulo6clase22: resolve(__dirname, "src/pages/modulo-6/clase-22.html"),
        modulo6clase23: resolve(__dirname, "src/pages/modulo-6/clase-23.html"),
        modulo6clase24: resolve(__dirname, "src/pages/modulo-6/clase-24.html"),
        modulo6clase25: resolve(__dirname, "src/pages/modulo-6/clase-25.html"),

        // Módulo 7: Eventos
        modulo7: resolve(__dirname, "src/pages/modulo-7/index.html"),
        modulo7clase26: resolve(__dirname, "src/pages/modulo-7/clase-26.html"),
        modulo7clase27: resolve(__dirname, "src/pages/modulo-7/clase-27.html"),
        modulo7clase28: resolve(__dirname, "src/pages/modulo-7/clase-28.html"),
        modulo7clase29: resolve(__dirname, "src/pages/modulo-7/clase-29.html"),
        modulo7clase30: resolve(__dirname, "src/pages/modulo-7/clase-30.html"),
        modulo7clase31: resolve(__dirname, "src/pages/modulo-7/clase-31.html"),
        modulo7clase32: resolve(__dirname, "src/pages/modulo-7/clase-32.html"),

        // Módulo 8: Almacenamiento y Vite
        modulo8: resolve(__dirname, "src/pages/modulo-8/index.html"),
        modulo8clase33: resolve(__dirname, "src/pages/modulo-8/clase-33.html"),
        modulo8clase34: resolve(__dirname, "src/pages/modulo-8/clase-34.html"),
        modulo8clase35: resolve(__dirname, "src/pages/modulo-8/clase-35.html"),
        modulo8clase36: resolve(__dirname, "src/pages/modulo-8/clase-36.html"),
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