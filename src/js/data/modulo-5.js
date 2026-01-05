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
            "**Encapsulamiento**: Las variables no son globales por defecto, solo se expone lo que exportas.",
            "**Reutilización**: Exporta una vez, importa en múltiples lugares.",
            "**Dependencias explícitas**: `import` define claramente qué necesita cada archivo.",
            "**Sin contaminación global**: Cada módulo tiene su propio scope, evitando conflictos de nombres."
          ]
        },
        {
          titulo: "El Problema sin Módulos",
          contenido: "Antes de los módulos, si querías usar código de varios archivos, tenías que importar cada uno con etiquetas `<script>` en el HTML. Todo quedaba en el contexto global y cualquier parte de la aplicación podía acceder a cualquier variable.",
          puntosClave: [
            "**Múltiples scripts**: Necesitabas tantas etiquetas `<script>` como archivos JS tuvieras.",
            "**Orden importa**: Los scripts debían cargarse en orden correcto de dependencias.",
            "**Contexto global**: Todas las variables eran accesibles desde cualquier lugar.",
            "**Colisiones de nombres**: Fácil sobrescribir variables accidentalmente."
          ],
          codigo: `<!-- Antes: múltiples scripts en orden de dependencia -->
<script src="movimiento.js"></script>
<script src="wallet.js"></script>
<script src="main.js"></script>
<!-- Todo en contexto global, cualquiera accede a todo -->`
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

// También al final del archivo (alternativa):
const pi = 3.1416;
function sumar(a, b) { return a + b; }
export { pi, sumar };`
            },
            {
              nombre: "Default Export (Exportación por Defecto)",
              descripcion: "Solo un `export default` por archivo. Útil para exportar lo 'principal' del módulo (una clase, un componente). Al importar, puedes darle cualquier nombre y no usar llaves.",
              codigo: `// user.js
export default class User { ... }

// O al final:
class User { ... }
export default User;`
            }
          ]
        },
        {
          titulo: "Combinar Named y Default Export",
          contenido: "Puedes usar ambos tipos de exportación en el mismo archivo. El `export default` será lo principal, y los `named exports` serán utilidades adicionales.",
          codigo: `// modulo.js
const MI_CONSTANTE = 42;
let variablePrivada = 'no exportada'; // No se puede importar

function miFuncion() {
  console.log('Desde mi función');
}

// Export default para lo principal
export default miFuncion;

// Named export para elementos adicionales
export { MI_CONSTANTE };

// La variablePrivada NO está exportada, 
// por lo tanto NO puede ser importada desde otro archivo`
        },
        {
          titulo: "Alias con 'as'",
          contenido: "Puedes renombrar elementos al exportar o al importar para evitar conflictos de nombres o mejorar legibilidad.",
          codigo: `// Al exportar con alias
function saludar() { console.log('Hola'); }
function despedir() { console.log('Adiós'); }
export { saludar as hello, despedir as bye };

// Al importar con alias
import { hello as greet, bye as farewell } from './utils.js';

// Útil cuando dos módulos exportan algo con el mismo nombre
import { Usuario as UsuarioAuth } from './auth.js';
import { Usuario as UsuarioDB } from './database.js';`
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
console.log(Utils.pi);
Utils.sumar(2, 3);`
        },
        {
          titulo: "Exportar un Objeto Personalizado",
          contenido: "Puedes crear un objeto específicamente para exportar, agrupando varias funcionalidades bajo un mismo namespace.",
          codigo: `// utils.js
function funcionA() { ... }
function funcionB() { ... }
const constante = 100;

// Objeto personalizado para exportar
const MisUtils = {
  funcionA,
  funcionB,
  constante
};

export default MisUtils;

// En otro archivo:
import MisUtils from './utils.js';
MisUtils.funcionA();
console.log(MisUtils.constante);`
        },
        {
          titulo: "El Atributo `type='module'`",
          contenido: "Para usar módulos nativos en el navegador (sin bundler), debes agregar `type='module'` a tu etiqueta script.",
          codigo: `<script type="module" src="./main.js"></script>`,
          alerta: "Los módulos requieren ejecutarse en un **servidor web** (http://) debido a políticas de seguridad CORS. No funcionarán abriendo el archivo directamente (file://). **Live Server no cumple con CORS**, por eso necesitas Vite u otro bundler."
        },
        {
          titulo: "Errores Comunes",
          contenido: "Problemas típicos al trabajar con módulos y cómo solucionarlos.",
          puntosClave: [
            "**SyntaxError: Unexpected token 'export'**: Falta `type='module'` en el script.",
            "**CORS Error**: Estás abriendo el archivo con file://. Necesitas un servidor HTTP.",
            "**Live Server no funciona**: Live Server no es compatible con CORS para módulos. Usa Vite.",
            "**Módulo no encontrado**: Revisa la ruta del import (./relativa o absoluta).",
            "**Cannot use import statement outside a module**: El script no está marcado como módulo."
          ]
        },
        {
          titulo: "Vite: Entorno de Desarrollo",
          contenido: "Para evitar configuraciones complejas y problemas de CORS, usamos **Vite**, un bundler moderno y ultra-rápido.",
          pasos: [
            {
              paso: "1. Instalar Node.js con NVM",
              descripcion: "Recomendado usar **nvm** (Node Version Manager) para gestionar versiones.",
              codigo: `# Instalar una versión de Node
nvm install 20.10

# Usar esa versión
nvm use 20.10

# Crear archivo .nvmrc para recordar la versión
node -v > .nvmrc`
            },
            {
              paso: "2. Crear Proyecto",
              descripcion: "Ejecutar `npm create vite@latest` en la terminal.",
              codigo: `npm create vite@latest mi-proyecto
# Seleccionar: Vanilla -> JavaScript`
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
        {
          titulo: "El Archivo .nvmrc",
          contenido: "Buena práctica: crear un archivo `.nvmrc` en la raíz del proyecto con la versión de Node que usas. Así, al volver al proyecto, solo ejecutas `nvm use` y automáticamente usará la versión correcta.",
          codigo: `# Crear el archivo con la versión actual
node -v > .nvmrc

# Contenido del archivo .nvmrc:
v20.10.0

# Al volver al proyecto:
nvm use
# Lee .nvmrc y usa esa versión automáticamente`
        }
      ]
    }
  ]
};

