# Apuntes JavaScript

> **Autor:** [Álvaro Barrena Revilla](https://alvarobarrena.vercel.app/)

>**Curso:** [Máster de Desarrollo Web Full Stack](https://www.conquerblocks.com)

![JavaScript ConquerBlocks](https://img.shields.io/badge/JavaScript-ES6%2B-yellow?style=for-the-badge&logo=javascript&logoColor=black) ![Vite](https://img.shields.io/badge/Vite-Bundler-646CFF?style=for-the-badge&logo=vite&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-Styles-CC6699?style=for-the-badge&logo=sass&logoColor=white)

Aplicación web progresiva de apuntes interactivos para el módulo de JavaScript. Diseñada para ser una referencia rápida, visual y práctica de los conceptos aprendidos, organizados por módulos y clases.

---

## Características Principales

- **Contenido Estructurado:** Organización modular (Módulos > Temas > Clases) para un fácil aprendizaje.
- **Diseño Moderno & Responsive:** Interfaz limpia con modo oscuro/claro automático, tipografía cuidada (Inter & JetBrains Mono) y diseño 100% adaptable a cualquier dispositivo.
- **Rendimiento (Vite):** Cargas instantáneas, navegación fluida y arquitectura SPA-like sin frameworks pesados.
- **Código Interactivo:** Bloques de código con resaltado de sintaxis, botón de "Copiar" y ejemplos prácticos.

---

## Nuevas Funcionalidades (v2.0)

### Sistema Inteligente de Flashcards / Quiz
Modo de repaso interactivo disponible en **todas las clases** para reforzar el aprendizaje.
- **Generación Automática:** El sistema analiza el contenido de la clase y crea preguntas inteligentes sobre métodos, tipos de datos y conceptos clave.
- **Soporte de Formato Rico:** Las tarjetas muestran código formateado (`monospace`), negritas y estilos visuales para mejor legibilidad.
- **Navegación Intuitiva:**
  - **Desktop:** Flechas laterales para navegar cómodamente.
  - **Móvil:** Barra de navegación inferior y gestos optimizados.
  - **Review Mode:** Permite navegar atrás para repasar tarjetas anteriores sin afectar la puntuación.
- **Feedback Visual:** Indicadores de respuesta correcta/incorrecta y puntuación final.

### Tabla de Contenidos Flotante (TOC)
Navegación rápida dentro de clases extensas.
- **Scroll Spy:** Detecta automáticamente qué sección estás leyendo y la resalta en el menú.
- **Adaptable:**
  - **Desktop:** Sidebar fijo a la derecha para acceso inmediato.
  - **Móvil/Tablet:** Botón flotante colapsable no intrusivo.
- **Smooth Scroll:** Desplazamiento suave al saltar entre secciones de la clase.

### Búsqueda Global
Buscador integrado (Ctrl+K) para encontrar rápidamente cualquier concepto, método o clase dentro de todo el curso.

---

## Contenido de los apuntes

Actualmente el proyecto abarca los siguientes módulos:

- **Módulo 1:** Fundamentos de JavaScript
- **Módulo 2:** Funciones y control de flujo
- **Módulo 3:** Estructuras de datos
- **Módulo 4:** Lógica de programación
- **Módulo 5:** JavaScript Moderno (ES6+)
- **Módulo 6:** Manipulación del DOM (Selectores, Creación, Atributos...)
- **Módulo 7:** Gestión de Eventos y Asincronía
- **Módulo 8:** Almacenamiento y Proyectos con Vite
- **Módulo 9:** Asincronía y Promesas (async/await, fetch)
- **Módulo 10:** Comunicación con el Servidor (APIs, JSON)

---

## Tecnologías Utilizadas

Stack moderno y ligero, priorizando el rendimiento y la mantenibilidad:

- **Core:** HTML5 Semántico, JavaScript (ES Modules).
- **Estilos:** SASS (SCSS) con arquitectura 7-1, Variables CSS para temas dinámicos.
- **Componentes:** Flashcards, TOC, Buscador, Code Blocks (implementados desde cero).
- **Build Tool:** Vite.
- **Iconos:** Font Awesome 6.
- **Fuentes:** Google Fonts.

---

## Inicio Rápido

### 1. Prerrequisitos
- Node.js (v18+ recomendado)
- npm

### 2. Instalación

```bash
# Instalar dependencias
npm install
```

### 3. Desarrollo

Arranca el servidor local con recarga en caliente (HMR):

```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

### 4. Producción

Para generar los archivos estáticos optimizados:

```bash
npm run build
```

---

## Estructura del Proyecto

```bash
apuntes-javascript/
├── index.html              # Landing page
├── vite.config.js          # Configuración de Vite
├── src/
│   ├── js/                
│   │   ├── data/           # Base de datos de apuntes (JSON-like)
│   │   ├── modules/        # Lógica modular
│   │   │   ├── copyCode.js     # Funcionalidad copiar código
│   │   │   ├── data.js         # Utilidades de datos
│   │   │   ├── flashcards.js   # Lógica del Quiz
│   │   │   ├── footer.js       # Renderizado del footer
│   │   │   ├── home-cards.js   # Tarjetas de la home
│   │   │   ├── renderer.js     # Renderizado dinámico
│   │   │   ├── search.js       # Buscador
│   │   │   ├── theme.js        # Gestor de temas
│   │   │   └── toc.js          # Tabla de Contenidos
│   │   └── pages/          # Controladores por página
│   ├── pages/              # Archivos HTML (Vistas)
│   └── sass/               # Estilos SCSS (Arquitectura 7-1)
│       ├── components/     # Componentes (Flashcards, TOC, etc.)
│       └── ...
└── transcripciones/        # Material de apoyo
```

---

## Licencia

Este proyecto es de uso personal y educativo desarrollado por **[Álvaro Barrena Revilla](https://alvarobarrena.vercel.app/)**.