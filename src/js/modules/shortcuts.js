/**
 * Módulo de Atajos de Teclado Globales
 * Gestiona la navegación y acciones rápidas mediante teclado
 */

export function initShortcuts() {
  document.addEventListener('keydown', handleKeydown);
  createShortcutsTrigger();
}

/**
 * Crea el botón flotante para abrir la ayuda
 */
function createShortcutsTrigger() {
  const btn = document.createElement('button');
  btn.className = 'shortcuts-trigger';
  btn.innerHTML = '<i class="fa-regular fa-keyboard"></i>';
  btn.title = 'Atajos de teclado (?)';
  btn.ariaLabel = 'Ver atajos de teclado';
  
  btn.addEventListener('click', toggleShortcutsHelp);
  
  document.body.appendChild(btn);
}

function handleKeydown(e) {
  // Ignorar si el foco está en un input, textarea o editable
  if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName) || 
      document.activeElement.isContentEditable) {
    return;
  }

  // Ignorar si hay modificadores (Ctrl, Alt, Shift) excepto para combinaciones específicas
  // Ctrl+K ya lo maneja el módulo de búsqueda
  if (e.ctrlKey || e.altKey || e.metaKey) return;

  switch(e.key.toLowerCase()) {
    case 'h':
      // H: Ir al Home
      const homeLink = document.querySelector('a.logo') || document.querySelector('a[href*="index.html"]');
      if (homeLink) {
        homeLink.click();
      } else {
        // Fallback: intentar ir a la raíz del proyecto
        // En producción (GH Pages) suele ser /repo-name/, en local /
        const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
        window.location.href = isLocal ? '/' : '/apuntes-javascript/';
      }
      break;
      
    case 't':
      // T: Toggle Tema
      toggleTheme();
      break;

    case 'arrowright':
      // Flecha Derecha: Siguiente clase
      navigateLesson('next');
      break;
      
    case 'arrowleft':
      // Flecha Izquierda: Clase anterior
      navigateLesson('prev');
      break;
      
    case 'q':
      // Q: Abrir Quiz (si existe el botón)
      const quizBtn = document.getElementById('startQuiz');
      if (quizBtn) quizBtn.click();
      break;

    case '?':
      // ?: Mostrar ayuda de atajos
      toggleShortcutsHelp();
      break;
  }
}

/**
 * Muestra/Oculta el modal de ayuda de atajos
 */
function toggleShortcutsHelp() {
  let modal = document.getElementById('shortcuts-modal');
  
  if (!modal) {
    createShortcutsModal();
    modal = document.getElementById('shortcuts-modal');
  }
  
  modal.classList.toggle('visible');
}

/**
 * Crea e inyecta el HTML del modal de ayuda
 */
function createShortcutsModal() {
  const html = `
    <div class="shortcuts-modal-overlay" id="shortcuts-modal">
      <div class="shortcuts-panel">
        <div class="shortcuts-header">
          <h3>Atajos de Teclado</h3>
          <button class="close-shortcuts"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="shortcuts-grid">
          <div class="shortcut-item">
            <span class="keys"><kbd>→</kbd></span>
            <span class="desc">Siguiente clase</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>←</kbd></span>
            <span class="desc">Clase anterior</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>H</kbd></span>
            <span class="desc">Ir al inicio</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>T</kbd></span>
            <span class="desc">Cambiar tema</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>Q</kbd></span>
            <span class="desc">Abrir Quiz</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
            <span class="desc">Buscar</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>?</kbd></span>
            <span class="desc">Ver esta ayuda</span>
          </div>
        </div>
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', html);
  
  // Event listeners para cerrar
  const modal = document.getElementById('shortcuts-modal');
  const closeBtn = modal.querySelector('.close-shortcuts');
  
  closeBtn.addEventListener('click', () => modal.classList.remove('visible'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('visible');
  });
}

/**
 * Navega a la lección anterior o siguiente buscando los enlaces en el DOM
 */
function navigateLesson(direction) {
  const selector = direction === 'next' ? '.lesson-nav-next' : '.lesson-nav-prev';
  const link = document.querySelector(selector);
  
  if (link && link.href) {
    // Añadir efecto visual de pulsación si se desea
    link.click();
  }
}

/**
 * Alterna el tema (Dark/Light) disparando el evento click del botón de tema
 */
function toggleTheme() {
  const themeBtn = document.getElementById('themeToggle');
  if (themeBtn) {
    themeBtn.click();
    showToast('Tema cambiado');
  }
}

/**
 * Muestra un pequeño mensaje toast efímero (opcional)
 */
function showToast(message) {
  // Crear contenedor si no existe
  let container = document.getElementById('shortcut-toast');
  if (!container) {
    container = document.createElement('div');
    container.id = 'shortcut-toast';
    container.style.cssText = `
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.85rem;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 9999;
      font-family: var(--font-ui);
    `;
    document.body.appendChild(container);
  }
  
  container.textContent = message;
  container.style.opacity = '1';
  
  setTimeout(() => {
    container.style.opacity = '0';
  }, 1500);
}
