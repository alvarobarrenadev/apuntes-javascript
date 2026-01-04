# Estructura SASS

Esta carpeta contiene todos los estilos del proyecto organizados siguiendo la arquitectura **7-1 Pattern**.

## Estructura de Carpetas

```
sass/
├── abstracts/          # Variables, funciones, mixins, placeholders
│   ├── _variables.scss # Variables SASS (breakpoints, fuentes, layout)
│   ├── _functions.scss # Funciones personalizadas
│   ├── _mixins.scss    # Mixins reutilizables
│   └── _placeholders.scss
│
├── base/               # Estilos base y reset
│   ├── _reset.scss     # Reset CSS y estilos del body
│   ├── _typography.scss # Tipografía
│   ├── _animations.scss # Animaciones globales
│   ├── _utilities.scss  # Clases de utilidad (.hidden, .sr-only)
│   └── _responsive.scss # Media queries globales
│
├── components/         # Componentes reutilizables
│   ├── _buttons.scss   # Estilos de botones
│   ├── _hero.scss      # Hero section con efecto glow
│   └── _cards.scss     # Tarjetas de módulos
│
├── layout/             # Estructura de la página
│   ├── _header.scss    # Header, brand, btn-icon
│   ├── _grid.scss      # Main container y modules-grid
│   ├── _footer.scss    # Footer
│   ├── _navbar.scss    # Navegación
│   ├── _sidebar.scss   # Sidebar
│   └── _forms.scss     # Formularios
│
├── pages/              # Estilos específicos de páginas
│
├── themes/             # Temas (dark/light)
│   └── _default.scss   # Variables CSS (:root y [data-theme="light"])
│
├── vendors/            # Librerías externas
│
├── _settings.scss      # Configuración del proyecto
└── main.scss           # Archivo principal que importa todo
```

## Organización de Estilos

### Del archivo `styles.css` original:

| **Sección CSS Original** | **Archivo SASS** | **Descripción** |
|--------------------------|------------------|-----------------|
| Variables & Theme (`:root`, `[data-theme="light"]`) | `themes/_default.scss` | Variables CSS personalizadas para temas |
| Variables SASS | `abstracts/_variables.scss` | Breakpoints, fuentes, layout, configuración |
| Reset & Base (`*`, `body`) | `base/_reset.scss` | Reset CSS y estilos base del body |
| Header, Brand, Logo | `layout/_header.scss` | Header fijo, branding, botones icon |
| Main Container | `layout/_grid.scss` | Contenedor principal y grid de módulos |
| Hero Section | `components/_hero.scss` | Hero con efecto glow y texto |
| Module Cards | `components/_cards.scss` | Tarjetas con hover effects |
| Utilities (`.hidden`) | `base/_utilities.scss` | Clases de utilidad |
| Responsive | `base/_responsive.scss` | Media queries para móviles |

## Uso

El archivo `main.scss` importa todos los parciales en el orden correcto:

```scss
@use '@abstracts/abstracts';
@use '@base/base';
@use '@components/components';
@use '@layout/layout';
@use '@pages/pages';
@use '@themes/themes';
@use '@vendors/vendors';
@use 'settings';
```

## Convenciones

- **Archivos parciales**: Todos los archivos SASS comienzan con `_` (underscore)
- **Archivos índice**: Cada carpeta tiene un archivo índice que hace `@forward` de sus parciales
- **Comentarios**: Cada sección está bien documentada con comentarios
- **BEM**: Se recomienda usar metodología BEM para nombrar clases
- **Variables CSS**: Se usan custom properties (`--variable`) para temas dinámicos
- **Variables SASS**: Se usan para valores estáticos y configuración

## Variables Principales

### Variables SASS (`abstracts/_variables.scss`)
- Breakpoints responsivos
- Fuentes del proyecto
- Configuración de layout (header height, max width)
- Configuración de componentes (cards, icons, grid)

### Variables CSS (`themes/_default.scss`)
- Colores de fondo y texto
- Colores de acento
- Sombras y efectos
- Configuración de tema claro/oscuro

## Modificaciones

Para modificar estilos:
1. Identifica el componente o sección que quieres cambiar
2. Busca el archivo SASS correspondiente en la tabla de arriba
3. Edita el archivo parcial
4. Los cambios se aplicarán automáticamente con `npm run dev`
