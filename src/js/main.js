// MAIN ENTRY POINT
import '@/sass/main.scss';
import { initTheme } from './modules/theme.js';
import { modulesData } from './modules/data.js';
import { renderModules } from './modules/home-cards.js';

// Inicializar tema
initTheme();

// Renderizar módulos
renderModules(modulesData);