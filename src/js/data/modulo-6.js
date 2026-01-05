export const modulo6Data = {
  titulo: "Manipulación del DOM",
  descripcion: "Domina el Document Object Model (DOM) para crear interfaces web dinámicas e interactivas.",
  icono: "fa-code",
  clases: [
    {
      id: 20,
      titulo: "Selectores del DOM",
      descripcion: "Aprende a seleccionar elementos del DOM utilizando métodos tradicionales y modernos.",
      temas: [
        {
          titulo: "¿Qué es un Selector?",
          contenido: "Un selector nos permite identificar y obtener elementos del DOM (Document Object Model) para poder manipularlos. Existen selectores tradicionales y modernos (similares a CSS).",
        },
        {
          titulo: "Selectores Tradicionales (GetElement)",
          contenido: "Métodos específicos optimizados para seleccionar por ID, clase, etiqueta o nombre. Son más rápidos que los modernos pero menos flexibles.",
          puntosClave: [
            "`document.getElementById('id')`: Devuelve un **único elemento** `HTMLElement` o `null` si no existe.",
            "`document.getElementsByClassName('clase')`: Devuelve una `HTMLCollection` (array-like) **en vivo**.",
            "`document.getElementsByTagName('tag')`: Devuelve una `HTMLCollection` **en vivo** con todos los elementos de ese tipo.",
            "`document.getElementsByName('name')`: Devuelve una `NodeList` **en vivo** (especial) con elementos que tengan ese atributo `name`."
          ]
        },
        {
          titulo: "Selectores Modernos (Query Selector)",
          contenido: "Permiten usar sintaxis de selectores CSS completa. Son un poco más lentos pero infinitamente más flexibles. La diferencia de rendimiento es imperceptible en la mayoría de aplicaciones.",
          puntosClave: [
            "`document.querySelector('selector')`: Devuelve el **primer elemento** que coincida o `null`.",
            "`document.querySelectorAll('selector')`: Devuelve una `NodeList` **estática** con **todos** los elementos que coincidan. **Siempre** devuelve una NodeList, aunque sea vacía o solo encuentre uno."
          ],
          codigo: `// Selecciona el primer elemento que coincida
const elemento = document.querySelector('.mi-clase p:first-child');

// Selecciona TODOS los elementos que coincidan
const elementos = document.querySelectorAll('.mi-clase p'); // Devuelve NodeList estática`
        },
        {
          titulo: "Búsquedas Acotadas",
          contenido: "No es necesario buscar siempre en `document`. Puedes buscar dentro de un elemento específico para limitar el alcance.",
          codigo: `const container = document.getElementById('container');

// Busca un párrafo SOLO dentro de 'container'
const parrafo = container.querySelector('p');`
        },
        {
          titulo: "HTMLCollection vs NodeList",
          contenido: "Ambos son colecciones de nodos, pero tienen diferencias críticas.",
          puntosClave: [
            "**HTMLCollection**: Colección **'viva'** (se actualiza automáticamente si cambia el DOM). Solo contiene elementos HTML. Retornada por `getElementsByClassName` y `tagName`.",
            "**Acceso en HTMLCollection**: Además del índice numérico, permite acceder a los elementos por su `id` o `name` como si fueran propiedades del objeto (ej: `coleccion['miId']`).",
            "**NodeList**: Generalmente **estática** (excepto `getElementsByName`). Es una 'foto' del momento en que se hizo la consulta. Retornada por `querySelectorAll`.",
            "**Iteración**: `NodeList` tiene `forEach` nativo. `HTMLCollection` NO.",
            "**Recomendación**: Para usar métodos de Array (`map`, `filter`, `reduce`), convierte la colección usando el **Spread Operator** `[...coleccion]`."
          ],
          codigo: `const collection = document.getElementsByTagName('p');
const nodes = document.querySelectorAll('p');

// Acceso por ID en HTMLCollection
// Si hay un <p id="intro">, existe collection.intro o collection['intro']

// Convertir a Array real
const arrayFromCollection = [...collection];
const arrayFromNodes = [...nodes];

// Ahora sí podemos usar map
arrayFromCollection.map(p => p.textContent);`
        }
      ]
    },
    {
      id: 21,
      titulo: "Creación de Elementos",
      descripcion: "Descubre cómo generar nuevo contenido HTML dinámicamente desde JavaScript.",
      temas: [
        {
          titulo: "¿Qué es un Nodo?",
          contenido: "Un **Nodo** es la unidad indivisible más básica del DOM. El DOM es un árbol jerárquico y cada punto de conexión en ese árbol es un nodo. Las etiquetas HTML, el texto dentro de ellas, los comentarios e incluso el archivo en sí, son todos nodos que forman esta estructura.",
          nota: "A menudo confundimos 'Nodo' con 'Elemento' (Etiqueta), pero el concepto de Nodo es más amplio: un Elemento es solo un tipo de Nodo.",
          codigo: `<!-- HTML Simple -->
<div id="padre">
  Hola Mundo
</div>

<!-- Estructura de Nodos real -->
1. Element Node: <div> (padre)
2. Text Node: "Salto de línea + espacios" (entre div y Hola)
3. Text Node: "Hola Mundo"
4. Text Node: "Salto de línea" (después de Hola)`
        },
        {
          titulo: "Tipos de Nodos",
          contenido: "El DOM tiene diferentes tipos de nodos. Los más comunes son Elementos (etiquetas) y Nodos de Texto.",
          puntosClave: [
            "**Element Node**: Etiquetas HTML (`div`, `p`, `span`).",
            "**Text Node**: Contenido textual dentro de las etiquetas.",
            "**Comment Node**: Comentarios HTML."
          ]
        },
        {
          titulo: "Creación de Nodos",
          contenido: "Métodos para instanciar nuevos nodos en memoria (aún no visibles en el DOM).",
          codigo: `// Crear un elemento HTML (Element Node)
const div = document.createElement('div');

// Crear un nodo de texto (Text Node)
const texto = document.createTextNode('Hola Mundo');

// Crear un comentario (Comment Node)
const comentario = document.createComment('Esto es un comentario');

// Fragmento de Documento (Mejora rendimiento)
// Permite agregar múltiples elementos en memoria y luego insertarlos de una vez
// Evita múltiples 'reflows' y 'repaints' del navegador, mejorando la velocidad
const fragment = document.createDocumentFragment();`
        },
        {
          titulo: "Clonar Nodos",
          contenido: "Podemos duplicar nodos existentes con `cloneNode`. Es importante entender la copia superficial vs profunda.",
          codigo: `const original = document.getElementById('mi-div');

// false (default): Clona solo el nodo (sin hijos ni texto)
const copiaSimple = original.cloneNode(false);

// true: Clona el nodo y todos sus descendientes (profundo)
const copiaProfunda = original.cloneNode(true);`
        },
        {
          titulo: "Propiedad isConnected",
          contenido: "Nos permite saber si un nodo está actualmente conectado al DOM visible del documento.",
          codigo: `const div = document.createElement('div');
console.log(div.isConnected); // false

document.body.appendChild(div);
console.log(div.isConnected); // true`
        },
        {
          titulo: "Añadir Contenido y Conectar",
          contenido: "Formas de introducir contenido en los elementos.",
          puntosClave: [
            "`textContent`: Modifica el texto plano. **Sobreescribe** el contenido anterior. **Seguro** (no interpreta HTML).",
            "`innerHTML`: Modifica el HTML interno (parsea etiquetas). **Sobreescribe** el contenido anterior. **Cuidado** con XSS.",
            "`appendChild(nodo)`: Añade un nodo como último hijo de otro nodo. No sobreescribe, solo añade."
          ],
          codigo: `const p = document.createElement('p');

// Opción 1: Text Content (Recomendado para texto. Sobreescribe.)
p.textContent = "Hola <strong>Mundo</strong>"; // Se ve literal: Hola <strong>Mundo</strong>

// Opción 2: Inner HTML (Si necesitas renderizar etiquetas. Sobreescribe.)
p.innerHTML = "Hola <strong>Mundo</strong>"; // Se ve: Hola Mundo (en negrita)

// Opción 3: Crear Text Node y apendizar (Más verborrágico. NO sobreescribe, añade al final)
const texto = document.createTextNode("Hola Mundo");
p.appendChild(texto);`
        }
      ]
    },
    {
      id: 22,
      titulo: "Gestión de Atributos",
      descripcion: "Aprende a leer y modificar los atributos HTML estándar y personalizados.",
      temas: [
        {
          titulo: "Atributos vs Propiedades",
          contenido: "Los atributos HTML (iniciales) y las propiedades del objeto DOM (actuales) suelen estar sincronizados, pero no siempre. Los atributos básicos (`id`, `src`, `href`) suelen tener propiedades directas.",
          nota: "¡Cuidado! `class` es una palabra reservada en JS, por eso la propiedad se llama `className`."
        },
        {
          titulo: "Acceso Directo (Propiedades)",
          contenido: "Forma rápida de acceder a atributos estándar.",
          codigo: `const img = document.querySelector('img');
img.src = 'nuevo.jpg';
img.className = 'mi-clase'; // NO img.class
img.style.color = 'red';`
        },
        {
          titulo: "API Genérica de Atributos",
          contenido: "Métodos para trabajar con cualquier atributo (estándar o no estándar). Siempre manejan **strings**.",
          puntosClave: [
            "`hasAttribute('name')`: Devuelve `true`/`false`.",
            "`hasAttributes()`: Devuelve `true` si tiene algún atributo.",
            "`getAttribute('name')`: Obtiene el valor (o `null`).",
            "`getAttributeNames()`: Devuelve array con nombres de atributos.",
            "`setAttribute('name', 'value')`: Establece el valor (convierte a string).",
            "`removeAttribute('name')`: Elimina el atributo por completo.",
            "`toggleAttribute('name')`: Añade si no existe, quita si existe."
          ],
          codigo: `const div = document.querySelector('div');

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
div.toggleAttribute('disabled'); // Lo pone si no está, lo quita si está`
        },
        {
          titulo: "Atributos Booleanos (Bool vs String)",
          contenido: "Atributos como `checked`, `disabled`, `required`. En HTML la sola presencia indica `true`.",
          nota: "Usar `setAttribute('disabled', false)` establecerá `disabled='false'` que en HTML funciona como `true` (porque el atributo existe).",
          codigo: `const input = document.querySelector('input');

// MAL SI QUIERES DESACTIVARLO USANDO setAttribute
// input.setAttribute('disabled', false); // Crea disabled="false", el input sigue deshabilitado

// BIEN: Usar propiedades directas
input.disabled = false; 

// BIEN: Usar removeAttribute
input.removeAttribute('disabled');

// BIEN: Usar toggleAttribute
input.toggleAttribute('disabled', false); // Fuerza a quitarlo`
        }
      ]
    },
    {
      id: 23,
      titulo: "API classList y dataset",
      descripcion: "Formas modernas y eficientes de manejar clases CSS y datos personalizados.",
      temas: [
        {
          titulo: "classList vs className",
          contenido: "`className` maneja todo el string de clases (ineficiente para modificar una sola). `classList` ofrece una API potente (`DOMTokenList`).",
          codigo: `const div = document.querySelector('div');

// Añadir
div.classList.add('activa', 'visible');

// Eliminar
div.classList.remove('oculta');

// Alternar (Toggle)
div.classList.toggle('seleccionada'); // Si está la quita, si no, la pone
div.classList.toggle('seleccionada', true); // Fuerza a ponerla

// Comprobar
if (div.classList.contains('activa')) { ... }

// Reemplazar
div.classList.replace('vieja-clase', 'nueva-clase');`
        },
        {
          titulo: "Data Attributes (dataset)",
          contenido: "Permite almacenar datos personalizados en elementos HTML usando atributos `data-*`. Útil para lógica JS invisible al usuario.",
          codigo: `<!-- HTML -->
<div id="user" data-user-id="123" data-role-admin="true" data-peso-kilogramo="80"></div>`
        },
        {
          titulo: "Uso de dataset en JS",
          contenido: "Se accede mediante la propiedad `dataset`. Las claves se convierten automáticamente de kebab-case a **camelCase**.",
          puntosClave: [
            "`data-user-id` -> `dataset.userId`",
            "`data-peso-kilogramo` -> `dataset.pesoKilogramo`",
            "Para eliminar un data attribute, usa `removeAttribute('data-nombre')` (Setear a string vacío o null no lo elimina del HTML)."
          ],
          codigo: `const user = document.getElementById('user');

// Leer
console.log(user.dataset.userId); // "123"
console.log(user.dataset.pesoKilogramo); // "80"

// Escribir
user.dataset.lastLogin = "2023-01-01"; // Crea atributo data-last-login`
        }
      ]
    },
    {
      id: 24,
      titulo: "Insertar y Navegar por el DOM",
      descripcion: "Domina tanto la API heredada (nodos) como la API moderna (elementos) para moverte y modificar el árbol.",
      temas: [
        {
          titulo: "Lectura de Contenido: Diferencias",
          contenido: "No es lo mismo leer el texto del HTML que leer el texto renderizado.",
          puntosClave: [
            "`textContent`: Devuelve **todo** el texto, incluyendo el de elementos ocultos con CSS. (El más rápido)",
            "`innerText`: Devuelve solo el texto **visible** (respeta `display: none`). Es más costoso porque requiere calcular estilos.",
            "`innerHTML`: Devuelve string HTML. **Peligroso** con input de usuario (XSS). Sobreescribe contenido.",
            "`setHTML()` (Experimental): Propuesta para insertar HTML de forma segura (sanitizando scripts).",
            "`outerHTML`: Igual que innerHTML pero incluye la propia etiqueta contenedora."
          ]
        },
        {
          titulo: "API de Inserción de Nodos (Clásica)",
          contenido: "Métodos que operan sobre nodos. Requieren referencia al padre e hijo.",
          codigo: `// Padre.metodo(Hijo)
padre.appendChild(nodo); // Añade al final
padre.removeChild(nodo); // Elimina hijo
padre.replaceChild(nuevo, viejo); // Reemplaza
padre.insertBefore(nuevo, referencia); // Inserta antes de referencia`
        },
        {
          titulo: "API de Inserción de Elementos (Moderna)",
          contenido: "Métodos más flexibles y directos. Permiten insertar múltiples nodos o texto.",
          codigo: `const el = document.querySelector('.elemento');
const nuevo = document.createElement('div');

el.before(nuevo); // Inserta hermano anterior
el.after(nuevo);  // Inserta hermano siguiente
el.prepend(nuevo);// Inserta primer hijo
el.append(nuevo); // Inserta último hijo
el.replaceChildren(nuevo); // Elimina todos los hijos y pone el nuevo

el.replaceWith(nuevo); // Se sustituye a sí mismo
el.remove(); // Se auto-elimina`
        },
        {
          titulo: "Inserción Adyacente (Potente)",
          contenido: "Permite control preciso de la posición.",
          codigo: `// Insertar Elemento
div.insertAdjacentElement('beforebegin', el); // Antes de abrir etiqueta
div.insertAdjacentElement('afterbegin', el);  // Primer hijo
div.insertAdjacentElement('beforeend', el);   // Último hijo
div.insertAdjacentElement('afterend', el);    // Después de cerrar etiqueta

// Insertar HTML (Parsing)
div.insertAdjacentHTML('beforeend', '<p>Hola</p>');

// Insertar Texto
div.insertAdjacentText('afterbegin', 'Texto');`
        },
        {
          titulo: "Navegación: Nodos vs Elementos",
          contenido: "Es vital distinguir si navegamos por nodos (incluye texto/espacios) o elementos (solo etiquetas).",
          puntosClave: [
            "**Hijos**: `childNodes` (Nodos, incluye saltos de línea) vs `children` (Solo Elementos).",
            "**Primero**: `firstChild` vs `firstElementChild`.",
            "**Último**: `lastChild` vs `lastElementChild`.",
            "**Hermanos**: `nextSibling` vs `nextElementSibling`.",
            "**Padre**: `parentNode` vs `parentElement`."
          ],
          codigo: `// El espacio entre <div> y <p> en tu editor es un TextNode #text
// <div>
//   <p>...</p>
// </div>

div.firstChild; // Probablemente sea el nodo de texto (salto de línea)
div.firstElementChild; // Es el <p>`
        }
      ]
    },
    {
      id: 25,
      titulo: "Ejercicios Resueltos",
      descripcion: "Colección de ejercicios prácticos de selección y manipulación del DOM resueltos en clase.",
      temas: [
        {
          titulo: "Ejercicios 1-10: Selección Básica y Modificación",
          contenido: "Ejercicios introductorios para asentar bases.",
          codigos: [
            {
              titulo: "1. Primer Párrafo y Texto",
              descripcion: "Selecciona el primer P y cambia su texto.",
              codigo: `const p = document.getElementsByTagName('p')[0];
p.textContent = 'Hola, ¿qué tal?';`
            },
            {
              titulo: "2. Modificar atributo href",
              descripcion: "Cambia el enlace del segundo link del primer párrafo.",
              codigo: `const p = document.getElementsByTagName('p')[0];
// Buscamos enlaces DENTRO del párrafo
const enlaces = p.getElementsByTagName('a');
// Segundo enlace (índice 1)
enlaces[1].setAttribute('href', 'http://www.google.com');`
            },
            {
              titulo: "3. Penúltimo hijo",
              descripcion: "Selecciona el penúltimo hijo de #mi-lista.",
              codigo: `const lista = document.getElementById('mi-lista');
const hijos = lista.children;
// Penúltimo es length - 2
const penultimo = hijos[hijos.length - 2];`
            },
            {
              titulo: "4. Desactivar clase",
              descripcion: "Elimina el atributo class del último P.",
              codigo: `const parrafos = document.getElementsByTagName('p');
const ultimoP = parrafos[parrafos.length - 1];
ultimoP.removeAttribute('class');`
            },
            {
              titulo: "5. Crear e Insertar H3",
              descripcion: "Crea un H3 y añádelo al final del body.",
              codigo: `const h3 = document.createElement('h3');
h3.textContent = 'Hola, soy un nuevo h3';
document.body.appendChild(h3);`
            }
          ]
        },
        {
          titulo: "Ejercicios 6-15: Creación y Manipulación",
          contenido: "Ejercicios de nivel intermedio combinando creación y lógica.",
          codigos: [
            {
              titulo: "6. Añadir SPAN a H3",
              descripcion: "Al H3 anterior, añádele un SPAN dentro.",
              codigo: `const span = document.createElement('span');
span.textContent = ' soy nuevo';
h3.appendChild(span); 
// Ojo: si h3 ya está en el DOM, se actualiza visualmente`
            },
            {
              titulo: "7. Enlace en segundo P",
              descripcion: "Añade un enlace al segundo párrafo.",
              codigo: `const segundoP = document.getElementsByTagName('p')[1];
const link = document.createElement('a');
link.href = '...';
link.textContent = 'aquí';
segundoP.appendChild(link);`
            },
            {
              titulo: "8. Eliminar P con clase",
              descripcion: "Elimina los P dentro de .hero que tengan atributo class.",
              codigo: `const parrafosHero = document.querySelectorAll('.hero p');
for(let p of parrafosHero) {
  if (p.hasAttribute('class')) {
    p.remove();
  }
}`
            },
            {
              titulo: "9. Último hijo de body",
              descripcion: "Selecciona el último elemento hijo de body.",
              codigo: `const ultimo = document.body.lastElementChild;
console.log(ultimo); // Suele ser el script`
            },
            {
              titulo: "10. Hermano siguiente",
              descripcion: "Siguiente elemento hermano del primer P.",
              codigo: `const primerP = document.querySelector('p');
const siguiente = primerP.nextElementSibling;`
            },
            {
              titulo: "11. Borrar último de body",
              descripcion: "Elimina el último elemento del body.",
              codigo: `document.body.lastElementChild.remove();`
            },
            {
              titulo: "12. Cambiar SRC condicional",
              descripcion: "Cambia el SRC de imágenes que valgan 'cambiame'.",
              codigo: `const imgs = document.getElementsByTagName('img');
for(let img of imgs) {
  if(img.getAttribute('src') === 'cambiame') {
    img.setAttribute('src', 'cambiado');
  }
}`
            }
          ]
        },
        {
          titulo: "Ejercicios 13-22: Avanzados",
          contenido: "Ejercicios con selectores avanzados, lógica y navegación.",
          codigos: [
            {
              titulo: "13. Añadir clase (sin borrar)",
              descripcion: "Añade una clase al primer P (sin usar setAttribute para no borrar las existentes).",
              codigo: `const p = document.querySelector('p');
p.classList.add('clase-ejemplo');`
            },
            {
              titulo: "14. Insertar condicional en lista",
              descripcion: "En ULs con exactamente 2 LIs, añade un tercero.",
              codigo: `const listas = document.getElementsByTagName('ul');
for(let ul of listas) {
  if (ul.children.length === 2) {
    const li = document.createElement('li');
    li.textContent = 'Tercer elemento';
    ul.appendChild(li);
  }
}`
            },
            {
              titulo: "15. Padre del primer P",
              descripcion: "Obtén el elemento padre del primer párrafo.",
              codigo: `const p = document.querySelector('p');
const padre = p.parentElement;`
            },
            {
              titulo: "16. Hermano anterior",
              descripcion: "Hermano elemento anterior del primer P.",
              codigo: `const p = document.querySelector('p');
const previo = p.previousElementSibling;`
            },
            {
              titulo: "17. Background rojo",
              descripcion: "Primer div con clase .container a rojo con style.",
              codigo: `const div = document.querySelector('div.container');
div.style.backgroundColor = 'red';`
            },
            {
              titulo: "18. Reemplazar contenido P",
              descripcion: "P con ID 'text', ponle un enlace dentro (reemplazando contenido).",
              codigo: `const p = document.getElementById('text');
p.innerHTML = '<a href="google.com">Google</a>';`
            },
            {
              titulo: "19. Divs Eustaquio",
              descripcion: "Selecciona todos los divs con clase 'eustaquio'.",
              codigo: `const divs = document.querySelectorAll('div.eustaquio');`
            },
            {
              titulo: "20. P con ID Paisa",
              descripcion: "Selecciona el párrafo con ID 'paisa'.",
              codigo: `const p = document.getElementById('paisa');`
            },
            {
              titulo: "21. Primer párrafo hijo de un Div",
              descripcion: "Selecciona el primer párrafo que sea hijo directo de un div.",
              codigo: `const p = document.querySelector('div > p');`
            },
            {
              titulo: "22. Penúltimo enlace",
              descripcion: "Selecciona el penúltimo enlace de la página.",
              codigo: `const enlaces = document.getElementsByTagName('a');
const penultimo = enlaces[enlaces.length - 2];`
            }
          ]
        }
      ]
    }
  ]
};
