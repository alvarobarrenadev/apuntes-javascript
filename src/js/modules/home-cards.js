// MODULES RENDERING

/**
 * Renderiza las tarjetas de módulos en el grid
 * @param {Array} modulesData - Array con los datos de los módulos
 * @param {string} gridId - ID del elemento contenedor del grid
 */
export function renderModules(modulesData, gridId = 'modulesGrid') {
  const grid = document.getElementById(gridId);
  
  if (!grid) {
    console.error(`No se encontró el elemento con id "${gridId}"`);
    return;
  }

  modulesData.forEach((mod, index) => {
    const card = createModuleCard(mod, index);
    grid.appendChild(card);
  });
}

/**
 * Crea una tarjeta de módulo
 * @param {Object} mod - Datos del módulo
 * @param {number} index - Índice del módulo
 * @returns {HTMLElement} - Elemento div con la tarjeta del módulo
 */
function createModuleCard(mod, index) {
  const card = document.createElement('div');
  card.className = 'module-card';

  // Hacer la card navegable si tiene link
  if (mod.link) {
    card.onclick = () => window.location.href = mod.link;
    card.style.cursor = 'pointer';
  }

  card.innerHTML = `
    <div class="card-header">
      <div class="card-icon">
        <i class="fa-solid ${mod.icon}"></i>
      </div>
      <span class="card-badge">MOD ${index + 1}</span>
    </div>
    <div>
      <h3 class="card-title">${mod.title}</h3>
      <p class="card-desc">${mod.desc}</p>
    </div>
    <div class="card-arrow">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  `;

  return card;
}
