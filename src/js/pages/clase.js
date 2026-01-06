// PÁGINA DE CLASE - Archivo único para TODAS las clases
// Lee data-modulo y data-clase del HTML para saber qué renderizar

import '@/sass/main.scss';
import { initTheme } from '../modules/theme.js';
import { renderClase } from '../modules/renderer.js';
import { initFooter } from '../modules/footer.js';
import { initSearch } from '../modules/search.js';
import { initCopyCode } from '../modules/copyCode.js';
import { initFlashcards } from '../modules/flashcards.js';
import { initTOC } from '../modules/toc.js';
import { initShortcuts } from '../modules/shortcuts.js';
import { initPWA } from '../modules/pwa.js';
import { getClasesDelModulo, getClase } from '../data/index.js';

// Inicializar tema
initTheme();

// Inicializar PWA
initPWA();

// Inicializar search
initSearch();

// Inicializar footer
initFooter();

// Inicializar atajos de teclado
initShortcuts();

// Leer configuración desde el HTML
const main = document.querySelector('main');
const moduloId = parseInt(main?.dataset.modulo || '1', 10);
const claseId = parseInt(main?.dataset.clase || '1', 10);

// Renderizar la clase correspondiente
renderClase(moduloId, claseId);

// Obtener datos de la clase para funcionalidades adicionales
const claseData = getClase(moduloId, claseId);

// Inicializar botones de copiar código (después de renderizar)
initCopyCode();

// Inicializar modo quiz/flashcards
initFlashcards(moduloId, claseId, claseData);

// Inicializar tabla de contenidos (TOC)
initTOC(claseData);

// Lógica de navegación (Anterior / Siguiente)
setupNavigation(moduloId, claseId);

function setupNavigation(moduloId, claseId) {
  const clases = getClasesDelModulo(moduloId);
  if (!clases || clases.length === 0) return;

  // Encontrar el índice actual
  const currentIndex = clases.findIndex(c => c.id === claseId);
  if (currentIndex === -1) return;

  const prevClass = clases[currentIndex - 1];
  const nextClass = clases[currentIndex + 1];

  const prevBtn = document.querySelector('.lesson-nav-prev');
  const nextBtn = document.querySelector('.lesson-nav-next');

  // Configurar botón Anterior
  if (prevBtn && prevClass) {
    const link = document.createElement('a');
    link.className = 'lesson-nav-prev';
    link.href = `./clase-${prevClass.id}.html`;
    link.innerHTML = `<i class="fa-solid fa-arrow-left"></i> Anterior`;
    prevBtn.replaceWith(link);
  }

  // Configurar botón Siguiente
  if (nextBtn && nextClass) {
    const link = document.createElement('a');
    link.className = 'lesson-nav-next';
    link.href = `./clase-${nextClass.id}.html`;
    link.innerHTML = `Siguiente <i class="fa-solid fa-arrow-right"></i>`;
    nextBtn.replaceWith(link);
  }
}
