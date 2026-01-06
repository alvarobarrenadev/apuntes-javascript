import{c as nt,i as no,a as ao,b as ro,g as lo}from"./search-Dd5MUDFV.js";function co(e,t){const o=document.getElementById("lessonContainer");if(!o)return;const s=nt(e,t);if(!s){o.innerHTML='<p class="error">Clase no encontrada</p>';return}o.innerHTML=`
    <article class="class-card">
      <div class="class-card-header">
        <div class="class-number">${s.id}</div>
        <div class="class-info">
          <h1>${l(s.titulo)}</h1>
        </div>
      </div>
      
      <div class="class-content">
        ${s.temas.map((i,a)=>uo(i,a)).join("")}
      </div>
    </article>
  `}function uo(e,t){return`
    <section class="tema-block" id="t${t}">
      <div class="tema-header">
        <span class="tema-number">${t+1}</span>
        <h3>${l(e.titulo)}</h3>
      </div>
      
      <p class="tema-intro">${l(e.contenido)}</p>
      
      ${po(e)}
    </section>
  `}function po(e){let t="";if(e.puntosClave&&(t+=`
      <div class="info-box puntos-clave">
        <div class="info-box-header">
          <i class="fa-solid fa-key"></i>
          <span>Puntos Clave</span>
        </div>
        <ul class="check-list">
          ${e.puntosClave.map(o=>`<li><i class="fa-solid fa-check"></i><span>${l(o)}</span></li>`).join("")}
        </ul>
      </div>
    `),e.caracteristicas&&(t+=`
      <div class="features-grid">
        ${e.caracteristicas.map(o=>`
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-cube"></i></div>
            <h4>${o.nombre}</h4>
            <p>${l(o.descripcion)}</p>
          </div>
        `).join("")}
      </div>
    `),e.metodos&&e.titulo.includes("ejecutar")&&(t+=`
      <div class="methods-list">
        ${e.metodos.map((o,s)=>`
          <div class="method-item">
            <div class="method-number">${s+1}</div>
            <div class="method-content">
              <h4>${o.nombre}</h4>
              <p>${l(o.descripcion)}</p>
              ${o.ejemplo?`<pre class="code-snippet"><code>${r(o.ejemplo)}</code></pre>`:""}
            </div>
          </div>
        `).join("")}
      </div>
    `),e.metodos&&e.titulo.includes("Console")&&(t+=`
      <div class="console-grid">
        ${e.metodos.map(o=>`
          <div class="console-item ${o.color}">
            <code>${o.nombre}</code>
            <span>${o.descripcion}</span>
          </div>
        `).join("")}
      </div>
    `),e.posiciones&&(t+=`
      <div class="positions-list">
        ${e.posiciones.map(o=>`
          <div class="position-item">
            <code class="position-tag">${o.lugar}</code>
            <div class="position-info">
              <p>${l(o.comportamiento)}</p>
              ${o.solucion?`<p class="tip"><i class="fa-solid fa-lightbulb"></i> ${l(o.solucion)}</p>`:""}
            </div>
          </div>
        `).join("")}
      </div>
      ${e.codigoEjemplo?`<pre class="code-snippet"><code>${r(e.codigoEjemplo)}</code></pre>`:""}
    `),e.tipos&&e.titulo.includes("Declaración")&&(t+=`
      <div class="declaration-grid">
        ${e.tipos.map(o=>`
          <div class="declaration-card ${o.color}">
            <div class="declaration-badge">
              <i class="fa-solid ${o.icono}"></i>
              <code>${o.palabra}</code>
            </div>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.ejemplo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.tipos&&e.titulo.includes("primitivos")&&(t+=`
      <div class="types-grid">
        ${e.tipos.map(o=>`
          <div class="type-card">
            <h4>${o.nombre}</h4>
            <p>${l(o.descripcion)}</p>
            <div class="type-examples">
              ${o.ejemplos.map(s=>`<code>${r(s)}</code>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `),e.ejemplos&&e.titulo.includes("typeof")&&(t+=`
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Expresión</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            ${e.ejemplos.map(o=>`
              <tr>
                <td data-label="Expresión"><code>${r(o.codigo)}</code></td>
                <td data-label="Resultado"><code class="result">${r(o.resultado)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${e.nota?`<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${e.nota}</div>`:""}
    `),e.reglas&&(e.titulo.includes("Naming")||e.titulo.includes("nombres"))&&(t+=`
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
            ${e.reglas.map(o=>`
              <tr>
                <td data-label="Tipo">${o.tipo}</td>
                <td data-label="Ejemplo"><code>${r(o.ejemplo)}</code></td>
                <td data-label="Estilo"><span class="style-badge">${o.estilo}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),e.operadores&&(t+=fo(e)),e.ejemplos&&e.titulo.includes("Ternario")&&(t+=`
      <div class="syntax-highlight">
        <code>${e.sintaxis}</code>
      </div>
      <div class="examples-list">
        ${e.ejemplos.map(o=>`
          <div class="example-item">
            <h5>${o.descripcion}</h5>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.comparacion&&Array.isArray(e.comparacion)&&(t+=`
      <div class="syntax-highlight">
        <code>${e.sintaxis}</code>
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
            ${e.comparacion.map(o=>`
              <tr class="${o.diferente?"highlight-row":""}">
                <td data-label="Expresión"><code>${r(o.expresion)}</code></td>
                <td data-label="?? (Nullish)"><code>${r(o.resultadoNullish)}</code></td>
                <td data-label="|| (OR)"><code>${r(o.resultadoOr)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${e.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${e.nota}</div>`:""}
    `),e.alerta&&(t+=`<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i><span>${l(e.alerta)}</span></div>`),e.nota&&!e.ejemplos&&!e.comparacion&&(t+=`<div class="alert info"><i class="fa-solid fa-circle-info"></i> <span>${l(e.nota)}</span></div>`),e.sintaxis&&typeof e.sintaxis=="string"&&!e.equivalencia&&(t+=`
      <div class="syntax-box">
        <code class="syntax-code">${r(e.sintaxis)}</code>
      </div>
    `),e.ejemplo&&typeof e.ejemplo=="string"&&(t+=`<pre class="code-snippet"><code>${r(e.ejemplo)}</code></pre>`),e.codigos&&(t+=`
      <div class="code-collection">
        ${e.codigos.map(o=>`
          <div class="code-block-item">
            ${o.titulo?`<h5><i class="fa-solid fa-code"></i> ${o.titulo}</h5>`:""}
            ${o.descripcion?`<p class="code-desc">${l(o.descripcion)}</p>`:""}
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
            ${o.explicacion?`<p class="code-explanation"><i class="fa-solid fa-arrow-right"></i> ${l(o.explicacion)}</p>`:""}
          </div>
        `).join("")}
      </div>
    `),e.codigo&&typeof e.codigo=="string"&&(t+=`<pre class="code-snippet"><code>${r(e.codigo)}</code></pre>`),e.versiones&&(t+=`
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
            ${e.versiones.map(o=>`
              <tr class="${o.destacado?"highlight-row":""}">
                <td data-label="Año">${o.anio}</td>
                <td data-label="Versión"><strong>${o.version}</strong></td>
                <td data-label="Novedades">${o.novedades}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${e.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${e.nota}</div>`:""}
    `),e.reglas&&e.titulo.includes("Comportamiento especial")&&(t+=`
      <div class="special-operators">
        ${e.reglas.map(o=>`
          <div class="special-operator-card">
            <div class="special-operator-header">
              <code class="special-symbol">${o.operador}</code>
              <span class="special-rule">${o.regla}</span>
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
                  ${o.ejemplos.map(s=>`
                    <tr>
                      <td data-label="Código"><code>${r(s.codigo)}</code></td>
                      <td data-label="Resultado"><code class="result">${r(s.resultado)}</code></td>
                      <td data-label="Explicación">${s.explicacion}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `).join("")}
      </div>
      ${e.nota?`<div class="alert info"><i class="fa-brands fa-react"></i> ${e.nota}</div>`:""}
    `),e.equivalencia&&(t+=`
      <div class="syntax-highlight">
        <code>${e.sintaxis}</code>
      </div>
      <div class="equivalence-box">
        <i class="fa-solid fa-equals"></i>
        <code>${e.equivalencia}</code>
      </div>
      <div class="examples-grid">
        ${e.ejemplos.map(o=>`
          <div class="example-card">
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
            <p class="example-explanation"><i class="fa-solid fa-arrow-right"></i> ${o.explicacion}</p>
          </div>
        `).join("")}
      </div>
      ${e.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${e.nota}</div>`:""}
    `),e.funcionVsMetodo&&(t+=`
      <div class="comparison-section">
        <h4 class="comparison-title"><i class="fa-solid fa-code-compare"></i> ${e.funcionVsMetodo.titulo}</h4>
        <div class="comparison-grid">
          ${e.funcionVsMetodo.diferencias.map(o=>`
            <div class="comparison-card">
              <div class="comparison-header">
                <span class="comparison-type">${o.tipo}</span>
              </div>
              <p>${l(o.descripcion)}</p>
              <pre class="code-snippet"><code>${r(o.ejemplo)}</code></pre>
            </div>
          `).join("")}
        </div>
        ${e.funcionVsMetodo.note?`<div class="alert info"><i class="fa-solid fa-lightbulb"></i> ${l(e.funcionVsMetodo.note)}</div>`:""}
      </div>
    `),e.ejemploFuncion&&(t+=`
      <div class="function-example">
        <h4 class="function-example-title"><i class="fa-solid fa-code"></i> ${e.ejemploFuncion.descripcion}</h4>
        <pre class="code-snippet large"><code>${r(e.ejemploFuncion.codigo)}</code></pre>
        <p class="function-explanation"><i class="fa-solid fa-arrow-right"></i> ${l(e.ejemploFuncion.explicacion)}</p>
      </div>
    `),e.estructuraFuncion&&(t+=`
      <div class="structure-section">
        <div class="structure-parts">
          ${e.estructuraFuncion.partes.map((o,s)=>`
            <div class="structure-part">
              <span class="part-number">${s+1}</span>
              <div class="part-content">
                <strong>${o.nombre}</strong>
                <p>${l(o.descripcion)}</p>
              </div>
            </div>
          `).join("")}
        </div>
        <pre class="code-snippet large"><code>${r(e.estructuraFuncion.codigo)}</code></pre>
      </div>
    `),e.ejemplosInvocacion&&(t+=`
      <div class="examples-grid">
        ${e.ejemplosInvocacion.map(o=>`
          <div class="example-card">
            <h5>${o.titulo}</h5>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.tiposRetorno&&(t+=`
      <div class="return-types-grid">
        ${e.tiposRetorno.map(o=>`
          <div class="return-type-card">
            <h5>${o.tipo}</h5>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.conceptosParametros&&(t+=`
      <div class="concepts-list">
        ${e.conceptosParametros.map(o=>`
          <div class="concept-card">
            <h5><i class="fa-solid fa-lightbulb"></i> ${o.nombre}</h5>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.pasoParametros&&(t+=`
      <div class="pass-params-grid">
        ${e.pasoParametros.map(o=>`
          <div class="pass-param-card ${o.color||""}">
            <div class="pass-param-header">
              <h5>${o.tipo}</h5>
              <span class="applies-to">${o.aplicaA}</span>
            </div>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.tiposDeclaracion&&(t+=`
      <div class="declaration-types-grid">
        ${e.tiposDeclaracion.map(o=>`
          <div class="declaration-type-card ${o.destacado?"destacado":""}">
            <div class="declaration-header">
              <i class="fa-solid ${o.icono||"fa-code"}"></i>
              <h5>${o.nombre}</h5>
            </div>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.ejemploCallback&&(t+=`
      <div class="callback-example">
        <h5><i class="fa-solid fa-share"></i> ${e.ejemploCallback.descripcion}</h5>
        <pre class="code-snippet large"><code>${r(e.ejemploCallback.codigo)}</code></pre>
        <p class="callback-explanation"><i class="fa-solid fa-info-circle"></i> ${l(e.ejemploCallback.explicacion)}</p>
      </div>
    `),e.casoDeUso&&(t+=`
      <div class="use-case">
        <h5><i class="fa-solid fa-flask"></i> ${e.casoDeUso.titulo}</h5>
        <pre class="code-snippet"><code>${r(e.casoDeUso.codigo)}</code></pre>
      </div>
    `),e.sintaxisIIFE&&(t+=`
      <div class="iife-section">
        <div class="syntax-highlight">
          <code>${e.sintaxisIIFE.estructura}</code>
        </div>
        <pre class="code-snippet large"><code>${r(e.sintaxisIIFE.codigo)}</code></pre>
        <div class="iife-uses">
          <h5><i class="fa-solid fa-check-circle"></i> Usos comunes:</h5>
          <ul class="check-list">
            ${e.sintaxisIIFE.usos.map(o=>`<li><i class="fa-solid fa-check"></i><span>${o}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    `),e.funcionesAnidadas&&(t+=`
      <div class="nested-functions">
        <pre class="code-snippet large"><code>${r(e.funcionesAnidadas.codigo)}</code></pre>
        ${e.funcionesAnidadas.nota?`<div class="alert info"><i class="fa-solid fa-info-circle"></i> ${l(e.funcionesAnidadas.nota)}</div>`:""}
      </div>
    `),e.retornoFuncion&&(t+=`
      <div class="return-function">
        <h5><i class="fa-solid fa-reply"></i> ${e.retornoFuncion.titulo}</h5>
        <pre class="code-snippet large"><code>${r(e.retornoFuncion.codigo)}</code></pre>
        <p class="return-explanation"><i class="fa-solid fa-arrow-right"></i> ${l(e.retornoFuncion.explicacion)}</p>
      </div>
    `),e.queSonClosures&&(t+=`
      <div class="closures-intro">
        <p class="closures-definition">${l(e.queSonClosures.definicion)}</p>
        <div class="closures-importance">
          <h5><i class="fa-solid fa-star"></i> ¿Por qué son importantes?</h5>
          <ul class="check-list">
            ${e.queSonClosures.porQueImportan.map(o=>`<li><i class="fa-solid fa-check"></i><span>${l(o)}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    `),e.ejemploClosure&&(t+=`
      <div class="closure-example">
        <div class="example-header">
          <i class="fa-solid fa-shield-halved"></i>
          <span>${e.ejemploClosure.titulo||"Ejemplo Práctico"}</span>
        </div>
        <pre class="code-snippet large"><code>${r(e.ejemploClosure.codigo)}</code></pre>
        ${e.ejemploClosure.explicacion?`<p class="closure-explanation"><i class="fa-solid fa-info-circle"></i> ${l(e.ejemploClosure.explicacion)}</p>`:""}
        ${e.ejemploClosure.puntosClave?`
          <div class="closure-points">
            <ul class="check-list">
              ${e.ejemploClosure.puntosClave.map(o=>`<li><i class="fa-solid fa-check"></i><span>${l(o)}</span></li>`).join("")}
            </ul>
          </div>
        `:""}
      </div>
    `),e.formasCrear&&(t+=`
      <div class="creation-methods">
        ${e.formasCrear.map(o=>`
          <div class="creation-card ${o.destacado?"destacado":""}">
            <h5>${o.tipo}</h5>
            <pre class="code-snippet"><code>${r(o.ejemplo)}</code></pre>
            <p>${l(o.descripcion)}</p>
          </div>
        `).join("")}
      </div>
    `),e.comparacion&&e.comparacion.antes&&(t+=`
      <div class="comparison-before-after">
        <h5>${e.comparacion.titulo}</h5>
        <div class="comparison-columns">
          <div class="comparison-col before">
            <span class="comparison-label">❌ Antes</span>
            <pre class="code-snippet"><code>${r(e.comparacion.antes)}</code></pre>
          </div>
          <div class="comparison-col after">
            <span class="comparison-label">✓ Después</span>
            <pre class="code-snippet"><code>${r(e.comparacion.despues)}</code></pre>
          </div>
        </div>
      </div>
    `),e.metodosString&&(t+=`
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
            ${e.metodosString.map(o=>`
              <tr>
                <td data-label="Método"><code>${o.metodo}</code></td>
                <td data-label="Descripción">${l(o.descripcion)}</td>
                <td data-label="Ejemplo"><code>${r(o.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),e.valoresEspeciales&&(t+=`
      <div class="special-values">
        ${e.valoresEspeciales.map(o=>`
          <div class="special-value-card">
            <code>${o.valor}</code>
            <p>${l(o.descripcion)}</p>
          </div>
        `).join("")}
      </div>
    `),e.metodosNumber&&(t+=`
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
            ${e.metodosNumber.map(o=>`
              <tr>
                <td data-label="Método"><code>${o.metodo}</code></td>
                <td data-label="Descripción">${l(o.descripcion)}</td>
                <td data-label="Ejemplo"><code>${r(o.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),e.estructuraCondicional&&(t+=`
      <div class="conditional-structure">
        <pre class="code-snippet large"><code>${r(e.estructuraCondicional.sintaxis)}</code></pre>
        <div class="conditional-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo práctico:</h5>
          <pre class="code-snippet"><code>${r(e.estructuraCondicional.ejemplo)}</code></pre>
        </div>
      </div>
    `),e.estructuraSwitch&&(t+=`
      <div class="switch-structure">
        <pre class="code-snippet large"><code>${r(e.estructuraSwitch.sintaxis)}</code></pre>
        <div class="switch-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${r(e.estructuraSwitch.ejemplo)}</code></pre>
        </div>
      </div>
    `),e.estructuraWhile&&(t+=`
      <div class="loop-structure">
        <pre class="code-snippet"><code>${r(e.estructuraWhile.sintaxis)}</code></pre>
        <div class="loop-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${r(e.estructuraWhile.ejemplo)}</code></pre>
        </div>
      </div>
    `),e.estructuraDoWhile&&(t+=`
      <div class="loop-structure">
        <pre class="code-snippet"><code>${r(e.estructuraDoWhile.sintaxis)}</code></pre>
        <div class="loop-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${r(e.estructuraDoWhile.ejemplo)}</code></pre>
        </div>
      </div>
    `),e.estructuraFor&&(t+=`
      <div class="for-structure">
        <pre class="code-snippet"><code>${r(e.estructuraFor.sintaxis)}</code></pre>
        <div class="for-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${r(e.estructuraFor.ejemplo)}</code></pre>
        </div>
        ${e.estructuraFor.explicacion?`
          <div class="for-explanation-steps">
            ${e.estructuraFor.explicacion.map(o=>{const[s,i]=o.split(" → "),[a,c]=s.split(": ");return`
                <div class="for-step">
                  <i class="fa-solid fa-arrow-right"></i>
                  <span class="step-label">${a}:</span>
                  <code class="inline-code">${c}</code>
                  <span class="step-desc">${l(i)}</span>
                </div>
              `}).join("")}
          </div>
        `:""}
      </div>
    `),e.definicionScope&&(t+=`
      <div class="scope-definition">
        <p class="scope-desc">${l(e.definicionScope.descripcion)}</p>
        <div class="scope-rules">
          <h5><i class="fa-solid fa-list-check"></i> Reglas importantes:</h5>
          <ul class="check-list">
            ${e.definicionScope.reglas.map(o=>`<li><i class="fa-solid fa-check"></i><span>${l(o)}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    `),e.tiposScope&&(t+=`
      <div class="scope-types-grid">
        ${e.tiposScope.map(o=>`
          <div class="scope-type-card ${o.color||""}">
            <div class="scope-header">
              <i class="fa-solid ${o.icono}"></i>
              <h5>${o.tipo}</h5>
            </div>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.ejemplo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.ejemploCadena&&(t+=`
      <div class="scope-chain-example">
        <pre class="code-snippet large"><code>${r(e.ejemploCadena.codigo)}</code></pre>
        <p class="scope-chain-explanation"><i class="fa-solid fa-arrow-right"></i> ${l(e.ejemploCadena.explicacion)}</p>
      </div>
    `),e.ejemploHoisting&&(t+=`
      <div class="hoisting-example">
        <p class="hoisting-question"><i class="fa-solid fa-question-circle"></i> ${e.ejemploHoisting.pregunta}</p>
        <pre class="code-snippet"><code>${r(e.ejemploHoisting.codigo)}</code></pre>
        <div class="hoisting-answer">
          <span class="answer-label">Respuesta:</span>
          <code class="answer-value">${e.ejemploHoisting.respuesta}</code>
        </div>
        <div class="hoisting-interpretation">
          <p>JavaScript lo interpreta así:</p>
          <pre class="code-snippet small"><code>${r(e.ejemploHoisting.explicacion.replace("JavaScript lo interpreta así:","").trim())}</code></pre>
        </div>
      </div>
    `),e.tablaHoisting&&(t+=`
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
            ${e.tablaHoisting.map(o=>`
              <tr>
                <td data-label="Elemento"><code>${o.elemento}</code></td>
                <td data-label="Hoisting">${o.hoisting}</td>
                <td data-label="Resultado">${o.resultado}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),e.ejemploFunciones&&(t+=`
      <div class="hoisting-functions">
        <div class="hoisting-func-card success">
          <h5><i class="fa-solid fa-check-circle"></i> Función Declarativa (con hoisting)</h5>
          <pre class="code-snippet"><code>${r(e.ejemploFunciones.funcionDeclarativa)}</code></pre>
        </div>
        <div class="hoisting-func-card error">
          <h5><i class="fa-solid fa-times-circle"></i> Expresión de Función (sin hoisting)</h5>
          <pre class="code-snippet"><code>${r(e.ejemploFunciones.funcionExpresion)}</code></pre>
        </div>
      </div>
    `),e.tablaComparativa&&e.tablaComparativa.length>0){const o=e.tablaComparativa[0];if("var"in o)t+=`
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
              ${e.tablaComparativa.map(s=>`
                <tr>
                  <td data-label="Característica">${l(s.caracteristica)}</td>
                  <td data-label="var">${l(s.var)}</td>
                  <td data-label="let">${l(s.let)}</td>
                  <td data-label="const">${l(s.const)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;else if("tradicional"in o)t+=`
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
              ${e.tablaComparativa.map(s=>`
                <tr>
                  <td data-label="Característica">${l(s.caracteristica)}</td>
                  <td data-label="Tradicional">${l(s.tradicional)}</td>
                  <td data-label="Arrow">${l(s.arrow)}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `;else{const s=Object.keys(o);t+=`
        <div class="table-container">
          <table class="data-table comparison-table-generic">
            <thead>
              <tr>
                ${s.map(i=>`<th>${i.charAt(0).toUpperCase()+i.slice(1)}</th>`).join("")}
              </tr>
            </thead>
            <tbody>
              ${e.tablaComparativa.map(i=>`
                <tr>
                  ${s.map(a=>`<td data-label="${a}">${l(i[a])}</td>`).join("")}
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      `}e.recomendacion&&(t+=`
        <div class="alert success">
          <i class="fa-solid fa-lightbulb"></i> 
          <span><strong>Recomendación:</strong> ${l(e.recomendacion)}</span>
        </div>`)}return e.requisitos&&(t+=`
      <div class="requirements-list">
        <div class="list-header">
          <i class="fa-solid fa-clipboard-list"></i>
          <span>Requisitos para crear un closure:</span>
        </div>
        <ol class="numbered-list">
          ${e.requisitos.map(o=>`<li>${o}</li>`).join("")}
        </ol>
      </div>
    `),e.usosClosures&&(t+=`
      <div class="closures-uses-grid">
        ${e.usosClosures.map(o=>`
          <div class="closure-use-card">
            <h5><i class="fa-solid fa-cube"></i> ${o.uso}</h5>
            <p>${l(o.descripcion)}</p>
            ${o.ejemplo?`<pre class="code-snippet small"><code>${r(o.ejemplo)}</code></pre>`:""}
          </div>
        `).join("")}
      </div>
    `),e.tecnicasValidacion&&(t+=`
      <div class="validation-techniques">
        <div class="technique-card">
          <h5><i class="fa-solid fa-keyboard"></i> Pedir datos con prompt</h5>
          <pre class="code-snippet"><code>${r(e.tecnicasValidacion.prompt)}</code></pre>
        </div>
        <div class="technique-card">
          <h5><i class="fa-solid fa-shield-halved"></i> Validar entrada</h5>
          <pre class="code-snippet"><code>${r(e.tecnicasValidacion.validacion)}</code></pre>
        </div>
      </div>
    `),e.solucion&&(t+=`
      <div class="exercise-solution">
        <h5><i class="fa-solid fa-code"></i> Solución:</h5>
        <pre class="code-snippet large"><code>${r(e.solucion.codigo)}</code></pre>
      </div>
    `),e.formasConcatenacion&&(t+=`
      <div class="concatenation-methods">
        ${e.formasConcatenacion.map(o=>`
          <div class="concat-card">
            <h5><i class="fa-solid fa-link"></i> ${o.metodo}</h5>
            <p>${o.descripcion}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.caracteresEscape&&(t+=`
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
            ${e.caracteresEscape.map(o=>`
              <tr>
                <td data-label="Carácter"><code>${r(o.caracter)}</code></td>
                <td data-label="Descripción">${l(o.descripcion)}</td>
                <td data-label="Ejemplo"><code>${r(o.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),e.formasCrearNumero&&(t+=`
      <div class="creation-methods">
        ${e.formasCrearNumero.map(o=>`
          <div class="creation-card">
            <h5>${o.forma}</h5>
            <code>${r(o.ejemplo)}</code>
            <p>${l(o.descripcion)}</p>
          </div>
        `).join("")}
      </div>
    `),e.constantesNumber&&(t+=`
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
            ${e.constantesNumber.map(o=>`
              <tr>
                <td data-label="Constante"><code>${r(o.constante)}</code></td>
                <td data-label="Descripción">${l(o.descripcion)}</td>
                <td data-label="Valor"><code>${o.valor}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),e.objetoWindow&&(t+=`
      <div class="window-object-section">
        <pre class="code-snippet large"><code>${r(e.objetoWindow.codigo)}</code></pre>
        <div class="info-box puntos-clave">
          <div class="info-box-header">
            <i class="fa-solid fa-key"></i>
            <span>Puntos Clave</span>
          </div>
          <ul class="check-list">
            ${e.objetoWindow.puntosClave.map(o=>`<li><i class="fa-solid fa-check"></i><span>${l(o)}</span></li>`).join("")}
          </ul>
        </div>
      </div>
    `),e.shortCircuit&&(t+=`
      <div class="short-circuit-grid">
        ${e.shortCircuit.map(o=>`
          <div class="short-circuit-card">
            <div class="short-circuit-header">
              <code class="operator">${o.operador}</code>
              <span>${o.regla}</span>
            </div>
            <pre class="code-snippet"><code>${r(o.ejemplos)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.comportamientoEspecial&&(t+=`
      <div class="info-box behavior-box">
        <div class="info-box-header">
          <i class="fa-solid fa-flask"></i>
          <span>${e.comportamientoEspecial.titulo}</span>
        </div>
        <ul class="check-list">
          ${e.comportamientoEspecial.puntos.map(o=>`<li><i class="fa-solid fa-check"></i><span>${l(o)}</span></li>`).join("")}
        </ul>
        <pre class="code-snippet"><code>${r(e.comportamientoEspecial.codigo)}</code></pre>
      </div>
    `),e.debugScopes&&(t+=`
      <div class="debug-scopes-section">
        <div class="debug-steps">
          ${e.debugScopes.pasos.map((o,s)=>`
            <div class="debug-step">
              <span class="step-num">${s+1}</span>
              <p>${l(o)}</p>
            </div>
          `).join("")}
        </div>
      </div>
    `),e.formasDeclaracion&&(t+=`
      <div class="declaration-methods">
        ${e.formasDeclaracion.map(o=>`
          <div class="declaration-method-card">
            <h5><i class="fa-solid fa-code"></i> ${o.forma}</h5>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.ejemplo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.metodosIteracion&&(t+=`
      <div class="iteration-methods">
        ${e.metodosIteracion.map(o=>`
          <div class="iteration-card">
            <h5><i class="fa-solid fa-repeat"></i> ${o.metodo}</h5>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.conceptosParametros&&(t+=`
      <div class="concepts-grid">
        ${e.conceptosParametros.map(o=>`
          <div class="concept-card">
            <h5><i class="fa-solid fa-terminal"></i> <code>${o.nombre}</code></h5>
            <p>${l(o.descripcion)}</p>
            ${o.codigo?`<pre class="code-snippet"><code>${r(o.codigo)}</code></pre>`:""}
          </div>
        `).join("")}
      </div>
    `),e.tiposDeclaracion&&e.titulo.toLowerCase().includes("sintaxis")&&(t+=`
      <div class="declaration-types-grid">
        ${e.tiposDeclaracion.map(o=>`
          <div class="declaration-type-card">
            <h5><i class="fa-solid ${o.icono||"fa-arrow-right"}"></i> ${o.nombre}</h5>
            <p>${l(o.descripcion)}</p>
            <pre class="code-snippet"><code>${r(o.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),e.metodosArray&&(t+=`
      <div class="array-methods-list">
        ${e.metodosArray.map(o=>`
          <div class="array-method-card">
            <h5><i class="fa-solid fa-cube"></i> ${o.metodo}</h5>
            <p>${l(o.descripcion)}</p>
            ${o.codigo?`<pre class="code-snippet"><code>${r(o.codigo)}</code></pre>`:""}
          </div>
        `).join("")}
      </div>
    `),e.sintaxis&&(t+=`
      <div class="syntax-box">
        <pre class="code-snippet syntax"><code>${r(e.sintaxis)}</code></pre>
      </div>
    `),e.recomendacion&&(t+=`
      <div class="alert info">
        <i class="fa-solid fa-lightbulb"></i>
        <span>${l(e.recomendacion)}</span>
      </div>
    `),t}function fo(e){const t=e.operadores;return t[0].simbolo&&!t[0].variantes&&!t[0].tablaVerdad?`
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
            ${t.map(o=>`
              <tr class="${o.destacado?"highlight-row":""}">
                <td data-label="Operador"><code class="operator-symbol">${r(o.simbolo)}</code></td>
                <td data-label="Nombre">
                   ${o.nombre}
                  ${o.descripcion?`<small>${l(o.descripcion)}</small>`:""}
                </td>
                <td data-label="Ejemplo"><code>${r(o.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:t[0].variantes?`
      <div class="unary-operators">
        ${t.map(o=>`
          <div class="unary-card">
            <div class="unary-symbol">
              <code>${o.simbolo}</code>
              <span>${o.nombre}</span>
            </div>
            <div class="variants">
              ${o.variantes.map(s=>`
                <div class="variant">
                  <code>${s.forma}</code>
                  <p>${l(s.descripcion)}</p>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      ${e.ejemplo?`<pre class="code-snippet"><code>${r(e.ejemplo)}</code></pre>`:""}
    `:t[0].tablaVerdad||t[0].regla?`
      <div class="logic-operators">
        ${t.map(o=>`
          <div class="logic-card">
            <div class="logic-header">
              <code class="logic-symbol">${o.simbolo}</code>
              <span>${o.nombre}</span>
            </div>
            <p class="logic-rule">${l(o.regla)}</p>
            ${o.tablaVerdad?`
              <table class="truth-table">
                <thead>
                  <tr><th>A</th><th>B</th><th>Resultado</th></tr>
                </thead>
                <tbody>
                  ${o.tablaVerdad.map(s=>`
                    <tr>
                      <td><code class="${s.a}">${s.a}</code></td>
                      <td><code class="${s.b}">${s.b}</code></td>
                      <td><code class="${s.resultado}">${s.resultado}</code></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            `:""}
            ${o.comportamientoJS?`
              <div class="js-behavior">
                <i class="fa-brands fa-js"></i> ${o.comportamientoJS}
              </div>
            `:""}
            ${o.ejemplos?`
              <div class="logic-examples">
                ${o.ejemplos.map(s=>`<code>${r(s)}</code>`).join("")}
              </div>
            `:""}
          </div>
        `).join("")}
      </div>
    `:""}function l(e){if(!e)return"";let t=r(e);return t=t.replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>"),t=t.replace(/`(.*?)`/g,'<code class="inline-code">$1</code>'),t}function r(e){const t=document.createElement("div");return t.textContent=e,t.innerHTML}function at(e,t,o){if(typeof e=="function"?e===t:e.has(t))return arguments.length<3?t:o;throw new TypeError("Private element is not present on this object")}function ho(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Ye(e,t){return e.get(at(e,t))}function wo(e,t,o){ho(e,t),t.set(e,o)}function mo(e,t,o){return e.set(at(e,t),o),o}const go=100,d={},bo=()=>{d.previousActiveElement instanceof HTMLElement?(d.previousActiveElement.focus(),d.previousActiveElement=null):document.body&&document.body.focus()},vo=e=>new Promise(t=>{if(!e)return t();const o=window.scrollX,s=window.scrollY;d.restoreFocusTimeout=setTimeout(()=>{bo(),t()},go),window.scrollTo(o,s)}),rt="swal2-",yo=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],n=yo.reduce((e,t)=>(e[t]=rt+t,e),{}),$o=["success","warning","info","question","error"],re=$o.reduce((e,t)=>(e[t]=rt+t,e),{}),lt="SweetAlert2:",Ie=e=>e.charAt(0).toUpperCase()+e.slice(1),k=e=>{console.warn(`${lt} ${typeof e=="object"?e.join(" "):e}`)},W=e=>{console.error(`${lt} ${e}`)},Ke=[],ko=e=>{Ke.includes(e)||(Ke.push(e),k(e))},ct=(e,t=null)=>{ko(`"${e}" is deprecated and will be removed in the next major release.${t?` Use "${t}" instead.`:""}`)},be=e=>typeof e=="function"?e():e,Te=e=>e&&typeof e.toPromise=="function",G=e=>Te(e)?e.toPromise():Promise.resolve(e),Se=e=>e&&Promise.resolve(e)===e,x=()=>document.body.querySelector(`.${n.container}`),ee=e=>{const t=x();return t?t.querySelector(e):null},j=e=>ee(`.${e}`),h=()=>j(n.popup),K=()=>j(n.icon),xo=()=>j(n["icon-content"]),dt=()=>j(n.title),Me=()=>j(n["html-container"]),ut=()=>j(n.image),Oe=()=>j(n["progress-steps"]),ve=()=>j(n["validation-message"]),T=()=>ee(`.${n.actions} .${n.confirm}`),X=()=>ee(`.${n.actions} .${n.cancel}`),_=()=>ee(`.${n.actions} .${n.deny}`),Co=()=>j(n["input-label"]),Z=()=>ee(`.${n.loader}`),te=()=>j(n.actions),pt=()=>j(n.footer),ye=()=>j(n["timer-progress-bar"]),He=()=>j(n.close),Eo=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,De=()=>{const e=h();if(!e)return[];const t=e.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),o=Array.from(t).sort((a,c)=>{const u=parseInt(a.getAttribute("tabindex")||"0"),p=parseInt(c.getAttribute("tabindex")||"0");return u>p?1:u<p?-1:0}),s=e.querySelectorAll(Eo),i=Array.from(s).filter(a=>a.getAttribute("tabindex")!=="-1");return[...new Set(o.concat(i))].filter(a=>C(a))},Fe=()=>M(document.body,n.shown)&&!M(document.body,n["toast-shown"])&&!M(document.body,n["no-backdrop"]),$e=()=>{const e=h();return e?M(e,n.toast):!1},Ao=()=>{const e=h();return e?e.hasAttribute("data-loading"):!1},B=(e,t)=>{if(e.textContent="",t){const s=new DOMParser().parseFromString(t,"text/html"),i=s.querySelector("head");i&&Array.from(i.childNodes).forEach(c=>{e.appendChild(c)});const a=s.querySelector("body");a&&Array.from(a.childNodes).forEach(c=>{c instanceof HTMLVideoElement||c instanceof HTMLAudioElement?e.appendChild(c.cloneNode(!0)):e.appendChild(c)})}},M=(e,t)=>{if(!t)return!1;const o=t.split(/\s+/);for(let s=0;s<o.length;s++)if(!e.classList.contains(o[s]))return!1;return!0},jo=(e,t)=>{Array.from(e.classList).forEach(o=>{!Object.values(n).includes(o)&&!Object.values(re).includes(o)&&!Object.values(t.showClass||{}).includes(o)&&e.classList.remove(o)})},A=(e,t,o)=>{if(jo(e,t),!t.customClass)return;const s=t.customClass[o];if(s){if(typeof s!="string"&&!s.forEach){k(`Invalid type of customClass.${o}! Expected string or iterable object, got "${typeof s}"`);return}f(e,s)}},ke=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return e.querySelector(`.${n.popup} > .${n[t]}`);case"checkbox":return e.querySelector(`.${n.popup} > .${n.checkbox} input`);case"radio":return e.querySelector(`.${n.popup} > .${n.radio} input:checked`)||e.querySelector(`.${n.popup} > .${n.radio} input:first-child`);case"range":return e.querySelector(`.${n.popup} > .${n.range} input`);default:return e.querySelector(`.${n.popup} > .${n.input}`)}},ft=e=>{if(e.focus(),e.type!=="file"){const t=e.value;e.value="",e.value=t}},ht=(e,t,o)=>{!e||!t||(typeof t=="string"&&(t=t.split(/\s+/).filter(Boolean)),t.forEach(s=>{Array.isArray(e)?e.forEach(i=>{o?i.classList.add(s):i.classList.remove(s)}):o?e.classList.add(s):e.classList.remove(s)}))},f=(e,t)=>{ht(e,t,!0)},L=(e,t)=>{ht(e,t,!1)},H=(e,t)=>{const o=Array.from(e.children);for(let s=0;s<o.length;s++){const i=o[s];if(i instanceof HTMLElement&&M(i,t))return i}},N=(e,t,o)=>{o===`${parseInt(`${o}`)}`&&(o=parseInt(o)),o||parseInt(`${o}`)===0?e.style.setProperty(t,typeof o=="number"?`${o}px`:o):e.style.removeProperty(t)},y=(e,t="flex")=>{e&&(e.style.display=t)},$=e=>{e&&(e.style.display="none")},qe=(e,t="block")=>{e&&new MutationObserver(()=>{oe(e,e.innerHTML,t)}).observe(e,{childList:!0,subtree:!0})},Xe=(e,t,o,s)=>{const i=e.querySelector(t);i&&i.style.setProperty(o,s)},oe=(e,t,o="flex")=>{t?y(e,o):$(e)},C=e=>!!(e&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),Bo=()=>!C(T())&&!C(_())&&!C(X()),Be=e=>e.scrollHeight>e.clientHeight,Po=(e,t)=>{let o=e;for(;o&&o!==t;){if(Be(o))return!0;o=o.parentElement}return!1},wt=e=>{const t=window.getComputedStyle(e),o=parseFloat(t.getPropertyValue("animation-duration")||"0"),s=parseFloat(t.getPropertyValue("transition-duration")||"0");return o>0||s>0},ze=(e,t=!1)=>{const o=ye();o&&C(o)&&(t&&(o.style.transition="none",o.style.width="100%"),setTimeout(()=>{o.style.transition=`width ${e/1e3}s linear`,o.style.width="0%"},10))},Lo=()=>{const e=ye();if(!e)return;const t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";const o=parseInt(window.getComputedStyle(e).width),s=t/o*100;e.style.width=`${s}%`},Io=()=>typeof window>"u"||typeof document>"u",To=`
 <div aria-labelledby="${n.title}" aria-describedby="${n["html-container"]}" class="${n.popup}" tabindex="-1">
   <button type="button" class="${n.close}"></button>
   <ul class="${n["progress-steps"]}"></ul>
   <div class="${n.icon}"></div>
   <img class="${n.image}" />
   <h2 class="${n.title}" id="${n.title}"></h2>
   <div class="${n["html-container"]}" id="${n["html-container"]}"></div>
   <input class="${n.input}" id="${n.input}" />
   <input type="file" class="${n.file}" />
   <div class="${n.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${n.select}" id="${n.select}"></select>
   <div class="${n.radio}"></div>
   <label class="${n.checkbox}">
     <input type="checkbox" id="${n.checkbox}" />
     <span class="${n.label}"></span>
   </label>
   <textarea class="${n.textarea}" id="${n.textarea}"></textarea>
   <div class="${n["validation-message"]}" id="${n["validation-message"]}"></div>
   <div class="${n.actions}">
     <div class="${n.loader}"></div>
     <button type="button" class="${n.confirm}"></button>
     <button type="button" class="${n.deny}"></button>
     <button type="button" class="${n.cancel}"></button>
   </div>
   <div class="${n.footer}"></div>
   <div class="${n["timer-progress-bar-container"]}">
     <div class="${n["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),So=()=>{const e=x();return e?(e.remove(),L([document.documentElement,document.body],[n["no-backdrop"],n["toast-shown"],n["has-column"]]),!0):!1},V=()=>{d.currentInstance&&d.currentInstance.resetValidationMessage()},Mo=()=>{const e=h();if(!e)return;const t=H(e,n.input),o=H(e,n.file),s=e.querySelector(`.${n.range} input`),i=e.querySelector(`.${n.range} output`),a=H(e,n.select),c=e.querySelector(`.${n.checkbox} input`),u=H(e,n.textarea);t&&(t.oninput=V),o&&(o.onchange=V),a&&(a.onchange=V),c&&(c.onchange=V),u&&(u.oninput=V),s&&i&&(s.oninput=()=>{V(),i.value=s.value},s.onchange=()=>{V(),i.value=s.value})},Oo=e=>{if(typeof e=="string"){const t=document.querySelector(e);if(!t)throw new Error(`Target element "${e}" not found`);return t}return e},Ho=e=>{const t=h();t&&(t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true"))},Do=e=>{window.getComputedStyle(e).direction==="rtl"&&(f(x(),n.rtl),d.isRTL=!0)},Fo=e=>{const t=So();if(Io()){W("SweetAlert2 requires document to initialize");return}const o=document.createElement("div");o.className=n.container,t&&f(o,n["no-transition"]),B(o,To),o.dataset.swal2Theme=e.theme;const s=Oo(e.target||"body");s.appendChild(o),e.topLayer&&(o.setAttribute("popover",""),o.showPopover()),Ho(e),Do(s),Mo()},Ve=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):typeof e=="object"?qo(e,t):e&&B(t,e)},qo=(e,t)=>{"jquery"in e?zo(t,e):B(t,e.toString())},zo=(e,t)=>{if(e.textContent="",0 in t)for(let o=0;o in t;o++)e.appendChild(t[o].cloneNode(!0));else e.appendChild(t.cloneNode(!0))},Vo=(e,t)=>{const o=te(),s=Z();!o||!s||(!t.showConfirmButton&&!t.showDenyButton&&!t.showCancelButton?$(o):y(o),A(o,t,"actions"),No(o,s,t),B(s,t.loaderHtml||""),A(s,t,"loader"))};function No(e,t,o){const s=T(),i=_(),a=X();!s||!i||!a||(Ae(s,"confirm",o),Ae(i,"deny",o),Ae(a,"cancel",o),Ro(s,i,a,o),o.reverseButtons&&(o.toast?(e.insertBefore(a,s),e.insertBefore(i,s)):(e.insertBefore(a,t),e.insertBefore(i,t),e.insertBefore(s,t))))}function Ro(e,t,o,s){if(!s.buttonsStyling){L([e,t,o],n.styled);return}f([e,t,o],n.styled),s.confirmButtonColor&&e.style.setProperty("--swal2-confirm-button-background-color",s.confirmButtonColor),s.denyButtonColor&&t.style.setProperty("--swal2-deny-button-background-color",s.denyButtonColor),s.cancelButtonColor&&o.style.setProperty("--swal2-cancel-button-background-color",s.cancelButtonColor),Ee(e),Ee(t),Ee(o)}function Ee(e){const t=window.getComputedStyle(e);if(t.getPropertyValue("--swal2-action-button-focus-box-shadow"))return;const o=t.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/,"rgba($1, $2, $3, 0.5)");e.style.setProperty("--swal2-action-button-focus-box-shadow",t.getPropertyValue("--swal2-outline").replace(/ rgba\(.*/,` ${o}`))}function Ae(e,t,o){const s=Ie(t);oe(e,o[`show${s}Button`],"inline-block"),B(e,o[`${t}ButtonText`]||""),e.setAttribute("aria-label",o[`${t}ButtonAriaLabel`]||""),e.className=n[t],A(e,o,`${t}Button`)}const Wo=(e,t)=>{const o=He();o&&(B(o,t.closeButtonHtml||""),A(o,t,"closeButton"),oe(o,t.showCloseButton),o.setAttribute("aria-label",t.closeButtonAriaLabel||""))},_o=(e,t)=>{const o=x();o&&(Uo(o,t.backdrop),Qo(o,t.position),Yo(o,t.grow),A(o,t,"container"))};function Uo(e,t){typeof t=="string"?e.style.background=t:t||f([document.documentElement,document.body],n["no-backdrop"])}function Qo(e,t){t&&(t in n?f(e,n[t]):(k('The "position" parameter is not valid, defaulting to "center"'),f(e,n.center)))}function Yo(e,t){t&&f(e,n[`grow-${t}`])}var w={innerParams:new WeakMap,domCache:new WeakMap};const Ko=["input","file","range","select","radio","checkbox","textarea"],Xo=(e,t)=>{const o=h();if(!o)return;const s=w.innerParams.get(e),i=!s||t.input!==s.input;Ko.forEach(a=>{const c=H(o,n[a]);c&&(Go(a,t.inputAttributes),c.className=n[a],i&&$(c))}),t.input&&(i&&Zo(t),es(t))},Zo=e=>{if(!e.input)return;if(!m[e.input]){W(`Unexpected type of input! Expected ${Object.keys(m).join(" | ")}, got "${e.input}"`);return}const t=mt(e.input);if(!t)return;const o=m[e.input](t,e);y(t),e.inputAutoFocus&&setTimeout(()=>{ft(o)})},Jo=e=>{for(let t=0;t<e.attributes.length;t++){const o=e.attributes[t].name;["id","type","value","style"].includes(o)||e.removeAttribute(o)}},Go=(e,t)=>{const o=h();if(!o)return;const s=ke(o,e);if(s){Jo(s);for(const i in t)s.setAttribute(i,t[i])}},es=e=>{if(!e.input)return;const t=mt(e.input);t&&A(t,e,"input")},Ne=(e,t)=>{!e.placeholder&&t.inputPlaceholder&&(e.placeholder=t.inputPlaceholder)},se=(e,t,o)=>{if(o.inputLabel){const s=document.createElement("label"),i=n["input-label"];s.setAttribute("for",e.id),s.className=i,typeof o.customClass=="object"&&f(s,o.customClass.inputLabel),s.innerText=o.inputLabel,t.insertAdjacentElement("beforebegin",s)}},mt=e=>{const t=h();if(t)return H(t,n[e]||n.input)},le=(e,t)=>{["string","number"].includes(typeof t)?e.value=`${t}`:Se(t)||k(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof t}"`)},m={};m.text=m.email=m.password=m.number=m.tel=m.url=m.search=m.date=m["datetime-local"]=m.time=m.week=m.month=(e,t)=>{const o=e;return le(o,t.inputValue),se(o,o,t),Ne(o,t),o.type=t.input,o};m.file=(e,t)=>{const o=e;return se(o,o,t),Ne(o,t),o};m.range=(e,t)=>{const o=e,s=o.querySelector("input"),i=o.querySelector("output");return s&&(le(s,t.inputValue),s.type=t.input,se(s,e,t)),i&&le(i,t.inputValue),e};m.select=(e,t)=>{const o=e;if(o.textContent="",t.inputPlaceholder){const s=document.createElement("option");B(s,t.inputPlaceholder),s.value="",s.disabled=!0,s.selected=!0,o.appendChild(s)}return se(o,o,t),o};m.radio=e=>{const t=e;return t.textContent="",e};m.checkbox=(e,t)=>{const o=h();if(!o)throw new Error("Popup not found");const s=ke(o,"checkbox");if(!s)throw new Error("Checkbox input not found");s.value="1",s.checked=!!t.inputValue;const a=e.querySelector("span");if(a){const c=t.inputPlaceholder||t.inputLabel;c&&B(a,c)}return s};m.textarea=(e,t)=>{const o=e;le(o,t.inputValue),Ne(o,t),se(o,o,t);const s=i=>parseInt(window.getComputedStyle(i).marginLeft)+parseInt(window.getComputedStyle(i).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const i=h();if(!i)return;const a=parseInt(window.getComputedStyle(i).width),c=()=>{if(!document.body.contains(o))return;const u=o.offsetWidth+s(o),p=h();p&&(u>a?p.style.width=`${u}px`:N(p,"width",t.width))};new MutationObserver(c).observe(o,{attributes:!0,attributeFilter:["style"]})}}),o};const ts=(e,t)=>{const o=Me();o&&(qe(o),A(o,t,"htmlContainer"),t.html?(Ve(t.html,o),y(o,"block")):t.text?(o.textContent=t.text,y(o,"block")):$(o),Xo(e,t))},os=(e,t)=>{const o=pt();o&&(qe(o),oe(o,!!t.footer,"block"),t.footer&&Ve(t.footer,o),A(o,t,"footer"))},ss=(e,t)=>{const o=w.innerParams.get(e),s=K();if(!s)return;if(o&&t.icon===o.icon){Je(s,t),Ze(s,t);return}if(!t.icon&&!t.iconHtml){$(s);return}if(t.icon&&Object.keys(re).indexOf(t.icon)===-1){W(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${t.icon}"`),$(s);return}y(s),Je(s,t),Ze(s,t),f(s,t.showClass&&t.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",gt)},Ze=(e,t)=>{for(const[o,s]of Object.entries(re))t.icon!==o&&L(e,s);f(e,t.icon&&re[t.icon]),as(e,t),gt(),A(e,t,"icon")},gt=()=>{const e=h();if(!e)return;const t=window.getComputedStyle(e).getPropertyValue("background-color"),o=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<o.length;s++)o[s].style.backgroundColor=t},is=e=>`
  ${e.animation?'<div class="swal2-success-circular-line-left"></div>':""}
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div>
  ${e.animation?'<div class="swal2-success-fix"></div>':""}
  ${e.animation?'<div class="swal2-success-circular-line-right"></div>':""}
`,ns=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Je=(e,t)=>{if(!t.icon&&!t.iconHtml)return;let o=e.innerHTML,s="";t.iconHtml?s=Ge(t.iconHtml):t.icon==="success"?(s=is(t),o=o.replace(/ style=".*?"/g,"")):t.icon==="error"?s=ns:t.icon&&(s=Ge({question:"?",warning:"!",info:"i"}[t.icon])),o.trim()!==s.trim()&&B(e,s)},as=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const o of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Xe(e,o,"background-color",t.iconColor);Xe(e,".swal2-success-ring","border-color",t.iconColor)}},Ge=e=>`<div class="${n["icon-content"]}">${e}</div>`,rs=(e,t)=>{const o=ut();if(o){if(!t.imageUrl){$(o);return}y(o,""),o.setAttribute("src",t.imageUrl),o.setAttribute("alt",t.imageAlt||""),N(o,"width",t.imageWidth),N(o,"height",t.imageHeight),o.className=n.image,A(o,t,"image")}};let Re=!1,bt=0,vt=0,yt=0,$t=0;const ls=e=>{e.addEventListener("mousedown",ce),document.body.addEventListener("mousemove",de),e.addEventListener("mouseup",ue),e.addEventListener("touchstart",ce),document.body.addEventListener("touchmove",de),e.addEventListener("touchend",ue)},cs=e=>{e.removeEventListener("mousedown",ce),document.body.removeEventListener("mousemove",de),e.removeEventListener("mouseup",ue),e.removeEventListener("touchstart",ce),document.body.removeEventListener("touchmove",de),e.removeEventListener("touchend",ue)},ce=e=>{const t=h();if(!t)return;const o=K();if(e.target===t||o&&o.contains(e.target)){Re=!0;const s=kt(e);bt=s.clientX,vt=s.clientY,yt=parseInt(t.style.insetInlineStart)||0,$t=parseInt(t.style.insetBlockStart)||0,f(t,"swal2-dragging")}},de=e=>{const t=h();if(t&&Re){let{clientX:o,clientY:s}=kt(e);const i=o-bt;t.style.insetInlineStart=`${yt+(d.isRTL?-i:i)}px`,t.style.insetBlockStart=`${$t+(s-vt)}px`}},ue=()=>{const e=h();Re=!1,L(e,"swal2-dragging")},kt=e=>{let t=0,o=0;return e.type.startsWith("mouse")?(t=e.clientX,o=e.clientY):e.type.startsWith("touch")&&(t=e.touches[0].clientX,o=e.touches[0].clientY),{clientX:t,clientY:o}},ds=(e,t)=>{const o=x(),s=h();if(!(!o||!s)){if(t.toast){N(o,"width",t.width),s.style.width="100%";const i=Z();i&&s.insertBefore(i,K())}else N(s,"width",t.width);N(s,"padding",t.padding),t.color&&(s.style.color=t.color),t.background&&(s.style.background=t.background),$(ve()),us(s,t),t.draggable&&!t.toast?(f(s,n.draggable),ls(s)):(L(s,n.draggable),cs(s))}},us=(e,t)=>{const o=t.showClass||{};e.className=`${n.popup} ${C(e)?o.popup:""}`,t.toast?(f([document.documentElement,document.body],n["toast-shown"]),f(e,n.toast)):f(e,n.modal),A(e,t,"popup"),typeof t.customClass=="string"&&f(e,t.customClass),t.icon&&f(e,n[`icon-${t.icon}`])},ps=(e,t)=>{const o=Oe();if(!o)return;const{progressSteps:s,currentProgressStep:i}=t;if(!s||s.length===0||i===void 0){$(o);return}y(o),o.textContent="",i>=s.length&&k("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((a,c)=>{const u=fs(a);if(o.appendChild(u),c===i&&f(u,n["active-progress-step"]),c!==s.length-1){const p=hs(t);o.appendChild(p)}})},fs=e=>{const t=document.createElement("li");return f(t,n["progress-step"]),B(t,e),t},hs=e=>{const t=document.createElement("li");return f(t,n["progress-step-line"]),e.progressStepsDistance&&N(t,"width",e.progressStepsDistance),t},ws=(e,t)=>{const o=dt();o&&(qe(o),oe(o,!!(t.title||t.titleText),"block"),t.title&&Ve(t.title,o),t.titleText&&(o.innerText=t.titleText),A(o,t,"title"))},xt=(e,t)=>{var o;ds(e,t),_o(e,t),ps(e,t),ss(e,t),rs(e,t),ws(e,t),Wo(e,t),ts(e,t),Vo(e,t),os(e,t);const s=h();typeof t.didRender=="function"&&s&&t.didRender(s),(o=d.eventEmitter)===null||o===void 0||o.emit("didRender",s)},ms=()=>C(h()),Ct=()=>{var e;return(e=T())===null||e===void 0?void 0:e.click()},gs=()=>{var e;return(e=_())===null||e===void 0?void 0:e.click()},bs=()=>{var e;return(e=X())===null||e===void 0?void 0:e.click()},J=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Et=e=>{if(e.keydownTarget&&e.keydownHandlerAdded&&e.keydownHandler){const t=e.keydownHandler;e.keydownTarget.removeEventListener("keydown",t,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!1}},vs=(e,t,o)=>{if(Et(e),!t.toast){const s=a=>$s(t,a,o);e.keydownHandler=s;const i=t.keydownListenerCapture?window:h();if(i){e.keydownTarget=i,e.keydownListenerCapture=t.keydownListenerCapture;const a=s;e.keydownTarget.addEventListener("keydown",a,{capture:e.keydownListenerCapture}),e.keydownHandlerAdded=!0}}},Pe=(e,t)=>{var o;const s=De();if(s.length){e=e+t,e===-2&&(e=s.length-1),e===s.length?e=0:e===-1&&(e=s.length-1),s[e].focus();return}(o=h())===null||o===void 0||o.focus()},At=["ArrowRight","ArrowDown"],ys=["ArrowLeft","ArrowUp"],$s=(e,t,o)=>{e&&(t.isComposing||t.keyCode===229||(e.stopKeydownPropagation&&t.stopPropagation(),t.key==="Enter"?ks(t,e):t.key==="Tab"?xs(t):[...At,...ys].includes(t.key)?Cs(t.key):t.key==="Escape"&&Es(t,e,o)))},ks=(e,t)=>{if(!be(t.allowEnterKey))return;const o=h();if(!o||!t.input)return;const s=ke(o,t.input);if(e.target&&s&&e.target instanceof HTMLElement&&e.target.outerHTML===s.outerHTML){if(["textarea","file"].includes(t.input))return;Ct(),e.preventDefault()}},xs=e=>{const t=e.target,o=De();let s=-1;for(let i=0;i<o.length;i++)if(t===o[i]){s=i;break}e.shiftKey?Pe(s,-1):Pe(s,1),e.stopPropagation(),e.preventDefault()},Cs=e=>{const t=te(),o=T(),s=_(),i=X();if(!t||!o||!s||!i)return;const a=[o,s,i];if(document.activeElement instanceof HTMLElement&&!a.includes(document.activeElement))return;const c=At.includes(e)?"nextElementSibling":"previousElementSibling";let u=document.activeElement;if(u){for(let p=0;p<t.children.length;p++){if(u=u[c],!u)return;if(u instanceof HTMLButtonElement&&C(u))break}u instanceof HTMLButtonElement&&u.focus()}},Es=(e,t,o)=>{e.preventDefault(),be(t.allowEscapeKey)&&o(J.esc)};var Q={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const As=()=>{const e=x();Array.from(document.body.children).forEach(o=>{o.contains(e)||(o.hasAttribute("aria-hidden")&&o.setAttribute("data-previous-aria-hidden",o.getAttribute("aria-hidden")||""),o.setAttribute("aria-hidden","true"))})},jt=()=>{Array.from(document.body.children).forEach(t=>{t.hasAttribute("data-previous-aria-hidden")?(t.setAttribute("aria-hidden",t.getAttribute("data-previous-aria-hidden")||""),t.removeAttribute("data-previous-aria-hidden")):t.removeAttribute("aria-hidden")})},Bt=typeof window<"u"&&!!window.GestureEvent,js=()=>{if(Bt&&!M(document.body,n.iosfix)){const e=document.body.scrollTop;document.body.style.top=`${e*-1}px`,f(document.body,n.iosfix),Bs()}},Bs=()=>{const e=x();if(!e)return;let t;e.ontouchstart=o=>{t=Ps(o)},e.ontouchmove=o=>{t&&(o.preventDefault(),o.stopPropagation())}},Ps=e=>{const t=e.target,o=x(),s=Me();return!o||!s||Ls(e)||Is(e)?!1:t===o||!Be(o)&&t instanceof HTMLElement&&!Po(t,s)&&t.tagName!=="INPUT"&&t.tagName!=="TEXTAREA"&&!(Be(s)&&s.contains(t))},Ls=e=>!!(e.touches&&e.touches.length&&e.touches[0].touchType==="stylus"),Is=e=>e.touches&&e.touches.length>1,Ts=()=>{if(M(document.body,n.iosfix)){const e=parseInt(document.body.style.top,10);L(document.body,n.iosfix),document.body.style.top="",document.body.scrollTop=e*-1}},Ss=()=>{const e=document.createElement("div");e.className=n["scrollbar-measure"],document.body.appendChild(e);const t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t};let U=null;const Ms=e=>{U===null&&(document.body.scrollHeight>window.innerHeight||e==="scroll")&&(U=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${U+Ss()}px`)},Os=()=>{U!==null&&(document.body.style.paddingRight=`${U}px`,U=null)};function Pt(e,t,o,s){$e()?et(e,s):(vo(o).then(()=>et(e,s)),Et(d)),Bt?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),Fe()&&(Os(),Ts(),jt()),Hs()}function Hs(){L([document.documentElement,document.body],[n.shown,n["height-auto"],n["no-backdrop"],n["toast-shown"]])}function D(e){e=Fs(e);const t=Q.swalPromiseResolve.get(this),o=Ds(this);this.isAwaitingPromise?e.isDismissed||(ie(this),t(e)):o&&t(e)}const Ds=e=>{const t=h();if(!t)return!1;const o=w.innerParams.get(e);if(!o||M(t,o.hideClass.popup))return!1;L(t,o.showClass.popup),f(t,o.hideClass.popup);const s=x();return L(s,o.showClass.backdrop),f(s,o.hideClass.backdrop),qs(e,t,o),!0};function Lt(e){const t=Q.swalPromiseReject.get(this);ie(this),t&&t(e)}const ie=e=>{e.isAwaitingPromise&&(delete e.isAwaitingPromise,w.innerParams.get(e)||e._destroy())},Fs=e=>typeof e>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},e),qs=(e,t,o)=>{var s;const i=x(),a=wt(t);typeof o.willClose=="function"&&o.willClose(t),(s=d.eventEmitter)===null||s===void 0||s.emit("willClose",t),a&&i?zs(e,t,i,!!o.returnFocus,o.didClose):i&&Pt(e,i,!!o.returnFocus,o.didClose)},zs=(e,t,o,s,i)=>{d.swalCloseEventFinishedCallback=Pt.bind(null,e,o,s,i);const a=function(c){if(c.target===t){var u;(u=d.swalCloseEventFinishedCallback)===null||u===void 0||u.call(d),delete d.swalCloseEventFinishedCallback,t.removeEventListener("animationend",a),t.removeEventListener("transitionend",a)}};t.addEventListener("animationend",a),t.addEventListener("transitionend",a)},et=(e,t)=>{setTimeout(()=>{var o;typeof t=="function"&&t.bind(e.params)(),(o=d.eventEmitter)===null||o===void 0||o.emit("didClose"),e._destroy&&e._destroy()})},Y=e=>{let t=h();if(t||new q,t=h(),!t)return;const o=Z();$e()?$(K()):Vs(t,e),y(o),t.setAttribute("data-loading","true"),t.setAttribute("aria-busy","true"),t.focus()},Vs=(e,t)=>{const o=te(),s=Z();!o||!s||(!t&&C(T())&&(t=T()),y(o),t&&($(t),s.setAttribute("data-button-to-replace",t.className),o.insertBefore(s,t)),f([e,o],n.loading))},Ns=(e,t)=>{t.input==="select"||t.input==="radio"?Qs(e,t):["text","email","number","tel","textarea"].some(o=>o===t.input)&&(Te(t.inputValue)||Se(t.inputValue))&&(Y(T()),Ys(e,t))},Rs=(e,t)=>{const o=e.getInput();if(!o)return null;switch(t.input){case"checkbox":return Ws(o);case"radio":return _s(o);case"file":return Us(o);default:return t.inputAutoTrim?o.value.trim():o.value}},Ws=e=>e.checked?1:0,_s=e=>e.checked?e.value:null,Us=e=>e.files&&e.files.length?e.getAttribute("multiple")!==null?e.files:e.files[0]:null,Qs=(e,t)=>{const o=h();if(!o)return;const s=i=>{t.input==="select"?Ks(o,pe(i),t):t.input==="radio"&&Xs(o,pe(i),t)};Te(t.inputOptions)||Se(t.inputOptions)?(Y(T()),G(t.inputOptions).then(i=>{e.hideLoading(),s(i)})):typeof t.inputOptions=="object"?s(t.inputOptions):W(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof t.inputOptions}`)},Ys=(e,t)=>{const o=e.getInput();o&&($(o),G(t.inputValue).then(s=>{o.value=t.input==="number"?`${parseFloat(s)||0}`:`${s}`,y(o),o.focus(),e.hideLoading()}).catch(s=>{W(`Error in inputValue promise: ${s}`),o.value="",y(o),o.focus(),e.hideLoading()}))};function Ks(e,t,o){const s=H(e,n.select);if(!s)return;const i=(a,c,u)=>{const p=document.createElement("option");p.value=u,B(p,c),p.selected=It(u,o.inputValue),a.appendChild(p)};t.forEach(a=>{const c=a[0],u=a[1];if(Array.isArray(u)){const p=document.createElement("optgroup");p.label=c,p.disabled=!1,s.appendChild(p),u.forEach(O=>i(p,O[1],O[0]))}else i(s,u,c)}),s.focus()}function Xs(e,t,o){const s=H(e,n.radio);if(!s)return;t.forEach(a=>{const c=a[0],u=a[1],p=document.createElement("input"),O=document.createElement("label");p.type="radio",p.name=n.radio,p.value=c,It(c,o.inputValue)&&(p.checked=!0);const S=document.createElement("span");B(S,u),S.className=n.label,O.appendChild(p),O.appendChild(S),s.appendChild(O)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}const pe=e=>{const t=[];return e instanceof Map?e.forEach((o,s)=>{let i=o;typeof i=="object"&&(i=pe(i)),t.push([s,i])}):Object.keys(e).forEach(o=>{let s=e[o];typeof s=="object"&&(s=pe(s)),t.push([o,s])}),t},It=(e,t)=>!!t&&t!==null&&t!==void 0&&t.toString()===e.toString(),Zs=e=>{const t=w.innerParams.get(e);e.disableButtons(),t.input?Tt(e,"confirm"):_e(e,!0)},Js=e=>{const t=w.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?Tt(e,"deny"):We(e,!1)},Gs=(e,t)=>{e.disableButtons(),t(J.cancel)},Tt=(e,t)=>{const o=w.innerParams.get(e);if(!o.input){W(`The "input" parameter is needed to be set when using returnInputValueOn${Ie(t)}`);return}const s=e.getInput(),i=Rs(e,o);o.inputValidator?ei(e,i,t):s&&!s.checkValidity()?(e.enableButtons(),e.showValidationMessage(o.validationMessage||s.validationMessage)):t==="deny"?We(e,i):_e(e,i)},ei=(e,t,o)=>{const s=w.innerParams.get(e);e.disableInput(),Promise.resolve().then(()=>G(s.inputValidator(t,s.validationMessage))).then(a=>{e.enableButtons(),e.enableInput(),a?e.showValidationMessage(a):o==="deny"?We(e,t):_e(e,t)})},We=(e,t)=>{const o=w.innerParams.get(e);o.showLoaderOnDeny&&Y(_()),o.preDeny?(e.isAwaitingPromise=!0,Promise.resolve().then(()=>G(o.preDeny(t,o.validationMessage))).then(i=>{i===!1?(e.hideLoading(),ie(e)):e.close({isDenied:!0,value:typeof i>"u"?t:i})}).catch(i=>St(e,i))):e.close({isDenied:!0,value:t})},tt=(e,t)=>{e.close({isConfirmed:!0,value:t})},St=(e,t)=>{e.rejectPromise(t)},_e=(e,t)=>{const o=w.innerParams.get(e);o.showLoaderOnConfirm&&Y(),o.preConfirm?(e.resetValidationMessage(),e.isAwaitingPromise=!0,Promise.resolve().then(()=>G(o.preConfirm(t,o.validationMessage))).then(i=>{C(ve())||i===!1?(e.hideLoading(),ie(e)):tt(e,typeof i>"u"?t:i)}).catch(i=>St(e,i))):tt(e,t)};function fe(){const e=w.innerParams.get(this);if(!e)return;const t=w.domCache.get(this);$(t.loader),$e()?e.icon&&y(K()):ti(t),L([t.popup,t.actions],n.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}const ti=e=>{const t=e.loader.getAttribute("data-button-to-replace"),o=t?e.popup.getElementsByClassName(t):[];o.length?y(o[0],"inline-block"):Bo()&&$(e.actions)};function Mt(){const e=w.innerParams.get(this),t=w.domCache.get(this);return t?ke(t.popup,e.input):null}function Ot(e,t,o){const s=w.domCache.get(e);t.forEach(i=>{s[i].disabled=o})}function Ht(e,t){const o=h();if(!(!o||!e))if(e.type==="radio"){const s=o.querySelectorAll(`[name="${n.radio}"]`);for(let i=0;i<s.length;i++)s[i].disabled=t}else e.disabled=t}function Dt(){Ot(this,["confirmButton","denyButton","cancelButton"],!1)}function Ft(){Ot(this,["confirmButton","denyButton","cancelButton"],!0)}function qt(){Ht(this.getInput(),!1)}function zt(){Ht(this.getInput(),!0)}function Vt(e){const t=w.domCache.get(this),o=w.innerParams.get(this);B(t.validationMessage,e),t.validationMessage.className=n["validation-message"],o.customClass&&o.customClass.validationMessage&&f(t.validationMessage,o.customClass.validationMessage),y(t.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",n["validation-message"]),ft(s),f(s,n.inputerror))}function Nt(){const e=w.domCache.get(this);e.validationMessage&&$(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),L(t,n.inputerror))}const F={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0,topLayer:!1},oi=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],si={allowEnterKey:void 0},ii=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Rt=e=>Object.prototype.hasOwnProperty.call(F,e),Wt=e=>oi.indexOf(e)!==-1,_t=e=>si[e],ni=e=>{Rt(e)||k(`Unknown parameter "${e}"`)},ai=e=>{ii.includes(e)&&k(`The parameter "${e}" is incompatible with toasts`)},ri=e=>{const t=_t(e);t&&ct(e,t)},Ut=e=>{e.backdrop===!1&&e.allowOutsideClick&&k('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),e.theme&&!["light","dark","auto","minimal","borderless","bootstrap-4","bootstrap-4-light","bootstrap-4-dark","bootstrap-5","bootstrap-5-light","bootstrap-5-dark","material-ui","material-ui-light","material-ui-dark","embed-iframe","bulma","bulma-light","bulma-dark"].includes(e.theme)&&k(`Invalid theme "${e.theme}"`);for(const t in e)ni(t),e.toast&&ai(t),ri(t)};function Qt(e){const t=x(),o=h(),s=w.innerParams.get(this);if(!o||M(o,s.hideClass.popup)){k("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=li(e),a=Object.assign({},s,i);Ut(a),t&&(t.dataset.swal2Theme=a.theme),xt(this,a),w.innerParams.set(this,a),Object.defineProperties(this,{params:{value:Object.assign({},this.params,e),writable:!1,enumerable:!0}})}const li=e=>{const t={};return Object.keys(e).forEach(o=>{if(Wt(o)){const s=e;t[o]=s[o]}else k(`Invalid parameter to update: ${o}`)}),t};function Yt(){var e;const t=w.domCache.get(this),o=w.innerParams.get(this);if(!o){Kt(this);return}t.popup&&d.swalCloseEventFinishedCallback&&(d.swalCloseEventFinishedCallback(),delete d.swalCloseEventFinishedCallback),typeof o.didDestroy=="function"&&o.didDestroy(),(e=d.eventEmitter)===null||e===void 0||e.emit("didDestroy"),ci(this)}const ci=e=>{Kt(e),delete e.params,delete d.keydownHandler,delete d.keydownTarget,delete d.currentInstance},Kt=e=>{e.isAwaitingPromise?(je(w,e),e.isAwaitingPromise=!0):(je(Q,e),je(w,e),delete e.isAwaitingPromise,delete e.disableButtons,delete e.enableButtons,delete e.getInput,delete e.disableInput,delete e.enableInput,delete e.hideLoading,delete e.disableLoading,delete e.showValidationMessage,delete e.resetValidationMessage,delete e.close,delete e.closePopup,delete e.closeModal,delete e.closeToast,delete e.rejectPromise,delete e.update,delete e._destroy)},je=(e,t)=>{for(const o in e)e[o].delete(t)};var di=Object.freeze({__proto__:null,_destroy:Yt,close:D,closeModal:D,closePopup:D,closeToast:D,disableButtons:Ft,disableInput:zt,disableLoading:fe,enableButtons:Dt,enableInput:qt,getInput:Mt,handleAwaitingPromise:ie,hideLoading:fe,rejectPromise:Lt,resetValidationMessage:Nt,showValidationMessage:Vt,update:Qt});const ui=(e,t,o)=>{e.toast?pi(e,t,o):(hi(t),wi(t),mi(e,t,o))},pi=(e,t,o)=>{t.popup.onclick=()=>{e&&(fi(e)||e.timer||e.input)||o(J.close)}},fi=e=>!!(e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton);let he=!1;const hi=e=>{e.popup.onmousedown=()=>{e.container.onmouseup=function(t){e.container.onmouseup=()=>{},t.target===e.container&&(he=!0)}}},wi=e=>{e.container.onmousedown=t=>{t.target===e.container&&t.preventDefault(),e.popup.onmouseup=function(o){e.popup.onmouseup=()=>{},(o.target===e.popup||o.target instanceof HTMLElement&&e.popup.contains(o.target))&&(he=!0)}}},mi=(e,t,o)=>{t.container.onclick=s=>{if(he){he=!1;return}s.target===t.container&&be(e.allowOutsideClick)&&o(J.backdrop)}},gi=e=>typeof e=="object"&&e.jquery,ot=e=>e instanceof Element||gi(e),bi=e=>{const t={};return typeof e[0]=="object"&&!ot(e[0])?Object.assign(t,e[0]):["title","html","icon"].forEach((o,s)=>{const i=e[s];typeof i=="string"||ot(i)?t[o]=i:i!==void 0&&W(`Unexpected type of ${o}! Expected "string" or "Element", got ${typeof i}`)}),t};function vi(...e){return new this(...e)}function yi(e){class t extends this{_main(s,i){return super._main(s,Object.assign({},e,i))}}return t}const $i=()=>d.timeout&&d.timeout.getTimerLeft(),Xt=()=>{if(d.timeout)return Lo(),d.timeout.stop()},Zt=()=>{if(d.timeout){const e=d.timeout.start();return ze(e),e}},ki=()=>{const e=d.timeout;return e&&(e.running?Xt():Zt())},xi=e=>{if(d.timeout){const t=d.timeout.increase(e);return ze(t,!0),t}},Ci=()=>!!(d.timeout&&d.timeout.isRunning());let st=!1;const Le={};function Ei(e="data-swal-template"){Le[e]=this,st||(document.body.addEventListener("click",Ai),st=!0)}const Ai=e=>{for(let t=e.target;t&&t!==document;t=t.parentNode)for(const o in Le){const s=t.getAttribute&&t.getAttribute(o);if(s){Le[o].fire({template:s});return}}};class ji{constructor(){this.events={}}_getHandlersByEventName(t){return typeof this.events[t]>"u"&&(this.events[t]=[]),this.events[t]}on(t,o){const s=this._getHandlersByEventName(t);s.includes(o)||s.push(o)}once(t,o){const s=(...i)=>{this.removeListener(t,s),o.apply(this,i)};this.on(t,s)}emit(t,...o){this._getHandlersByEventName(t).forEach(s=>{try{s.apply(this,o)}catch(i){console.error(i)}})}removeListener(t,o){const s=this._getHandlersByEventName(t),i=s.indexOf(o);i>-1&&s.splice(i,1)}removeAllListeners(t){this.events[t]!==void 0&&(this.events[t].length=0)}reset(){this.events={}}}d.eventEmitter=new ji;const Bi=(e,t)=>{d.eventEmitter&&d.eventEmitter.on(e,t)},Pi=(e,t)=>{d.eventEmitter&&d.eventEmitter.once(e,t)},Li=(e,t)=>{if(d.eventEmitter){if(!e){d.eventEmitter.reset();return}t?d.eventEmitter.removeListener(e,t):d.eventEmitter.removeAllListeners(e)}};var Ii=Object.freeze({__proto__:null,argsToParams:bi,bindClickHandler:Ei,clickCancel:bs,clickConfirm:Ct,clickDeny:gs,enableLoading:Y,fire:vi,getActions:te,getCancelButton:X,getCloseButton:He,getConfirmButton:T,getContainer:x,getDenyButton:_,getFocusableElements:De,getFooter:pt,getHtmlContainer:Me,getIcon:K,getIconContent:xo,getImage:ut,getInputLabel:Co,getLoader:Z,getPopup:h,getProgressSteps:Oe,getTimerLeft:$i,getTimerProgressBar:ye,getTitle:dt,getValidationMessage:ve,increaseTimer:xi,isDeprecatedParameter:_t,isLoading:Ao,isTimerRunning:Ci,isUpdatableParameter:Wt,isValidParameter:Rt,isVisible:ms,mixin:yi,off:Li,on:Bi,once:Pi,resumeTimer:Zt,showLoading:Y,stopTimer:Xt,toggleTimer:ki});class Ti{constructor(t,o){this.callback=t,this.remaining=o,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(t){const o=this.running;return o&&this.stop(),this.remaining+=t,o&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Jt=["swal-title","swal-html","swal-footer"],Si=e=>{const t=typeof e.template=="string"?document.querySelector(e.template):e.template;if(!t)return{};const o=t.content;return Vi(o),Object.assign(Mi(o),Oi(o),Hi(o),Di(o),Fi(o),qi(o),zi(o,Jt))},Mi=e=>{const t={};return Array.from(e.querySelectorAll("swal-param")).forEach(s=>{R(s,["name","value"]);const i=s.getAttribute("name"),a=s.getAttribute("value");!i||!a||(i in F&&typeof F[i]=="boolean"?t[i]=a!=="false":i in F&&typeof F[i]=="object"?t[i]=JSON.parse(a):t[i]=a)}),t},Oi=e=>{const t={};return Array.from(e.querySelectorAll("swal-function-param")).forEach(s=>{const i=s.getAttribute("name"),a=s.getAttribute("value");!i||!a||(t[i]=new Function(`return ${a}`)())}),t},Hi=e=>{const t={};return Array.from(e.querySelectorAll("swal-button")).forEach(s=>{R(s,["type","color","aria-label"]);const i=s.getAttribute("type");if(!(!i||!["confirm","cancel","deny"].includes(i))){if(t[`${i}ButtonText`]=s.innerHTML,t[`show${Ie(i)}Button`]=!0,s.hasAttribute("color")){const a=s.getAttribute("color");a!==null&&(t[`${i}ButtonColor`]=a)}if(s.hasAttribute("aria-label")){const a=s.getAttribute("aria-label");a!==null&&(t[`${i}ButtonAriaLabel`]=a)}}}),t},Di=e=>{const t={},o=e.querySelector("swal-image");return o&&(R(o,["src","width","height","alt"]),o.hasAttribute("src")&&(t.imageUrl=o.getAttribute("src")||void 0),o.hasAttribute("width")&&(t.imageWidth=o.getAttribute("width")||void 0),o.hasAttribute("height")&&(t.imageHeight=o.getAttribute("height")||void 0),o.hasAttribute("alt")&&(t.imageAlt=o.getAttribute("alt")||void 0)),t},Fi=e=>{const t={},o=e.querySelector("swal-icon");return o&&(R(o,["type","color"]),o.hasAttribute("type")&&(t.icon=o.getAttribute("type")),o.hasAttribute("color")&&(t.iconColor=o.getAttribute("color")),t.iconHtml=o.innerHTML),t},qi=e=>{const t={},o=e.querySelector("swal-input");o&&(R(o,["type","label","placeholder","value"]),t.input=o.getAttribute("type")||"text",o.hasAttribute("label")&&(t.inputLabel=o.getAttribute("label")),o.hasAttribute("placeholder")&&(t.inputPlaceholder=o.getAttribute("placeholder")),o.hasAttribute("value")&&(t.inputValue=o.getAttribute("value")));const s=Array.from(e.querySelectorAll("swal-input-option"));return s.length&&(t.inputOptions={},s.forEach(i=>{R(i,["value"]);const a=i.getAttribute("value");if(!a)return;const c=i.innerHTML;t.inputOptions[a]=c})),t},zi=(e,t)=>{const o={};for(const s in t){const i=t[s],a=e.querySelector(i);a&&(R(a,[]),o[i.replace(/^swal-/,"")]=a.innerHTML.trim())}return o},Vi=e=>{const t=Jt.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(e.children).forEach(o=>{const s=o.tagName.toLowerCase();t.includes(s)||k(`Unrecognized element <${s}>`)})},R=(e,t)=>{Array.from(e.attributes).forEach(o=>{t.indexOf(o.name)===-1&&k([`Unrecognized attribute "${o.name}" on <${e.tagName.toLowerCase()}>.`,`${t.length?`Allowed attributes are: ${t.join(", ")}`:"To set the value, use HTML within the element."}`])})},Gt=10,Ni=e=>{var t,o;const s=x(),i=h();if(!s||!i)return;typeof e.willOpen=="function"&&e.willOpen(i),(t=d.eventEmitter)===null||t===void 0||t.emit("willOpen",i);const c=window.getComputedStyle(document.body).overflowY;if(_i(s,i,e),setTimeout(()=>{Ri(s,i)},Gt),Fe()&&(Wi(s,e.scrollbarPadding!==void 0?e.scrollbarPadding:!1,c),As()),!$e()&&!d.previousActiveElement&&(d.previousActiveElement=document.activeElement),typeof e.didOpen=="function"){const u=e.didOpen;setTimeout(()=>u(i))}(o=d.eventEmitter)===null||o===void 0||o.emit("didOpen",i)},we=e=>{const t=h();if(!t||e.target!==t)return;const o=x();o&&(t.removeEventListener("animationend",we),t.removeEventListener("transitionend",we),o.style.overflowY="auto",L(o,n["no-transition"]))},Ri=(e,t)=>{wt(t)?(e.style.overflowY="hidden",t.addEventListener("animationend",we),t.addEventListener("transitionend",we)):e.style.overflowY="auto"},Wi=(e,t,o)=>{js(),t&&o!=="hidden"&&Ms(o),setTimeout(()=>{e.scrollTop=0})},_i=(e,t,o)=>{var s;(s=o.showClass)!==null&&s!==void 0&&s.backdrop&&f(e,o.showClass.backdrop),o.animation?(t.style.setProperty("opacity","0","important"),y(t,"grid"),setTimeout(()=>{var i;(i=o.showClass)!==null&&i!==void 0&&i.popup&&f(t,o.showClass.popup),t.style.removeProperty("opacity")},Gt)):y(t,"grid"),f([document.documentElement,document.body],n.shown),o.heightAuto&&o.backdrop&&!o.toast&&f([document.documentElement,document.body],n["height-auto"])};var it={email:(e,t)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function Ui(e){e.inputValidator||(e.input==="email"&&(e.inputValidator=it.email),e.input==="url"&&(e.inputValidator=it.url))}function Qi(e){(!e.target||typeof e.target=="string"&&!document.querySelector(e.target)||typeof e.target!="string"&&!e.target.appendChild)&&(k('Target parameter is not valid, defaulting to "body"'),e.target="body")}function Yi(e){Ui(e),e.showLoaderOnConfirm&&!e.preConfirm&&k(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Qi(e),typeof e.title=="string"&&(e.title=e.title.split(`
`).join("<br />")),Fo(e)}let I;var ne=new WeakMap;class g{constructor(...t){if(wo(this,ne,Promise.resolve({isConfirmed:!1,isDenied:!1,isDismissed:!0})),typeof window>"u")return;I=this;const o=Object.freeze(this.constructor.argsToParams(t));this.params=o,this.isAwaitingPromise=!1,mo(ne,this,this._main(I.params))}_main(t,o={}){if(Ut(Object.assign({},o,t)),d.currentInstance){const a=Q.swalPromiseResolve.get(d.currentInstance),{isAwaitingPromise:c}=d.currentInstance;d.currentInstance._destroy(),c||a({isDismissed:!0}),Fe()&&jt()}d.currentInstance=I;const s=Xi(t,o);Yi(s),Object.freeze(s),d.timeout&&(d.timeout.stop(),delete d.timeout),clearTimeout(d.restoreFocusTimeout);const i=Zi(I);return xt(I,s),w.innerParams.set(I,s),Ki(I,i,s)}then(t){return Ye(ne,this).then(t)}finally(t){return Ye(ne,this).finally(t)}}const Ki=(e,t,o)=>new Promise((s,i)=>{const a=c=>{e.close({isDismissed:!0,dismiss:c,isConfirmed:!1,isDenied:!1})};Q.swalPromiseResolve.set(e,s),Q.swalPromiseReject.set(e,i),t.confirmButton.onclick=()=>{Zs(e)},t.denyButton.onclick=()=>{Js(e)},t.cancelButton.onclick=()=>{Gs(e,a)},t.closeButton.onclick=()=>{a(J.close)},ui(o,t,a),vs(d,o,a),Ns(e,o),Ni(o),Ji(d,o,a),Gi(t,o),setTimeout(()=>{t.container.scrollTop=0})}),Xi=(e,t)=>{const o=Si(e),s=Object.assign({},F,t,o,e);return s.showClass=Object.assign({},F.showClass,s.showClass),s.hideClass=Object.assign({},F.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},Zi=e=>{const t={popup:h(),container:x(),actions:te(),confirmButton:T(),denyButton:_(),cancelButton:X(),loader:Z(),closeButton:He(),validationMessage:ve(),progressSteps:Oe()};return w.domCache.set(e,t),t},Ji=(e,t,o)=>{const s=ye();$(s),t.timer&&(e.timeout=new Ti(()=>{o("timer"),delete e.timeout},t.timer),t.timerProgressBar&&s&&(y(s),A(s,t,"timerProgressBar"),setTimeout(()=>{e.timeout&&e.timeout.running&&ze(t.timer)})))},Gi=(e,t)=>{if(!t.toast){if(!be(t.allowEnterKey)){ct("allowEnterKey"),on();return}en(e)||tn(e,t)||Pe(-1,1)}},en=e=>{const t=Array.from(e.popup.querySelectorAll("[autofocus]"));for(const o of t)if(o instanceof HTMLElement&&C(o))return o.focus(),!0;return!1},tn=(e,t)=>t.focusDeny&&C(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&C(e.cancelButton)?(e.cancelButton.focus(),!0):t.focusConfirm&&C(e.confirmButton)?(e.confirmButton.focus(),!0):!1,on=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};g.prototype.disableButtons=Ft;g.prototype.enableButtons=Dt;g.prototype.getInput=Mt;g.prototype.disableInput=zt;g.prototype.enableInput=qt;g.prototype.hideLoading=fe;g.prototype.disableLoading=fe;g.prototype.showValidationMessage=Vt;g.prototype.resetValidationMessage=Nt;g.prototype.close=D;g.prototype.closePopup=D;g.prototype.closeModal=D;g.prototype.closeToast=D;g.prototype.rejectPromise=Lt;g.prototype.update=Qt;g.prototype._destroy=Yt;Object.assign(g,Ii);Object.keys(di).forEach(e=>{g[e]=function(...t){if(I&&I[e])return I[e](...t)}});g.DismissReason=J;g.version="11.26.17";const q=g;q.default=q;typeof document<"u"&&(function(e,t){var o=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(o),o.styleSheet)o.styleSheet.disabled||(o.styleSheet.cssText=t);else try{o.innerHTML=t}catch{o.innerText=t}})(document,':root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.15s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border: 1px solid #d9d9d9;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-input-hover-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-focus-border: 1px solid #b4dbed;--swal2-input-focus-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-footer-border-color: #eee;--swal2-footer-background: transparent;--swal2-footer-color: inherit;--swal2-timer-progress-bar-background: rgba(0, 0, 0, 0.3);--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-actions-justify-content: center;--swal2-actions-width: auto;--swal2-actions-margin: 1.25em auto 0;--swal2-actions-padding: 0;--swal2-actions-border-radius: 0;--swal2-actions-background: transparent;--swal2-action-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-action-button-hover: black 10%;--swal2-action-button-active: black 10%;--swal2-confirm-button-box-shadow: none;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-box-shadow: none;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-box-shadow: none;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white);--swal2-timer-progress-bar-background: rgba(255, 255, 255, 0.7)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;overflow-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:var(--swal2-actions-justify-content);width:var(--swal2-actions-width);margin:var(--swal2-actions-margin);padding:var(--swal2-actions-padding);border-radius:var(--swal2-actions-border-radius);background:var(--swal2-actions-background)}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-action-button-transition);border:none;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);box-shadow:var(--swal2-confirm-button-box-shadow);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);box-shadow:var(--swal2-deny-button-box-shadow);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);box-shadow:var(--swal2-cancel-button-box-shadow);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-hover))}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), var(--swal2-action-button-active))}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);background:var(--swal2-footer-background);color:var(--swal2-footer-color);font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:var(--swal2-timer-progress-bar-background)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;overflow-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:var(--swal2-input-border);border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):hover,div:where(.swal2-container) input:where(.swal2-file):hover,div:where(.swal2-container) textarea:where(.swal2-textarea):hover{box-shadow:var(--swal2-input-hover-box-shadow)}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:var(--swal2-input-focus-border);outline:none;box-shadow:var(--swal2-input-focus-box-shadow)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}100%{transform:translate3d(0, 0, 0) scale(1);opacity:1}}@keyframes swal2-hide{0%{transform:translate3d(0, 0, 0) scale(1);opacity:1}100%{transform:translate3d(0, -50px, 0) scale(0.9);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');function sn(){document.querySelectorAll(".code-snippet").forEach(t=>{if(t.querySelector(".copy-btn"))return;t.style.position="relative";const o=document.createElement("button");o.className="copy-btn",o.innerHTML='<i class="fa-regular fa-copy"></i>',o.title="Copiar código",t.appendChild(o),o.addEventListener("click",async s=>{s.preventDefault(),s.stopPropagation();const i=t.querySelector("code"),a=i?i.textContent:t.textContent;try{await navigator.clipboard.writeText(a),o.innerHTML='<i class="fa-solid fa-check"></i>',o.classList.add("copied"),q.mixin({toast:!0,position:"bottom-end",showConfirmButton:!1,timer:2e3,timerProgressBar:!0,customClass:{popup:"swal-toast-custom"},didOpen:u=>{u.onmouseenter=q.stopTimer,u.onmouseleave=q.resumeTimer}}).fire({icon:"success",title:"¡Código copiado!"}),setTimeout(()=>{o.innerHTML='<i class="fa-regular fa-copy"></i>',o.classList.remove("copied")},2e3)}catch(c){console.error("Error al copiar:",c),q.fire({icon:"error",title:"Error",text:"No se pudo copiar el código",timer:2e3,showConfirmButton:!1})}})})}function b(e){return e?e.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1").trim():""}let P=[],E=0,v={correct:0,incorrect:0,total:0},z=!1;function nn(e,t,o){!o||!o.temas||(P=an(o),P.length!==0&&(rn(),ln(),cn()))}function an(e){const t=[];return e.temas.forEach(o=>{o.caracteristicas&&Array.isArray(o.caracteristicas)&&o.caracteristicas.forEach(s=>{s.nombre&&s.descripcion&&t.push({front:`¿Qué significa "${s.nombre}" en JavaScript?`,back:b(s.descripcion),source:o.titulo})}),o.metodos&&Array.isArray(o.metodos)&&o.metodos.forEach(s=>{s.nombre&&s.descripcion&&t.push({front:`¿Qué hace ${s.nombre}?`,back:b(s.descripcion),source:o.titulo})}),o.tipos&&Array.isArray(o.tipos)&&o.tipos.forEach(s=>{s.palabra&&s.descripcion?t.push({front:`¿Qué características tiene "${s.palabra}"?`,back:b(s.descripcion),source:o.titulo}):s.nombre&&s.descripcion&&t.push({front:`¿Qué es el tipo ${s.nombre}?`,back:b(s.descripcion),source:o.titulo})}),["metodosArray","metodosString","metodosNumber"].forEach(s=>{const i=o[s];i&&Array.isArray(i)&&i.forEach(a=>{a.metodo&&a.descripcion&&t.push({front:`¿Qué hace el método ${a.metodo}?`,back:b(a.descripcion),source:o.titulo})})}),o.tiposDeclaracion&&Array.isArray(o.tiposDeclaracion)&&o.tiposDeclaracion.forEach(s=>{s.nombre&&s.descripcion&&t.push({front:`¿Qué caracteriza a "${s.nombre}"?`,back:b(s.descripcion),source:o.titulo})}),o.tiposScope&&Array.isArray(o.tiposScope)&&o.tiposScope.forEach(s=>{s.tipo&&s.descripcion&&t.push({front:`¿Qué es el ${s.tipo}?`,back:b(s.descripcion),source:o.titulo})}),o.valoresEspeciales&&Array.isArray(o.valoresEspeciales)&&o.valoresEspeciales.forEach(s=>{s.valor&&s.descripcion&&t.push({front:`¿Qué representa ${s.valor} en JavaScript?`,back:b(s.descripcion),source:o.titulo})}),o.caracteresEscape&&Array.isArray(o.caracteresEscape)&&o.caracteresEscape.forEach(s=>{s.caracter&&s.descripcion&&t.push({front:`¿Qué produce el carácter de escape ${s.caracter}?`,back:b(s.descripcion),source:o.titulo})}),o.formasCrear&&Array.isArray(o.formasCrear)&&o.formasCrear.forEach(s=>{s.tipo&&s.descripcion&&t.push({front:`¿Cómo se usa "${s.tipo}" para crear datos?`,back:b(s.descripcion),source:o.titulo})}),o.operadores&&Array.isArray(o.operadores)&&o.operadores.forEach(s=>{if(s.simbolo&&s.nombre){const i=s.descripcion?`${s.nombre}: ${b(s.descripcion)}`:s.nombre;t.push({front:`¿Qué hace el operador ${s.simbolo}?`,back:i,source:o.titulo})}}),o.versiones&&Array.isArray(o.versiones)&&o.versiones.filter(s=>s.destacado).forEach(s=>{s.version&&s.novedades&&t.push({front:`¿Qué novedades trajo ${s.version}?`,back:b(s.novedades),source:o.titulo})}),o.conceptosParametros&&Array.isArray(o.conceptosParametros)&&o.conceptosParametros.forEach(s=>{s.nombre&&s.descripcion&&t.push({front:`Explica: ${s.nombre}`,back:b(s.descripcion),source:o.titulo})}),o.pasoParametros&&Array.isArray(o.pasoParametros)&&o.pasoParametros.forEach(s=>{s.tipo&&s.descripcion&&s.aplicaA&&t.push({front:`¿Qué es el "${s.tipo}" y a qué tipos aplica?`,back:`${b(s.descripcion)} Aplica a: ${s.aplicaA}`,source:o.titulo})}),o.tablaComparativa&&Array.isArray(o.tablaComparativa)&&o.tablaComparativa.forEach(s=>{s.caracteristica&&s.arrow&&t.push({front:`En Arrow Functions, ¿cómo funciona "${s.caracteristica}"?`,back:b(s.arrow),source:o.titulo})}),o.formasDeclaracion&&Array.isArray(o.formasDeclaracion)&&o.formasDeclaracion.forEach(s=>{s.forma&&s.descripcion&&t.push({front:`¿Qué es la "${s.forma}" para declarar arrays?`,back:b(s.descripcion),source:o.titulo})}),o.metodosIteracion&&Array.isArray(o.metodosIteracion)&&o.metodosIteracion.forEach(s=>{s.metodo&&s.descripcion&&t.push({front:`¿Cuándo usar ${s.metodo} para iterar?`,back:b(s.descripcion),source:o.titulo})}),o.usosClosures&&Array.isArray(o.usosClosures)&&o.usosClosures.forEach(s=>{s.uso&&s.descripcion&&t.push({front:`¿Cómo se usan las Arrow Functions para "${s.uso}"?`,back:b(s.descripcion),source:o.titulo})})}),eo(t)}function eo(e){const t=[...e];for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}function rn(){if(document.getElementById("flashcardsModal"))return;document.body.insertAdjacentHTML("beforeend",`
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
  `)}function ln(e,t){const o=document.querySelector(".lesson-nav");if(!o)return;const s=document.createElement("button");s.className="quiz-btn",s.id="startQuiz",s.innerHTML=`
    <i class="fa-solid fa-brain"></i>
    <span>Quiz (${P.length})</span>
  `,s.title=`Practicar con ${P.length} tarjetas`;const i=o.querySelector(".lesson-nav-next");i?o.insertBefore(s,i):o.appendChild(s)}function cn(){const e=document.getElementById("flashcardsModal"),t=document.getElementById("closeFlashcards"),o=document.getElementById("flashcard"),s=document.getElementById("startQuiz"),i=document.getElementById("btnCorrect"),a=document.getElementById("btnIncorrect"),c=document.getElementById("cardPrev"),u=document.getElementById("cardNext");s?.addEventListener("click",()=>{to()}),t?.addEventListener("click",me),e?.addEventListener("click",S=>{S.target===e&&me()}),o?.addEventListener("click",()=>{o.classList.toggle("flipped"),z=!z,z&&document.getElementById("flashcardActions")?.classList.add("visible")}),i?.addEventListener("click",()=>ge(!0)),a?.addEventListener("click",()=>ge(!1)),c?.addEventListener("click",S=>{S.stopPropagation(),ae(-1)}),u?.addEventListener("click",S=>{S.stopPropagation(),ae(1)});const p=document.getElementById("cardPrevMobile"),O=document.getElementById("cardNextMobile");p?.addEventListener("click",()=>ae(-1)),O?.addEventListener("click",()=>ae(1)),document.addEventListener("keydown",dn)}function dn(e){if(!document.getElementById("flashcardsModal")?.classList.contains("hidden"))switch(e.key){case" ":e.preventDefault(),document.getElementById("flashcard")?.click();break;case"ArrowRight":z&&ge(!0);break;case"ArrowLeft":z&&ge(!1);break;case"Escape":me();break}}function to(){E=0,v={correct:0,incorrect:0,total:P.length},z=!1,P=eo(P),document.getElementById("flashcardsModal")?.classList.remove("hidden"),document.body.style.overflow="hidden",Ue(E),Qe(),oo()}function me(){document.getElementById("flashcardsModal")?.classList.add("hidden"),document.body.style.overflow="",document.getElementById("flashcard")?.classList.remove("flipped"),document.getElementById("flashcardActions")?.classList.remove("visible"),z=!1}function Ue(e){if(e>=P.length){pn();return}const t=P[e],o=document.getElementById("flashcard");o?.classList.remove("flipped"),document.getElementById("flashcardActions")?.classList.remove("visible"),z=!1,document.getElementById("cardSource").textContent=t.source,document.getElementById("cardFront").textContent=t.front,document.getElementById("cardBack").textContent=t.back,un(),o?.classList.add("entering"),setTimeout(()=>o?.classList.remove("entering"),300)}function ae(e){const t=E+e;t<0||t>=P.length||(E=t,Ue(E),Qe())}function un(){const e=document.getElementById("cardPrev"),t=document.getElementById("cardNext");e&&(e.disabled=E===0,e.style.opacity=E===0?"0.3":"1"),t&&(t.disabled=E>=P.length-1,t.style.opacity=E>=P.length-1?"0.3":"1")}function ge(e){e?v.correct++:v.incorrect++,oo(),E++,Qe(),setTimeout(()=>Ue(E),200)}function Qe(){const e=document.getElementById("quizProgress"),t=document.getElementById("progressCurrent"),o=document.getElementById("progressTotal"),s=Math.min((E+1)/v.total*100,100);e&&(e.style.width=`${s}%`),t&&(t.textContent=Math.min(E+1,v.total)),o&&(o.textContent=v.total)}function oo(){document.getElementById("scoreCorrect").textContent=v.correct,document.getElementById("scoreIncorrect").textContent=v.incorrect}function pn(){const e=Math.round(v.correct/v.total*100);let t,o,s;e>=80?(t="success",o="¡Excelente! 🎉",s=`Has acertado ${v.correct} de ${v.total} (${e}%). ¡Dominas este tema!`):e>=50?(t="info",o="¡Buen trabajo! 👍",s=`Has acertado ${v.correct} de ${v.total} (${e}%). Vas por buen camino.`):(t="warning",o="Sigue practicando 💪",s=`Has acertado ${v.correct} de ${v.total} (${e}%). ¡La práctica hace al maestro!`),me(),q.fire({icon:t,title:o,text:s,showCancelButton:!0,confirmButtonText:"Repetir Quiz",cancelButtonText:"Cerrar",confirmButtonColor:"var(--accent-primary)",cancelButtonColor:"var(--text-muted)",background:"var(--bg-card)",color:"var(--text-main)"}).then(i=>{i.isConfirmed&&setTimeout(to,200)}),fn(e)}function fn(e){const t="quizResults",o=JSON.parse(localStorage.getItem(t)||"{}"),s=document.querySelector("main")?.dataset.modulo,i=document.querySelector("main")?.dataset.clase,a=`m${s}-c${i}`;o[a]||(o[a]=[]),o[a].push({date:new Date().toISOString(),score:e,correct:v.correct,total:v.total}),o[a].length>10&&(o[a]=o[a].slice(-10)),localStorage.setItem(t,JSON.stringify(o))}function hn(e){!e||!e.temas||e.temas.length<3||(wn(e),gn(),bn())}function wn(e){const o=`
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
          ${e.temas.map((s,i)=>`
    <a href="#t${i}" class="toc-item" data-section="t${i}">
      <span class="toc-number">${i+1}</span>
      <span class="toc-title">${mn(s.titulo)}</span>
    </a>
  `).join("")}
        </div>
      </div>
    </nav>
  `;document.body.insertAdjacentHTML("beforeend",o)}function mn(e){return e.replace(/`([^`]+)`/g,"$1").replace(/\*\*([^*]+)\*\*/g,"$1").replace(/\*([^*]+)\*/g,"$1")}function gn(){const e=document.querySelectorAll(".tema-block");if(e.length===0)return;const t={root:null,rootMargin:"-20% 0px -60% 0px",threshold:0},o=new IntersectionObserver(s=>{s.forEach(i=>{if(i.isIntersecting){document.querySelectorAll(".toc-item").forEach(c=>{c.classList.remove("active")});const a=document.querySelector(`.toc-item[data-section="${i.target.id}"]`);if(a){a.classList.add("active");const c=document.querySelector(".toc-list");c&&a.offsetTop>c.clientHeight&&(c.scrollTop=a.offsetTop-50)}}})},t);e.forEach(s=>o.observe(s))}function bn(){const e=document.getElementById("tocToggle");document.getElementById("tocPanel");const t=document.getElementById("tocClose"),o=document.getElementById("tocContainer");e?.addEventListener("click",()=>{o?.classList.toggle("open")}),t?.addEventListener("click",()=>{o?.classList.remove("open")}),document.querySelectorAll(".toc-item").forEach(s=>{s.addEventListener("click",i=>{window.innerWidth<1200&&o?.classList.remove("open"),i.preventDefault();const a=s.getAttribute("href").substring(1),c=document.getElementById(a);c&&(c.scrollIntoView({behavior:"smooth",block:"start"}),history.pushState(null,"",`#${a}`))})}),document.addEventListener("click",s=>{window.innerWidth<1200&&o?.classList.contains("open")&&!o.contains(s.target)&&o.classList.remove("open")}),document.addEventListener("keydown",s=>{s.key==="Escape"&&o?.classList.contains("open")&&o.classList.remove("open")})}no();ao();ro();const so=document.querySelector("main"),xe=parseInt(so?.dataset.modulo||"1",10),Ce=parseInt(so?.dataset.clase||"1",10);co(xe,Ce);const io=nt(xe,Ce);sn();nn(xe,Ce,io);hn(io);vn(xe,Ce);function vn(e,t){const o=lo(e);if(!o||o.length===0)return;const s=o.findIndex(p=>p.id===t);if(s===-1)return;const i=o[s-1],a=o[s+1],c=document.querySelector(".lesson-nav-prev"),u=document.querySelector(".lesson-nav-next");if(c&&i){const p=document.createElement("a");p.className="lesson-nav-prev",p.href=`./clase-${i.id}.html`,p.innerHTML='<i class="fa-solid fa-arrow-left"></i> Anterior',c.replaceWith(p)}if(u&&a){const p=document.createElement("a");p.className="lesson-nav-next",p.href=`./clase-${a.id}.html`,p.innerHTML='Siguiente <i class="fa-solid fa-arrow-right"></i>',u.replaceWith(p)}}
