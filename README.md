# Apuntes JavaScript - ConquerBlocks

> **Autor:** Álvaro Barrena Revilla
> **Curso:** Máster de Desarrollo Web Full Stack (ConquerBlocks)

![JavaScript ConquerBlocks](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Aplicación web progresiva de apuntes interactivos para el módulo de JavaScript. Diseñada para ser una referencia rápida, visual y práctica de los conceptos aprendidos, organizados por módulos y clases.

---

## Características

- **Contenido Organizado:** Estructura modular clara (Módulos > Temas > Clases).
- **Diseño Moderno:** Interfaz limpia con tipografía cuidada (Inter & JetBrains Mono) y diseño responsive.
- **Modo Oscuro/Claro:** Tema adaptable a la preferencia del sistema o controlable por el usuario.
- **Rendimiento (Vite):** Cargas instantáneas y navegación fluida.
- **Código Interactivo:** Bloques de código con resaltado de sintaxis y ejemplos prácticos.
- **Responsive First:** Optimizado para móviles, tablets y escritorio.

---

## Contenido del Curso

Actualmente el proyecto abarca los siguientes módulos:

- **Módulo 1:** Fundamentos de JavaScript
- **Módulo 2:** Funciones y control de flujo
- **Módulo 3:** Estructuras de datos
- **Módulo 4:** Lógica de programación
- **Módulo 5:** JavaScript Moderno (ES6+)
- **Módulo 6:** Manipulación del DOM (Selectores, Creación de elementos, Atributos, Eventos...)
- **Módulo 7:** Gestión de Eventos y Asincronía
- **Módulo 8:** Almacenamiento y Proyectos con Vite (Cookies, LocalStorage, SessionStorage, Vite)
- **Módulo 9:** Asincronía y Promesas (Promesas, async/await, fetch)
- **Módulo 10:** Comunicación con el Servidor (Fetch, JSON, APIs)

---

## Tecnologías Utilizadas

Este proyecto está construido con un stack moderno y ligero, sin dependencias innecesarias:

- **Core:** HTML5 Semántico, JavaScript (ES Modules).
- **Estilos:** SASS (SCSS) con arquitectura 7-1, Variables CSS para temas dinámicos.
- **Build Tool:** Vite (rápido y eficiente).
- **Iconos:** Font Awesome 6.
- **Fuentes:** Google Fonts (Inter para UI, JetBrains Mono para código).

---

## Inicio Rápido

Para ejecutar este proyecto en tu máquina local:

### 1. Prerrequisitos
- Node.js (v18 o superior recomendado)
- npm

### 2. Instalación

```bash
# Clonar el repositorio (si aplica)
# git clone ...

# Instalar dependencias
npm install
```

### 3. Desarrollo

Arranca el servidor local con recarga en caliente (HMR):

```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173` (o el puerto que indique la consola).

### 4. Producción

Para generar los archivos estáticos optimizados para producción:

```bash
npm run build
```

Para previsualizar la build localmente:

```bash
npm run preview
```

### 5. Despliegue (GitHub Pages)

El proyecto incluye un script para desplegar automáticamente en la rama `gh-pages`:

```bash
npm run deploy
```

---

## Estructura del Proyecto

El proyecto sigue una arquitectura escalable y mantenible:

```bash
apuntes-javascript/
├── index.html              # Landing page
├── vite.config.js          # Configuración de Vite
├── src/
│   ├── js/                
│   │   ├── data/           # Contenido (JSON-like) de cada módulo
│   │   ├── modules/        # Lógica reutilizable (Theme, UI Renderer)
│   │   └── pages/          # Controladores específicos por página
│   ├── pages/              # Archivos HTML (Vistas) organizados por módulo
│   │   ├── modulo-1/
│   │   ├── ...
│   │   ├── modulo-7/
│   │   └── modulo-8/
│   └── sass/               # Estilos con patrón 7-1
│       ├── abstracts/      # Variables, mixins
│       ├── base/           # Reset, tipografía
│       ├── components/     # Botones, cards, bloques de código
│       ├── layout/         # Grid, header, footer
│       └── themes/         # Esquemas de color (Dark/Light)
└── transcripciones/        # Referencias y material de apoyo
```

### Sistema de Renderizado Dinámico

Para evitar duplicidad de código, usamos un manejador centralizado (`src/js/pages/clase.js`) que lee atributos `data-*` del HTML para inyectar el contenido correspondiente desde los archivos de datos.

```html
<!-- Ejemplo: Clase 20 del Módulo 6 -->
<main class="lesson-page" data-modulo="6" data-clase="20">
    <!-- El contenido se inyecta aquí automáticamente -->
</main>
```

---

## Licencia

Este proyecto es de uso personal y educativo desarrollado por **[Álvaro Barrena Revilla](https://alvarobarrena.vercel.app/)**.