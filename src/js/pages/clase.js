// PÁGINA DE CLASE - Archivo único para TODAS las clases
// Lee data-modulo y data-clase del HTML para saber qué renderizar

import '@/sass/main.scss';
import { initTheme } from '../modules/theme.js';
import { renderClase } from '../modules/renderer.js';
import { initFooter } from '../modules/footer.js';

// Inicializar tema
initTheme();

// Inicializar footer
initFooter();

// Leer configuración desde el HTML
const main = document.querySelector('main');
const moduloId = parseInt(main?.dataset.modulo || '1', 10);
const claseId = parseInt(main?.dataset.clase || '1', 10);

// Renderizar la clase correspondiente
renderClase(moduloId, claseId);
