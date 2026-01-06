// TABLE OF CONTENTS (TOC) - Tabla de Contenidos Flotante
// Navegación rápida dentro de clases extensas

/**
 * Inicializa la tabla de contenidos flotante
 * @param {Object} claseData - Datos de la clase actual
 */
export function initTOC(claseData) {
  if (!claseData || !claseData.temas || claseData.temas.length < 3) {
    // No mostrar TOC si hay menos de 3 temas
    return;
  }

  // Inyectar el HTML del TOC
  injectTOCHTML(claseData);

  // Configurar el Intersection Observer para detectar sección activa
  setupScrollSpy();

  // Configurar eventos
  setupEventListeners();
}

/**
 * Inyecta el HTML del TOC en la página
 */
function injectTOCHTML(claseData) {
  const tocItems = claseData.temas.map((tema, index) => `
    <a href="#t${index}" class="toc-item" data-section="t${index}">
      <span class="toc-number">${index + 1}</span>
      <span class="toc-title">${cleanTitle(tema.titulo)}</span>
    </a>
  `).join('');

  const html = `
    <nav class="toc-container" id="tocContainer">
      <button class="toc-toggle" id="tocToggle" title="Tabla de contenidos">
        <i class="fa-solid fa-list"></i>
        <span class="toc-toggle-label">Contenidos</span>
      </button>
      
      <div class="toc-panel" id="tocPanel">
        <div class="toc-header">
          <i class="fa-solid fa-compass"></i>
          <span>En esta clase</span>
          <button class="toc-close" id="tocClose">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
        <div class="toc-list">
          ${tocItems}
        </div>
      </div>
    </nav>
  `;

  document.body.insertAdjacentHTML('beforeend', html);
}

/**
 * Limpia el título de formato markdown
 */
function cleanTitle(title) {
  return title
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');
}

/**
 * Configura el Intersection Observer para detectar la sección visible
 */
function setupScrollSpy() {
  const sections = document.querySelectorAll('.tema-block');
  if (sections.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -60% 0px', // Activa cuando la sección está en el 20% superior
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Quitar active de todos
        document.querySelectorAll('.toc-item').forEach(item => {
          item.classList.remove('active');
        });
        
        // Añadir active al actual
        const activeLink = document.querySelector(`.toc-item[data-section="${entry.target.id}"]`);
        if (activeLink) {
          activeLink.classList.add('active');
          
          // Scroll el panel del TOC para mostrar el item activo
          const tocList = document.querySelector('.toc-list');
          if (tocList && activeLink.offsetTop > tocList.clientHeight) {
            tocList.scrollTop = activeLink.offsetTop - 50;
          }
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

/**
 * Configura los event listeners
 */
function setupEventListeners() {
  const toggle = document.getElementById('tocToggle');
  const panel = document.getElementById('tocPanel');
  const close = document.getElementById('tocClose');
  const container = document.getElementById('tocContainer');

  // Toggle del panel
  toggle?.addEventListener('click', () => {
    container?.classList.toggle('open');
  });

  // Cerrar panel
  close?.addEventListener('click', () => {
    container?.classList.remove('open');
  });

  // Cerrar al hacer clic en un link (móvil)
  document.querySelectorAll('.toc-item').forEach(item => {
    item.addEventListener('click', (e) => {
      // Solo cerrar en móvil
      if (window.innerWidth < 1200) {
        container?.classList.remove('open');
      }

      // Smooth scroll
      e.preventDefault();
      const targetId = item.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Actualizar URL sin recargar
        history.pushState(null, '', `#${targetId}`);
      }
    });
  });

  // Cerrar al hacer clic fuera (móvil)
  document.addEventListener('click', (e) => {
    if (window.innerWidth < 1200 && 
        container?.classList.contains('open') &&
        !container.contains(e.target)) {
      container.classList.remove('open');
    }
  });

  // Atajos de teclado
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && container?.classList.contains('open')) {
      container.classList.remove('open');
    }
  });
}
