import { modulos } from '../data/index.js';

export function initSearch() {
  injectSearchHTML();
  
  const searchBtn = createSearchButton();
  const header = document.querySelector('header');
  const themeToggle = document.getElementById('themeToggle');
  
  // Group buttons if header and themeToggle exist
  if (header && themeToggle) {
    // Create a container for the buttons
    const buttonGroup = document.createElement('div');
    buttonGroup.style.display = 'flex';
    buttonGroup.style.gap = '10px';
    buttonGroup.style.alignItems = 'center';
    
    // Insert the group before the theme toggle
    themeToggle.parentNode.insertBefore(buttonGroup, themeToggle);
    
    // Move buttons into the group
    // Search first, then Theme (or vice versa depending on preference, usually Search is left of Theme)
    buttonGroup.appendChild(searchBtn);
    buttonGroup.appendChild(themeToggle); 
  }

  const modal = document.getElementById('searchModal');
  const input = document.getElementById('searchInput');
  const resultsContainer = document.getElementById('searchResults');
  const closeBtn = document.getElementById('closeSearch');

  // Toggle Search
  const toggleSearch = () => {
    const isHidden = modal.classList.contains('hidden');
    if (isHidden) {
      modal.classList.remove('hidden');
      input.value = '';
      resultsContainer.innerHTML = '';
      
      // Small timeout to ensure visibility before focusing
      setTimeout(() => input.focus(), 50);
      
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  searchBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent immediate closing if bubbling issues
    toggleSearch();
  });
  
  closeBtn.addEventListener('click', toggleSearch);

  // Shortcuts
  document.addEventListener('keydown', (e) => {
    // Open: Ctrl + / (or Command + /) OR Ctrl + K
    if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === '/')) {
      e.preventDefault();
      // Only toggle if not already open, otherwise just focus input
      if (modal.classList.contains('hidden')) {
        toggleSearch();
      } else {
        input.focus();
      }
    }
    // Close: Escape
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      toggleSearch();
    }
  });

  // Close on click outside
  modal.addEventListener('click', (e) => {
    if (e.target === modal) toggleSearch();
  });

  // Search Logic
  let debounceTimeout;
  input.addEventListener('input', (e) => {
    clearTimeout(debounceTimeout);
    const query = e.target.value.trim().toLowerCase();
    
    if (query.length < 2) {
      resultsContainer.innerHTML = '<div class="search-placeholder"><i class="fa-solid fa-magnifying-glass"></i><p>Escribe para buscar...</p></div>';
      return;
    }

    debounceTimeout = setTimeout(() => {
      const results = performSearch(query);
      renderResults(results, resultsContainer, toggleSearch);
    }, 300);
  });
}

function injectSearchHTML() {
  const html = `
    <div id="searchModal" class="search-modal hidden">
      <div class="search-container">
        <div class="search-header">
           <i class="fa-solid fa-magnifying-glass search-icon-input"></i>
           <input type="text" id="searchInput" placeholder="Buscar concepto, código, o tema... (Ctrl+K)" autocomplete="off">
           <button id="closeSearch" class="btn-close"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="search-body">
           <div id="searchResults" class="search-results">
             <div class="search-placeholder">
               <i class="fa-solid fa-bolt"></i>
               <p>Busca en todo el curso</p>
             </div>
           </div>
        </div>
        <div class="search-footer">
           <div class="shortcut-hint"><kbd>Enter</kbd> para ir</div>
           <div class="shortcut-hint"><kbd>Esc</kbd> cerrar</div>
        </div>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', html);
}

function createSearchButton() {
  const btn = document.createElement('button');
  btn.className = 'btn-icon btn-search-trigger';
  btn.title = 'Buscar (Ctrl+K)';
  btn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>';
  return btn;
}

function performSearch(query) {
  const results = [];
  
  Object.entries(modulos).forEach(([modId, modulo]) => {
    if (!modulo.clases) return;

    modulo.clases.forEach(clase => {
      // 1. Match Class Title
      if (clase.titulo.toLowerCase().includes(query)) {
        results.push({
          type: 'clase',
          title: clase.titulo,
          subtitle: `Módulo ${modId}`,
          url: getUrl(modId, clase.id),
          match: 'Título de Clase',
          score: 10
        });
      }

      // 2. Match Topics
      if (clase.temas) {
        clase.temas.forEach((tema, index) => {
          const temaTitle = tema.titulo.toLowerCase();
          const temaContent = tema.contenido ? tema.contenido.toLowerCase() : '';
          const temaCode = tema.codigo ? tema.codigo.toLowerCase() : '';
          
          if (temaTitle.includes(query)) {
             results.push({
              type: 'tema',
              title: tema.titulo,
              subtitle: clase.titulo,
              url: getUrl(modId, clase.id) + `#t${index}`,
              match: 'Tema',
              score: 8
            });
          } else if (temaCode.includes(query)) {
             results.push({
              type: 'codigo',
              title: tema.titulo,
              subtitle: 'Fragmento de Código',
              url: getUrl(modId, clase.id) + `#t${index}`,
              match: 'Código',
              score: 5,
              snippet: getSnippet(tema.codigo, query)
            });
          } else if (temaContent.includes(query)) {
             results.push({
              type: 'contenido',
              title: tema.titulo,
              subtitle: 'Contenido',
              url: getUrl(modId, clase.id) + `#t${index}`,
              match: 'Contenido',
              score: 3,
              snippet: getSnippet(tema.contenido, query)
            });
          }
        });
      }
    });
  });

  return results.sort((a, b) => b.score - a.score).slice(0, 50); // Limit results
}

function getUrl(modId, classId) {
  const BASE = import.meta.env.BASE_URL;
  return `${BASE}src/pages/modulo-${modId}/clase-${classId}.html`;
}

function getSnippet(text, query) {
  if (!text) return '';
  const index = text.toLowerCase().indexOf(query);
  const start = Math.max(0, index - 30);
  const end = Math.min(text.length, index + query.length + 30);
  return '...' + text.substring(start, end) + '...';
}

function renderResults(results, container, closeCb) {
  if (results.length === 0) {
    container.innerHTML = `
      <div class="search-empty">
        <i class="fa-solid fa-ghost"></i>
        <p>No se encontraron resultados para "${document.getElementById('searchInput').value}"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = results.map(r => `
    <a href="${r.url}" class="search-result-item" data-type="${r.type}">
      <div class="result-icon">
        <i class="fa-solid ${getIcon(r.type)}"></i>
      </div>
      <div class="result-info">
        <div class="result-title">
            ${r.title} 
            ${r.snippet ? `<span class="result-snippet">${escapeHtml(r.snippet)}</span>` : ''}
        </div>
        <div class="result-subtitle">
            <span class="match-badge">${r.match}</span> ${r.subtitle}
        </div>
      </div>
      <div class="result-arrow">
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </a>
  `).join('');

  // Add click handling to close modal before nav (optional but good for SPA, here standard nav)
  // Actually standard nav handles it, but we might want to clear search.
  const links = container.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', () => {
        // If navigating to same page hash, we need to force close
        closeCb();
    });
  });
}

function getIcon(type) {
  switch (type) {
    case 'clase': return 'fa-chalkboard-user';
    case 'tema': return 'fa-book-open';
    case 'codigo': return 'fa-code';
    case 'contenido': return 'fa-align-left';
    default: return 'fa-link';
  }
}

function escapeHtml(text) {
  if (!text) return '';
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
