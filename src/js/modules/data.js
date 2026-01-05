// MODULES DATA

// Obtenemos el base URL de Vite (funciona en dev y producción)
const BASE = import.meta.env.BASE_URL;

/**
 * Datos de los módulos de JavaScript
 * Cada módulo contiene: título, descripción, icono y cantidad de lecciones
 */
export const modulesData = [
  {
    title: "Conceptos Básicos",
    desc: "Fundamentos, variables, tipos de datos y operadores esenciales.",
    icon: "fa-bolt",
    link: `${BASE}src/pages/modulo-1/`
  },
  {
    title: "Funciones",
    desc: "Control de flujo, scope, closures y funciones flecha.",
    icon: "fa-code",
    link: `${BASE}src/pages/modulo-2/`
  },
  {
    title: "Arrays y Objetos",
    desc: "Estructuras de datos, métodos de iteración y algoritmos.",
    icon: "fa-layer-group",
    link: `${BASE}src/pages/modulo-3/`
  },
  {
    title: "POO y Prototipos",
    desc: "Modelo de objetos, herencia prototípica y clases ES6.",
    icon: "fa-cube",
    link: `${BASE}src/pages/modulo-4/`
  },
  {
    title: "Módulos ES6",
    desc: "Organización de código con Import/Export y bundlers.",
    icon: "fa-box-open",
    link: `${BASE}src/pages/modulo-5/`
  },
  {
    title: "El DOM",
    desc: "Manipulación dinámica del HTML y CSS desde JavaScript.",
    icon: "fa-sitemap",
    link: `${BASE}src/pages/modulo-6/`
  },
  {
    title: "Eventos",
    desc: "Gestión de interacción, listeners y propagación.",
    icon: "fa-computer-mouse",
    link: `${BASE}src/pages/modulo-7/`
  },
  {
    title: "Storage",
    desc: "Persistencia de datos: LocalStorage, Session y Cookies.",
    icon: "fa-database"
  },
  {
    title: "Asincronía",
    desc: "Event Loop, Callbacks, Promesas y Async/Await.",
    icon: "fa-stopwatch"
  },
  {
    title: "Fetch API",
    desc: "Consumo de APIs REST, métodos HTTP y manejo de errores.",
    icon: "fa-globe"
  }
];