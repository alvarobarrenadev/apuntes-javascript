// MAIN ENTRY POINT
import '@/sass/main.scss';
import { initTheme } from './modules/theme.js';
import { modulesData } from './modules/data.js';
import { renderModules } from './modules/home-cards.js';
import { initFooter } from './modules/footer.js';
import { initSearch } from './modules/search.js';
import { initPWA } from './modules/pwa.js';
import { initShortcuts } from './modules/shortcuts.js';

// Inicializar tema
initTheme();

// Inicializar search
initSearch();

// Inicializar footer
initFooter();

// Inicializar PWA
initPWA();

// Inicializar atajos (útil para búsqueda y cambio de tema desde home)
initShortcuts();

// Renderizar módulos
renderModules(modulesData);