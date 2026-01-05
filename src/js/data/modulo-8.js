export const modulo8Data = {
  titulo: "Almacenamiento y Proyectos con Vite",
  descripcion: "Domina el almacenamiento en el navegador (Cookies, LocalStorage, SessionStorage) y crea proyectos profesionales con Vite.",
  icono: "fa-database",
  clases: [
    {
      id: 33,
      titulo: "LocalStorage, SessionStorage y Cookies",
      descripcion: "Aprende las tres formas de almacenar datos en el navegador: Cookies, LocalStorage y SessionStorage.",
      temas: [
        {
          titulo: "Introducción al Almacenamiento en el Navegador",
          contenido: "JavaScript permite almacenar datos directamente en el navegador para dar persistencia a las aplicaciones web. Existen tres mecanismos principales, cada uno con sus propias características y casos de uso.",
          puntosClave: [
            "**Cookies**: Datos que se envían al servidor en cada petición HTTP.",
            "**LocalStorage**: Almacenamiento persistente que sobrevive al cierre del navegador.",
            "**SessionStorage**: Almacenamiento temporal que solo dura mientras la pestaña está abierta.",
            "**Beneficios**: Menos consultas al backend, respuestas más rápidas, experiencia de usuario mejorada."
          ]
        },
        {
          titulo: "Cookies: Fundamentos",
          contenido: "Las cookies son pequeñas cadenas de datos que se almacenan en el navegador y se envían automáticamente al servidor en cada petición HTTP. Son fundamentales para la autenticación y el tracking.",
          puntosClave: [
            "**Protocolo HTTP**: Forman parte del estándar HTTP y viajan en las cabeceras de cada petición.",
            "**Set-Cookie**: El servidor establece cookies mediante esta cabecera de respuesta.",
            "**Autenticación**: El caso de uso más común es guardar tokens de sesión para mantener al usuario logueado.",
            "**Pares clave-valor**: Se almacenan como strings con formato `clave=valor` separados por punto y coma."
          ],
          codigo: `// Acceder a todas las cookies del documento
console.log(document.cookie); // "pixelRatio=2.5; user=john"

// Establecer una nueva cookie (NO sobreescribe las existentes)
document.cookie = "usuario=alvaro";

// Las cookies se acumulan, no se reemplazan
console.log(document.cookie); // "pixelRatio=2.5; user=john; usuario=alvaro"`
        },
        {
          titulo: "Cookies: Configuración y Expiración",
          contenido: "Las cookies tienen varios parámetros de configuración que controlan su comportamiento, accesibilidad y tiempo de vida.",
          puntosClave: [
            "**path**: Ruta desde la que es accesible la cookie. Usar `/` para todo el dominio.",
            "**domain**: Dominio para el que es válida la cookie.",
            "**expires**: Fecha exacta de expiración (objeto Date).",
            "**max-age**: Segundos hasta la expiración (más práctico que expires).",
            "**Límites**: Máximo 4KB por cookie y ~20 cookies por dominio."
          ],
          codigos: [
            {
              titulo: "Expiración con expires (fecha)",
              descripcion: "Establecer una fecha concreta de caducidad usando el objeto Date.",
              codigo: `// Cookie que expira mañana
let date = new Date();
date.setTime(date.getTime() + (24 * 60 * 60 * 1000)); // +24 horas en ms

document.cookie = \`user=john; expires=\${date.toUTCString()}\`;`
            },
            {
              titulo: "Expiración con max-age (segundos)",
              descripcion: "Forma más práctica: indicar los segundos de vida de la cookie.",
              codigo: `// Cookie que expira en 1 hora (3600 segundos)
document.cookie = "user=john; max-age=3600";

// Cookie que expira en 24 horas
document.cookie = "session=abc123; max-age=86400"; // 24 * 60 * 60

// Eliminar una cookie (max-age negativo)
document.cookie = "user=john; max-age=-1";`
            }
          ]
        },
        {
          titulo: "Cookies: Funciones de Utilidad",
          contenido: "Dado que las cookies se almacenan como un string único, necesitamos funciones auxiliares para trabajar con ellas de forma cómoda.",
          codigos: [
            {
              titulo: "Obtener una cookie por nombre",
              descripcion: "Función que busca y devuelve el valor de una cookie específica.",
              codigo: `function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp("(?:^|; )" + name.replace(/([.$?*|{}()[]\\\/+^])/g, '\\$1') + "=([^;]*)")
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

// Uso
const usuario = getCookie('user'); // "john"`
            },
            {
              titulo: "Establecer una cookie con opciones",
              descripcion: "Función completa para crear cookies con todas las opciones disponibles.",
              codigo: `function setCookie(name, value, options = {}) {
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
setCookie('nombre', 'bienvenido', { 'max-age': 3600 });`
            },
            {
              titulo: "Eliminar una cookie",
              descripcion: "Simplemente establecer max-age a un valor negativo.",
              codigo: `function deleteCookie(name) {
  setCookie(name, "", { 'max-age': -1 });
}

// Uso
deleteCookie('user');`
            }
          ]
        },
        {
          titulo: "Ver Cookies en DevTools",
          contenido: "El navegador ofrece una interfaz visual para inspeccionar las cookies almacenadas para cada dominio.",
          puntosClave: [
            "**Acceso**: Abrir DevTools → Application → Cookies.",
            "**Información visible**: Nombre, valor, dominio, path, fecha de expiración.",
            "**Acciones**: Puedes editar o eliminar cookies manualmente desde esta interfaz.",
            "**Por dominio**: Cada dominio tiene su propio conjunto de cookies aislado."
          ]
        },
        {
          titulo: "LocalStorage y SessionStorage: Introducción",
          contenido: "Los objetos de almacenamiento web son una alternativa moderna a las cookies. Permiten guardar pares clave-valor directamente en el navegador sin enviarlos al servidor.",
          puntosClave: [
            "**localStorage**: Persistente. Sobrevive al cierre del navegador.",
            "**sessionStorage**: Temporal. Se borra al cerrar la pestaña/navegador.",
            "**Capacidad**: Hasta 5MB por origen (mucho más que las 4KB de cookies).",
            "**Sin envío**: A diferencia de las cookies, NO se envían al servidor.",
            "**Vinculado al origen**: Aislado por dominio + puerto + protocolo."
          ]
        },
        {
          titulo: "API de Storage: Métodos Principales",
          contenido: "Tanto localStorage como sessionStorage comparten la misma API, muy intuitiva y fácil de usar.",
          puntosClave: [
            "**setItem(clave, valor)**: Guarda un par clave-valor.",
            "**getItem(clave)**: Obtiene el valor de una clave.",
            "**removeItem(clave)**: Elimina una clave específica.",
            "**clear()**: Elimina TODOS los datos almacenados.",
            "**key(indice)**: Obtiene la clave en una posición dada.",
            "**length**: Número de elementos almacenados."
          ],
          codigo: `// Guardar datos
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
localStorage.clear();`
        },
        {
          titulo: "Guardar Objetos y Arrays (JSON)",
          contenido: "localStorage y sessionStorage solo pueden almacenar strings. Para guardar estructuras complejas, usamos JSON.stringify() y JSON.parse().",
          puntosClave: [
            "**JSON.stringify(objeto)**: Convierte un objeto/array a string JSON.",
            "**JSON.parse(string)**: Convierte un string JSON a objeto/array.",
            "**Flujo completo**: Objeto → stringify → setItem / getItem → parse → Objeto"
          ],
          codigo: `// Guardar un OBJETO
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
console.log(tareasRecuperadas[0]); // "Estudiar JS"`
        },
        {
          titulo: "Ver Storage en DevTools",
          contenido: "Al igual que las cookies, podemos inspeccionar LocalStorage y SessionStorage desde las herramientas de desarrollo.",
          puntosClave: [
            "**Acceso**: DevTools → Application → Local Storage / Session Storage.",
            "**Compartido entre pestañas**: LocalStorage es accesible desde cualquier pestaña del mismo origen.",
            "**SessionStorage aislado**: Cada pestaña tiene su propio SessionStorage independiente.",
            "**Evento storage**: Se dispara cuando se modifican los datos (útil para sincronizar pestañas)."
          ]
        },
        {
          titulo: "Comparativa: Cookies vs Storage",
          contenido: "Cada mecanismo tiene sus propios casos de uso ideales.",
          puntosClave: [
            "**Cookies**: Para autenticación y datos que el servidor necesita en cada petición.",
            "**LocalStorage**: Para preferencias de usuario, caché de datos, estado de la app.",
            "**SessionStorage**: Para datos temporales de una sesión específica (formularios, wizards).",
            "**Seguridad**: Las cookies pueden configurarse como HttpOnly (inaccesibles desde JS) y Secure (solo HTTPS)."
          ]
        },
        {
          titulo: "Ejercicio Práctico: Aviso de Cookies",
          contenido: "Implementar un banner de cookies funcional que cargue scripts de analítica solo cuando el usuario acepta.",
          puntosClave: [
            "**Aceptar**: Cargar script de analítica y guardar cookie de 1 mes.",
            "**Rechazar**: No cargar script y guardar cookie de 24 horas (para no volver a preguntar).",
            "**Verificación**: Al cargar la página, comprobar si ya existe la cookie antes de mostrar el banner."
          ],
          codigo: `// Pseudocódigo del flujo
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
}`
        }
      ]
    },
    {
      id: 34,
      titulo: "Primer Proyecto con Vite",
      descripcion: "Aprende a estructurar un proyecto real con Vite, clases ES6, módulos y programación orientada a objetos.",
      temas: [
        {
          titulo: "Configuración Inicial con Vite",
          contenido: "Vite es un bundler moderno que permite crear proyectos estructurados con hot reload instantáneo y soporte nativo para ES Modules.",
          puntosClave: [
            "**npm create vite@latest**: Comando para iniciar un nuevo proyecto.",
            "**Vanilla JS**: Seleccionar JavaScript sin frameworks para proyectos puros.",
            "**Estructura limpia**: Vite crea una estructura base que nosotros personalizaremos.",
            "**npm run dev**: Arranca el servidor de desarrollo con HMR (Hot Module Replacement)."
          ],
          codigo: `# Crear proyecto con Vite
npm create vite@latest nombre-proyecto

# Seleccionar: Vanilla -> JavaScript

# Instalar dependencias
cd nombre-proyecto
npm install

# Iniciar servidor de desarrollo
npm run dev`
        },
        {
          titulo: "Estructura del Proyecto",
          contenido: "Organizamos el código en carpetas lógicas para mantener el proyecto escalable y mantenible.",
          puntosClave: [
            "**src/**: Carpeta principal del código fuente.",
            "**src/js/**: Scripts de JavaScript.",
            "**src/sass/**: Estilos con preprocesador SASS.",
            "**src/js/class/**: Clases del proyecto (Game, Box, Timer...).",
            "**src/js/utils/**: Funciones de utilidad reutilizables."
          ],
          codigo: `proyecto/
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
            └── _game.scss`
        },
        {
          titulo: "Añadir Soporte SASS",
          contenido: "Vite soporta SASS de forma nativa, solo necesitamos instalar el preprocesador como dependencia.",
          codigo: `# Instalar SASS como dependencia
npm install sass --save-dev

# En main.js, importar estilos SASS
import './sass/main.scss';

# Vite compilará automáticamente SASS a CSS`
        },
        {
          titulo: "Modelado con Clases: Game",
          contenido: "La clase Game encapsula toda la lógica del juego: tablero, cajas, eventos y estado.",
          puntosClave: [
            "**Constructor**: Recibe filas, columnas e ID del elemento contenedor.",
            "**Propiedades privadas (#)**: Para encapsular datos internos.",
            "**Métodos**: createRandomColors(), createBoxes(), paintBoxes().",
            "**export default**: Exportar la clase para usarla en otros módulos."
          ],
          codigo: `// src/js/class/Game.js
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
}`
        },
        {
          titulo: "Modelado con Clases: Box",
          contenido: "La clase Box representa cada casilla del juego con su estado y comportamiento.",
          codigo: `// src/js/class/Box.js
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
}`
        },
        {
          titulo: "Funciones Estáticas",
          contenido: "Los métodos estáticos se pueden llamar sin instanciar la clase. Útiles para funciones auxiliares.",
          puntosClave: [
            "**static**: Palabra clave para definir métodos estáticos.",
            "**Clase.metodo()**: Se llama directamente sobre la clase, no sobre instancias.",
            "**Ejemplo real**: Math.random() es un método estático de la clase Math."
          ],
          codigo: `// Método estático para pedir filas y columnas
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
const game = new Game(data.rows, data.cols);`
        },
        {
          titulo: "CSS Dinámico con JavaScript",
          contenido: "Podemos modificar las propiedades CSS del grid dinámicamente según los datos del usuario.",
          codigo: `// Establecer grid-template dinámicamente
setCSSBoxTemplate() {
  const boxContainer = document.getElementById('box-container');
  
  // Grid de N columnas
  boxContainer.style.gridTemplateColumns = \`repeat(\${this.#cols}, 1fr)\`;
  // Grid de M filas
  boxContainer.style.gridTemplateRows = \`repeat(\${this.#rows}, 1fr)\`;
}

// Resultado: grid adaptado a las filas/columnas elegidas`
        }
      ]
    },
    {
      id: 35,
      titulo: "Finalizando el Proyecto con Vite",
      descripcion: "Completa el juego de parejas con detección de coincidencias, propagación de eventos y persistencia en LocalStorage.",
      temas: [
        {
          titulo: "Validación de Entrada",
          contenido: "Antes de crear el juego, validamos que el número total de casillas sea par para poder formar parejas.",
          codigo: `static getRowsCols() {
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
}`
        },
        {
          titulo: "Propagación de Eventos (Event Bubbling)",
          contenido: "Los eventos se propagan de hijo a padre. Esto permite manejar clicks en las casillas desde el contenedor padre.",
          puntosClave: [
            "**Bubbling**: El click en una Box también se dispara en Game (su padre).",
            "**e.target**: El elemento exacto que recibió el click.",
            "**e.currentTarget**: El elemento que tiene el addEventListener.",
            "**Delegación**: Manejar eventos de muchos hijos desde un solo padre."
          ],
          codigo: `// En el constructor de Game, escuchamos clicks en el contenedor
this.element.addEventListener('click', (e) => {
  console.log('Click detectado en el contenedor padre');
  this.checkOpenBoxes(); // Comprobar parejas tras cada click
});

// El click en una Box se propaga automáticamente hacia arriba
// Primero se ejecuta el handler de Box, luego el de Game`
        },
        {
          titulo: "Comprobación de Parejas",
          contenido: "Implementamos la lógica para detectar cuando hay dos casillas abiertas y verificar si son pareja.",
          codigo: `checkOpenBoxes() {
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
}`
        },
        {
          titulo: "Resetear Casillas",
          contenido: "Método en Box para volver al estado cerrado cuando no hay coincidencia.",
          codigo: `// En Box.js
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
}`
        },
        {
          titulo: "Persistencia con LocalStorage",
          contenido: "Guardamos el estado del juego para que persista al recargar la página.",
          puntosClave: [
            "**Guardar filas/columnas**: Al iniciar, para no volver a preguntar.",
            "**Guardar estado de boxes**: Qué casillas están abiertas/cerradas.",
            "**JSON.stringify**: Convertir objetos a string para localStorage.",
            "**JSON.parse**: Recuperar objetos desde localStorage."
          ],
          codigo: `// Guardar estado de todas las boxes
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
}`
        },
        {
          titulo: "Botón Reiniciar",
          contenido: "Función estática para limpiar localStorage y reiniciar el juego desde cero.",
          codigo: `// Método estático en Game
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
});`
        },
        {
          titulo: "Recuperar Estado Visual",
          contenido: "Al pintar las boxes, mostrar el color si ya estaban abiertas o emparejadas.",
          codigo: `paintBoxes() {
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
}`
        }
      ]
    },
    {
      id: 36,
      titulo: "Guardando el Juego en LocalStorage",
      descripcion: "Implementa persistencia completa del estado del juego, incluyendo un cronómetro y detección de victoria.",
      temas: [
        {
          titulo: "Problema: Objetos con Funcionalidad",
          contenido: "Los objetos de clases con métodos no se pueden guardar directamente en localStorage. Necesitamos extraer solo los datos.",
          puntosClave: [
            "**JSON.stringify** solo guarda propiedades, no métodos.",
            "**Objetos literales**: Crear objetos simples con solo los datos necesarios.",
            "**Reconstruir**: Al recuperar, crear nuevas instancias de las clases con los datos."
          ],
          codigo: `// ❌ INCORRECTO: Guardar instancia de clase directamente
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
}`
        },
        {
          titulo: "Reconstruir Boxes desde LocalStorage",
          contenido: "Al cargar la página, verificamos si hay datos guardados y recreamos las instancias de Box.",
          codigo: `createBoxes() {
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
}`
        },
        {
          titulo: "Actualizar LocalStorage en Cada Acción",
          contenido: "Cada vez que cambia el estado del juego, guardamos los cambios.",
          codigo: `checkOpenBoxes() {
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
}`
        },
        {
          titulo: "Clase Timer: Cronómetro del Juego",
          contenido: "Encapsulamos la lógica del cronómetro en una clase reutilizable.",
          codigo: `// src/js/class/Timer.js
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
}`
        },
        {
          titulo: "Recuperar Timer desde LocalStorage",
          contenido: "Al iniciar el juego, verificamos si hay un tiempo guardado para continuar desde ahí.",
          codigo: `constructor(idElement = 'timer', ms = 0, sec = 0, min = 0) {
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
}`
        },
        {
          titulo: "Optimización: No Guardar Cada Milisegundo",
          contenido: "Guardar en localStorage con demasiada frecuencia afecta el rendimiento. Limitamos las escrituras.",
          puntosClave: [
            "**Problema**: Guardar cada 10ms satura localStorage y puede causar conflictos.",
            "**Solución**: Guardar solo cada N segundos usando operador módulo.",
            "**Borrado**: Al reiniciar, el guardado frecuente impedía borrar correctamente."
          ],
          codigo: `saveToLocalStorage() {
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
// Mucho mejor rendimiento y sin conflictos al resetear`
        },
        {
          titulo: "Detectar Victoria",
          contenido: "Cuando todas las casillas están emparejadas, el juego termina y se detiene el cronómetro.",
          codigo: `checkFinishGame() {
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
}`
        },
        {
          titulo: "Estructura Final del Proyecto",
          contenido: "Resumen de la arquitectura completa del juego de parejas con Vite.",
          puntosClave: [
            "**Game.js**: Clase principal. Tablero, lógica de parejas, localStorage.",
            "**Box.js**: Cada casilla. Estado, color, eventos.",
            "**Timer.js**: Cronómetro. Tiempo, persistencia, display.",
            "**utils.js**: Funciones auxiliares (shuffleArray).",
            "**main.js**: Punto de entrada. Inicializa Game, botón reset.",
            "**Separación de responsabilidades**: Cada clase hace UNA cosa bien."
          ],
          codigo: `// main.js - Limpio y conciso
import Game from './class/Game.js';

// Botón reiniciar
const resetBtn = document.getElementById('reset');
resetBtn.addEventListener('click', () => Game.resetGame());

// Crear juego (automáticamente recupera de localStorage si existe)
const data = Game.getRowsCols();
const game = new Game(data.rows, data.cols);

// ¡Todo lo demás está encapsulado en las clases!`
        }
      ]
    }
  ]
};
