// MAIN ENTRY POINT
import '@/sass/main.scss';
import { initTheme } from './modules/theme.js';
import { modulesData } from './modules/data.js';
import { renderModules } from './modules/home-cards.js';
import { initFooter } from './modules/footer.js';

// Inicializar tema
initTheme();

// Inicializar footer
initFooter();

// Renderizar módulos
renderModules(modulesData);