// THEME MANAGEMENT (LIGHT/DARK)

/**
 * Inicializa el sistema de temas y gestiona el toggle entre light/dark
 */
export function initTheme() {
  const themeToggleBtn = document.getElementById('themeToggle');
  const sunIcon = document.getElementById('sunIcon');
  const moonIcon = document.getElementById('moonIcon');
  const htmlEl = document.documentElement;

  // Recuperar tema guardado o usar preferencia del sistema
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Aplicar tema inicial
  if (savedTheme) {
    htmlEl.setAttribute('data-theme', savedTheme);
    updateIcons(savedTheme, sunIcon, moonIcon);
  } else if (!systemPrefersDark) {
    htmlEl.setAttribute('data-theme', 'light');
    updateIcons('light', sunIcon, moonIcon);
  }

  // Event listener para el toggle
  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlEl.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlEl.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateIcons(newTheme, sunIcon, moonIcon);
  });
}

/**
 * Actualiza los iconos del toggle según el tema activo
 * @param {string} theme - 'light' o 'dark'
 * @param {HTMLElement} sunIcon - Elemento del icono del sol
 * @param {HTMLElement} moonIcon - Elemento del icono de la luna
 */
function updateIcons(theme, sunIcon, moonIcon) {
  if (theme === 'dark') {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  } else {
    moonIcon.classList.add('hidden');
    sunIcon.classList.remove('hidden');
  }
}
