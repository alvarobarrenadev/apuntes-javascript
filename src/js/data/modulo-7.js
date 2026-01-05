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
          contenido: "Los eventos son el mecanismo por el cual JavaScript detecta y responde a las acciones del usuario (clicks, teclado, scroll) o del navegador (carga completa, redimensionado). Es una comunicación asíncrona y bidireccional.",
          puntosClave: [
            "**Asíncronos**: El código no se bloquea esperando a que ocurran.",
            "**Asociados al DOM**: Ocurren sobre elementos específicos `elemento.addEventListener`.",
            "**Patrón Observador**: Establecemos un 'escucha' (listener) que reacciona cuando el evento se dispara."
          ]
        },
        {
          titulo: "Formas de capturar eventos",
          contenido: "Existen tres formas principales de manejar eventos, aunque solo una es la recomendada profesionalmente.",
          codigos: [
            {
              titulo: "1. Mediante Atributos HTML (No recomendado)",
              descripcion: "Mezcla lógica con estructura. Difícil de mantener.",
              codigo: `<button onclick="alert('Hola')">Púlsame</button>
<!-- O llamando a una función -->
<button onclick="miFuncion()">Púlsame</button>`
            },
            {
              titulo: "2. Mediante Propiedades del DOM (Limitado)",
              descripcion: "Mejor separación, pero solo permite un manejador por evento. Si asignas otro, se sobrescribe.",
              codigo: `const btn = document.querySelector('button');
btn.onclick = () => console.log('Click 1');
btn.onclick = () => console.log('Click 2'); // Sobrescribe el anterior. Solo saldrá 'Click 2'.`
            },
            {
              titulo: "3. eventListener (Recomendado)",
              descripcion: "Estándar moderno. Permite múltiples manejadores y opciones avanzadas.",
              codigo: `const btn = document.querySelector('button');

// Sintaxis: elemento.addEventListener(evento, callback)
btn.addEventListener('click', () => {
  console.log('Manejador 1');
});

btn.addEventListener('click', () => {
  console.log('Manejador 2'); // Se ejecutan ambos
});`
            }
          ]
        },
        {
          titulo: "Eliminar Eventos",
          contenido: "Podemos dejar de escuchar eventos con `removeEventListener`. Para que funcione, la función callback debe ser **la misma referencia** (no puede ser una función anónima o flecha definida inline).",
          codigo: `const btn = document.querySelector('#btn');

function manejarClick() {
  console.log('Click procesado');
  // Se auto-elimina después del primer uso
  btn.removeEventListener('click', manejarClick);
}

btn.addEventListener('click', manejarClick);`
        },
        {
          titulo: "El Objeto Event",
          contenido: "Cuando ocurre un evento, el navegador crea automáticamente un objeto `event` con todos los detalles de lo ocurrido y lo pasa como **primer argumento** a nuestra función manejadora.",
          puntosClave: [
            "**target**: El elemento que originó el evento.",
            "**type**: El tipo de evento ('click', 'keydown', etc).",
            "**timeStamp**: Momento exacto en que ocurrió.",
            "**clientX / clientY**: Coordenadas del puntero."
          ],
          codigo: `document.querySelector('button').addEventListener('click', (event) => {
  console.log(event.target); // El botón pulsado
  console.log(event.type);   // "click"
});`
        }
      ]
    },
    {
      id: 27,
      titulo: "Tipos de Eventos Relevantes",
      descripcion: "Explora los eventos más comunes: Formularios, Ratón, Teclado y Carga del Documento.",
      temas: [
        {
          titulo: "Eventos de Formulario",
          contenido: "Los formularios son la principal entrada de datos. Podemos validar y controlar su envío.",
          puntosClave: [
            "**submit**: Se dispara al intentar enviar el formulario. Usar `e.preventDefault()` para validar antes de enviar.",
            "**reset**: Se dispara al resetear el formulario.",
            "**change**: Se dispara cuando el valor de un input cambia y **pierde el foco**.",
            "**input**: Se dispara en tiempo real mientras se escribe.",
            "**focus/blur**: Cuando un elemento recibe o pierde el foco."
          ],
          codigo: `const form = document.forms[0];

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita recarga de página
  
  const email = form.elements.email.value;
  if (!email.includes('@')) {
    alert('Email inválido');
  } else {
    // form.submit(); // Envío manual si todo OK
    console.log('Formulario válido');
  }
});`
        },
        {
          titulo: "Eventos de Ratón (Mouse)",
          contenido: "Interacciones del puntero con los elementos.",
          puntosClave: [
            "**click / dblclick**: Click izquierdo simple o doble.",
            "**mouseenter / mouseleave**: Cuando el ratón entra o sale de un elemento (no burbujea).",
            "**mouseover / mouseout**: Similar, pero sí burbujea a los hijos.",
            "**contextmenu**: Click derecho. Se puede bloquear con `preventDefault`."
          ],
          codigo: `// Ejercicio: Color aleatorio al pasar el ratón
const elementos = document.body.children;

for (let el of elementos) {
  el.addEventListener('mouseenter', () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    el.style.backgroundColor = \`rgb(\${r},\${g},\${b})\`;
  });
  
  el.addEventListener('mouseleave', () => {
    el.style.backgroundColor = ''; // Restaurar
  });
}`
        },
        {
          titulo: "Eventos de Teclado (Keyboard)",
          contenido: "Captura la interacción con las teclas.",
          puntosClave: [
            "**keydown**: Al bajar la tecla (se repite si se mantiene).",
            "**keyup**: Al soltar la tecla.",
            "**event.key**: Devuelve el valor de la tecla ('a', 'Enter', 'Escape').",
            "**event.code**: Devuelve el código físico ('KeyA', 'Enter')."
          ]
        },
        {
          titulo: "Carga del Documento",
          contenido: "Es vital saber cuándo el DOM está listo para ser manipulado, especialmente si el script está en el `<head>`.",
          puntosClave: [
            "**DOMContentLoaded**: El HTML ha sido completamente cargado y parseado (sin esperar imágenes/CSS). Es el momento seguro para manipular el DOM.",
            "**load**: Se dispara cuando TODO (imágenes, scripts externos, estilos) ha terminado de cargar."
          ],
          codigo: `document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM listo para usar');
  // Aquí seleccionamos elementos seguros
  const btn = document.querySelector('#miBtn');
});`
        }
      ]
    },
    {
      id: 28,
      titulo: "Práctica de Selectores y DOM",
      descripcion: "Resolución de ejercicios complejos de selección y manipulación del DOM.",
      temas: [
        {
          titulo: "Estrategias de Selección",
          contenido: "Repaso de métodos avanzados para seleccionar elementos basados en su relación jerárquica.",
          puntosClave: [
            "**Navegación al padre**: Uso de `parentElement` para subir niveles (ej. de un `span` a su `div` contenedor).",
            "**Hermanos**: Uso de `previousElementSibling` y `nextElementSibling`.",
            "**Selectores CSS**: Potencia de `querySelectorAll` para selecciones complejas (ej. `section.products article.oferta`)."
          ],
          codigo: `// Ejemplo: Cambiar estilo al abuelo de un span
const spans = document.querySelectorAll('div.padre > p > span');

for (let span of spans) {
  // Span -> P -> Div
  const divAbuelo = span.parentElement.parentElement;
  divAbuelo.style.borderColor = 'blue';
}`
        },
        {
          titulo: "Manipulación de Listas",
          contenido: "Lógica para insertar elementos en posiciones específicas.",
          puntosClave: [
            "**insertBefore**: Para insertar antes de un nodo referencia.",
            "**Primer elemento**: `list.insertBefore(nuevo, list.firstElementChild)`",
            "**Elemento central**: Calcular índice y buscar el nodo de referencia."
          ]
        }
      ]
    },
    {
      id: 29,
      titulo: "Propagación y Eventos Personalizados",
      descripcion: "Entiende el flujo de eventos (Bubbling vs Capturing), la delegación y cómo crear tus propios eventos.",
      temas: [
        {
          titulo: "Flujo de Eventos",
          contenido: "Cuando ocurre un evento en un elemento anidado, este no se 'queda' ahí, sino que viaja a través del DOM. Por defecto, ocurre en fase de **Burbujeo (Bubbling)**: desde el elemento más profundo hacia arriba (window).",
          puntosClave: [
            "**Bubbling (Default)**: Hijo -> Padre -> Abuelo.",
            "**Capturing**: Abuelo -> Padre -> Hijo. Se activa con `{ capture: true }` en addEventListener.",
            "**stopPropagation()**: Detiene el viaje del evento. Evita que los padres se enteren."
          ],
          codigo: `// Ejemplo de Bubbling
child.addEventListener('click', () => console.log('Hijo'));
parent.addEventListener('click', () => console.log('Padre'));

// Al hacer click en el hijo, saldrá: 'Hijo' y luego 'Padre'`
        },
        {
          titulo: "Delegación de Eventos",
          contenido: "En lugar de añadir un listener a 100 botones, añadimos **uno solo** al padre y usamos `event.target` para identificar cuál fue pulsado. Es más eficiente y funciona para elementos creados dinámicamente.",
          codigo: `const lista = document.querySelector('ul');

lista.addEventListener('click', (e) => {
  // e.target es el elemento CLICKADO (puede ser el li, o un span dentro)
  // e.currentTarget es la LISTA (donde está el listener)
  
  if (e.target.tagName === 'LI') {
    console.log('Click en elemento:', e.target.textContent);
  }
});`
        },
        {
          titulo: "Eventos Personalizados (CustomEvent)",
          contenido: "Podemos crear y despachar nuestros propios eventos para desacoplar lógica.",
          codigo: `// 1. Crear el evento con datos
const eventoCompra = new CustomEvent('compraRealizada', {
  detail: { producto: 'Laptop', precio: 1000 }
});

// 2. Escuchar el evento
document.addEventListener('compraRealizada', (e) => {
  console.log(\`Comprado: \${e.detail.producto}\`);
});

// 3. Despachar (lanzar) el evento
document.dispatchEvent(eventoCompra);`
        }
      ]
    },
    {
      id: 30,
      titulo: "Resolución de Ejercicios I",
      descripcion: "Solución a los primeros retos sobre gestión de eventos: Galería dinámica, Caja movible y Lista ordenada.",
      temas: [
        {
          titulo: "Galería Numérica y Caja Movible",
          contenido: "Uso de `keydown` para capturar teclas numéricas para cambiar imágenes, y teclas de dirección (flechas) para mover un elemento absoluto modificando `top` y `left`.",
          codigo: `// Ejemplo movimiento caja
document.addEventListener('keydown', (e) => {
  const box = document.getElementById('box');
  const currentTop = parseInt(box.style.top || 0);
  
  if (e.key === 'ArrowDown') {
    box.style.top = (currentTop + 10) + 'px';
  }
});`
        },
        {
          titulo: "Lista Dinámica Ordenable",
          contenido: "Creación de una 'Todo List' donde se pueden añadir items, borrarlos individualmente y un botón global para ordenar alfabéticamente.",
          puntosClave: [
            "**Manipulación del DOM**: Crear `li` y botones de borrar dinámicamente.",
            "**Event Delegation**: O asignar listeners a cada botón creado.",
            "**Array.sort()**: Extraer textos, ordenar el array y reconstruir el DOM."
          ]
        },
        {
          titulo: "La Caja Loca",
          contenido: "Un elemento que 'uye' del ratón usando `mouseover` y posicionamiento aleatorio.",
          codigo: `box.addEventListener('mouseover', () => {
  const randomX = Math.random() * (window.innerWidth - 100);
  const randomY = Math.random() * (window.innerHeight - 100);
  
  box.style.left = randomX + 'px';
  box.style.top = randomY + 'px';
});`
        }
      ]
    },
    {
      id: 31,
      titulo: "Resolución de Ejercicios II",
      descripcion: "Ejercicios avanzados de manipulación e interacción: Eliminador de vocales y carrera de pulsaciones.",
      temas: [
        {
          titulo: "El Eliminador de Vocales",
          contenido: "Botonera donde cada vocal elimina su presencia en un texto utilizando `replaceAll`. Uso de `dataset` para identificar qué letra eliminar.",
          codigo: `// HTML: <button data-letter="a">A</button>
buttons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const letter = e.target.dataset.letter;
    // str.replaceAll(letter, '')
    // Actualizar textContent
    e.target.disabled = true; // Deshabilitar botón
  });
});`
        },
        {
          titulo: "Carrera de Teclas (A vs Ñ)",
          contenido: "Juego competitivo donde dos cajas crecen al pulsar teclas específicas. Gana la primera en llegar a 500px.",
          puntosClave: [
            "**Control de Estado**: Monitorizar el ancho de cada caja (`offsetWidth`).",
            "**RemoveEventListener**: Vital para detener el juego. Requiere usar funciones nombradas, no anónimas.",
            "**Lógica Ganadora**: Comprobar tras cada pulsación si `width >= 500`."
          ],
          codigo: `const handleKey = (e) => {
  if (e.key === 'a') growBox(greenBox);
  if (e.key === 'ñ') growBox(redBox);
  
  if (checkWinner()) {
    document.body.removeEventListener('keydown', handleKey);
  }
};
document.body.addEventListener('keydown', handleKey);`
        }
      ]
    },
    {
      id: 32,
      titulo: "Resolución de Ejercicios III",
      descripcion: "Creación de un juego de memoria (parejas) completo con lógica de grid, temporizador y estados.",
      temas: [
        {
          titulo: "El Juego de las Parejas",
          contenido: "Implementación de un grid 6x5 con 15 parejas de colores aleatorios.",
          puntosClave: [
            "**Generación de Colores**: Crear 15 colores RGB aleatorios y duplicarlos para tener pares.",
            "**Shuffle**: Algoritmo para barajar el array de colores.",
            "**Lógica de Selección**: Al hacer click, mostrar color. Si hay 2 seleccionados, comparar.",
            "**Timeout**: Si no coinciden, ocultarlos tras un breve retardo.",
            "**Estado Global**: Controlar cuántas parejas se han encontrado para detener el temporizador."
          ],
          codigo: `// Lógica de comparación
if (firstCard.dataset.color === secondCard.dataset.color) {
  // Acierto: Dejar fijas y deshabilitar listener
  matchesFound++;
  checkWin();
} else {
  // Fallo: Ocultar tras 1 segundo
  setTimeout(() => {
    firstCard.style.backgroundColor = 'black';
    secondCard.style.backgroundColor = 'black';
  }, 1000);
}`
        }
      ]
    }
  ]
};
