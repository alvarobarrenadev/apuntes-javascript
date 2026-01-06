// FLASHCARDS / QUIZ MODE
// Sistema de tarjetas de repaso interactivas

import Swal from 'sweetalert2';

/**
 * Limpia el texto de formato markdown
 */
function cleanText(text) {
  if (!text) return '';
  return text
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .trim();
}

let currentFlashcards = [];
let currentIndex = 0;
let score = { correct: 0, incorrect: 0, total: 0 };
let isFlipped = false;

/**
 * Inicializa el modo quiz - añade botón y configura modal
 */
export function initFlashcards(moduloId, claseId, claseData) {
  if (!claseData || !claseData.temas) return;
  
  // Extraer flashcards del contenido
  currentFlashcards = extractFlashcards(claseData);
  
  if (currentFlashcards.length === 0) return;
  
  // Inyectar HTML del modal
  injectFlashcardsHTML();
  
  // Añadir botón de quiz
  addQuizButton(moduloId, claseId);
  
  // Configurar eventos
  setupEventListeners();
}

/**
 * Extrae flashcards desde los temas de la clase - VERSIÓN MEJORADA
 */
function extractFlashcards(claseData) {
  const cards = [];
  
  claseData.temas.forEach((tema) => {
    
    // ========== CARACTERÍSTICAS (nombre + descripción) ==========
    if (tema.caracteristicas && Array.isArray(tema.caracteristicas)) {
      tema.caracteristicas.forEach(c => {
        if (c.nombre && c.descripcion) {
          cards.push({
            front: `¿Qué significa "${c.nombre}" en JavaScript?`,
            back: cleanText(c.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== MÉTODOS GENÉRICOS (console, etc) ==========
    if (tema.metodos && Array.isArray(tema.metodos)) {
      tema.metodos.forEach(m => {
        if (m.nombre && m.descripcion) {
          cards.push({
            front: `¿Qué hace ${m.nombre}?`,
            back: cleanText(m.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== TIPOS (var, let, const) ==========
    if (tema.tipos && Array.isArray(tema.tipos)) {
      tema.tipos.forEach(t => {
        if (t.palabra && t.descripcion) {
          cards.push({
            front: `¿Qué características tiene "${t.palabra}"?`,
            back: cleanText(t.descripcion),
            source: tema.titulo
          });
        } else if (t.nombre && t.descripcion) {
          cards.push({
            front: `¿Qué es el tipo ${t.nombre}?`,
            back: cleanText(t.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== MÉTODOS (Array, String, Number) ==========
    ['metodosArray', 'metodosString', 'metodosNumber'].forEach(key => {
      const metodos = tema[key];
      if (metodos && Array.isArray(metodos)) {
        metodos.forEach(m => {
          if (m.metodo && m.descripcion) {
            cards.push({
              front: `¿Qué hace el método ${m.metodo}?`,
              back: cleanText(m.descripcion),
              source: tema.titulo
            });
          }
        });
      }
    });
    
    // ========== TIPOS DE DECLARACIÓN (var, let, const, funciones) ==========
    // Pregunta: "¿Cuál es la diferencia de 'let'?" → Respuesta: descripción
    if (tema.tiposDeclaracion && Array.isArray(tema.tiposDeclaracion)) {
      tema.tiposDeclaracion.forEach(t => {
        if (t.nombre && t.descripcion) {
          cards.push({
            front: `¿Qué caracteriza a "${t.nombre}"?`,
            back: cleanText(t.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== TIPOS DE SCOPE ==========
    if (tema.tiposScope && Array.isArray(tema.tiposScope)) {
      tema.tiposScope.forEach(t => {
        if (t.tipo && t.descripcion) {
          cards.push({
            front: `¿Qué es el ${t.tipo}?`,
            back: cleanText(t.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== VALORES ESPECIALES (Infinity, NaN, etc) ==========
    if (tema.valoresEspeciales && Array.isArray(tema.valoresEspeciales)) {
      tema.valoresEspeciales.forEach(v => {
        if (v.valor && v.descripcion) {
          cards.push({
            front: `¿Qué representa ${v.valor} en JavaScript?`,
            back: cleanText(v.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== CARACTERES DE ESCAPE ==========
    if (tema.caracteresEscape && Array.isArray(tema.caracteresEscape)) {
      tema.caracteresEscape.forEach(c => {
        if (c.caracter && c.descripcion) {
          cards.push({
            front: `¿Qué produce el carácter de escape ${c.caracter}?`,
            back: cleanText(c.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== FORMAS DE CREAR (Strings, Numbers) ==========
    if (tema.formasCrear && Array.isArray(tema.formasCrear)) {
      tema.formasCrear.forEach(f => {
        if (f.tipo && f.descripcion) {
          cards.push({
            front: `¿Cómo se usa "${f.tipo}" para crear datos?`,
            back: cleanText(f.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== OPERADORES ==========
    if (tema.operadores && Array.isArray(tema.operadores)) {
      tema.operadores.forEach(op => {
        if (op.simbolo && op.nombre) {
          const respuesta = op.descripcion 
            ? `${op.nombre}: ${cleanText(op.descripcion)}`
            : op.nombre;
          cards.push({
            front: `¿Qué hace el operador ${op.simbolo}?`,
            back: respuesta,
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== VERSIONES ECMASCRIPT ==========
    if (tema.versiones && Array.isArray(tema.versiones)) {
      tema.versiones.filter(v => v.destacado).forEach(v => {
        if (v.version && v.novedades) {
          cards.push({
            front: `¿Qué novedades trajo ${v.version}?`,
            back: cleanText(v.novedades),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== CONCEPTOS DE PARÁMETROS ==========
    if (tema.conceptosParametros && Array.isArray(tema.conceptosParametros)) {
      tema.conceptosParametros.forEach(c => {
        if (c.nombre && c.descripcion) {
          cards.push({
            front: `Explica: ${c.nombre}`,
            back: cleanText(c.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== PASO POR VALOR VS REFERENCIA ==========
    if (tema.pasoParametros && Array.isArray(tema.pasoParametros)) {
      tema.pasoParametros.forEach(p => {
        if (p.tipo && p.descripcion && p.aplicaA) {
          cards.push({
            front: `¿Qué es el "${p.tipo}" y a qué tipos aplica?`,
            back: `${cleanText(p.descripcion)} Aplica a: ${p.aplicaA}`,
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== TABLA COMPARATIVA (Arrow Functions vs tradicionales) ==========
    if (tema.tablaComparativa && Array.isArray(tema.tablaComparativa)) {
      tema.tablaComparativa.forEach(row => {
        if (row.caracteristica && row.arrow) {
          cards.push({
            front: `En Arrow Functions, ¿cómo funciona "${row.caracteristica}"?`,
            back: cleanText(row.arrow),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== FORMAS DE DECLARACIÓN (arrays) ==========
    if (tema.formasDeclaracion && Array.isArray(tema.formasDeclaracion)) {
      tema.formasDeclaracion.forEach(f => {
        if (f.forma && f.descripcion) {
          cards.push({
            front: `¿Qué es la "${f.forma}" para declarar arrays?`,
            back: cleanText(f.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== MÉTODOS DE ITERACIÓN ==========
    if (tema.metodosIteracion && Array.isArray(tema.metodosIteracion)) {
      tema.metodosIteracion.forEach(m => {
        if (m.metodo && m.descripcion) {
          cards.push({
            front: `¿Cuándo usar ${m.metodo} para iterar?`,
            back: cleanText(m.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
    // ========== USOS DE CLOSURES ==========
    if (tema.usosClosures && Array.isArray(tema.usosClosures)) {
      tema.usosClosures.forEach(u => {
        if (u.uso && u.descripcion) {
          cards.push({
            front: `¿Cómo se usan las Arrow Functions para "${u.uso}"?`,
            back: cleanText(u.descripcion),
            source: tema.titulo
          });
        }
      });
    }
    
  });
  
  // Mezclar las tarjetas
  return shuffleArray(cards);
}

/**
 * Mezcla un array (Fisher-Yates)
 */
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Inyecta el HTML del modal de flashcards
 */
function injectFlashcardsHTML() {
  // Si ya existe, no duplicar
  if (document.getElementById('flashcardsModal')) return;
  
  const html = `
    <div id="flashcardsModal" class="flashcards-modal hidden">
      <div class="flashcards-container">
        
        <div class="flashcards-header">
          <div class="flashcards-title">
            <i class="fa-solid fa-brain"></i>
            <span>Modo Quiz</span>
          </div>
          <button id="closeFlashcards" class="btn-close">
            <i class="fa-solid fa-times"></i>
          </button>
        </div>
        
        <div class="flashcards-progress">
          <div class="progress-bar">
            <div class="progress-fill" id="quizProgress"></div>
          </div>
          <div class="progress-text">
            <span id="progressCurrent">1</span> / <span id="progressTotal">10</span>
          </div>
        </div>
        
        <div class="flashcard-wrapper">
          <button class="flashcard-nav flashcard-nav-prev" id="cardPrev" title="Tarjeta anterior">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          
          <div class="flashcard" id="flashcard">
            <div class="flashcard-inner">
              <div class="flashcard-front">
                <span class="flashcard-source" id="cardSource"></span>
                <p id="cardFront"></p>
                <span class="tap-hint"><i class="fa-solid fa-hand-pointer"></i> Toca para girar la tarjeta</span>
              </div>
              <div class="flashcard-back">
                <p id="cardBack"></p>
              </div>
            </div>
          </div>
          
          <button class="flashcard-nav flashcard-nav-next" id="cardNext" title="Siguiente tarjeta">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="flashcard-actions" id="flashcardActions">
          <button class="action-btn incorrect" id="btnIncorrect">
            <i class="fa-solid fa-times"></i>
            <span>No lo sabía</span>
          </button>
          <button class="action-btn correct" id="btnCorrect">
            <i class="fa-solid fa-check"></i>
            <span>¡Lo sabía!</span>
          </button>
        </div>
        
        <div class="flashcard-nav-mobile">
          <button class="nav-mobile-btn" id="cardPrevMobile" title="Anterior">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <span class="nav-mobile-label">Navegar entre tarjetas</span>
          <button class="nav-mobile-btn" id="cardNextMobile" title="Siguiente">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
        
        <div class="flashcards-score">
          <div class="score-item correct">
            <i class="fa-solid fa-check-circle"></i>
            <span id="scoreCorrect">0</span>
          </div>
          <div class="score-item incorrect">
            <i class="fa-solid fa-times-circle"></i>
            <span id="scoreIncorrect">0</span>
          </div>
        </div>
        
      </div>
    </div>
  `;
  
  document.body.insertAdjacentHTML('beforeend', html);
}

/**
 * Añade el botón de quiz en la navegación de la clase
 */
function addQuizButton(moduloId, claseId) {
  const lessonNav = document.querySelector('.lesson-nav');
  if (!lessonNav) return;
  
  // Crear botón
  const quizBtn = document.createElement('button');
  quizBtn.className = 'quiz-btn';
  quizBtn.id = 'startQuiz';
  quizBtn.innerHTML = `
    <i class="fa-solid fa-brain"></i>
    <span>Quiz (${currentFlashcards.length})</span>
  `;
  quizBtn.title = `Practicar con ${currentFlashcards.length} tarjetas`;
  
  // Buscar el botón "Siguiente" para insertar antes de él
  const nextBtn = lessonNav.querySelector('.lesson-nav-next');
  if (nextBtn) {
    // Insertar antes del botón "Siguiente" (en el medio)
    lessonNav.insertBefore(quizBtn, nextBtn);
  } else {
    // Si no hay botón siguiente, añadir al final
    lessonNav.appendChild(quizBtn);
  }
}

/**
 * Configura los event listeners
 */
function setupEventListeners() {
  const modal = document.getElementById('flashcardsModal');
  const closeBtn = document.getElementById('closeFlashcards');
  const flashcard = document.getElementById('flashcard');
  const startBtn = document.getElementById('startQuiz');
  const btnCorrect = document.getElementById('btnCorrect');
  const btnIncorrect = document.getElementById('btnIncorrect');
  const btnPrev = document.getElementById('cardPrev');
  const btnNext = document.getElementById('cardNext');
  
  // Iniciar quiz
  startBtn?.addEventListener('click', () => {
    openQuiz();
  });
  
  // Cerrar modal
  closeBtn?.addEventListener('click', closeQuiz);
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) closeQuiz();
  });
  
  // Voltear tarjeta
  flashcard?.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
    
    // Mostrar botones de acción después de voltear
    if (isFlipped) {
      document.getElementById('flashcardActions')?.classList.add('visible');
    }
  });
  
  // Botones de acción
  btnCorrect?.addEventListener('click', () => handleAnswer(true));
  btnIncorrect?.addEventListener('click', () => handleAnswer(false));
  
  // Navegación entre tarjetas (sin puntuar)
  btnPrev?.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateCard(-1);
  });
  btnNext?.addEventListener('click', (e) => {
    e.stopPropagation();
    navigateCard(1);
  });
  
  // Navegación móvil
  const btnPrevMobile = document.getElementById('cardPrevMobile');
  const btnNextMobile = document.getElementById('cardNextMobile');
  btnPrevMobile?.addEventListener('click', () => navigateCard(-1));
  btnNextMobile?.addEventListener('click', () => navigateCard(1));
  
  // Atajos de teclado
  document.addEventListener('keydown', handleKeyboard);
}

/**
 * Maneja atajos de teclado
 */
function handleKeyboard(e) {
  const modal = document.getElementById('flashcardsModal');
  if (modal?.classList.contains('hidden')) return;
  
  switch(e.key) {
    case ' ': // Espacio para voltear
      e.preventDefault();
      document.getElementById('flashcard')?.click();
      break;
    case 'ArrowRight': // Flecha derecha = correcto
      if (isFlipped) handleAnswer(true);
      break;
    case 'ArrowLeft': // Flecha izquierda = incorrecto
      if (isFlipped) handleAnswer(false);
      break;
    case 'Escape':
      closeQuiz();
      break;
  }
}

/**
 * Abre el quiz
 */
function openQuiz() {
  // Reset estado
  currentIndex = 0;
  score = { correct: 0, incorrect: 0, total: currentFlashcards.length };
  isFlipped = false;
  
  // Remezclar tarjetas
  currentFlashcards = shuffleArray(currentFlashcards);
  
  // Mostrar modal
  const modal = document.getElementById('flashcardsModal');
  modal?.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  
  // Mostrar primera tarjeta
  showCard(currentIndex);
  updateProgress();
  updateScore();
}

/**
 * Cierra el quiz
 */
function closeQuiz() {
  const modal = document.getElementById('flashcardsModal');
  modal?.classList.add('hidden');
  document.body.style.overflow = '';
  
  // Reset flip
  document.getElementById('flashcard')?.classList.remove('flipped');
  document.getElementById('flashcardActions')?.classList.remove('visible');
  isFlipped = false;
}

/**
 * Muestra una tarjeta específica
 */
function showCard(index) {
  if (index >= currentFlashcards.length) {
    showResults();
    return;
  }
  
  const card = currentFlashcards[index];
  const flashcard = document.getElementById('flashcard');
  
  // Reset flip
  flashcard?.classList.remove('flipped');
  document.getElementById('flashcardActions')?.classList.remove('visible');
  isFlipped = false;
  
  // Actualizar contenido
  document.getElementById('cardSource').textContent = card.source;
  document.getElementById('cardFront').textContent = card.front;
  document.getElementById('cardBack').textContent = card.back;
  
  // Actualizar estado de botones de navegación
  updateNavButtons();
  
  // Animación de entrada
  flashcard?.classList.add('entering');
  setTimeout(() => flashcard?.classList.remove('entering'), 300);
}

/**
 * Navega entre tarjetas sin puntuar (para repasar)
 */
function navigateCard(direction) {
  const newIndex = currentIndex + direction;
  
  // Limitar al rango válido
  if (newIndex < 0 || newIndex >= currentFlashcards.length) return;
  
  currentIndex = newIndex;
  showCard(currentIndex);
  updateProgress();
}

/**
 * Actualiza el estado visual de los botones prev/next
 */
function updateNavButtons() {
  const btnPrev = document.getElementById('cardPrev');
  const btnNext = document.getElementById('cardNext');
  
  // Deshabilitar prev si estamos en la primera
  if (btnPrev) {
    btnPrev.disabled = currentIndex === 0;
    btnPrev.style.opacity = currentIndex === 0 ? '0.3' : '1';
  }
  
  // Deshabilitar next si estamos en la última
  if (btnNext) {
    btnNext.disabled = currentIndex >= currentFlashcards.length - 1;
    btnNext.style.opacity = currentIndex >= currentFlashcards.length - 1 ? '0.3' : '1';
  }
}

/**
 * Maneja la respuesta del usuario
 */
function handleAnswer(isCorrect) {
  if (isCorrect) {
    score.correct++;
  } else {
    score.incorrect++;
  }
  
  updateScore();
  currentIndex++;
  updateProgress();
  
  // Siguiente tarjeta con pequeño delay para la animación
  setTimeout(() => showCard(currentIndex), 200);
}

/**
 * Actualiza la barra de progreso
 */
function updateProgress() {
  const progressFill = document.getElementById('quizProgress');
  const progressCurrent = document.getElementById('progressCurrent');
  const progressTotal = document.getElementById('progressTotal');
  
  const progress = Math.min((currentIndex + 1) / score.total * 100, 100);
  
  if (progressFill) progressFill.style.width = `${progress}%`;
  if (progressCurrent) progressCurrent.textContent = Math.min(currentIndex + 1, score.total);
  if (progressTotal) progressTotal.textContent = score.total;
}

/**
 * Actualiza el marcador
 */
function updateScore() {
  document.getElementById('scoreCorrect').textContent = score.correct;
  document.getElementById('scoreIncorrect').textContent = score.incorrect;
}

/**
 * Muestra los resultados finales
 */
function showResults() {
  const percentage = Math.round((score.correct / score.total) * 100);
  
  let icon, title, text;
  
  if (percentage >= 80) {
    icon = 'success';
    title = '¡Excelente! 🎉';
    text = `Has acertado ${score.correct} de ${score.total} (${percentage}%). ¡Dominas este tema!`;
  } else if (percentage >= 50) {
    icon = 'info';
    title = '¡Buen trabajo! 👍';
    text = `Has acertado ${score.correct} de ${score.total} (${percentage}%). Vas por buen camino.`;
  } else {
    icon = 'warning';
    title = 'Sigue practicando 💪';
    text = `Has acertado ${score.correct} de ${score.total} (${percentage}%). ¡La práctica hace al maestro!`;
  }
  
  closeQuiz();
  
  Swal.fire({
    icon,
    title,
    text,
    showCancelButton: true,
    confirmButtonText: 'Repetir Quiz',
    cancelButtonText: 'Cerrar',
    confirmButtonColor: 'var(--accent-primary)',
    cancelButtonColor: 'var(--text-muted)',
    background: 'var(--bg-card)',
    color: 'var(--text-main)'
  }).then((result) => {
    if (result.isConfirmed) {
      setTimeout(openQuiz, 200);
    }
  });
  
  // Guardar resultado en localStorage
  saveQuizResult(percentage);
}

/**
 * Guarda el resultado del quiz en localStorage
 */
function saveQuizResult(percentage) {
  const key = 'quizResults';
  const results = JSON.parse(localStorage.getItem(key) || '{}');
  
  const moduloId = document.querySelector('main')?.dataset.modulo;
  const claseId = document.querySelector('main')?.dataset.clase;
  const classKey = `m${moduloId}-c${claseId}`;
  
  if (!results[classKey]) {
    results[classKey] = [];
  }
  
  results[classKey].push({
    date: new Date().toISOString(),
    score: percentage,
    correct: score.correct,
    total: score.total
  });
  
  // Mantener solo últimos 10 resultados por clase
  if (results[classKey].length > 10) {
    results[classKey] = results[classKey].slice(-10);
  }
  
  localStorage.setItem(key, JSON.stringify(results));
}