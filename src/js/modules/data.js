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
    count: 3,
    link: `${BASE}src/pages/modulo-1/`
  },
  {
    title: "Funciones",
    desc: "Control de flujo, scope, closures y funciones flecha.",
    icon: "fa-code",
    count: 4
  },
  {
    title: "Arrays y Objetos",
    desc: "Estructuras de datos, métodos de iteración y algoritmos.",
    icon: "fa-layer-group",
    count: 7
  },
  {
    title: "POO y Prototipos",
    desc: "Modelo de objetos, herencia prototípica y clases ES6.",
    icon: "fa-cube",
    count: 4
  },
  {
    title: "Módulos ES6",
    desc: "Organización de código con Import/Export y bundlers.",
    icon: "fa-box-open",
    count: 1
  },
  {
    title: "El DOM",
    desc: "Manipulación dinámica del HTML y CSS desde JavaScript.",
    icon: "fa-sitemap",
    count: 6
  },
  {
    title: "Eventos",
    desc: "Gestión de interacción, listeners y propagación.",
    icon: "fa-computer-mouse",
    count: 4
  },
  {
    title: "Storage",
    desc: "Persistencia de datos: LocalStorage, Session y Cookies.",
    icon: "fa-database",
    count: 3
  },
  {
    title: "Asincronía",
    desc: "Event Loop, Callbacks, Promesas y Async/Await.",
    icon: "fa-stopwatch",
    count: 2
  },
  {
    title: "Fetch API",
    desc: "Consumo de APIs REST, métodos HTTP y manejo de errores.",
    icon: "fa-globe",
    count: 4
  }
];
