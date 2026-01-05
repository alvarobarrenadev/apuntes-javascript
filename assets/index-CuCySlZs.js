const r={titulo:"Conceptos Básicos",descripcion:"Fundamentos, variables, tipos de datos y operadores esenciales de JavaScript.",icono:"fa-bolt",clases:[{id:1,titulo:"Introducción a JavaScript",descripcion:"Descubre qué es JavaScript, sus características únicas, cómo ejecutarlo y la historia de ECMAScript.",temas:[{titulo:"¿Qué es JavaScript?",contenido:'JavaScript es el tercer pilar fundamental del desarrollo web, junto con HTML y CSS. Mientras HTML estructura la información y CSS la estiliza, JavaScript actúa como el "cerebro" que permite manipular y controlar todo lo que hemos construido previamente.',puntosClave:["Es el responsable de controlar toda la interactividad del usuario en la web","Es el único lenguaje de programación que funciona nativamente en los navegadores","Es un lenguaje de programación completo (Turing completo)","Fue desarrollado por Brendan Eich de Netscape en 1995"]},{titulo:"Características del lenguaje",contenido:"JavaScript tiene características únicas que lo diferencian de otros lenguajes de programación.",caracteristicas:[{nombre:"Interpretado",descripcion:"No necesita compilación, el navegador lo ejecuta directamente"},{nombre:"Tipado dinámico",descripcion:"Una variable puede cambiar de tipo en tiempo de ejecución. El tipo está asociado al valor, no a la variable"},{nombre:"Objetual",descripcion:"Casi todo en JavaScript son objetos, incluyendo arrays y funciones"},{nombre:"Funciones de primera clase",descripcion:"Las funciones son objetos que tienen sus propias propiedades y métodos"}]},{titulo:"Cómo ejecutar JavaScript",contenido:"Existen cuatro formas principales de ejecutar código JavaScript:",metodos:[{nombre:"Consola del navegador",descripcion:"Abre el inspector de elementos (F12) y ve a la pestaña Console. Puedes escribir código directamente.",ejemplo:"console.log('¡Hola Mundo!');"},{nombre:"Etiqueta &lt;script&gt; inline",descripcion:"Escribe código JavaScript directamente dentro de una etiqueta &lt;script&gt; en tu HTML.",ejemplo:`<script>
  console.log('Desde HTML');
<\/script>`},{nombre:"Archivo externo",descripcion:"Crea un archivo .js y enlázalo con &lt;script src='archivo.js'&gt;&lt;/script&gt;",ejemplo:"<script src='script.js'><\/script>"},{nombre:"Node.js",descripcion:"Ejecuta archivos JavaScript desde la terminal con el comando node.",ejemplo:"node script.js"}]},{titulo:"Ubicación del script",contenido:"La posición de la etiqueta &lt;script&gt; afecta cuándo se ejecuta el código:",posiciones:[{lugar:"En el &lt;head&gt;",comportamiento:"Se ejecuta ANTES de que se pinte el HTML. El DOM no está disponible.",solucion:"Usar el atributo defer para esperar a que cargue la página"},{lugar:"En el &lt;body&gt;",comportamiento:"Se ejecuta mientras se dibuja la página"},{lugar:"Antes de &lt;/body&gt;",comportamiento:"Se ejecuta DESPUÉS de pintar todo el HTML. El DOM está completamente disponible."}],codigoEjemplo:`<!-- Con defer: espera a que cargue toda la página -->
<script src="script.js" defer><\/script>`},{titulo:"Console: tu mejor amigo",contenido:"El objeto console proporciona métodos para depurar y mostrar información:",metodos:[{nombre:"console.log()",descripcion:"Imprime información general",color:"default"},{nombre:"console.info()",descripcion:"Imprime información (con icono)",color:"blue"},{nombre:"console.warn()",descripcion:"Muestra advertencias (amarillo)",color:"yellow"},{nombre:"console.error()",descripcion:"Muestra errores (rojo)",color:"red"},{nombre:"console.clear()",descripcion:"Limpia la consola",color:"gray"}]},{titulo:"Entornos de ejecución",contenido:"JavaScript puede ejecutarse en diferentes entornos, y dependiendo de dónde se ejecute, tendrás acceso a diferentes objetos y APIs:",caracteristicas:[{nombre:"Frontend (Navegador)",descripcion:"Tienes acceso al objeto window, document (DOM), y puedes manipular la página web"},{nombre:"Backend (Node.js)",descripcion:"Tienes acceso al sistema de archivos, redes, pero NO al DOM ni a window"}],nota:"Los scripts pueden interactuar con el mundo exterior de forma diferente según el entorno. En frontend manipulas el DOM, en backend accedes a archivos."},{titulo:"ECMAScript: La evolución del lenguaje",contenido:"JavaScript se basa en el estándar ECMAScript. A lo largo de los años, se han añadido nuevas características:",versiones:[{anio:"1997",version:"ES1",novedades:"Primera edición del estándar"},{anio:"2009",version:"ES5",novedades:"strict mode, JSON, métodos de Array"},{anio:"2015",version:"ES6/ES2015",novedades:"let/const, clases, arrow functions, promises, modules",destacado:!0},{anio:"2016",version:"ES2016",novedades:"Array.includes(), operador **"},{anio:"2017",version:"ES2017",novedades:"async/await, Object.entries()"},{anio:"2020",version:"ES2020",novedades:"Nullish coalescing (??), optional chaining (?.)"}],nota:"ES6 (2015) fue un cambio revolucionario. Las versiones modernas añaden mejoras cada año."}]},{id:2,titulo:"Variables y Tipos de Datos",descripcion:"Aprende a declarar variables con let y const, y domina los tipos primitivos (string, number, boolean...).",temas:[{titulo:"¿Qué es una variable?",contenido:"Una variable es una zona de memoria RAM a la que le asignamos un nombre para poder hacer referencia a ella posteriormente. Es como decirle al sistema: 'necesito espacio para guardar datos, y quiero llamarlo así'.",puntosClave:["Usar nombres descriptivos (no 'a', 'b', 'x')","Evitar ambigüedades","Evitar palabras reservadas del lenguaje","No usar tildes ni caracteres especiales","Usar camelCase para nombrar variables"]},{titulo:"Declaración de variables",contenido:"JavaScript ofrece tres formas de declarar variables, cada una con un comportamiento diferente:",tipos:[{palabra:"var",descripcion:"Forma antigua. Tiene scope de función y permite redeclaración. NO RECOMENDADO.",ejemplo:"var nombre = 'JavaScript';",icono:"fa-triangle-exclamation",color:"warning"},{palabra:"let",descripcion:"Forma moderna. Tiene scope de bloque y permite reasignación pero no redeclaración.",ejemplo:`let contador = 0;
contador = 1; // ✓ Válido`,icono:"fa-check",color:"success"},{palabra:"const",descripcion:"Para constantes. No permite reasignación ni redeclaración. Obligatorio inicializar.",ejemplo:`const PI = 3.14159;
PI = 3; // ✗ Error`,icono:"fa-lock",color:"primary"}]},{titulo:"Tipos de datos primitivos",contenido:"JavaScript tiene 7 tipos de datos primitivos:",tipos:[{nombre:"String",descripcion:"Cadenas de texto. Se definen con comillas simples, dobles o backticks.",ejemplos:["'Hola'",'"Mundo"',"`Template literal`"]},{nombre:"Number",descripcion:"Números enteros y decimales. JavaScript no distingue entre int y float.",ejemplos:["42","3.14","-7","Infinity","NaN"]},{nombre:"Boolean",descripcion:"Valores lógicos: verdadero o falso.",ejemplos:["true","false"]},{nombre:"Undefined",descripcion:"Variable declarada pero sin valor asignado.",ejemplos:["let sinValor; // undefined"]},{nombre:"Null",descripcion:"Ausencia intencional de valor. Se asigna explícitamente.",ejemplos:["let vacio = null;"]},{nombre:"Symbol",descripcion:"Identificadores únicos e inmutables (ES6+).",ejemplos:["Symbol('id')"]},{nombre:"BigInt",descripcion:"Para números enteros muy grandes que exceden Number.MAX_SAFE_INTEGER.",ejemplos:["9007199254740991n","BigInt(9007199254740991)"]}]},{titulo:"typeof: Conocer el tipo",contenido:"El operador typeof devuelve una cadena indicando el tipo de dato de una variable:",ejemplos:[{codigo:'typeof "Hola"',resultado:'"string"'},{codigo:"typeof 42",resultado:'"number"'},{codigo:"typeof true",resultado:'"boolean"'},{codigo:"typeof undefined",resultado:'"undefined"'},{codigo:"typeof null",resultado:'"object" // ¡Bug histórico!'},{codigo:"typeof Symbol()",resultado:'"symbol"'},{codigo:"typeof function(){}",resultado:'"function"'}],nota:"typeof null devuelve 'object' debido a un bug histórico de JavaScript que se mantiene por compatibilidad."},{titulo:"Convención de nombres (Naming Convention)",contenido:"En JavaScript usamos camelCase para variables y funciones:",reglas:[{tipo:"Variables",ejemplo:"let nombreUsuario = 'Juan';",estilo:"camelCase"},{tipo:"Constantes globales",ejemplo:"const MAX_INTENTOS = 3;",estilo:"SCREAMING_SNAKE_CASE"},{tipo:"Funciones",ejemplo:"function calcularTotal() {}",estilo:"camelCase"},{tipo:"Clases",ejemplo:"class Usuario {}",estilo:"PascalCase"},{tipo:"Booleanos",ejemplo:"let isLoading = true;",estilo:"prefijo is/has/can"}]}]},{id:3,titulo:"Operadores en JavaScript",descripcion:"Domina los operadores aritméticos, lógicos, de comparación y el operador ternario.",temas:[{titulo:"Operadores Aritméticos",contenido:"Operadores para realizar cálculos matemáticos:",operadores:[{simbolo:"+",nombre:"Suma",ejemplo:"5 + 3 // 8"},{simbolo:"-",nombre:"Resta",ejemplo:"10 - 4 // 6"},{simbolo:"*",nombre:"Multiplicación",ejemplo:"4 * 3 // 12"},{simbolo:"/",nombre:"División",ejemplo:"15 / 3 // 5"},{simbolo:"%",nombre:"Módulo (resto)",ejemplo:"7 % 2 // 1",destacado:!0},{simbolo:"**",nombre:"Potencia",ejemplo:"2 ** 3 // 8",destacado:!0}],nota:"El operador módulo (%) es útil para verificar si un número es divisible por otro: si n % 2 === 0, el número es par."},{titulo:"Operadores de Asignación",contenido:"El operador = asigna el valor de la derecha a la variable de la izquierda:",operadores:[{simbolo:"=",nombre:"Asignación simple",ejemplo:"let x = 5;"},{simbolo:"+=",nombre:"Suma y asigna",equivalente:"x = x + y",ejemplo:"x += 3; // x = 8"},{simbolo:"-=",nombre:"Resta y asigna",equivalente:"x = x - y",ejemplo:"x -= 2; // x = 6"},{simbolo:"*=",nombre:"Multiplica y asigna",equivalente:"x = x * y",ejemplo:"x *= 2; // x = 12"},{simbolo:"/=",nombre:"Divide y asigna",equivalente:"x = x / y",ejemplo:"x /= 3; // x = 4"},{simbolo:"**=",nombre:"Potencia y asigna",equivalente:"x = x ** y",ejemplo:"x **= 2; // x = 16"}]},{titulo:"Operadores Unarios",contenido:"Operadores que actúan sobre una sola variable:",operadores:[{simbolo:"++",nombre:"Incremento",variantes:[{forma:"a++",descripcion:"Post-incremento: usa el valor y LUEGO incrementa"},{forma:"++a",descripcion:"Pre-incremento: incrementa PRIMERO y luego usa el valor"}]},{simbolo:"--",nombre:"Decremento",variantes:[{forma:"a--",descripcion:"Post-decremento: usa el valor y LUEGO decrementa"},{forma:"--a",descripcion:"Pre-decremento: decrementa PRIMERO y luego usa el valor"}]}],ejemplo:`let a = 5;
console.log(a++); // Imprime 5,  luego a = 6
console.log(++a); // Incrementa, luego imprime 7`},{titulo:"Operadores de Comparación",contenido:"Comparan valores y devuelven un booleano (true/false):",operadores:[{simbolo:"==",nombre:"Igualdad (valor)",descripcion:"Compara valores, NO tipos. Hace coerción.",ejemplo:'5 == "5" // true'},{simbolo:"===",nombre:"Igualdad estricta",descripcion:"Compara valor Y tipo. RECOMENDADO.",ejemplo:'5 === "5" // false',destacado:!0},{simbolo:"!=",nombre:"Desigualdad",descripcion:"Distinto valor (con coerción)",ejemplo:'5 != "6" // true'},{simbolo:"!==",nombre:"Desigualdad estricta",descripcion:"Distinto valor O tipo",ejemplo:'5 !== "5" // true',destacado:!0},{simbolo:">",nombre:"Mayor que",ejemplo:"10 > 5 // true"},{simbolo:">=",nombre:"Mayor o igual",ejemplo:"5 >= 5 // true"},{simbolo:"<",nombre:"Menor que",ejemplo:"3 < 8 // true"},{simbolo:"<=",nombre:"Menor o igual",ejemplo:"4 <= 4 // true"}],alerta:"SIEMPRE usa === y !== para evitar comportamientos inesperados por coerción de tipos."},{titulo:"Operadores Lógicos",contenido:"Combinan expresiones booleanas:",operadores:[{simbolo:"&&",nombre:"AND (Y lógico)",regla:"Devuelve true si AMBOS son true",tablaVerdad:[{a:"true",b:"true",resultado:"true"},{a:"true",b:"false",resultado:"false"},{a:"false",b:"true",resultado:"false"},{a:"false",b:"false",resultado:"false"}],comportamientoJS:"Con no-booleanos: devuelve B si ambos son truthy, sino devuelve A"},{simbolo:"||",nombre:"OR (O lógico)",regla:"Devuelve true si AL MENOS UNO es true",tablaVerdad:[{a:"true",b:"true",resultado:"true"},{a:"true",b:"false",resultado:"true"},{a:"false",b:"true",resultado:"true"},{a:"false",b:"false",resultado:"false"}],comportamientoJS:"Con no-booleanos: devuelve A si es truthy, sino devuelve B"},{simbolo:"!",nombre:"NOT (Negación)",regla:"Invierte el valor booleano",ejemplos:["!true // false","!false // true","!0 // true","!'' // true"]}]},{titulo:"Operador Ternario",contenido:"Una forma abreviada de escribir un if-else en una sola línea:",sintaxis:"condición ? valorSiTrue : valorSiFalse",ejemplos:[{descripcion:"Determinar mayoría de edad",codigo:`const edad = 20;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
// mensaje = 'Mayor de edad'`},{descripcion:"Asignar rol según nombre",codigo:`const name = 'Admin';
const rol = name === 'Admin' ? 'Administrador' : 'Usuario';`}]},{titulo:"Operador Nullish Coalescing (??)",contenido:"Devuelve el operando derecho solo cuando el izquierdo es null o undefined (ES2020):",sintaxis:"a ?? b",comparacion:[{expresion:"null ?? 'default'",resultadoNullish:"'default'",resultadoOr:"'default'"},{expresion:"undefined ?? 'default'",resultadoNullish:"'default'",resultadoOr:"'default'"},{expresion:"0 ?? 'default'",resultadoNullish:"0",resultadoOr:"'default'",diferente:!0},{expresion:"'' ?? 'default'",resultadoNullish:"''",resultadoOr:"'default'",diferente:!0},{expresion:"false ?? 'default'",resultadoNullish:"false",resultadoOr:"'default'",diferente:!0}],nota:"A diferencia de ||, el operador ?? NO considera 0, '' o false como valores 'nullish'."},{titulo:"Concepto: Truthy y Falsy",contenido:"En JavaScript, cualquier valor puede evaluarse como booleano. Esto es fundamental para entender los operadores lógicos.",puntosClave:["Valores Falsy: Se evalúan como false.","Valores Truthy: Se evalúan como true (todo lo que no es falsy)."],caracteristicas:[{nombre:"Valores Falsy (6)",descripcion:'false, 0, "" (string vacío), null, undefined, NaN'},{nombre:"Valores Truthy",descripcion:'Todo lo demás. Ej: "hola", 42, [], {}, function(){}'}],nota:"OJO: [] (array vacío) y {} (objeto vacío) son TRUTHY, a diferencia de otros lenguajes."},{titulo:"Comportamiento especial de && y ||",contenido:"Cuando usamos && y || con valores NO booleanos, JavaScript tiene un comportamiento especial que se usa mucho en React:",reglas:[{operador:"&&",regla:"Si A es truthy → devuelve B. Si A es falsy → devuelve A.",ejemplos:[{codigo:"10 && 20",resultado:"20",explicacion:"10 es truthy, devuelve B"},{codigo:"0 && 'hola'",resultado:"0",explicacion:"0 es falsy, devuelve A"},{codigo:"'texto' && 'otro'",resultado:"'otro'",explicacion:"Ambos truthy, devuelve B"},{codigo:"null && 'algo'",resultado:"null",explicacion:"null es falsy, devuelve A"}]},{operador:"||",regla:"Si A es truthy → devuelve A. Si A es falsy → devuelve B.",ejemplos:[{codigo:"10 || 20",resultado:"10",explicacion:"10 es truthy, devuelve A"},{codigo:"0 || 'default'",resultado:"'default'",explicacion:"0 es falsy, devuelve B"},{codigo:"'' || 'texto'",resultado:"'texto'",explicacion:"'' es falsy, devuelve B"},{codigo:"'hola' || 'otro'",resultado:"'hola'",explicacion:"'hola' es truthy, devuelve A"}]}],nota:"Estos patrones se usan mucho en React para renderizado condicional: {isLoading && &lt;Spinner /&gt;}"},{titulo:"Operador de Asignación Nula (??=)",contenido:"Asigna un valor a una variable SOLO si esta es null o undefined (ES2020):",sintaxis:"x ??= valor",equivalencia:"Es equivalente a: if (x === null || x === undefined) { x = valor; }",ejemplos:[{codigo:`let x = null;
x ??= 50;
// x = 50`,explicacion:"x era null, se asigna 50"},{codigo:`let y = 10;
y ??= 50;
// y = 10`,explicacion:"y ya tenía valor, no se modifica"},{codigo:`let z;
z ??= 'default';
// z = 'default'`,explicacion:"z era undefined, se asigna"}],nota:"Útil para asignar valores por defecto solo cuando la variable no tiene valor."},{titulo:"Introducción a Funciones",contenido:"Las funciones son bloques de código reutilizables que encapsulan una tarea específica. Se utilizan para evitar repetir código y organizar mejor nuestros programas.",puntosClave:["Una función es un trozo de código, normalmente con nombre, que podemos llamar múltiples veces","Pueden recibir parámetros (datos de entrada) y devolver un valor (resultado)","En JavaScript, las funciones son 'ciudadanos de primera clase' (first-class citizens)","Las funciones son objetos con sus propias propiedades y métodos"],funcionVsMetodo:{titulo:"Función vs Método",diferencias:[{tipo:"Función",descripcion:"Puede existir de forma independiente, sin estar asociada a ningún objeto",ejemplo:"function saludar() { ... }"},{tipo:"Método",descripcion:"Siempre vive dentro de un objeto o clase. Es una función asociada a un objeto",ejemplo:"objeto.metodo()"}],nota:"El valor de 'this' es diferente: en una función es el contexto global, en un método es la instancia del objeto."},ejemploFuncion:{descripcion:"Ejemplo de una función básica con parámetro por defecto",codigo:`function saludar(nombre = '') {
  return 'Hola, ' + nombre;
}

// Llamadas a la función:
saludar();           // "Hola, "
saludar('Juan');     // "Hola, Juan"

// Las funciones tienen tipo 'function':
typeof saludar;      // "function"`,explicacion:"La función 'saludar' recibe un parámetro 'nombre' con valor por defecto vacío. Devuelve un string concatenado."},nota:"En JavaScript, las funciones son muy peculiares y tienen un tratamiento especial. Veremos una clase específica de funciones donde profundizaremos en arrow functions, callbacks, closures y más."}]}]},s={titulo:"Funciones",descripcion:"Funciones, control de flujo, scope, closures y hoisting en JavaScript.",icono:"fa-code",clases:[{id:4,titulo:"Funciones en JavaScript",descripcion:"Aprende qué son las funciones, cómo declararlas, los parámetros, el retorno y las diferentes formas de crearlas.",temas:[{titulo:"¿Qué es una función?",contenido:"Una función es un trozo de código ejecutable al que le asignamos un nombre para poder reutilizarlo en cualquier parte de nuestro programa. Es como una 'caja negra' a la que le pasamos datos y nos devuelve un resultado.",puntosClave:["Es un bloque de código reutilizable que encapsula una tarea específica","Tiene sentido cuando un código se ejecuta más de una vez","Podemos pasarle datos (parámetros) y obtener resultados (retorno)","Las funciones en JavaScript son objetos con propiedades y métodos propios","Son 'ciudadanos de primera clase' (first-class citizens)"]},{titulo:"Ventajas de usar funciones",contenido:"Las funciones nos proporcionan múltiples beneficios a la hora de escribir y mantener nuestro código:",caracteristicas:[{nombre:"Reutilización de código",descripcion:"Evita duplicar código. Escribes una vez, ejecutas muchas veces desde diferentes partes del programa."},{nombre:"Organización y legibilidad",descripcion:"El código queda modularizado en bloques lógicos. Más fácil de leer y entender, especialmente en proyectos grandes."},{nombre:"Facilidad de mantenimiento",descripcion:"Si necesitas modificar la lógica, solo cambias un lugar. Reduce errores y simplifica las actualizaciones."},{nombre:"Abstracción",descripcion:"Puedes usar una función sin saber cómo funciona internamente. Solo importa QUÉ hace, no CÓMO lo hace."},{nombre:"Menos errores",descripcion:"El código organizado en funciones es más fácil de depurar. Los errores son más fáciles de localizar."},{nombre:"Testing facilitado",descripcion:"Las funciones permiten probar el código de forma individual e independiente (unit testing)."}]},{titulo:"Estructura de una función",contenido:"Una función se compone de varias partes esenciales:",estructuraFuncion:{partes:[{nombre:"Palabra clave function",descripcion:"Indica que estamos declarando una función"},{nombre:"Nombre de la función",descripcion:"Identificador para poder invocarla posteriormente"},{nombre:"Parámetros",descripcion:"Valores que recibe la función (entre paréntesis)"},{nombre:"Cuerpo de la función",descripcion:"Bloque de código entre llaves { } que se ejecuta"},{nombre:"Return (opcional)",descripcion:"Devuelve un valor al finalizar la ejecución"}],codigo:`function calcularCuadrado(numero) {
  const resultado = numero * numero;
  return resultado;
}

// Invocar la función
const cuadrado = calcularCuadrado(5); // 25`}},{titulo:"Invocación de funciones",contenido:"Para ejecutar una función, debemos invocarla usando su nombre seguido de paréntesis. Sin los paréntesis, solo hacemos referencia a la función pero NO la ejecutamos.",ejemplosInvocacion:[{titulo:"Función sin parámetros",codigo:`function saludar() {
  console.log('¡Hola, buenos días!');
}

saludar();  // Ejecuta la función
saludar;    // ¡NO ejecuta! Solo referencia la función`},{titulo:"Función con parámetros",codigo:`function saludar(nombre) {
  console.log(\`Hola, \${nombre}!\`);
}

saludar('Ana');     // "Hola, Ana!"
saludar('Carlos');  // "Hola, Carlos!"`}]},{titulo:"Return: funciones con retorno",contenido:"Una función puede devolver un valor usando la palabra clave return. Este valor puede ser almacenado en una variable para su uso posterior.",tiposRetorno:[{tipo:"Con retorno",descripcion:"Devuelve un valor que puede ser usado posteriormente",codigo:`function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado); // 8`},{tipo:"Sin retorno",descripcion:"Ejecuta acciones pero devuelve undefined",codigo:`function mostrarMensaje(mensaje) {
  console.log(mensaje);
  // No hay return
}

const retorno = mostrarMensaje('Hola');
console.log(retorno); // undefined`}],nota:"Una función sin return explícito siempre devuelve undefined."},{titulo:"Parámetros de funciones",contenido:"Los parámetros son valores que le pasamos a la función para que pueda operar con ellos. El orden en que los pasamos es importante.",conceptosParametros:[{nombre:"Orden de parámetros",descripcion:"Los argumentos se asignan en el mismo orden en que están definidos los parámetros.",codigo:`function presentar(nombre, apellido) {
  return \`\${nombre} \${apellido}\`;
}

presentar('Juan', 'García');    // "Juan García"
presentar('García', 'Juan');    // "García Juan" - ¡Orden incorrecto!`},{nombre:"Parámetros por defecto (ES6)",descripcion:"Podemos asignar valores por defecto que se usan si no se pasa el argumento.",codigo:`// Antes de ES6
function saludar(nombre) {
  nombre = nombre || 'Desconocido';
  return 'Hola, ' + nombre;
}

// Con ES6
function saludar(nombre = 'Desconocido') {
  return 'Hola, ' + nombre;
}

saludar();        // "Hola, Desconocido"
saludar('Ana');   // "Hola, Ana"`},{nombre:"Objeto arguments",descripcion:"Todas las funciones tienen acceso al objeto arguments, un array-like con todos los argumentos pasados.",codigo:`function sumarTodos() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

sumarTodos(1, 2, 3, 4, 5); // 15`}]},{titulo:"Paso por valor vs Paso por referencia",contenido:"En JavaScript, el comportamiento al pasar argumentos depende del tipo de dato:",pasoParametros:[{tipo:"Paso por VALOR",aplicaA:"Tipos primitivos (string, number, boolean, null, undefined)",descripcion:"Se pasa una COPIA del valor. Modificar dentro de la función NO afecta al original.",codigo:`function duplicar(num) {
  num = num * 2;
  console.log('Dentro:', num);
}

let numero = 5;
duplicar(numero);
console.log('Fuera:', numero);

// Dentro: 10
// Fuera: 5  ← ¡El original no cambió!`,color:"success"},{tipo:"Paso por REFERENCIA",aplicaA:"Objetos y Arrays",descripcion:"Se pasa la REFERENCIA (dirección de memoria). Modificar dentro de la función SÍ afecta al original.",codigo:`function agregarItem(arr) {
  arr.push('nuevo');
  console.log('Dentro:', arr);
}

let miArray = ['a', 'b'];
agregarItem(miArray);
console.log('Fuera:', miArray);

// Dentro: ['a', 'b', 'nuevo']
// Fuera: ['a', 'b', 'nuevo']  ← ¡El original cambió!`,color:"warning"}],alerta:"Ten cuidado al pasar arrays u objetos a funciones. Si los modificas, estás modificando el original."},{titulo:"Formas de declarar funciones",contenido:"JavaScript ofrece varias formas de declarar funciones, cada una con sus particularidades:",tiposDeclaracion:[{nombre:"Declaración de función (Function Declaration)",descripcion:"La forma más tradicional. Se eleva (hoisting) al inicio del scope.",codigo:`function saludar(nombre) {
  return 'Hola, ' + nombre;
}

saludar('Ana'); // "Hola, Ana"`,icono:"fa-file-code",destacado:!0},{nombre:"Expresión de función (Function Expression)",descripcion:"Se asigna una función a una variable. NO se eleva (hoisting).",codigo:`const saludar = function(nombre) {
  return 'Hola, ' + nombre;
};

saludar('Ana'); // "Hola, Ana"`,icono:"fa-box"},{nombre:"Función anónima (Lambda)",descripcion:"Función sin nombre, almacenada en una variable. Muy usadas como callbacks.",codigo:`const multiplicar = function(a, b) {
  return a * b;
};

// El nombre de la función es la variable
multiplicar(3, 4); // 12`,icono:"fa-ghost"},{nombre:"Función flecha (Arrow Function - ES6)",descripcion:"Sintaxis más corta. No tiene su propio this, arguments, super o new.target.",codigo:`// Forma completa
const sumar = (a, b) => {
  return a + b;
};

// Forma corta (return implícito)
const sumar = (a, b) => a + b;

// Un solo parámetro (sin paréntesis)
const doble = n => n * 2;`,icono:"fa-arrow-right",destacado:!0}]},{titulo:"Callbacks",contenido:"Un callback es una función que se pasa como argumento a otra función, para ser ejecutada posteriormente. Es un patrón muy común en JavaScript.",ejemploCallback:{descripcion:"Ejemplo de callback: pasar una función como parámetro",codigo:`// Función B que será el callback
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
// "¡Soy el callback!"`,explicacion:"La función A recibe como parámetro la función B y la ejecuta en su interior. Este patrón es la base de la asincronía en JavaScript."},casoDeUso:{titulo:"Caso de uso real: Array.forEach",codigo:`const numeros = [1, 2, 3, 4, 5];

// Pasamos una función anónima como callback
numeros.forEach(function(numero) {
  console.log(numero * 2);
});

// Con arrow function
numeros.forEach(numero => console.log(numero * 2));`}},{titulo:"Funciones autoejecutables (IIFE)",contenido:"Una IIFE (Immediately Invoked Function Expression) es una función que se ejecuta inmediatamente después de definirse.",sintaxisIIFE:{estructura:"(function() { ... })()",codigo:`// IIFE básica
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
})();`,usos:["Crear un scope privado para evitar contaminar el scope global","Inicializar configuraciones al cargar","Patrón Module (antes de ES6 modules)"]}},{titulo:"Funciones dentro de funciones",contenido:"Dentro de una función podemos declarar otras funciones. La función interna tiene acceso al scope de la función externa.",funcionesAnidadas:{codigo:`function funcionExterna() {
  const variableExterna = 'Soy externa';
  
  function funcionInterna() {
    console.log(variableExterna); // ✓ Puede acceder
    const variableInterna = 'Soy interna';
  }
  
  funcionInterna();
  // console.log(variableInterna); // ✗ Error: no accesible
}

funcionExterna();`,nota:"La función interna puede acceder a variables de la externa, pero no al revés."},retornoFuncion:{titulo:"Cuando una función retorna otra función",codigo:`function crearSaludo(saludo) {
  return function(nombre) {
    return saludo + ', ' + nombre + '!';
  };
}

const saludoFormal = crearSaludo('Buenos días');
const saludoInformal = crearSaludo('Hola');

saludoFormal('Sr. García');   // "Buenos días, Sr. García!"
saludoInformal('Ana');        // "Hola, Ana!"`,explicacion:"Para ejecutar la función retornada, necesitamos dobles paréntesis o almacenarla en una variable."}}]},{id:5,titulo:"Strings, Numbers y Control de Flujo",descripcion:"Métodos de String y Number, condicionales if/else/switch y bucles while/do-while/for.",temas:[{titulo:"El tipo String",contenido:"El tipo String permite almacenar caracteres o cadenas de caracteres. Podemos crearlos con comillas simples, dobles o backticks (template literals).",formasCrear:[{tipo:"Comillas simples",ejemplo:"let cadena = 'Hola mundo';",descripcion:"Forma clásica de crear strings"},{tipo:"Comillas dobles",ejemplo:'let cadena = "Hola mundo";',descripcion:"Equivalente a comillas simples"},{tipo:"Template Literals (backticks)",ejemplo:"let cadena = `Hola ${nombre}`;",descripcion:"Permite interpolar variables y escribir multilínea",destacado:!0}]},{titulo:"Template Literals (Backticks)",contenido:"Los template literals, delimitados por backticks (`), permiten interpolar variables dentro del string usando ${variable}. Son mucho más cómodos para concatenar.",comparacion:{titulo:"Concatenación tradicional vs Template Literals",antes:`// Forma antigua (incómoda)
const nombre = 'Juan';
const edad = 25;
const mensaje = 'Hola, me llamo ' + nombre + ' y tengo ' + edad + ' años.';`,despues:"// Con Template Literals (recomendado)\nconst nombre = 'Juan';\nconst edad = 25;\nconst mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;"},nota:"Los template literals también permiten strings multilínea sin necesidad de caracteres de escape."},{titulo:"Métodos de String más usados",contenido:"Los strings tienen muchos métodos útiles para manipularlos:",metodosString:[{metodo:".length",descripcion:"Propiedad que devuelve la longitud del string",ejemplo:"'Hola'.length // 4"},{metodo:".includes(str)",descripcion:"Devuelve true/false si contiene el substring",ejemplo:"'Hola mundo'.includes('mundo') // true"},{metodo:".indexOf(str)",descripcion:"Devuelve la posición donde empieza el substring (-1 si no existe)",ejemplo:"'Hola'.indexOf('o') // 1"},{metodo:".startsWith(str)",descripcion:"Devuelve true/false si empieza por el substring",ejemplo:"'Hola'.startsWith('Ho') // true"},{metodo:".endsWith(str)",descripcion:"Devuelve true/false si termina por el substring",ejemplo:"'Hola'.endsWith('la') // true"},{metodo:".slice(start, end)",descripcion:"Extrae una porción del string",ejemplo:"'Hola mundo'.slice(0, 4) // 'Hola'"},{metodo:".toUpperCase()",descripcion:"Convierte a mayúsculas",ejemplo:"'hola'.toUpperCase() // 'HOLA'"},{metodo:".toLowerCase()",descripcion:"Convierte a minúsculas",ejemplo:"'HOLA'.toLowerCase() // 'hola'"},{metodo:".replace(a, b)",descripcion:"Reemplaza la primera ocurrencia de a por b",ejemplo:"'Hola'.replace('o', 'a') // 'Hala'"},{metodo:".replaceAll(a, b)",descripcion:"Reemplaza TODAS las ocurrencias de a por b",ejemplo:"'Hola'.replaceAll('o', 'a') // 'Hala'"},{metodo:".trim()",descripcion:"Elimina espacios al inicio y final",ejemplo:"'  Hola  '.trim() // 'Hola'"},{metodo:".split(sep)",descripcion:"Divide el string en un array por el separador",ejemplo:"'a,b,c'.split(',') // ['a','b','c']"},{metodo:".repeat(n)",descripcion:"Repite el string n veces",ejemplo:"'Hola '.repeat(3) // 'Hola Hola Hola '"},{metodo:".concat(str)",descripcion:"Concatena strings (alternativa al operador +)",ejemplo:"'Hola'.concat(' ', 'Mundo') // 'Hola Mundo'"}]},{titulo:"Concatenación de Strings",contenido:"Existen varias formas de unir strings en JavaScript:",formasConcatenacion:[{metodo:"Operador +",descripcion:"La forma más básica de concatenar strings",codigo:`const nombre = 'Juan';
const apellido = 'García';
const fullName = nombre + ' ' + apellido;
// "Juan García"`},{metodo:"Template Literals",descripcion:"La forma más cómoda y legible (recomendada)",codigo:"const nombre = 'Juan';\nconst edad = 25;\nconst mensaje = `Hola, me llamo ${nombre} y tengo ${edad} años.`;"},{metodo:"Método concat()",descripcion:"Método de String para concatenar múltiples valores",codigo:`const saludo = 'Hola'.concat(' ', 'Mundo', '!');
// "Hola Mundo!"`},{metodo:"Array.join()",descripcion:"Une elementos de un array en un string",codigo:`const frutas = ['Banana', 'Orange', 'Apple'];
const resultado = frutas.join(', ');
// "Banana, Orange, Apple"

// Muy útil para CSV
const datos = ['nombre', 'email', 'edad'];
const linea = datos.join(';');
// "nombre;email;edad"`}]},{titulo:"Caracteres de Escape",contenido:"A veces necesitamos incluir caracteres especiales dentro de un string. Para ello usamos la contrabarra (\\\\).",caracteresEscape:[{caracter:"\\'",descripcion:"Comilla simple",ejemplo:"'I\\'m here' // I'm here"},{caracter:'\\"',descripcion:"Comilla doble",ejemplo:'"Dijo: \\"Hola\\"" // Dijo: "Hola"'},{caracter:"\\\\",descripcion:"Contrabarra",ejemplo:"'C:\\\\Users' // C:\\Users"},{caracter:"\\n",descripcion:"Salto de línea",ejemplo:"'Línea1\\nLínea2'"},{caracter:"\\t",descripcion:"Tabulador",ejemplo:"'Col1\\tCol2'"}],nota:"Con template literals (backticks) puedes incluir comillas simples y dobles sin escapar, y hacer strings multilínea directamente."},{titulo:"El tipo Number",contenido:"En JavaScript, Number almacena tanto enteros como decimales. No hay distinción entre int y float como en otros lenguajes.",formasCrearNumero:[{forma:"Entero",ejemplo:"let n = 42;",descripcion:"Número entero estándar"},{forma:"Decimal",ejemplo:"let n = 3.14;",descripcion:"Número con decimales (punto, no coma)"},{forma:"Notación científica",ejemplo:"let n = 5e10; // 50000000000",descripcion:"Útil para números muy grandes o pequeños"}],valoresEspeciales:[{valor:"Infinity",descripcion:"Representa el infinito positivo"},{valor:"-Infinity",descripcion:"Representa el infinito negativo"},{valor:"NaN",descripcion:"Not a Number - resultado de operaciones inválidas"}],constantesNumber:[{constante:"Number.MAX_VALUE",descripcion:"Número máximo representable",valor:"1.79e+308"},{constante:"Number.MIN_VALUE",descripcion:"Número positivo más pequeño",valor:"5e-324"},{constante:"Number.MAX_SAFE_INTEGER",descripcion:"Entero seguro máximo",valor:"9007199254740991"}],nota:"Para números mayores que MAX_SAFE_INTEGER, usa BigInt (ej: 9007199254740992n)."},{titulo:"Métodos de Number y Math",contenido:"Métodos útiles para trabajar con números:",metodosNumber:[{metodo:".toFixed(n)",descripcion:"Redondea a n decimales (devuelve string)",ejemplo:"(3.14159).toFixed(2) // '3.14'"},{metodo:"parseInt(str)",descripcion:"Convierte string a entero",ejemplo:"parseInt('42') // 42"},{metodo:"parseFloat(str)",descripcion:"Convierte string a decimal",ejemplo:"parseFloat('3.14') // 3.14"},{metodo:"Number(valor)",descripcion:"Convierte cualquier valor a número",ejemplo:"Number('42') // 42"},{metodo:"Math.round(n)",descripcion:"Redondea al entero más cercano",ejemplo:"Math.round(4.5) // 5"},{metodo:"Math.floor(n)",descripcion:"Redondea hacia abajo",ejemplo:"Math.floor(4.9) // 4"},{metodo:"Math.ceil(n)",descripcion:"Redondea hacia arriba",ejemplo:"Math.ceil(4.1) // 5"},{metodo:"Math.abs(n)",descripcion:"Valor absoluto",ejemplo:"Math.abs(-5) // 5"},{metodo:"Math.random()",descripcion:"Número aleatorio entre 0 y 1",ejemplo:"Math.random() // 0.234..."}]},{titulo:"Condicional if / else",contenido:"El condicional if evalúa una condición y ejecuta un bloque de código si es verdadera. Se puede combinar con else y else if.",estructuraCondicional:{sintaxis:`// Condicional simple
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
}`,ejemplo:`const edad = 18;

if (edad >= 18) {
  console.log('Es mayor de edad');
} else if (edad >= 13) {
  console.log('Es adolescente');
} else {
  console.log('Es menor de 13 años');
}`}},{titulo:"Operador Ternario",contenido:"El operador ternario es una forma abreviada de if/else en una sola línea. Muy útil para asignaciones condicionales.",sintaxis:"condición ? valorSiTrue : valorSiFalse",ejemplo:`const edad = 20;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
console.log(mensaje); // 'Mayor de edad'`,nota:"Se usa mucho en React para renderizado condicional: {isLoading ? <Spinner /> : <Content />}"},{titulo:"Switch",contenido:"El switch evalúa una expresión y ejecuta el caso que coincida. Es útil cuando hay múltiples valores posibles.",estructuraSwitch:{sintaxis:`switch (expresión) {
  case valor1:
    // Código si expresión === valor1
    break;
  case valor2:
    // Código si expresión === valor2
    break;
  default:
    // Código si no coincide ningún caso
}`,ejemplo:`const dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log('Domingo');
    break;
  case 6:
    console.log('Sábado');
    break;
  default:
    console.log('Día laborable');
}`},alerta:"¡No olvides el break! Sin él, la ejecución continúa al siguiente caso (fall-through)."},{titulo:"Bucle while",contenido:"El bucle while ejecuta un bloque mientras la condición sea verdadera. Primero evalúa, luego ejecuta.",estructuraWhile:{sintaxis:`while (condición) {
  // Código que se repite mientras condición sea true
  // ¡Importante! Modificar la variable de la condición
}`,ejemplo:`let contador = 0;

while (contador < 5) {
  console.log(contador);
  contador++;
}
// Imprime: 0, 1, 2, 3, 4`},alerta:"¡Cuidado con los bucles infinitos! Asegúrate de modificar la variable de la condición dentro del bucle."},{titulo:"Bucle do...while",contenido:"Similar al while, pero primero ejecuta y luego evalúa. Garantiza al menos una ejecución.",estructuraDoWhile:{sintaxis:`do {
  // Código que se ejecuta al menos una vez
} while (condición);`,ejemplo:`let contador = 0;

do {
  console.log(contador);
  contador++;
} while (contador < 5);
// Imprime: 0, 1, 2, 3, 4`},nota:"La diferencia clave: do...while siempre ejecuta al menos una vez, while puede no ejecutarse nunca."},{titulo:"Bucle for",contenido:"El bucle for es ideal cuando conocemos el número de iteraciones. Combina inicialización, condición e incremento.",estructuraFor:{sintaxis:`for (inicialización; condición; incremento) {
  // Código que se repite
}`,ejemplo:`for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Imprime: 0, 1, 2, 3, 4`,explicacion:["Inicialización: let i = 0 → Se ejecuta una sola vez al inicio","Condición: i < 5 → Se evalúa antes de cada iteración","Incremento: i++ → Se ejecuta después de cada iteración"]}}]},{id:6,titulo:"Scope, Hoisting y Closures",descripcion:"Comprende el ámbito de las variables, la elevación (hoisting) y los closures, conceptos fundamentales de JavaScript.",temas:[{titulo:"¿Qué es el Scope?",contenido:"El scope (ámbito) define el contexto donde las variables y funciones son accesibles. Es como el 'rango de acción' de una variable.",definicionScope:{descripcion:"El scope determina dónde una variable puede ser usada. Si una variable no está en el scope actual, no está disponible.",reglas:["Las variables solo son accesibles dentro del scope donde fueron declaradas","Los scopes hijos pueden acceder a scopes padres, pero NO al revés","Cada función crea un nuevo scope"]}},{titulo:"Tipos de Scope",contenido:"En JavaScript existen tres tipos principales de scope:",tiposScope:[{tipo:"Scope Global",descripcion:"Variables declaradas fuera de toda función o bloque. Accesibles desde cualquier parte del código.",ejemplo:`let global = 'Soy global';

function miFuncion() {
  console.log(global); // ✓ Accesible
}`,icono:"fa-globe",color:"warning"},{tipo:"Scope de Función",descripcion:"Variables declaradas dentro de una función. Solo accesibles dentro de esa función.",ejemplo:`function miFuncion() {
  let local = 'Soy local';
  console.log(local); // ✓ Accesible
}

console.log(local); // ✗ Error: local is not defined`,icono:"fa-cube",color:"primary"},{tipo:"Scope de Bloque",descripcion:"Variables declaradas con let/const dentro de un bloque { }. Solo accesibles dentro del bloque.",ejemplo:`if (true) {
  let bloque = 'Solo aquí';
  console.log(bloque); // ✓ Accesible
}

console.log(bloque); // ✗ Error`,icono:"fa-square",color:"success"}],alerta:"var NO tiene scope de bloque, solo de función. Por eso se recomienda usar let y const."},{titulo:"Cadena de Scope (Scope Chain)",contenido:"Cuando JavaScript busca una variable, primero la busca en el scope local. Si no la encuentra, sube al scope padre, y así sucesivamente hasta el scope global.",ejemploCadena:{codigo:`let fruta = 'Manzana';  // Scope global

function comer() {
  let fruta = 'Plátano';  // Scope local de comer
  
  function lavar() {
    console.log(fruta);   // Busca en su scope, luego en el padre
  }
  
  lavar();  // Imprime 'Plátano'
}

comer();
console.log(fruta);  // Imprime 'Manzana'`,explicacion:"La función lavar() no tiene una variable 'fruta', así que busca en su scope padre (comer) y la encuentra. No llega al global."}},{titulo:"El objeto window (navegador)",contenido:"En el navegador, las variables globales declaradas con var se añaden al objeto window. Esto permite acceder a ellas explícitamente.",objetoWindow:{codigo:`var fruta = 'Melón';  // Se añade a window

function comer() {
  let fruta = 'Plátano';  // Variable local
  
  function lavar() {
    // Accede a la variable global explícitamente
    console.log(window.fruta);  // 'Melón'
  }
  
  lavar();
  console.log(fruta);  // 'Plátano' (local)
}

comer();`,puntosClave:["var se añade al objeto window, let y const NO","Puedes usar window.variable para acceder al scope global","Esta técnica es útil cuando hay colisión de nombres","En Node.js no existe window, se usa global"]},alerta:"Evita usar variables globales siempre que sea posible. Poluciona el namespace global y puede causar colisiones."},{titulo:"¿Qué es el Hoisting?",contenido:"Hoisting (elevación) es un comportamiento de JavaScript donde las declaraciones de variables (var) y funciones se 'elevan' al inicio de su scope antes de ejecutar el código.",ejemploHoisting:{pregunta:"¿Qué imprime este código?",codigo:`console.log(nombre);
var nombre = 'Juan';`,respuesta:"undefined",explicacion:`JavaScript lo interpreta así:
var nombre;           // Declaración elevada
console.log(nombre);  // undefined (declarada pero sin valor)
nombre = 'Juan';      // Asignación en su lugar original`},nota:"Solo se eleva la DECLARACIÓN, no la asignación. Por eso imprime undefined en lugar de error."},{titulo:"¿Qué sufre Hoisting?",contenido:"No todas las declaraciones se comportan igual con el hoisting:",tablaHoisting:[{elemento:"var",hoisting:"Sí - Se eleva la declaración",resultado:"undefined antes de asignar"},{elemento:"let",hoisting:"Parcial - 'Temporal Dead Zone'",resultado:"ReferenceError antes de declarar"},{elemento:"const",hoisting:"Parcial - 'Temporal Dead Zone'",resultado:"ReferenceError antes de declarar"},{elemento:"function declaration",hoisting:"Sí - Se eleva completa",resultado:"Funciona antes de declararla"},{elemento:"function expression",hoisting:"No",resultado:"Error antes de declararla"},{elemento:"arrow function",hoisting:"No",resultado:"Error antes de declararla"}],ejemploFunciones:{funcionDeclarativa:`// ✓ Funciona por hoisting
saludar();

function saludar() {
  console.log('Hola');
}`,funcionExpresion:`// ✗ Error: Cannot access 'saludar' before initialization
saludar();

const saludar = function() {
  console.log('Hola');
};`}},{titulo:"Comparativa: var vs let vs const",contenido:"Resumen de las diferencias entre las tres formas de declarar variables:",tablaComparativa:[{caracteristica:"Scope",var:"Función",let:"Bloque",const:"Bloque"},{caracteristica:"Reasignable",var:"Sí",let:"Sí",const:"No"},{caracteristica:"Redeclarable",var:"Sí",let:"No",const:"No"},{caracteristica:"Sin valor inicial",var:"Sí",let:"Sí",const:"No"},{caracteristica:"Se añade a window",var:"Sí",let:"No",const:"No"},{caracteristica:"Hoisting",var:"Sí (undefined)",let:"TDZ",const:"TDZ"}],recomendacion:"Usa const por defecto. Usa let solo cuando necesites reasignar. Evita var."},{titulo:"¿Qué es un Closure?",contenido:"Un closure es una función que 'recuerda' las variables del scope donde fue creada, incluso después de que ese scope haya terminado de ejecutarse.",requisitos:["Una función anidada (función dentro de función)","La función interna accede a variables de la función externa","La función interna se ejecuta fuera de su scope original"]},{titulo:"Ejemplo de Closure: Contador",contenido:"El ejemplo clásico de closure es un contador con datos privados:",ejemploClosure:{codigo:`function crearContador(valorInicial = 0) {
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

// c1.contador → undefined (¡es privado!)`,puntosClave:["La variable 'contador' es privada, no se puede acceder directamente","Cada llamada a crearContador() crea un nuevo scope independiente","Los métodos 'recuerdan' la variable contador de su closure","Este patrón se usaba para emular clases antes de ES6"]}},{titulo:"¿Por qué son útiles los Closures?",contenido:"Los closures tienen múltiples usos en JavaScript moderno:",usosClosures:[{uso:"Encapsulación / Datos privados",descripcion:"Crear variables que no son accesibles desde fuera, como en el ejemplo del contador."},{uso:"Factory Functions",descripcion:"Funciones que crean y retornan otras funciones con configuraciones específicas."},{uso:"Memoización",descripcion:"Guardar resultados de funciones costosas para no recalcularlos."},{uso:"Event Handlers",descripcion:"Mantener el contexto en callbacks y manejadores de eventos."}],nota:"Los closures son la base de muchos patrones en JavaScript y se usan intensivamente en React (hooks como useState usan closures)."}]},{id:7,titulo:"Ejercicios Prácticos",descripcion:"Resolución de ejercicios para practicar operadores, condicionales y validación de entrada de usuario.",temas:[{titulo:"Validación de entrada del usuario",contenido:"Cuando pedimos datos al usuario, es importante validar que ha introducido valores correctos antes de procesarlos.",tecnicasValidacion:{prompt:`// Usar prompt para pedir datos
const nombre = prompt('Introduce tu nombre:');

// Convertir a número
const numero = Number(prompt('Introduce un número:'));
// o también
const numero = parseFloat(prompt('Introduce un número:'));`,validacion:`// Validar con while
let respuesta = prompt('¿Tienes tatuajes? (S/N)');

while (respuesta !== 'S' && respuesta !== 'N') {
  respuesta = prompt('Respuesta no válida. ¿Tienes tatuajes? (S/N)');
}

// Ahora respuesta es seguro que es 'S' o 'N'`}},{titulo:"Ejercicio: Comparar números",contenido:"Programa que pide 3 números y muestra si alguno es mayor que 100.",solucion:{codigo:`const n1 = Number(prompt('Primer número:'));
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
}`}},{titulo:"Ejercicio: Rango de números",contenido:"Programa que pide un límite inferior, superior, y un número, y dice si está dentro del rango.",solucion:{codigo:"const limitDown = parseFloat(prompt('Límite inferior:'));\nconst limitUp = parseFloat(prompt('Límite superior:'));\nconst n = parseFloat(prompt('Introduce un número:'));\n\nif (n > limitDown && n < limitUp) {\n  console.log(`${n} está entre ${limitDown} y ${limitUp}`);\n} else {\n  console.log(`${n} NO está entre los límites`);\n}"}},{titulo:"Ejercicio: Donación de sangre",contenido:"Programa que pregunta si tiene tatuajes, hepatitis o anemia, y dice si puede donar sangre.",solucion:{codigo:`let tatuajes = prompt('¿Tiene tatuajes? (S/N)');
let hepatitis = prompt('¿Ha tenido hepatitis? (S/N)');
let anemia = prompt('¿Tiene anemia? (S/N)');

if (tatuajes === 'S' || hepatitis === 'S' || anemia === 'S') {
  console.log('No puede donar sangre');
} else {
  console.log('¡Tu sangre es bienvenida!');
}`}},{titulo:"Ejercicio: Acceso al club",contenido:"Solo pueden entrar socios con cuota al día O no socios con autorización.",solucion:{codigo:`const isSocio = prompt('¿Eres socio? (S/N)');

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
}`}},{titulo:"Ejercicio: Promoción de cátedra",contenido:"Pide 3 notas de parciales. Promociona si al menos 2 son >= 8.",solucion:{codigo:`const nota1 = parseFloat(prompt('Nota del primer parcial:'));
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
}`}}]}]},c={1:r,2:s};function n(e){return c[e]||null}function t(e,o){const a=n(e);return a&&a.clases.find(i=>i.id===o)||null}function l(e){const o=n(e);return o?o.clases:[]}export{t as a,l as g};
