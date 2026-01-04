// PÁGINA INDEX DE MÓDULO - Archivo único para TODOS los índices de módulos
// Lee data-modulo del HTML para saber qué módulo mostrar

import '@/sass/main.scss';
import { initTheme } from '../modules/theme.js';
import { getModulo, getClasesDelModulo } from '../data/index.js';
import { initFooter } from '../modules/footer.js';

// Inicializar tema
initTheme();

// Inicializar footer
initFooter();

// Leer configuración desde el HTML
const main = document.querySelector('main');
const moduloId = parseInt(main?.dataset.modulo || '1', 10);

// Renderizar las cards de las clases
renderClassCards(moduloId);

/**
 * Renderiza las cards de navegación a cada clase del módulo
 */
function renderClassCards(moduloId) {
  const grid = document.getElementById('classesGrid');
  if (!grid) return;

  const clases = getClasesDelModulo(moduloId);
  
  if (clases.length === 0) {
    grid.innerHTML = '<p>No hay clases disponibles</p>';
    return;
  }

  grid.innerHTML = clases.map(clase => `
    <a href="clase-${clase.id}.html" class="class-nav-card">
      <div class="class-nav-number">${clase.id}</div>
      <div class="class-nav-content">
        <h3>${clase.titulo}</h3>
        <p>${getClaseDescripcion(clase)}</p>
      </div>
      <div class="class-nav-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </a>
  `).join('');
}

/**
 * Genera una descripción breve de la clase basada en sus temas
 */
function getClaseDescripcion(clase) {
  if (clase.descripcion) return clase.descripcion;
  
  const temasNombres = clase.temas.slice(0, 4).map(t => t.titulo);
  return temasNombres.join(', ') + (clase.temas.length > 4 ? '...' : '');
}
