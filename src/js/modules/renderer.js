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
          <h1>${formatText(clase.titulo)}</h1>
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
        <h3>${formatText(tema.titulo)}</h3>
      </div>
      
      <p class="tema-intro">${formatText(tema.contenido)}</p>
      
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
          ${tema.puntosClave.map(punto => `<li><i class="fa-solid fa-check"></i><span>${formatText(punto)}</span></li>`).join('')}
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
            <p>${formatText(c.descripcion)}</p>
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
              <p>${formatText(m.descripcion)}</p>
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
              <p>${formatText(p.comportamiento)}</p>
              ${p.solucion ? `<p class="tip"><i class="fa-solid fa-lightbulb"></i> ${formatText(p.solucion)}</p>` : ''}
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
            <p>${formatText(t.descripcion)}</p>
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
            <p>${formatText(t.descripcion)}</p>
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

  // Comparación nullish (solo cuando es un array)
  if (tema.comparacion && Array.isArray(tema.comparacion)) {
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
    html += `<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i><span>${formatText(tema.alerta)}</span></div>`;
  }

  // Nota general
  if (tema.nota && !tema.ejemplos && !tema.comparacion) {
    html += `<div class="alert info"><i class="fa-solid fa-circle-info"></i> <span>${formatText(tema.nota)}</span></div>`;
  }

  // Sintaxis simple (string)
  if (tema.sintaxis && typeof tema.sintaxis === 'string' && !tema.equivalencia) {
    html += `
      <div class="syntax-box">
        <code class="syntax-code">${escapeHtml(tema.sintaxis)}</code>
      </div>
    `;
  }

  // Ejemplo de código simple (propiedad ejemplo)
  if (tema.ejemplo && typeof tema.ejemplo === 'string') {
    html += `<pre class="code-snippet"><code>${escapeHtml(tema.ejemplo)}</code></pre>`;
  }

  // Ejemplo de código simple (propiedad codigo - Módulo 3)
  if (tema.codigo && typeof tema.codigo === 'string') {
    html += `<pre class="code-snippet"><code>${escapeHtml(tema.codigo)}</code></pre>`;
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
              <p>${formatText(d.descripcion)}</p>
              <pre class="code-snippet"><code>${escapeHtml(d.ejemplo)}</code></pre>
            </div>
          `).join('')}
        </div>
        ${tema.funcionVsMetodo.note ? `<div class="alert info"><i class="fa-solid fa-lightbulb"></i> ${formatText(tema.funcionVsMetodo.note)}</div>` : ''}
      </div>
    `;
  }

  // Ejemplo de función
  if (tema.ejemploFuncion) {
    html += `
      <div class="function-example">
        <h4 class="function-example-title"><i class="fa-solid fa-code"></i> ${tema.ejemploFuncion.descripcion}</h4>
        <pre class="code-snippet large"><code>${escapeHtml(tema.ejemploFuncion.codigo)}</code></pre>
        <p class="function-explanation"><i class="fa-solid fa-arrow-right"></i> ${formatText(tema.ejemploFuncion.explicacion)}</p>
      </div>
    `;
  }

  // =====================
  // MÓDULO 2: FUNCIONES
  // =====================

  // Estructura de una función
  if (tema.estructuraFuncion) {
    html += `
      <div class="structure-section">
        <div class="structure-parts">
          ${tema.estructuraFuncion.partes.map((p, i) => `
            <div class="structure-part">
              <span class="part-number">${i + 1}</span>
              <div class="part-content">
                <strong>${p.nombre}</strong>
                <p>${formatText(p.descripcion)}</p>
              </div>
            </div>
          `).join('')}
        </div>
        <pre class="code-snippet large"><code>${escapeHtml(tema.estructuraFuncion.codigo)}</code></pre>
      </div>
    `;
  }

  // Ejemplos de invocación
  if (tema.ejemplosInvocacion) {
    html += `
      <div class="examples-grid">
        ${tema.ejemplosInvocacion.map(e => `
          <div class="example-card">
            <h5>${e.titulo}</h5>
            <pre class="code-snippet"><code>${escapeHtml(e.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tipos de retorno
  if (tema.tiposRetorno) {
    html += `
      <div class="return-types-grid">
        ${tema.tiposRetorno.map(t => `
          <div class="return-type-card">
            <h5>${t.tipo}</h5>
            <p>${formatText(t.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(t.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Conceptos de parámetros
  if (tema.conceptosParametros) {
    html += `
      <div class="concepts-list">
        ${tema.conceptosParametros.map(c => `
          <div class="concept-card">
            <h5><i class="fa-solid fa-lightbulb"></i> ${c.nombre}</h5>
            <p>${formatText(c.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(c.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Paso de parámetros (valor vs referencia)
  if (tema.pasoParametros) {
    html += `
      <div class="pass-params-grid">
        ${tema.pasoParametros.map(p => `
          <div class="pass-param-card ${p.color || ''}">
            <div class="pass-param-header">
              <h5>${p.tipo}</h5>
              <span class="applies-to">${p.aplicaA}</span>
            </div>
            <p>${formatText(p.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(p.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tipos de declaración de funciones
  if (tema.tiposDeclaracion) {
    html += `
      <div class="declaration-types-grid">
        ${tema.tiposDeclaracion.map(t => `
          <div class="declaration-type-card ${t.destacado ? 'destacado' : ''}">
            <div class="declaration-header">
              <i class="fa-solid ${t.icono || 'fa-code'}"></i>
              <h5>${t.nombre}</h5>
            </div>
            <p>${formatText(t.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(t.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Ejemplo de callback
  if (tema.ejemploCallback) {
    html += `
      <div class="callback-example">
        <h5><i class="fa-solid fa-share"></i> ${tema.ejemploCallback.descripcion}</h5>
        <pre class="code-snippet large"><code>${escapeHtml(tema.ejemploCallback.codigo)}</code></pre>
        <p class="callback-explanation"><i class="fa-solid fa-info-circle"></i> ${formatText(tema.ejemploCallback.explicacion)}</p>
      </div>
    `;
  }

  // Caso de uso (callbacks, etc)
  if (tema.casoDeUso) {
    html += `
      <div class="use-case">
        <h5><i class="fa-solid fa-flask"></i> ${tema.casoDeUso.titulo}</h5>
        <pre class="code-snippet"><code>${escapeHtml(tema.casoDeUso.codigo)}</code></pre>
      </div>
    `;
  }

  // Sintaxis IIFE
  if (tema.sintaxisIIFE) {
    html += `
      <div class="iife-section">
        <div class="syntax-highlight">
          <code>${tema.sintaxisIIFE.estructura}</code>
        </div>
        <pre class="code-snippet large"><code>${escapeHtml(tema.sintaxisIIFE.codigo)}</code></pre>
        <div class="iife-uses">
          <h5><i class="fa-solid fa-check-circle"></i> Usos comunes:</h5>
          <ul class="check-list">
            ${tema.sintaxisIIFE.usos.map(u => `<li><i class="fa-solid fa-check"></i><span>${u}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Funciones anidadas
  if (tema.funcionesAnidadas) {
    html += `
      <div class="nested-functions">
        <pre class="code-snippet large"><code>${escapeHtml(tema.funcionesAnidadas.codigo)}</code></pre>
        ${tema.funcionesAnidadas.nota ? `<div class="alert info"><i class="fa-solid fa-info-circle"></i> ${formatText(tema.funcionesAnidadas.nota)}</div>` : ''}
      </div>
    `;
  }

  // Retorno de función
  if (tema.retornoFuncion) {
    html += `
      <div class="return-function">
        <h5><i class="fa-solid fa-reply"></i> ${tema.retornoFuncion.titulo}</h5>
        <pre class="code-snippet large"><code>${escapeHtml(tema.retornoFuncion.codigo)}</code></pre>
        <p class="return-explanation"><i class="fa-solid fa-arrow-right"></i> ${formatText(tema.retornoFuncion.explicacion)}</p>
      </div>
    `;
  }

  // Qué son closures
  if (tema.queSonClosures) {
    html += `
      <div class="closures-intro">
        <p class="closures-definition">${formatText(tema.queSonClosures.definicion)}</p>
        <div class="closures-importance">
          <h5><i class="fa-solid fa-star"></i> ¿Por qué son importantes?</h5>
          <ul class="check-list">
            ${tema.queSonClosures.porQueImportan.map(p => `<li><i class="fa-solid fa-check"></i><span>${formatText(p)}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Ejemplo de closure
  if (tema.ejemploClosure) {
    html += `
      <div class="closure-example">
        <div class="example-header">
          <i class="fa-solid fa-shield-halved"></i>
          <span>${tema.ejemploClosure.titulo || 'Ejemplo Práctico'}</span>
        </div>
        <pre class="code-snippet large"><code>${escapeHtml(tema.ejemploClosure.codigo)}</code></pre>
        ${tema.ejemploClosure.explicacion ? `<p class="closure-explanation"><i class="fa-solid fa-info-circle"></i> ${formatText(tema.ejemploClosure.explicacion)}</p>` : ''}
        ${tema.ejemploClosure.puntosClave ? `
          <div class="closure-points">
            <ul class="check-list">
              ${tema.ejemploClosure.puntosClave.map(p => `<li><i class="fa-solid fa-check"></i><span>${formatText(p)}</span></li>`).join('')}
            </ul>
          </div>
        ` : ''}
      </div>
    `;
  }

  // =====================
  // CLASE 5: STRINGS, NUMBERS, CONTROL DE FLUJO
  // =====================

  // Formas de crear (strings)
  if (tema.formasCrear) {
    html += `
      <div class="creation-methods">
        ${tema.formasCrear.map(f => `
          <div class="creation-card ${f.destacado ? 'destacado' : ''}">
            <h5>${f.tipo}</h5>
            <pre class="code-snippet"><code>${escapeHtml(f.ejemplo)}</code></pre>
            <p>${formatText(f.descripcion)}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Comparación (antes/después)
  if (tema.comparacion && tema.comparacion.antes) {
    html += `
      <div class="comparison-before-after">
        <h5>${tema.comparacion.titulo}</h5>
        <div class="comparison-columns">
          <div class="comparison-col before">
            <span class="comparison-label">❌ Antes</span>
            <pre class="code-snippet"><code>${escapeHtml(tema.comparacion.antes)}</code></pre>
          </div>
          <div class="comparison-col after">
            <span class="comparison-label">✓ Después</span>
            <pre class="code-snippet"><code>${escapeHtml(tema.comparacion.despues)}</code></pre>
          </div>
        </div>
      </div>
    `;
  }

  // Métodos de String
  if (tema.metodosString) {
    html += `
      <div class="table-container">
        <table class="data-table methods-table">
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            ${tema.metodosString.map(m => `
              <tr>
                <td data-label="Método"><code>${m.metodo}</code></td>
                <td data-label="Descripción">${formatText(m.descripcion)}</td>
                <td data-label="Ejemplo"><code>${escapeHtml(m.ejemplo)}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Valores especiales (Number)
  if (tema.valoresEspeciales) {
    html += `
      <div class="special-values">
        ${tema.valoresEspeciales.map(v => `
          <div class="special-value-card">
            <code>${v.valor}</code>
            <p>${formatText(v.descripcion)}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Métodos de Number
  if (tema.metodosNumber) {
    html += `
      <div class="table-container">
        <table class="data-table methods-table">
          <thead>
            <tr>
              <th>Método</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            ${tema.metodosNumber.map(m => `
              <tr>
                <td data-label="Método"><code>${m.metodo}</code></td>
                <td data-label="Descripción">${formatText(m.descripcion)}</td>
                <td data-label="Ejemplo"><code>${escapeHtml(m.ejemplo)}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Estructura de condicional
  if (tema.estructuraCondicional) {
    html += `
      <div class="conditional-structure">
        <pre class="code-snippet large"><code>${escapeHtml(tema.estructuraCondicional.sintaxis)}</code></pre>
        <div class="conditional-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo práctico:</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.estructuraCondicional.ejemplo)}</code></pre>
        </div>
      </div>
    `;
  }

  // Estructura de Switch
  if (tema.estructuraSwitch) {
    html += `
      <div class="switch-structure">
        <pre class="code-snippet large"><code>${escapeHtml(tema.estructuraSwitch.sintaxis)}</code></pre>
        <div class="switch-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.estructuraSwitch.ejemplo)}</code></pre>
        </div>
      </div>
    `;
  }

  // Estructura de While
  if (tema.estructuraWhile) {
    html += `
      <div class="loop-structure">
        <pre class="code-snippet"><code>${escapeHtml(tema.estructuraWhile.sintaxis)}</code></pre>
        <div class="loop-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.estructuraWhile.ejemplo)}</code></pre>
        </div>
      </div>
    `;
  }

  // Estructura de Do-While
  if (tema.estructuraDoWhile) {
    html += `
      <div class="loop-structure">
        <pre class="code-snippet"><code>${escapeHtml(tema.estructuraDoWhile.sintaxis)}</code></pre>
        <div class="loop-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.estructuraDoWhile.ejemplo)}</code></pre>
        </div>
      </div>
    `;
  }

  // Estructura de For
  if (tema.estructuraFor) {
    html += `
      <div class="for-structure">
        <pre class="code-snippet"><code>${escapeHtml(tema.estructuraFor.sintaxis)}</code></pre>
        <div class="for-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.estructuraFor.ejemplo)}</code></pre>
        </div>
        ${tema.estructuraFor.explicacion ? `
          <div class="for-explanation-steps">
            ${tema.estructuraFor.explicacion.map(e => {
              const [labelPart, descPart] = e.split(' → ');
              const [label, code] = labelPart.split(': ');
              return `
                <div class="for-step">
                  <i class="fa-solid fa-arrow-right"></i>
                  <span class="step-label">${label}:</span>
                  <code class="inline-code">${code}</code>
                  <span class="step-desc">${formatText(descPart)}</span>
                </div>
              `;
            }).join('')}
          </div>
        ` : ''}
      </div>
    `;
  }

  // =====================
  // CLASE 6: SCOPE, HOISTING, CLOSURES
  // =====================

  // Definición de Scope
  if (tema.definicionScope) {
    html += `
      <div class="scope-definition">
        <p class="scope-desc">${formatText(tema.definicionScope.descripcion)}</p>
        <div class="scope-rules">
          <h5><i class="fa-solid fa-list-check"></i> Reglas importantes:</h5>
          <ul class="check-list">
            ${tema.definicionScope.reglas.map(r => `<li><i class="fa-solid fa-check"></i><span>${formatText(r)}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Tipos de Scope
  if (tema.tiposScope) {
    html += `
      <div class="scope-types-grid">
        ${tema.tiposScope.map(s => `
          <div class="scope-type-card ${s.color || ''}">
            <div class="scope-header">
              <i class="fa-solid ${s.icono}"></i>
              <h5>${s.tipo}</h5>
            </div>
            <p>${formatText(s.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(s.ejemplo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Ejemplo de cadena de scope
  if (tema.ejemploCadena) {
    html += `
      <div class="scope-chain-example">
        <pre class="code-snippet large"><code>${escapeHtml(tema.ejemploCadena.codigo)}</code></pre>
        <p class="scope-chain-explanation"><i class="fa-solid fa-arrow-right"></i> ${formatText(tema.ejemploCadena.explicacion)}</p>
      </div>
    `;
  }

  // Ejemplo de Hoisting
  if (tema.ejemploHoisting) {
    html += `
      <div class="hoisting-example">
        <p class="hoisting-question"><i class="fa-solid fa-question-circle"></i> ${tema.ejemploHoisting.pregunta}</p>
        <pre class="code-snippet"><code>${escapeHtml(tema.ejemploHoisting.codigo)}</code></pre>
        <div class="hoisting-answer">
          <span class="answer-label">Respuesta:</span>
          <code class="answer-value">${tema.ejemploHoisting.respuesta}</code>
        </div>
        <div class="hoisting-interpretation">
          <p>JavaScript lo interpreta así:</p>
          <pre class="code-snippet small"><code>${escapeHtml(tema.ejemploHoisting.explicacion.replace('JavaScript lo interpreta así:', '').trim())}</code></pre>
        </div>
      </div>
    `;
  }

  // Tabla de Hoisting
  if (tema.tablaHoisting) {
    html += `
      <div class="table-container">
        <table class="data-table hoisting-table">
          <thead>
            <tr>
              <th>Elemento</th>
              <th>Hoisting</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            ${tema.tablaHoisting.map(h => `
              <tr>
                <td data-label="Elemento"><code>${h.elemento}</code></td>
                <td data-label="Hoisting">${h.hoisting}</td>
                <td data-label="Resultado">${h.resultado}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Ejemplos de funciones (hoisting)
  if (tema.ejemploFunciones) {
    html += `
      <div class="hoisting-functions">
        <div class="hoisting-func-card success">
          <h5><i class="fa-solid fa-check-circle"></i> Función Declarativa (con hoisting)</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.ejemploFunciones.funcionDeclarativa)}</code></pre>
        </div>
        <div class="hoisting-func-card error">
          <h5><i class="fa-solid fa-times-circle"></i> Expresión de Función (sin hoisting)</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.ejemploFunciones.funcionExpresion)}</code></pre>
        </div>
      </div>
    `;
  }

  // Tabla comparativa (Genérica)
  if (tema.tablaComparativa && tema.tablaComparativa.length > 0) {
    const primerItem = tema.tablaComparativa[0];
    
    // CASO 1: Tabla de Variables (var, let, const)
    if ('var' in primerItem) {
      html += `
        <div class="table-container">
          <table class="data-table comparison-table-vars">
            <thead>
              <tr>
                <th>Característica</th>
                <th><code>var</code></th>
                <th><code>let</code></th>
                <th><code>const</code></th>
              </tr>
            </thead>
            <tbody>
              ${tema.tablaComparativa.map(c => `
                <tr>
                  <td data-label="Característica">${formatText(c.caracteristica)}</td>
                  <td data-label="var">${formatText(c.var)}</td>
                  <td data-label="let">${formatText(c.let)}</td>
                  <td data-label="const">${formatText(c.const)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } 
    // CASO 2: Tabla de Funciones (Tradicional vs Arrow)
    else if ('tradicional' in primerItem) {
      html += `
        <div class="table-container">
          <table class="data-table comparison-table-functions">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Función Tradicional</th>
                <th>Arrow Function</th>
              </tr>
            </thead>
            <tbody>
              ${tema.tablaComparativa.map(c => `
                <tr>
                  <td data-label="Característica">${formatText(c.caracteristica)}</td>
                  <td data-label="Tradicional">${formatText(c.tradicional)}</td>
                  <td data-label="Arrow">${formatText(c.arrow)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
    // CASO 3: Genérica (Totalmente dinámica)
    else {
      // Obtener todas las columnas
      const columnas = Object.keys(primerItem);
      
      html += `
        <div class="table-container">
          <table class="data-table comparison-table-generic">
            <thead>
              <tr>
                ${columnas.map(col => `<th>${col.charAt(0).toUpperCase() + col.slice(1)}</th>`).join('')}
              </tr>
            </thead>
            <tbody>
              ${tema.tablaComparativa.map(row => `
                <tr>
                  ${columnas.map(col => `<td data-label="${col}">${formatText(row[col])}</td>`).join('')}
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    }
    
    // Recomendación común al final
    if (tema.recomendacion) {
      html += `
        <div class="alert success">
          <i class="fa-solid fa-lightbulb"></i> 
          <span><strong>Recomendación:</strong> ${formatText(tema.recomendacion)}</span>
        </div>`;
    }
  }

  // Requisitos (para closures, etc)
  if (tema.requisitos) {
    html += `
      <div class="requirements-list">
        <div class="list-header">
          <i class="fa-solid fa-clipboard-list"></i>
          <span>Requisitos para crear un closure:</span>
        </div>
        <ol class="numbered-list">
          ${tema.requisitos.map(r => `<li>${r}</li>`).join('')}
        </ol>
      </div>
    `;
  }

  // Usos de closures
  if (tema.usosClosures) {
    html += `
      <div class="closures-uses-grid">
        ${tema.usosClosures.map(u => `
          <div class="closure-use-card">
            <h5><i class="fa-solid fa-cube"></i> ${u.uso}</h5>
            <p>${formatText(u.descripcion)}</p>
            ${u.ejemplo ? `<pre class="code-snippet small"><code>${escapeHtml(u.ejemplo)}</code></pre>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // =====================
  // CLASE 7: EJERCICIOS PRÁCTICOS
  // =====================

  // Técnicas de validación
  if (tema.tecnicasValidacion) {
    html += `
      <div class="validation-techniques">
        <div class="technique-card">
          <h5><i class="fa-solid fa-keyboard"></i> Pedir datos con prompt</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.tecnicasValidacion.prompt)}</code></pre>
        </div>
        <div class="technique-card">
          <h5><i class="fa-solid fa-shield-halved"></i> Validar entrada</h5>
          <pre class="code-snippet"><code>${escapeHtml(tema.tecnicasValidacion.validacion)}</code></pre>
        </div>
      </div>
    `;
  }

  // Solución de ejercicio
  if (tema.solucion) {
    html += `
      <div class="exercise-solution">
        <h5><i class="fa-solid fa-code"></i> Solución:</h5>
        <pre class="code-snippet large"><code>${escapeHtml(tema.solucion.codigo)}</code></pre>
      </div>
    `;
  }

  // Formas de concatenación (Clase 5)
  if (tema.formasConcatenacion) {
    html += `
      <div class="concatenation-methods">
        ${tema.formasConcatenacion.map(f => `
          <div class="concat-card">
            <h5><i class="fa-solid fa-link"></i> ${f.metodo}</h5>
            <p>${f.descripcion}</p>
            <pre class="code-snippet"><code>${escapeHtml(f.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Caracteres de escape (Clase 5)
  if (tema.caracteresEscape) {
    html += `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Carácter</th>
              <th>Descripción</th>
              <th>Ejemplo</th>
            </tr>
          </thead>
          <tbody>
            ${tema.caracteresEscape.map(c => `
              <tr>
                <td data-label="Carácter"><code>${escapeHtml(c.caracter)}</code></td>
                <td data-label="Descripción">${formatText(c.descripcion)}</td>
                <td data-label="Ejemplo"><code>${escapeHtml(c.ejemplo)}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Formas de crear número (Clase 5)
  if (tema.formasCrearNumero) {
    html += `
      <div class="creation-methods">
        ${tema.formasCrearNumero.map(f => `
          <div class="creation-card">
            <h5>${f.forma}</h5>
            <code>${escapeHtml(f.ejemplo)}</code>
            <p>${formatText(f.descripcion)}</p>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Constantes de Number (Clase 5)
  if (tema.constantesNumber) {
    html += `
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Constante</th>
              <th>Descripción</th>
              <th>Valor</th>
            </tr>
          </thead>
          <tbody>
            ${tema.constantesNumber.map(c => `
              <tr>
                <td data-label="Constante"><code>${escapeHtml(c.constante)}</code></td>
                <td data-label="Descripción">${formatText(c.descripcion)}</td>
                <td data-label="Valor"><code>${c.valor}</code></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    `;
  }

  // Objeto window (Clase 6)
  if (tema.objetoWindow) {
    html += `
      <div class="window-object-section">
        <pre class="code-snippet large"><code>${escapeHtml(tema.objetoWindow.codigo)}</code></pre>
        <div class="info-box puntos-clave">
          <div class="info-box-header">
            <i class="fa-solid fa-key"></i>
            <span>Puntos Clave</span>
          </div>
          <ul class="check-list">
            ${tema.objetoWindow.puntosClave.map(p => `<li><i class="fa-solid fa-check"></i><span>${formatText(p)}</span></li>`).join('')}
          </ul>
        </div>
      </div>
    `;
  }

  // Short-circuit behavior (Repaso lógica)
  if (tema.shortCircuit) {
    html += `
      <div class="short-circuit-grid">
        ${tema.shortCircuit.map(s => `
          <div class="short-circuit-card">
            <div class="short-circuit-header">
              <code class="operator">${s.operador}</code>
              <span>${s.regla}</span>
            </div>
            <pre class="code-snippet"><code>${escapeHtml(s.ejemplos)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Comportamiento especial (NaN, etc)
  if (tema.comportamientoEspecial) {
    html += `
      <div class="info-box behavior-box">
        <div class="info-box-header">
          <i class="fa-solid fa-flask"></i>
          <span>${tema.comportamientoEspecial.titulo}</span>
        </div>
        <ul class="check-list">
          ${tema.comportamientoEspecial.puntos.map(p => `<li><i class="fa-solid fa-check"></i><span>${formatText(p)}</span></li>`).join('')}
        </ul>
        <pre class="code-snippet"><code>${escapeHtml(tema.comportamientoEspecial.codigo)}</code></pre>
      </div>
    `;
  }

  // Debug Scopes guide
  if (tema.debugScopes) {
    html += `
      <div class="debug-scopes-section">
        <div class="debug-steps">
          ${tema.debugScopes.pasos.map((p, i) => `
            <div class="debug-step">
              <span class="step-num">${i + 1}</span>
              <p>${formatText(p)}</p>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Formas de declaración (Arrays, Objetos - Módulo 3)
  if (tema.formasDeclaracion) {
    html += `
      <div class="declaration-methods">
        ${tema.formasDeclaracion.map(f => `
          <div class="declaration-method-card">
            <h5><i class="fa-solid fa-code"></i> ${f.forma}</h5>
            <p>${formatText(f.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(f.ejemplo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Métodos de iteración (for, for...of, for...in - Módulo 3)
  if (tema.metodosIteracion) {
    html += `
      <div class="iteration-methods">
        ${tema.metodosIteracion.map(m => `
          <div class="iteration-card">
            <h5><i class="fa-solid fa-repeat"></i> ${m.metodo}</h5>
            <p>${formatText(m.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(m.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Conceptos con parámetros (continue/break - Módulo 3)
  if (tema.conceptosParametros) {
    html += `
      <div class="concepts-grid">
        ${tema.conceptosParametros.map(c => `
          <div class="concept-card">
            <h5><i class="fa-solid fa-terminal"></i> <code>${c.nombre}</code></h5>
            <p>${formatText(c.descripcion)}</p>
            ${c.codigo ? `<pre class="code-snippet"><code>${escapeHtml(c.codigo)}</code></pre>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Tipos de declaración de funciones (Arrow Functions - Módulo 3)
  if (tema.tiposDeclaracion && tema.titulo.toLowerCase().includes('sintaxis')) {
    html += `
      <div class="declaration-types-grid">
        ${tema.tiposDeclaracion.map(t => `
          <div class="declaration-type-card">
            <h5><i class="fa-solid ${t.icono || 'fa-arrow-right'}"></i> ${t.nombre}</h5>
            <p>${formatText(t.descripcion)}</p>
            <pre class="code-snippet"><code>${escapeHtml(t.codigo)}</code></pre>
          </div>
        `).join('')}
      </div>
    `;
  }

  // Métodos de Arrays (push, pop, etc. - Módulo 3)
  if (tema.metodosArray) {
    html += `
      <div class="array-methods-list">
        ${tema.metodosArray.map(m => `
          <div class="array-method-card">
            <h5><i class="fa-solid fa-cube"></i> ${m.metodo}</h5>
            <p>${formatText(m.descripcion)}</p>
            ${m.codigo ? `<pre class="code-snippet"><code>${escapeHtml(m.codigo)}</code></pre>` : ''}
          </div>
        `).join('')}
      </div>
    `;
  }

  // Sintaxis destacada (Módulo 3)
  if (tema.sintaxis) {
    html += `
      <div class="syntax-box">
        <pre class="code-snippet syntax"><code>${escapeHtml(tema.sintaxis)}</code></pre>
      </div>
    `;
  }



  // Recomendaciones (Módulo 3)
  if (tema.recomendacion) {
    html += `
      <div class="alert info">
        <i class="fa-solid fa-lightbulb"></i>
        <span>${formatText(tema.recomendacion)}</span>
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
                  ${op.descripcion ? `<small>${formatText(op.descripcion)}</small>` : ''}
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
                  <p>${formatText(v.descripcion)}</p>
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
            <p class="logic-rule">${formatText(op.regla)}</p>
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
 * Formatea texto básico (negrita y código inline)
 */
function formatText(text) {
  if (!text) return '';
  
  // Primero escapamos HTML para seguridad
  let formatted = escapeHtml(text);
  
  // Negrita: **texto**
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  
  // Código inline: `texto`
  formatted = formatted.replace(/`(.*?)`/g, '<code class="inline-code">$1</code>');
  
  return formatted;
}

/**
 * Escapa caracteres HTML
 */
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
