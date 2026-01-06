// DATOS DE LAS CLASES - MÓDULO 1: CONCEPTOS BÁSICOS

export const modulo1Data = {
  titulo: "Conceptos Básicos",
  descripcion: "Fundamentos, variables, tipos de datos y operadores esenciales de JavaScript.",
  icono: "fa-bolt",
  clases: [
    {
      id: 1,
      titulo: "Introducción a JavaScript",
      descripcion: "Descubre qué es JavaScript, sus características únicas, cómo ejecutarlo y la historia de ECMAScript.",
      temas: [
        {
          titulo: "¿Qué es JavaScript?",
          contenido: `JavaScript es el tercer pilar fundamental del desarrollo web, junto con HTML y CSS. Mientras HTML estructura la información y CSS la estiliza, JavaScript actúa como el "cerebro" que permite manipular y controlar todo lo que hemos construido previamente.`,
          puntosClave: [
            "Es el responsable de controlar toda la interactividad del usuario en la web",
            "Es el único lenguaje de programación que funciona nativamente en los navegadores",
            "Es un lenguaje de programación completo (Turing completo)",
            "Fue desarrollado por Brendan Eich de Netscape en 1995"
          ]
        },
        {
          titulo: "Características del lenguaje",
          contenido: "JavaScript tiene características únicas que lo diferencian de otros lenguajes de programación.",
          caracteristicas: [
            {
              nombre: "Interpretado",
              descripcion: "No necesita compilación, el navegador lo ejecuta directamente"
            },
            {
              nombre: "Tipado dinámico",
              descripcion: "Una variable puede cambiar de tipo en tiempo de ejecución. El tipo está asociado al valor, no a la variable"
            },
            {
              nombre: "Objetual (Arrays asociativos)",
              descripcion: "Casi todo en JavaScript son objetos. Los objetos funcionan como arrays asociativos (hash maps) donde las claves son strings"
            },
            {
              nombre: "Funciones de primera clase",
              descripcion: "Las funciones son objetos que tienen sus propias propiedades y métodos. Pueden ser pasadas como argumentos, devueltas o asignadas a variables"
            },
            {
              nombre: "Función eval()",
              descripcion: "Capacidad de evaluar string como código en tiempo de ejecución. (Nota: ¡Peligroso y no recomendado por seguridad!)"
            }
          ]
        },
        {
          titulo: "Cómo ejecutar JavaScript",
          contenido: "Existen cuatro formas principales de ejecutar código JavaScript:",
          metodos: [
            {
              nombre: "Consola del navegador",
              descripcion: "Abre el inspector de elementos (F12) y ve a la pestaña Console. Puedes escribir código directamente.",
              ejemplo: "console.log('¡Hola Mundo!');"
            },
            {
              nombre: "Etiqueta &lt;script&gt; inline",
              descripcion: "Escribe código JavaScript directamente dentro de una etiqueta &lt;script&gt; en tu HTML.",
              ejemplo: "<script>\n  console.log('Desde HTML');\n</script>"
            },
            {
              nombre: "Archivo externo",
              descripcion: "Crea un archivo .js y enlázalo con &lt;script src='archivo.js'&gt;&lt;/script&gt;",
              ejemplo: "<script src='script.js'></script>"
            },
            {
              nombre: "Node.js",
              descripcion: "Ejecuta archivos JavaScript desde la terminal con el comando node.",
              ejemplo: "node script.js"
            }
          ]
        },
        {
          titulo: "Ubicación del script",
          contenido: "La posición de la etiqueta <script> afecta cuándo se ejecuta el código:",
          posiciones: [
            {
              lugar: "En el <head>",
              comportamiento: "Se ejecuta ANTES de que se pinte el HTML. El DOM no está disponible.",
              solucion: "Usar el atributo defer para esperar a que cargue la página"
            },
            {
              lugar: "En el <body>",
              comportamiento: "Se ejecuta mientras se dibuja la página"
            },
            {
              lugar: "Antes de </body>",
              comportamiento: "Se ejecuta DESPUÉS de pintar todo el HTML. El DOM está completamente disponible."
            }
          ],
          codigoEjemplo: `<!-- Con defer: espera a que cargue toda la página -->
<script src="script.js" defer></script>`
        },
        {
          titulo: "Console: tu mejor amigo",
          contenido: "El objeto console proporciona métodos para depurar y mostrar información:",
          metodos: [
            { nombre: "console.log()", descripcion: "Imprime información general", color: "default" },
            { nombre: "console.info()", descripcion: "Imprime información (con icono)", color: "blue" },
            { nombre: "console.warn()", descripcion: "Muestra advertencias (amarillo)", color: "yellow" },
            { nombre: "console.error()", descripcion: "Muestra errores (rojo)", color: "red" },
            { nombre: "console.clear()", descripcion: "Limpia la consola", color: "gray" }
          ]
        },
        {
          titulo: "Entornos de ejecución",
          contenido: "JavaScript puede ejecutarse en diferentes entornos, y dependiendo de dónde se ejecute, tendrás acceso a diferentes objetos y APIs:",
          caracteristicas: [
            {
              nombre: "Frontend (Navegador)",
              descripcion: "Tienes acceso al objeto window, document (DOM), y puedes manipular la página web"
            },
            {
              nombre: "Backend (Node.js)",
              descripcion: "Tienes acceso al sistema de archivos, redes, pero NO al DOM ni a window"
            }
          ],
          nota: "Los scripts pueden interactuar con el mundo exterior de forma diferente según el entorno. En frontend manipulas el DOM, en backend accedes a archivos."
        },
        {
          titulo: "ECMAScript: La evolución del lenguaje",
          contenido: "JavaScript se basa en el estándar ECMAScript. A lo largo de los años, se han añadido nuevas características:",
          versiones: [
            { anio: "1997", version: "ES1", novedades: "Primera edición del estándar" },
            { anio: "2009", version: "ES5", novedades: "strict mode, JSON, métodos de Array" },
            { anio: "2015", version: "ES6/ES2015", novedades: "let/const, clases, arrow functions, promises, modules", destacado: true },
            { anio: "2016", version: "ES2016", novedades: "Array.includes(), operador **" },
            { anio: "2017", version: "ES2017", novedades: "async/await, Object.entries()" },
            { anio: "2020", version: "ES2020", novedades: "Nullish coalescing (??), optional chaining (?.)" }
          ],
          nota: "ES6 (2015) fue un cambio revolucionario. Las versiones modernas añaden mejoras cada año."
        }
      ]
    },
    {
      id: 2,
      titulo: "Variables y Tipos de Datos",
      descripcion: "Aprende a declarar variables con let y const, y domina los tipos primitivos (string, number, boolean...).",
      temas: [
        {
          titulo: "¿Qué es una variable?",
          contenido: "Una variable es una zona de memoria RAM a la que le asignamos un nombre para poder hacer referencia a ella posteriormente. Es como decirle al sistema: 'necesito espacio para guardar datos, y quiero llamarlo así'.",
          puntosClave: [
            "Usar nombres descriptivos (no 'a', 'b', 'x')",
            "Evitar ambigüedades",
            "Evitar palabras reservadas del lenguaje",
            "No usar tildes ni caracteres especiales",
            "Usar camelCase para nombrar variables"
          ]
        },
        {
          titulo: "Declaración de variables",
          contenido: "JavaScript ofrece tres formas de declarar variables, cada una con un comportamiento diferente:",
          tipos: [
            {
              palabra: "var",
              descripcion: "Forma antigua. Tiene scope de función y permite redeclaración. NO RECOMENDADO.",
              ejemplo: "var nombre = 'JavaScript';",
              icono: "fa-triangle-exclamation",
              color: "warning"
            },
            {
              palabra: "let",
              descripcion: "Forma moderna. Tiene scope de bloque y permite reasignación pero no redeclaración.",
              ejemplo: "let contador = 0;\ncontador = 1; // ✓ Válido",
              icono: "fa-check",
              color: "success"
            },
            {
              palabra: "const",
              descripcion: "Para constantes. No permite reasignación ni redeclaración. Obligatorio inicializar.",
              ejemplo: "const PI = 3.14159;\nPI = 3; // ✗ Error",
              icono: "fa-lock",
              color: "primary"
            }
          ]
        },
        {
          titulo: "Tipos de datos primitivos",
          contenido: "JavaScript tiene 7 tipos de datos primitivos:",
          tipos: [
            {
              nombre: "String",
              descripcion: "Cadenas de texto. Se definen con comillas simples, dobles o backticks.",
              ejemplos: ["'Hola'", '"Mundo"', "`Template literal`"]
            },
            {
              nombre: "Number",
              descripcion: "Números enteros y decimales. JavaScript no distingue entre int y float.",
              ejemplos: ["42", "3.14", "-7", "Infinity", "NaN"]
            },
            {
              nombre: "Boolean",
              descripcion: "Valores lógicos: verdadero o falso.",
              ejemplos: ["true", "false"]
            },
            {
              nombre: "Undefined",
              descripcion: "Variable declarada pero sin valor asignado.",
              ejemplos: ["let sinValor; // undefined"]
            },
            {
              nombre: "Null",
              descripcion: "Ausencia intencional de valor. Se asigna explícitamente.",
              ejemplos: ["let vacio = null;"]
            },
            {
              nombre: "Symbol",
              descripcion: "Identificadores únicos e inmutables (ES6+).",
              ejemplos: ["Symbol('id')"]
            },
            {
              nombre: "BigInt",
              descripcion: "Para números enteros muy grandes que exceden Number.MAX_SAFE_INTEGER.",
              ejemplos: ["9007199254740991n", "BigInt(9007199254740991)"]
            }
          ]
        },
        {
          titulo: "typeof: Conocer el tipo",
          contenido: "El operador typeof devuelve una cadena indicando el tipo de dato de una variable:",
          ejemplos: [
            { codigo: 'typeof "Hola"', resultado: '"string"' },
            { codigo: "typeof 42", resultado: '"number"' },
            { codigo: "typeof true", resultado: '"boolean"' },
            { codigo: "typeof undefined", resultado: '"undefined"' },
            { codigo: "typeof null", resultado: '"object" // ¡Bug histórico!' },
            { codigo: "typeof Symbol()", resultado: '"symbol"' },
            { codigo: "typeof function(){}", resultado: '"function"' }
          ],
          nota: "typeof null devuelve 'object' debido a un bug histórico de JavaScript que se mantiene por compatibilidad."
        },
        {
          titulo: "Convención de nombres (Naming Convention)",
          contenido: "En JavaScript usamos camelCase para variables y funciones:",
          reglas: [
            { tipo: "Variables", ejemplo: "let nombreUsuario = 'Juan';", estilo: "camelCase" },
            { tipo: "Constantes globales", ejemplo: "const MAX_INTENTOS = 3;", estilo: "SCREAMING_SNAKE_CASE" },
            { tipo: "Funciones", ejemplo: "function calcularTotal() {}", estilo: "camelCase" },
            { tipo: "Clases", ejemplo: "class Usuario {}", estilo: "PascalCase" },
            { tipo: "Booleanos", ejemplo: "let isLoading = true;", estilo: "prefijo is/has/can" }
          ]
        }
      ]
    },
    {
      id: 3,
      titulo: "Operadores en JavaScript",
      descripcion: "Domina los operadores aritméticos, lógicos, de comparación y el operador ternario.",
      temas: [
        {
          titulo: "Operadores Aritméticos",
          contenido: "Operadores para realizar cálculos matemáticos:",
          operadores: [
            { simbolo: "+", nombre: "Suma", ejemplo: "5 + 3 // 8" },
            { simbolo: "-", nombre: "Resta", ejemplo: "10 - 4 // 6" },
            { simbolo: "*", nombre: "Multiplicación", ejemplo: "4 * 3 // 12" },
            { simbolo: "/", nombre: "División", ejemplo: "15 / 3 // 5" },
            { simbolo: "%", nombre: "Módulo (resto)", ejemplo: "7 % 2 // 1", destacado: true },
            { simbolo: "**", nombre: "Potencia", ejemplo: "2 ** 3 // 8", destacado: true }
          ],
          nota: "El operador módulo (%) es útil para verificar si un número es divisible por otro: si n % 2 === 0, el número es par."
        },
        {
          titulo: "Operadores de Asignación",
          contenido: "El operador = asigna el valor de la derecha a la variable de la izquierda:",
          operadores: [
            { simbolo: "=", nombre: "Asignación simple", ejemplo: "let x = 5;" },
            { simbolo: "+=", nombre: "Suma y asigna", equivalente: "x = x + y", ejemplo: "x += 3; // x = 8" },
            { simbolo: "-=", nombre: "Resta y asigna", equivalente: "x = x - y", ejemplo: "x -= 2; // x = 6" },
            { simbolo: "*=", nombre: "Multiplica y asigna", equivalente: "x = x * y", ejemplo: "x *= 2; // x = 12" },
            { simbolo: "/=", nombre: "Divide y asigna", equivalente: "x = x / y", ejemplo: "x /= 3; // x = 4" },
            { simbolo: "**=", nombre: "Potencia y asigna", equivalente: "x = x ** y", ejemplo: "x **= 2; // x = 16" }
          ]
        },
        {
          titulo: "Operadores Unarios",
          contenido: "Operadores que actúan sobre una sola variable:",
          operadores: [
            { 
              simbolo: "++", 
              nombre: "Incremento",
              variantes: [
                { forma: "a++", descripcion: "Post-incremento: usa el valor y LUEGO incrementa" },
                { forma: "++a", descripcion: "Pre-incremento: incrementa PRIMERO y luego usa el valor" }
              ]
            },
            { 
              simbolo: "--", 
              nombre: "Decremento",
              variantes: [
                { forma: "a--", descripcion: "Post-decremento: usa el valor y LUEGO decrementa" },
                { forma: "--a", descripcion: "Pre-decremento: decrementa PRIMERO y luego usa el valor" }
              ]
            }
          ],
          ejemplo: `let a = 5;
console.log(a++); // Imprime 5,  luego a = 6
console.log(++a); // Incrementa, luego imprime 7`
        },
        {
          titulo: "Operadores de Comparación",
          contenido: "Comparan valores y devuelven un booleano (true/false):",
          operadores: [
            { simbolo: "==", nombre: "Igualdad (valor)", descripcion: "Compara valores, NO tipos. Hace coerción.", ejemplo: '5 == "5" // true' },
            { simbolo: "===", nombre: "Igualdad estricta", descripcion: "Compara valor Y tipo. RECOMENDADO.", ejemplo: '5 === "5" // false', destacado: true },
            { simbolo: "!=", nombre: "Desigualdad", descripcion: "Distinto valor (con coerción)", ejemplo: '5 != "6" // true' },
            { simbolo: "!==", nombre: "Desigualdad estricta", descripcion: "Distinto valor O tipo", ejemplo: '5 !== "5" // true', destacado: true },
            { simbolo: ">", nombre: "Mayor que", ejemplo: "10 > 5 // true" },
            { simbolo: ">=", nombre: "Mayor o igual", ejemplo: "5 >= 5 // true" },
            { simbolo: "<", nombre: "Menor que", ejemplo: "3 < 8 // true" },
            { simbolo: "<=", nombre: "Menor o igual", ejemplo: "4 <= 4 // true" }
          ],
          alerta: "SIEMPRE usa === y !== para evitar comportamientos inesperados por coerción de tipos."
        },
        {
          titulo: "Operadores Lógicos",
          contenido: "Combinan expresiones booleanas:",
          operadores: [
            {
              simbolo: "&&",
              nombre: "AND (Y lógico)",
              regla: "Devuelve true si AMBOS son true",
              tablaVerdad: [
                { a: "true", b: "true", resultado: "true" },
                { a: "true", b: "false", resultado: "false" },
                { a: "false", b: "true", resultado: "false" },
                { a: "false", b: "false", resultado: "false" }
              ],
              comportamientoJS: "Con no-booleanos: devuelve B si ambos son truthy, sino devuelve A"
            },
            {
              simbolo: "||",
              nombre: "OR (O lógico)",
              regla: "Devuelve true si AL MENOS UNO es true",
              tablaVerdad: [
                { a: "true", b: "true", resultado: "true" },
                { a: "true", b: "false", resultado: "true" },
                { a: "false", b: "true", resultado: "true" },
                { a: "false", b: "false", resultado: "false" }
              ],
              comportamientoJS: "Con no-booleanos: devuelve A si es truthy, sino devuelve B"
            },
            {
              simbolo: "!",
              nombre: "NOT (Negación)",
              regla: "Invierte el valor booleano",
              ejemplos: ["!true // false", "!false // true", "!0 // true", "!'' // true"]
            }
          ]
        },
        {
          titulo: "Operador Ternario",
          contenido: "Una forma abreviada de escribir un if-else en una sola línea:",
          sintaxis: "condición ? valorSiTrue : valorSiFalse",
          ejemplos: [
            {
              descripcion: "Determinar mayoría de edad",
              codigo: `const edad = 20;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
// mensaje = 'Mayor de edad'`
            },
            {
              descripcion: "Asignar rol según nombre",
              codigo: `const name = 'Admin';
const rol = name === 'Admin' ? 'Administrador' : 'Usuario';`
            }
          ]
        },
        {
          titulo: "Operador Nullish Coalescing (??)",
          contenido: "Devuelve el operando derecho solo cuando el izquierdo es null o undefined (ES2020):",
          sintaxis: "a ?? b",
          comparacion: [
            { 
              expresion: "null ?? 'default'", 
              resultadoNullish: "'default'",
              resultadoOr: "'default'"
            },
            { 
              expresion: "undefined ?? 'default'", 
              resultadoNullish: "'default'",
              resultadoOr: "'default'"
            },
            { 
              expresion: "0 ?? 'default'", 
              resultadoNullish: "0",
              resultadoOr: "'default'",
              diferente: true
            },
            { 
              expresion: "'' ?? 'default'", 
              resultadoNullish: "''",
              resultadoOr: "'default'",
              diferente: true
            },
            { 
              expresion: "false ?? 'default'", 
              resultadoNullish: "false",
              resultadoOr: "'default'",
              diferente: true
            }
          ],
          nota: "A diferencia de ||, el operador ?? NO considera 0, '' o false como valores 'nullish'."
        },
        {
          titulo: "Concepto: Truthy y Falsy",
          contenido: "En JavaScript, cualquier valor puede evaluarse como booleano. Esto es fundamental para entender los operadores lógicos.",
          puntosClave: [
            "Valores Falsy: Se evalúan como false.",
            "Valores Truthy: Se evalúan como true (todo lo que no es falsy)."
          ],
          caracteristicas: [
            {
              nombre: "Valores Falsy (6)",
              descripcion: "false, 0, \"\" (string vacío), null, undefined, NaN"
            },
            {
              nombre: "Valores Truthy",
              descripcion: "Todo lo demás. Ej: \"hola\", 42, [], {}, function(){}"
            }
          ],
          nota: "OJO: [] (array vacío) y {} (objeto vacío) son TRUTHY, a diferencia de otros lenguajes."
        },
        {
          titulo: "Comportamiento especial de && y ||",
          contenido: "Cuando usamos && y || con valores NO booleanos, JavaScript tiene un comportamiento especial que se usa mucho en React:",
          reglas: [
            {
              operador: "&&",
              regla: "Si A es truthy → devuelve B. Si A es falsy → devuelve A.",
              ejemplos: [
                { codigo: "10 && 20", resultado: "20", explicacion: "10 es truthy, devuelve B" },
                { codigo: "0 && 'hola'", resultado: "0", explicacion: "0 es falsy, devuelve A" },
                { codigo: "'texto' && 'otro'", resultado: "'otro'", explicacion: "Ambos truthy, devuelve B" },
                { codigo: "null && 'algo'", resultado: "null", explicacion: "null es falsy, devuelve A" }
              ]
            },
            {
              operador: "||",
              regla: "Si A es truthy → devuelve A. Si A es falsy → devuelve B.",
              ejemplos: [
                { codigo: "10 || 20", resultado: "10", explicacion: "10 es truthy, devuelve A" },
                { codigo: "0 || 'default'", resultado: "'default'", explicacion: "0 es falsy, devuelve B" },
                { codigo: "'' || 'texto'", resultado: "'texto'", explicacion: "'' es falsy, devuelve B" },
                { codigo: "'hola' || 'otro'", resultado: "'hola'", explicacion: "'hola' es truthy, devuelve A" }
              ]
            }
          ],
          nota: "Estos patrones se usan mucho en React para renderizado condicional: {isLoading && &lt;Spinner /&gt;}"
        },
        {
          titulo: "Operadores Bitwise (Binarios)",
          contenido: "Operan a nivel de bits. Poco frecuentes en desarrollo web alto nivel, pero útiles en casos específicos (permisos, optimización).",
          operadores: [
            { simbolo: "&", nombre: "AND", ejemplo: "5 & 1 // 1" },
            { simbolo: "|", nombre: "OR", ejemplo: "5 | 1 // 5" },
            { simbolo: "~", nombre: "NOT", ejemplo: "~5 // -6" },
            { simbolo: "^", nombre: "XOR", ejemplo: "5 ^ 1 // 4" },
            { simbolo: "<<", nombre: "Left Shift", ejemplo: "5 << 1 // 10" },
            { simbolo: ">>", nombre: "Right Shift", ejemplo: "5 >> 1 // 2" }
          ]
        },
        {
          titulo: "Operador de Asignación Nula (??=)",
          contenido: "Asigna un valor a una variable SOLO si esta es null o undefined (ES2020):",
          sintaxis: "x ??= valor",
          equivalencia: "Es equivalente a: if (x === null || x === undefined) { x = valor; }",
          ejemplos: [
            { codigo: "let x = null;\nx ??= 50;\n// x = 50", explicacion: "x era null, se asigna 50" },
            { codigo: "let y = 10;\ny ??= 50;\n// y = 10", explicacion: "y ya tenía valor, no se modifica" },
            { codigo: "let z;\nz ??= 'default';\n// z = 'default'", explicacion: "z era undefined, se asigna" }
          ],
          nota: "Útil para asignar valores por defecto solo cuando la variable no tiene valor."
        },
        {
          titulo: "Introducción a Funciones",
          contenido: "Las funciones son bloques de código reutilizables que encapsulan una tarea específica. Se utilizan para evitar repetir código y organizar mejor nuestros programas.",
          puntosClave: [
            "Una función es un trozo de código, normalmente con nombre, que podemos llamar múltiples veces",
            "Pueden recibir parámetros (datos de entrada) y devolver un valor (resultado)",
            "En JavaScript, las funciones son 'ciudadanos de primera clase' (first-class citizens)",
            "Las funciones son objetos con sus propias propiedades y métodos"
          ],
          funcionVsMetodo: {
            titulo: "Función vs Método",
            diferencias: [
              {
                tipo: "Función",
                descripcion: "Puede existir de forma independiente, sin estar asociada a ningún objeto",
                ejemplo: "function saludar() { ... }"
              },
              {
                tipo: "Método",
                descripcion: "Siempre vive dentro de un objeto o clase. Es una función asociada a un objeto",
                ejemplo: "objeto.metodo()"
              }
            ],
            nota: "El valor de 'this' es diferente: en una función es el contexto global, en un método es la instancia del objeto."
          },
          ejemploFuncion: {
            descripcion: "Ejemplo de una función básica con parámetro por defecto",
            codigo: `function saludar(nombre = '') {
  return 'Hola, ' + nombre;
}

// Llamadas a la función:
saludar();           // "Hola, "
saludar('Juan');     // "Hola, Juan"

// Las funciones tienen tipo 'function':
typeof saludar;      // "function"`,
            explicacion: "La función 'saludar' recibe un parámetro 'nombre' con valor por defecto vacío. Devuelve un string concatenado."
          },
          nota: "En JavaScript, las funciones son muy peculiares y tienen un tratamiento especial. Veremos una clase específica de funciones donde profundizaremos en arrow functions, callbacks, closures y más."
        }
      ]
    }
  ]
};
