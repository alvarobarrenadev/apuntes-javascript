export const modulo7Data = {
  titulo: "Gestión de Eventos y Asincronía",
  descripcion: "Domina la gestión de eventos en JavaScript, el Event Loop y la asincronía.",
  icono: "fa-bolt",
  clases: [
    {
      id: 26,
      titulo: "Gestión de Eventos",
      descripcion: "Aprende qué son los eventos, cómo capturarlos y las diferentes formas de manejarlos en JavaScript.",
      temas: [
        {
          titulo: "¿Qué es un Evento?",
          contenido: "Los eventos son el 'idioma' en el que JavaScript entiende las acciones del usuario. Representan el mecanismo para establecer una comunicación bidireccional y en tiempo real entre la aplicación y los usuarios.",
          puntosClave: [
            "**Asíncronos**: No bloquean la ejecución; se establece un 'guardián' que espera en segundo plano.",
            "**Asociados al DOM**: Siempre ocurren sobre un elemento específico o el objeto `document`.",
            "**Patrón Observador**: Preparamos código para que se dispare solo cuando el suceso ocurra.",
            "**Seguridad**: Los navegadores restringen cada vez más qué eventos pueden dispararse sin interacción humana."
          ]
        },
        {
          titulo: "Formas de capturar eventos",
          contenido: "Históricamente han existido varias formas de 'escuchar' sucesos, pero su evolución ha buscado separar la lógica del marcado.",
          codigos: [
            {
              titulo: "1. Atributos HTML (Obsoleto)",
              descripcion: "Mezcla lógica con estructura (como el CSS inline). Muy difícil de mantener si cambias nombres de funciones.",
              codigo: `<!-- Requiere una función definida globalmente -->
<button onclick="mostrarAlert()">Púlsame</button>
<button onclick="console.log('Directo')">Consola</button>`
            },
            {
              titulo: "2. Propiedades del DOM (Limitado)",
              descripcion: "Se asigna desde JS pero tiene el mismo problema de fondo: solo permite un manejador. `setAttribute` también entra en esta categoría.",
              codigo: `const btn = document.querySelector('button');
// Opción A: Propiedad directa
btn.onclick = () => console.log('Click A');
// Opción B: Atributo (JS -> HTML)
btn.setAttribute('onclick', 'mostrarAlert()');`
            },
            {
              titulo: "3. addEventListener (Estándar Profesional)",
              descripcion: "Es el método recomendado. Permite múltiples funciones para un mismo evento y mayor control.",
              codigo: `const btn = document.querySelector('button');

// Sintaxis: elemento.addEventListener(tipo, callback)
btn.addEventListener('click', () => {
  console.log('Escuchador 1');
});

// Permite pasar una función nombrada
function saludar() { console.log('Hola!'); }
btn.addEventListener('click', saludar);`
            }
          ]
        },
        {
          titulo: "Remover Eventos y Funciones Anónimas",
          contenido: "Para usar `removeEventListener`, debemos pasar **la misma referencia** de función que usamos al añadirlo. Las funciones anónimas o flecha creadas inline no pueden borrarse.",
          puntosClave: [
            "**Referencia Identica**: JS necesita saber exactamente qué 'vigilante' quitar.",
            "**Funciones Anónimas**: `() => { ... }` crea una instancia nueva cada vez, por lo que nunca coinciden para el borrado."
          ],
          codigo: `function manejarClick() {
  console.log('Se ejecuta una vez');
  btn.removeEventListener('click', manejarClick);
}

btn.addEventListener('click', manejarClick); // FUNCIONA

// ESTO NO FUNCIONARÍA PARA BORRAR:
btn.addEventListener('click', () => { ... });
btn.removeEventListener('click', () => { ... }); // Son funciones diferentes para JS`
        },
        {
          titulo: "El Objeto Event (La Instancia)",
          contenido: "Al dispararse un evento, JS crea un objeto (instancia de la clase `Event`) con metadatos y lo pasa como primer argumento al callback.",
          puntosClave: [
            "**target**: El elemento real que disparó la acción (fundamental en delegación).",
            "**type**: Nombre del evento ('click', 'keydown').",
            "**timeStamp**: Milisegundos desde que se cargó la página.",
            "**Coordenadas**: `clientX/Y` (viewport), `screenX/Y` (monitor).",
            "**Teclas Especiales**: `ctrlKey`, `shiftKey`, `altKey` (booleanos).",
            "**Botón Ratón**: `button` (0: Izquierdo, 1: Central, 2: Derecho)."
          ],
          codigo: `// Aplicar un mismo listener a muchos elementos
const botones = document.querySelectorAll('button');

botones.forEach(btn => {
  btn.addEventListener('click', (e) => {
    // Usamos e.target para saber CUAL de todos los botones se pulsó
    console.log("Pulsaste el botón: ", e.target.textContent);
    console.log("Coordenadas click: ", e.clientX, e.clientY);
  });
});`
        }
      ]
    },
    {
      id: 27,
      titulo: "Tipos de Eventos Relevantes",
      descripcion: "Explora los eventos más comunes: Formularios, Ratón, Teclado, Multimedia y Carga del Documento.",
      temas: [
        {
          titulo: "Formularios y acceso al DOM",
          contenido: "Los formularios son la entrada principal de datos. JavaScript ofrece formas directas de acceder a ellos sin necesidad de selectores pesados.",
          puntosClave: [
            "**document.forms**: Colección de todos los formularios de la página. Ej: `document.forms[0]`.",
            "**elements**: Propiedad del formulario que devuelve una lista de todos sus controles (inputs, buttons, etc).",
            "**Metodos**: `form.submit()` envía manualmente; `form.reset()` limpia todos los campos."
          ],
          codigo: `const miForm = document.forms[0];
const emailInput = miForm.elements['email']; // Acceso por name o id

// Validar antes de enviar
miForm.addEventListener('submit', (e) => {
  if (!emailInput.value.includes('@')) {
    e.preventDefault(); // Detiene el envío
    alert('Correo inválido');
  }
});`
        },
        {
          titulo: "Propiedades de los Controles (Inputs)",
          contenido: "Cada elemento dentro de un formulario tiene propiedades que podemos leer o modificar por código.",
          puntosClave: [
            "**value**: Contenido actual del campo.",
            "**checked**: Estado de checkbox o radio (booleano).",
            "**disabled / readOnly**: Bloqueo del elemento.",
            "**required**: Si es obligatorio.",
            "**Selection**: `selectionStart` y `selectionEnd` permiten saber qué texto ha marcado el usuario."
          ]
        },
        {
          titulo: "Eventos de Ratón (Avanzado)",
          contenido: "Interacciones precisas con el puntero.",
          puntosClave: [
            "**mousedown / mouseup**: Diferencia entre el momento de pulsar y el de soltar.",
            "**mouseenter / mouseleave**: Ideales para efectos visuales (no burbujean, más estables).",
            "**mousemove**: Se dispara constantemente al mover el ratón (útil para trackers o juegos).",
            "**contextmenu**: Click derecho. Se puede bloquear para crear menús personalizados con `e.preventDefault()`."
          ]
        },
        {
          titulo: "Eventos de Teclado y Multimedia",
          contenido: "Control total sobre la entrada de texto y elementos de audio/vídeo.",
          puntosClave: [
            "**event.key vs event.code**: `key` es el carácter resultante ('A'), `code` es la posición física ('KeyA').",
            "**Location**: Permite saber si se pulsó la tecla 'Shift' izquierda o derecha.",
            "**Multimedia**: Eventos como `play`, `pause`, `ended` o `durationchange` para reproductores personalizados."
          ]
        },
        {
          titulo: "Carga y Estado de la Ventana",
          contenido: "Eventos globales que rigen el ciclo de vida de la página.",
          puntosClave: [
            "**DOMContentLoaded**: Se dispara cuando el HTML está listo. Permite tener los `<script>` en el `<head>` sin errores de 'elemento no encontrado'.",
            "**load**: Espera a que carguen imágenes y recursos externos.",
            "**resize**: Detecta cambios en el tamaño de la ventana.",
            "**scroll**: Detecta el desplazamiento del usuario.",
            "**Clipboard**: `copy`, `cut` y `paste` para controlar el portapapeles."
          ],
          codigo: `// El estándar para inicializar scripts:
document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

window.addEventListener('scroll', () => {
  console.log("Posición scroll:", window.scrollY);
});`
        },
        {
          titulo: "Ejercicios Prácticos: Dinamismo Total",
          contenido: "Aplica lo aprendido para manipular múltiples elementos a la vez y controlar el comportamiento nativo.",
          codigos: [
            {
              titulo: "Color Aleatorio al entrar/salir",
              descripcion: "Uso de comodín '*' para seleccionar todo el body y aplicar efectos dinámicos.",
              codigo: `const elementos = document.body.getElementsByTagName('*');

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
}`
            },
            {
              titulo: "Bloquear Menú Contextual",
              descripcion: "Evita que aparezca el menú del botón derecho en toda la página.",
              codigo: `document.addEventListener('contextmenu', (e) => {
  e.preventDefault();
  console.log("Menú bloqueado por seguridad/diseño");
});`
            }
          ]
        }
      ]
    },
    {
      id: 28,
      titulo: "Práctica de Selectores y DOM",
      descripcion: "Resolución de retos reales: navegación jerárquica, inserciones dinámicas y manipulación de atributos.",
      temas: [
        {
          titulo: "Navegación y Relaciones del DOM",
          contenido: "Aprender a moverse por el árbol (hacia arriba, abajo o lados) es vital cuando no tenemos IDs directos.",
          puntosClave: [
            "**Subir en la jerarquía**: `parentElement.parentElement` para alcanzar abuelos (ej. de un span a su contenedor div).",
            "**Bajar a elementos específicos**: `firstElementChild` y `lastElementChild` (ignoran nodos de texto/espacios).",
            "**Iteración Condicional**: Filtrar elementos por su número de hijos (`children.length`) antes de operar."
          ],
          codigo: `// Seleccionar el antepenúltimo párrafo de cada DIV
const divs = document.querySelectorAll('div');
divs.forEach(div => {
  const párrafos = div.querySelectorAll('p');
  if (párrafos.length >= 3) {
    const antepenultimo = párrafos[párrafos.length - 3];
    antepenultimo.classList.toggle('highlight');
  }
});`
        },
        {
          titulo: "Inserción y Reposicionamiento",
          contenido: "Métodos para colocar elementos exactamente donde los necesitamos.",
          puntosClave: [
            "**insertBefore(nuevo, referencia)**: Inserta antes del nodo de referencia. Si el nodo ya existía, lo MUEVE.",
            "**Insertar al inicio**: `padre.insertBefore(nuevo, padre.firstElementChild)`.",
            "**Insertar en medio**: Seleccionar el hijo intermedio como referencia."
          ],
          codigo: `// Insertar entre los dos únicos elementos de una lista
const listas = document.querySelectorAll('ol');
listas.forEach(lista => {
  if (lista.children.length === 2) {
    const nuevo = document.createElement('li');
    nuevo.textContent = "Intermedio";
    // Se inserta antes del segundo (que es el lastElementChild)
    lista.insertBefore(nuevo, lista.lastElementChild);
  }
});`
        },
        {
          titulo: "Atributos y Texto",
          contenido: "Manipulación fina de la metadata de los elementos y creación de nuevos tipos de nodos.",
          puntosClave: [
            "**document.createTextNode**: Crea un nodo de texto puro, ideal para añadir puntuación o texto sin etiquetas.",
            "**dataset**: Forma preferida para manejar atributos `data-*` (ej: `el.dataset.iva = 0`).",
            "**Iterar Atributos**: `elemento.attributes` permite recorrer todos los atributos de un nodo (name y value)."
          ],
          codigo: `// Añadir un punto final a cada párrafo
const ps = document.querySelectorAll('p');
ps.forEach(p => {
  const punto = document.createTextNode('.');
  p.appendChild(punto);
});

// Manipulación compleja de clases y dataset
const ofertas = document.querySelectorAll('section.products article.oferta');
ofertas.forEach(art => art.dataset.iva = "0");`
        },
        {
          titulo: "Sustitución de Elementos",
          contenido: "Patrón para transformar un elemento en otro manteniendo su contenido.",
          codigo: `// Convertir el texto de un LI en un enlace
const li = document.querySelector('li');
const link = document.createElement('a');
link.href = "#";
link.textContent = li.textContent;
li.textContent = ""; // Limpia el LI
li.appendChild(link); // Añade el enlace dentro`
        }
      ]
    },
    {
      id: 29,
      titulo: "Propagación y Eventos Personalizados",
      descripcion: "Entiende el flujo de eventos (Bubbling vs Capturing), la delegación y cómo crear tus propios eventos.",
      temas: [
        {
          titulo: "Flujo de Eventos: Fases",
          contenido: "Cuando ocurre un evento, este viaja por el DOM en tres fases. Entender esto evita que los eventos se disparen en lugares no deseados.",
          puntosClave: [
            "**Fase de Captura (Capturing)**: El evento baja desde `window` hasta el elemento objetivo. Se activa con `{ capture: true }`.",
            "**Fase de Objetivo (Target)**: El evento llega al elemento que lo originó.",
            "**Fase de Burbujeo (Bubbling)**: El evento sube desde el elemento hacia arriba. Es el comportamiento por defecto."
          ],
          codigo: `// Ejemplo de Bubbling vs Capturing
const hijo = document.querySelector('.hijo');
const padre = document.querySelector('.padre');

hijo.addEventListener('click', () => console.log('1. Hijo (Burbujeo)'));
padre.addEventListener('click', () => console.log('2. Padre (Burbujeo)'));

// Si activamos captura en el padre:
padre.addEventListener('click', () => console.log('0. Padre (Captura)'), true);`
        },
        {
          titulo: "Control de la Propagación",
          contenido: "Podemos detener el viaje del evento o anular comportamientos nativos del navegador.",
          puntosClave: [
            "**stopPropagation()**: Detiene el burbujeo. Los padres no se enterarán del evento.",
            "**preventDefault()**: Detiene la acción por defecto (navegar un link, enviar form, abrir menú contextual).",
            "**Casos de uso**: Evitar scroll al pulsar Espacio, bloquear el click derecho, o validar inputs antes de enviar."
          ],
          codigo: `// Evitar que la tecla Espacio haga scroll
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
});`
        },
        {
          titulo: "Target vs CurrentTarget",
          contenido: "Propiedades clave para identificar quién disparó el evento y quién lo está manejando.",
          puntosClave: [
            "**event.target**: El elemento exacto que recibió el click (el más profundo).",
            "**event.currentTarget**: El elemento que tiene el `addEventListener` (el dueño del listener)."
          ],
          codigo: `// Delegación de eventos (Eficiencia)
document.querySelector('ul').addEventListener('click', (e) => {
  console.log("¿Quién recibió el click?", e.target);
  console.log("¿Quién maneja el evento?", e.currentTarget); // Siempre será el UL
});`
        },
        {
          titulo: "Eventos Personalizados y Emisión Programática",
          contenido: "Podemos crear nuestros propios eventos para desacoplar partes de la aplicación o simular acciones del usuario.",
          puntosClave: [
            "**CustomEvent**: Permite pasar datos extra en la propiedad `detail`.",
            "**dispatchEvent**: Método para lanzar el evento manualmente.",
            "**Simulación**: Podemos lanzar un `new Event('click')` sobre un botón por código."
          ],
          codigo: `// 1. Definir y disparar evento custom
const eventRegistro = new CustomEvent('usuarioRegistrado', {
  detail: { nombre: 'Alvaro', id: 26 },
  bubbles: true
});

document.dispatchEvent(eventRegistro);

// 2. Escuchar el evento
document.addEventListener('usuarioRegistrado', (e) => {
  console.log("Nuevo usuario:", e.detail.nombre);
});`
        }
      ]
    },
    {
      id: 30,
      titulo: "Resolución de Ejercicios I",
      descripcion: "Soluciones prácticas a retos de interacción: Teclado, Ratón y Gestión Dinámica del DOM.",
      temas: [
        {
          titulo: "Reto 1: Galería Numérica (Teclado)",
          contenido: "Uso de `keydown` para cambiar imágenes según el dígito pulsado. Se utiliza un array de URLs y se actualiza el atributo `src`.",
          codigo: `const imgs = ["url0.jpg", "url1.jpg", ...];
const visor = document.querySelector('#visor');

document.addEventListener('keydown', (e) => {
  const n = parseInt(e.key);
  if (n >= 0 && n <= 9) {
    visor.src = imgs[n];
  } else {
    visor.src = "placeholder.jpg";
    console.log("No es un número válido");
  }
});`
        },
        {
          titulo: "Reto 2: Caja Movible (Cursores)",
          contenido: "Uso de `switch` para gestionar las flechas de dirección y modificar el posicionamiento relativo/absoluto.",
          codigo: `const box = document.getElementById('box');
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
});`
        },
        {
          titulo: "Reto 3: Lista Inteligente (Sort/Delete/Add)",
          contenido: "Gestión completa de una lista: añadir mediante `prompt`, borrar con botones dinámicos y ordenar alfabéticamente.",
          puntosClave: [
            "**Borrados**: Acceder al padre con `e.target.parentNode.remove()`.",
            "**Ordenación**: Extraer contenido con `element.textContent`, aplicar `array.sort()` y reconstruir el DOM.",
            "**Persistencia**: Al re-renderizar la lista tras ordenar, es vital volver a asignar los listeners a los nuevos botones."
          ],
          codigo: `// Lógica para borrar un elemento
btnBorrar.onclick = (e) => e.target.parentElement.remove();

// Lógica para ordenar
function ordenar() {
  const items = Array.from(lista.children).map(li => li.childNodes[0].textContent);
  items.sort();
  lista.innerHTML = "";
  items.forEach(txt => crearNuevoLi(txt));
}`
        },
        {
          titulo: "Reto 4: Párrafo Dinámico y Caja Loca",
          contenido: "Captura de teclas global para 'escribir' en un elemento y el uso de `Math.random` para mover cajas.",
          codigo: `// 1. Escritura en párrafo
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
});`
        }
      ]
    },
    {
      id: 31,
      titulo: "Resolución de Ejercicios II",
      descripcion: "Retos de lógica y persistencia: Manipulación de texto masiva y juegos de velocidad.",
      temas: [
        {
          titulo: "Reto 5: Eliminador de Vocales",
          contenido: "Uso de `dataset` para identificar qué letra borrar y `replaceAll` para limpiar todo el texto de un párrafo.",
          puntosClave: [
            "**dataset**: Atributos `data-letter` en HTML extraídos con `e.target.dataset.letter`.",
            "**replaceAll**: A diferencia de `replace`, este método de String limpia todas las ocurrencias sin necesidad de Regex.",
            "**Feedback de Usuario**: Deshabilitar el botón pulsado con `e.target.disabled = true`."
          ],
          codigo: `const p = document.querySelector('#texto');
const botones = document.querySelectorAll('.vocal-btn');

botones.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const letra = e.target.dataset.letter;
    p.textContent = p.textContent.replaceAll(letra, '');
    e.target.disabled = true; // El botón queda inactivo
  });
});`
        },
        {
          titulo: "Reto 6: Carrera de Teclas (A vs Ñ)",
          contenido: "Juego de competición que pone a prueba la velocidad de pulsación y el control del estado del juego.",
          puntosClave: [
            "**Medición Real**: Uso de `offsetWidth` para obtener el ancho actual incluyendo bordes.",
            "**Selección Dinámica**: Uso de selectores de atributo como `[data-key=\"\${e.key}\"]` para encontrar la caja asociada.",
            "**Finalización del Juego**: Es IMPRESCINDIBLE usar una función nombrada para poder hacer `removeEventListener` y detener el juego."
          ],
          codigo: `const handleKey = (e) => {
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

document.body.addEventListener('keydown', handleKey);`
        }
      ]
    },
    {
      id: 32,
      titulo: "Resolución de Ejercicios III",
      descripcion: "Desarrollo de un Juego de Memoria (Parejas) paso a paso: Grid dinámico, algoritmos de barajado y cronómetro.",
      temas: [
        {
          titulo: "Arquitectura del Juego",
          contenido: "Planteamiento de un reto complejo que une generación dinámica de elementos, CSS Grid y lógica de estados.",
          puntosClave: [
            "**Cuadrícula Dinámica**: Bucle anidado (filas x columnas) para crear 30 cajas (`div`) inyectadas al DOM.",
            "**Generación de Colores**: Crear 15 colores RGB aleatorios (0-255) y duplicarlos en un array de 30.",
            "**Algoritmo Shuffle**: Es crucial barajar el array de colores para que las parejas no estén juntas. (Ej: algoritmo de Fisher-Yates).",
            "**Asignación**: Usar `randomColors.shift()` para extraer un color del array barajado y asignarlo a cada caja."
          ],
          codigo: `// Generar 15 colores y duplicarlos
const colores = [];
for (let i = 0; i < 15; i++) {
  const c = \`rgb(\${r()},\${g()},\${b()})\`;
  colores.push(c, c); // Metemos el mismo color dos veces
}
shuffle(colores); // Barajamos`
        },
        {
          titulo: "Lógica de Estado y Emparejamiento",
          contenido: "Cómo gestionar qué cartas están abiertas y qué sucede cuando no coinciden.",
          puntosClave: [
            "**Estados por Dataset**: `data-open` (abierta momentáneamente) y `data-matched` (ya resuelta).",
            "**Comparación de Pares**: Al abrir la segunda carta, comparar sus `dataset.color`.",
            "**Uso de setTimeout**: Si no coinciden, esperar (ej: 500ms) para que el usuario memorice antes de volver a ocultarlas.",
            "**Cuentas Finales**: Cuando el número de cartas 'matched' sea igual al total, detener el cronómetro."
          ],
          codigo: `// Lógica del click
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
}`
        }
      ]
    }
  ]
};
