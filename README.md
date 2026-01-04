# Apuntes JavaScript

Aplicación web de apuntes del curso de JavaScript de ConquerBlocks. Incluye notas organizadas por módulos, temas y clases con ejemplos de código interactivos.

## Inicio rápido

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Construir para producción
npm run build

# Previsualizar build
npm run preview

# Desplegar en GitHub Pages
npm run deploy
```

## Estructura del proyecto

```
apuntes-javascript/
├── index.html              # Página principal
├── vite.config.js          # Configuración de Vite
├── src/
│   ├── js/                 # Lógica JavaScript
│   │   ├── data/           # Datos de contenido por módulo
│   │   ├── modules/        # Utilidades (theme, renderer)
│   │   └── pages/          # Controladores de páginas
│   ├── pages/              # Páginas HTML por módulo
│   └── sass/               # Estilos SASS (arquitectura 7-1)
└── transcripciones-1/      # Transcripciones de clases (referencia)
```

---

## Estructura JavaScript

```
src/js/
├── main.js              # Entry point global
├── data/
│   ├── index.js         # Registro centralizado de módulos
│   └── modulo-1.js      # Datos del Módulo 1 (clases, temas, contenido)
├── modules/
│   ├── theme.js         # Lógica del tema claro/oscuro
│   └── renderer.js      # Renderizador unificado de clases
└── pages/
    ├── clase.js         # Controlador único para TODAS las clases
    └── modulo-index.js  # Controlador único para TODOS los índices
```

### Sistema basado en atributos HTML

En lugar de crear un archivo JS por cada clase, usamos **atributos data-** en el HTML:

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

El archivo `clase.js` lee estos atributos y renderiza el contenido correspondiente.

---

## Añadir contenido nuevo

### Añadir una nueva clase

Para añadir la **Clase 4** del Módulo 1:

1. **Añade los datos** en `src/js/data/modulo-1.js`:
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

No necesitas crear ningún archivo JS adicional.

### Añadir un nuevo módulo

Para añadir el **Módulo 2**:

1. **Crea el archivo de datos** `src/js/data/modulo-2.js` siguiendo la estructura de `modulo-1.js`

2. **Registra el módulo** en `src/js/data/index.js`:
   ```js
   import { modulo2Data } from './modulo-2.js';
   
   export const modulos = {
     1: modulo1Data,
     2: modulo2Data,  // Añadir aquí
   };
   ```

3. **Crea las páginas HTML** con los atributos correspondientes:
   - `src/pages/modulo-2/index.html` con `data-modulo="2"`
   - `src/pages/modulo-2/clase-1.html` con `data-modulo="2" data-clase="1"`

---

## Estructura SASS

Estilos organizados siguiendo la arquitectura **7-1 Pattern**:

```
src/sass/
├── abstracts/          # Variables, funciones, mixins
│   ├── _variables.scss # Breakpoints, fuentes, layout
│   ├── _functions.scss # Funciones personalizadas
│   └── _mixins.scss    # Mixins reutilizables
│
├── base/               # Estilos base y reset
│   ├── _reset.scss     # Reset CSS
│   ├── _typography.scss
│   └── _utilities.scss # Clases de utilidad
│
├── components/         # Componentes reutilizables
│   ├── _buttons.scss
│   ├── _cards.scss
│   ├── _content-blocks.scss
│   └── _tables.scss
│
├── layout/             # Estructura de la página
│   ├── _header.scss
│   ├── _grid.scss
│   └── _footer.scss
│
├── themes/             # Temas (dark/light)
│   └── _default.scss   # Variables CSS
│
└── main.scss           # Importa todo
```

### Convenciones

- **Archivos parciales**: Comienzan con `_` (underscore)
- **BEM**: Metodología para nombrar clases
- **Variables CSS**: Para temas dinámicos (`--variable`)
- **Variables SASS**: Para valores estáticos

---

## Tecnologías

- **Vite** - Bundler y servidor de desarrollo
- **SASS** - Preprocesador CSS
- **Vanilla JS** - Sin frameworks
- **Font Awesome** - Iconos
- **Google Fonts** - Inter + JetBrains Mono

---

## Despliegue

### GitHub Pages

El proyecto está configurado para desplegarse en GitHub Pages con el base path `/apuntes-javascript/`.

```bash
npm run build
npm run deploy
```

### Vercel / Netlify

Para desplegar en Vercel o Netlify, cambia el `base` en `vite.config.js` a `/`.

---

## Licencia

Este proyecto es para uso educativo personal.