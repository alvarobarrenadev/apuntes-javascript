export const modulo3Data = {
  titulo: "Arrays y Objetos",
  descripcion: "Arrays, objetos, arrow functions y métodos avanzados de manipulación de datos en JavaScript.",
  icono: "fa-table-cells",
  clases: [
    // =====================
    // CLASE 8: INTRODUCCIÓN A ARRAYS Y OBJETOS
    // =====================
    {
      id: 8,
      titulo: "Introducción a Arrays y Objetos",
      descripcion: "Aprende qué son los arrays y objetos, cómo declararlos, acceder a sus elementos y las diferencias con los tipos primitivos.",
      temas: [
        {
          titulo: "Tipos por Referencia",
          contenido: "Tanto los objetos como los arrays son **tipos por referencia**. Cuando los declaramos, lo que guardamos en la variable es la dirección de memoria donde están almacenados los datos, no los datos en sí.",
          puntosClave: [
            "Los tipos primitivos (number, string, boolean) se pasan **por valor**: se copia el valor",
            "Arrays y objetos se pasan **por referencia**: se copia la dirección de memoria",
            "Si modificas un array/objeto pasado a una función, modificas el original",
            "Por eso podemos declarar arrays y objetos con `const` y aún modificar su contenido"
          ],
          alerta: "Cuidado al copiar arrays/objetos con `=`. Ambas variables apuntarán al mismo dato en memoria."
        },
        {
          titulo: "¿Qué es un Array?",
          contenido: "Un array es una colección ordenada de valores que se almacenan bajo un único nombre de variable. Cada valor tiene una posición numérica (índice) que empieza en 0.",
          formasDeclaracion: [
            {
              forma: "Sintaxis literal (recomendada)",
              ejemplo: "const nombres = ['Jose', 'Luis'];",
              descripcion: "La forma más común y directa de crear un array."
            },
            {
              forma: "Constructor Array",
              ejemplo: "const nums = new Array(1, 2, 3);",
              descripcion: "Usa el constructor de la clase Array."
            },
            {
              forma: "Array vacío",
              ejemplo: "const vacio = [];",
              descripcion: "Crea un array sin elementos."
            }
          ],
          codigo: `// Declaración e inicialización
const nombres = ['Jose', 'Luis', 'María'];

// Acceso por índice (empieza en 0)
console.log(nombres[0]); // 'Jose'
console.log(nombres[2]); // 'María'

// Modificar un elemento
nombres[1] = 'Pedro';

// Los arrays pueden mezclar tipos
const mixto = ['texto', 42, true, null];`
        },
        {
          titulo: "Propiedades y Métodos de Arrays",
          contenido: "Los arrays en JavaScript son objetos, lo que significa que tienen propiedades y métodos propios.",
          caracteristicas: [
            {
              nombre: "Propiedad length",
              descripcion: "Devuelve el número de elementos del array. Es la propiedad más utilizada."
            },
            {
              nombre: "typeof devuelve 'object'",
              descripcion: "JavaScript no tiene un tipo 'array'. `typeof []` devuelve 'object' porque los arrays heredan de Object."
            },
            {
              nombre: "Índices no existentes",
              descripcion: "Acceder a un índice que no existe devuelve `undefined`, no da error."
            },
            {
              nombre: "Índices no consecutivos (sparse arrays)",
              descripcion: "Puedes asignar a cualquier índice. El array tendrá 'huecos' con posiciones vacías."
            }
          ],
          codigo: `const letras = ['a', 'b', 'c'];

console.log(letras.length); // 3
console.log(typeof letras); // 'object'
console.log(letras[99]); // undefined

// ¡Cuidado! length, no lenght
console.log(letras.lenght); // undefined (typo común)

// Comportamiento curioso: índices no consecutivos
const nombres = ['Jose', 'Luis'];
nombres[10] = 'María';
console.log(nombres.length); // 11 (¡no 3!)
console.log(nombres[5]); // undefined (hueco vacío)
// nombres = ['Jose', 'Luis', <8 empty items>, 'María']`
        },
        {
          titulo: "Recorrer Arrays con for y for...of",
          contenido: "Existen varias formas de iterar sobre los elementos de un array.",
          metodosIteracion: [
            {
              metodo: "for clásico",
              descripcion: "Control total sobre el índice. Útil cuando necesitas el índice.",
              codigo: `const nums = [10, 20, 30];
for (let i = 0; i < nums.length; i++) {
  console.log(\`Posición \${i}: \${nums[i]}\`);
}`
            },
            {
              metodo: "for...of",
              descripcion: "Más limpio cuando solo necesitas los valores, no los índices.",
              codigo: `const nombres = ['Ana', 'Luis', 'Eva'];
for (const nombre of nombres) {
  console.log(nombre);
}`
            }
          ],
          nota: "Cuando el array es muy grande, es más eficiente guardar `length` en una variable antes del loop para evitar recalcularlo en cada iteración."
        },
        {
          titulo: "¿Qué es un Objeto?",
          contenido: "Un objeto es una estructura de datos que almacena pares **clave-valor**. A diferencia de los arrays, las claves son strings (o Symbols) en lugar de números.",
          puntosClave: [
            "Sirven para modelar entidades del mundo real con propiedades",
            "En JavaScript NO es necesario definir una clase para crear un objeto",
            "También son tipos por referencia",
            "Las claves se escriben sin comillas, los valores según su tipo"
          ],
          codigo: `// Declaración de un objeto literal
const persona = {
  firstName: 'Bienvenido',
  lastName: 'Saez',
  age: 39,
  occupation: 'Developer'
};

// Acceso con notación de punto
console.log(persona.firstName); // 'Bienvenido'

// Acceso con corchetes (útil para claves dinámicas)
console.log(persona['age']); // 39

// Añadir nueva propiedad
persona.city = 'Motril';

// Eliminar propiedad
delete persona.occupation;`
        },
        {
          titulo: "Iterar Objetos con for...in",
          contenido: "Para recorrer las propiedades de un objeto usamos `for...in`, que itera sobre las claves del objeto.",
          codigo: `const coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  year: 2020
};

for (const clave in coche) {
  console.log(\`\${clave}: \${coche[clave]}\`);
}
// marca: Toyota
// modelo: Corolla
// year: 2020`,
          alerta: "`for...in` es para objetos, `for...of` es para arrays. No los confundas."
        },
        {
          titulo: "Continue y Break",
          contenido: "Son sentencias de control de flujo dentro de bucles.",
          conceptosParametros: [
            {
              nombre: "continue",
              descripcion: "Salta a la siguiente iteración del bucle sin ejecutar el código restante.",
              codigo: `// Imprimir solo impares
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}`
            },
            {
              nombre: "break",
              descripcion: "Termina el bucle completamente y salta a la siguiente línea después del bucle.",
              codigo: `// Buscar el primer par
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log('Primer par:', i);
    break; // Sale del bucle
  }
}`
            }
          ]
        }
      ]
    },

    // =====================
    // CLASE 9: ARROW FUNCTIONS
    // =====================
    {
      id: 9,
      titulo: "Arrow Functions",
      descripcion: "Domina la sintaxis moderna de funciones flecha, sus ventajas y cuándo usarlas.",
      temas: [
        {
          titulo: "¿Qué son las Arrow Functions?",
          contenido: "Las arrow functions son una forma más concisa de escribir funciones, introducidas en ES6. Son especialmente útiles para callbacks y funciones cortas.",
          puntosClave: [
            "Eliminan la palabra clave `function`",
            "Usan el operador flecha `=>`",
            "No tienen su propio `this` (heredan del contexto padre)",
            "No tienen acceso al objeto `arguments`",
            "Siempre son anónimas",
            "No son afectadas por hoisting"
          ]
        },
        {
          titulo: "Sintaxis Básica",
          contenido: "La sintaxis varía según el número de parámetros y líneas de código.",
          tiposDeclaracion: [
            {
              nombre: "Sin parámetros",
              icono: "fa-arrow-right",
              descripcion: "Paréntesis vacíos obligatorios.",
              codigo: `const saludo = () => {
  return 'Hola, mundo';
};`
            },
            {
              nombre: "Un parámetro",
              icono: "fa-arrow-right",
              descripcion: "Se pueden omitir los paréntesis.",
              codigo: `const doble = n => {
  return n * 2;
};`
            },
            {
              nombre: "Múltiples parámetros",
              icono: "fa-arrow-right",
              descripcion: "Paréntesis obligatorios.",
              codigo: `const suma = (a, b) => {
  return a + b;
};`
            }
          ]
        },
        {
          titulo: "Return Implícito",
          contenido: "Cuando la función tiene una sola expresión, podemos omitir las llaves `{}` y la palabra `return`. El valor se devuelve automáticamente.",
          comparacion: {
            titulo: "Función normal vs Arrow con return implícito",
            antes: `// Forma extendida
const cuadrado = (n) => {
  return n * n;
};`,
            despues: `// Return implícito
const cuadrado = n => n * n;`
          },
          puntosClave: [
            "Solo funciona con una única expresión",
            "Si necesitas múltiples líneas, usa llaves y `return` explícito",
            "Para devolver un objeto literal, envuélvelo en paréntesis: `() => ({ clave: valor })`"
          ]
        },
        {
          titulo: "Arrow Functions vs Funciones Tradicionales",
          contenido: "Aunque parecen intercambiables, hay diferencias importantes.",
          tablaComparativa: [
            { caracteristica: "Sintaxis", tradicional: "Más verbosa", arrow: "Más concisa" },
            { caracteristica: "`this`", tradicional: "Propio (dinámico)", arrow: "Heredado (léxico)" },
            { caracteristica: "`arguments`", tradicional: "Disponible", arrow: "No disponible" },
            { caracteristica: "Hoisting", tradicional: "Sí (declarativas)", arrow: "No" },
            { caracteristica: "Constructor", tradicional: "Puede usarse con `new`", arrow: "No puede" }
          ],
          recomendacion: "Usa arrow functions para callbacks y funciones cortas. Usa funciones tradicionales cuando necesites `this` propio o el objeto `arguments`."
        },
        {
          titulo: "Casos de Uso Comunes",
          contenido: "Las arrow functions brillan especialmente en estos escenarios:",
          usosClosures: [
            {
              uso: "Callbacks de array",
              descripcion: "Métodos como `map`, `filter`, `reduce`.",
              ejemplo: `const dobles = [1, 2, 3].map(n => n * 2);`
            },
            {
              uso: "Event listeners",
              descripcion: "Manejadores de eventos cortos.",
              ejemplo: `btn.addEventListener('click', () => {
  console.log('Click!');
});`
            },
            {
              uso: "Promesas",
              descripcion: "Callbacks de `.then()` y `.catch()`.",
              ejemplo: `fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));`
            }
          ]
        }
      ]
    },

    // =====================
    // CLASE 10: FUNCIONES ÚTILES PARA ARRAYS (PARTE 1)
    // =====================
    {
      id: 10,
      titulo: "Métodos de Arrays: Manipulación",
      descripcion: "Aprende a agregar, eliminar, dividir y combinar elementos de arrays con los métodos nativos.",
      temas: [
        {
          titulo: "Agregar Elementos",
          contenido: "JavaScript proporciona métodos específicos para añadir elementos al principio o al final de un array.",
          metodosArray: [
            {
              metodo: "push()",
              descripcion: "Añade uno o más elementos **al final** del array. Devuelve la nueva longitud.",
              codigo: `const frutas = ['manzana', 'pera'];
frutas.push('naranja');
// ['manzana', 'pera', 'naranja']

frutas.push('uva', 'kiwi');
// ['manzana', 'pera', 'naranja', 'uva', 'kiwi']`
            },
            {
              metodo: "unshift()",
              descripcion: "Añade uno o más elementos **al principio** del array. Devuelve la nueva longitud.",
              codigo: `const nums = [3, 4, 5];
nums.unshift(1, 2);
// [1, 2, 3, 4, 5]`
            }
          ],
          nota: "Ambos métodos **modifican el array original** (mutación)."
        },
        {
          titulo: "Eliminar Elementos",
          contenido: "Métodos para quitar elementos del array.",
          metodosArray: [
            {
              metodo: "pop()",
              descripcion: "Elimina el **último** elemento y lo devuelve.",
              codigo: `const colores = ['rojo', 'verde', 'azul'];
const ultimo = colores.pop();
// ultimo = 'azul'
// colores = ['rojo', 'verde']`
            },
            {
              metodo: "shift()",
              descripcion: "Elimina el **primer** elemento y lo devuelve.",
              codigo: `const nums = [1, 2, 3];
const primero = nums.shift();
// primero = 1
// nums = [2, 3]`
            }
          ]
        },
        {
          titulo: "splice(): El Todoterreno",
          contenido: "`splice()` puede insertar, eliminar o reemplazar elementos en cualquier posición del array.",
          sintaxis: "array.splice(índice, cuántosEliminar, ...elementosAñadir)",
          metodosArray: [
            {
              metodo: "Eliminar elementos",
              descripcion: "Desde el índice indicado, elimina N elementos.",
              codigo: `const letras = ['a', 'b', 'c', 'd'];
letras.splice(1, 2); // Desde índice 1, elimina 2
// letras = ['a', 'd']`
            },
            {
              metodo: "Insertar elementos",
              descripcion: "Indica 0 elementos a eliminar y añade los nuevos.",
              codigo: `const nums = [1, 4, 5];
nums.splice(1, 0, 2, 3); // Índice 1, 0 eliminados, añade 2 y 3
// nums = [1, 2, 3, 4, 5]`
            },
            {
              metodo: "Reemplazar elementos",
              descripcion: "Combina eliminación e inserción.",
              codigo: `const dias = ['L', 'X', 'V'];
dias.splice(1, 1, 'M', 'Mi', 'J');
// dias = ['L', 'M', 'Mi', 'J', 'V']`
            }
          ],
          alerta: "`splice()` **modifica el array original** y devuelve un array con los elementos eliminados."
        },
        {
          titulo: "Vaciar un Array",
          contenido: "Existen varias formas de vaciar un array, pero cuidado con las referencias.",
          metodosArray: [
            {
              metodo: "Reasignar a []",
              descripcion: "Rápido, pero **NO** afecta a otras copias del array.",
              codigo: `let arr1 = [1, 2, 3];
let arr2 = arr1; // Referencia compartida

arr1 = []; 
// arr1 es ahora []
// ¡PERO arr2 sigue siendo [1, 2, 3]! ⚠️`
            },
            {
              metodo: "length = 0",
              descripcion: "Vacía el array original. Todas las referencias ven el cambio.",
              codigo: `const arr1 = [1, 2, 3];
const arr2 = arr1;

arr1.length = 0;
// Tanto arr1 como arr2 ahora son [] ✅`
            },
            {
              metodo: "splice(0)",
              descripcion: "También modifica el original, similar a length = 0.",
              codigo: `arr.splice(0, arr.length);`
            }
          ]
        },
        {
          titulo: "slice(): Copiar y Extraer",
          contenido: "`slice()` devuelve una **copia superficial** de una porción del array. **No modifica el original**.",
          sintaxis: "array.slice(inicio, fin) // fin no inclusivo",
          codigo: `const nums = [1, 2, 3, 4, 5];

const copia = nums.slice(); // Copia completa
const medio = nums.slice(1, 4); // [2, 3, 4]
const ultimos = nums.slice(-2); // [4, 5]

console.log(nums); // [1, 2, 3, 4, 5] (sin cambios)`,
          nota: "Útil para crear copias de arrays primitivos. Para objetos/arrays anidados, solo copia las referencias."
        },
        {
          titulo: "concat() y join()",
          contenido: "Métodos para combinar arrays y convertirlos a strings.",
          metodosArray: [
            {
              metodo: "concat()",
              descripcion: "Une dos o más arrays. Devuelve un **nuevo array** sin modificar los originales.",
              codigo: `const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
// c = [1, 2, 3, 4]
// a y b siguen igual`
            },
            {
              metodo: "join()",
              descripcion: "Convierte el array en un string, uniendo elementos con el separador indicado.",
              codigo: `const palabras = ['Hola', 'mundo'];
const frase = palabras.join(' ');
// 'Hola mundo'

const csv = [1, 2, 3].join(',');
// '1,2,3'`
            }
          ]
        },
        {
          titulo: "split() y Creación de Slugs",
          contenido: "Aunque `split()` es un método de strings, se usa frecuentemente junto con métodos de arrays para transformar texto.",
          metodosArray: [
            {
              metodo: "split()",
              descripcion: "Divide un string en un array, separando por el carácter indicado.",
              codigo: `const titulo = 'Mi primer post sobre JavaScript';

// Dividir por espacios
const palabras = titulo.split(' ');
// ['Mi', 'primer', 'post', 'sobre', 'JavaScript']`
            },
            {
              metodo: "Crear un slug",
              descripcion: "Combinando split() y join() podemos crear URLs amigables.",
              codigo: `const titulo = 'Mi primer post sobre JavaScript';

// Método 1: split + join
const slug = titulo.split(' ').join('-');
// 'Mi-primer-post-sobre-JavaScript'

// Método 2: replaceAll (más directo)
const slug2 = titulo.replaceAll(' ', '-');
// 'Mi-primer-post-sobre-JavaScript'

// Slug completo (minúsculas)
const slugFinal = titulo.toLowerCase().split(' ').join('-');
// 'mi-primer-post-sobre-javascript'`
            }
          ],
          nota: "Esta combinación de split() → transformación → join() es muy común en JavaScript para manipular texto."
        },
        {
          titulo: "sort(): Ordenar Arrays",
          contenido: "`sort()` ordena los elementos del array **in-place** (modifica el original).",
          metodosArray: [
            {
              metodo: "Ordenar strings",
              descripcion: "Por defecto ordena alfabéticamente según Unicode.",
              codigo: `const letras = ['c', 'a', 'b'];
letras.sort();
// ['a', 'b', 'c']`
            },
            {
              metodo: "Ordenar números",
              descripcion: "Requiere función comparadora para orden numérico.",
              codigo: `const nums = [10, 2, 5, 1];

// ❌ Incorrecto (ordena como strings)
nums.sort(); // [1, 10, 2, 5]

// ✅ Correcto (orden numérico ascendente)
nums.sort((a, b) => a - b); // [1, 2, 5, 10]

// Descendente
nums.sort((a, b) => b - a); // [10, 5, 2, 1]`
            }
          ],
          nota: "La función comparadora debe devolver: **negativo** (a antes), **positivo** (b antes), **0** (iguales)."
        }
      ]
    },

    // =====================
    // CLASE 11: FUNCIONES ÚTILES PARA ARRAYS (PARTE 2)
    // =====================
    {
      id: 11,
      titulo: "Métodos de Arrays: Búsqueda y Spread",
      descripcion: "Aprende a ordenar arrays de objetos, buscar elementos y usar el spread operator.",
      temas: [
        {
          titulo: "Ordenar Arrays de Objetos",
          contenido: "Cuando un array contiene objetos, debemos indicar por qué propiedad queremos ordenar usando una función comparadora.",
          codigo: `const alumnos = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 19 },
  { nombre: 'Eva', edad: 32 }
];

// Ordenar por edad (ascendente)
alumnos.sort((a, b) => a.edad - b.edad);

// Ordenar por nombre (alfabético)
alumnos.sort((a, b) => {
  if (a.nombre < b.nombre) return -1;
  if (a.nombre > b.nombre) return 1;
  return 0;
});

// 💡 Truco: Ordenar Strings (ignorando mayúsculas/tildes)
const nombres = ['Ana', 'álvaro', 'Beto'];
nombres.sort((a, b) => a.localeCompare(b));
// ['álvaro', 'Ana', 'Beto'] Correcto ✅
// nombres.sort() daría ['Ana', 'Beto', 'álvaro'] ❌`,
          nota: "Para comparar strings correctamente con mayúsculas y minúsculas, usa `localeCompare`."
        },
        {
          titulo: "Buscar en Arrays de Primitivos",
          contenido: "Métodos para encontrar elementos o comprobar su existencia.",
          metodosArray: [
            {
              metodo: "indexOf()",
              descripcion: "Devuelve el índice de la primera aparición. Devuelve **-1** si no existe.",
              codigo: `const frutas = ['🍎', '🍐', '🍊'];
frutas.indexOf('🍐'); // 1
frutas.indexOf('🍇'); // -1`
            },
            {
              metodo: "lastIndexOf()",
              descripcion: "Igual que indexOf pero busca desde el final.",
              codigo: `const nums = [1, 2, 3, 2, 1];
nums.lastIndexOf(2); // 3`
            },
            {
              metodo: "includes()",
              descripcion: "Devuelve `true` o `false`. Más semántico que indexOf.",
              codigo: `const colores = ['rojo', 'verde'];
colores.includes('verde'); // true
colores.includes('azul'); // false`
            }
          ]
        },
        {
          titulo: "Buscar en Arrays de Objetos",
          contenido: "Para objetos, usamos `find()` y `findIndex()` con un predicado (función que devuelve boolean).",
          metodosArray: [
            {
              metodo: "find()",
              descripcion: "Devuelve el **primer elemento** que cumple la condición, o `undefined`.",
              codigo: `const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' }
];

const usuario = usuarios.find(u => u.id === 2);
// { id: 2, nombre: 'Luis' }`
            },
            {
              metodo: "findIndex()",
              descripcion: "Devuelve el **índice** del primer elemento que cumple la condición, o -1.",
              codigo: `const idx = usuarios.findIndex(u => u.nombre === 'Ana');
// 0`
            }
          ],
          nota: "Ambos métodos detienen la búsqueda en cuanto encuentran una coincidencia (eficiente)."
        },
        {
          titulo: "Spread Operator (...)",
          contenido: "El operador spread `...` expande los elementos de un array (o propiedades de un objeto) individualmente.",
          metodosArray: [
            {
              metodo: "Copiar arrays",
              descripcion: "Crea una copia superficial de forma concisa.",
              codigo: `const original = [1, 2, 3];
const copia = [...original];`
            },
            {
              metodo: "Concatenar arrays",
              descripcion: "Combina múltiples arrays en uno nuevo.",
              codigo: `const a = [1, 2];
const b = [3, 4];
const juntos = [...a, ...b]; // [1, 2, 3, 4]`
            },
            {
              metodo: "Insertar elementos",
              descripcion: "Añade elementos en cualquier posición.",
              codigo: `const nums = [1, 4, 5];
const completo = [1, 2, 3, ...nums.slice(1)];
// [1, 2, 3, 4, 5]`
            }
          ]
        },
        {
          titulo: "Spread Operator con Objetos",
          contenido: "También funciona para copiar y fusionar objetos.",
          codigo: `const persona = { nombre: 'Ana', edad: 25 };

// Copia del objeto
const copia = { ...persona };

// Añadir/sobrescribir propiedades
const empleado = { ...persona, puesto: 'Dev', edad: 26 };
// { nombre: 'Ana', edad: 26, puesto: 'Dev' }

// Fusionar objetos
const extra = { ciudad: 'Madrid' };
const completo = { ...persona, ...extra };`,
          nota: "Las propiedades posteriores sobrescriben las anteriores si tienen la misma clave."
        }
      ]
    },

    // =====================
    // CLASE 12: FUNCIONES ÚTILES PARA ARRAYS (PARTE 3)
    // =====================
    {
      id: 12,
      titulo: "Métodos de Arrays: every, some, filter, map, reduce",
      descripcion: "Domina los métodos de orden superior para transformar, filtrar y reducir arrays de forma funcional.",
      temas: [
        {
          titulo: "every(): ¿Todos cumplen?",
          contenido: "`every()` comprueba si **todos** los elementos del array cumplen una condición. Devuelve `true` o `false`.",
          codigo: `const edades = [20, 25, 30, 18];

const todosMayores = edades.every(edad => edad >= 18);
// true

const todosMayores21 = edades.every(edad => edad >= 21);
// false`,
          nota: "En cuanto un elemento devuelve `false`, deja de iterar (cortocircuito)."
        },
        {
          titulo: "some(): ¿Alguno cumple?",
          contenido: "`some()` comprueba si **al menos uno** de los elementos cumple la condición.",
          codigo: `const edades = [15, 16, 17, 18];

const hayMayor = edades.some(edad => edad >= 18);
// true

const hayNegativo = edades.some(edad => edad < 0);
// false`,
          nota: "En cuanto un elemento devuelve `true`, deja de iterar."
        },
        {
          titulo: "filter(): Filtrar Elementos",
          contenido: "`filter()` crea un **nuevo array** con los elementos que pasan el test (devuelven `true`).",
          codigo: `const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Monitor', precio: 300 },
  { nombre: 'Teclado', precio: 80 }
];

// Productos caros (>100€)
const caros = productos.filter(p => p.precio > 100);
// [{ nombre: 'Laptop', ... }, { nombre: 'Monitor', ... }]

// Números pares
const pares = [1, 2, 3, 4, 5].filter(n => n % 2 === 0);
// [2, 4]`,
          puntosClave: [
            "**No modifica** el array original",
            "Devuelve un array vacío si ningún elemento cumple",
            "Muy útil para búsquedas y clasificaciones"
          ]
        },
        {
          titulo: "map(): Transformar Elementos",
          contenido: "`map()` crea un **nuevo array** aplicando una función a cada elemento.",
          codigo: `const nums = [1, 2, 3, 4, 5];

// Duplicar cada número
const dobles = nums.map(n => n * 2);
// [2, 4, 6, 8, 10]

// Extraer propiedad de objetos
const usuarios = [
  { nombre: 'Ana', edad: 25 },
  { nombre: 'Luis', edad: 32 }
];
const nombres = usuarios.map(u => u.nombre);
// ['Ana', 'Luis']

// Añadir propiedad a objetos
const conEstado = usuarios.map(u => ({
  ...u,
  esMayor: u.edad >= 18
}));

// 💡 Caso Real: Generar HTML
const alumnos = [
  { nombre: 'Ana', edad: 20 },
  { nombre: 'Luis', edad: 25 }
];

const filasHTML = alumnos.map(alumno => 
  \`<tr>
    <td>\${alumno.nombre}</td>
    <td>\${alumno.edad}</td>
  </tr>\`
);

const tablaBody = filasHTML.join('');
// Ahora 'tablaBody' es un string listo para insertar en el DOM`,
          nota: "El uso de `map` para transformar datos en estructuras visuales (HTML, componentes React) es su uso más común en frontend."
        },
        {
          titulo: "reduce(): Reducir a un Valor",
          contenido: "`reduce()` acumula todos los elementos del array en un único valor. Es el método más versátil.",
          sintaxis: "array.reduce((acumulador, elemento) => ..., valorInicial)",
          metodosArray: [
            {
              metodo: "Sumar números",
              descripcion: "El uso más clásico de reduce.",
              codigo: `const nums = [1, 2, 3, 4, 5];
const suma = nums.reduce((acc, n) => acc + n, 0);
// 15`
            },
            {
              metodo: "Aplanar arrays",
              descripcion: "Convertir array de arrays en uno solo.",
              codigo: `const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => 
  [...acc, ...arr], []);
// [1, 2, 3, 4, 5]`
            },
            {
              metodo: "Agrupar por propiedad",
              descripcion: "Crear un objeto agrupando elementos.",
              codigo: `const alumnos = [
  { nombre: 'Ana', curso: 'JS' },
  { nombre: 'Luis', curso: 'Python' },
  { nombre: 'Eva', curso: 'JS' }
];

const porCurso = alumnos.reduce((acc, alumno) => {
  const key = alumno.curso;
  acc[key] = acc[key] || [];
  acc[key].push(alumno);
  return acc;
}, {});
// { JS: [...], Python: [...] }`
            }
          ],
          puntosClave: [
            "El `valorInicial` define el tipo del acumulador (número, array, objeto...)",
            "Siempre debe devolver el acumulador",
            "Puede reemplazar `filter` + `map` en una sola pasada (más eficiente)"
          ]
        },
        {
          titulo: "Encadenar Métodos",
          contenido: "Como estos métodos devuelven arrays, podemos encadenarlos para operaciones complejas.",
          codigo: `const productos = [
  { nombre: 'Laptop', precio: 1200, stock: 5 },
  { nombre: 'Mouse', precio: 25, stock: 50 },
  { nombre: 'Monitor', precio: 300, stock: 0 },
  { nombre: 'Teclado', precio: 80, stock: 20 }
];

// Obtener nombres de productos disponibles y caros
const resultado = productos
  .filter(p => p.stock > 0)
  .filter(p => p.precio > 50)
  .map(p => p.nombre);
// ['Laptop', 'Teclado']`,
          nota: "Cada método crea un nuevo array. Para máxima eficiencia con arrays grandes, considera usar un solo `reduce`."
        }
      ]
    },

    // =====================
    // CLASE 13-14: EJERCICIOS CON ARRAYS
    // =====================
    {
      id: 13,
      titulo: "Ejercicios Prácticos con Arrays",
      descripcion: "Pon a prueba tus conocimientos con ejercicios prácticos que combinan todos los métodos aprendidos.",
      temas: [
        {
          titulo: "Ejercicio 1: Valores Absolutos",
          contenido: "Dado un array de números, crear una función que devuelva un array con los valores absolutos.",
          solucion: {
            codigo: `function vAbsoluto(arr) {
  return arr.map(n => Math.abs(n));
}

// Uso
const nums = [1, -4, 5, -20, 8];
const absolutos = vAbsoluto(nums);
// [1, 4, 5, 20, 8]`
          }
        },
        {
          titulo: "Ejercicio 2: Clasificar por Tipos",
          contenido: "Dado un array con datos mixtos, crear una función que devuelva un objeto clasificando los elementos por su tipo.",
          solucion: {
            codigo: `function porTipos(arr) {
  return arr.reduce((acc, elem) => {
    const tipo = typeof elem;
    acc[tipo] = acc[tipo] || [];
    acc[tipo].push(elem);
    return acc;
  }, {});
}

// Uso
const mixto = ['hola', 42, true, { a: 1 }, null];
const clasificado = porTipos(mixto);
// { string: ['hola'], number: [42], boolean: [true], object: [{...}, null] }`
          }
        },
        {
          titulo: "Ejercicio 3: Filtrar por Propiedad",
          contenido: "Dado un array de objetos, crear una función que filtre por el valor de una propiedad.",
          solucion: {
            codigo: `function filtrarPor(arr, propiedad, valor) {
  return arr.filter(item => item[propiedad] === valor);
}

// Uso
const alumnos = [
  { nombre: 'Ana', curso: 'FullStack' },
  { nombre: 'Luis', curso: 'IA' },
  { nombre: 'Eva', curso: 'FullStack' }
];

const fullStack = filtrarPor(alumnos, 'curso', 'FullStack');
// [{ nombre: 'Ana', ... }, { nombre: 'Eva', ... }]`
          }
        },
        {
          titulo: "Ejercicio 4: Contar por Categoría",
          contenido: "Dado un array de objetos, contar cuántos elementos hay de cada categoría usando reduce.",
          solucion: {
            codigo: `function contarPor(arr, propiedad) {
  return arr.reduce((acc, item) => {
    const clave = item[propiedad];
    acc[clave] = (acc[clave] || 0) + 1;
    return acc;
  }, {});
}

// Uso
const alumnos = [
  { nombre: 'Ana', curso: 'JS' },
  { nombre: 'Luis', curso: 'Python' },
  { nombre: 'Eva', curso: 'JS' }
];

contarPor(alumnos, 'curso');
// { JS: 2, Python: 1 }`
          }
        },
        {
          titulo: "Ejercicio 5: Encontrar el Mayor",
          contenido: "Dado un array de objetos con propiedad numérica, encontrar el objeto con el valor más alto.",
          solucion: {
            codigo: `function encontrarMayor(arr, propiedad) {
  return arr.reduce((mayor, actual) => 
    actual[propiedad] > mayor[propiedad] ? actual : mayor
  , arr[0]);
}

// Uso
const productos = [
  { nombre: 'Laptop', precio: 1200 },
  { nombre: 'Mouse', precio: 25 },
  { nombre: 'Monitor', precio: 300 }
];

encontrarMayor(productos, 'precio');
// { nombre: 'Laptop', precio: 1200 }`
          }
        },
        {
          titulo: "Ejercicio 6: Calcular Promedio",
          contenido: "Dado un array de objetos con array de notas, calcular el promedio de cada uno.",
          solucion: {
            codigo: `const estudiantes = [
  { nombre: 'Ana', notas: [80, 90, 85] },
  { nombre: 'Luis', notas: [70, 75, 80] }
];

const conPromedio = estudiantes.map(est => ({
  ...est,
  promedio: est.notas.reduce((a, b) => a + b, 0) / est.notas.length
}));
// [{ nombre: 'Ana', notas: [...], promedio: 85 }, ...]`
          }
        },
        {
          titulo: "Ejercicio 7: Agrupar por Propiedad",
          contenido: "Crear una función genérica que agrupe un array de objetos por cualquier propiedad.",
          solucion: {
            codigo: `function agruparPor(arr, propiedad) {
  return arr.reduce((acc, item) => {
    const clave = item[propiedad];
    acc[clave] = acc[clave] || [];
    acc[clave].push(item);
    return acc;
  }, {});
}

// Uso
const ventas = [
  { producto: 'A', region: 'Norte' },
  { producto: 'B', region: 'Sur' },
  { producto: 'C', region: 'Norte' }
];

agruparPor(ventas, 'region');
// { Norte: [{...}, {...}], Sur: [{...}] }`
          }
        }
      ]
    },

    // =====================
    // CLASE 14: EJERCICIOS CON ARRAYS (PARTE 2)
    // =====================
    {
      id: 14,
      titulo: "Ejercicios con Arrays: Parte 2",
      descripcion: "Más ejercicios prácticos para dominar los métodos de arrays con casos de uso reales.",
      temas: [
        {
          titulo: "Ejercicio 1: Duplicar Valores",
          contenido: "Dado un array de números, crear un array donde cada elemento se duplique (x2).",
          solucion: {
            codigo: `const numbers = [1, 2, 3, 4, 5, 6];

// Usando map
const doubleNumbers = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10, 12]

console.log(doubleNumbers);`
          }
        },
        {
          titulo: "Ejercicio 2: Suma con Reduce",
          contenido: "Calcular la suma de todos los elementos del array usando reduce.",
          solucion: {
            codigo: `const nums = [1, 2, 3, 4, 5];

const suma = nums.reduce((acc, n) => acc + n, 0);
// 15

// También podemos sumar cuadrados
const sumaCuadrados = nums.reduce((acc, n) => acc + n * n, 0);
// 55 (1 + 4 + 9 + 16 + 25)`
          }
        },
        {
          titulo: "Ejercicio 3: Filtrar Pares",
          contenido: "Crear un nuevo array que contenga solo los números pares del array original.",
          solucion: {
            codigo: `const numbers = [1, 2, 3, 4, 5, 6];

const pares = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

// Para impares
const impares = numbers.filter(n => n % 2 !== 0);
// [1, 3, 5]`
          }
        },
        {
          titulo: "Ejercicio 4: Verificar Existencia con Prompt",
          contenido: "Pedir al usuario un número y verificar si está presente en el array usando includes.",
          solucion: {
            codigo: `const numbers = [1, 2, 3, 4, 5, 6];

// Pedir número al usuario
const userNumber = parseInt(prompt('Introduce un número:'));

if (numbers.includes(userNumber)) {
  console.log('El número está en el array');
} else {
  console.log('El número NO está en el array');
}`
          },
          nota: "Recuerda que `prompt()` siempre devuelve un string, por eso usamos `parseInt()` para convertirlo a número."
        },
        {
          titulo: "Ejercicio 5: Ordenar Descendente",
          contenido: "Ordenar el array de números en orden descendente (de mayor a menor).",
          solucion: {
            codigo: `const numbers = [3, 1, 7, 4, 2, 5];

// Ordenar ascendente y luego invertir
const descendente = numbers.sort((a, b) => a - b).reverse();
// [7, 5, 4, 3, 2, 1]

// O directamente con comparador invertido
const desc = [...numbers].sort((a, b) => b - a);
// [7, 5, 4, 3, 2, 1]`
          },
          nota: "Usamos el spread operator `[...numbers]` para no modificar el array original."
        },
        {
          titulo: "Ejercicio 6: Filtro Compuesto",
          contenido: "Dado dos arrays, concatenarlos y filtrar los elementos que son múltiplos de 3 pero NO múltiplos de 5.",
          solucion: {
            codigo: `const array1 = [3, 5, 6, 9, 10, 12];
const array2 = [15, 18, 20, 21, 25, 30];

// Concatenar arrays
const newArray = array1.concat(array2);

// Filtrar: múltiplos de 3 pero NO de 5
const noMultiplos = newArray.filter(n => 
  n % 3 === 0 && n % 5 !== 0
);
// [3, 6, 9, 12, 18, 21]`
          }
        },
        {
          titulo: "Ejercicio 7: Filtrar y Transformar Libros",
          contenido: "Dado un array de libros, filtrar los publicados después de 2000 y devolver sus títulos en mayúsculas.",
          solucion: {
            codigo: `const libros = [
  { titulo: 'El Señor de los Anillos', autor: 'Tolkien', year: 1954 },
  { titulo: 'Harry Potter', autor: 'Rowling', year: 1997 },
  { titulo: 'Los Juegos del Hambre', autor: 'Collins', year: 2008 },
  { titulo: 'Crepúsculo', autor: 'Meyer', year: 2005 }
];

// Filtrar por año > 2000
const librosPost2000 = libros.filter(libro => libro.year > 2000);

// Obtener títulos en mayúsculas
const titulosUpper = librosPost2000.map(libro => 
  libro.titulo.toUpperCase()
);
// ['LOS JUEGOS DEL HAMBRE', 'CREPÚSCULO']

// En una sola cadena
const resultado = libros
  .filter(l => l.year > 2000)
  .map(l => l.titulo.toUpperCase());`
          }
        },
        {
          titulo: "Ejercicio 8: Filtrar Mayores de Edad",
          contenido: "Dado un array de estudiantes, filtrar los que tienen 18 años o más.",
          solucion: {
            codigo: `const estudiantes = [
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Luis', edad: 17 },
  { nombre: 'Eva', edad: 19 },
  { nombre: 'Miguel', edad: 16 }
];

const mayoresDeEdad = estudiantes.filter(
  est => est.edad >= 18
);
// [{ nombre: 'Ana', edad: 22 }, { nombre: 'Eva', edad: 19 }]`
          }
        },
        {
          titulo: "Ejercicio 9: Calcular Promedio de Calificaciones",
          contenido: "Dado un array de estudiantes con array de calificaciones, calcular el promedio de cada uno y añadirlo como propiedad.",
          solucion: {
            codigo: `const estudiantes = [
  { nombre: 'Ana', calificaciones: [80, 90, 85] },
  { nombre: 'Luis', calificaciones: [70, 75, 80] },
  { nombre: 'Eva', calificaciones: [95, 92, 88] }
];

const conPromedio = estudiantes.map(est => {
  // Calcular suma con reduce
  const suma = est.calificaciones.reduce(
    (acc, nota) => acc + nota, 0
  );
  // Calcular media
  const media = suma / est.calificaciones.length;
  
  // Devolver objeto con todas las props + media
  return {
    ...est,
    promedio: Math.round(media * 100) / 100
  };
});

// Cada estudiante ahora tiene su promedio`
          }
        },
        {
          titulo: "Ejercicio 10: Encontrar Mayor Promedio",
          contenido: "Del ejercicio anterior, encontrar al estudiante con la calificación más alta.",
          solucion: {
            codigo: `// Asumiendo que ya tenemos conPromedio del ejercicio anterior

const mejorEstudiante = conPromedio.reduce(
  (mejor, actual) => 
    actual.promedio > mejor.promedio ? actual : mejor,
  conPromedio[0]
);

console.log(\`El mejor estudiante es \${mejorEstudiante.nombre} 
  con promedio de \${mejorEstudiante.promedio}\`);`
          }
        },
        {
          titulo: "Ejercicio 11: Análisis de Ventas",
          contenido: "Dado un array de ventas, filtrar las que tienen cantidad mayor a 8, calcular el total de cada venta y encontrar la más alta.",
          solucion: {
            codigo: `const ventas = [
  { producto: 'Camiseta', cantidad: 10, precioUnitario: 15 },
  { producto: 'Pantalón', cantidad: 5, precioUnitario: 30 },
  { producto: 'Zapatos', cantidad: 8, precioUnitario: 50 },
  { producto: 'Gorra', cantidad: 15, precioUnitario: 10 }
];

// 1. Filtrar ventas con cantidad > 8
const ventasElevadas = ventas.filter(v => v.cantidad > 8);

// 2. Añadir subtotal a cada venta
const conTotal = ventas.map(v => ({
  ...v,
  subtotal: v.cantidad * v.precioUnitario
}));

// 3. Encontrar la venta con mayor ingreso
const mayorVenta = conTotal.reduce(
  (mayor, actual) => 
    actual.subtotal > mayor.subtotal ? actual : mayor,
  conTotal[0]
);

console.log('Mayor venta:', mayorVenta.producto);

// 4. Ordenar por cantidad (ascendente)
const ordenadas = [...ventas].sort(
  (a, b) => a.cantidad - b.cantidad
);

// 5. Ordenar por cantidad (descendente)
const ordenDescendente = [...ventas].sort(
  (a, b) => b.cantidad - a.cantidad
);`
          }
        },
        {
          titulo: "Resumen: Cuándo Usar Cada Método",
          contenido: "Guía rápida para elegir el método correcto según lo que necesites hacer.",
          tablaComparativa: [
            { metodo: "map()", uso: "Transformar cada elemento", devuelve: "Array de misma longitud" },
            { metodo: "filter()", uso: "Quedarte con algunos elementos", devuelve: "Array (puede ser más corto)" },
            { metodo: "reduce()", uso: "Acumular/reducir a un valor", devuelve: "Cualquier cosa (número, objeto, etc.)" },
            { metodo: "find()", uso: "Encontrar UN elemento", devuelve: "Elemento o undefined" },
            { metodo: "some()", uso: "¿Alguno cumple?", devuelve: "Boolean (true/false)" },
            { metodo: "every()", uso: "¿Todos cumplen?", devuelve: "Boolean (true/false)" },
            { metodo: "sort()", uso: "Ordenar elementos", devuelve: "Array ordenado (mismo)" },
            { metodo: "includes()", uso: "¿Existe este valor?", devuelve: "Boolean" }
          ],
          recomendacion: "Practica encadenando métodos: `.filter().map()` es una combinación muy poderosa y común."
        }
      ]
    }
  ]
};