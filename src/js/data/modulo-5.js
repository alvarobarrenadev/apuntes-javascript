export const modulo5Data = {
  titulo: "Módulos ES6 y Tooling",
  descripcion: "Organización de código con Import/Export, gestión de dependencias y bundlers como Vite.",
  icono: "fa-box-open",
  clases: [
    {
      id: 19,
      titulo: "Módulos en ECMAScript 6 y Vite",
      descripcion: "Aprende a modularizar tu código, la sintaxis de import/export y cómo configurar un entorno de desarrollo profesional con Vite.",
      temas: [
        {
          titulo: "¿Qué son los Módulos?",
          contenido: "A medida que nuestras aplicaciones crecen, tener todo el código en un solo archivo o en múltiples scripts globales se vuelve inmanejable. Los módulos nos permiten dividir el código en archivos separados, reutilizables y con su propio ámbito (scope), evitando la contaminación del espacio global.",
          puntosClave: [
            "Encapsulamiento: Las variables no son globales por defecto.",
            "Reutilización: Exporta una vez, importa en múltiples lugares.",
            "Dependencias explícitas: `import` define claramente qué necesita cada archivo."
          ]
        },
        {
          titulo: "Tipos de Exportación",
          contenido: "Para que una variable, función o clase esté disponible para otros archivos, debemos exportarla. Existen dos tipos principales de exportación.",
          tiposDeclaracion: [
            {
              nombre: "Named Export (Exportación Nombrada)",
              descripcion: "Exporta múltiples valores con sus nombres. Al importar, debes usar los mismos nombres entre llaves `{}`.",
              codigo: `// utils.js
export const pi = 3.1416;
export function sumar(a, b) { return a + b; }

// También al final del archivo:
// export { pi, sumar };`
            },
            {
              nombre: "Default Export (Exportación por Defecto)",
              descripcion: "Solo un `export default` por archivo. Útil para exportar lo 'principal' del módulo (una clase, un componente). Al importar, puedes darle cualquier nombre y no usar llaves.",
              codigo: `// user.js
export default class User { ... }

// O al final:
// export default User;`
            }
          ]
        },
        {
          titulo: "Modos de Importación",
          contenido: "Trae funcionalidades de otros módulos al archivo actual.",
          codigo: `// Importar Named Exports
import { pi, sumar } from './utils.js';

// Importar Default Export (nombre arbitrario)
import User from './user.js';

// Importar con Alias (renombrar)
import { sumar as add } from './utils.js';

// Importar TODO como un objeto
import * as Utils from './utils.js';
console.log(Utils.pi);`
        },
        {
          titulo: "El Atributo `type='module'`",
          contenido: "Para usar módulos nativos en el navegador (sin bundler), debes agregar `type='module'` a tu etiqueta script.",
          codigo: `<script type="module" src="./main.js"></script>`,
          alerta: "Los módulos requieren ejecutarse en un **servidor web** (http://) debido a políticas de seguridad CORS. No funcionarán abriendo el archivo directamente (file://)."
        },
        {
          titulo: "Vite: Entorno de Desarrollo",
          contenido: "Para evitar configuraciones complejas y problemas de CORS, usamos **Vite**, un bundler moderno y ultra-rápido.",
          pasos: [
            {
              paso: "1. Instalar Node.js",
              descripcion: "Recomendado usar **nvm** (Node Version Manager) para gestionar versiones. Crear archivo `.nvmrc` con la versión (ej. `v20.10.0`)."
            },
            {
              paso: "2. Crear Proyecto",
              descripcion: "Ejecutar `npm create vite@latest` en la terminal.",
              codigo: `npm create vite@latest mi-proyecto
# Seleccionar: Vanilla (JS) -> JavaScript`
            },
            {
              paso: "3. Instalar Dependencias",
              descripcion: "Entrar a la carpeta e instalar.",
              codigo: `cd mi-proyecto
npm install`
            },
            {
              paso: "4. Iniciar Servidor",
              descripcion: "Arrancar el entorno de desarrollo.",
              codigo: `npm run dev`
            }
          ],
          nota: "Vite se encarga de servir tus módulos, recargar la página automáticamente (HMR) y optimizar el código para producción."
        },
      ]
    }
  ]
};
