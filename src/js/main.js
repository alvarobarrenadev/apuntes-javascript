// MAIN ENTRY POINT
import '@/sass/main.scss';
import { initTheme } from './modules/theme.js';
import { modulesData } from './modules/data.js';
import { renderModules } from './modules/home-cards.js';
import { initFooter } from './modules/footer.js';
import { initSearch } from './modules/search.js';

// Inicializar tema
initTheme();

// Inicializar search
initSearch();

// Inicializar footer
initFooter();

// Renderizar módulos
renderModules(modulesData);