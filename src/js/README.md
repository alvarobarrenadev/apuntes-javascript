# Estructura de Archivos JavaScript

Esta carpeta contiene toda la lógica JavaScript del proyecto de Apuntes JS.

## Estructura

```
src/js/
├── main.js              # Entry point global (si se necesita)
├── data/
│   ├── index.js         # Registro centralizado de módulos
│   └── modulo-1.js      # Datos del Módulo 1 (clases, temas, contenido)
├── modules/
│   ├── theme.js         # Lógica del tema claro/oscuro
│   └── renderer.js      # Renderizador unificado de clases
└── pages/
    ├── clase.js         # Controlador único para TODAS las páginas de clase
    └── modulo-index.js  # Controlador único para TODOS los índices de módulo
```

## Cómo funciona

### Sistema basado en atributos HTML

En lugar de crear un archivo JS por cada clase (lo cual no escala), usamos **atributos data-** en el HTML:

```html
<!-- Página de clase -->
<main class="lesson-page" data-modulo="1" data-clase="3">
  ...
</main>
<script type="module" src="/src/js/pages/clase.js"></script>

<!-- Página de índice de módulo -->
<main class="module-page" data-modulo="1">
  ...
</main>
<script type="module" src="/src/js/pages/modulo-index.js"></script>
```

### El archivo `clase.js` lee estos atributos y renderiza el contenido correspondiente.

## Añadir una nueva clase

Para añadir la **Clase 4** del Módulo 1:

1. **Añade los datos** en `data/modulo-1.js`:
   ```js
   {
     id: 4,
     titulo: "Nueva Clase",
     temas: [...]
   }
   ```

2. **Crea el HTML** en `src/pages/modulo-1/clase-4.html`:
   ```html
   <main class="lesson-page" data-modulo="1" data-clase="4">
   ```
   
   Y usa el mismo script:
   ```html
   <script type="module" src="/src/js/pages/clase.js"></script>
   ```

**¡Listo!** No necesitas crear ningún archivo JS adicional.

## Añadir un nuevo módulo

Para añadir el **Módulo 2**:

1. **Crea el archivo de datos** `data/modulo-2.js` siguiendo la estructura de `modulo-1.js`

2. **Registra el módulo** en `data/index.js`:
   ```js
   import { modulo2Data } from './modulo-2.js';
   
   export const modulos = {
     1: modulo1Data,
     2: modulo2Data,  // ← Añadir aquí
   };
   ```

3. **Crea las páginas HTML** con los atributos correspondientes:
   - `src/pages/modulo-2/index.html` → `data-modulo="2"`
   - `src/pages/modulo-2/clase-1.html` → `data-modulo="2" data-clase="1"`

## Archivos de datos

Los archivos de datos (`modulo-X.js`) contienen:
- Título y descripción del módulo
- Array de clases con:
  - ID, título, duración
  - Array de temas con todo el contenido

El renderizador procesa estos datos y genera el HTML dinámicamente.
