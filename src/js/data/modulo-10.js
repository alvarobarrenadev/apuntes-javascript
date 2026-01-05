export const modulo10Data = {
  titulo: "Comunicación con el Servidor",
  descripcion: "Aprende a comunicarte con servidores externos usando Fetch API, domina JSON y simplifica tu código asíncrono con Async/Await.",
  icono: "fa-globe",
  clases: [
    {
      id: 39,
      titulo: "Introducción a APIs, Fetch y Async/Await",
      descripcion: "Comprende qué es una API, cómo intercambiar datos con JSON y utiliza Fetch y Async/Await para realizar peticiones HTTP.",
      temas: [
        {
          titulo: "¿Qué es una API?",
          contenido: "Una API (Application Programming Interface) es un intermediario que permite que dos sistemas se comuniquen. En el desarrollo web, las usamos para obtener o enviar datos a un servidor sin recargar la página.",
          puntosClave: [
            "**Intercambio de datos**: Permite conectar tu frontend con un backend o servicios de terceros.",
            "**JSON**: Formato estándar de intercambio datos. Es texto plano con sintaxis de objeto JS (claves con comillas).",
            "**Verbos HTTP**: Definen la acción a realizar: GET (consultar), POST (crear), PUT (modificar), DELETE (borrar)."
          ]
        },
        {
          titulo: "La función fetch()",
          contenido: "`fetch` es la API nativa de JavaScript para realizar peticiones HTTP. Devuelve siempre una **Promesa**.",
          puntosClave: [
            "**Parámetros**: Recibe la URL obligatoria y un objeto de opciones opcional.",
            "**Respuesta**: Devuelve una promesa que resuelve en un objeto `Response`.",
            "**¡Ojo!**: Fetch solo rechaza la promesa por errores de red. Un 404 o 500 se considera éxito en la promesa (hay que validar `response.ok`)."
          ],
          codigo: `// Petición básica GET
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) throw new Error("Error HTTP: " + response.status);
    return response.json(); // Extraer cuerpo JSON
  })
  .then(data => console.log(data))
  .catch(err => console.error(err));`
        },
        {
          titulo: "Async / Await",
          contenido: "`async` y `await` son 'sugar syntax' sobre las promesas. Nos permiten escribir código asíncrono que se lee como si fuera síncrono, evitando el encadenamiento excesivo de `.then()`.",
          puntosClave: [
            "**async**: Marca una función como asíncrona. Siempre devuelve una promesa.",
            "**await**: Pausa la ejecución de la función hasta que la promesa se resuelve.",
            "**Manejo de errores**: Al no tener `.catch()`, usamos bloques `try...catch`."
          ],
          codigo: `const obtenerUsuario = async (id) => {
  try {
    const response = await fetch(\`https://jsonplaceholder.typicode.com/users/\${id}\`);
    
    if (!response.ok) throw new Error("No encontrado");
    
    const user = await response.json();
    return user;
  } catch (error) {
    console.error("Falló la petición:", error);
  }
};

obtenerUsuario(1);`
        },
        {
          titulo: "Ejemplo: Encadenamiento con Async/Await",
          contenido: "Resolver la dependencia de datos (usar datos de una petición en la siguiente) es trivial con async/await.",
          codigo: `const getCochesDelMismoAnio = async () => {
  // 1. Obtener primer coche
  const response1 = await fetch('https://api.ejemplo.com/coches/1');
  const coche1 = await response1.json();
  const anio = coche1.modelYear; // ej: 2002

  // 2. Obtener todos los coches usando el dato anterior
  const response2 = await fetch(\`https://api.ejemplo.com/coches?year=\${anio}\`);
  const coches = await response2.json();
  
  console.log(\`Coches del año \${anio}:\`, coches);
};`
        }
      ]
    },
    {
      id: 40,
      titulo: "Nuestro primer POST con Fetch",
      descripcion: "Aprende a enviar datos al servidor utilizando el verbo HTTP POST, gestionando cabeceras y cuerpo de la petición.",
      temas: [
        {
          titulo: "Peticiones POST",
          contenido: "Para enviar datos (crear recursos), necesitamos especificar el método, las cabeceras y el cuerpo en la función `fetch`.",
          puntosClave: [
            "**method**: 'POST'",
            "**headers**: Especificar `'Content-type': 'application/json'` para avisar al servidor que enviamos JSON.",
            "**body**: Los datos deben ir como string JSON (`JSON.stringify`)."
          ],
          codigo: `const crearTarea = async (nuevaTarea) => {
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
});`
        },
        {
          titulo: "Formularios y Fetch",
          contenido: "Lo más común es recoger datos de un formulario HTML y enviarlos mediante Fetch al detectar el evento `submit`. Es crucial usar `event.preventDefault()` para evitar la recarga de página.",
          codigo: `formulario.addEventListener('submit', async (e) => {
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
});`
        },
        {
          titulo: "Cargar datos dinámicos en formularios",
          contenido: "Podemos combinar GET y POST: primero hacemos un GET de usuarios para llenar un `<select>`, y luego usamos ese valor seleccionado para el POST de la nueva tarea.",
          codigo: `// 1. Obtener usuarios y llenar select
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

cargarUsuarios(); // Se ejecuta al cargar la página`
        }
      ]
    },
    {
      id: 41,
      titulo: "¿Qué es JWT? Autenticación y Autorización",
      descripcion: "Diferencia entre autenticación y autorización, y descubre cómo funciona el estándar JSON Web Token (JWT) para asegurar aplicaciones sin estado.",
      temas: [
        {
          titulo: "Autenticación vs Autorización",
          contenido: "Es vital diferenciar estos dos conceptos:",
          puntosClave: [
            "**Autenticación**: ¿Quién eres? (Identificación, el 'DNI').",
            "**Autorización**: ¿Qué permisos tienes? (¿Puedes entrar a esta habitación?)."
          ]
        },
        {
          titulo: "Sesiones (Cookies) vs Tokens (JWT)",
          contenido: "Existen dos modelos principales de autenticación web:",
          puntosClave: [
            "**Sesiones**: El servidor guarda el estado (Session ID). El cliente envía una Cookie. Es stateful (con estado). Difícil de escalar en microservicios.",
            "**Tokens (JWT)**: El estado viaja en el token firmado digitalmente. El servidor es stateless (no guarda nada, solo verifica la firma). Ideal para microservicios y APIs REST."
          ]
        },
        {
          titulo: "Estructura de un JWT",
          contenido: "Un JSON Web Token es un string dividido en tres partes separadas por puntos:",
          puntosClave: [
            "**Header**: Algoritmo de encriptación y tipo (JWT).",
            "**Payload**: Datos del usuario (id, nombre, roles). ¡No guardar información sensible como contraseñas!",
            "**Signature**: Firma creada con el Header, Payload y un 'Secreto' del servidor. Garantiza que el token no ha sido modificado."
          ]
        },
        {
          titulo: "Ejemplo de Login con JWT",
          contenido: "Flujo típico: Enviar credenciales (POST) -> Recibir Token -> Guardar Token -> Enviar Token en cabeceras futuras.",
          codigo: `// 1. Login para obtener el token
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
};`
        }
      ]
    },
    {
      id: 42,
      titulo: "Proyecto Final: CRUD Completo en Vanilla JS",
      descripcion: "Aplica todo lo aprendido construyendo una aplicación de gestión de usuarios (CRUD) desde cero, separando lógica de API, manejo del DOM y eventos.",
      temas: [
        {
          titulo: "Configuración y Estructura",
          contenido: "Utilizamos Vite con el template Vanilla y Yarn. Separamos el código en `api.js` (lógica de red) y `crud.js` (lógica de DOM), manteniendo un `main.js` limpio que solo importa e inicializa.",
          puntosClave: [
            "**Yarn vs NPM**: Preferencia por Yarn por velocidad y paralelismo.",
            "**CSS**: Estilos básicos normalizados y uso de Flexbox para centrar la aplicación.",
            "**Separación de Intereses**: `api.js` para fetch, `crud.js` para el DOM."
          ]
        },
        {
          titulo: "Capa de API (api.js)",
          contenido: "Centralizamos las peticiones. Destaca la función `saveUser`, una refactorización inteligente que decide si crear (POST) o editar (PUT) según si el usuario tiene ID.",
          codigo: `const API_URL = 'https://jsonplaceholder.typicode.com/users';

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
};`
        },
        {
          titulo: "Lógica de UI (crud.js)",
          contenido: "Manejamos el estado de edición (`editingId`) y usamos delegación de eventos. Un detalle interesante es cómo poblamos el formulario al editar leyendo los datos directamente del DOM.",
          codigo: `import { getUsers, deleteUser, saveUser } from './api.js';

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
});`
        }
      ]
    }
  ]
};
