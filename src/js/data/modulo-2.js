export const modulo2Data = {
  titulo: "Funciones",
  descripcion: "Funciones, control de flujo, scope, closures y hoisting en JavaScript.",
  icono: "fa-code",
  clases: [
    // =====================
    // CLASE 4: FUNCIONES
    // =====================
    {
      id: 4,
      titulo: "Funciones en JavaScript",
      descripcion: "Aprende qué son las funciones, cómo declararlas, los parámetros, el retorno y las diferentes formas de crearlas.",
      temas: [
        {
          titulo: "¿Qué es una función?",
          contenido: "Una función es un trozo de código ejecutable al que le asignamos un nombre para poder reutilizarlo en cualquier parte de nuestro programa. Es como una 'caja negra' a la que le pasamos datos y nos devuelve un resultado.",
          puntosClave: [
            "Es un bloque de código reutilizable que encapsula una tarea específica",
            "Tiene sentido cuando un código se ejecuta más de una vez",
            "Podemos pasarle datos (parámetros) y obtener resultados (retorno)",
            "Las funciones en JavaScript son objetos con propiedades y métodos propios",
            "Son 'ciudadanos de primera clase' (first-class citizens)"
          ]
        },
        {
          titulo: "Ventajas de usar funciones",
          contenido: "Las funciones nos proporcionan múltiples beneficios a la hora de escribir y mantener nuestro código:",
          caracteristicas: [
            {
              nombre: "Reutilización de código",
              descripcion: "Evita duplicar código. Escribes una vez, ejecutas muchas veces desde diferentes partes del programa."
            },
            {
              nombre: "Organización y legibilidad",
              descripcion: "El código queda modularizado en bloques lógicos. Más fácil de leer y entender, especialmente en proyectos grandes."
            },
            {
              nombre: "Facilidad de mantenimiento",
              descripcion: "Si necesitas modificar la lógica, solo cambias un lugar. Reduce errores y simplifica las actualizaciones."
            },
            {
              nombre: "Abstracción",
              descripcion: "Puedes usar una función sin saber cómo funciona internamente. Solo importa QUÉ hace, no CÓMO lo hace."
            },
            {
              nombre: "Menos errores",
              descripcion: "El código organizado en funciones es más fácil de depurar. Los errores son más fáciles de localizar."
            },
            {
              nombre: "Testing facilitado",
              descripcion: "Las funciones permiten probar el código de forma individual e independiente (unit testing)."
            }
          ]
        },
        {
          titulo: "Estructura de una función",
          contenido: "Una función se compone de varias partes esenciales:",
          estructuraFuncion: {
            partes: [
              {
                nombre: "Palabra clave function",
                descripcion: "Indica que estamos declarando una función"
              },
              {
                nombre: "Nombre de la función",
                descripcion: "Identificador para poder invocarla posteriormente"
              },
              {
                nombre: "Parámetros",
                descripcion: "Valores que recibe la función (entre paréntesis)"
              },
              {
                nombre: "Cuerpo de la función",
                descripcion: "Bloque de código entre llaves { } que se ejecuta"
              },
              {
                nombre: "Return (opcional)",
                descripcion: "Devuelve un valor al finalizar la ejecución"
              }
            ],
            codigo: `function calcularCuadrado(numero) {
  const resultado = numero * numero;
  return resultado;
}

// Invocar la función
const cuadrado = calcularCuadrado(5); // 25`
          }
        },
        {
          titulo: "Invocación de funciones",
          contenido: "Para ejecutar una función, debemos invocarla usando su nombre seguido de paréntesis. Sin los paréntesis, solo hacemos referencia a la función pero NO la ejecutamos.",
          ejemplosInvocacion: [
            {
              titulo: "Función sin parámetros",
              codigo: `function saludar() {
  console.log('¡Hola, buenos días!');
}

saludar();  // Ejecuta la función
saludar;    // ¡NO ejecuta! Solo referencia la función`
            },
            {
              titulo: "Función con parámetros",
              codigo: `function saludar(nombre) {
  console.log(\`Hola, \${nombre}!\`);
}

saludar('Ana');     // "Hola, Ana!"
saludar('Carlos');  // "Hola, Carlos!"`
            }
          ]
        },
        {
          titulo: "Return: funciones con retorno",
          contenido: "Una función puede devolver un valor usando la palabra clave return. Este valor puede ser almacenado en una variable para su uso posterior.",
          tiposRetorno: [
            {
              tipo: "Con retorno",
              descripcion: "Devuelve un valor que puede ser usado posteriormente",
              codigo: `function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado); // 8`
            },
            {
              tipo: "Sin retorno",
              descripcion: "Ejecuta acciones pero devuelve undefined",
              codigo: `function mostrarMensaje(mensaje) {
  console.log(mensaje);
  // No hay return
}

const retorno = mostrarMensaje('Hola');
console.log(retorno); // undefined`
            }
          ],
          nota: "Una función sin return explícito siempre devuelve undefined."
        },
        {
          titulo: "Parámetros de funciones",
          contenido: "Los parámetros son valores que le pasamos a la función para que pueda operar con ellos. El orden en que los pasamos es importante.",
          conceptosParametros: [
            {
              nombre: "Orden de parámetros",
              descripcion: "Los argumentos se asignan en el mismo orden en que están definidos los parámetros.",
              codigo: `function presentar(nombre, apellido) {
  return \`\${nombre} \${apellido}\`;
}

presentar('Juan', 'García');    // "Juan García"
presentar('García', 'Juan');    // "García Juan" - ¡Orden incorrecto!`
            },
            {
              nombre: "Parámetros por defecto (ES6)",
              descripcion: "Podemos asignar valores por defecto que se usan si no se pasa el argumento.",
              codigo: `// Antes de ES6
function saludar(nombre) {
  nombre = nombre || 'Desconocido';
  return 'Hola, ' + nombre;
}

// Con ES6
function saludar(nombre = 'Desconocido') {
  return 'Hola, ' + nombre;
}

saludar();        // "Hola, Desconocido"
saludar('Ana');   // "Hola, Ana"`
            },
            {
              nombre: "Objeto arguments",
              descripcion: "Todas las funciones tienen acceso al objeto arguments, un array-like con todos los argumentos pasados.",
              codigo: `function sumarTodos() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sumarTodos(1, 2, 3, 4, 5); // 15`
            }
          ]
        },
        {
          titulo: "Paso por valor vs Paso por referencia",
          contenido: "En JavaScript, el comportamiento al pasar argumentos depende del tipo de dato:",
          pasoParametros: [
            {
              tipo: "Paso por VALOR",
              aplicaA: "Tipos primitivos (string, number, boolean, null, undefined)",
              descripcion: "Se pasa una COPIA del valor. Modificar dentro de la función NO afecta al original.",
              codigo: `function duplicar(num) {
  num = num * 2;
  console.log('Dentro:', num);
}

let numero = 5;
duplicar(numero);
console.log('Fuera:', numero);

// Dentro: 10
// Fuera: 5  ← ¡El original no cambió!`,
              color: "success"
            },
            {
              tipo: "Paso por REFERENCIA",
              aplicaA: "Objetos y Arrays",
              descripcion: "Se pasa la REFERENCIA (dirección de memoria). Modificar dentro de la función SÍ afecta al original.",
              codigo: `function agregarItem(arr) {
  arr.push('nuevo');
  console.log('Dentro:', arr);
}

let miArray = ['a', 'b'];
agregarItem(miArray);
console.log('Fuera:', miArray);

// Dentro: ['a', 'b', 'nuevo']
// Fuera: ['a', 'b', 'nuevo']  ← ¡El original cambió!`,
              color: "warning"
            }
          ],
          alerta: "Ten cuidado al pasar arrays u objetos a funciones. Si los modificas, estás modificando el original."
        },
        {
          titulo: "Formas de declarar funciones",
          contenido: "JavaScript ofrece varias formas de declarar funciones, cada una con sus particularidades:",
          tiposDeclaracion: [
            {
              nombre: "Declaración de función (Function Declaration)",
              descripcion: "La forma más tradicional. Se eleva (hoisting) al inicio del scope.",
              codigo: `function saludar(nombre) {
  return 'Hola, ' + nombre;
}

saludar('Ana'); // "Hola, Ana"`,
              icono: "fa-file-code",
              destacado: true
            },
            {
              nombre: "Expresión de función (Function Expression)",
              descripcion: "Se asigna una función a una variable. NO se eleva (hoisting).",
              codigo: `const saludar = function(nombre) {
  return 'Hola, ' + nombre;
};

saludar('Ana'); // "Hola, Ana"`,
              icono: "fa-box"
            },
            {
              nombre: "Función anónima (Lambda)",
              descripcion: "Función sin nombre, almacenada en una variable. Muy usadas como callbacks.",
              codigo: `const multiplicar = function(a, b) {
  return a * b;
};

// El nombre de la función es la variable
multiplicar(3, 4); // 12`,
              icono: "fa-ghost"
            },
            {
              nombre: "Función flecha (Arrow Function - ES6)",
              descripcion: "Sintaxis más corta. No tiene su propio this, arguments, super o new.target.",
              codigo: `// Forma completa
const sumar = (a, b) => {
  return a + b;
};

// Forma corta (return implícito)
const sumar = (a, b) => a + b;

// Un solo parámetro (sin paréntesis)
const doble = n => n * 2;`,
              icono: "fa-arrow-right",
              destacado: true
            }
          ]
        },
        {
          titulo: "Callbacks",
          contenido: "Un callback es una función que se pasa como argumento a otra función, para ser ejecutada posteriormente. Es un patrón muy común en JavaScript.",
          ejemploCallback: {
            descripcion: "Ejemplo de callback: pasar una función como parámetro",
            codigo: `// Función B que será el callback
function funcionB() {
  console.log('¡Soy el callback!');
}

// Función A que recibe un callback
function funcionA(callback) {
  console.log('Ejecutando función A...');
  callback(); // Ejecuta el callback
}

// Llamamos a funcionA pasándole funcionB
funcionA(funcionB);

// Salida:
// "Ejecutando función A..."
// "¡Soy el callback!"`,
            explicacion: "La función A recibe como parámetro la función B y la ejecuta en su interior. Este patrón es la base de la asincronía en JavaScript."
          },
          casoDeUso: {
            titulo: "Caso de uso real: Array.forEach",
            codigo: `const numeros = [1, 2, 3, 4, 5];

// Pasamos una función anónima como callback
numeros.forEach(function(numero) {
  console.log(numero * 2);
});

// Con arrow function
numeros.forEach(numero => console.log(numero * 2));`
          }
        },
        {
          titulo: "Funciones autoejecutables (IIFE)",
          contenido: "Una IIFE (Immediately Invoked Function Expression) es una función que se ejecuta inmediatamente después de definirse.",
          sintaxisIIFE: {
            estructura: "(function() { ... })()",
            codigo: `// IIFE básica
(function() {
  console.log('¡Me ejecuto inmediatamente!');
})();

// IIFE con parámetros
(function(nombre) {
  console.log('Hola, ' + nombre);
})('Ana');

// Con arrow function
(() => {
  console.log('IIFE con arrow function');
})();`,
            usos: [
              "Crear un scope privado para evitar contaminar el scope global",
              "Inicializar configuraciones al cargar",
              "Patrón Module (antes de ES6 modules)"
            ]
          }
        },
        {
          titulo: "Funciones dentro de funciones",
          contenido: "Dentro de una función podemos declarar otras funciones. La función interna tiene acceso al scope de la función externa.",
          funcionesAnidadas: {
            codigo: `function funcionExterna() {
  const variableExterna = 'Soy externa';
  
  function funcionInterna() {
    console.log(variableExterna); // ✓ Puede acceder
    const variableInterna = 'Soy interna';
  }
  
  funcionInterna();
  // console.log(variableInterna); // ✗ Error: no accesible
}

funcionExterna();`,
            nota: "La función interna puede acceder a variables de la externa, pero no al revés."
          },
          retornoFuncion: {
            titulo: "Cuando una función retorna otra función",
            codigo: `function crearSaludo(saludo) {
  return function(nombre) {
    return saludo + ', ' + nombre + '!';
  };
}

const saludoFormal = crearSaludo('Buenos días');
const saludoInformal = crearSaludo('Hola');

saludoFormal('Sr. García');   // "Buenos días, Sr. García!"
saludoInformal('Ana');        // "Hola, Ana!"`,
            explicacion: "Para ejecutar la función retornada, necesitamos dobles paréntesis o almacenarla en una variable."
          }
        }
      ]
    },

    // =====================
    // CLASE 5: STRINGS, NUMBERS Y CONTROL DE FLUJO
    // =====================
    {
      id: 5,
      titulo: "Strings, Numbers y Control de Flujo",
      descripcion: "Métodos de String y Number, condicionales if/else/switch y bucles while/do-while/for.",
      temas: [
        {
          titulo: "El tipo String",
          contenido: "El tipo String permite almacenar caracteres o cadenas de caracteres. Podemos crearlos con comillas simples, dobles o backticks (template literals).",
          formasCrear: [
            {
              tipo: "Comillas simples",
              ejemplo: "let cadena = 'Hola mundo';",
              descripcion: "Forma clásica de crear strings"
            },
            {
              tipo: "Comillas dobles",
              ejemplo: 'let cadena = "Hola mundo";',
              descripcion: "Equivalente a comillas simples"
            },
            {
              tipo: "Template Literals (backticks)",
              ejemplo: "let cadena = `Hola ${nombre}`;",
              descripcion: "Permite interpolar variables y escribir multilínea",
              destacado: true
            }
          ]
        },
        {
          titulo: "Template Literals (Backticks)",
          contenido: "Los template literals, delimitados por backticks (`), permiten interpolar variables dentro del string usando ${variable}. Son mucho más cómodos para concatenar.",
          comparacion: {
            titulo: "Concatenación tradicional vs Template Literals",
            antes: `// Forma antigua (incómoda)
const nombre = 'Juan';
const edad = 25;
const mensaje = 'Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años.';`,
            despues: `// Con Template Literals (recomendado)
const nombre = 'Juan';
const edad = 25;
const mensaje = \`Hola, me llamo \${nombre} y tengo \${edad} años.\`;`
          },
          nota: "Los template literals también permiten strings multilínea sin necesidad de caracteres de escape."
        },
        {
          titulo: "Métodos de String más usados",
          contenido: "Los strings tienen muchos métodos útiles para manipularlos:",
          metodosString: [
            { metodo: ".length", descripcion: "Propiedad que devuelve la longitud del string", ejemplo: "'Hola'.length // 4" },
            { metodo: ".includes(str)", descripcion: "Devuelve true/false si contiene el substring", ejemplo: "'Hola mundo'.includes('mundo') // true" },
            { metodo: ".indexOf(str)", descripcion: "Devuelve la posición donde empieza el substring (-1 si no existe)", ejemplo: "'Hola'.indexOf('o') // 1" },
            { metodo: ".startsWith(str)", descripcion: "Devuelve true/false si empieza por el substring", ejemplo: "'Hola'.startsWith('Ho') // true" },
            { metodo: ".endsWith(str)", descripcion: "Devuelve true/false si termina por el substring", ejemplo: "'Hola'.endsWith('la') // true" },
            { metodo: ".slice(start, end)", descripcion: "Extrae una porción del string", ejemplo: "'Hola mundo'.slice(0, 4) // 'Hola'" },
            { metodo: ".toUpperCase()", descripcion: "Convierte a mayúsculas", ejemplo: "'hola'.toUpperCase() // 'HOLA'" },
            { metodo: ".toLowerCase()", descripcion: "Convierte a minúsculas", ejemplo: "'HOLA'.toLowerCase() // 'hola'" },
            { metodo: ".replace(a, b)", descripcion: "Reemplaza la primera ocurrencia de a por b", ejemplo: "'Hola'.replace('o', 'a') // 'Hala'" },
            { metodo: ".replaceAll(a, b)", descripcion: "Reemplaza TODAS las ocurrencias de a por b", ejemplo: "'Hola'.replaceAll('o', 'a') // 'Hala'" },
            { metodo: ".trim()", descripcion: "Elimina espacios al inicio y final", ejemplo: "'  Hola  '.trim() // 'Hola'" },
            { metodo: ".split(sep)", descripcion: "Divide el string en un array por el separador", ejemplo: "'a,b,c'.split(',') // ['a','b','c']" },
            { metodo: ".repeat(n)", descripcion: "Repite el string n veces", ejemplo: "'Hola '.repeat(3) // 'Hola Hola Hola '" },
            { metodo: ".concat(str)", descripcion: "Concatena strings (alternativa al operador +)", ejemplo: "'Hola'.concat(' ', 'Mundo') // 'Hola Mundo'" }
          ]
        },
        {
          titulo: "Concatenación de Strings",
          contenido: "Existen varias formas de unir strings en JavaScript:",
          formasConcatenacion: [
            {
              metodo: "Operador +",
              descripcion: "La forma más básica de concatenar strings",
              codigo: `const nombre = 'Juan';
const apellido = 'García';
const fullName = nombre + ' ' + apellido;
// "Juan García"`
            },
            {
              metodo: "Template Literals",
              descripcion: "La forma más cómoda y legible (recomendada)",
              codigo: `const nombre = 'Juan';
const edad = 25;
const mensaje = \`Hola, me llamo \${nombre} y tengo \${edad} años.\`;`
            },
            {
              metodo: "Método concat()",
              descripcion: "Método de String para concatenar múltiples valores",
              codigo: `const saludo = 'Hola'.concat(' ', 'Mundo', '!');
// "Hola Mundo!"`
            },
            {
              metodo: "Array.join()",
              descripcion: "Une elementos de un array en un string",
              codigo: `const frutas = ['Banana', 'Orange', 'Apple'];
const resultado = frutas.join(', ');
// "Banana, Orange, Apple"

// Muy útil para CSV
const datos = ['nombre', 'email', 'edad'];
const linea = datos.join(';');
// "nombre;email;edad"`
            }
          ]
        },
        {
          titulo: "Caracteres de Escape",
          contenido: "A veces necesitamos incluir caracteres especiales dentro de un string. Para ello usamos la contrabarra (\\\\).",
          caracteresEscape: [
            { caracter: "\\'", descripcion: "Comilla simple", ejemplo: "'I\\'m here' // I'm here" },
            { caracter: "\\\"", descripcion: "Comilla doble", ejemplo: "\"Dijo: \\\"Hola\\\"\" // Dijo: \"Hola\"" },
            { caracter: "\\\\", descripcion: "Contrabarra", ejemplo: "'C:\\\\Users' // C:\\Users" },
            { caracter: "\\n", descripcion: "Salto de línea", ejemplo: "'Línea1\\nLínea2'" },
            { caracter: "\\t", descripcion: "Tabulador", ejemplo: "'Col1\\tCol2'" }
          ],
          nota: "Con template literals (backticks) puedes incluir comillas simples y dobles sin escapar, y hacer strings multilínea directamente."
        },
        {
          titulo: "El tipo Number",
          contenido: "En JavaScript, Number almacena tanto enteros como decimales. No hay distinción entre int y float como en otros lenguajes.",
          formasCrearNumero: [
            { forma: "Entero", ejemplo: "let n = 42;", descripcion: "Número entero estándar" },
            { forma: "Decimal", ejemplo: "let n = 3.14;", descripcion: "Número con decimales (punto, no coma)" },
            { forma: "Notación científica", ejemplo: "let n = 5e10; // 50000000000", descripcion: "Útil para números muy grandes o pequeños" }
          ],
          valoresEspeciales: [
            { valor: "Infinity", descripcion: "Representa el infinito positivo" },
            { valor: "-Infinity", descripcion: "Representa el infinito negativo" },
            { valor: "NaN", descripcion: "Not a Number - resultado de operaciones inválidas" }
          ],
          constantesNumber: [
            { constante: "Number.MAX_VALUE", descripcion: "Número máximo representable", valor: "1.79e+308" },
            { constante: "Number.MIN_VALUE", descripcion: "Número positivo más pequeño", valor: "5e-324" },
            { constante: "Number.MAX_SAFE_INTEGER", descripcion: "Entero seguro máximo", valor: "9007199254740991" }
          ],
          nota: "Para números mayores que MAX_SAFE_INTEGER, usa BigInt (ej: 9007199254740992n)."
        },
        {
          titulo: "Métodos de Number y Math",
          contenido: "Métodos útiles para trabajar con números:",
          metodosNumber: [
            { metodo: ".toFixed(n)", descripcion: "Redondea a n decimales (devuelve string)", ejemplo: "(3.14159).toFixed(2) // '3.14'" },
            { metodo: "parseInt(str)", descripcion: "Convierte string a entero", ejemplo: "parseInt('42') // 42" },
            { metodo: "parseFloat(str)", descripcion: "Convierte string a decimal", ejemplo: "parseFloat('3.14') // 3.14" },
            { metodo: "Number(valor)", descripcion: "Convierte cualquier valor a número", ejemplo: "Number('42') // 42" },
            { metodo: "Math.round(n)", descripcion: "Redondea al entero más cercano", ejemplo: "Math.round(4.5) // 5" },
            { metodo: "Math.floor(n)", descripcion: "Redondea hacia abajo", ejemplo: "Math.floor(4.9) // 4" },
            { metodo: "Math.ceil(n)", descripcion: "Redondea hacia arriba", ejemplo: "Math.ceil(4.1) // 5" },
            { metodo: "Math.abs(n)", descripcion: "Valor absoluto", ejemplo: "Math.abs(-5) // 5" },
            { metodo: "Math.random()", descripcion: "Número aleatorio entre 0 y 1", ejemplo: "Math.random() // 0.234..." }
          ]
        },
        {
          titulo: "Condicional if / else",
          contenido: "El condicional if evalúa una condición y ejecuta un bloque de código si es verdadera. Se puede combinar con else y else if.",
          estructuraCondicional: {
            sintaxis: `// Condicional simple
if (condición) {
  // Se ejecuta si condición es true
}

// Con else
if (condición) {
  // Si true
} else {
  // Si false
}

// Con else if
if (condición1) {
  // Si condición1 es true
} else if (condición2) {
  // Si condición2 es true
} else {
  // Si ninguna es true
}`,
            ejemplo: `const edad = 18;

if (edad >= 18) {
  console.log('Es mayor de edad');
} else if (edad >= 13) {
  console.log('Es adolescente');
} else {
  console.log('Es menor de 13 años');
}`
          }
        },
        {
          titulo: "Operador Ternario",
          contenido: "El operador ternario es una forma abreviada de if/else en una sola línea. Muy útil para asignaciones condicionales.",
          sintaxis: "condición ? valorSiTrue : valorSiFalse",
          ejemplo: `const edad = 20;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(mensaje); // 'Mayor de edad'`,
          nota: "Se usa mucho en React para renderizado condicional: {isLoading ? <Spinner /> : <Content />}"
        },
        {
          titulo: "Switch",
          contenido: "El switch evalúa una expresión y ejecuta el caso que coincida. Es útil cuando hay múltiples valores posibles.",
          estructuraSwitch: {
            sintaxis: `switch (expresión) {
  case valor1:
    // Código si expresión === valor1
    break;
  case valor2:
    // Código si expresión === valor2
    break;
  default:
    // Código si no coincide ningún caso
}`,
            ejemplo: `const dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('Día laborable');
}`
          },
          alerta: "¡No olvides el break! Sin él, la ejecución continúa al siguiente caso (fall-through)."
        },
        {
          titulo: "Bucle while",
          contenido: "El bucle while ejecuta un bloque mientras la condición sea verdadera. Primero evalúa, luego ejecuta.",
          estructuraWhile: {
            sintaxis: `while (condición) {
  // Código que se repite mientras condición sea true
  // ¡Importante! Modificar la variable de la condición
}`,
            ejemplo: `let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
// Imprime: 0, 1, 2, 3, 4`
          },
          alerta: "¡Cuidado con los bucles infinitos! Asegúrate de modificar la variable de la condición dentro del bucle."
        },
        {
          titulo: "Bucle do...while",
          contenido: "Similar al while, pero primero ejecuta y luego evalúa. Garantiza al menos una ejecución.",
          estructuraDoWhile: {
            sintaxis: `do {
  // Código que se ejecuta al menos una vez
} while (condición);`,
            ejemplo: `let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
// Imprime: 0, 1, 2, 3, 4`
          },
          nota: "La diferencia clave: do...while siempre ejecuta al menos una vez, while puede no ejecutarse nunca."
        },
        {
          titulo: "Bucle for",
          contenido: "El bucle for es ideal cuando conocemos el número de iteraciones. Combina inicialización, condición e incremento.",
          estructuraFor: {
            sintaxis: `for (inicialización; condición; incremento) {
  // Código que se repite
}`,
            ejemplo: `for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Imprime: 0, 1, 2, 3, 4`,
            explicacion: [
              "Inicialización: let i = 0 → Se ejecuta una sola vez al inicio",
              "Condición: i < 5 → Se evalúa antes de cada iteración",
              "Incremento: i++ → Se ejecuta después de cada iteración"
            ]
          }
        }
      ]
    },

    // =====================
    // CLASE 6: SCOPE, HOISTING Y CLOSURES
    // =====================
    {
      id: 6,
      titulo: "Scope, Hoisting y Closures",
      descripcion: "Comprende el ámbito de las variables, la elevación (hoisting) y los closures, conceptos fundamentales de JavaScript.",
      temas: [
        {
          titulo: "¿Qué es el Scope?",
          contenido: "El scope (ámbito) define el contexto donde las variables y funciones son accesibles. Es como el 'rango de acción' de una variable.",
          definicionScope: {
            descripcion: "El scope determina dónde una variable puede ser usada. Si una variable no está en el scope actual, no está disponible.",
            reglas: [
              "Las variables solo son accesibles dentro del scope donde fueron declaradas",
              "Los scopes hijos pueden acceder a scopes padres, pero NO al revés",
              "Cada función crea un nuevo scope"
            ]
          }
        },
        {
          titulo: "Tipos de Scope",
          contenido: "En JavaScript existen tres tipos principales de scope:",
          tiposScope: [
            {
              tipo: "Scope Global",
              descripcion: "Variables declaradas fuera de toda función o bloque. Accesibles desde cualquier parte del código.",
              ejemplo: `let global = 'Soy global';

function miFuncion() {
  console.log(global); // ✓ Accesible
}`,
              icono: "fa-globe",
              color: "warning"
            },
            {
              tipo: "Scope de Función",
              descripcion: "Variables declaradas dentro de una función. Solo accesibles dentro de esa función.",
              ejemplo: `function miFuncion() {
  let local = 'Soy local';
  console.log(local); // ✓ Accesible
}

console.log(local); // ✗ Error: local is not defined`,
              icono: "fa-cube",
              color: "primary"
            },
            {
              tipo: "Scope de Bloque",
              descripcion: "Variables declaradas con let/const dentro de un bloque { }. Solo accesibles dentro del bloque.",
              ejemplo: `if (true) {
  let bloque = 'Solo aquí';
  console.log(bloque); // ✓ Accesible
}

console.log(bloque); // ✗ Error`,
              icono: "fa-square",
              color: "success"
            }
          ],
          alerta: "var NO tiene scope de bloque, solo de función. Por eso se recomienda usar let y const."
        },
        {
          titulo: "Cadena de Scope (Scope Chain)",
          contenido: "Cuando JavaScript busca una variable, primero la busca en el scope local. Si no la encuentra, sube al scope padre, y así sucesivamente hasta el scope global.",
          ejemploCadena: {
            codigo: `let fruta = 'Manzana';  // Scope global

function comer() {
  let fruta = 'Plátano';  // Scope local de comer
  
  function lavar() {
    console.log(fruta);   // Busca en su scope, luego en el padre
  }
  
  lavar();  // Imprime 'Plátano'
}

comer();
console.log(fruta);  // Imprime 'Manzana'`,
            explicacion: "La función lavar() no tiene una variable 'fruta', así que busca en su scope padre (comer) y la encuentra. No llega al global."
          }
        },
        {
          titulo: "El objeto window (navegador)",
          contenido: "En el navegador, las variables globales declaradas con var se añaden al objeto window. Esto permite acceder a ellas explícitamente.",
          objetoWindow: {
            codigo: `var fruta = 'Melón';  // Se añade a window

function comer() {
  let fruta = 'Plátano';  // Variable local
  
  function lavar() {
    // Accede a la variable global explícitamente
    console.log(window.fruta);  // 'Melón'
  }
  
  lavar();
  console.log(fruta);  // 'Plátano' (local)
}

comer();`,
            puntosClave: [
              "var se añade al objeto window, let y const NO",
              "Puedes usar window.variable para acceder al scope global",
              "Esta técnica es útil cuando hay colisión de nombres",
              "En Node.js no existe window, se usa global"
            ]
          },
          alerta: "Evita usar variables globales siempre que sea posible. Poluciona el namespace global y puede causar colisiones."
        },
        {
          titulo: "¿Qué es el Hoisting?",
          contenido: "Hoisting (elevación) es un comportamiento de JavaScript donde las declaraciones de variables (var) y funciones se 'elevan' al inicio de su scope antes de ejecutar el código.",
          ejemploHoisting: {
            pregunta: "¿Qué imprime este código?",
            codigo: `console.log(nombre);
var nombre = 'Juan';`,
            respuesta: "undefined",
            explicacion: `JavaScript lo interpreta así:
var nombre;           // Declaración elevada
console.log(nombre);  // undefined (declarada pero sin valor)
nombre = 'Juan';      // Asignación en su lugar original`
          },
          nota: "Solo se eleva la DECLARACIÓN, no la asignación. Por eso imprime undefined en lugar de error."
        },
        {
          titulo: "¿Qué sufre Hoisting?",
          contenido: "No todas las declaraciones se comportan igual con el hoisting:",
          tablaHoisting: [
            { elemento: "var", hoisting: "Sí - Se eleva la declaración", resultado: "undefined antes de asignar" },
            { elemento: "let", hoisting: "Parcial - 'Temporal Dead Zone'", resultado: "ReferenceError antes de declarar" },
            { elemento: "const", hoisting: "Parcial - 'Temporal Dead Zone'", resultado: "ReferenceError antes de declarar" },
            { elemento: "function declaration", hoisting: "Sí - Se eleva completa", resultado: "Funciona antes de declararla" },
            { elemento: "function expression", hoisting: "No", resultado: "Error antes de declararla" },
            { elemento: "arrow function", hoisting: "No", resultado: "Error antes de declararla" }
          ],
          ejemploFunciones: {
            funcionDeclarativa: `// ✓ Funciona por hoisting
saludar();

function saludar() {
  console.log('Hola');
}`,
            funcionExpresion: `// ✗ Error: Cannot access 'saludar' before initialization
saludar();

const saludar = function() {
  console.log('Hola');
};`
          }
        },
        {
          titulo: "Comparativa: var vs let vs const",
          contenido: "Resumen de las diferencias entre las tres formas de declarar variables:",
          tablaComparativa: [
            { caracteristica: "Scope", var: "Función", let: "Bloque", const: "Bloque" },
            { caracteristica: "Reasignable", var: "Sí", let: "Sí", const: "No" },
            { caracteristica: "Redeclarable", var: "Sí", let: "No", const: "No" },
            { caracteristica: "Sin valor inicial", var: "Sí", let: "Sí", const: "No" },
            { caracteristica: "Se añade a window", var: "Sí", let: "No", const: "No" },
            { caracteristica: "Hoisting", var: "Sí (undefined)", let: "TDZ", const: "TDZ" }
          ],
          recomendacion: "Usa const por defecto. Usa let solo cuando necesites reasignar. Evita var."
        },
        {
          titulo: "¿Qué es un Closure?",
          contenido: "Un closure es una función que 'recuerda' las variables del scope donde fue creada, incluso después de que ese scope haya terminado de ejecutarse.",
          requisitos: [
            "Una función anidada (función dentro de función)",
            "La función interna accede a variables de la función externa",
            "La función interna se ejecuta fuera de su scope original"
          ]
        },
        {
          titulo: "Ejemplo de Closure: Contador",
          contenido: "El ejemplo clásico de closure es un contador con datos privados:",
          ejemploClosure: {
            codigo: `function crearContador(valorInicial = 0) {
  // Variable PRIVADA - solo accesible desde dentro
  let contador = valorInicial;
  
  // Retornamos un objeto con métodos
  return {
    incrementar: function() {
      contador++;
      return contador;
    },
    decrementar: function() {
      contador--;
      return contador;
    },
    obtenerValor: function() {
      return contador;
    }
  };
}

// Crear dos contadores independientes
const c1 = crearContador(0);
const c2 = crearContador(100);

c1.incrementar(); // 1
c1.incrementar(); // 2
c2.decrementar(); // 99

console.log(c1.obtenerValor()); // 2
console.log(c2.obtenerValor()); // 99

// c1.contador → undefined (¡es privado!)`,
            puntosClave: [
              "La variable 'contador' es privada, no se puede acceder directamente",
              "Cada llamada a crearContador() crea un nuevo scope independiente",
              "Los métodos 'recuerdan' la variable contador de su closure",
              "Este patrón se usaba para emular clases antes de ES6"
            ]
          }
        },
        {
          titulo: "¿Por qué son útiles los Closures?",
          contenido: "Los closures tienen múltiples usos en JavaScript moderno:",
          usosClosures: [
            {
              uso: "Encapsulación / Datos privados",
              descripcion: "Crear variables que no son accesibles desde fuera, como en el ejemplo del contador."
            },
            {
              uso: "Factory Functions",
              descripcion: "Funciones que crean y retornan otras funciones con configuraciones específicas."
            },
            {
              uso: "Memoización",
              descripcion: "Guardar resultados de funciones costosas para no recalcularlos."
            },
            {
              uso: "Event Handlers",
              descripcion: "Mantener el contexto en callbacks y manejadores de eventos."
            }
          ],
          nota: "Los closures son la base de muchos patrones en JavaScript y se usan intensivamente en React (hooks como useState usan closures)."
        }
      ]
    },

    // =====================
    // CLASE 7: EJERCICIOS PRÁCTICOS
    // =====================
    {
      id: 7,
      titulo: "Ejercicios Prácticos",
      descripcion: "Resolución de ejercicios para practicar operadores, condicionales y validación de entrada de usuario.",
      temas: [
        {
          titulo: "Validación de entrada del usuario",
          contenido: "Cuando pedimos datos al usuario, es importante validar que ha introducido valores correctos antes de procesarlos.",
          tecnicasValidacion: {
            prompt: `// Usar prompt para pedir datos
const nombre = prompt('Introduce tu nombre:');

// Convertir a número
const numero = Number(prompt('Introduce un número:'));
// o también
const numero = parseFloat(prompt('Introduce un número:'));`,
            validacion: `// Validar con while
let respuesta = prompt('¿Tienes tatuajes? (S/N)');

while (respuesta !== 'S' && respuesta !== 'N') {
  respuesta = prompt('Respuesta no válida. ¿Tienes tatuajes? (S/N)');
}

// Ahora respuesta es seguro que es 'S' o 'N'`
          }
        },
        {
          titulo: "Ejercicio: Comparar números",
          contenido: "Programa que pide 3 números y muestra si alguno es mayor que 100.",
          solucion: {
            codigo: `const n1 = Number(prompt('Primer número:'));
const n2 = Number(prompt('Segundo número:'));
const n3 = Number(prompt('Tercer número:'));

if (n1 > 100) {
  console.log(\`El número \${n1} es mayor que 100\`);
}
if (n2 > 100) {
  console.log(\`El número \${n2} es mayor que 100\`);
}
if (n3 > 100) {
  console.log(\`El número \${n3} es mayor que 100\`);
}`
          }
        },
        {
          titulo: "Ejercicio: Rango de números",
          contenido: "Programa que pide un límite inferior, superior, y un número, y dice si está dentro del rango.",
          solucion: {
            codigo: `const limitDown = parseFloat(prompt('Límite inferior:'));
const limitUp = parseFloat(prompt('Límite superior:'));
const n = parseFloat(prompt('Introduce un número:'));

if (n > limitDown && n < limitUp) {
  console.log(\`\${n} está entre \${limitDown} y \${limitUp}\`);
} else {
  console.log(\`\${n} NO está entre los límites\`);
}`
          }
        },
        {
          titulo: "Ejercicio: Donación de sangre",
          contenido: "Programa que pregunta si tiene tatuajes, hepatitis o anemia, y dice si puede donar sangre.",
          solucion: {
            codigo: `let tatuajes = prompt('¿Tiene tatuajes? (S/N)');
let hepatitis = prompt('¿Ha tenido hepatitis? (S/N)');
let anemia = prompt('¿Tiene anemia? (S/N)');

if (tatuajes === 'S' || hepatitis === 'S' || anemia === 'S') {
  console.log('No puede donar sangre');
} else {
  console.log('¡Tu sangre es bienvenida!');
}`
          }
        },
        {
          titulo: "Ejercicio: Acceso al club",
          contenido: "Solo pueden entrar socios con cuota al día O no socios con autorización.",
          solucion: {
            codigo: `const isSocio = prompt('¿Eres socio? (S/N)');

if (isSocio === 'S') {
  const cuota = prompt('¿Has pagado la cuota? (S/N)');
  if (cuota === 'S') {
    console.log('Acceso permitido');
  } else {
    console.log('Acceso denegado: cuota pendiente');
  }
} else {
  const autorizacion = prompt('¿Tienes autorización? (S/N)');
  if (autorizacion === 'S') {
    console.log('Acceso permitido');
  } else {
    console.log('Acceso denegado: sin autorización');
  }
}`
          }
        },
        {
          titulo: "Ejercicio: Promoción de cátedra",
          contenido: "Pide 3 notas de parciales. Promociona si al menos 2 son >= 8.",
          solucion: {
            codigo: `const nota1 = parseFloat(prompt('Nota del primer parcial:'));
const nota2 = parseFloat(prompt('Nota del segundo parcial:'));
const nota3 = parseFloat(prompt('Nota del tercer parcial:'));

let aprobados = 0;

if (nota1 >= 8) aprobados++;
if (nota2 >= 8) aprobados++;
if (nota3 >= 8) aprobados++;

if (aprobados >= 2) {
  console.log('¡Promociona!');
} else {
  console.log('No promociona');
}`
          }
        }
      ]
    }
  ]
};
