(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&t(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();function O(){const o=document.getElementById("themeToggle"),a=document.getElementById("sunIcon"),n=document.getElementById("moonIcon"),t=document.documentElement,e=localStorage.getItem("theme"),r=window.matchMedia("(prefers-color-scheme: dark)").matches;e?(t.setAttribute("data-theme",e),u(e,a,n)):r||(t.setAttribute("data-theme","light"),u("light",a,n)),o.addEventListener("click",()=>{const s=t.getAttribute("data-theme")==="dark"?"light":"dark";t.setAttribute("data-theme",s),localStorage.setItem("theme",s),u(s,a,n)})}function u(o,a,n){o==="dark"?(a.classList.add("hidden"),n.classList.remove("hidden")):(n.classList.add("hidden"),a.classList.remove("hidden"))}function D(){const o=document.getElementById("year");o&&(o.textContent=new Date().getFullYear())}const f={titulo:"Conceptos Básicos",descripcion:"Fundamentos, variables, tipos de datos y operadores esenciales de JavaScript.",icono:"fa-bolt",clases:[{id:1,titulo:"Introducción a JavaScript",descripcion:"Descubre qué es JavaScript, sus características únicas, cómo ejecutarlo y la historia de ECMAScript.",temas:[{titulo:"¿Qué es JavaScript?",contenido:'JavaScript es el tercer pilar fundamental del desarrollo web, junto con HTML y CSS. Mientras HTML estructura la información y CSS la estiliza, JavaScript actúa como el "cerebro" que permite manipular y controlar todo lo que hemos construido previamente.',puntosClave:["Es el responsable de controlar toda la interactividad del usuario en la web","Es el único lenguaje de programación que funciona nativamente en los navegadores","Es un lenguaje de programación completo (Turing completo)","Fue desarrollado por Brendan Eich de Netscape en 1995"]},{titulo:"Características del lenguaje",contenido:"JavaScript tiene características únicas que lo diferencian de otros lenguajes de programación.",caracteristicas:[{nombre:"Interpretado",descripcion:"No necesita compilación, el navegador lo ejecuta directamente"},{nombre:"Tipado dinámico",descripcion:"Una variable puede cambiar de tipo en tiempo de ejecución. El tipo está asociado al valor, no a la variable"},{nombre:"Objetual (Arrays asociativos)",descripcion:"Casi todo en JavaScript son objetos. Los objetos funcionan como arrays asociativos (hash maps) donde las claves son strings"},{nombre:"Funciones de primera clase",descripcion:"Las funciones son objetos que tienen sus propias propiedades y métodos. Pueden ser pasadas como argumentos, devueltas o asignadas a variables"},{nombre:"Función eval()",descripcion:"Capacidad de evaluar string como código en tiempo de ejecución. (Nota: ¡Peligroso y no recomendado por seguridad!)"}]},{titulo:"Cómo ejecutar JavaScript",contenido:"Existen cuatro formas principales de ejecutar código JavaScript:",metodos:[{nombre:"Consola del navegador",descripcion:"Abre el inspector de elementos (F12) y ve a la pestaña Console. Puedes escribir código directamente.",ejemplo:"console.log('¡Hola Mundo!');"},{nombre:"Etiqueta &lt;script&gt; inline",descripcion:"Escribe código JavaScript directamente dentro de una etiqueta &lt;script&gt; en tu HTML.",ejemplo:`<script>
  console.log('Desde HTML');
<\/script>`},{nombre:"Archivo externo",descripcion:"Crea un archivo .js y enlázalo con &lt;script src='archivo.js'&gt;&lt;/script&gt;",ejemplo:"<script src='script.js'><\/script>"},{nombre:"Node.js",descripcion:"Ejecuta archivos JavaScript desde la terminal con el comando node.",ejemplo:"node script.js"}]},{titulo:"Ubicación del script",contenido:"La posición de la etiqueta &lt;script&gt; afecta cuándo se ejecuta el código:",posiciones:[{lugar:"En el &lt;head&gt;",comportamiento:"Se ejecuta ANTES de que se pinte el HTML. El DOM no está disponible.",solucion:"Usar el atributo defer para esperar a que cargue la página"},{lugar:"En el &lt;body&gt;",comportamiento:"Se ejecuta mientras se dibuja la página"},{lugar:"Antes de &lt;/body&gt;",comportamiento:"Se ejecuta DESPUÉS de pintar todo el HTML. El DOM está completamente disponible."}],codigoEjemplo:`<!-- Con defer: espera a que cargue toda la página -->
<script src="script.js" defer><\/script>`},{titulo:"Console: tu mejor amigo",contenido:"El objeto console proporciona métodos para depurar y mostrar información:",metodos:[{nombre:"console.log()",descripcion:"Imprime información general",color:"default"},{nombre:"console.info()",descripcion:"Imprime información (con icono)",color:"blue"},{nombre:"console.warn()",descripcion:"Muestra advertencias (amarillo)",color:"yellow"},{nombre:"console.error()",descripcion:"Muestra errores (rojo)",color:"red"},{nombre:"console.clear()",descripcion:"Limpia la consola",color:"gray"}]},{titulo:"Entornos de ejecución",contenido:"JavaScript puede ejecutarse en diferentes entornos, y dependiendo de dónde se ejecute, tendrás acceso a diferentes objetos y APIs:",caracteristicas:[{nombre:"Frontend (Navegador)",descripcion:"Tienes acceso al objeto window, document (DOM), y puedes manipular la página web"},{nombre:"Backend (Node.js)",descripcion:"Tienes acceso al sistema de archivos, redes, pero NO al DOM ni a window"}],nota:"Los scripts pueden interactuar con el mundo exterior de forma diferente según el entorno. En frontend manipulas el DOM, en backend accedes a archivos."},{titulo:"ECMAScript: La evolución del lenguaje",contenido:"JavaScript se basa en el estándar ECMAScript. A lo largo de los años, se han añadido nuevas características:",versiones:[{anio:"1997",version:"ES1",novedades:"Primera edición del estándar"},{anio:"2009",version:"ES5",novedades:"strict mode, JSON, métodos de Array"},{anio:"2015",version:"ES6/ES2015",novedades:"let/const, clases, arrow functions, promises, modules",destacado:!0},{anio:"2016",version:"ES2016",novedades:"Array.includes(), operador **"},{anio:"2017",version:"ES2017",novedades:"async/await, Object.entries()"},{anio:"2020",version:"ES2020",novedades:"Nullish coalescing (??), optional chaining (?.)"}],nota:"ES6 (2015) fue un cambio revolucionario. Las versiones modernas añaden mejoras cada año."}]},{id:2,titulo:"Variables y Tipos de Datos",descripcion:"Aprende a declarar variables con let y const, y domina los tipos primitivos (string, number, boolean...).",temas:[{titulo:"¿Qué es una variable?",contenido:"Una variable es una zona de memoria RAM a la que le asignamos un nombre para poder hacer referencia a ella posteriormente. Es como decirle al sistema: 'necesito espacio para guardar datos, y quiero llamarlo así'.",puntosClave:["Usar nombres descriptivos (no 'a', 'b', 'x')","Evitar ambigüedades","Evitar palabras reservadas del lenguaje","No usar tildes ni caracteres especiales","Usar camelCase para nombrar variables"]},{titulo:"Declaración de variables",contenido:"JavaScript ofrece tres formas de declarar variables, cada una con un comportamiento diferente:",tipos:[{palabra:"var",descripcion:"Forma antigua. Tiene scope de función y permite redeclaración. NO RECOMENDADO.",ejemplo:"var nombre = 'JavaScript';",icono:"fa-triangle-exclamation",color:"warning"},{palabra:"let",descripcion:"Forma moderna. Tiene scope de bloque y permite reasignación pero no redeclaración.",ejemplo:`let contador = 0;
contador = 1; // ✓ Válido`,icono:"fa-check",color:"success"},{palabra:"const",descripcion:"Para constantes. No permite reasignación ni redeclaración. Obligatorio inicializar.",ejemplo:`const PI = 3.14159;
PI = 3; // ✗ Error`,icono:"fa-lock",color:"primary"}]},{titulo:"Tipos de datos primitivos",contenido:"JavaScript tiene 7 tipos de datos primitivos:",tipos:[{nombre:"String",descripcion:"Cadenas de texto. Se definen con comillas simples, dobles o backticks.",ejemplos:["'Hola'",'"Mundo"',"`Template literal`"]},{nombre:"Number",descripcion:"Números enteros y decimales. JavaScript no distingue entre int y float.",ejemplos:["42","3.14","-7","Infinity","NaN"]},{nombre:"Boolean",descripcion:"Valores lógicos: verdadero o falso.",ejemplos:["true","false"]},{nombre:"Undefined",descripcion:"Variable declarada pero sin valor asignado.",ejemplos:["let sinValor; // undefined"]},{nombre:"Null",descripcion:"Ausencia intencional de valor. Se asigna explícitamente.",ejemplos:["let vacio = null;"]},{nombre:"Symbol",descripcion:"Identificadores únicos e inmutables (ES6+).",ejemplos:["Symbol('id')"]},{nombre:"BigInt",descripcion:"Para números enteros muy grandes que exceden Number.MAX_SAFE_INTEGER.",ejemplos:["9007199254740991n","BigInt(9007199254740991)"]}]},{titulo:"typeof: Conocer el tipo",contenido:"El operador typeof devuelve una cadena indicando el tipo de dato de una variable:",ejemplos:[{codigo:'typeof "Hola"',resultado:'"string"'},{codigo:"typeof 42",resultado:'"number"'},{codigo:"typeof true",resultado:'"boolean"'},{codigo:"typeof undefined",resultado:'"undefined"'},{codigo:"typeof null",resultado:'"object" // ¡Bug histórico!'},{codigo:"typeof Symbol()",resultado:'"symbol"'},{codigo:"typeof function(){}",resultado:'"function"'}],nota:"typeof null devuelve 'object' debido a un bug histórico de JavaScript que se mantiene por compatibilidad."},{titulo:"Convención de nombres (Naming Convention)",contenido:"En JavaScript usamos camelCase para variables y funciones:",reglas:[{tipo:"Variables",ejemplo:"let nombreUsuario = 'Juan';",estilo:"camelCase"},{tipo:"Constantes globales",ejemplo:"const MAX_INTENTOS = 3;",estilo:"SCREAMING_SNAKE_CASE"},{tipo:"Funciones",ejemplo:"function calcularTotal() {}",estilo:"camelCase"},{tipo:"Clases",ejemplo:"class Usuario {}",estilo:"PascalCase"},{tipo:"Booleanos",ejemplo:"let isLoading = true;",estilo:"prefijo is/has/can"}]}]},{id:3,titulo:"Operadores en JavaScript",descripcion:"Domina los operadores aritméticos, lógicos, de comparación y el operador ternario.",temas:[{titulo:"Operadores Aritméticos",contenido:"Operadores para realizar cálculos matemáticos:",operadores:[{simbolo:"+",nombre:"Suma",ejemplo:"5 + 3 // 8"},{simbolo:"-",nombre:"Resta",ejemplo:"10 - 4 // 6"},{simbolo:"*",nombre:"Multiplicación",ejemplo:"4 * 3 // 12"},{simbolo:"/",nombre:"División",ejemplo:"15 / 3 // 5"},{simbolo:"%",nombre:"Módulo (resto)",ejemplo:"7 % 2 // 1",destacado:!0},{simbolo:"**",nombre:"Potencia",ejemplo:"2 ** 3 // 8",destacado:!0}],nota:"El operador módulo (%) es útil para verificar si un número es divisible por otro: si n % 2 === 0, el número es par."},{titulo:"Operadores de Asignación",contenido:"El operador = asigna el valor de la derecha a la variable de la izquierda:",operadores:[{simbolo:"=",nombre:"Asignación simple",ejemplo:"let x = 5;"},{simbolo:"+=",nombre:"Suma y asigna",equivalente:"x = x + y",ejemplo:"x += 3; // x = 8"},{simbolo:"-=",nombre:"Resta y asigna",equivalente:"x = x - y",ejemplo:"x -= 2; // x = 6"},{simbolo:"*=",nombre:"Multiplica y asigna",equivalente:"x = x * y",ejemplo:"x *= 2; // x = 12"},{simbolo:"/=",nombre:"Divide y asigna",equivalente:"x = x / y",ejemplo:"x /= 3; // x = 4"},{simbolo:"**=",nombre:"Potencia y asigna",equivalente:"x = x ** y",ejemplo:"x **= 2; // x = 16"}]},{titulo:"Operadores Unarios",contenido:"Operadores que actúan sobre una sola variable:",operadores:[{simbolo:"++",nombre:"Incremento",variantes:[{forma:"a++",descripcion:"Post-incremento: usa el valor y LUEGO incrementa"},{forma:"++a",descripcion:"Pre-incremento: incrementa PRIMERO y luego usa el valor"}]},{simbolo:"--",nombre:"Decremento",variantes:[{forma:"a--",descripcion:"Post-decremento: usa el valor y LUEGO decrementa"},{forma:"--a",descripcion:"Pre-decremento: decrementa PRIMERO y luego usa el valor"}]}],ejemplo:`let a = 5;
console.log(a++); // Imprime 5,  luego a = 6
console.log(++a); // Incrementa, luego imprime 7`},{titulo:"Operadores de Comparación",contenido:"Comparan valores y devuelven un booleano (true/false):",operadores:[{simbolo:"==",nombre:"Igualdad (valor)",descripcion:"Compara valores, NO tipos. Hace coerción.",ejemplo:'5 == "5" // true'},{simbolo:"===",nombre:"Igualdad estricta",descripcion:"Compara valor Y tipo. RECOMENDADO.",ejemplo:'5 === "5" // false',destacado:!0},{simbolo:"!=",nombre:"Desigualdad",descripcion:"Distinto valor (con coerción)",ejemplo:'5 != "6" // true'},{simbolo:"!==",nombre:"Desigualdad estricta",descripcion:"Distinto valor O tipo",ejemplo:'5 !== "5" // true',destacado:!0},{simbolo:">",nombre:"Mayor que",ejemplo:"10 > 5 // true"},{simbolo:">=",nombre:"Mayor o igual",ejemplo:"5 >= 5 // true"},{simbolo:"<",nombre:"Menor que",ejemplo:"3 < 8 // true"},{simbolo:"<=",nombre:"Menor o igual",ejemplo:"4 <= 4 // true"}],alerta:"SIEMPRE usa === y !== para evitar comportamientos inesperados por coerción de tipos."},{titulo:"Operadores Lógicos",contenido:"Combinan expresiones booleanas:",operadores:[{simbolo:"&&",nombre:"AND (Y lógico)",regla:"Devuelve true si AMBOS son true",tablaVerdad:[{a:"true",b:"true",resultado:"true"},{a:"true",b:"false",resultado:"false"},{a:"false",b:"true",resultado:"false"},{a:"false",b:"false",resultado:"false"}],comportamientoJS:"Con no-booleanos: devuelve B si ambos son truthy, sino devuelve A"},{simbolo:"||",nombre:"OR (O lógico)",regla:"Devuelve true si AL MENOS UNO es true",tablaVerdad:[{a:"true",b:"true",resultado:"true"},{a:"true",b:"false",resultado:"true"},{a:"false",b:"true",resultado:"true"},{a:"false",b:"false",resultado:"false"}],comportamientoJS:"Con no-booleanos: devuelve A si es truthy, sino devuelve B"},{simbolo:"!",nombre:"NOT (Negación)",regla:"Invierte el valor booleano",ejemplos:["!true // false","!false // true","!0 // true","!'' // true"]}]},{titulo:"Operador Ternario",contenido:"Una forma abreviada de escribir un if-else en una sola línea:",sintaxis:"condición ? valorSiTrue : valorSiFalse",ejemplos:[{descripcion:"Determinar mayoría de edad",codigo:`const edad = 20;
const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
// mensaje = 'Mayor de edad'`},{descripcion:"Asignar rol según nombre",codigo:`const name = 'Admin';
const rol = name === 'Admin' ? 'Administrador' : 'Usuario';`}]},{titulo:"Operador Nullish Coalescing (??)",contenido:"Devuelve el operando derecho solo cuando el izquierdo es null o undefined (ES2020):",sintaxis:"a ?? b",comparacion:[{expresion:"null ?? 'default'",resultadoNullish:"'default'",resultadoOr:"'default'"},{expresion:"undefined ?? 'default'",resultadoNullish:"'default'",resultadoOr:"'default'"},{expresion:"0 ?? 'default'",resultadoNullish:"0",resultadoOr:"'default'",diferente:!0},{expresion:"'' ?? 'default'",resultadoNullish:"''",resultadoOr:"'default'",diferente:!0},{expresion:"false ?? 'default'",resultadoNullish:"false",resultadoOr:"'default'",diferente:!0}],nota:"A diferencia de ||, el operador ?? NO considera 0, '' o false como valores 'nullish'."},{titulo:"Concepto: Truthy y Falsy",contenido:"En JavaScript, cualquier valor puede evaluarse como booleano. Esto es fundamental para entender los operadores lógicos.",puntosClave:["Valores Falsy: Se evalúan como false.","Valores Truthy: Se evalúan como true (todo lo que no es falsy)."],caracteristicas:[{nombre:"Valores Falsy (6)",descripcion:'false, 0, "" (string vacío), null, undefined, NaN'},{nombre:"Valores Truthy",descripcion:'Todo lo demás. Ej: "hola", 42, [], {}, function(){}'}],nota:"OJO: [] (array vacío) y {} (objeto vacío) son TRUTHY, a diferencia de otros lenguajes."},{titulo:"Comportamiento especial de && y ||",contenido:"Cuando usamos && y || con valores NO booleanos, JavaScript tiene un comportamiento especial que se usa mucho en React:",reglas:[{operador:"&&",regla:"Si A es truthy → devuelve B. Si A es falsy → devuelve A.",ejemplos:[{codigo:"10 && 20",resultado:"20",explicacion:"10 es truthy, devuelve B"},{codigo:"0 && 'hola'",resultado:"0",explicacion:"0 es falsy, devuelve A"},{codigo:"'texto' && 'otro'",resultado:"'otro'",explicacion:"Ambos truthy, devuelve B"},{codigo:"null && 'algo'",resultado:"null",explicacion:"null es falsy, devuelve A"}]},{operador:"||",regla:"Si A es truthy → devuelve A. Si A es falsy → devuelve B.",ejemplos:[{codigo:"10 || 20",resultado:"10",explicacion:"10 es truthy, devuelve A"},{codigo:"0 || 'default'",resultado:"'default'",explicacion:"0 es falsy, devuelve B"},{codigo:"'' || 'texto'",resultado:"'texto'",explicacion:"'' es falsy, devuelve B"},{codigo:"'hola' || 'otro'",resultado:"'hola'",explicacion:"'hola' es truthy, devuelve A"}]}],nota:"Estos patrones se usan mucho en React para renderizado condicional: {isLoading && &lt;Spinner /&gt;}"},{titulo:"Operadores Bitwise (Binarios)",contenido:"Operan a nivel de bits. Poco frecuentes en desarrollo web alto nivel, pero útiles en casos específicos (permisos, optimización).",operadores:[{simbolo:"&",nombre:"AND",ejemplo:"5 & 1 // 1"},{simbolo:"|",nombre:"OR",ejemplo:"5 | 1 // 5"},{simbolo:"~",nombre:"NOT",ejemplo:"~5 // -6"},{simbolo:"^",nombre:"XOR",ejemplo:"5 ^ 1 // 4"},{simbolo:"<<",nombre:"Left Shift",ejemplo:"5 << 1 // 10"},{simbolo:">>",nombre:"Right Shift",ejemplo:"5 >> 1 // 2"}]},{titulo:"Operador de Asignación Nula (??=)",contenido:"Asigna un valor a una variable SOLO si esta es null o undefined (ES2020):",sintaxis:"x ??= valor",equivalencia:"Es equivalente a: if (x === null || x === undefined) { x = valor; }",ejemplos:[{codigo:`let x = null;
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
typeof saludar;      // "function"`,explicacion:"La función 'saludar' recibe un parámetro 'nombre' con valor por defecto vacío. Devuelve un string concatenado."},nota:"En JavaScript, las funciones son muy peculiares y tienen un tratamiento especial. Veremos una clase específica de funciones donde profundizaremos en arrow functions, callbacks, closures y más."}]}]},y={titulo:"Funciones",descripcion:"Funciones, control de flujo, scope, closures y hoisting en JavaScript.",icono:"fa-code",clases:[{id:4,titulo:"Funciones en JavaScript",descripcion:"Aprende qué son las funciones, cómo declararlas, los parámetros, el retorno y las diferentes formas de crearlas.",temas:[{titulo:"Repaso: Operadores Lógicos Avanzados",contenido:"Antes de profundizar en funciones, es vital entender que && y || no solo devuelven booleanos, sino el valor de uno de sus operandos (Short-circuiting).",shortCircuit:[{operador:"&&",regla:"Devuelve el primer valor 'falsy' o el último 'truthy'.",ejemplos:`44 && 20 // 20
0 && 10 // 0`},{operador:"||",regla:"Devuelve el primer valor 'truthy' o el último 'falsy'.",ejemplos:`44 || undefined // 44
0 || 17 // 17`}]},{titulo:"¿Qué es una función?",contenido:"Una función es un trozo de código ejecutable al que le asignamos un nombre para poder reutilizarlo en cualquier parte de nuestro programa. Es como una 'caja negra' a la que le pasamos datos y nos devuelve un resultado.",puntosClave:["Es un bloque de código reutilizable que encapsula una tarea específica","Tiene sentido cuando un código se ejecuta más de una vez","Podemos pasarle datos (parámetros) y obtener resultados (retorno)","Las funciones en JavaScript son objetos con propiedades y métodos propios","Son 'ciudadanos de primera clase' (first-class citizens)"]},{titulo:"Ventajas de usar funciones",contenido:"Las funciones nos proporcionan múltiples beneficios a la hora de escribir y mantener nuestro código:",caracteristicas:[{nombre:"Reutilización de código",descripcion:"Evita duplicar código. Escribes una vez, ejecutas muchas veces desde diferentes partes del programa."},{nombre:"Organización y legibilidad",descripcion:"El código queda modularizado en bloques lógicos. Más fácil de leer y entender, especialmente en proyectos grandes."},{nombre:"Facilidad de mantenimiento",descripcion:"Si necesitas modificar la lógica, solo cambias un lugar. Reduce errores y simplifica las actualizaciones."},{nombre:"Abstracción",descripcion:"Puedes usar una función sin saber cómo funciona internamente. Solo importa QUÉ hace, no CÓMO lo hace."},{nombre:"Menos errores",descripcion:"El código organizado en funciones es más fácil de depurar. Los errores son más fáciles de localizar."},{nombre:"Testing facilitado",descripcion:"Las funciones permiten probar el código de forma individual e independiente (unit testing)."}]},{titulo:"Estructura de una función",contenido:"Una función se compone de varias partes esenciales:",estructuraFuncion:{partes:[{nombre:"Palabra clave function",descripcion:"Indica que estamos declarando una función"},{nombre:"Nombre de la función",descripcion:"Identificador para poder invocarla posteriormente"},{nombre:"Parámetros",descripcion:"Valores que recibe la función (entre paréntesis)"},{nombre:"Cuerpo de la función",descripcion:"Bloque de código entre llaves { } que se ejecuta"},{nombre:"Return (opcional)",descripcion:"Devuelve un valor al finalizar la ejecución"}],codigo:`function calcularCuadrado(numero) {
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
console.log(retorno); // undefined`}],nota:"Una función sin `return` explícito siempre devuelve `undefined`."},{titulo:"Parámetros de funciones",contenido:"Los parámetros son valores que le pasamos a la función para que pueda operar con ellos. El orden en que los pasamos es importante.",conceptosParametros:[{nombre:"Orden de parámetros",descripcion:"Los argumentos se asignan en el mismo orden en que están definidos los parámetros.",codigo:`function presentar(nombre, apellido) {
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

sumarTodos(1, 2, 3, 4, 5); // 15`},{nombre:"Curiosidad: double parens",descripcion:"Si una función devuelve otra, podemos invocarla inmediatamente usando un segundo par de paréntesis.",codigo:`function externa() {
  return function() {
    console.log('¡Hola!');
  }
}
externa()(); // Imprime ¡Hola!`}]},{titulo:"Paso por valor vs Paso por referencia",contenido:"En JavaScript, el comportamiento al pasar argumentos depende del tipo de dato:",pasoParametros:[{tipo:"Paso por VALOR",aplicaA:"Tipos primitivos (string, number, boolean, null, undefined)",descripcion:"Se pasa una COPIA del valor. Modificar dentro de la función NO afecta al original.",codigo:`function duplicar(num) {
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
// "nombre;email;edad"`}]},{titulo:"Caracteres de Escape",contenido:"A veces necesitamos incluir caracteres especiales dentro de un string. Para ello usamos la contrabarra (\\\\).",caracteresEscape:[{caracter:"\\'",descripcion:"Comilla simple",ejemplo:"'I\\'m here' // I'm here"},{caracter:'\\"',descripcion:"Comilla doble",ejemplo:'"Dijo: \\"Hola\\"" // Dijo: "Hola"'},{caracter:"\\\\",descripcion:"Contrabarra",ejemplo:"'C:\\\\Users' // C:\\Users"},{caracter:"\\n",descripcion:"Salto de línea",ejemplo:"'Línea1\\nLínea2'"},{caracter:"\\t",descripcion:"Tabulador",ejemplo:"'Col1\\tCol2'"}],nota:"Con template literals (backticks) puedes incluir comillas simples y dobles sin escapar, y hacer strings multilínea directamente."},{titulo:"El tipo Number",contenido:"En JavaScript, Number almacena tanto enteros como decimales. No hay distinción entre int y float como en otros lenguajes.",formasCrearNumero:[{forma:"Entero",ejemplo:"let n = 42;",descripcion:"Número entero estándar"},{forma:"Decimal",ejemplo:"let n = 3.14;",descripcion:"Número con decimales (punto, no coma)"},{forma:"Notación científica",ejemplo:"let n = 5e10; // 50000000000",descripcion:"Útil para números muy grandes o pequeños"}],valoresEspeciales:[{valor:"Infinity",descripcion:"Representa el infinito positivo"},{valor:"-Infinity",descripcion:"Representa el infinito negativo"},{valor:"NaN",descripcion:"Not a Number - resultado de operaciones inválidas"}],comportamientoEspecial:{titulo:"Peculiaridades de NaN",puntos:["typeof NaN devuelve 'number' (aunque parezca contradictorio)","NaN === NaN es FALSE. Un NaN nunca es igual a otro NaN","Para comprobar si algo es NaN, usa la función isNaN()"],codigo:`console.log(typeof NaN); // "number"
console.log(NaN === NaN); // false
console.log(isNaN('hola')); // true`},constantesNumber:[{constante:"Number.MAX_VALUE",descripcion:"Número máximo representable",valor:"1.79e+308"},{constante:"Number.MIN_VALUE",descripcion:"Número positivo más pequeño",valor:"5e-324"},{constante:"Number.MAX_SAFE_INTEGER",descripcion:"Entero seguro máximo",valor:"9007199254740991"}],nota:"Para números mayores que `MAX_SAFE_INTEGER`, usa `BigInt` (ej: `9007199254740992n`)."},{titulo:"Métodos de Number y Math",contenido:"Métodos útiles para trabajar con números:",metodosNumber:[{metodo:".toFixed(n)",descripcion:"Redondea a n decimales (devuelve string)",ejemplo:"(3.14159).toFixed(2) // '3.14'"},{metodo:"parseInt(str)",descripcion:"Convierte string a entero",ejemplo:"parseInt('42') // 42"},{metodo:"parseFloat(str)",descripcion:"Convierte string a decimal",ejemplo:"parseFloat('3.14') // 3.14"},{metodo:"Number(valor)",descripcion:"Convierte cualquier valor a número",ejemplo:"Number('42') // 42"},{metodo:"Math.round(n)",descripcion:"Redondea al entero más cercano",ejemplo:"Math.round(4.5) // 5"},{metodo:"Math.floor(n)",descripcion:"Redondea hacia abajo",ejemplo:"Math.floor(4.9) // 4"},{metodo:"Math.ceil(n)",descripcion:"Redondea hacia arriba",ejemplo:"Math.ceil(4.1) // 5"},{metodo:"Math.abs(n)",descripcion:"Valor absoluto",ejemplo:"Math.abs(-5) // 5"},{metodo:"Math.random()",descripcion:"Número aleatorio entre 0 y 1",ejemplo:"Math.random() // 0.234..."}]},{titulo:"Condicional if / else",contenido:"El condicional if evalúa una condición y ejecuta un bloque de código si es verdadera. Se puede combinar con else y else if.",estructuraCondicional:{sintaxis:`// Condicional simple
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
console.log(mensaje); // 'Mayor de edad'`,nota:"Se usa mucho en React para renderizado condicional: `{isLoading ? <Spinner /> : <Content />}`"},{titulo:"Switch",contenido:"El switch evalúa una expresión y ejecuta el caso que coincida. Es útil cuando hay múltiples valores posibles.",estructuraSwitch:{sintaxis:`switch (expresión) {
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
// Imprime: 0, 1, 2, 3, 4`},nota:"La diferencia clave: `do...while` siempre ejecuta al menos una vez, `while` puede no ejecutarse nunca."},{titulo:"Bucle for",contenido:"El bucle for es ideal cuando conocemos el número de iteraciones. Combina inicialización, condición e incremento.",estructuraFor:{sintaxis:`for (inicialización; condición; incremento) {
  // Código que se repite
}`,ejemplo:`for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Imprime: 0, 1, 2, 3, 4`,explicacion:["Inicialización: let i = 0 → Se ejecuta una sola vez al inicio","Condición: i < 5 → Se evalúa antes de cada iteración","Incremento: i++ → Se ejecuta después de cada iteración"]}}]},{id:6,titulo:"Scope, Hoisting y Closures",descripcion:"Comprende el ámbito de las variables, la elevación (hoisting) y los closures, conceptos fundamentales de JavaScript.",temas:[{titulo:"¿Qué es el Scope?",contenido:"El scope (ámbito) define el contexto donde las variables y funciones son accesibles. Es como el 'rango de acción' de una variable.",definicionScope:{descripcion:"El scope determina dónde una variable puede ser usada. Si una variable no está en el scope actual, no está disponible.",reglas:["Las variables solo son accesibles dentro del scope donde fueron declaradas","Los scopes hijos pueden acceder a scopes padres, pero NO al revés","Cada función crea un nuevo scope","El scope más reducido posible ayuda al **Recolector de Basura** (Garbage Collector) a liberar memoria"]},nota:"Es una buena práctica declarar variables en el scope más pequeño necesario para optimizar el uso de memoria."},{titulo:"Depuración de Scopes en el Navegador",contenido:"Puedes visualizar qué variables están disponibles en cada momento usando las Herramientas de Desarrollo de Chrome.",debugScopes:{pasos:["Abre las Herramientas de Desarrollo (F12)","Ve a la pestaña **Sources**","Pon un **Breakpoint** haciendo clic en el número de línea","En el panel derecho, busca la sección **Scope**","Podrás ver qué variables son Locales, de Script o Globales en ese punto exacto"]}},{titulo:"Tipos de Scope",contenido:"En JavaScript existen tres tipos principales de scope:",tiposScope:[{tipo:"Scope Global",descripcion:"Variables declaradas fuera de toda función o bloque. Accesibles desde cualquier parte del código.",ejemplo:`let global = 'Soy global';

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

comer();`,puntosClave:["var se añade al objeto window, let y const NO","Puedes usar window.variable para acceder al scope global","Esta técnica es útil cuando hay colisión de nombres","En Node.js no existe window, se usa global"]},alerta:"Evita usar variables globales siempre que sea posible. Contamina el namespace global y puede causar colisiones."},{titulo:"¿Qué es el Hoisting?",contenido:"Hoisting (elevación) es un comportamiento de JavaScript donde las declaraciones de variables (var) y funciones se 'elevan' al inicio de su scope antes de ejecutar el código.",ejemploHoisting:{pregunta:"¿Qué imprime este código?",codigo:`console.log(nombre);
var nombre = 'Juan';`,respuesta:"undefined",explicacion:`JavaScript lo interpreta así:
var nombre;           // Declaración elevada
console.log(nombre);  // undefined (declarada pero sin valor)
nombre = 'Juan';      // Asignación en su lugar original`},nota:"Solo se eleva la DECLARACIÓN, no la asignación. Por eso imprime `undefined` en lugar de error."},{titulo:"¿Qué sufre Hoisting?",contenido:"No todas las declaraciones se comportan igual con el hoisting:",tablaHoisting:[{elemento:"var",hoisting:"Sí - Se eleva la declaración",resultado:"undefined antes de asignar"},{elemento:"let",hoisting:"Parcial - 'Temporal Dead Zone'",resultado:"ReferenceError antes de declarar"},{elemento:"const",hoisting:"Parcial - 'Temporal Dead Zone'",resultado:"ReferenceError antes de declarar"},{elemento:"function declaration",hoisting:"Sí - Se eleva completa",resultado:"Funciona antes de declararla"},{elemento:"function expression",hoisting:"No",resultado:"Error antes de declararla"},{elemento:"arrow function",hoisting:"No",resultado:"Error antes de declararla"}],ejemploFunciones:{funcionDeclarativa:`// ✓ Funciona por hoisting
saludar();

function saludar() {
  console.log('Hola');
}`,funcionExpresion:`// ✗ Error: Cannot access 'saludar' before initialization
saludar();

const saludar = function() {
  console.log('Hola');
};`}},{titulo:"Comparativa: var vs let vs const",contenido:"Resumen de las diferencias entre las tres formas de declarar variables:",tablaComparativa:[{caracteristica:"Scope",var:"Función",let:"Bloque",const:"Bloque"},{caracteristica:"Reasignable",var:"Sí",let:"Sí",const:"No"},{caracteristica:"Redeclarable",var:"Sí",let:"No",const:"No"},{caracteristica:"Sin valor inicial",var:"Sí",let:"Sí",const:"No"},{caracteristica:"Se añade a window",var:"Sí",let:"No",const:"No"},{caracteristica:"Hoisting",var:"Sí (undefined)",let:"TDZ",const:"TDZ"}],recomendacion:"Usa `const` por defecto. Usa `let` solo cuando necesites reasignar. Evita `var`."},{titulo:"¿Qué es un Closure?",contenido:"Un closure es una función que 'recuerda' las variables del scope donde fue creada, incluso después de que ese scope haya terminado de ejecutarse.",requisitos:["Una función anidada (función dentro de función)","La función interna accede a variables de la función externa","La función interna se ejecuta fuera de su scope original"]},{titulo:"Ejemplo de Closure: Contador",contenido:"El ejemplo clásico de closure es un contador con datos privados:",ejemploClosure:{titulo:"Contador Privado (Estado Encapsulado)",explicacion:"Los métodos retornados mantienen el acceso a la variable 'contador' gracias al closure, aunque la función original ya haya terminado.",codigo:`function crearContador(valorInicial = 0) {
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

// c1.contador → undefined (¡es privado!)`,puntosClave:["La variable 'contador' es privada, no se puede acceder directamente","Cada llamada a crearContador() crea un nuevo scope independiente","Los métodos 'recuerdan' la variable contador de su closure","Este patrón se usaba para emular clases antes de ES6"]}},{titulo:"¿Por qué son útiles los Closures?",contenido:"Los closures tienen múltiples usos en JavaScript moderno:",usosClosures:[{uso:"Encapsulación / Datos privados",descripcion:"Crear variables que no son accesibles desde fuera, como en el ejemplo del contador.",ejemplo:`function crearContador() {
  let contador = 0;
  return () => ++contador;
}
const leer = crearContador();`},{uso:"Factory Functions",descripcion:"Funciones que crean y retornan otras funciones con configuraciones específicas.",ejemplo:`function crearSumador(x) {
  return (y) => x + y;
}
const suma5 = crearSumador(5);`},{uso:"Memoización",descripcion:"Guardar resultados de funciones costosas para no recalcularlos.",ejemplo:`function memo() {
  const cache = {};
  return (n) => cache[n] || (cache[n] = n * 2);
}`},{uso:"Event Handlers",descripcion:"Mantener el contexto en callbacks y manejadores de eventos.",ejemplo:`function setupBotones() {
  let clicks = 0;
  document.body.onclick = () => {
    console.log(++clicks);
  };
}`}],nota:"Los closures son la base de muchos patrones en JavaScript y se usan intensivamente en React (hooks como useState usan closures)."}]},{id:7,titulo:"Ejercicios Prácticos",descripcion:"Resolución de ejercicios para practicar operadores, condicionales y validación de entrada de usuario.",temas:[{titulo:"Validación de entrada del usuario",contenido:"Cuando pedimos datos al usuario, es importante validar que ha introducido valores correctos antes de procesarlos.",tecnicasValidacion:{prompt:`// Usar prompt para pedir datos
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
}`}}]}]},h={titulo:"Arrays y Objetos",descripcion:"Arrays, objetos, arrow functions y métodos avanzados de manipulación de datos en JavaScript.",icono:"fa-table-cells",clases:[{id:8,titulo:"Introducción a Arrays y Objetos",descripcion:"Aprende qué son los arrays y objetos, cómo declararlos, acceder a sus elementos y las diferencias con los tipos primitivos.",temas:[{titulo:"Tipos por Referencia",contenido:"Tanto los objetos como los arrays son **tipos por referencia**. Cuando los declaramos, lo que guardamos en la variable es la dirección de memoria donde están almacenados los datos, no los datos en sí.",puntosClave:["Los tipos primitivos (number, string, boolean) se pasan **por valor**: se copia el valor","Arrays y objetos se pasan **por referencia**: se copia la dirección de memoria","Si modificas un array/objeto pasado a una función, modificas el original","Por eso podemos declarar arrays y objetos con `const` y aún modificar su contenido"],alerta:"Cuidado al copiar arrays/objetos con `=`. Ambas variables apuntarán al mismo dato en memoria."},{titulo:"¿Qué es un Array?",contenido:"Un array es una colección ordenada de valores que se almacenan bajo un único nombre de variable. Cada valor tiene una posición numérica (índice) que empieza en 0.",formasDeclaracion:[{forma:"Sintaxis literal (recomendada)",ejemplo:"const nombres = ['Jose', 'Luis'];",descripcion:"La forma más común y directa de crear un array."},{forma:"Constructor Array",ejemplo:"const nums = new Array(1, 2, 3);",descripcion:"Usa el constructor de la clase Array."},{forma:"Array vacío",ejemplo:"const vacio = [];",descripcion:"Crea un array sin elementos."}],codigo:`// Declaración e inicialización
const nombres = ['Jose', 'Luis', 'María'];

// Acceso por índice (empieza en 0)
console.log(nombres[0]); // 'Jose'
console.log(nombres[2]); // 'María'

// Modificar un elemento
nombres[1] = 'Pedro';

// Los arrays pueden mezclar tipos
const mixto = ['texto', 42, true, null];`},{titulo:"Propiedades y Métodos de Arrays",contenido:"Los arrays en JavaScript son objetos, lo que significa que tienen propiedades y métodos propios.",caracteristicas:[{nombre:"Propiedad length",descripcion:"Devuelve el número de elementos del array. Es la propiedad más utilizada."},{nombre:"typeof devuelve 'object'",descripcion:"JavaScript no tiene un tipo 'array'. `typeof []` devuelve 'object' porque los arrays heredan de Object."},{nombre:"Índices no existentes",descripcion:"Acceder a un índice que no existe devuelve `undefined`, no da error."},{nombre:"Índices no consecutivos (sparse arrays)",descripcion:"Puedes asignar a cualquier índice. El array tendrá 'huecos' con posiciones vacías."}],codigo:`const letras = ['a', 'b', 'c'];

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
// nombres = ['Jose', 'Luis', <8 empty items>, 'María']`},{titulo:"Recorrer Arrays con for y for...of",contenido:"Existen varias formas de iterar sobre los elementos de un array.",metodosIteracion:[{metodo:"for clásico",descripcion:"Control total sobre el índice. Útil cuando necesitas el índice.",codigo:"const nums = [10, 20, 30];\nfor (let i = 0; i < nums.length; i++) {\n  console.log(`Posición ${i}: ${nums[i]}`);\n}"},{metodo:"for...of",descripcion:"Más limpio cuando solo necesitas los valores, no los índices.",codigo:`const nombres = ['Ana', 'Luis', 'Eva'];
for (const nombre of nombres) {
  console.log(nombre);
}`}],nota:"Cuando el array es muy grande, es más eficiente guardar `length` en una variable antes del loop para evitar recalcularlo en cada iteración."},{titulo:"¿Qué es un Objeto?",contenido:"Un objeto es una estructura de datos que almacena pares **clave-valor**. A diferencia de los arrays, las claves son strings (o Symbols) en lugar de números.",puntosClave:["Sirven para modelar entidades del mundo real con propiedades","En JavaScript NO es necesario definir una clase para crear un objeto","También son tipos por referencia","Las claves se escriben sin comillas, los valores según su tipo","**delete** elimina la clave del objeto. Asignar **null** la mantiene con valor null."],codigo:`// Declaración de un objeto literal
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
delete persona.occupation;`},{titulo:"Iterar Objetos con for...in",contenido:"Para recorrer las propiedades de un objeto usamos `for...in`, que itera sobre las claves del objeto.",codigo:`const coche = {
  marca: 'Toyota',
  modelo: 'Corolla',
  year: 2020
};

for (const clave in coche) {
  console.log(\`\${clave}: \${coche[clave]}\`);
}
// marca: Toyota
// modelo: Corolla
// year: 2020`,alerta:"`for...in` es para objetos, `for...of` es para arrays. No los confundas."},{titulo:"Continue y Break",contenido:"Son sentencias de control de flujo dentro de bucles.",conceptosParametros:[{nombre:"continue",descripcion:"Salta a la siguiente iteración del bucle sin ejecutar el código restante.",codigo:`// Imprimir solo impares
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i); // 1, 3, 5, 7, 9
}`},{nombre:"break",descripcion:"Termina el bucle completamente y salta a la siguiente línea después del bucle.",codigo:`// Buscar el primer par
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log('Primer par:', i);
    break; // Sale del bucle
  }
}`}]}]},{id:9,titulo:"Arrow Functions",descripcion:"Domina la sintaxis moderna de funciones flecha, sus ventajas y cuándo usarlas.",temas:[{titulo:"¿Qué son las Arrow Functions?",contenido:"Las arrow functions son una forma más concisa de escribir funciones, introducidas en ES6. Son especialmente útiles para callbacks y funciones cortas.",puntosClave:["Eliminan la palabra clave `function`","Usan el operador flecha `=>`","No tienen su propio `this` (heredan del contexto padre)","No tienen acceso al objeto `arguments`","Siempre son anónimas","No son afectadas por hoisting"]},{titulo:"Sintaxis Básica",contenido:"La sintaxis varía según el número de parámetros y líneas de código.",tiposDeclaracion:[{nombre:"Sin parámetros",icono:"fa-arrow-right",descripcion:"Paréntesis vacíos obligatorios.",codigo:`const saludo = () => {
  return 'Hola, mundo';
};`},{nombre:"Un parámetro",icono:"fa-arrow-right",descripcion:"Se pueden omitir los paréntesis.",codigo:`const doble = n => {
  return n * 2;
};`},{nombre:"Múltiples parámetros",icono:"fa-arrow-right",descripcion:"Paréntesis obligatorios.",codigo:`const suma = (a, b) => {
  return a + b;
};`}]},{titulo:"Return Implícito",contenido:"Cuando la función tiene una sola expresión, podemos omitir las llaves `{}` y la palabra `return`. El valor se devuelve automáticamente.",comparacion:{titulo:"Función normal vs Arrow con return implícito",antes:`// Forma extendida
const cuadrado = (n) => {
  return n * n;
};`,despues:`// Return implícito
const cuadrado = n => n * n;`},puntosClave:["Solo funciona con una única expresión","Si necesitas múltiples líneas, usa llaves y `return` explícito","Para devolver un objeto literal, envuélvelo en paréntesis: `() => ({ clave: valor })`"]},{titulo:"Arrow Functions vs Funciones Tradicionales",contenido:"Aunque parecen intercambiables, hay diferencias importantes.",tablaComparativa:[{caracteristica:"Sintaxis",tradicional:"Más verbosa",arrow:"Más concisa"},{caracteristica:"`this`",tradicional:"Propio (dinámico)",arrow:"Heredado (léxico)"},{caracteristica:"`arguments`",tradicional:"Disponible",arrow:"No disponible"},{caracteristica:"Hoisting",tradicional:"Sí (declarativas)",arrow:"No"},{caracteristica:"Constructor",tradicional:"Puede usarse con `new`",arrow:"No puede"}],recomendacion:"Usa arrow functions para callbacks y funciones cortas. Usa funciones tradicionales cuando necesites `this` propio o el objeto `arguments`."},{titulo:"Casos de Uso Comunes",contenido:"Las arrow functions brillan especialmente en estos escenarios:",usosClosures:[{uso:"Callbacks de array",descripcion:"Métodos como `map`, `filter`, `reduce`.",ejemplo:"const dobles = [1, 2, 3].map(n => n * 2);"},{uso:"Event listeners",descripcion:"Manejadores de eventos cortos.",ejemplo:`btn.addEventListener('click', () => {
  console.log('Click!');
});`},{uso:"Promesas",descripcion:"Callbacks de `.then()` y `.catch()`.",ejemplo:`fetch('/api/data')
  .then(res => res.json())
  .then(data => console.log(data));`}]}]},{id:10,titulo:"Métodos de Arrays: Manipulación",descripcion:"Aprende a agregar, eliminar, dividir y combinar elementos de arrays con los métodos nativos.",temas:[{titulo:"Agregar Elementos",contenido:"JavaScript proporciona métodos específicos para añadir elementos al principio o al final de un array.",metodosArray:[{metodo:"push()",descripcion:"Añade uno o más elementos **al final** del array. Devuelve la nueva longitud.",codigo:`const frutas = ['manzana', 'pera'];
frutas.push('naranja');
// ['manzana', 'pera', 'naranja']

frutas.push('uva', 'kiwi');
// ['manzana', 'pera', 'naranja', 'uva', 'kiwi']`},{metodo:"unshift()",descripcion:"Añade uno o más elementos **al principio** del array. Devuelve la nueva longitud.",codigo:`const nums = [3, 4, 5];
nums.unshift(1, 2);
// [1, 2, 3, 4, 5]`}],nota:"Ambos métodos **modifican el array original** (mutación)."},{titulo:"Eliminar Elementos",contenido:"Métodos para quitar elementos del array.",metodosArray:[{metodo:"pop()",descripcion:"Elimina el **último** elemento y lo devuelve.",codigo:`const colores = ['rojo', 'verde', 'azul'];
const ultimo = colores.pop();
// ultimo = 'azul'
// colores = ['rojo', 'verde']`},{metodo:"shift()",descripcion:"Elimina el **primer** elemento y lo devuelve.",codigo:`const nums = [1, 2, 3];
const primero = nums.shift();
// primero = 1
// nums = [2, 3]`}]},{titulo:"splice(): El Todoterreno",contenido:"`splice()` puede insertar, eliminar o reemplazar elementos en cualquier posición del array.",sintaxis:"array.splice(índice, cuántosEliminar, ...elementosAñadir)",metodosArray:[{metodo:"Eliminar elementos",descripcion:"Desde el índice indicado, elimina N elementos.",codigo:`const letras = ['a', 'b', 'c', 'd'];
letras.splice(1, 2); // Desde índice 1, elimina 2
// letras = ['a', 'd']`},{metodo:"Insertar elementos",descripcion:"Indica 0 elementos a eliminar y añade los nuevos.",codigo:`const nums = [1, 4, 5];
nums.splice(1, 0, 2, 3); // Índice 1, 0 eliminados, añade 2 y 3
// nums = [1, 2, 3, 4, 5]`},{metodo:"Reemplazar elementos",descripcion:"Combina eliminación e inserción.",codigo:`const dias = ['L', 'X', 'V'];
dias.splice(1, 1, 'M', 'Mi', 'J');
// dias = ['L', 'M', 'Mi', 'J', 'V']`}],alerta:"`splice()` **modifica el array original** y devuelve un array con los elementos eliminados."},{titulo:"Vaciar un Array",contenido:"Existen varias formas de vaciar un array, pero cuidado con las referencias.",metodosArray:[{metodo:"Reasignar a []",descripcion:"Rápido, pero **NO** afecta a otras copias del array.",codigo:`let arr1 = [1, 2, 3];
let arr2 = arr1; // Referencia compartida

arr1 = []; 
// arr1 es ahora []
// ¡PERO arr2 sigue siendo [1, 2, 3]! ⚠️`},{metodo:"length = 0",descripcion:"Vacía el array original. Todas las referencias ven el cambio.",codigo:`const arr1 = [1, 2, 3];
const arr2 = arr1;

arr1.length = 0;
// Tanto arr1 como arr2 ahora son [] ✅`},{metodo:"splice(0)",descripcion:"También modifica el original, similar a length = 0.",codigo:"arr.splice(0, arr.length);"}]},{titulo:"slice(): Copiar y Extraer",contenido:"`slice()` devuelve una **copia superficial** de una porción del array. **No modifica el original**.",sintaxis:"array.slice(inicio, fin) // fin no inclusivo",codigo:`const nums = [1, 2, 3, 4, 5];

const copia = nums.slice(); // Copia completa
const medio = nums.slice(1, 4); // [2, 3, 4]
const ultimos = nums.slice(-2); // [4, 5]

console.log(nums); // [1, 2, 3, 4, 5] (sin cambios)`,nota:"Útil para crear copias de arrays primitivos. Para objetos/arrays anidados, solo copia las referencias."},{titulo:"concat() y join()",contenido:"Métodos para combinar arrays y convertirlos a strings.",metodosArray:[{metodo:"concat()",descripcion:"Une dos o más arrays. Devuelve un **nuevo array** sin modificar los originales.",codigo:`const a = [1, 2];
const b = [3, 4];
const c = a.concat(b);
// c = [1, 2, 3, 4]
// a y b siguen igual`},{metodo:"join()",descripcion:"Convierte el array en un string, uniendo elementos con el separador indicado.",codigo:`const palabras = ['Hola', 'mundo'];
const frase = palabras.join(' ');
// 'Hola mundo'

const csv = [1, 2, 3].join(',');
// '1,2,3'`}]},{titulo:"split() y Creación de Slugs",contenido:"Aunque `split()` es un método de strings, se usa frecuentemente junto con métodos de arrays para transformar texto.",metodosArray:[{metodo:"split()",descripcion:"Divide un string en un array, separando por el carácter indicado.",codigo:`const titulo = 'Mi primer post sobre JavaScript';

// Dividir por espacios
const palabras = titulo.split(' ');
// ['Mi', 'primer', 'post', 'sobre', 'JavaScript']`},{metodo:"Crear un slug",descripcion:"Combinando split() y join() podemos crear URLs amigables.",codigo:`const titulo = 'Mi primer post sobre JavaScript';

// Método 1: split + join
const slug = titulo.split(' ').join('-');
// 'Mi-primer-post-sobre-JavaScript'

// Método 2: replaceAll (más directo)
const slug2 = titulo.replaceAll(' ', '-');
// 'Mi-primer-post-sobre-JavaScript'

// Slug completo (minúsculas)
const slugFinal = titulo.toLowerCase().split(' ').join('-');
// 'mi-primer-post-sobre-javascript'`}],nota:"Esta combinación de split() → transformación → join() es muy común en JavaScript para manipular texto."},{titulo:"sort(): Ordenar Arrays",contenido:"`sort()` ordena los elementos del array **in-place** (modifica el original).",metodosArray:[{metodo:"Ordenar strings",descripcion:"Por defecto ordena alfabéticamente según Unicode.",codigo:`const letras = ['c', 'a', 'b'];
letras.sort();
// ['a', 'b', 'c']`},{metodo:"Ordenar números",descripcion:"Requiere función comparadora para orden numérico.",codigo:`const nums = [10, 2, 5, 1];

// ❌ Incorrecto (ordena como strings)
nums.sort(); // [1, 10, 2, 5]

// ✅ Correcto (orden numérico ascendente)
nums.sort((a, b) => a - b); // [1, 2, 5, 10]

// Descendente
nums.sort((a, b) => b - a); // [10, 5, 2, 1]`}],nota:"La función comparadora debe devolver: **negativo** (a antes), **positivo** (b antes), **0** (iguales)."}]},{id:11,titulo:"Métodos de Arrays: Búsqueda y Spread",descripcion:"Aprende a ordenar arrays de objetos, buscar elementos y usar el spread operator.",temas:[{titulo:"Ordenar Arrays de Objetos",contenido:"Cuando un array contiene objetos, debemos indicar por qué propiedad queremos ordenar usando una función comparadora.",codigo:`const alumnos = [
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
// nombres.sort() daría ['Ana', 'Beto', 'álvaro'] ❌`,nota:"Para comparar strings correctamente con mayúsculas y minúsculas, usa `localeCompare`."},{titulo:"Buscar en Arrays de Primitivos",contenido:"Métodos para encontrar elementos o comprobar su existencia.",metodosArray:[{metodo:"indexOf()",descripcion:"Devuelve el índice de la primera aparición. Devuelve **-1** si no existe.",codigo:`const frutas = ['🍎', '🍐', '🍊'];
frutas.indexOf('🍐'); // 1
frutas.indexOf('🍇'); // -1`},{metodo:"lastIndexOf()",descripcion:"Igual que indexOf pero busca desde el final.",codigo:`const nums = [1, 2, 3, 2, 1];
nums.lastIndexOf(2); // 3`},{metodo:"includes()",descripcion:"Devuelve `true` o `false`. Más semántico que indexOf.",codigo:`const colores = ['rojo', 'verde'];
colores.includes('verde'); // true
colores.includes('azul'); // false`}]},{titulo:"Buscar en Arrays de Objetos",contenido:"Para objetos, usamos `find()` y `findIndex()` con un predicado (función que devuelve boolean).",metodosArray:[{metodo:"find()",descripcion:"Devuelve el **primer elemento** que cumple la condición, o `undefined`.",codigo:`const usuarios = [
  { id: 1, nombre: 'Ana' },
  { id: 2, nombre: 'Luis' }
];

const usuario = usuarios.find(u => u.id === 2);
// { id: 2, nombre: 'Luis' }`},{metodo:"findIndex()",descripcion:"Devuelve el **índice** del primer elemento que cumple la condición, o -1.",codigo:`const idx = usuarios.findIndex(u => u.nombre === 'Ana');
// 0`}],nota:"Ambos métodos detienen la búsqueda en cuanto encuentran una coincidencia (eficiente).",alerta:"`indexOf()` NO funciona con objetos porque compara referencias de memoria, no contenido. Usa `find()` o `findIndex()` para buscar objetos por propiedades."},{titulo:"Spread Operator (...)",contenido:"El operador spread `...` expande los elementos de un array (o propiedades de un objeto) individualmente.",metodosArray:[{metodo:"Copiar arrays",descripcion:"Crea una copia superficial de forma concisa.",codigo:`const original = [1, 2, 3];
const copia = [...original];`},{metodo:"Concatenar arrays",descripcion:"Combina múltiples arrays en uno nuevo.",codigo:`const a = [1, 2];
const b = [3, 4];
const juntos = [...a, ...b]; // [1, 2, 3, 4]`},{metodo:"Insertar elementos",descripcion:"Añade elementos en cualquier posición.",codigo:`const nums = [1, 4, 5];
const completo = [1, 2, 3, ...nums.slice(1)];
// [1, 2, 3, 4, 5]`}]},{titulo:"Spread Operator con Objetos",contenido:"También funciona para copiar y fusionar objetos.",codigo:`const persona = { nombre: 'Ana', edad: 25 };

// Copia del objeto
const copia = { ...persona };

// Añadir/sobrescribir propiedades
const empleado = { ...persona, puesto: 'Dev', edad: 26 };
// { nombre: 'Ana', edad: 26, puesto: 'Dev' }

// Fusionar objetos
const extra = { ciudad: 'Madrid' };
const completo = { ...persona, ...extra };`,nota:"Las propiedades posteriores sobrescriben las anteriores si tienen la misma clave."}]},{id:12,titulo:"Métodos de Arrays: every, some, filter, map, reduce",descripcion:"Domina los métodos de orden superior para transformar, filtrar y reducir arrays de forma funcional.",temas:[{titulo:"every(): ¿Todos cumplen?",contenido:"`every()` comprueba si **todos** los elementos del array cumplen una condición. Devuelve `true` o `false`.",codigo:`const edades = [20, 25, 30, 18];

const todosMayores = edades.every(edad => edad >= 18);
// true

const todosMayores21 = edades.every(edad => edad >= 21);
// false`,nota:"En cuanto un elemento devuelve `false`, deja de iterar (cortocircuito)."},{titulo:"some(): ¿Alguno cumple?",contenido:"`some()` comprueba si **al menos uno** de los elementos cumple la condición.",codigo:`const edades = [15, 16, 17, 18];

const hayMayor = edades.some(edad => edad >= 18);
// true

const hayNegativo = edades.some(edad => edad < 0);
// false`,nota:"En cuanto un elemento devuelve `true`, deja de iterar."},{titulo:"filter(): Filtrar Elementos",contenido:"`filter()` crea un **nuevo array** con los elementos que pasan el test (devuelven `true`).",codigo:`const productos = [
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
// [2, 4]`,puntosClave:["**No modifica** el array original","Devuelve un array vacío si ningún elemento cumple","Muy útil para búsquedas y clasificaciones"]},{titulo:"map(): Transformar Elementos",contenido:"`map()` crea un **nuevo array** aplicando una función a cada elemento.",codigo:`const nums = [1, 2, 3, 4, 5];

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
// Ahora 'tablaBody' es un string listo para insertar en el DOM`,nota:"El uso de `map` para transformar datos en estructuras visuales (HTML, componentes React) es su uso más común en frontend."},{titulo:"reduce(): Reducir a un Valor",contenido:"`reduce()` acumula todos los elementos del array en un único valor. Es el método más versátil.",sintaxis:"array.reduce((acumulador, elemento) => ..., valorInicial)",metodosArray:[{metodo:"Sumar números",descripcion:"El uso más clásico de reduce.",codigo:`const nums = [1, 2, 3, 4, 5];
const suma = nums.reduce((acc, n) => acc + n, 0);
// 15`},{metodo:"Aplanar arrays",descripcion:"Convertir array de arrays en uno solo.",codigo:`const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => 
  [...acc, ...arr], []);
// [1, 2, 3, 4, 5]`},{metodo:"Agrupar por propiedad",descripcion:"Crear un objeto agrupando elementos.",codigo:`const alumnos = [
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
// { JS: [...], Python: [...] }`}],puntosClave:["El `valorInicial` define el tipo del acumulador (número, array, objeto...)","Siempre debe devolver el acumulador","Puede reemplazar `filter` + `map` en una sola pasada (más eficiente)"]},{titulo:"Encadenar Métodos",contenido:"Como estos métodos devuelven arrays, podemos encadenarlos para operaciones complejas.",codigo:`const productos = [
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
// ['Laptop', 'Teclado']`,nota:"Cada método crea un nuevo array. Para máxima eficiencia con arrays grandes, considera usar un solo `reduce`."}]},{id:13,titulo:"Ejercicios Prácticos con Arrays",descripcion:"Pon a prueba tus conocimientos con ejercicios prácticos que combinan todos los métodos aprendidos.",temas:[{titulo:"Ejercicio 1: Valores Absolutos",contenido:"Dado un array de números, crear una función que devuelva un array con los valores absolutos.",solucion:{codigo:`function vAbsoluto(arr) {
  return arr.map(n => Math.abs(n));
}

// Uso
const nums = [1, -4, 5, -20, 8];
const absolutos = vAbsoluto(nums);
// [1, 4, 5, 20, 8]`}},{titulo:"Ejercicio 2: Clasificar por Tipos",contenido:"Dado un array con datos mixtos, crear una función que devuelva un objeto clasificando los elementos por su tipo.",solucion:{codigo:`function porTipos(arr) {
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
// { string: ['hola'], number: [42], boolean: [true], object: [{...}, null] }`}},{titulo:"Ejercicio 3: Filtrar por Propiedad",contenido:"Dado un array de objetos, crear una función que filtre por el valor de una propiedad.",solucion:{codigo:`function filtrarPor(arr, propiedad, valor) {
  return arr.filter(item => item[propiedad] === valor);
}

// Uso
const alumnos = [
  { nombre: 'Ana', curso: 'FullStack' },
  { nombre: 'Luis', curso: 'IA' },
  { nombre: 'Eva', curso: 'FullStack' }
];

const fullStack = filtrarPor(alumnos, 'curso', 'FullStack');
// [{ nombre: 'Ana', ... }, { nombre: 'Eva', ... }]`}},{titulo:"Ejercicio 4: Contar por Categoría",contenido:"Dado un array de objetos, contar cuántos elementos hay de cada categoría usando reduce.",solucion:{codigo:`function contarPor(arr, propiedad) {
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
// { JS: 2, Python: 1 }`}},{titulo:"Ejercicio 5: Encontrar el Mayor",contenido:"Dado un array de objetos con propiedad numérica, encontrar el objeto con el valor más alto.",solucion:{codigo:`function encontrarMayor(arr, propiedad) {
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
// { nombre: 'Laptop', precio: 1200 }`}},{titulo:"Ejercicio 6: Calcular Promedio",contenido:"Dado un array de objetos con array de notas, calcular el promedio de cada uno.",solucion:{codigo:`const estudiantes = [
  { nombre: 'Ana', notas: [80, 90, 85] },
  { nombre: 'Luis', notas: [70, 75, 80] }
];

const conPromedio = estudiantes.map(est => ({
  ...est,
  promedio: est.notas.reduce((a, b) => a + b, 0) / est.notas.length
}));
// [{ nombre: 'Ana', notas: [...], promedio: 85 }, ...]`}},{titulo:"Ejercicio 7: Agrupar por Propiedad",contenido:"Crear una función genérica que agrupe un array de objetos por cualquier propiedad.",solucion:{codigo:`function agruparPor(arr, propiedad) {
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
// { Norte: [{...}, {...}], Sur: [{...}] }`}}]},{id:14,titulo:"Ejercicios con Arrays: Parte 2",descripcion:"Más ejercicios prácticos para dominar los métodos de arrays con casos de uso reales.",temas:[{titulo:"Ejercicio 1: Duplicar Valores",contenido:"Dado un array de números, crear un array donde cada elemento se duplique (x2).",solucion:{codigo:`const numbers = [1, 2, 3, 4, 5, 6];

// Usando map
const doubleNumbers = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10, 12]

console.log(doubleNumbers);`}},{titulo:"Ejercicio 2: Suma con Reduce",contenido:"Calcular la suma de todos los elementos del array usando reduce.",solucion:{codigo:`const nums = [1, 2, 3, 4, 5];

const suma = nums.reduce((acc, n) => acc + n, 0);
// 15

// También podemos sumar cuadrados
const sumaCuadrados = nums.reduce((acc, n) => acc + n * n, 0);
// 55 (1 + 4 + 9 + 16 + 25)`}},{titulo:"Ejercicio 3: Filtrar Pares",contenido:"Crear un nuevo array que contenga solo los números pares del array original.",solucion:{codigo:`const numbers = [1, 2, 3, 4, 5, 6];

const pares = numbers.filter(n => n % 2 === 0);
// [2, 4, 6]

// Para impares
const impares = numbers.filter(n => n % 2 !== 0);
// [1, 3, 5]`}},{titulo:"Ejercicio 4: Verificar Existencia con Prompt",contenido:"Pedir al usuario un número y verificar si está presente en el array usando includes.",solucion:{codigo:`const numbers = [1, 2, 3, 4, 5, 6];

// Pedir número al usuario
const userNumber = parseInt(prompt('Introduce un número:'));

if (numbers.includes(userNumber)) {
  console.log('El número está en el array');
} else {
  console.log('El número NO está en el array');
}`},nota:"Recuerda que `prompt()` siempre devuelve un string, por eso usamos `parseInt()` para convertirlo a número."},{titulo:"Ejercicio 5: Ordenar Descendente",contenido:"Ordenar el array de números en orden descendente (de mayor a menor).",solucion:{codigo:`const numbers = [3, 1, 7, 4, 2, 5];

// Ordenar ascendente y luego invertir
const descendente = numbers.sort((a, b) => a - b).reverse();
// [7, 5, 4, 3, 2, 1]

// O directamente con comparador invertido
const desc = [...numbers].sort((a, b) => b - a);
// [7, 5, 4, 3, 2, 1]`},nota:"Usamos el spread operator `[...numbers]` para no modificar el array original."},{titulo:"Ejercicio 6: Filtro Compuesto",contenido:"Dado dos arrays, concatenarlos y filtrar los elementos que son múltiplos de 3 pero NO múltiplos de 5.",solucion:{codigo:`const array1 = [3, 5, 6, 9, 10, 12];
const array2 = [15, 18, 20, 21, 25, 30];

// Concatenar arrays
const newArray = array1.concat(array2);

// Filtrar: múltiplos de 3 pero NO de 5
const noMultiplos = newArray.filter(n => 
  n % 3 === 0 && n % 5 !== 0
);
// [3, 6, 9, 12, 18, 21]`}},{titulo:"Ejercicio 7: Filtrar y Transformar Libros",contenido:"Dado un array de libros, filtrar los publicados después de 2000 y devolver sus títulos en mayúsculas.",solucion:{codigo:`const libros = [
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
  .map(l => l.titulo.toUpperCase());`}},{titulo:"Ejercicio 8: Filtrar Mayores de Edad",contenido:"Dado un array de estudiantes, filtrar los que tienen 18 años o más.",solucion:{codigo:`const estudiantes = [
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Luis', edad: 17 },
  { nombre: 'Eva', edad: 19 },
  { nombre: 'Miguel', edad: 16 }
];

const mayoresDeEdad = estudiantes.filter(
  est => est.edad >= 18
);
// [{ nombre: 'Ana', edad: 22 }, { nombre: 'Eva', edad: 19 }]`}},{titulo:"Ejercicio 9: Calcular Promedio de Calificaciones",contenido:"Dado un array de estudiantes con array de calificaciones, calcular el promedio de cada uno y añadirlo como propiedad.",solucion:{codigo:`const estudiantes = [
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

// Cada estudiante ahora tiene su promedio`}},{titulo:"Ejercicio 10: Encontrar Mayor Promedio",contenido:"Del ejercicio anterior, encontrar al estudiante con la calificación más alta.",solucion:{codigo:`// Asumiendo que ya tenemos conPromedio del ejercicio anterior

const mejorEstudiante = conPromedio.reduce(
  (mejor, actual) => 
    actual.promedio > mejor.promedio ? actual : mejor,
  conPromedio[0]
);

console.log(\`El mejor estudiante es \${mejorEstudiante.nombre} 
  con promedio de \${mejorEstudiante.promedio}\`);`}},{titulo:"Ejercicio 11: Análisis de Ventas",contenido:"Dado un array de ventas, filtrar las que tienen cantidad mayor a 8, calcular el total de cada venta y encontrar la más alta.",solucion:{codigo:`const ventas = [
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
);`}},{titulo:"Resumen: Cuándo Usar Cada Método",contenido:"Guía rápida para elegir el método correcto según lo que necesites hacer.",tablaComparativa:[{metodo:"map()",uso:"Transformar cada elemento",devuelve:"Array de misma longitud"},{metodo:"filter()",uso:"Quedarte con algunos elementos",devuelve:"Array (puede ser más corto)"},{metodo:"reduce()",uso:"Acumular/reducir a un valor",devuelve:"Cualquier cosa (número, objeto, etc.)"},{metodo:"find()",uso:"Encontrar UN elemento",devuelve:"Elemento o undefined"},{metodo:"some()",uso:"¿Alguno cumple?",devuelve:"Boolean (true/false)"},{metodo:"every()",uso:"¿Todos cumplen?",devuelve:"Boolean (true/false)"},{metodo:"sort()",uso:"Ordenar elementos",devuelve:"Array ordenado (mismo)"},{metodo:"includes()",uso:"¿Existe este valor?",devuelve:"Boolean"}],recomendacion:"Practica encadenando métodos: `.filter().map()` es una combinación muy poderosa y común."}]}]},S={titulo:"Prototipos y Clases",descripcion:"Domina la Programación Orientada a Objetos en JavaScript: prototipos, clases, herencia y encapsulamiento.",icono:"fa-sitemap",clases:[{id:15,titulo:"Prototipos en JavaScript",descripcion:"Entiende la base del lenguaje: la herencia prototípica, la cadena de prototipos y cómo los objetos delegan responsabilidades.",temas:[{titulo:"Introducción a los Prototipos",contenido:"JavaScript es un lenguaje basado en prototipos, no en clases (aunque existan como azúcar sintáctico). A diferencia de los lenguajes clásicos orientados a objetos donde se definen clases y se crean instancias, en JS los objetos delegan el comportamiento a otros objetos: sus prototipos.",puntosClave:["Los tipos primitivos (number, string) son valores simples.","Los objetos, arrays y funciones son tipos por referencia.","Cada objeto tiene un enlace interno a otro objeto llamado **prototipo**.","Si buscas una propiedad en un objeto y no la tiene, JS la busca en su prototipo."]},{titulo:"¿Qué es un Prototipo?",contenido:"Es un objeto 'molde' del cual otros objetos heredan propiedades y métodos. Es una delegación: si yo no sé hacer algo, ¿mi prototipo sabe hacerlo?",codigo:`const persona = {
  saludar: function() {
    console.log("Hola!");
  }
};

const alumno = Object.create(persona);
alumno.saludar(); // "Hola!" (Delegado al prototipo persona)`},{titulo:"La Cadena de Prototipos",contenido:"Cuando accedes a una propiedad, JS la busca en el objeto. Si no está, sube al prototipo. Si no está, sube al prototipo del prototipo... hasta llegar a `null` (el final de la cadena).",codigo:`// alumno -> persona -> Object.prototype -> null
console.log(alumno.toString()); 
// alumno no tiene toString
// persona no tiene toString
// Object.prototype SÍ tiene toString => Se ejecuta`},{titulo:"Verificar Prototipos",contenido:"Podemos comprobar si un objeto forma parte de la cadena de prototipos de otro con `isPrototypeOf`.",codigo:`const persona = { ... };
const alumno = Object.create(persona);

// ¿Es persona el prototipo de alumno?
console.log(persona.isPrototypeOf(alumno)); // true
console.log(Object.prototype.isPrototypeOf(alumno)); // true`},,{titulo:"Propiedades `__proto__` vs `prototype`",contenido:"Es fácil confundirse con estos términos:",puntosClave:["`__proto__`: Es la propiedad (getter/setter) en cada instancia que apunta a su prototipo real.","`prototype`: Es la propiedad de las **funciones constructoras** que se usará como prototipo para las instancias creadas con `new`.","Ejemplo: `Persona.prototype` es el objeto que será el `__proto__` de `new Persona()`."]},{titulo:"Asignar Prototipos",contenido:"Existen varias formas de trabajar con prototipos, algunas recomendadas y otras obsoletas.",metodosArray:[{metodo:"Object.create()",descripcion:"La forma recomendada. Crea un nuevo objeto usando otro como prototipo.",codigo:`const prototipo = { a: 1 };
const objeto = Object.create(prototipo);`},{metodo:"Funciones Constructoras",descripcion:"La forma clásica antes de ES6.",codigo:`function Persona(nombre) { this.nombre = nombre; }
const p = new Persona('Ana');`},{metodo:"__proto__ (No recomendado)",descripcion:"Modificar directamente la cadena de prototipos es lento y mala práctica.",codigo:"objeto.__proto__ = otroObjeto; // ❌ Evitar"},{metodo:"Object.setPrototypeOf()",descripcion:"Estándar pero lento si se usa dinámicamente.",codigo:"Object.setPrototypeOf(objeto, prototipo);"}]},{titulo:"Prototipos son Dinámicos",contenido:"Si modificas el prototipo, todos los objetos que delegan en él ven los cambios inmediatamente, incluso si fueron creados antes de la modificación.",codigo:`const padre = { saludo: "Hola" };
const hijo = Object.create(padre);

console.log(hijo.saludo); // "Hola"

padre.saludo = "Adiós";
console.log(hijo.saludo); // "Adiós" (El cambio se refleja)`},{titulo:"Sobrescribir Métodos (Shadowing)",contenido:"Si un objeto define una propiedad que ya existe en su prototipo, la 'tapa' o sobrescribe para sí mismo, sin afectar al prototipo ni a otros objetos.",codigo:`const animal = {
  hacerRuido() { console.log("Sonido genérico"); }
};

const perro = Object.create(animal);
perro.hacerRuido = function() { console.log("Guau!"); };

perro.hacerRuido(); // "Guau!" (Propio)
animal.hacerRuido(); // "Sonido genérico" (Original)`},{titulo:"Ejemplo: Sobrescribir toString()",contenido:"Todos los objetos heredan `toString()` de `Object.prototype`, pero podemos sobrescribirlo para personalizar cómo se imprime nuestro objeto.",codigo:`const persona = { nombre: "sin nombre", profesion: "sin profesión" };

const alumno = Object.create(persona);
alumno.nombre = "Juan";
alumno.edad = 25;

// Por defecto, toString devuelve "[object Object]"
console.log(alumno.toString()); // "[object Object]"

// Sobrescribimos toString para alumno
alumno.toString = function() {
  return \`Hola, mi nombre es \${this.nombre} y tengo \${this.edad} años\`;
};

console.log(alumno.toString()); // "Hola, mi nombre es Juan y tengo 25 años"
console.log(persona.toString()); // "[object Object]" (no afectado)`},{titulo:"Ver el Prototipo de Object",contenido:"Puedes inspeccionar todos los métodos que heredan los objetos desde `Object.prototype`.",codigo:`// Ver todos los métodos de Object.prototype
console.log(Object.prototype);
// constructor, toString, valueOf, hasOwnProperty, isPrototypeOf, etc.

// Cadena completa: alumno -> persona -> Object.prototype -> null
console.log(alumno.__proto__);                    // persona
console.log(alumno.__proto__.__proto__);          // Object.prototype
console.log(alumno.__proto__.__proto__.__proto__); // null (fin de la cadena)`}]},{id:16,titulo:"Clases en JavaScript",descripcion:"Aprende la sintaxis moderna (ES6) para crear clases, constructores, métodos, encapsulamiento y herencia.",temas:[{titulo:"¿Qué son las Clases en JS?",contenido:"Introducidas en ES6 (2015), son una mejora sintáctica sobre los prototipos. Por debajo siguen usando prototipos, pero ofrecen una sintaxis más clara y familiar para programadores de otros lenguajes (Java, C#, Python).",codigo:`class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return \`Hola, soy \${this.nombre}\`;
  }
}

const user = new Usuario('Álvaro');`},{titulo:"El Constructor",contenido:"Es un método especial para crear e inicializar un objeto creado con una clase. Solo puede haber uno por clase.",puntosClave:["Se ejecuta automáticamente al hacer `new Clase()`.","Se usa para inicializar propiedades (`this.propiedad = valor`).","Si no lo defines, JS agrega uno vacío por defecto."]},{titulo:"Métodos de Instancia y Prototipo",contenido:"Los métodos definidos en la clase se agregan automáticamente al `prototype`, no a la instancia, lo cual es eficiente en memoria.",codigo:`class Persona {
  // Se guarda en Persona.prototype
  hablar() { ... }
}

// Equivalente antiguo:
function Persona() {}
Persona.prototype.hablar = function() { ... }`},{titulo:"Propiedades y Métodos Privados",contenido:"Ahora podemos definir propiedades verdaderamente privadas usando el prefijo `#`. Solo son accesibles desde dentro de la clase.",codigo:`class CuentaBancaria {
  #saldo; // Declaración obligatoria

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  verSaldo() {
    return this.#saldo; // ✅ Acceso interno permitido
  }
}

const cuenta = new CuentaBancaria(100);
// console.log(cuenta.#saldo); // ❌ Error: Private field`},{titulo:"Getters y Setters",contenido:"Permiten interceptar el acceso y la asignación de propiedades. Son útiles para validaciones o propiedades calculadas.",codigo:`class Usuario {
  constructor(edad) {
    this._edad = edad;
  }

  get edad() {
    return this._edad;
  }

  set edad(valor) {
    if (valor < 0) throw new Error("Edad no válida");
    this._edad = valor;
  }
}

const u = new Usuario(25);
u.edad = -5; // ❌ Lanza Error
u.edad = 30; // ✅ Llama al setter`},{titulo:"Métodos Estáticos",contenido:"Son métodos que pertenecen a la clase, no a las instancias. Se llaman directamente sobre la clase, como `Math.max()`.",codigo:`class Utilidades {
  static sumar(a, b) {
    return a + b;
  }
}

console.log(Utilidades.sumar(5, 10)); // 15
// const u = new Utilidades();
// u.sumar(1, 2); // ❌ Error, no existe en la instancia`},{titulo:"Herencia con `extends`",contenido:"Permite crear una clase que hereda propiedades y métodos de otra. Se usa la palabra clave `super` para llamar al constructor o métodos del padre.",puntosClave:["**extends**: Indica que una clase hereda de otra.","**super()**: Llama al constructor del padre. Es **obligatorio** antes de usar `this` en el constructor hijo.","**super.metodo()**: Permite llamar a un método del padre desde el hijo.","El hijo hereda todos los métodos y propiedades del padre automáticamente."],codigo:`class Animal {
  constructor(nombre) { this.nombre = nombre; }
  comer() { console.log("Comiendo..."); }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // ¡Obligatorio llamar a super() antes de usar this!
    this.raza = raza;
  }

  ladrar() { console.log("Guau!"); }
}

const p = new Perro('Toby', 'Mastín');
p.comer(); // Heredado del padre
p.ladrar(); // Propio de Perro`},{titulo:"Sobrescribir Métodos (Override)",contenido:"El hijo puede redefinir un método del padre para personalizarlo. El método del hijo 'tapa' al del padre solo para la instancia hija.",codigo:`class Persona {
  saludar() {
    console.log(\`Hola, soy \${this.nombre}\`);
  }
}

class Alumno extends Persona {
  constructor(nombre, curso) {
    super(nombre);
    this.curso = curso;
  }

  // Override: misma firma que el padre
  saludar() {
    console.log(\`Hola, soy \${this.nombre} y soy alumno de \${this.curso}\`);
  }
}

const p = new Persona('Juan');
const a = new Alumno('María', '1º Bachillerato');

p.saludar(); // "Hola, soy Juan"
a.saludar(); // "Hola, soy María y soy alumno de 1º Bachillerato"`},{titulo:"Nota: Propiedades Privadas en Chrome DevTools",contenido:"Google Chrome permite ver propiedades privadas (#) en la consola del navegador para facilitar el debugging. Sin embargo, **en tu código** no podrás acceder a ellas desde fuera de la clase.",alerta:"No te confundas: que Chrome te muestre `#saldo` en la consola no significa que sea accesible. En el código real dará error."}]},{id:17,titulo:"Ejercicios Prácticos I",descripcion:"Practica lo aprendido creando sistemas reales: Calculadora, Automóvil y Televisor.",temas:[{titulo:"Manejo de Errores (Try / Catch)",contenido:"Antes de realizar los ejercicios, es fundamental aprender a manejar situaciones inesperadas (como dividir por cero o recibir texto inválido) para evitar que el programa se detenga. Usamos `try`, `catch` y `throw`.",puntosClave:["`throw new Error('msg')`: Detiene la ejecución y lanza un error manualmente.","`try { ... }`: Bloque de código donde intentamos ejecutar algo 'peligroso'.","`catch (err) { ... }`: Bloque que captura el error si ocurre en el `try`. El objeto `err` tiene `name` y `message`.","`finally`: Bloque que se ejecuta siempre (opcional), haya error o no.","`isNaN(valor)`: Devuelve `true` si el valor NO es un número. Útil para validar inputs.","`console.error(msg)`: Muestra el mensaje en rojo en la consola (para errores)."],codigo:`function dividir(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Debe introducir un número válido");
  }
  if (b === 0) throw new Error("No se puede dividir por 0");
  return a / b;
}

try {
  dividir(10, 0);
} catch (error) {
  console.error("Error capturado:", error.message);
  // error.name => "Error"
  // error.message => "No se puede dividir por 0"
} finally {
  console.log("Operación terminada");
}`},{titulo:"Ejercicio 1: Calculadora",contenido:"Crea una clase `Calculadora` con métodos para sumar, restar, multiplicar y dividir. Maneja errores como la división por cero o inputs no numéricos.",codigo:`class Calculadora {
  #resultado = 0;

  constructor() {
    this.#resultado = 0;
  }

  get resultado() {
    return this.#resultado;
  }

  sumar(num) {
    this.#validarNumero(num);
    this.#resultado += num;
  }

  restar(num) {
    this.#validarNumero(num);
    this.#resultado -= num;
  }

  multiplicar(num) {
    this.#validarNumero(num);
    this.#resultado *= num;
  }

  dividir(num) {
    this.#validarNumero(num);
    if (num === 0) throw new Error("No se puede dividir por cero");
    this.#resultado /= num;
  }

  reiniciar() {
    this.#resultado = 0;
  }

  #validarNumero(num) {
    if (typeof num !== 'number' || isNaN(num)) {
      throw new Error("Debe introducir un número válido");
    }
  }
}`},{titulo:"Ejercicio 2: Automóvil",contenido:"Modela un `Auto` con propiedades como marca, modelo, encendido, velocidad. Implementa métodos para arrancar, apagar, acelerar y frenar con validaciones lógicas.",codigo:`class Auto {
  #encendido = false;
  #velocidad = 0;
  
  constructor(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
  }

  arrancar() {
    this.#encendido = true;
  }

  apagar() {
    if (this.#velocidad > 0) {
      console.log("No se puede apagar en movimiento");
      return;
    }
    this.#encendido = false;
  }

  acelerar() {
    if (!this.#encendido) {
      console.log("El auto está apagado");
      return;
    }
    this.#velocidad += 10;
  }

  frenar() {
    if (this.#velocidad <= 0) {
      console.log("El auto ya está detenido");
      return;
    }
    this.#velocidad -= 10;
  }

  toString() {
    return \`\${this.marca} \${this.modelo} - \${this.#encendido ? 'ON' : 'OFF'} (\${this.#velocidad} km/h)\`;
  }
}`},{titulo:"Ejercicio 3: Televisor",contenido:"Crea una clase `Televisor` con control de canales, volumen y encendido. Implementa lógica circular para los canales y límites para el volumen.",codigo:`class Televisor {
  #encendido = false;
  #canal = 0;
  #volumen = 0;

  constructor(marca, canalesMaximos = 100) {
    this.marca = marca;
    this.canalesMaximos = canalesMaximos;
  }

  prender() { this.#encendido = true; }
  apagar() { this.#encendido = false; }

  cambiarCanal(canal) {
    if (!this.#encendido) return;
    if (canal < 0 || canal > this.canalesMaximos) {
      console.log("Canal no existe");
      return;
    }
    this.#canal = canal;
  }

  canalSiguiente() {
    if (!this.#encendido) return;
    if (this.#canal === this.canalesMaximos) {
      this.#canal = 0; // Vuelta al principio
    } else {
      this.#canal++;
    }
  }

  subirVolumen() {
    if (!this.#encendido) return;
    if (this.#volumen < 100) this.#volumen++;
  }

  // ... resto de métodos (bajarVolumen, canalAnterior)
}`}]},{id:18,titulo:"Ejercicios Prácticos II",descripcion:"Ejercicios avanzados integrando múltiples clases y estructuras de datos más complejas: Anotador y Billetera Virtual.",temas:[{titulo:"Ejercicio 4: Anotador de Notas",contenido:"Crea una clase `Anotador` que gestione una lista de notas. Debe permitir agregar, actualizar, obtener y eliminar notas mediante un ID (índice en este caso).",codigo:`class Anotador {
  constructor(titulo) {
    this.titulo = titulo;
    this.notas = [];
  }

  agregarNota(nota) {
    this.notas.push(nota);
  }

  actualizarNota(id, nuevaNota) {
    if (this.notas[id]) {
      this.notas[id] = nuevaNota;
    }
  }

  obtenerNota(id) {
    return this.notas[id];
  }

  eliminarNota(id) {
    // Splice elimina 1 elemento en la posición id
    this.notas.splice(id, 1);
  }

  listarNotas() {
    return this.notas.reduce((acc, nota, index) => {
      return acc + \`\${index + 1}. \${nota}\\n\`;
    }, \`=== \${this.titulo} ===\\n\`);
  }
}`},{titulo:"Conceptos Clave: splice() y reduce()",contenido:"El ejercicio del Anotador usa estos métodos importantes:",puntosClave:["**splice(index, 1)**: Elimina 1 elemento en la posición `index`. Modifica el array original.","**reduce((acc, item, index) => {...}, valorInicial)**: El tercer parámetro de la callback es el índice actual.","Usa el índice para numerar elementos en listas (ej: `${index + 1}. ${nota}`)."]},{titulo:"Ejercicio 5: Billetera Virtual",contenido:"El ejercicio final consiste en modelar una Billetera (Wallet) que contenga Movimientos. Practicaremos la **composición de clases** (una clase usando otra).",puntosClave:["**Composición**: La clase `Wallet` contiene un array de objetos `Movimiento`.","**new Date(año, mes, día)**: Crea fechas. ¡El mes empieza en 0! (Enero = 0, Febrero = 1...).","**getMonth()**: Devuelve el mes de una fecha (0-11).","**Encadenamiento**: Puedes hacer `array.filter(...).reduce(...)` para filtrar y luego calcular."],codigo:`class Movimiento {
  constructor(descripcion, cantidad, fecha, tipo, categoria) {
    this.descripcion = descripcion;
    this.cantidad = cantidad;
    this.fecha = new Date(fecha);
    this.tipo = tipo; // 'gasto' o 'ganancia'
    this.categoria = categoria;
  }
}

class Wallet {
  constructor() {
    this.monto = 0; // Saldo actual
    this.operaciones = [];
  }

  agregarMovimiento(movimiento) {
    this.operaciones.push(movimiento);
    
    if (movimiento.tipo === 'gasto') {
      this.monto -= movimiento.cantidad;
    } else if (movimiento.tipo === 'ganancia') {
      this.monto += movimiento.cantidad;
    }
  }

  obtenerGastosPorMes(mes) {
    return this.operaciones.filter(op => 
      op.tipo === 'gasto' && op.fecha.getMonth() === mes
    );
  }

  calcularTotalPorCategoria(categoria) {
    return this.operaciones
      .filter(op => op.categoria === categoria)
      .reduce((total, op) => {
        return op.tipo === 'ganancia' 
          ? total + op.cantidad 
          : total - op.cantidad;
      }, 0);
  }
}`},{titulo:"Uso de la Wallet",contenido:"Ejemplo de cómo crear movimientos y agregarlos a la billetera.",codigo:`// Crear billetera
const cartera = new Wallet();

// Crear movimientos (año, mes, día) - ¡Marzo es mes 2!
const nomina = new Movimiento('Nómina', 3000, new Date(2024, 1, 1), 'ganancia', 'trabajo');
const compra = new Movimiento('Supermercado', 150, new Date(2024, 1, 5), 'gasto', 'comida');

// Agregar a la billetera
cartera.agregarMovimiento(nomina);
cartera.agregarMovimiento(compra);

console.log(cartera.monto); // 2850

// Filtrar gastos de febrero (mes 1)
const gastosFeb = cartera.obtenerGastosPorMes(1);`}]}]},j={titulo:"Módulos ES6 y Tooling",descripcion:"Organización de código con Import/Export, gestión de dependencias y bundlers como Vite.",icono:"fa-box-open",clases:[{id:19,titulo:"Módulos en ECMAScript 6 y Vite",descripcion:"Aprende a modularizar tu código, la sintaxis de import/export y cómo configurar un entorno de desarrollo profesional con Vite.",temas:[{titulo:"¿Qué son los Módulos?",contenido:"A medida que nuestras aplicaciones crecen, tener todo el código en un solo archivo o en múltiples scripts globales se vuelve inmanejable. Los módulos nos permiten dividir el código en archivos separados, reutilizables y con su propio ámbito (scope), evitando la contaminación del espacio global.",puntosClave:["**Encapsulamiento**: Las variables no son globales por defecto, solo se expone lo que exportas.","**Reutilización**: Exporta una vez, importa en múltiples lugares.","**Dependencias explícitas**: `import` define claramente qué necesita cada archivo.","**Sin contaminación global**: Cada módulo tiene su propio scope, evitando conflictos de nombres."]},{titulo:"El Problema sin Módulos",contenido:"Antes de los módulos, si querías usar código de varios archivos, tenías que importar cada uno con etiquetas `<script>` en el HTML. Todo quedaba en el contexto global y cualquier parte de la aplicación podía acceder a cualquier variable.",puntosClave:["**Múltiples scripts**: Necesitabas tantas etiquetas `<script>` como archivos JS tuvieras.","**Orden importa**: Los scripts debían cargarse en orden correcto de dependencias.","**Contexto global**: Todas las variables eran accesibles desde cualquier lugar.","**Colisiones de nombres**: Fácil sobrescribir variables accidentalmente."],codigo:`<!-- Antes: múltiples scripts en orden de dependencia -->
<script src="movimiento.js"><\/script>
<script src="wallet.js"><\/script>
<script src="main.js"><\/script>
<!-- Todo en contexto global, cualquiera accede a todo -->`},{titulo:"Tipos de Exportación",contenido:"Para que una variable, función o clase esté disponible para otros archivos, debemos exportarla. Existen dos tipos principales de exportación.",tiposDeclaracion:[{nombre:"Named Export (Exportación Nombrada)",descripcion:"Exporta múltiples valores con sus nombres. Al importar, debes usar los mismos nombres entre llaves `{}`.",codigo:`// utils.js
export const pi = 3.1416;
export function sumar(a, b) { return a + b; }

// También al final del archivo (alternativa):
const pi = 3.1416;
function sumar(a, b) { return a + b; }
export { pi, sumar };`},{nombre:"Default Export (Exportación por Defecto)",descripcion:"Solo un `export default` por archivo. Útil para exportar lo 'principal' del módulo (una clase, un componente). Al importar, puedes darle cualquier nombre y no usar llaves.",codigo:`// user.js
export default class User { ... }

// O al final:
class User { ... }
export default User;`}]},{titulo:"Combinar Named y Default Export",contenido:"Puedes usar ambos tipos de exportación en el mismo archivo. El `export default` será lo principal, y los `named exports` serán utilidades adicionales.",codigo:`// modulo.js
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
// por lo tanto NO puede ser importada desde otro archivo`},{titulo:"Alias con 'as'",contenido:"Puedes renombrar elementos al exportar o al importar para evitar conflictos de nombres o mejorar legibilidad.",codigo:`// Al exportar con alias
function saludar() { console.log('Hola'); }
function despedir() { console.log('Adiós'); }
export { saludar as hello, despedir as bye };

// Al importar con alias
import { hello as greet, bye as farewell } from './utils.js';

// Útil cuando dos módulos exportan algo con el mismo nombre
import { Usuario as UsuarioAuth } from './auth.js';
import { Usuario as UsuarioDB } from './database.js';`},{titulo:"Modos de Importación",contenido:"Trae funcionalidades de otros módulos al archivo actual.",codigo:`// Importar Named Exports
import { pi, sumar } from './utils.js';

// Importar Default Export (nombre arbitrario)
import User from './user.js';

// Importar con Alias (renombrar)
import { sumar as add } from './utils.js';

// Importar TODO como un objeto
import * as Utils from './utils.js';
console.log(Utils.pi);
Utils.sumar(2, 3);`},{titulo:"Exportar un Objeto Personalizado",contenido:"Puedes crear un objeto específicamente para exportar, agrupando varias funcionalidades bajo un mismo namespace.",codigo:`// utils.js
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
console.log(MisUtils.constante);`},{titulo:"El Atributo `type='module'`",contenido:"Para usar módulos nativos en el navegador (sin bundler), debes agregar `type='module'` a tu etiqueta script.",codigo:'<script type="module" src="./main.js"><\/script>',alerta:"Los módulos requieren ejecutarse en un **servidor web** (http://) debido a políticas de seguridad CORS. No funcionarán abriendo el archivo directamente (file://). **Live Server no cumple con CORS**, por eso necesitas Vite u otro bundler."},{titulo:"Errores Comunes",contenido:"Problemas típicos al trabajar con módulos y cómo solucionarlos.",puntosClave:["**SyntaxError: Unexpected token 'export'**: Falta `type='module'` en el script.","**CORS Error**: Estás abriendo el archivo con file://. Necesitas un servidor HTTP.","**Live Server no funciona**: Live Server no es compatible con CORS para módulos. Usa Vite.","**Módulo no encontrado**: Revisa la ruta del import (./relativa o absoluta).","**Cannot use import statement outside a module**: El script no está marcado como módulo."]},{titulo:"Vite: Entorno de Desarrollo",contenido:"Para evitar configuraciones complejas y problemas de CORS, usamos **Vite**, un bundler moderno y ultra-rápido.",pasos:[{paso:"1. Instalar Node.js con NVM",descripcion:"Recomendado usar **nvm** (Node Version Manager) para gestionar versiones.",codigo:`# Instalar una versión de Node
nvm install 20.10

# Usar esa versión
nvm use 20.10

# Crear archivo .nvmrc para recordar la versión
node -v > .nvmrc`},{paso:"2. Crear Proyecto",descripcion:"Ejecutar `npm create vite@latest` en la terminal.",codigo:`npm create vite@latest mi-proyecto
# Seleccionar: Vanilla -> JavaScript`},{paso:"3. Instalar Dependencias",descripcion:"Entrar a la carpeta e instalar.",codigo:`cd mi-proyecto
npm install`},{paso:"4. Iniciar Servidor",descripcion:"Arrancar el entorno de desarrollo.",codigo:"npm run dev"}],nota:"Vite se encarga de servir tus módulos, recargar la página automáticamente (HMR) y optimizar el código para producción."},{titulo:"El Archivo .nvmrc",contenido:"Buena práctica: crear un archivo `.nvmrc` en la raíz del proyecto con la versión de Node que usas. Así, al volver al proyecto, solo ejecutas `nvm use` y automáticamente usará la versión correcta.",codigo:`# Crear el archivo con la versión actual
node -v > .nvmrc

# Contenido del archivo .nvmrc:
v20.10.0

# Al volver al proyecto:
nvm use
# Lee .nvmrc y usa esa versión automáticamente`}]}]},E={titulo:"Manipulación del DOM",descripcion:"Domina el Document Object Model (DOM) para crear interfaces web dinámicas e interactivas.",icono:"fa-code",clases:[{id:20,titulo:"Selectores del DOM",descripcion:"Aprende a seleccionar elementos del DOM utilizando métodos tradicionales y modernos.",temas:[{titulo:"¿Qué es un Selector?",contenido:"Un selector nos permite identificar y obtener elementos del DOM (Document Object Model) para poder manipularlos. Existen selectores tradicionales y modernos (similares a CSS)."},{titulo:"Selectores Tradicionales (GetElement)",contenido:"Métodos específicos optimizados para seleccionar por ID, clase, etiqueta o nombre. Son más rápidos que los modernos pero menos flexibles.",puntosClave:["`document.getElementById('id')`: Devuelve un **único elemento** `HTMLElement` o `null` si no existe.","`document.getElementsByClassName('clase')`: Devuelve una `HTMLCollection` (array-like) **en vivo**.","`document.getElementsByTagName('tag')`: Devuelve una `HTMLCollection` **en vivo** con todos los elementos de ese tipo.","`document.getElementsByName('name')`: Devuelve una `NodeList` **en vivo** (especial) con elementos que tengan ese atributo `name`."]},{titulo:"Selectores Modernos (Query Selector)",contenido:"Permiten usar sintaxis de selectores CSS completa. Son un poco más lentos pero infinitamente más flexibles. La diferencia de rendimiento es imperceptible en la mayoría de aplicaciones.",puntosClave:["`document.querySelector('selector')`: Devuelve el **primer elemento** que coincida o `null`.","`document.querySelectorAll('selector')`: Devuelve una `NodeList` **estática** con **todos** los elementos que coincidan. **Siempre** devuelve una NodeList, aunque sea vacía o solo encuentre uno."],codigo:`// Selecciona el primer elemento que coincida
const elemento = document.querySelector('.mi-clase p:first-child');

// Selecciona TODOS los elementos que coincidan
const elementos = document.querySelectorAll('.mi-clase p'); // Devuelve NodeList estática`},{titulo:"Búsquedas Acotadas",contenido:"No es necesario buscar siempre en `document`. Puedes buscar dentro de un elemento específico para limitar el alcance.",codigo:`const container = document.getElementById('container');

// Busca un párrafo SOLO dentro de 'container'
const parrafo = container.querySelector('p');`},{titulo:"HTMLCollection vs NodeList",contenido:"Ambos son colecciones de nodos, pero tienen diferencias críticas.",puntosClave:["**HTMLCollection**: Colección **'viva'** (se actualiza automáticamente si cambia el DOM). Solo contiene elementos HTML. Retornada por `getElementsByClassName` y `tagName`.","**Acceso en HTMLCollection**: Además del índice numérico, permite acceder a los elementos por su `id` o `name` como si fueran propiedades del objeto (ej: `coleccion['miId']`).","**NodeList**: Generalmente **estática** (excepto `getElementsByName`). Es una 'foto' del momento en que se hizo la consulta. Retornada por `querySelectorAll`.","**Iteración**: `NodeList` tiene `forEach` nativo. `HTMLCollection` NO.","**Recomendación**: Para usar métodos de Array (`map`, `filter`, `reduce`), convierte la colección usando el **Spread Operator** `[...coleccion]`."],codigo:`const collection = document.getElementsByTagName('p');
const nodes = document.querySelectorAll('p');

// Acceso por ID en HTMLCollection
// Si hay un <p id="intro">, existe collection.intro o collection['intro']

// Convertir a Array real
const arrayFromCollection = [...collection];
const arrayFromNodes = [...nodes];

// Ahora sí podemos usar map
arrayFromCollection.map(p => p.textContent);`}]},{id:21,titulo:"Creación de Elementos",descripcion:"Descubre cómo generar nuevo contenido HTML dinámicamente desde JavaScript.",temas:[{titulo:"¿Qué es un Nodo?",contenido:"Un **Nodo** es la unidad indivisible más básica del DOM. El DOM es un árbol jerárquico y cada punto de conexión en ese árbol es un nodo. Las etiquetas HTML, el texto dentro de ellas, los comentarios e incluso el archivo en sí, son todos nodos que forman esta estructura.",nota:"A menudo confundimos 'Nodo' con 'Elemento' (Etiqueta), pero el concepto de Nodo es más amplio: un Elemento es solo un tipo de Nodo.",codigo:`<!-- HTML Simple -->
<div id="padre">
  Hola Mundo
</div>

<!-- Estructura de Nodos real -->
1. Element Node: <div> (padre)
2. Text Node: "Salto de línea + espacios" (entre div y Hola)
3. Text Node: "Hola Mundo"
4. Text Node: "Salto de línea" (después de Hola)`},{titulo:"Tipos de Nodos",contenido:"El DOM tiene diferentes tipos de nodos. Los más comunes son Elementos (etiquetas) y Nodos de Texto.",puntosClave:["**Element Node**: Etiquetas HTML (`div`, `p`, `span`).","**Text Node**: Contenido textual dentro de las etiquetas.","**Comment Node**: Comentarios HTML."]},{titulo:"Creación de Nodos",contenido:"Métodos para instanciar nuevos nodos en memoria (aún no visibles en el DOM).",puntosClave:["**createElement(tag)**: Crea un elemento HTML (div, p, span...). Devuelve un HTMLElement.","**createTextNode(texto)**: Crea un nodo de tipo texto. No es una etiqueta, es contenido.","**createComment(texto)**: Crea un nodo de tipo comentario HTML.","**createDocumentFragment()**: Crea un contenedor temporal para construir estructuras complejas sin afectar al DOM."],codigo:`// Crear un elemento HTML (Element Node)
const div = document.createElement('div');

// Crear un nodo de texto (Text Node)
const texto = document.createTextNode('Hola Mundo');

// Crear un comentario (Comment Node)
const comentario = document.createComment('Esto es un comentario');

// Fragmento de Documento (Mejora rendimiento)
// Permite agregar múltiples elementos en memoria y luego insertarlos de una vez
// Evita múltiples 'reflows' y 'repaints' del navegador, mejorando la velocidad
const fragment = document.createDocumentFragment();`},{titulo:"DocumentFragment para Rendimiento",contenido:"Cuando necesitas crear estructuras complejas (listas, tablas con muchos elementos), cada operación en el DOM tiene un coste. El DocumentFragment permite construir todo en memoria y añadirlo de una sola vez.",puntosClave:["**Sin modificar el DOM**: Todas las operaciones en el fragment no afectan al documento real.","**Una sola inserción**: Al hacer appendChild del fragment, se insertan todos los elementos de golpe.","**Mejor rendimiento**: Reduce los reflows y repaints del navegador.","**El fragment desaparece**: Al insertar, solo se añaden sus hijos, el fragment queda vacío."],codigo:`// Crear una lista de 100 elementos de forma eficiente
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 100; i++) {
  const li = document.createElement('li');
  li.textContent = \`Elemento \${i}\`;
  fragment.appendChild(li); // Añadimos al fragment, no al DOM
}

// Una única operación en el DOM real
document.getElementById('mi-lista').appendChild(fragment);`},{titulo:"Clonar Nodos",contenido:"Podemos duplicar nodos existentes con `cloneNode`. Es importante entender la copia superficial vs profunda.",codigo:`const original = document.getElementById('mi-div');

// false (default): Clona solo el nodo (sin hijos ni texto)
const copiaSimple = original.cloneNode(false);

// true: Clona el nodo y todos sus descendientes (profundo)
const copiaProfunda = original.cloneNode(true);`},{titulo:"Propiedad isConnected",contenido:"Nos permite saber si un nodo está actualmente conectado al DOM visible del documento.",codigo:`const div = document.createElement('div');
console.log(div.isConnected); // false

document.body.appendChild(div);
console.log(div.isConnected); // true`},{titulo:"Añadir Contenido y Conectar",contenido:"Formas de introducir contenido en los elementos.",puntosClave:["`textContent`: Modifica el texto plano. **Sobreescribe** el contenido anterior. **Seguro** (no interpreta HTML).","`innerHTML`: Modifica el HTML interno (parsea etiquetas). **Sobreescribe** el contenido anterior. **Cuidado** con XSS.","`appendChild(nodo)`: Añade un nodo como último hijo de otro nodo. No sobreescribe, solo añade."],codigo:`const p = document.createElement('p');

// Opción 1: Text Content (Recomendado para texto. Sobreescribe.)
p.textContent = "Hola <strong>Mundo</strong>"; // Se ve literal: Hola <strong>Mundo</strong>

// Opción 2: Inner HTML (Si necesitas renderizar etiquetas. Sobreescribe.)
p.innerHTML = "Hola <strong>Mundo</strong>"; // Se ve: Hola Mundo (en negrita)

// Opción 3: Crear Text Node y apendizar (Más verborrágico. NO sobreescribe, añade al final)
const texto = document.createTextNode("Hola Mundo");
p.appendChild(texto);`}]},{id:22,titulo:"Gestión de Atributos",descripcion:"Aprende a leer y modificar los atributos HTML estándar y personalizados.",temas:[{titulo:"Atributos vs Propiedades",contenido:"Los atributos HTML (iniciales) y las propiedades del objeto DOM (actuales) suelen estar sincronizados, pero no siempre. Los atributos básicos (`id`, `src`, `href`) suelen tener propiedades directas.",nota:"¡Cuidado! `class` es una palabra reservada en JS, por eso la propiedad se llama `className`."},{titulo:"Acceso Directo (Propiedades)",contenido:"Forma rápida de acceder a atributos estándar.",codigo:`const img = document.querySelector('img');
img.src = 'nuevo.jpg';
img.className = 'mi-clase'; // NO img.class
img.style.color = 'red';`},{titulo:"API Genérica de Atributos",contenido:"Métodos para trabajar con cualquier atributo (estándar o no estándar). Siempre manejan **strings**.",puntosClave:["`hasAttribute('name')`: Devuelve `true`/`false`.","`hasAttributes()`: Devuelve `true` si tiene algún atributo.","`getAttribute('name')`: Obtiene el valor (o `null`).","`getAttributeNames()`: Devuelve array con nombres de atributos.","`setAttribute('name', 'value')`: Establece el valor (convierte a string).","`removeAttribute('name')`: Elimina el atributo por completo.","`toggleAttribute('name')`: Añade si no existe, quita si existe."],codigo:`const div = document.querySelector('div');

// Comprobar existencia
if (div.hasAttributes()) { // ¿Tiene algún atributo?
  console.log(div.getAttributeNames()); // ["id", "class", ...]
}

if (div.hasAttribute('id')) {
  console.log(div.getAttribute('id')); // Valor del ID
}

// Modificar y Eliminar
div.setAttribute('data-nuevo', '123'); // Siempre string
div.removeAttribute('id'); // Lo borra del HTML
div.toggleAttribute('disabled'); // Lo pone si no está, lo quita si está`},{titulo:"Atributos Booleanos (Bool vs String)",contenido:"Atributos como `checked`, `disabled`, `required`. En HTML la sola presencia indica `true`.",nota:"Usar `setAttribute('disabled', false)` establecerá `disabled='false'` que en HTML funciona como `true` (porque el atributo existe).",codigo:`const input = document.querySelector('input');

// MAL SI QUIERES DESACTIVARLO USANDO setAttribute
// input.setAttribute('disabled', false); // Crea disabled="false", el input sigue deshabilitado

// BIEN: Usar propiedades directas
input.disabled = false; 

// BIEN: Usar removeAttribute
input.removeAttribute('disabled');

// BIEN: Usar toggleAttribute
input.toggleAttribute('disabled', false); // Fuerza a quitarlo`}]},{id:23,titulo:"API classList y dataset",descripcion:"Formas modernas y eficientes de manejar clases CSS y datos personalizados.",temas:[{titulo:"classList vs className",contenido:"`className` maneja todo el string de clases (ineficiente para modificar una sola). `classList` ofrece una API potente (`DOMTokenList`).",puntosClave:["**className**: Sobreescribe todas las clases al asignar. Necesitas concatenar para añadir.","**classList**: API moderna con métodos para añadir, quitar, alternar clases sin afectar otras.","**classList.length**: Devuelve el número de clases del elemento.","**classList.item(n)**: Devuelve la clase en la posición n (como un array).","**classList.value**: Devuelve el string completo de clases (equivalente a className)."],codigo:`const div = document.querySelector('div');

// Añadir una o varias clases
div.classList.add('activa', 'visible');

// Eliminar una o varias clases
div.classList.remove('oculta', 'inactiva');

// Alternar (Toggle)
div.classList.toggle('seleccionada'); // Si está la quita, si no, la pone
div.classList.toggle('seleccionada', true); // Fuerza a ponerla (segundo param)

// Comprobar si tiene una clase
if (div.classList.contains('activa')) { ... }

// Reemplazar una clase por otra
div.classList.replace('vieja-clase', 'nueva-clase');

// Propiedades útiles
console.log(div.classList.length); // Número de clases
console.log(div.classList.item(0)); // Primera clase
console.log(div.classList[0]); // También funciona como array`},{titulo:"Data Attributes (dataset)",contenido:"Permite almacenar datos personalizados en elementos HTML usando atributos `data-*`. Útil para lógica JS invisible al usuario.",codigo:`<!-- HTML -->
<div id="user" data-user-id="123" data-role-admin="true" data-peso-kilogramo="80"></div>`},{titulo:"Uso de dataset en JS",contenido:"Se accede mediante la propiedad `dataset`. Las claves se convierten automáticamente de kebab-case a **camelCase**.",puntosClave:["`data-user-id` -> `dataset.userId`","`data-peso-kilogramo` -> `dataset.pesoKilogramo`","Para eliminar un data attribute, usa `removeAttribute('data-nombre')` (Setear a string vacío o null no lo elimina del HTML)."],codigo:`const user = document.getElementById('user');

// Leer
console.log(user.dataset.userId); // "123"
console.log(user.dataset.pesoKilogramo); // "80"

// Escribir
user.dataset.lastLogin = "2023-01-01"; // Crea atributo data-last-login`}]},{id:24,titulo:"Insertar y Navegar por el DOM",descripcion:"Domina tanto la API heredada (nodos) como la API moderna (elementos) para moverte y modificar el árbol.",temas:[{titulo:"Lectura de Contenido: Diferencias",contenido:"No es lo mismo leer el texto del HTML que leer el texto renderizado.",puntosClave:["`textContent`: Devuelve **todo** el texto, incluyendo el de elementos ocultos con CSS. (El más rápido)","`innerText`: Devuelve solo el texto **visible** (respeta `display: none`). Es más costoso porque requiere calcular estilos.","`innerHTML`: Devuelve string HTML. **Peligroso** con input de usuario (XSS). Sobreescribe contenido.","`setHTML()` (Experimental): Propuesta para insertar HTML de forma segura (sanitizando scripts).","`outerHTML`: Igual que innerHTML pero incluye la propia etiqueta contenedora."]},{titulo:"API de Inserción de Nodos (Clásica)",contenido:"Métodos que operan sobre nodos. Requieren referencia al padre e hijo.",codigo:`// Padre.metodo(Hijo)
padre.appendChild(nodo); // Añade al final
padre.removeChild(nodo); // Elimina hijo
padre.replaceChild(nuevo, viejo); // Reemplaza
padre.insertBefore(nuevo, referencia); // Inserta antes de referencia`},{titulo:"API de Inserción de Elementos (Moderna)",contenido:"Métodos más flexibles y directos. Permiten insertar múltiples nodos o texto.",codigo:`const el = document.querySelector('.elemento');
const nuevo = document.createElement('div');

el.before(nuevo); // Inserta hermano anterior
el.after(nuevo);  // Inserta hermano siguiente
el.prepend(nuevo);// Inserta primer hijo
el.append(nuevo); // Inserta último hijo
el.replaceChildren(nuevo); // Elimina todos los hijos y pone el nuevo

el.replaceWith(nuevo); // Se sustituye a sí mismo
el.remove(); // Se auto-elimina`},{titulo:"Inserción Adyacente (Potente)",contenido:"Permite control preciso de la posición.",codigo:`// Insertar Elemento
div.insertAdjacentElement('beforebegin', el); // Antes de abrir etiqueta
div.insertAdjacentElement('afterbegin', el);  // Primer hijo
div.insertAdjacentElement('beforeend', el);   // Último hijo
div.insertAdjacentElement('afterend', el);    // Después de cerrar etiqueta

// Insertar HTML (Parsing)
div.insertAdjacentHTML('beforeend', '<p>Hola</p>');

// Insertar Texto
div.insertAdjacentText('afterbegin', 'Texto');`},{titulo:"Navegación: Nodos vs Elementos",contenido:"Es vital distinguir si navegamos por nodos (incluye texto/espacios) o elementos (solo etiquetas).",puntosClave:["**Hijos**: `childNodes` (Nodos, incluye saltos de línea) vs `children` (Solo Elementos).","**Primero**: `firstChild` vs `firstElementChild`.","**Último**: `lastChild` vs `lastElementChild`.","**Hermanos**: `nextSibling` vs `nextElementSibling`.","**Padre**: `parentNode` vs `parentElement`.","**¡Cuidado!**: Los saltos de línea y espacios en tu código HTML son nodos de texto (#text). `childNodes` puede devolver más elementos de los esperados."],codigo:`// El espacio entre <div> y <p> en tu editor es un TextNode #text
// <div>
//   <p>...</p>
// </div>

div.firstChild; // Probablemente sea el nodo de texto (salto de línea)
div.firstElementChild; // Es el <p>`}]},{id:25,titulo:"Ejercicios Resueltos",descripcion:"Colección de ejercicios prácticos de selección y manipulación del DOM resueltos en clase.",temas:[{titulo:"Ejercicios 1-10: Selección Básica y Modificación",contenido:"Ejercicios introductorios para asentar bases.",codigos:[{titulo:"1. Primer Párrafo y Texto",descripcion:"Selecciona el primer P y cambia su texto.",codigo:`const p = document.getElementsByTagName('p')[0];
p.textContent = 'Hola, ¿qué tal?';`},{titulo:"2. Modificar atributo href",descripcion:"Cambia el enlace del segundo link del primer párrafo.",codigo:`const p = document.getElementsByTagName('p')[0];
// Buscamos enlaces DENTRO del párrafo
const enlaces = p.getElementsByTagName('a');
// Segundo enlace (índice 1)
enlaces[1].setAttribute('href', 'http://www.google.com');`},{titulo:"3. Penúltimo hijo",descripcion:"Selecciona el penúltimo hijo de #mi-lista.",codigo:`const lista = document.getElementById('mi-lista');
const hijos = lista.children;
// Penúltimo es length - 2
const penultimo = hijos[hijos.length - 2];`},{titulo:"4. Desactivar clase",descripcion:"Elimina el atributo class del último P.",codigo:`const parrafos = document.getElementsByTagName('p');
const ultimoP = parrafos[parrafos.length - 1];
ultimoP.removeAttribute('class');`},{titulo:"5. Crear e Insertar H3",descripcion:"Crea un H3 y añádelo al final del body.",codigo:`const h3 = document.createElement('h3');
h3.textContent = 'Hola, soy un nuevo h3';
document.body.appendChild(h3);`}]},{titulo:"Ejercicios 6-15: Creación y Manipulación",contenido:"Ejercicios de nivel intermedio combinando creación y lógica.",codigos:[{titulo:"6. Añadir SPAN a H3",descripcion:"Al H3 anterior, añádele un SPAN dentro.",codigo:`const span = document.createElement('span');
span.textContent = ' soy nuevo';
h3.appendChild(span); 
// Ojo: si h3 ya está en el DOM, se actualiza visualmente`},{titulo:"7. Enlace en segundo P",descripcion:"Añade un enlace al segundo párrafo.",codigo:`const segundoP = document.getElementsByTagName('p')[1];
const link = document.createElement('a');
link.href = '...';
link.textContent = 'aquí';
segundoP.appendChild(link);`},{titulo:"8. Eliminar P con clase",descripcion:"Elimina los P dentro de .hero que tengan atributo class.",codigo:`const parrafosHero = document.querySelectorAll('.hero p');
for(let p of parrafosHero) {
  if (p.hasAttribute('class')) {
    p.remove();
  }
}`},{titulo:"9. Último hijo de body",descripcion:"Selecciona el último elemento hijo de body.",codigo:`const ultimo = document.body.lastElementChild;
console.log(ultimo); // Suele ser el script`},{titulo:"10. Hermano siguiente",descripcion:"Siguiente elemento hermano del primer P.",codigo:`const primerP = document.querySelector('p');
const siguiente = primerP.nextElementSibling;`},{titulo:"11. Borrar último de body",descripcion:"Elimina el último elemento del body.",codigo:"document.body.lastElementChild.remove();"},{titulo:"12. Cambiar SRC condicional",descripcion:"Cambia el SRC de imágenes que valgan 'cambiame'.",codigo:`const imgs = document.getElementsByTagName('img');
for(let img of imgs) {
  if(img.getAttribute('src') === 'cambiame') {
    img.setAttribute('src', 'cambiado');
  }
}`}]},{titulo:"Ejercicios 13-22: Avanzados",contenido:"Ejercicios con selectores avanzados, lógica y navegación.",codigos:[{titulo:"13. Añadir clase (sin borrar)",descripcion:"Añade una clase al primer P (sin usar setAttribute para no borrar las existentes).",codigo:`const p = document.querySelector('p');
p.classList.add('clase-ejemplo');`},{titulo:"14. Insertar condicional en lista",descripcion:"En ULs con exactamente 2 LIs, añade un tercero.",codigo:`const listas = document.getElementsByTagName('ul');
for(let ul of listas) {
  if (ul.children.length === 2) {
    const li = document.createElement('li');
    li.textContent = 'Tercer elemento';
    ul.appendChild(li);
  }
}`},{titulo:"15. Padre del primer P",descripcion:"Obtén el elemento padre del primer párrafo.",codigo:`const p = document.querySelector('p');
const padre = p.parentElement;`},{titulo:"16. Hermano anterior",descripcion:"Hermano elemento anterior del primer P.",codigo:`const p = document.querySelector('p');
const previo = p.previousElementSibling;`},{titulo:"17. Background rojo",descripcion:"Primer div con clase .container a rojo con style.",codigo:`const div = document.querySelector('div.container');
div.style.backgroundColor = 'red';`},{titulo:"18. Reemplazar contenido P",descripcion:"P con ID 'text', ponle un enlace dentro (reemplazando contenido).",codigo:`const p = document.getElementById('text');
p.innerHTML = '<a href="google.com">Google</a>';`},{titulo:"19. Divs Eustaquio",descripcion:"Selecciona todos los divs con clase 'eustaquio'.",codigo:"const divs = document.querySelectorAll('div.eustaquio');"},{titulo:"20. P con ID Paisa",descripcion:"Selecciona el párrafo con ID 'paisa'.",codigo:"const p = document.getElementById('paisa');"},{titulo:"21. Primer párrafo hijo de un Div",descripcion:"Selecciona el primer párrafo que sea hijo directo de un div.",codigo:"const p = document.querySelector('div > p');"},{titulo:"22. Penúltimo enlace",descripcion:"Selecciona el penúltimo enlace de la página.",codigo:`const enlaces = document.getElementsByTagName('a');
const penultimo = enlaces[enlaces.length - 2];`}]}]}]},C={titulo:"Gestión de Eventos y Asincronía",descripcion:"Domina la gestión de eventos en JavaScript, el Event Loop y la asincronía.",icono:"fa-bolt",clases:[{id:26,titulo:"Gestión de Eventos",descripcion:"Aprende qué son los eventos, cómo capturarlos y las diferentes formas de manejarlos en JavaScript.",temas:[{titulo:"¿Qué es un Evento?",contenido:"Los eventos son el 'idioma' en el que JavaScript entiende las acciones del usuario. Representan el mecanismo para establecer una comunicación bidireccional y en tiempo real entre la aplicación y los usuarios.",puntosClave:["**Asíncronos**: No bloquean la ejecución; se establece un 'guardián' que espera en segundo plano.","**Asociados al DOM**: Siempre ocurren sobre un elemento específico o el objeto `document`.","**Patrón Observador**: Preparamos código para que se dispare solo cuando el suceso ocurra.","**Seguridad**: Los navegadores restringen cada vez más qué eventos pueden dispararse sin interacción humana."]},{titulo:"Formas de capturar eventos",contenido:"Históricamente han existido varias formas de 'escuchar' sucesos, pero su evolución ha buscado separar la lógica del marcado.",codigos:[{titulo:"1. Atributos HTML (Obsoleto)",descripcion:"Mezcla lógica con estructura (como el CSS inline). Muy difícil de mantener si cambias nombres de funciones.",codigo:`<!-- Requiere una función definida globalmente -->
<button onclick="mostrarAlert()">Púlsame</button>
<button onclick="console.log('Directo')">Consola</button>`},{titulo:"2. Propiedades del DOM (Limitado)",descripcion:"Se asigna desde JS pero tiene el mismo problema de fondo: solo permite un manejador. `setAttribute` también entra en esta categoría.",codigo:`const btn = document.querySelector('button');
// Opción A: Propiedad directa
btn.onclick = () => console.log('Click A');
// Opción B: Atributo (JS -> HTML)
btn.setAttribute('onclick', 'mostrarAlert()');`},{titulo:"3. addEventListener (Estándar Profesional)",descripcion:"Es el método recomendado. Permite múltiples funciones para un mismo evento y mayor control.",codigo:`const btn = document.querySelector('button');

// Sintaxis: elemento.addEventListener(tipo, callback)
btn.addEventListener('click', () => {
  console.log('Escuchador 1');
});

// Permite pasar una función nombrada
function saludar() { console.log('Hola!'); }
btn.addEventListener('click', saludar);`}]},{titulo:"Remover Eventos y Funciones Anónimas",contenido:"Para usar `removeEventListener`, debemos pasar **la misma referencia** de función que usamos al añadirlo. Las funciones anónimas o flecha creadas inline no pueden borrarse.",puntosClave:["**Referencia Identica**: JS necesita saber exactamente qué 'vigilante' quitar.","**Funciones Anónimas**: `() => { ... }` crea una instancia nueva cada vez, por lo que nunca coinciden para el borrado."],codigo:`function manejarClick() {
  console.log('Se ejecuta una vez');
  btn.removeEventListener('click', manejarClick);
}

btn.addEventListener('click', manejarClick); // FUNCIONA

// ESTO NO FUNCIONARÍA PARA BORRAR:
btn.addEventListener('click', () => { ... });
btn.removeEventListener('click', () => { ... }); // Son funciones diferentes para JS`},{titulo:"El Objeto Event (La Instancia)",contenido:"Al dispararse un evento, JS crea un objeto (instancia de la clase `Event`) con metadatos y lo pasa como primer argumento al callback.",puntosClave:["**target**: El elemento real que disparó la acción (fundamental en delegación).","**type**: Nombre del evento ('click', 'keydown').","**timeStamp**: Milisegundos desde que se cargó la página.","**Coordenadas**: `clientX/Y` (viewport), `screenX/Y` (monitor).","**Teclas Especiales**: `ctrlKey`, `shiftKey`, `altKey` (booleanos).","**Botón Ratón**: `button` (0: Izquierdo, 1: Central, 2: Derecho)."],codigo:`// Aplicar un mismo listener a muchos elementos
const botones = document.querySelectorAll('button');

botones.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Usamos e.target para saber CUAL de todos los botones se pulsó
    console.log("Pulsaste el botón: ", e.target.textContent);
    console.log("Coordenadas click: ", e.clientX, e.clientY);
  });
});`}]},{id:27,titulo:"Tipos de Eventos Relevantes",descripcion:"Explora los eventos más comunes: Formularios, Ratón, Teclado, Multimedia y Carga del Documento.",temas:[{titulo:"Formularios y acceso al DOM",contenido:"Los formularios son la entrada principal de datos. JavaScript ofrece formas directas de acceder a ellos sin necesidad de selectores pesados.",puntosClave:["**document.forms**: Colección de todos los formularios de la página. Ej: `document.forms[0]`.","**elements**: Propiedad del formulario que devuelve una lista de todos sus controles (inputs, buttons, etc).","**Metodos**: `form.submit()` envía manualmente; `form.reset()` limpia todos los campos."],codigo:`const miForm = document.forms[0];
const emailInput = miForm.elements['email']; // Acceso por name o id

// Validar antes de enviar
miForm.addEventListener('submit', (e) => {
  if (!emailInput.value.includes('@')) {
    e.preventDefault(); // Detiene el envío
    alert('Correo inválido');
  }
});`},{titulo:"Propiedades de los Controles (Inputs)",contenido:"Cada elemento dentro de un formulario tiene propiedades que podemos leer o modificar por código. Estas propiedades devuelven valores que reflejan el estado actual del elemento.",puntosClave:["**value**: Contenido actual del campo (string).","**checked / defaultChecked**: Estado de checkbox o radio (booleano). `defaultChecked` indica si venía marcado por defecto.","**disabled / readOnly / hidden**: Estados de bloqueo del elemento (booleanos).","**required**: Si es obligatorio para el envío del formulario.","**accept**: Solo para `input[type=file]`, indica qué tipos de archivo se permiten.","**autocomplete**: Si el navegador puede autocompletar el campo.","**type / name**: Tipo de input y nombre para el envío del formulario.","**maxLength, min, max, step**: Restricciones de longitud o valores numéricos.","**pattern**: Expresión regular para validación HTML5.","**placeholder / size**: Texto de ayuda y tamaño visual del campo.","**selectionStart / selectionEnd**: Posición del texto seleccionado por el usuario dentro del input."]},{titulo:"Eventos Focus, Blur y Change",contenido:"Eventos fundamentales para gestionar la interacción con campos de formulario. Permiten saber cuándo el usuario entra, sale o modifica un campo.",puntosClave:["**focus**: Se dispara cuando el elemento recibe el foco (el usuario hace clic o tabula hacia él).","**blur**: Se dispara cuando el elemento pierde el foco (el usuario hace clic fuera).","**change**: Se dispara cuando el valor ha cambiado Y el elemento pierde el foco. No se dispara mientras escribes, solo al salir.","**input**: Alternativa a `change` que se dispara con cada pulsación de tecla."],codigo:`const input = document.getElementById('email');

input.addEventListener('focus', () => {
  console.log('El campo tiene el foco');
});

input.addEventListener('blur', () => {
  console.log('El campo ha perdido el foco');
});

input.addEventListener('change', () => {
  console.log('El valor ha cambiado a:', input.value);
});`},{titulo:"Eventos de Ratón (Avanzado)",contenido:"Interacciones precisas con el puntero.",puntosClave:["**mousedown / mouseup**: Diferencia entre el momento de pulsar y el de soltar.","**mouseenter / mouseleave**: Ideales para efectos visuales (no burbujean, más estables).","**mousemove**: Se dispara constantemente al mover el ratón (útil para trackers o juegos).","**contextmenu**: Click derecho. Se puede bloquear para crear menús personalizados con `e.preventDefault()`."]},{titulo:"Eventos de Teclado",contenido:"Control total sobre la entrada de texto. Tres tipos de eventos principales con diferencias sutiles pero importantes.",puntosClave:["**keydown**: Se dispara al pulsar una tecla (incluye teclas especiales como flechas, Escape, etc.).","**keypress**: Se dispara al pulsar una tecla que produce un carácter (DEPRECADO, usar keydown).","**keyup**: Se dispara al soltar una tecla.","**event.key**: Devuelve el valor del carácter ('a', 'Enter', 'ArrowUp').","**event.code**: Devuelve la posición física de la tecla ('KeyA', 'Enter', 'ArrowUp').","**event.location**: Indica si la tecla tiene posición (izquierda/derecha para Shift, Ctrl, Alt)."],codigo:`// Detectar teclas de dirección
document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case 'ArrowUp':    console.log('Arriba'); break;
    case 'ArrowDown':  console.log('Abajo'); break;
    case 'ArrowLeft':  console.log('Izquierda'); break;
    case 'ArrowRight': console.log('Derecha'); break;
  }
});`},{titulo:"Eventos Multimedia",contenido:"Elementos `<audio>` y `<video>` tienen eventos específicos para controlar la reproducción.",puntosClave:["**play / pause**: Se disparan al reproducir o pausar el contenido.","**ended**: Se dispara cuando el contenido termina de reproducirse.","**durationchange**: Se dispara cuando cambia la duración del elemento.","**timeupdate**: Se dispara constantemente mientras se reproduce (para barras de progreso).","**seeking / seeked**: Se disparan cuando el usuario mueve la barra de reproducción.","**volumechange**: Se dispara cuando cambia el volumen."]},{titulo:"Carga y Estado de la Ventana",contenido:"Eventos globales que rigen el ciclo de vida de la página.",puntosClave:["**DOMContentLoaded**: Se dispara cuando el HTML está listo. Permite tener los `<script>` en el `<head>` sin errores de 'elemento no encontrado'.","**load**: Espera a que carguen imágenes y recursos externos.","**resize**: Detecta cambios en el tamaño de la ventana.","**scroll**: Detecta el desplazamiento del usuario.","**Clipboard**: `copy`, `cut` y `paste` para controlar el portapapeles."],codigo:`// El estándar para inicializar scripts:
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

window.addEventListener('scroll', () => {
  console.log("Posición scroll:", window.scrollY);
});`},{titulo:"Ejercicios Prácticos: Dinamismo Total",contenido:"Aplica lo aprendido para manipular múltiples elementos a la vez y controlar el comportamiento nativo.",codigos:[{titulo:"Color Aleatorio al entrar/salir",descripcion:"Uso de comodín '*' para seleccionar todo el body y aplicar efectos dinámicos.",codigo:`const elementos = document.body.getElementsByTagName('*');

const generarColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return \`rgb(\${r}, \${g}, \${b})\`;
};

for (let el of elementos) {
  el.addEventListener('mouseenter', (e) => {
    e.target.style.backgroundColor = generarColor();
  });
  el.addEventListener('mouseleave', (e) => {
    e.target.style.backgroundColor = 'white';
  });
}`},{titulo:"Bloquear Menú Contextual",descripcion:"Evita que aparezca el menú del botón derecho en toda la página.",codigo:`document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log("Menú bloqueado por seguridad/diseño");
});`}]}]},{id:28,titulo:"Práctica de Selectores y DOM",descripcion:"Resolución de retos reales: navegación jerárquica, inserciones dinámicas y manipulación de atributos.",temas:[{titulo:"Navegación y Relaciones del DOM",contenido:"Aprender a moverse por el árbol (hacia arriba, abajo o lados) es vital cuando no tenemos IDs directos.",puntosClave:["**Subir en la jerarquía**: `parentElement.parentElement` para alcanzar abuelos (ej. de un span a su contenedor div).","**Bajar a elementos específicos**: `firstElementChild` y `lastElementChild` (ignoran nodos de texto/espacios).","**Iteración Condicional**: Filtrar elementos por su número de hijos (`children.length`) antes de operar.","**Hermanos**: `nextElementSibling` y `previousElementSibling` para navegar lateralmente.","**children vs childNodes**: `children` solo devuelve elementos, `childNodes` incluye nodos de texto."],codigo:`// Seleccionar el antepenúltimo párrafo de cada DIV
const divs = document.querySelectorAll('div');
divs.forEach(div => {
  const párrafos = div.querySelectorAll('p');
  if (párrafos.length >= 3) {
    const antepenultimo = párrafos[párrafos.length - 3];
    antepenultimo.classList.toggle('highlight');
  }
});

// Seleccionar el padre del primer LI
const primerLi = document.getElementsByTagName('li')[0];
const padre = primerLi.parentElement; // Devuelve el UL/OL`},{titulo:"Inserción y Reposicionamiento",contenido:"Métodos para colocar elementos exactamente donde los necesitamos.",puntosClave:["**insertBefore(nuevo, referencia)**: Inserta antes del nodo de referencia. Si el nodo ya existía, lo MUEVE.","**Insertar al inicio**: `padre.insertBefore(nuevo, padre.firstElementChild)`.","**Insertar en medio**: Seleccionar el hijo intermedio como referencia.","**prepend / append**: Métodos modernos para insertar al principio o final.","**Mover elementos**: Si usas `appendChild` o `insertBefore` con un nodo existente, se MUEVE, no se duplica."],codigo:`// Insertar entre los dos únicos elementos de una lista
const listas = document.querySelectorAll('ol');
listas.forEach(lista => {
  if (lista.children.length === 2) {
    const nuevo = document.createElement('li');
    nuevo.textContent = "Intermedio";
    // Se inserta antes del segundo (que es el lastElementChild)
    lista.insertBefore(nuevo, lista.lastElementChild);
  }
});

// Añadir elemento como primer hijo
const nuevoP = document.createElement('p');
nuevoP.textContent = "Soy el primero";
contenedor.insertBefore(nuevoP, contenedor.firstElementChild);
// O con prepend: contenedor.prepend(nuevoP);`},{titulo:"Atributos y Texto",contenido:"Manipulación fina de la metadata de los elementos y creación de nuevos tipos de nodos.",puntosClave:["**document.createTextNode**: Crea un nodo de texto puro, ideal para añadir puntuación o texto sin etiquetas.","**dataset**: Forma preferida para manejar atributos `data-*` (ej: `el.dataset.iva = 0`).","**Iterar Atributos**: `elemento.attributes` permite recorrer todos los atributos de un nodo (name y value).","**hasAttribute / removeAttribute**: Para verificar existencia y eliminar atributos.","**getAttribute / setAttribute**: Para leer/escribir atributos de forma programática."],codigo:`// Añadir un punto final a cada párrafo
const ps = document.querySelectorAll('p');
ps.forEach(p => {
  const punto = document.createTextNode('.');
  p.appendChild(punto);
});

// Manipulación compleja de clases y dataset
const ofertas = document.querySelectorAll('section.products article.oferta');
ofertas.forEach(art => art.dataset.iva = "0");

// Iterar por todos los atributos de un elemento
const span = document.getElementById('miSpan');
for (let attr of span.attributes) {
  console.log(\`\${attr.name}: \${attr.value}\`);
}

// Comprobar y añadir clase si tiene un atributo
const divs = document.getElementsByTagName('div');
for (let div of divs) {
  if (div.hasAttribute('class')) {
    div.classList.add('container');
  }
}`},{titulo:"Sustitución de Elementos",contenido:"Patrón para transformar un elemento en otro manteniendo su contenido.",codigo:`// Convertir el texto de un LI en un enlace
const li = document.querySelector('li');
const link = document.createElement('a');
link.href = "#";
link.textContent = li.textContent;
li.textContent = ""; // Limpia el LI
li.appendChild(link); // Añade el enlace dentro`},{titulo:"Estilos Inline con JavaScript",contenido:"Modificar estilos CSS directamente desde JavaScript usando la propiedad `style`.",puntosClave:["**Sintaxis camelCase**: Las propiedades CSS con guión se escriben en camelCase (font-size → fontSize).","**Valores como strings**: Siempre debemos pasar el valor como string, incluyendo la unidad ('40px').","**Prioridad**: Los estilos inline tienen alta especificidad, sobrescriben clases."],codigo:`// Modificar estilos de un H1
const h1 = document.querySelector('h1');
h1.style.fontSize = '40px';
h1.style.color = 'orange';
h1.style.textAlign = 'right';

// Obtener estilos computados (incluyendo los de CSS)
const estilosComputados = window.getComputedStyle(h1);
console.log(estilosComputados.fontSize);`},{titulo:"Selectores CSS Avanzados desde JS",contenido:"querySelector y querySelectorAll aceptan cualquier selector CSS válido, permitiendo búsquedas muy específicas.",puntosClave:["**Selectores de atributo**: `[data-iva='0']`, `[href^='https']`.","**Combinadores**: `section.products article.oferta` (descendiente), `ul > li` (hijo directo).","**Pseudoclases**: `:first-child`, `:last-child`, `:nth-child(n)`.","**Encadenar búsquedas**: Primero seleccionar un contenedor, luego buscar dentro de él."],codigo:`// Selectores complejos
const spans = document.querySelectorAll('div.padre p span');

// Buscar dentro de un elemento específico
const form = document.forms[0];
const emailInput = form.querySelector('input[type="email"]');

// Selectores de atributo
const articulos = document.querySelectorAll('article[data-iva="0"]');

// Último hijo de cada UL
const ultimosLi = document.querySelectorAll('ul > li:last-child');`}]},{id:29,titulo:"Propagación y Eventos Personalizados",descripcion:"Entiende el flujo de eventos (Bubbling vs Capturing), la delegación y cómo crear tus propios eventos.",temas:[{titulo:"Flujo de Eventos: Fases",contenido:"Cuando ocurre un evento, este viaja por el DOM en tres fases. Entender esto evita que los eventos se disparen en lugares no deseados.",puntosClave:["**Fase de Captura (Capturing)**: El evento baja desde `window` hasta el elemento objetivo. Se activa con `{ capture: true }`.","**Fase de Objetivo (Target)**: El evento llega al elemento que lo originó.","**Fase de Burbujeo (Bubbling)**: El evento sube desde el elemento hacia arriba. Es el comportamiento por defecto."],codigo:`// Ejemplo de Bubbling vs Capturing
const hijo = document.querySelector('.hijo');
const padre = document.querySelector('.padre');

hijo.addEventListener('click', () => console.log('1. Hijo (Burbujeo)'));
padre.addEventListener('click', () => console.log('2. Padre (Burbujeo)'));

// Si activamos captura en el padre:
padre.addEventListener('click', () => console.log('0. Padre (Captura)'), true);`},{titulo:"Control de la Propagación",contenido:"Podemos detener el viaje del evento o anular comportamientos nativos del navegador.",puntosClave:["**stopPropagation()**: Detiene el burbujeo. Los padres no se enterarán del evento.","**preventDefault()**: Detiene la acción por defecto (navegar un link, enviar form, abrir menú contextual).","**Casos de uso**: Evitar scroll al pulsar Espacio, bloquear el click derecho, o validar inputs antes de enviar."],codigo:`// Evitar que la tecla Espacio haga scroll
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault();
    console.log("Scroll bloqueado");
  }
});

// Detener propagación en un botón interno
btn.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log("Solo se ejecuta aquí, no en los padres");
});`},{titulo:"Target vs CurrentTarget",contenido:"Propiedades clave para identificar quién disparó el evento y quién lo está manejando.",puntosClave:["**event.target**: El elemento exacto que recibió el click (el más profundo).","**event.currentTarget**: El elemento que tiene el `addEventListener` (el dueño del listener)."],codigo:`// Delegación de eventos (Eficiencia)
document.querySelector('ul').addEventListener('click', (e) => {
  console.log("¿Quién recibió el click?", e.target);
  console.log("¿Quién maneja el evento?", e.currentTarget); // Siempre será el UL
});`},{titulo:"Eventos Personalizados y Emisión Programática",contenido:"Podemos crear nuestros propios eventos para desacoplar partes de la aplicación o simular acciones del usuario.",puntosClave:["**CustomEvent**: Permite pasar datos extra en la propiedad `detail`.","**dispatchEvent**: Método para lanzar el evento manualmente.","**Simulación**: Podemos lanzar un `new Event('click')` sobre un botón por código.","**bubbles**: Si `true`, el evento burbujea hacia arriba en el DOM.","**cancelable**: Si `true`, se puede cancelar con `preventDefault()`.","**composed**: Si `true`, el evento atraviesa el Shadow DOM."],codigo:`// 1. Definir y disparar evento custom
const eventRegistro = new CustomEvent('usuarioRegistrado', {
  detail: { nombre: 'Alvaro', id: 26 },
  bubbles: true,
  cancelable: true
});

document.dispatchEvent(eventRegistro);

// 2. Escuchar el evento
document.addEventListener('usuarioRegistrado', (e) => {
  console.log("Nuevo usuario:", e.detail.nombre);
});

// 3. Simular click programáticamente
const btn = document.querySelector('button');
const clickSimulado = new Event('click');
btn.dispatchEvent(clickSimulado);`},{titulo:"Opciones Avanzadas de addEventListener",contenido:"El tercer parámetro de `addEventListener` puede ser un booleano (capture) o un objeto con múltiples opciones.",puntosClave:["**capture**: `true` para escuchar en fase de captura, `false` (defecto) para burbujeo.","**once**: `true` para que el listener se ejecute solo una vez y se elimine automáticamente.","**passive**: `true` indica que nunca llamarás a `preventDefault()`. Mejora el rendimiento en eventos como scroll.","**signal**: Permite cancelar el listener usando un `AbortController`."],codigo:`// Listener que solo se ejecuta una vez
btn.addEventListener('click', () => {
  console.log('Solo una vez');
}, { once: true });

// Escuchar en fase de captura
padre.addEventListener('click', callback, { capture: true });

// Scroll optimizado (passive)
window.addEventListener('scroll', handleScroll, { passive: true });

// Cancelar listener con AbortController
const controller = new AbortController();
btn.addEventListener('click', callback, { signal: controller.signal });
// Para cancelar: controller.abort();`}]},{id:30,titulo:"Resolución de Ejercicios I",descripcion:"Soluciones prácticas a retos de interacción: Teclado, Ratón y Gestión Dinámica del DOM.",temas:[{titulo:"Reto 1: Galería Numérica (Teclado)",contenido:"Uso de `keydown` para cambiar imágenes según el dígito pulsado. Se utiliza un array de URLs y se actualiza el atributo `src`.",codigo:`const imgs = ["url0.jpg", "url1.jpg", ...];
const visor = document.querySelector('#visor');

document.addEventListener('keydown', (e) => {
  const n = parseInt(e.key);
  if (n >= 0 && n <= 9) {
    visor.src = imgs[n];
  } else {
    visor.src = "placeholder.jpg";
    console.log("No es un número válido");
  }
});`},{titulo:"Reto 2: Caja Movible (Cursores)",contenido:"Uso de `switch` para gestionar las flechas de dirección y modificar el posicionamiento relativo/absoluto.",codigo:`const box = document.getElementById('box');
let topPos = 0, leftPos = 0;

document.addEventListener('keydown', (e) => {
  switch(e.key) {
    case "ArrowUp":    topPos -= 10; break;
    case "ArrowDown":  topPos += 10; break;
    case "ArrowLeft":  leftPos -= 10; break;
    case "ArrowRight": leftPos += 10; break;
  }
  box.style.top = topPos + 'px';
  box.style.left = leftPos + 'px';
});`},{titulo:"Reto 3: Lista Inteligente (Sort/Delete/Add)",contenido:"Gestión completa de una lista: añadir mediante `prompt`, borrar con botones dinámicos y ordenar alfabéticamente.",puntosClave:["**Borrados**: Acceder al padre con `e.target.parentNode.remove()`.","**Ordenación**: Extraer contenido con `element.textContent`, aplicar `array.sort()` y reconstruir el DOM.","**Persistencia**: Al re-renderizar la lista tras ordenar, es vital volver a asignar los listeners a los nuevos botones."],codigo:`// Lógica para borrar un elemento
btnBorrar.onclick = (e) => e.target.parentElement.remove();

// Lógica para ordenar
function ordenar() {
  const items = Array.from(lista.children).map(li => li.childNodes[0].textContent);
  items.sort();
  lista.innerHTML = "";
  items.forEach(txt => crearNuevoLi(txt));
}

// Lógica para añadir nuevo elemento
btnNuevo.addEventListener('click', () => {
  const texto = prompt('Introduce el nombre del elemento:');
  if (texto) {
    crearNuevoLi(texto);
  }
});

// Función reutilizable para crear un LI con botón de borrar
function crearNuevoLi(texto) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(texto));
  
  const btnBorrar = document.createElement('button');
  btnBorrar.textContent = 'X';
  btnBorrar.onclick = (e) => e.target.parentElement.remove();
  li.appendChild(btnBorrar);
  
  lista.appendChild(li);
}`},{titulo:"Reto 4: Párrafo Dinámico y Caja Loca",contenido:"Captura de teclas global para 'escribir' en un elemento y el uso de `Math.random` para mover cajas.",codigo:`// 1. Escritura en párrafo
document.addEventListener('keydown', (e) => {
  const p = document.getElementById('historial');
  const nuevoNodo = document.createTextNode(e.key);
  p.prepend(nuevoNodo);
});

// 2. Caja que huye (Mouseover)
box.addEventListener('mouseover', () => {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  box.style.left = \`\${x}px\`;
  box.style.top = \`\${y}px\`;
});`}]},{id:31,titulo:"Resolución de Ejercicios II",descripcion:"Retos de lógica y persistencia: Manipulación de texto masiva y juegos de velocidad.",temas:[{titulo:"Reto 5: Eliminador de Vocales",contenido:"Uso de `dataset` para identificar qué letra borrar y `replaceAll` para limpiar todo el texto de un párrafo.",puntosClave:["**dataset**: Atributos `data-letter` en HTML extraídos con `e.target.dataset.letter`.","**replaceAll**: A diferencia de `replace`, este método de String limpia todas las ocurrencias sin necesidad de Regex.","**Feedback de Usuario**: Deshabilitar el botón pulsado con `e.target.disabled = true`."],codigo:`const p = document.querySelector('#texto');
const botones = document.querySelectorAll('.vocal-btn');

botones.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const letra = e.target.dataset.letter;
    p.textContent = p.textContent.replaceAll(letra, '');
    e.target.disabled = true; // El botón queda inactivo
  });
});`},{titulo:"Reto 6: Carrera de Teclas (A vs Ñ)",contenido:"Juego de competición que pone a prueba la velocidad de pulsación y el control del estado del juego.",puntosClave:["**Medición Real**: Uso de `offsetWidth` para obtener el ancho actual incluyendo bordes.",'**Selección Dinámica**: Uso de selectores de atributo como `[data-key="${e.key}"]` para encontrar la caja asociada.',"**Finalización del Juego**: Es IMPRESCINDIBLE usar una función nombrada para poder hacer `removeEventListener` y detener el juego."],codigo:`const handleKey = (e) => {
  const box = document.querySelector(\`[data-key="\${e.key}"]\`);
  if (!box) return;

  const currentWidth = box.offsetWidth;
  const newWidth = currentWidth + 5;
  box.style.width = \`\${newWidth}px\`;

  if (newWidth >= 500) {
    document.body.removeEventListener('keydown', handleKey);
    alert("¡Ganó " + (box.classList.contains('green') ? "Verde" : "Rojo") + "!");
  }
};

document.body.addEventListener('keydown', handleKey);`}]},{id:32,titulo:"Resolución de Ejercicios III",descripcion:"Desarrollo de un Juego de Memoria (Parejas) paso a paso: Grid dinámico, algoritmos de barajado y cronómetro.",temas:[{titulo:"Arquitectura del Juego",contenido:"Planteamiento de un reto complejo que une generación dinámica de elementos, CSS Grid y lógica de estados.",puntosClave:["**Cuadrícula Dinámica**: Bucle anidado (filas x columnas) para crear 30 cajas (`div`) inyectadas al DOM.","**Generación de Colores**: Crear 15 colores RGB aleatorios (0-255) y duplicarlos en un array de 30.","**Algoritmo Shuffle**: Es crucial barajar el array de colores para que las parejas no estén juntas. (Ej: algoritmo de Fisher-Yates).","**Asignación**: Usar `randomColors.shift()` para extraer un color del array barajado y asignarlo a cada caja."],codigo:`// Generar 15 colores y duplicarlos
const colores = [];
for (let i = 0; i < 15; i++) {
  const c = \`rgb(\${r()},\${g()},\${b()})\`;
  colores.push(c, c); // Metemos el mismo color dos veces
}
shuffle(colores); // Barajamos`},{titulo:"Lógica de Estado y Emparejamiento",contenido:"Cómo gestionar qué cartas están abiertas y qué sucede cuando no coinciden.",puntosClave:["**Estados por Dataset**: `data-open` (abierta momentáneamente) y `data-matched` (ya resuelta).","**Comparación de Pares**: Al abrir la segunda carta, comparar sus `dataset.color`.","**Uso de setTimeout**: Si no coinciden, esperar (ej: 500ms) para que el usuario memorice antes de volver a ocultarlas.","**Cuentas Finales**: Cuando el número de cartas 'matched' sea igual al total, detener el cronómetro."],codigo:`// Lógica del click
if (cartasAbiertas.length === 2) {
  const [c1, c2] = cartasAbiertas;
  if (c1.dataset.color === c2.dataset.color) {
    c1.dataset.matched = "true";
    c2.dataset.matched = "true";
  } else {
    setTimeout(() => {
      ocultar(c1, c2);
    }, 600);
  }
}`},{titulo:"Algoritmo Shuffle y Cronómetro",contenido:"Funciones de utilidad esenciales para el juego: barajar arrays y medir el tiempo de resolución.",puntosClave:["**Fisher-Yates Shuffle**: Algoritmo eficiente para barajar arrays de forma aleatoria.","**setInterval**: Para actualizar el cronómetro cada segundo o milisegundo.","**Detección de Victoria**: Contar elementos con `data-matched='true'` y comparar con el total.","**Reutilización**: Estas funciones se pueden reutilizar en múltiples proyectos."],codigo:`// Algoritmo Fisher-Yates para barajar
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Cronómetro básico
let segundos = 0;
let intervalo;

function iniciarCronometro() {
  intervalo = setInterval(() => {
    segundos++;
    document.getElementById('timer').textContent = segundos + 's';
  }, 1000);
}

function pararCronometro() {
  clearInterval(intervalo);
}

// Detectar victoria
function checkVictoria() {
  const matched = document.querySelectorAll('[data-matched="true"]');
  if (matched.length === totalCartas) {
    pararCronometro();
    alert('¡Ganaste en ' + segundos + ' segundos!');
  }
}`}]}]},x={titulo:"Almacenamiento y Proyectos con Vite",descripcion:"Domina el almacenamiento en el navegador (Cookies, LocalStorage, SessionStorage) y crea proyectos profesionales con Vite.",icono:"fa-database",clases:[{id:33,titulo:"LocalStorage, SessionStorage y Cookies",descripcion:"Aprende las tres formas de almacenar datos en el navegador: Cookies, LocalStorage y SessionStorage.",temas:[{titulo:"Introducción al Almacenamiento en el Navegador",contenido:"JavaScript permite almacenar datos directamente en el navegador para dar persistencia a las aplicaciones web. Existen tres mecanismos principales, cada uno con sus propias características y casos de uso.",puntosClave:["**Cookies**: Datos que se envían al servidor en cada petición HTTP.","**LocalStorage**: Almacenamiento persistente que sobrevive al cierre del navegador.","**SessionStorage**: Almacenamiento temporal que solo dura mientras la pestaña está abierta.","**Beneficios**: Menos consultas al backend, respuestas más rápidas, experiencia de usuario mejorada."]},{titulo:"Cookies: Fundamentos",contenido:"Las cookies son pequeñas cadenas de datos que se almacenan en el navegador y se envían automáticamente al servidor en cada petición HTTP. Son fundamentales para la autenticación y el tracking.",puntosClave:["**Protocolo HTTP**: Forman parte del estándar HTTP y viajan en las cabeceras de cada petición.","**Set-Cookie**: El servidor establece cookies mediante esta cabecera de respuesta.","**Autenticación**: El caso de uso más común es guardar tokens de sesión para mantener al usuario logueado.","**Pares clave-valor**: Se almacenan como strings con formato `clave=valor` separados por punto y coma."],codigo:`// Acceder a todas las cookies del documento
console.log(document.cookie); // "pixelRatio=2.5; user=john"

// Establecer una nueva cookie (NO sobreescribe las existentes)
document.cookie = "usuario=alvaro";

// Las cookies se acumulan, no se reemplazan
console.log(document.cookie); // "pixelRatio=2.5; user=john; usuario=alvaro"`},{titulo:"Cookies: Configuración y Expiración",contenido:"Las cookies tienen varios parámetros de configuración que controlan su comportamiento, accesibilidad y tiempo de vida.",puntosClave:["**path**: Ruta desde la que es accesible la cookie. Usar `/` para todo el dominio.","**domain**: Dominio para el que es válida la cookie.","**expires**: Fecha exacta de expiración (objeto Date).","**max-age**: Segundos hasta la expiración (más práctico que expires).","**Límites**: Máximo 4KB por cookie y ~20 cookies por dominio."],codigos:[{titulo:"Expiración con expires (fecha)",descripcion:"Establecer una fecha concreta de caducidad usando el objeto Date.",codigo:`// Cookie que expira mañana
let date = new Date();
date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // +24 horas en ms

document.cookie = \`user=john; expires=\${date.toUTCString()}\`;`},{titulo:"Expiración con max-age (segundos)",descripcion:"Forma más práctica: indicar los segundos de vida de la cookie.",codigo:`// Cookie que expira en 1 hora (3600 segundos)
document.cookie = "user=john; max-age=3600";

// Cookie que expira en 24 horas
document.cookie = "session=abc123; max-age=86400"; // 24 * 60 * 60

// Eliminar una cookie (max-age negativo)
document.cookie = "user=john; max-age=-1";`}]},{titulo:"Cookies: Funciones de Utilidad",contenido:"Dado que las cookies se almacenan como un string único, necesitamos funciones auxiliares para trabajar con ellas de forma cómoda.",codigos:[{titulo:"Obtener una cookie por nombre",descripcion:"Función que busca y devuelve el valor de una cookie específica.",codigo:`function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[]\\/+^])/g, '\\$1') + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Uso
const usuario = getCookie('user'); // "john"`},{titulo:"Establecer una cookie con opciones",descripcion:"Función completa para crear cookies con todas las opciones disponibles.",codigo:`function setCookie(name, value, options = {}) {
  options = {
    path: '/',
    ...options
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let key in options) {
    cookie += "; " + key + "=" + options[key];
  }

  document.cookie = cookie;
}

// Uso: Cookie que expira en 1 hora
setCookie('nombre', 'bienvenido', { 'max-age': 3600 });`},{titulo:"Eliminar una cookie",descripcion:"Simplemente establecer max-age a un valor negativo.",codigo:`function deleteCookie(name) {
  setCookie(name, "", { 'max-age': -1 });
}

// Uso
deleteCookie('user');`}]},{titulo:"Ver Cookies en DevTools",contenido:"El navegador ofrece una interfaz visual para inspeccionar las cookies almacenadas para cada dominio.",puntosClave:["**Acceso**: Abrir DevTools → Application → Cookies.","**Información visible**: Nombre, valor, dominio, path, fecha de expiración.","**Acciones**: Puedes editar o eliminar cookies manualmente desde esta interfaz.","**Por dominio**: Cada dominio tiene su propio conjunto de cookies aislado."]},{titulo:"LocalStorage y SessionStorage: Introducción",contenido:"Los objetos de almacenamiento web son una alternativa moderna a las cookies. Permiten guardar pares clave-valor directamente en el navegador sin enviarlos al servidor.",puntosClave:["**localStorage**: Persistente. Sobrevive al cierre del navegador.","**sessionStorage**: Temporal. Se borra al cerrar la pestaña/navegador.","**Capacidad**: Hasta 5MB por origen (mucho más que las 4KB de cookies).","**Sin envío**: A diferencia de las cookies, NO se envían al servidor.","**Vinculado al origen**: Aislado por dominio + puerto + protocolo."]},{titulo:"API de Storage: Métodos Principales",contenido:"Tanto localStorage como sessionStorage comparten la misma API, muy intuitiva y fácil de usar.",puntosClave:["**setItem(clave, valor)**: Guarda un par clave-valor.","**getItem(clave)**: Obtiene el valor de una clave.","**removeItem(clave)**: Elimina una clave específica.","**clear()**: Elimina TODOS los datos almacenados.","**key(indice)**: Obtiene la clave en una posición dada.","**length**: Número de elementos almacenados."],codigo:`// Guardar datos
localStorage.setItem('usuario', 'alvaro');
localStorage.setItem('tema', 'oscuro');

// Obtener datos
const user = localStorage.getItem('usuario'); // "alvaro"

// Comprobar cantidad de items
console.log(localStorage.length); // 2

// Obtener clave por índice
console.log(localStorage.key(0)); // "usuario"

// Eliminar un item específico
localStorage.removeItem('tema');

// Eliminar TODO
localStorage.clear();`},{titulo:"Guardar Objetos y Arrays (JSON)",contenido:"localStorage y sessionStorage solo pueden almacenar strings. Para guardar estructuras complejas, usamos JSON.stringify() y JSON.parse().",puntosClave:["**JSON.stringify(objeto)**: Convierte un objeto/array a string JSON.","**JSON.parse(string)**: Convierte un string JSON a objeto/array.","**Flujo completo**: Objeto → stringify → setItem / getItem → parse → Objeto"],codigo:`// Guardar un OBJETO
const usuario = { nombre: 'Álvaro', edad: 25, premium: true };
localStorage.setItem('datos', JSON.stringify(usuario));

// Recuperar y convertir a objeto
const datosString = localStorage.getItem('datos');
const datosObjeto = JSON.parse(datosString);
console.log(datosObjeto.nombre); // "Álvaro"

// Guardar un ARRAY
const tareas = ['Estudiar JS', 'Hacer ejercicio', 'Leer'];
localStorage.setItem('misTareas', JSON.stringify(tareas));

// Recuperar array
const tareasRecuperadas = JSON.parse(localStorage.getItem('misTareas'));
console.log(tareasRecuperadas[0]); // "Estudiar JS"`},{titulo:"Ver Storage en DevTools",contenido:"Al igual que las cookies, podemos inspeccionar LocalStorage y SessionStorage desde las herramientas de desarrollo.",puntosClave:["**Acceso**: DevTools → Application → Local Storage / Session Storage.","**Compartido entre pestañas**: LocalStorage es accesible desde cualquier pestaña del mismo origen.","**SessionStorage aislado**: Cada pestaña tiene su propio SessionStorage independiente.","**Evento storage**: Se dispara cuando se modifican los datos (útil para sincronizar pestañas)."]},{titulo:"Comparativa: Cookies vs Storage",contenido:"Cada mecanismo tiene sus propios casos de uso ideales.",puntosClave:["**Cookies**: Para autenticación y datos que el servidor necesita en cada petición.","**LocalStorage**: Para preferencias de usuario, caché de datos, estado de la app.","**SessionStorage**: Para datos temporales de una sesión específica (formularios, wizards).","**Seguridad**: Las cookies pueden configurarse como HttpOnly (inaccesibles desde JS) y Secure (solo HTTPS)."]},{titulo:"Ejercicio Práctico: Aviso de Cookies",contenido:"Implementar un banner de cookies funcional que cargue scripts de analítica solo cuando el usuario acepta.",puntosClave:["**Aceptar**: Cargar script de analítica y guardar cookie de 1 mes.","**Rechazar**: No cargar script y guardar cookie de 24 horas (para no volver a preguntar).","**Verificación**: Al cargar la página, comprobar si ya existe la cookie antes de mostrar el banner."],codigo:`// Pseudocódigo del flujo
function mostrarBannerCookies() {
  const cookieAceptada = getCookie('cookies_aceptadas');
  
  if (cookieAceptada === 'true') {
    cargarAnalytics();
    return;
  }
  
  if (cookieAceptada === 'false') {
    // No mostrar banner ni cargar analytics
    return;
  }
  
  // Mostrar banner...
  btnAceptar.onclick = () => {
    setCookie('cookies_aceptadas', 'true', { 'max-age': 30 * 24 * 60 * 60 }); // 1 mes
    cargarAnalytics();
    ocultarBanner();
  };
  
  btnRechazar.onclick = () => {
    setCookie('cookies_aceptadas', 'false', { 'max-age': 24 * 60 * 60 }); // 24h
    ocultarBanner();
  };
}`}]},{id:34,titulo:"Primer Proyecto con Vite",descripcion:"Aprende a estructurar un proyecto real con Vite, clases ES6, módulos y programación orientada a objetos.",temas:[{titulo:"Configuración Inicial con Vite",contenido:"Vite es un bundler moderno que permite crear proyectos estructurados con hot reload instantáneo y soporte nativo para ES Modules.",puntosClave:["**npm create vite@latest**: Comando para iniciar un nuevo proyecto.","**Vanilla JS**: Seleccionar JavaScript sin frameworks para proyectos puros.","**Estructura limpia**: Vite crea una estructura base que nosotros personalizaremos.","**npm run dev**: Arranca el servidor de desarrollo con HMR (Hot Module Replacement)."],codigo:`# Crear proyecto con Vite
npm create vite@latest nombre-proyecto

# Seleccionar: Vanilla -> JavaScript

# Instalar dependencias
cd nombre-proyecto
npm install

# Iniciar servidor de desarrollo
npm run dev`},{titulo:"Estructura del Proyecto",contenido:"Organizamos el código en carpetas lógicas para mantener el proyecto escalable y mantenible.",puntosClave:["**src/**: Carpeta principal del código fuente.","**src/js/**: Scripts de JavaScript.","**src/sass/**: Estilos con preprocesador SASS.","**src/js/class/**: Clases del proyecto (Game, Box, Timer...).","**src/js/utils/**: Funciones de utilidad reutilizables."],codigo:`proyecto/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── js/
    │   ├── main.js          # Punto de entrada
    │   ├── class/           # Clases
    │   │   ├── Game.js
    │   │   └── Box.js
    │   └── utils/           # Utilidades
    │       └── utils.js
    └── sass/
        ├── main.scss
        └── components/
            └── _game.scss`},{titulo:"Añadir Soporte SASS",contenido:"Vite soporta SASS de forma nativa, solo necesitamos instalar el preprocesador como dependencia.",codigo:`# Instalar SASS como dependencia
npm install sass --save-dev

# En main.js, importar estilos SASS
import './sass/main.scss';

# Vite compilará automáticamente SASS a CSS`},{titulo:"Modelado con Clases: Game",contenido:"La clase Game encapsula toda la lógica del juego: tablero, cajas, eventos y estado.",puntosClave:["**Constructor**: Recibe filas, columnas e ID del elemento contenedor.","**Propiedades privadas (#)**: Para encapsular datos internos.","**Métodos**: createRandomColors(), createBoxes(), paintBoxes().","**export default**: Exportar la clase para usarla en otros módulos."],codigo:`// src/js/class/Game.js
import Box from './Box.js';
import { shuffleArray } from '../utils/utils.js';

export default class Game {
  #rows;
  #cols;
  #boxes = [];
  element;

  constructor(rows, cols, idElement = 'game') {
    this.#rows = rows;
    this.#cols = cols;
    this.element = document.getElementById(idElement);
    
    this.createBoxes();
    this.paintBoxes();
  }

  get rows() { return this.#rows; }
  get cols() { return this.#cols; }

  createRandomColors() {
    const colors = [];
    for (let i = 0; i < (this.#rows * this.#cols) / 2; i++) {
      const color = \`rgb(\${Math.random()*255|0}, \${Math.random()*255|0}, \${Math.random()*255|0})\`;
      colors.push(color, color); // Par de colores iguales
    }
    return shuffleArray(colors);
  }

  createBoxes() {
    const randomColors = this.createRandomColors();
    for (let r = 0; r < this.#rows; r++) {
      for (let c = 0; c < this.#cols; c++) {
        const color = randomColors.shift();
        const newBox = new Box(r, c, color);
        this.#boxes.push(newBox);
      }
    }
  }
}`},{titulo:"Modelado con Clases: Box",contenido:"La clase Box representa cada casilla del juego con su estado y comportamiento.",codigo:`// src/js/class/Box.js
export default class Box {
  #col;
  #row;
  #color;
  #free = true;
  #open = false;
  #element;

  constructor(row, col, color, free = true, open = false) {
    this.#row = row;
    this.#col = col;
    this.#color = color;
    this.#free = free;
    this.#open = open;
  }

  // Getters para acceder a propiedades privadas
  get col() { return this.#col; }
  get row() { return this.#row; }
  get color() { return this.#color; }
  get free() { return this.#free; }
  get open() { return this.#open; }

  // Setters para modificar el estado
  set element(el) { this.#element = el; }
  set free(value) { this.#free = value; }
  set open(value) { this.#open = value; }

  // Añadir evento click a la casilla
  addEventClick() {
    if (this.#element) {
      this.#element.addEventListener('click', () => {
        if (!this.#open) {
          this.#element.style.backgroundColor = this.#color;
          this.#open = true;
        }
      });
    }
  }
}`},{titulo:"Funciones Estáticas",contenido:"Los métodos estáticos se pueden llamar sin instanciar la clase. Útiles para funciones auxiliares.",puntosClave:["**static**: Palabra clave para definir métodos estáticos.","**Clase.metodo()**: Se llama directamente sobre la clase, no sobre instancias.","**Ejemplo real**: Math.random() es un método estático de la clase Math."],codigo:`// Método estático para pedir filas y columnas
static getRowsCols() {
  let rows = parseInt(prompt('Número de filas:'));
  let cols = parseInt(prompt('Número de columnas:'));
  
  // Validar que el total sea par (para parejas)
  while ((rows * cols) % 2 !== 0) {
    alert('El número de cartas debe ser par');
    rows = parseInt(prompt('Número de filas:'));
    cols = parseInt(prompt('Número de columnas:'));
  }
  
  return { rows, cols };
}

// Uso (sin instanciar)
const data = Game.getRowsCols();
const game = new Game(data.rows, data.cols);`},{titulo:"CSS Dinámico con JavaScript",contenido:"Podemos modificar las propiedades CSS del grid dinámicamente según los datos del usuario.",codigo:`// Establecer grid-template dinámicamente
setCSSBoxTemplate() {
  const boxContainer = document.getElementById('box-container');
  
  // Grid de N columnas
  boxContainer.style.gridTemplateColumns = \`repeat(\${this.#cols}, 1fr)\`;
  // Grid de M filas
  boxContainer.style.gridTemplateRows = \`repeat(\${this.#rows}, 1fr)\`;
}

// Resultado: grid adaptado a las filas/columnas elegidas`}]},{id:35,titulo:"Finalizando el Proyecto con Vite",descripcion:"Completa el juego de parejas con detección de coincidencias, propagación de eventos y persistencia en LocalStorage.",temas:[{titulo:"Validación de Entrada",contenido:"Antes de crear el juego, validamos que el número total de casillas sea par para poder formar parejas.",codigo:`static getRowsCols() {
  let rows = parseInt(prompt('Número de filas:'));
  let cols = parseInt(prompt('Número de columnas:'));
  
  // Bucle hasta obtener un número válido
  while ((rows * cols) % 2 !== 0) {
    alert('El número de cartas debe ser par. Vuelva a introducir los datos.');
    rows = parseInt(prompt('Número de filas:'));
    cols = parseInt(prompt('Número de columnas:'));
  }
  
  // Guardar en localStorage para persistencia
  localStorage.setItem('rows', rows);
  localStorage.setItem('cols', cols);
  
  return { rows, cols };
}`},{titulo:"Propagación de Eventos (Event Bubbling)",contenido:"Los eventos se propagan de hijo a padre. Esto permite manejar clicks en las casillas desde el contenedor padre.",puntosClave:["**Bubbling**: El click en una Box también se dispara en Game (su padre).","**e.target**: El elemento exacto que recibió el click.","**e.currentTarget**: El elemento que tiene el addEventListener.","**Delegación**: Manejar eventos de muchos hijos desde un solo padre."],codigo:`// En el constructor de Game, escuchamos clicks en el contenedor
this.element.addEventListener('click', (e) => {
  console.log('Click detectado en el contenedor padre');
  this.checkOpenBoxes(); // Comprobar parejas tras cada click
});

// El click en una Box se propaga automáticamente hacia arriba
// Primero se ejecuta el handler de Box, luego el de Game`},{titulo:"Comprobación de Parejas",contenido:"Implementamos la lógica para detectar cuando hay dos casillas abiertas y verificar si son pareja.",codigo:`checkOpenBoxes() {
  // Filtrar casillas que están abiertas Y libres (no emparejadas aún)
  const openBoxes = this.#boxes.filter(box => box.open && box.free);
  
  if (openBoxes.length === 2) {
    const [box1, box2] = openBoxes;
    
    if (box1.color === box2.color) {
      // ¡Es pareja! Marcar como no libres (fijas)
      box1.free = false;
      box2.free = false;
      this.boxesToLocalStorage(); // Guardar estado
    } else {
      // No coinciden: ocultar después de un delay
      setTimeout(() => {
        box1.resetColor();
        box2.resetColor();
      }, 600);
    }
  }
}`},{titulo:"Resetear Casillas",contenido:"Método en Box para volver al estado cerrado cuando no hay coincidencia.",codigo:`// En Box.js
resetColor() {
  this.#element.style.backgroundColor = 'black';
  this.#open = false;
}

// Evitar re-clicks en casillas ya abiertas
addEventClick() {
  this.#element.addEventListener('click', () => {
    if (!this.#open) { // Solo si está cerrada
      this.#element.style.backgroundColor = this.#color;
      this.#open = true;
    }
  });
}`},{titulo:"Persistencia con LocalStorage",contenido:"Guardamos el estado del juego para que persista al recargar la página.",puntosClave:["**Guardar filas/columnas**: Al iniciar, para no volver a preguntar.","**Guardar estado de boxes**: Qué casillas están abiertas/cerradas.","**JSON.stringify**: Convertir objetos a string para localStorage.","**JSON.parse**: Recuperar objetos desde localStorage."],codigo:`// Guardar estado de todas las boxes
boxesToLocalStorage() {
  const boxesData = this.#boxes.map(box => ({
    row: box.row,
    col: box.col,
    color: box.color,
    free: box.free,
    open: box.open
  }));
  
  localStorage.setItem('boxes', JSON.stringify(boxesData));
}

// Comprobar si hay datos guardados al crear el juego
createBoxes() {
  const savedBoxes = localStorage.getItem('boxes');
  
  if (savedBoxes !== null) {
    // Recuperar estado guardado
    const boxesData = JSON.parse(savedBoxes);
    boxesData.forEach(data => {
      const box = new Box(data.row, data.col, data.color, data.free, data.open);
      this.#boxes.push(box);
    });
  } else {
    // Crear desde cero
    this.createFreshBoxes();
  }
}`},{titulo:"Botón Reiniciar",contenido:"Función estática para limpiar localStorage y reiniciar el juego desde cero.",codigo:`// Método estático en Game
static resetGame() {
  localStorage.removeItem('rows');
  localStorage.removeItem('cols');
  localStorage.removeItem('boxes');
  localStorage.removeItem('timer');
  
  location.reload(); // Recargar página
}

// En main.js
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => {
  Game.resetGame();
});`},{titulo:"Recuperar Estado Visual",contenido:"Al pintar las boxes, mostrar el color si ya estaban abiertas o emparejadas.",codigo:`paintBoxes() {
  this.#boxes.forEach(box => {
    const div = document.createElement('div');
    div.classList.add('box');
    
    // Si la box estaba abierta o emparejada, mostrar su color
    if (!box.free || box.open) {
      div.style.backgroundColor = box.color;
    }
    
    box.element = div;
    box.addEventClick();
    this.boxContainer.appendChild(div);
  });
}`}]},{id:36,titulo:"Guardando el Juego en LocalStorage",descripcion:"Implementa persistencia completa del estado del juego, incluyendo un cronómetro y detección de victoria.",temas:[{titulo:"Problema: Objetos con Funcionalidad",contenido:"Los objetos de clases con métodos no se pueden guardar directamente en localStorage. Necesitamos extraer solo los datos.",puntosClave:["**JSON.stringify** solo guarda propiedades, no métodos.","**Objetos literales**: Crear objetos simples con solo los datos necesarios.","**Reconstruir**: Al recuperar, crear nuevas instancias de las clases con los datos."],codigo:`// ❌ INCORRECTO: Guardar instancia de clase directamente
localStorage.setItem('boxes', JSON.stringify(this.#boxes));
// Solo guarda las propiedades, pierde los métodos

// ✅ CORRECTO: Extraer solo los datos necesarios
boxesToLocalStorage() {
  const boxesData = this.#boxes.map(box => ({
    row: box.row,
    col: box.col,
    color: box.color,
    free: box.free,
    open: box.open
  }));
  
  localStorage.setItem('boxes', JSON.stringify(boxesData));
}`},{titulo:"Reconstruir Boxes desde LocalStorage",contenido:"Al cargar la página, verificamos si hay datos guardados y recreamos las instancias de Box.",codigo:`createBoxes() {
  this.#boxes = []; // Inicializar array vacío
  
  const savedBoxes = localStorage.getItem('boxes');
  
  if (savedBoxes !== null) {
    // Hay datos guardados: reconstruir
    const boxesData = JSON.parse(savedBoxes);
    boxesData.forEach(data => {
      // Crear nueva instancia con los datos guardados
      const newBox = new Box(
        data.row, 
        data.col, 
        data.color, 
        data.free, 
        data.open
      );
      this.#boxes.push(newBox);
    });
  } else {
    // No hay datos: crear juego nuevo
    const randomColors = this.createRandomColors();
    // ... crear boxes normalmente
  }
  
  this.boxesToLocalStorage(); // Guardar después de crear
}`},{titulo:"Actualizar LocalStorage en Cada Acción",contenido:"Cada vez que cambia el estado del juego, guardamos los cambios.",codigo:`checkOpenBoxes() {
  const openBoxes = this.#boxes.filter(box => box.open && box.free);
  
  if (openBoxes.length === 2) {
    if (openBoxes[0].color === openBoxes[1].color) {
      // Pareja encontrada
      openBoxes[0].free = false;
      openBoxes[1].free = false;
      this.boxesToLocalStorage(); // ✅ Guardar estado actualizado
    } else {
      // No coinciden
      setTimeout(() => {
        openBoxes[0].resetColor();
        openBoxes[1].resetColor();
        this.boxesToLocalStorage(); // ✅ Guardar estado actualizado
      }, 600);
    }
  } else {
    this.boxesToLocalStorage(); // ✅ Guardar caja abierta individualmente
  }
}`},{titulo:"Clase Timer: Cronómetro del Juego",contenido:"Encapsulamos la lógica del cronómetro en una clase reutilizable.",codigo:`// src/js/class/Timer.js
export default class Timer {
  #ms = 0;
  #sec = 0;
  #min = 0;
  #intervalId;
  #element;

  constructor(idElement = 'timer', ms = 0, sec = 0, min = 0) {
    this.#element = document.getElementById(idElement);
    this.#ms = ms;
    this.#sec = sec;
    this.#min = min;
  }

  start() {
    this.#intervalId = setInterval(() => {
      this.#ms++;
      if (this.#ms >= 100) {
        this.#ms = 0;
        this.#sec++;
      }
      if (this.#sec >= 60) {
        this.#sec = 0;
        this.#min++;
      }
      this.updateDisplay();
      this.saveToLocalStorage();
    }, 10);
  }

  stop() {
    clearInterval(this.#intervalId);
  }

  updateDisplay() {
    const pad = (n) => n.toString().padStart(2, '0');
    this.#element.textContent = 
      \`\${pad(this.#min)}:\${pad(this.#sec)}:\${pad(this.#ms)}\`;
  }

  saveToLocalStorage() {
    // Guardar cada 2 segundos para optimizar rendimiento
    if (this.#sec % 2 === 0 && this.#ms === 0) {
      const timerData = {
        ms: this.#ms,
        sec: this.#sec,
        min: this.#min
      };
      localStorage.setItem('timer', JSON.stringify(timerData));
    }
  }
}`},{titulo:"Recuperar Timer desde LocalStorage",contenido:"Al iniciar el juego, verificamos si hay un tiempo guardado para continuar desde ahí.",codigo:`constructor(idElement = 'timer', ms = 0, sec = 0, min = 0) {
  this.#element = document.getElementById(idElement);
  
  // Intentar recuperar tiempo guardado
  const savedTimer = localStorage.getItem('timer');
  
  if (savedTimer !== null) {
    const timerData = JSON.parse(savedTimer);
    this.#ms = parseInt(timerData.ms) || 0;
    this.#sec = parseInt(timerData.sec) || 0;
    this.#min = parseInt(timerData.min) || 0;
  } else {
    this.#ms = ms;
    this.#sec = sec;
    this.#min = min;
  }
}`},{titulo:"Optimización: No Guardar Cada Milisegundo",contenido:"Guardar en localStorage con demasiada frecuencia afecta el rendimiento. Limitamos las escrituras.",puntosClave:["**Problema**: Guardar cada 10ms satura localStorage y puede causar conflictos.","**Solución**: Guardar solo cada N segundos usando operador módulo.","**Borrado**: Al reiniciar, el guardado frecuente impedía borrar correctamente."],codigo:`saveToLocalStorage() {
  // Solo guardar cuando los segundos son múltiplo de 2 Y milisegundos = 0
  if (this.#sec % 2 === 0 && this.#ms === 0) {
    const timerData = {
      ms: this.#ms,
      sec: this.#sec,
      min: this.#min
    };
    localStorage.setItem('timer', JSON.stringify(timerData));
  }
}

// Resultado: Máximo ±2 segundos de diferencia al recargar
// Mucho mejor rendimiento y sin conflictos al resetear`},{titulo:"Detectar Victoria",contenido:"Cuando todas las casillas están emparejadas, el juego termina y se detiene el cronómetro.",codigo:`checkFinishGame() {
  // Filtrar casillas que aún están 'free' (sin emparejar)
  const freeBoxes = this.#boxes.filter(box => box.free);
  
  if (freeBoxes.length === 0) {
    // ¡Todas emparejadas! Juego terminado
    this.#timer.stop();
    
    // Pequeño delay para ver la última pareja
    setTimeout(() => {
      alert('¡Juego finalizado!');
    }, 400);
  }
}

// Llamar después de cada comprobación de parejas
checkOpenBoxes() {
  // ... lógica de parejas ...
  
  this.checkFinishGame(); // Verificar si ganó
}`},{titulo:"Estructura Final del Proyecto",contenido:"Resumen de la arquitectura completa del juego de parejas con Vite.",puntosClave:["**Game.js**: Clase principal. Tablero, lógica de parejas, localStorage.","**Box.js**: Cada casilla. Estado, color, eventos.","**Timer.js**: Cronómetro. Tiempo, persistencia, display.","**utils.js**: Funciones auxiliares (shuffleArray).","**main.js**: Punto de entrada. Inicializa Game, botón reset.","**Separación de responsabilidades**: Cada clase hace UNA cosa bien."],codigo:`// main.js - Limpio y conciso
import Game from './class/Game.js';

// Botón reiniciar
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => Game.resetGame());

// Crear juego (automáticamente recupera de localStorage si existe)
const data = Game.getRowsCols();
const game = new Game(data.rows, data.cols);

// ¡Todo lo demás está encapsulado en las clases!`}]}]},A={titulo:"Asincronía y Promesas",descripcion:"Domina el control de flujo asíncrono en JavaScript mediante Promesas, Async/Await y peticiones a servidores.",icono:"fa-clock",clases:[{id:37,titulo:"Introducción a las Promesas",descripcion:"Aprende qué son las promesas, sus estados y cómo gestionarlas para manejar operaciones asíncronas.",temas:[{titulo:"¿Qué es una Promesa?",contenido:"Una Promesa es un objeto que representa la terminación o el fracaso de una operación asíncrona. Es esencial para manejar tareas que toman tiempo, como peticiones a servidores, sin bloquear la ejecución del código.",puntosClave:["**Asincronía**: Permite que el código siga ejecutándose mientras espera una respuesta.","**Estados de una Promesa**: Pending (pendiente), Fulfilled (resuelta/completada), Rejected (rechazada).","**Uso común**: Peticiones a APIs, operaciones de base de datos, timers, etc."]},{titulo:"Creando una Promesa",contenido:"Utilizamos el constructor `new Promise` que recibe una función ejecutora con dos argumentos: `resolve` y `reject`.",codigo:`const miPromesa = new Promise((resolve, reject) => {
  // Simular operación asíncrona
  const exito = true;

  if (exito) {
    resolve("Operación exitosa"); // Cambia estado a Fulfilled
  } else {
    reject("Hubo un error"); // Cambia estado a Rejected
  }
});`},{titulo:"Consumiendo Promesas: then, catch, finally",contenido:"Para manejar el resultado de una promesa, utilizamos los métodos `.then()`, `.catch()` y `.finally()`.",puntosClave:["**then(callback)**: Se ejecuta cuando la promesa se resuelve exitosamente. Recibe el valor devuelto por `resolve`.","**catch(callback)**: Se ejecuta si la promesa es rechazada o hay un error. Recibe el motivo del `reject`.","**finally(callback)**: Se ejecuta siempre al finalizar, independientemente del resultado (útil para limpieza)."],codigo:`miPromesa
  .then((mensaje) => {
    console.log(mensaje); // "Operación exitosa"
  })
  .catch((error) => {
    console.error(error); // "Hubo un error"
  })
  .finally(() => {
    console.log("Promesa finalizada"); // Se ejecuta siempre
  });`},{titulo:"Encadenamiento de Promesas",contenido:"Los métodos `.then()` devuelven una nueva promesa, permitiendo encadenar operaciones secuenciales.",codigo:`const esperar = (ms) => new Promise(resolve => setTimeout(resolve, ms));

esperar(1000)
  .then(() => {
    console.log("Pasó 1 segundo");
    return 5; // Pasamos este valor al siguiente .then
  })
  .then((numero) => {
    console.log(\`El número es \${numero}\`);
    // Podemos devolver otra promesa
    return esperar(2000);
  })
  .then(() => {
    console.log("Pasaron 2 segundos más");
  })
  .catch((err) => console.error("Error en la cadena:", err));`},{titulo:"Métodos Estáticos: Resolve y Reject",contenido:"Podemos crear promesas ya resueltas o rechazadas inmediatamente usando `Promise.resolve()` y `Promise.reject()`.",codigo:`// Levantar una promesa resuelta inmediatamente
Promise.resolve("Datos en caché")
  .then(data => console.log(data));

// Rechazar una promesa inmediatamente (útil para validaciones)
function validarEdad(edad) {
  if (edad < 18) {
    return Promise.reject("Menor de edad"); // Rompe la cadena y va al catch
  }
  return Promise.resolve("Acceso autorizado");
}

validarEdad(15)
  .then(msg => console.log(msg))
  .catch(err => console.error(err)); // "Menor de edad"`}]},{id:38,titulo:"Funciones de Carrera y Argumentos",descripcion:"Domina la ejecución de promesas en paralelo con Promise.all, race, any y allSettled, y aprende a pasar argumentos a promesas.",temas:[{titulo:"Promesas en Serie vs. Paralelo",contenido:"Hasta ahora ejecutábamos promesas en serie (una tras otra). Sin embargo, cuando las operaciones son independientes, es más eficiente ejecutarlas en paralelo.",puntosClave:["**Serie**: Una promesa espera a que termine la anterior. Útil cuando una depende del resultado de otra.","**Paralelo**: Se lanzan todas a la vez. Útil para optimizar tiempo cuando no hay dependencias entre ellas."]},{titulo:"Promise.all()",contenido:"Recibe un array de promesas y devuelve una nueva promesa que se resuelve cuando **todas** las promesas del array se han resuelto. Si una falla, `Promise.all` falla inmediatamente. El resultado es un array con los valores devueltos, en el mismo orden.",codigo:`const p1 = new Promise(resolve => setTimeout(() => resolve(1), 1000));
const p2 = new Promise(resolve => setTimeout(() => resolve(2), 2000));

Promise.all([p1, p2])
  .then(resultados => {
    console.log(resultados); // [1, 2]
  })
  .catch(error => console.error("Una falló:", error));`},{titulo:"Promise.race()",contenido:"Recibe un array de promesas y se resuelve o rechaza tan pronto como **la primera** de ellas se resuelva o rechace.",codigo:`const lenta = new Promise(resolve => setTimeout(() => resolve("Lenta"), 2000));
const rapida = new Promise(resolve => setTimeout(() => resolve("Rápida"), 500));

Promise.race([lenta, rapida])
  .then(ganadora => console.log(ganadora)); // "Rápida"`},{titulo:"Promise.any()",contenido:"Similar a race, pero espera a la primera que se **resuelva exitosamente**. Ignora los rechazos a menos que **todas** fallen (AggregateError).",codigo:`const pError = Promise.reject("Falló");
const pOk = new Promise(resolve => setTimeout(() => resolve("Éxito"), 100));

Promise.any([pError, pOk])
  .then(result => console.log(result)); // "Éxito"`},{titulo:"Promise.allSettled()",contenido:"Espera a que **todas** las promesas terminen, independientemente de si tuvieron éxito o fallaron. Devuelve un array de objetos con el estado (`status`) y el resultado (`value` o `reason`) de cada una.",codigo:`Promise.allSettled([p1, pError])
  .then(resultados => console.log(resultados));
/*
[
  { status: "fulfilled", value: 1 },
  { status: "rejected", reason: "Falló" }
]
*/`},{titulo:"Pasar Argumentos a Promesas",contenido:"Para pasar argumentos a una promesa (como IDs o fechas), envolvemos la construcción de la promesa en una función que acepte esos argumentos.",codigo:`// Función que devuelve una promesa
const buscarUsuario = (nombre) => {
  return new Promise((resolve, reject) => {
    console.log(\`Buscando a \${nombre}...\`);
    setTimeout(() => {
      resolve({ id: 1, nombre: nombre });
    }, 1000);
  });
};

buscarUsuario("Alvaro")
  .then(user => console.log(user));`},{titulo:"Encadenamiento con Dependencia de Datos",contenido:"Un patrón muy potente es usar el resultado de una promesa como argumento para la siguiente. Al convertir las promesas en funciones (Factories), podemos inyectar datos dinámicos en cada paso de la cadena.",codigo:`const buscarUsuario = (nombre) => {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id: 1, nombre }), 500);
  });
};

const buscarActividad = (user, fecha) => {
  return new Promise(resolve => {
    setTimeout(() => resolve([\`Actividad de \${user.nombre} el \${fecha}\`]), 500);
  });
};

buscarUsuario("Alvaro")
  .then(user => {
    console.log("Usuario encontrado:", user);
    // Pasamos el usuario de la anterior promesa + un dato nuevo
    return buscarActividad(user, "2023-10-20");
  })
  .then(actividades => {
    console.log(actividades); // ["Actividad de Alvaro el 2023-10-20"]
  });`}]}]},P={titulo:"Comunicación con el Servidor",descripcion:"Aprende a comunicarte con servidores externos usando Fetch API, domina JSON y simplifica tu código asíncrono con Async/Await.",icono:"fa-globe",clases:[{id:39,titulo:"Introducción a APIs, Fetch y Async/Await",descripcion:"Comprende qué es una API, cómo intercambiar datos con JSON y utiliza Fetch y Async/Await para realizar peticiones HTTP.",temas:[{titulo:"¿Qué es una API?",contenido:"Una API (Application Programming Interface) es un intermediario que permite que dos sistemas se comuniquen. En el desarrollo web, las usamos para obtener o enviar datos a un servidor sin recargar la página.",puntosClave:["**Intercambio de datos**: Permite conectar tu frontend con un backend o servicios de terceros.","**JSON**: Formato estándar de intercambio datos. Es texto plano con sintaxis de objeto JS (claves con comillas).","**Verbos HTTP**: Definen la acción a realizar: GET (consultar), POST (crear), PUT (modificar), DELETE (borrar)."]},{titulo:"La función fetch()",contenido:"`fetch` es la API nativa de JavaScript para realizar peticiones HTTP. Devuelve siempre una **Promesa**.",puntosClave:["**Parámetros**: Recibe la URL obligatoria y un objeto de opciones opcional.","**Respuesta**: Devuelve una promesa que resuelve en un objeto `Response`.","**¡Ojo!**: Fetch solo rechaza la promesa por errores de red. Un 404 o 500 se considera éxito en la promesa (hay que validar `response.ok`)."],codigo:`// Petición básica GET
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return response.json(); // Extraer cuerpo JSON
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));`},{titulo:"Async / Await",contenido:"`async` y `await` son 'sugar syntax' sobre las promesas. Nos permiten escribir código asíncrono que se lee como si fuera síncrono, evitando el encadenamiento excesivo de `.then()`.",puntosClave:["**async**: Marca una función como asíncrona. Siempre devuelve una promesa.","**await**: Pausa la ejecución de la función hasta que la promesa se resuelve.","**Manejo de errores**: Al no tener `.catch()`, usamos bloques `try...catch`."],codigo:`const obtenerUsuario = async (id) => {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    
    if (!response.ok) throw new Error("No encontrado");
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Falló la petición:", error);
  }
};

obtenerUsuario(1);`},{titulo:"Ejemplo: Encadenamiento con Async/Await",contenido:"Resolver la dependencia de datos (usar datos de una petición en la siguiente) es trivial con async/await.",codigo:`const getCochesDelMismoAnio = async () => {
  // 1. Obtener primer coche
  const response1 = await fetch('https://api.ejemplo.com/coches/1');
  const coche1 = await response1.json();
  const anio = coche1.modelYear; // ej: 2002

  // 2. Obtener todos los coches usando el dato anterior
  const response2 = await fetch(\`https://api.ejemplo.com/coches?year=\${anio}\`);
  const coches = await response2.json();
  
  console.log(\`Coches del año \${anio}:\`, coches);
};`}]},{id:40,titulo:"Nuestro primer POST con Fetch",descripcion:"Aprende a enviar datos al servidor utilizando el verbo HTTP POST, gestionando cabeceras y cuerpo de la petición.",temas:[{titulo:"Peticiones POST",contenido:"Para enviar datos (crear recursos), necesitamos especificar el método, las cabeceras y el cuerpo en la función `fetch`.",puntosClave:["**method**: 'POST'","**headers**: Especificar `'Content-type': 'application/json'` para avisar al servidor que enviamos JSON.","**body**: Los datos deben ir como string JSON (`JSON.stringify`)."],codigo:`const crearTarea = async (nuevaTarea) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    body: JSON.stringify(nuevaTarea),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  
  const data = await response.json();
  console.log("Tarea creada:", data);
};

crearTarea({
  title: 'Aprender Fetch',
  body: 'Es muy útil',
  userId: 1,
});`},{titulo:"Formularios y Fetch",contenido:"Lo más común es recoger datos de un formulario HTML y enviarlos mediante Fetch al detectar el evento `submit`. Es crucial usar `event.preventDefault()` para evitar la recarga de página.",codigo:`formulario.addEventListener('submit', async (e) => {
  e.preventDefault(); // Evitar recarga
  
  // Recoger datos
  const datos = {
    title: inputTitulo.value,
    userId: selectUsuario.value
  };
  
  // Bloquear botón para evitar doble envío
  botonGuardar.disabled = true;
  
  await crearTarea(datos);
  
  botonGuardar.disabled = false;
  formulario.reset();
});`},{titulo:"Cargar datos dinámicos en formularios",contenido:"Podemos combinar GET y POST: primero hacemos un GET de usuarios para llenar un `<select>`, y luego usamos ese valor seleccionado para el POST de la nueva tarea.",codigo:`// 1. Obtener usuarios y llenar select
const cargarUsuarios = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();
  
  users.forEach(user => {
    const option = document.createElement('option');
    option.value = user.id;
    option.textContent = user.username;
    selectUsuario.appendChild(option);
  });
};

cargarUsuarios(); // Se ejecuta al cargar la página`}]},{id:41,titulo:"¿Qué es JWT? Autenticación y Autorización",descripcion:"Diferencia entre autenticación y autorización, y descubre cómo funciona el estándar JSON Web Token (JWT) para asegurar aplicaciones sin estado.",temas:[{titulo:"Autenticación vs Autorización",contenido:"Es vital diferenciar estos dos conceptos:",puntosClave:["**Autenticación**: ¿Quién eres? (Identificación, el 'DNI').","**Autorización**: ¿Qué permisos tienes? (¿Puedes entrar a esta habitación?)."]},{titulo:"Sesiones (Cookies) vs Tokens (JWT)",contenido:"Existen dos modelos principales de autenticación web:",puntosClave:["**Sesiones**: El servidor guarda el estado (Session ID). El cliente envía una Cookie. Es stateful (con estado). Difícil de escalar en microservicios.","**Tokens (JWT)**: El estado viaja en el token firmado digitalmente. El servidor es stateless (no guarda nada, solo verifica la firma). Ideal para microservicios y APIs REST."]},{titulo:"Estructura de un JWT",contenido:"Un JSON Web Token es un string dividido en tres partes separadas por puntos:",puntosClave:["**Header**: Algoritmo de encriptación y tipo (JWT).","**Payload**: Datos del usuario (id, nombre, roles). ¡No guardar información sensible como contraseñas!","**Signature**: Firma creada con el Header, Payload y un 'Secreto' del servidor. Garantiza que el token no ha sido modificado."]},{titulo:"Ejemplo de Login con JWT",contenido:"Flujo típico: Enviar credenciales (POST) -> Recibir Token -> Guardar Token -> Enviar Token en cabeceras futuras.",codigo:`// 1. Login para obtener el token
const login = async (username, password) => {
  const response = await fetch('https://dummyjson.com/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  
  const data = await response.json();
  // Guardamos el token (ej: localStorage, aunque cookies es más seguro)
  localStorage.setItem('token', data.token);
  console.log("Token recibido:", data.token);
};

// 2. Petición autenticada usando el token
const obtenerPerfil = async () => {
  const token = localStorage.getItem('token');
  
  const response = await fetch('https://dummyjson.com/auth/me', {
    method: 'GET',
    headers: {
      'Authorization': \`Bearer \${token}\` // Header estándar
    }
  });
  
  const user = await response.json();
  console.log("Usuario autenticado:", user);
};`}]},{id:42,titulo:"Proyecto Final: CRUD Completo en Vanilla JS",descripcion:"Aplica todo lo aprendido construyendo una aplicación de gestión de usuarios (CRUD) desde cero, separando lógica de API, manejo del DOM y eventos.",temas:[{titulo:"Configuración y Estructura",contenido:"Utilizamos Vite con el template Vanilla y Yarn. Separamos el código en `api.js` (lógica de red) y `crud.js` (lógica de DOM), manteniendo un `main.js` limpio que solo importa e inicializa.",puntosClave:["**Yarn vs NPM**: Preferencia por Yarn por velocidad y paralelismo.","**CSS**: Estilos básicos normalizados y uso de Flexbox para centrar la aplicación.","**Separación de Intereses**: `api.js` para fetch, `crud.js` para el DOM."]},{titulo:"Capa de API (api.js)",contenido:"Centralizamos las peticiones. Destaca la función `saveUser`, una refactorización inteligente que decide si crear (POST) o editar (PUT) según si el usuario tiene ID.",codigo:`const API_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async () => {
    const res = await fetch(API_URL);
    return await res.json();
};

export const deleteUser = async (id) => {
    // Importante enviar el method DELETE
    await fetch(\`\${API_URL}/\${id}\`, { method: 'DELETE' });
};

export const saveUser = async (user) => {
    // Si tiene ID es PUT (actualizar), si no es POST (crear)
    const method = user.id ? 'PUT' : 'POST';
    const url = user.id ? \`\${API_URL}/\${user.id}\` : API_URL;
    
    const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    });
    return await res.json();
};`},{titulo:"Lógica de UI (crud.js)",contenido:"Manejamos el estado de edición (`editingId`) y usamos delegación de eventos. Un detalle interesante es cómo poblamos el formulario al editar leyendo los datos directamente del DOM.",codigo:`import { getUsers, deleteUser, saveUser } from './api.js';

let editingId = null; // Estado para saber si editamos
const list = document.getElementById('user-list');
const form = document.getElementById('form');
const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');

// Renderizado: Creamos los LI con botones que tienen data-id
const render = async () => {
    const users = await getUsers();
    list.innerHTML = users.map(u => \`
        <li>
            <span>\${u.name} (\${u.email})</span>
            <div>
                <button class="edit-btn" data-id="\${u.id}">Editar</button>
                <button class="delete-btn" data-id="\${u.id}">Borrar</button>
            </div>
        </li>
    \`).join('');
};

// Delegación de eventos (Click en la lista)
list.addEventListener('click', async (e) => {
    const id = e.target.dataset.id;
    
    // Borrar
    if (e.target.classList.contains('delete-btn')) {
        await deleteUser(id);
        render();
    }
    
    // Editar: Leer del DOM para rellenar formulario
    if (e.target.classList.contains('edit-btn')) {
        const li = e.target.closest('li');
        const spanText = li.querySelector('span').textContent;
        // Parseamos "Nombre (email)"
        const [name, emailWrap] = spanText.split(' (');
        
        inputName.value = name;
        inputEmail.value = emailWrap.replace(')', '');
        editingId = id; // Activamos modo edición
    }
});

// Manejo del Formulario (Crear/Editar)
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const user = {
        name: inputName.value,
        email: inputEmail.value,
        id: editingId // Si es null, saveUser hará POST
    };
    
    await saveUser(user);
    
    editingId = null; // Limpiar estado
    form.reset();
    render();
});`}]}]},g={1:f,2:y,3:h,4:S,5:j,6:E,7:C,8:x,9:A,10:P};function v(o){return g[o]||null}function k(o,a){const n=v(o);return n&&n.clases.find(t=>t.id===a)||null}function w(o){const a=v(o);return a?a.clases:[]}function B(){L();const o=N(),a=document.querySelector("header"),n=document.getElementById("themeToggle");if(a&&n){const i=document.createElement("div");i.style.display="flex",i.style.gap="10px",i.style.alignItems="center",n.parentNode.insertBefore(i,n),i.appendChild(o),i.appendChild(n)}const t=document.getElementById("searchModal"),e=document.getElementById("searchInput"),r=document.getElementById("searchResults"),c=document.getElementById("closeSearch"),s=()=>{t.classList.contains("hidden")?(t.classList.remove("hidden"),e.value="",r.innerHTML="",setTimeout(()=>e.focus(),50),document.body.style.overflow="hidden"):(t.classList.add("hidden"),document.body.style.overflow="")};o.addEventListener("click",i=>{i.stopPropagation(),s()}),c.addEventListener("click",s),document.addEventListener("keydown",i=>{(i.ctrlKey||i.metaKey)&&(i.key==="k"||i.key==="/")&&(i.preventDefault(),t.classList.contains("hidden")?s():e.focus()),i.key==="Escape"&&!t.classList.contains("hidden")&&s()}),t.addEventListener("click",i=>{i.target===t&&s()});let l;e.addEventListener("input",i=>{clearTimeout(l);const m=i.target.value.trim().toLowerCase();if(m.length<2){r.innerHTML='<div class="search-placeholder"><i class="fa-solid fa-magnifying-glass"></i><p>Escribe para buscar...</p></div>';return}l=setTimeout(()=>{const b=M(m);q(b,r,s)},300)})}function L(){document.body.insertAdjacentHTML("beforeend",`
    <div id="searchModal" class="search-modal hidden">
      <div class="search-container">
        <div class="search-header">
           <i class="fa-solid fa-magnifying-glass search-icon-input"></i>
           <input type="text" id="searchInput" placeholder="Buscar concepto, código, o tema... (Ctrl+K)" autocomplete="off">
           <button id="closeSearch" class="btn-close"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="search-body">
           <div id="searchResults" class="search-results">
             <div class="search-placeholder">
               <i class="fa-solid fa-bolt"></i>
               <p>Busca en todo el curso</p>
             </div>
           </div>
        </div>
        <div class="search-footer">
           <div class="shortcut-hint"><kbd>Enter</kbd> para ir</div>
           <div class="shortcut-hint"><kbd>Esc</kbd> cerrar</div>
        </div>
      </div>
    </div>
  `)}function N(){const o=document.createElement("button");return o.className="btn-icon btn-search-trigger",o.title="Buscar (Ctrl+K)",o.innerHTML='<i class="fa-solid fa-magnifying-glass"></i>',o}function M(o){const a=[];return Object.entries(g).forEach(([n,t])=>{t.clases&&t.clases.forEach(e=>{e.titulo.toLowerCase().includes(o)&&a.push({type:"clase",title:e.titulo,subtitle:`Módulo ${n}`,url:d(n,e.id),match:"Título de Clase",score:10}),e.temas&&e.temas.forEach((r,c)=>{const s=r.titulo.toLowerCase(),l=r.contenido?r.contenido.toLowerCase():"",i=r.codigo?r.codigo.toLowerCase():"";s.includes(o)?a.push({type:"tema",title:r.titulo,subtitle:e.titulo,url:d(n,e.id)+`#t${c}`,match:"Tema",score:8}):i.includes(o)?a.push({type:"codigo",title:r.titulo,subtitle:"Fragmento de Código",url:d(n,e.id)+`#t${c}`,match:"Código",score:5,snippet:p(r.codigo,o)}):l.includes(o)&&a.push({type:"contenido",title:r.titulo,subtitle:"Contenido",url:d(n,e.id)+`#t${c}`,match:"Contenido",score:3,snippet:p(r.contenido,o)})})})}),a.sort((n,t)=>t.score-n.score).slice(0,50)}function d(o,a){return`/apuntes-javascript/src/pages/modulo-${o}/clase-${a}.html`}function p(o,a){if(!o)return"";const n=o.toLowerCase().indexOf(a),t=Math.max(0,n-30),e=Math.min(o.length,n+a.length+30);return"..."+o.substring(t,e)+"..."}function q(o,a,n){if(o.length===0){a.innerHTML=`
      <div class="search-empty">
        <i class="fa-solid fa-ghost"></i>
        <p>No se encontraron resultados para "${document.getElementById("searchInput").value}"</p>
      </div>
    `;return}a.innerHTML=o.map(e=>`
    <a href="${e.url}" class="search-result-item" data-type="${e.type}">
      <div class="result-icon">
        <i class="fa-solid ${T(e.type)}"></i>
      </div>
      <div class="result-info">
        <div class="result-title">
            ${e.title} 
            ${e.snippet?`<span class="result-snippet">${I(e.snippet)}</span>`:""}
        </div>
        <div class="result-subtitle">
            <span class="match-badge">${e.match}</span> ${e.subtitle}
        </div>
      </div>
      <div class="result-arrow">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </a>
  `).join(""),a.querySelectorAll("a").forEach(e=>{e.addEventListener("click",()=>{n()})})}function T(o){switch(o){case"clase":return"fa-chalkboard-user";case"tema":return"fa-book-open";case"codigo":return"fa-code";case"contenido":return"fa-align-left";default:return"fa-link"}}function I(o){return o?o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"):""}export{B as a,D as b,k as c,w as g,O as i};
