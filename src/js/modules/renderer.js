// RENDERIZADOR UNIFICADO - Genera el contenido de cualquier clase
import { getClase } from '../data/index.js';

/**
 * Renderiza el contenido completo de una clase
 * @param {number} moduloId - ID del módulo (1, 2, 3...)
 * @param {number} claseId - ID de la clase dentro del módulo
 */
export function renderClase(moduloId, claseId) {
  const container = document.getElementById('lessonContainer');
  if (!container) return;

  const clase = getClase(moduloId, claseId);
  if (!clase) {
    container.innerHTML = '<p class="error">Clase no encontrada</p>';
    return;
  }

  container.innerHTML = `
    <article class="class-card">
      <div class="class-card-header">
        <div class="class-number">${clase.id}</div>
        <div class="class-info">
          <h1>${clase.titulo}</h1>
        </div>
      </div>
      
      <div class="class-content">
        ${clase.temas.map((tema, index) => renderTema(tema, index)).join('')}
      </div>
    </article>
  `;
}

/**
 * Renderiza un tema completo
 */
function renderTema(tema, index) {
  return `
    <section class="tema-block">
      <div class="tema-header">
        <span class="tema-number">${index + 1}</span>
        <h3>${tema.titulo}</h3>
      </div>
      
      <p class="tema-intro">${tema.contenido}</p>
      
      ${renderTemaContent(tema)}
    </section>
  `;
}

/**
 * Renderiza el contenido específico de cada tema
 */
function renderTemaContent(tema) {
  let html = '';

  // Puntos clave
  if (tema.puntosClave) {
    html += `
      <div class="info-box puntos-clave">
        <div class="info-box-header">
          <i class="fa-solid fa-key"></i>
          <span>Puntos Clave</span>
        </div>
        <ul class="check-list">
          ${tema.puntosClave.map(punto => `<li><i class="fa-solid fa-check"></i> ${punto}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // Características
  if (tema.caracteristicas) {
    html += `
      <div class="features-grid">
        ${tema.caracteristicas.map(c => `
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-cube"></i></div>
            <h4>${c.nombre}</h4>
            <p>${c.descripcion}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Métodos de ejecución
  if (tema.metodos && tema.titulo.includes('ejecutar')) {
    html += `
      <div class="methods-list">
        ${tema.metodos.map((m, i) => `
          <div class="method-item">
            <div class="method-number">${i + 1}</div>
            <div class="method-content">
              <h4>${m.nombre}</h4>
              <p>${m.descripcion}</p>
              ${m.ejemplo ? `<pre class="code-snippet"><code>${escapeHtml(m.ejemplo)}</code></pre>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Console métodos
  if (tema.metodos && tema.titulo.includes('Console')) {
    html += `
      <div class="console-grid">
        ${tema.metodos.map(m => `
          <div class="console-item ${m.color}">
            <code>${m.nombre}</code>
            <span>${m.descripcion}</span>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Posiciones del script
  if (tema.posiciones) {
    html += `
      <div class="positions-list">
        ${tema.posiciones.map(p => `
          <div class="position-item">
            <code class="position-tag">${p.lugar}</code>
            <div class="position-info">
              <p>${p.comportamiento}</p>
              ${p.solucion ? `<p class="tip"><i class="fa-solid fa-lightbulb"></i> ${p.solucion}</p>` : ''}
            </div>
          </div>
        `).join('')}
      </div>
      ${tema.codigoEjemplo ? `<pre class="code-snippet"><code>${escapeHtml(tema.codigoEjemplo)}</code></pre>` : ''}
    `;
  }

  // Tipos de declaración de variables (var, let, const)
  if (tema.tipos && tema.titulo.includes('Declaración')) {
    html += `
      <div class="declaration-grid">
        ${tema.tipos.map(t => `
          <div class="declaration-card ${t.color}">
            <div class="declaration-badge">
              <i class="fa-solid ${t.icono}"></i>
              <code>${t.palabra}</code>
            </div>
            <p>${t.descripcion}</p>
            <pre class="code-snippet"><code>${escapeHtml(t.ejemplo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tipos de datos primitivos
  if (tema.tipos && tema.titulo.includes('primitivos')) {
    html += `
      <div class="types-grid">
        ${tema.tipos.map(t => `
          <div class="type-card">
            <h4>${t.nombre}</h4>
            <p>${t.descripcion}</p>
            <div class="type-examples">
              ${t.ejemplos.map(e => `<code>${escapeHtml(e)}</code>`).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Ejemplos de typeof
  if (tema.ejemplos && tema.titulo.includes('typeof')) {
    html += `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Expresión</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            ${tema.ejemplos.map(e => `
              <tr>
                <td data-label="Expresión"><code>${escapeHtml(e.codigo)}</code></td>
                <td data-label="Resultado"><code class="result">${escapeHtml(e.resultado)}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${tema.nota ? `<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${tema.nota}</div>` : ''}
    `;
  }

  // Reglas de naming
  if (tema.reglas && (tema.titulo.includes('Naming') || tema.titulo.includes('nombres'))) {
    html += `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Tipo</th>
              <th>Ejemplo</th>
              <th>Estilo</th>
            </tr>
          </thead>
          <tbody>
            ${tema.reglas.map(r => `
              <tr>
                <td data-label="Tipo">${r.tipo}</td>
                <td data-label="Ejemplo"><code>${escapeHtml(r.ejemplo)}</code></td>
                <td data-label="Estilo"><span class="style-badge">${r.estilo}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Operadores
  if (tema.operadores) {
    html += renderOperadores(tema);
  }

  // Ejemplos de operador ternario
  if (tema.ejemplos && tema.titulo.includes('Ternario')) {
    html += `
      <div class="syntax-highlight">
        <code>${tema.sintaxis}</code>
      </div>
      <div class="examples-list">
        ${tema.ejemplos.map(e => `
          <div class="example-item">
            <h5>${e.descripcion}</h5>
            <pre class="code-snippet"><code>${escapeHtml(e.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Comparación nullish
  if (tema.comparacion) {
    html += `
      <div class="syntax-highlight">
        <code>${tema.sintaxis}</code>
      </div>
      <div class="table-container">
        <table class="data-table comparison-table">
          <thead>
            <tr>
              <th>Expresión</th>
              <th>?? (Nullish)</th>
              <th>|| (OR)</th>
            </tr>
          </thead>
          <tbody>
            ${tema.comparacion.map(c => `
              <tr class="${c.diferente ? 'highlight-row' : ''}">
                <td data-label="Expresión"><code>${escapeHtml(c.expresion)}</code></td>
                <td data-label="?? (Nullish)"><code>${escapeHtml(c.resultadoNullish)}</code></td>
                <td data-label="|| (OR)"><code>${escapeHtml(c.resultadoOr)}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${tema.nota ? `<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${tema.nota}</div>` : ''}
    `;
  }

  // Alerta
  if (tema.alerta) {
    html += `<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${tema.alerta}</div>`;
  }

  // Nota general
  if (tema.nota && !tema.ejemplos && !tema.comparacion) {
    html += `<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${tema.nota}</div>`;
  }

  // Ejemplo de código simple
  if (tema.ejemplo && typeof tema.ejemplo === 'string') {
    html += `<pre class="code-snippet"><code>${escapeHtml(tema.ejemplo)}</code></pre>`;
  }

  // Versiones de ECMAScript
  if (tema.versiones) {
    html += `
      <div class="table-container">
        <table class="data-table versions-table">
          <thead>
            <tr>
              <th>Año</th>
              <th>Versión</th>
              <th>Novedades destacadas</th>
            </tr>
          </thead>
          <tbody>
            ${tema.versiones.map(v => `
              <tr class="${v.destacado ? 'highlight-row' : ''}">
                <td data-label="Año">${v.anio}</td>
                <td data-label="Versión"><strong>${v.version}</strong></td>
                <td data-label="Novedades">${v.novedades}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      ${tema.nota ? `<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${tema.nota}</div>` : ''}
    `;
  }

  // Reglas con ejemplos de operadores especiales (&&, ||)
  if (tema.reglas && tema.titulo.includes('Comportamiento especial')) {
    html += `
      <div class="special-operators">
        ${tema.reglas.map(r => `
          <div class="special-operator-card">
            <div class="special-operator-header">
              <code class="special-symbol">${r.operador}</code>
              <span class="special-rule">${r.regla}</span>
            </div>
            <div class="table-container">
              <table class="data-table">
                <thead>
                  <tr>
                    <th>Código</th>
                    <th>Resultado</th>
                    <th>Explicación</th>
                  </tr>
                </thead>
                <tbody>
                  ${r.ejemplos.map(e => `
                    <tr>
                      <td data-label="Código"><code>${escapeHtml(e.codigo)}</code></td>
                      <td data-label="Resultado"><code class="result">${escapeHtml(e.resultado)}</code></td>
                      <td data-label="Explicación">${e.explicacion}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `).join('')}
      </div>
      ${tema.nota ? `<div class="alert info"><i class="fa-brands fa-react"></i> ${tema.nota}</div>` : ''}
    `;
  }

  // Operador de asignación nula (??=)
  if (tema.equivalencia) {
    html += `
      <div class="syntax-highlight">
        <code>${tema.sintaxis}</code>
      </div>
      <div class="equivalence-box">
        <i class="fa-solid fa-equals"></i>
        <code>${tema.equivalencia}</code>
      </div>
      <div class="examples-grid">
        ${tema.ejemplos.map(e => `
          <div class="example-card">
            <pre class="code-snippet"><code>${escapeHtml(e.codigo)}</code></pre>
            <p class="example-explanation"><i class="fa-solid fa-arrow-right"></i> ${e.explicacion}</p>
          </div>
        `).join('')}
      </div>
      ${tema.nota ? `<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${tema.nota}</div>` : ''}
    `;
  }

  // Función vs Método (para introducción a funciones)
  if (tema.funcionVsMetodo) {
    html += `
      <div class="comparison-section">
        <h4 class="comparison-title"><i class="fa-solid fa-code-compare"></i> ${tema.funcionVsMetodo.titulo}</h4>
        <div class="comparison-grid">
          ${tema.funcionVsMetodo.diferencias.map(d => `
            <div class="comparison-card">
              <div class="comparison-header">
                <span class="comparison-type">${d.tipo}</span>
              </div>
              <p>${d.descripcion}</p>
              <pre class="code-snippet"><code>${escapeHtml(d.ejemplo)}</code></pre>
            </div>
          `).join('')}
        </div>
        ${tema.funcionVsMetodo.nota ? `<div class="alert info"><i class="fa-solid fa-lightbulb"></i> ${tema.funcionVsMetodo.nota}</div>` : ''}
      </div>
    `;
  }

  // Ejemplo de función
  if (tema.ejemploFuncion) {
    html += `
      <div class="function-example">
        <h4 class="function-example-title"><i class="fa-solid fa-code"></i> ${tema.ejemploFuncion.descripcion}</h4>
        <pre class="code-snippet large"><code>${escapeHtml(tema.ejemploFuncion.codigo)}</code></pre>
        <p class="function-explanation"><i class="fa-solid fa-arrow-right"></i> ${tema.ejemploFuncion.explicacion}</p>
      </div>
    `;
  }

  return html;
}

/**
 * Renderiza operadores según su tipo
 */
function renderOperadores(tema) {
  const operadores = tema.operadores;
  
  // Operadores simples (aritméticos, asignación, comparación)
  if (operadores[0].simbolo && !operadores[0].variantes && !operadores[0].tablaVerdad) {
    return `
      <div class="table-container">
        <table class="data-table operators-table">
          <thead>
            <tr>
              <th>Operador</th>
              <th>Nombre</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            ${operadores.map(op => `
              <tr class="${op.destacado ? 'highlight-row' : ''}">
                <td data-label="Operador"><code class="operator-symbol">${escapeHtml(op.simbolo)}</code></td>
                <td data-label="Nombre">
                  ${op.nombre}
                  ${op.descripcion ? `<small>${op.descripcion}</small>` : ''}
                </td>
                <td data-label="Ejemplo"><code>${escapeHtml(op.ejemplo)}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Operadores unarios
  if (operadores[0].variantes) {
    return `
      <div class="unary-operators">
        ${operadores.map(op => `
          <div class="unary-card">
            <div class="unary-symbol">
              <code>${op.simbolo}</code>
              <span>${op.nombre}</span>
            </div>
            <div class="variants">
              ${op.variantes.map(v => `
                <div class="variant">
                  <code>${v.forma}</code>
                  <p>${v.descripcion}</p>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
      ${tema.ejemplo ? `<pre class="code-snippet"><code>${escapeHtml(tema.ejemplo)}</code></pre>` : ''}
    `;
  }

  // Operadores lógicos
  if (operadores[0].tablaVerdad || operadores[0].regla) {
    return `
      <div class="logic-operators">
        ${operadores.map(op => `
          <div class="logic-card">
            <div class="logic-header">
              <code class="logic-symbol">${op.simbolo}</code>
              <span>${op.nombre}</span>
            </div>
            <p class="logic-rule">${op.regla}</p>
            ${op.tablaVerdad ? `
              <table class="truth-table">
                <thead>
                  <tr><th>A</th><th>B</th><th>Resultado</th></tr>
                </thead>
                <tbody>
                  ${op.tablaVerdad.map(row => `
                    <tr>
                      <td><code class="${row.a}">${row.a}</code></td>
                      <td><code class="${row.b}">${row.b}</code></td>
                      <td><code class="${row.resultado}">${row.resultado}</code></td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            ` : ''}
            ${op.comportamientoJS ? `
              <div class="js-behavior">
                <i class="fa-brands fa-js"></i> ${op.comportamientoJS}
              </div>
            ` : ''}
            ${op.ejemplos ? `
              <div class="logic-examples">
                ${op.ejemplos.map(e => `<code>${escapeHtml(e)}</code>`).join('')}
              </div>
            ` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  return '';
}

/**
 * Escapa caracteres HTML
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
