import{i as t,a as r}from"./footer-BdrxZYuy.js";import{a as n}from"./index-CuCySlZs.js";function p(s,o){const i=document.getElementById("lessonContainer");if(!i)return;const a=n(s,o);if(!a){i.innerHTML='<p class="error">Clase no encontrada</p>';return}i.innerHTML=`
    <article class="class-card">
      <div class="class-card-header">
        <div class="class-number">${a.id}</div>
        <div class="class-info">
          <h1>${a.titulo}</h1>
        </div>
      </div>
      
      <div class="class-content">
        ${a.temas.map((d,l)=>v(d,l)).join("")}
      </div>
    </article>
  `}function v(s,o){return`
    <section class="tema-block">
      <div class="tema-header">
        <span class="tema-number">${o+1}</span>
        <h3>${s.titulo}</h3>
      </div>
      
      <p class="tema-intro">${s.contenido}</p>
      
      ${u(s)}
    </section>
  `}function u(s){let o="";return s.puntosClave&&(o+=`
      <div class="info-box puntos-clave">
        <div class="info-box-header">
          <i class="fa-solid fa-key"></i>
          <span>Puntos Clave</span>
        </div>
        <ul class="check-list">
          ${s.puntosClave.map(i=>`<li><i class="fa-solid fa-check"></i> ${i}</li>`).join("")}
        </ul>
      </div>
    `),s.caracteristicas&&(o+=`
      <div class="features-grid">
        ${s.caracteristicas.map(i=>`
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-cube"></i></div>
            <h4>${i.nombre}</h4>
            <p>${i.descripcion}</p>
          </div>
        `).join("")}
      </div>
    `),s.metodos&&s.titulo.includes("ejecutar")&&(o+=`
      <div class="methods-list">
        ${s.metodos.map((i,a)=>`
          <div class="method-item">
            <div class="method-number">${a+1}</div>
            <div class="method-content">
              <h4>${i.nombre}</h4>
              <p>${i.descripcion}</p>
              ${i.ejemplo?`<pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>`:""}
            </div>
          </div>
        `).join("")}
      </div>
    `),s.metodos&&s.titulo.includes("Console")&&(o+=`
      <div class="console-grid">
        ${s.metodos.map(i=>`
          <div class="console-item ${i.color}">
            <code>${i.nombre}</code>
            <span>${i.descripcion}</span>
          </div>
        `).join("")}
      </div>
    `),s.posiciones&&(o+=`
      <div class="positions-list">
        ${s.posiciones.map(i=>`
          <div class="position-item">
            <code class="position-tag">${i.lugar}</code>
            <div class="position-info">
              <p>${i.comportamiento}</p>
              ${i.solucion?`<p class="tip"><i class="fa-solid fa-lightbulb"></i> ${i.solucion}</p>`:""}
            </div>
          </div>
        `).join("")}
      </div>
      ${s.codigoEjemplo?`<pre class="code-snippet"><code>${e(s.codigoEjemplo)}</code></pre>`:""}
    `),s.tipos&&s.titulo.includes("Declaración")&&(o+=`
      <div class="declaration-grid">
        ${s.tipos.map(i=>`
          <div class="declaration-card ${i.color}">
            <div class="declaration-badge">
              <i class="fa-solid ${i.icono}"></i>
              <code>${i.palabra}</code>
            </div>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.tipos&&s.titulo.includes("primitivos")&&(o+=`
      <div class="types-grid">
        ${s.tipos.map(i=>`
          <div class="type-card">
            <h4>${i.nombre}</h4>
            <p>${i.descripcion}</p>
            <div class="type-examples">
              ${i.ejemplos.map(a=>`<code>${e(a)}</code>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `),s.ejemplos&&s.titulo.includes("typeof")&&(o+=`
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Expresión</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            ${s.ejemplos.map(i=>`
              <tr>
                <td data-label="Expresión"><code>${e(i.codigo)}</code></td>
                <td data-label="Resultado"><code class="result">${e(i.resultado)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${s.nota?`<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${s.nota}</div>`:""}
    `),s.reglas&&(s.titulo.includes("Naming")||s.titulo.includes("nombres"))&&(o+=`
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
            ${s.reglas.map(i=>`
              <tr>
                <td data-label="Tipo">${i.tipo}</td>
                <td data-label="Ejemplo"><code>${e(i.ejemplo)}</code></td>
                <td data-label="Estilo"><span class="style-badge">${i.estilo}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),s.operadores&&(o+=h(s)),s.ejemplos&&s.titulo.includes("Ternario")&&(o+=`
      <div class="syntax-highlight">
        <code>${s.sintaxis}</code>
      </div>
      <div class="examples-list">
        ${s.ejemplos.map(i=>`
          <div class="example-item">
            <h5>${i.descripcion}</h5>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.comparacion&&Array.isArray(s.comparacion)&&(o+=`
      <div class="syntax-highlight">
        <code>${s.sintaxis}</code>
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
            ${s.comparacion.map(i=>`
              <tr class="${i.diferente?"highlight-row":""}">
                <td data-label="Expresión"><code>${e(i.expresion)}</code></td>
                <td data-label="?? (Nullish)"><code>${e(i.resultadoNullish)}</code></td>
                <td data-label="|| (OR)"><code>${e(i.resultadoOr)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${s.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${s.nota}</div>`:""}
    `),s.alerta&&(o+=`<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${s.alerta}</div>`),s.nota&&!s.ejemplos&&!s.comparacion&&(o+=`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${s.nota}</div>`),s.sintaxis&&typeof s.sintaxis=="string"&&!s.equivalencia&&(o+=`
      <div class="syntax-box">
        <code class="syntax-code">${e(s.sintaxis)}</code>
      </div>
    `),s.ejemplo&&typeof s.ejemplo=="string"&&(o+=`<pre class="code-snippet"><code>${e(s.ejemplo)}</code></pre>`),s.versiones&&(o+=`
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
            ${s.versiones.map(i=>`
              <tr class="${i.destacado?"highlight-row":""}">
                <td data-label="Año">${i.anio}</td>
                <td data-label="Versión"><strong>${i.version}</strong></td>
                <td data-label="Novedades">${i.novedades}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${s.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${s.nota}</div>`:""}
    `),s.reglas&&s.titulo.includes("Comportamiento especial")&&(o+=`
      <div class="special-operators">
        ${s.reglas.map(i=>`
          <div class="special-operator-card">
            <div class="special-operator-header">
              <code class="special-symbol">${i.operador}</code>
              <span class="special-rule">${i.regla}</span>
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
                  ${i.ejemplos.map(a=>`
                    <tr>
                      <td data-label="Código"><code>${e(a.codigo)}</code></td>
                      <td data-label="Resultado"><code class="result">${e(a.resultado)}</code></td>
                      <td data-label="Explicación">${a.explicacion}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `).join("")}
      </div>
      ${s.nota?`<div class="alert info"><i class="fa-brands fa-react"></i> ${s.nota}</div>`:""}
    `),s.equivalencia&&(o+=`
      <div class="syntax-highlight">
        <code>${s.sintaxis}</code>
      </div>
      <div class="equivalence-box">
        <i class="fa-solid fa-equals"></i>
        <code>${s.equivalencia}</code>
      </div>
      <div class="examples-grid">
        ${s.ejemplos.map(i=>`
          <div class="example-card">
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
            <p class="example-explanation"><i class="fa-solid fa-arrow-right"></i> ${i.explicacion}</p>
          </div>
        `).join("")}
      </div>
      ${s.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${s.nota}</div>`:""}
    `),s.funcionVsMetodo&&(o+=`
      <div class="comparison-section">
        <h4 class="comparison-title"><i class="fa-solid fa-code-compare"></i> ${s.funcionVsMetodo.titulo}</h4>
        <div class="comparison-grid">
          ${s.funcionVsMetodo.diferencias.map(i=>`
            <div class="comparison-card">
              <div class="comparison-header">
                <span class="comparison-type">${i.tipo}</span>
              </div>
              <p>${i.descripcion}</p>
              <pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>
            </div>
          `).join("")}
        </div>
        ${s.funcionVsMetodo.nota?`<div class="alert info"><i class="fa-solid fa-lightbulb"></i> ${s.funcionVsMetodo.nota}</div>`:""}
      </div>
    `),s.ejemploFuncion&&(o+=`
      <div class="function-example">
        <h4 class="function-example-title"><i class="fa-solid fa-code"></i> ${s.ejemploFuncion.descripcion}</h4>
        <pre class="code-snippet large"><code>${e(s.ejemploFuncion.codigo)}</code></pre>
        <p class="function-explanation"><i class="fa-solid fa-arrow-right"></i> ${s.ejemploFuncion.explicacion}</p>
      </div>
    `),s.estructuraFuncion&&(o+=`
      <div class="structure-section">
        <div class="structure-parts">
          ${s.estructuraFuncion.partes.map((i,a)=>`
            <div class="structure-part">
              <span class="part-number">${a+1}</span>
              <div class="part-content">
                <strong>${i.nombre}</strong>
                <p>${i.descripcion}</p>
              </div>
            </div>
          `).join("")}
        </div>
        <pre class="code-snippet large"><code>${e(s.estructuraFuncion.codigo)}</code></pre>
      </div>
    `),s.ejemplosInvocacion&&(o+=`
      <div class="examples-grid">
        ${s.ejemplosInvocacion.map(i=>`
          <div class="example-card">
            <h5>${i.titulo}</h5>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.tiposRetorno&&(o+=`
      <div class="return-types-grid">
        ${s.tiposRetorno.map(i=>`
          <div class="return-type-card">
            <h5>${i.tipo}</h5>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.conceptosParametros&&(o+=`
      <div class="concepts-list">
        ${s.conceptosParametros.map(i=>`
          <div class="concept-card">
            <h5><i class="fa-solid fa-lightbulb"></i> ${i.nombre}</h5>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.pasoParametros&&(o+=`
      <div class="pass-params-grid">
        ${s.pasoParametros.map(i=>`
          <div class="pass-param-card ${i.color||""}">
            <div class="pass-param-header">
              <h5>${i.tipo}</h5>
              <span class="applies-to">${i.aplicaA}</span>
            </div>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.tiposDeclaracion&&(o+=`
      <div class="declaration-types-grid">
        ${s.tiposDeclaracion.map(i=>`
          <div class="declaration-type-card ${i.destacado?"destacado":""}">
            <div class="declaration-header">
              <i class="fa-solid ${i.icono||"fa-code"}"></i>
              <h5>${i.nombre}</h5>
            </div>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.ejemploCallback&&(o+=`
      <div class="callback-example">
        <h5><i class="fa-solid fa-share"></i> ${s.ejemploCallback.descripcion}</h5>
        <pre class="code-snippet large"><code>${e(s.ejemploCallback.codigo)}</code></pre>
        <p class="callback-explanation"><i class="fa-solid fa-info-circle"></i> ${s.ejemploCallback.explicacion}</p>
      </div>
    `),s.casoDeUso&&(o+=`
      <div class="use-case">
        <h5><i class="fa-solid fa-flask"></i> ${s.casoDeUso.titulo}</h5>
        <pre class="code-snippet"><code>${e(s.casoDeUso.codigo)}</code></pre>
      </div>
    `),s.sintaxisIIFE&&(o+=`
      <div class="iife-section">
        <div class="syntax-highlight">
          <code>${s.sintaxisIIFE.estructura}</code>
        </div>
        <pre class="code-snippet large"><code>${e(s.sintaxisIIFE.codigo)}</code></pre>
        <div class="iife-uses">
          <h5><i class="fa-solid fa-check-circle"></i> Usos comunes:</h5>
          <ul class="check-list">
            ${s.sintaxisIIFE.usos.map(i=>`<li><i class="fa-solid fa-check"></i> ${i}</li>`).join("")}
          </ul>
        </div>
      </div>
    `),s.funcionesAnidadas&&(o+=`
      <div class="nested-functions">
        <pre class="code-snippet large"><code>${e(s.funcionesAnidadas.codigo)}</code></pre>
        ${s.funcionesAnidadas.nota?`<div class="alert info"><i class="fa-solid fa-info-circle"></i> ${s.funcionesAnidadas.nota}</div>`:""}
      </div>
    `),s.retornoFuncion&&(o+=`
      <div class="return-function">
        <h5><i class="fa-solid fa-reply"></i> ${s.retornoFuncion.titulo}</h5>
        <pre class="code-snippet large"><code>${e(s.retornoFuncion.codigo)}</code></pre>
        <p class="return-explanation"><i class="fa-solid fa-arrow-right"></i> ${s.retornoFuncion.explicacion}</p>
      </div>
    `),s.queSonClosures&&(o+=`
      <div class="closures-intro">
        <p class="closures-definition">${s.queSonClosures.definicion}</p>
        <div class="closures-importance">
          <h5><i class="fa-solid fa-star"></i> ¿Por qué son importantes?</h5>
          <ul class="check-list">
            ${s.queSonClosures.porQueImportan.map(i=>`<li><i class="fa-solid fa-check"></i> ${i}</li>`).join("")}
          </ul>
        </div>
      </div>
    `),s.ejemploClosure&&(o+=`
      <div class="closure-example">
        <h5><i class="fa-solid fa-lock"></i> ${s.ejemploClosure.titulo}</h5>
        <pre class="code-snippet large"><code>${e(s.ejemploClosure.codigo)}</code></pre>
        <p class="closure-explanation"><i class="fa-solid fa-arrow-right"></i> ${s.ejemploClosure.explicacion}</p>
        ${s.ejemploClosure.puntosClave?`
          <div class="closure-points">
            <ul class="check-list">
              ${s.ejemploClosure.puntosClave.map(i=>`<li><i class="fa-solid fa-check"></i> ${i}</li>`).join("")}
            </ul>
          </div>
        `:""}
      </div>
    `),s.formasCrear&&(o+=`
      <div class="creation-methods">
        ${s.formasCrear.map(i=>`
          <div class="creation-card ${i.destacado?"destacado":""}">
            <h5>${i.tipo}</h5>
            <pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>
            <p>${i.descripcion}</p>
          </div>
        `).join("")}
      </div>
    `),s.comparacion&&s.comparacion.antes&&(o+=`
      <div class="comparison-before-after">
        <h5>${s.comparacion.titulo}</h5>
        <div class="comparison-columns">
          <div class="comparison-col before">
            <span class="comparison-label">❌ Antes</span>
            <pre class="code-snippet"><code>${e(s.comparacion.antes)}</code></pre>
          </div>
          <div class="comparison-col after">
            <span class="comparison-label">✓ Después</span>
            <pre class="code-snippet"><code>${e(s.comparacion.despues)}</code></pre>
          </div>
        </div>
      </div>
    `),s.metodosString&&(o+=`
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
            ${s.metodosString.map(i=>`
              <tr>
                <td data-label="Método"><code>${i.metodo}</code></td>
                <td data-label="Descripción">${i.descripcion}</td>
                <td data-label="Ejemplo"><code>${e(i.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),s.valoresEspeciales&&(o+=`
      <div class="special-values">
        ${s.valoresEspeciales.map(i=>`
          <div class="special-value-card">
            <code>${i.valor}</code>
            <p>${i.descripcion}</p>
          </div>
        `).join("")}
      </div>
    `),s.metodosNumber&&(o+=`
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
            ${s.metodosNumber.map(i=>`
              <tr>
                <td data-label="Método"><code>${i.metodo}</code></td>
                <td data-label="Descripción">${i.descripcion}</td>
                <td data-label="Ejemplo"><code>${e(i.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),s.estructuraCondicional&&(o+=`
      <div class="conditional-structure">
        <pre class="code-snippet large"><code>${e(s.estructuraCondicional.sintaxis)}</code></pre>
        <div class="conditional-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo práctico:</h5>
          <pre class="code-snippet"><code>${e(s.estructuraCondicional.ejemplo)}</code></pre>
        </div>
      </div>
    `),s.estructuraSwitch&&(o+=`
      <div class="switch-structure">
        <pre class="code-snippet large"><code>${e(s.estructuraSwitch.sintaxis)}</code></pre>
        <div class="switch-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${e(s.estructuraSwitch.ejemplo)}</code></pre>
        </div>
      </div>
    `),s.estructuraWhile&&(o+=`
      <div class="loop-structure">
        <pre class="code-snippet"><code>${e(s.estructuraWhile.sintaxis)}</code></pre>
        <div class="loop-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${e(s.estructuraWhile.ejemplo)}</code></pre>
        </div>
      </div>
    `),s.estructuraDoWhile&&(o+=`
      <div class="loop-structure">
        <pre class="code-snippet"><code>${e(s.estructuraDoWhile.sintaxis)}</code></pre>
        <div class="loop-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${e(s.estructuraDoWhile.ejemplo)}</code></pre>
        </div>
      </div>
    `),s.estructuraFor&&(o+=`
      <div class="for-structure">
        <pre class="code-snippet"><code>${e(s.estructuraFor.sintaxis)}</code></pre>
        <div class="for-example">
          <h5><i class="fa-solid fa-code"></i> Ejemplo:</h5>
          <pre class="code-snippet"><code>${e(s.estructuraFor.ejemplo)}</code></pre>
        </div>
        ${s.estructuraFor.explicacion?`
          <div class="for-explanation">
            <ul>
              ${s.estructuraFor.explicacion.map(i=>`<li>${i}</li>`).join("")}
            </ul>
          </div>
        `:""}
      </div>
    `),s.definicionScope&&(o+=`
      <div class="scope-definition">
        <p class="scope-desc">${s.definicionScope.descripcion}</p>
        <div class="scope-rules">
          <h5><i class="fa-solid fa-list-check"></i> Reglas importantes:</h5>
          <ul class="check-list">
            ${s.definicionScope.reglas.map(i=>`<li><i class="fa-solid fa-check"></i> ${i}</li>`).join("")}
          </ul>
        </div>
      </div>
    `),s.tiposScope&&(o+=`
      <div class="scope-types-grid">
        ${s.tiposScope.map(i=>`
          <div class="scope-type-card ${i.color||""}">
            <div class="scope-header">
              <i class="fa-solid ${i.icono}"></i>
              <h5>${i.tipo}</h5>
            </div>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.ejemploCadena&&(o+=`
      <div class="scope-chain-example">
        <pre class="code-snippet large"><code>${e(s.ejemploCadena.codigo)}</code></pre>
        <p class="scope-chain-explanation"><i class="fa-solid fa-arrow-right"></i> ${s.ejemploCadena.explicacion}</p>
      </div>
    `),s.ejemploHoisting&&(o+=`
      <div class="hoisting-example">
        <p class="hoisting-question"><i class="fa-solid fa-question-circle"></i> ${s.ejemploHoisting.pregunta}</p>
        <pre class="code-snippet"><code>${e(s.ejemploHoisting.codigo)}</code></pre>
        <div class="hoisting-answer">
          <span class="answer-label">Respuesta:</span>
          <code class="answer-value">${s.ejemploHoisting.respuesta}</code>
        </div>
        <p class="hoisting-explanation">${s.ejemploHoisting.explicacion}</p>
      </div>
    `),s.tablaHoisting&&(o+=`
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
            ${s.tablaHoisting.map(i=>`
              <tr>
                <td data-label="Elemento"><code>${i.elemento}</code></td>
                <td data-label="Hoisting">${i.hoisting}</td>
                <td data-label="Resultado">${i.resultado}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),s.ejemploFunciones&&(o+=`
      <div class="hoisting-functions">
        <div class="hoisting-func-card success">
          <h5><i class="fa-solid fa-check-circle"></i> Función Declarativa (con hoisting)</h5>
          <pre class="code-snippet"><code>${e(s.ejemploFunciones.funcionDeclarativa)}</code></pre>
        </div>
        <div class="hoisting-func-card error">
          <h5><i class="fa-solid fa-times-circle"></i> Expresión de Función (sin hoisting)</h5>
          <pre class="code-snippet"><code>${e(s.ejemploFunciones.funcionExpresion)}</code></pre>
        </div>
      </div>
    `),s.tablaComparativa&&(o+=`
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
            ${s.tablaComparativa.map(i=>`
              <tr>
                <td data-label="Característica">${i.caracteristica}</td>
                <td data-label="var">${i.var}</td>
                <td data-label="let">${i.let}</td>
                <td data-label="const">${i.const}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${s.recomendacion?`<div class="alert success"><i class="fa-solid fa-lightbulb"></i> <strong>Recomendación:</strong> ${s.recomendacion}</div>`:""}
    `),s.requisitos&&(o+=`
      <div class="requirements-list">
        <h5><i class="fa-solid fa-list-ol"></i> Requisitos para crear un closure:</h5>
        <ol class="numbered-list">
          ${s.requisitos.map(i=>`<li>${i}</li>`).join("")}
        </ol>
      </div>
    `),s.usosClosures&&(o+=`
      <div class="closures-uses-grid">
        ${s.usosClosures.map(i=>`
          <div class="closure-use-card">
            <h5><i class="fa-solid fa-cube"></i> ${i.uso}</h5>
            <p>${i.descripcion}</p>
          </div>
        `).join("")}
      </div>
    `),s.tecnicasValidacion&&(o+=`
      <div class="validation-techniques">
        <div class="technique-card">
          <h5><i class="fa-solid fa-keyboard"></i> Pedir datos con prompt</h5>
          <pre class="code-snippet"><code>${e(s.tecnicasValidacion.prompt)}</code></pre>
        </div>
        <div class="technique-card">
          <h5><i class="fa-solid fa-shield-halved"></i> Validar entrada</h5>
          <pre class="code-snippet"><code>${e(s.tecnicasValidacion.validacion)}</code></pre>
        </div>
      </div>
    `),s.solucion&&(o+=`
      <div class="exercise-solution">
        <h5><i class="fa-solid fa-code"></i> Solución:</h5>
        <pre class="code-snippet large"><code>${e(s.solucion.codigo)}</code></pre>
      </div>
    `),s.formasConcatenacion&&(o+=`
      <div class="concatenation-methods">
        ${s.formasConcatenacion.map(i=>`
          <div class="concat-card">
            <h5><i class="fa-solid fa-link"></i> ${i.metodo}</h5>
            <p>${i.descripcion}</p>
            <pre class="code-snippet"><code>${e(i.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),s.caracteresEscape&&(o+=`
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
            ${s.caracteresEscape.map(i=>`
              <tr>
                <td data-label="Carácter"><code>${e(i.caracter)}</code></td>
                <td data-label="Descripción">${i.descripcion}</td>
                <td data-label="Ejemplo"><code>${e(i.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),s.formasCrearNumero&&(o+=`
      <div class="creation-methods">
        ${s.formasCrearNumero.map(i=>`
          <div class="creation-card">
            <h5>${i.forma}</h5>
            <code>${e(i.ejemplo)}</code>
            <p>${i.descripcion}</p>
          </div>
        `).join("")}
      </div>
    `),s.constantesNumber&&(o+=`
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
            ${s.constantesNumber.map(i=>`
              <tr>
                <td data-label="Constante"><code>${e(i.constante)}</code></td>
                <td data-label="Descripción">${i.descripcion}</td>
                <td data-label="Valor"><code>${i.valor}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),s.objetoWindow&&(o+=`
      <div class="window-object-section">
        <pre class="code-snippet large"><code>${e(s.objetoWindow.codigo)}</code></pre>
        <div class="info-box puntos-clave">
          <div class="info-box-header">
            <i class="fa-solid fa-key"></i>
            <span>Puntos Clave</span>
          </div>
          <ul class="check-list">
            ${s.objetoWindow.puntosClave.map(i=>`<li><i class="fa-solid fa-check"></i> ${i}</li>`).join("")}
          </ul>
        </div>
      </div>
    `),o}function h(s){const o=s.operadores;return o[0].simbolo&&!o[0].variantes&&!o[0].tablaVerdad?`
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
            ${o.map(i=>`
              <tr class="${i.destacado?"highlight-row":""}">
                <td data-label="Operador"><code class="operator-symbol">${e(i.simbolo)}</code></td>
                <td data-label="Nombre">
                  ${i.nombre}
                  ${i.descripcion?`<small>${i.descripcion}</small>`:""}
                </td>
                <td data-label="Ejemplo"><code>${e(i.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:o[0].variantes?`
      <div class="unary-operators">
        ${o.map(i=>`
          <div class="unary-card">
            <div class="unary-symbol">
              <code>${i.simbolo}</code>
              <span>${i.nombre}</span>
            </div>
            <div class="variants">
              ${i.variantes.map(a=>`
                <div class="variant">
                  <code>${a.forma}</code>
                  <p>${a.descripcion}</p>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      ${s.ejemplo?`<pre class="code-snippet"><code>${e(s.ejemplo)}</code></pre>`:""}
    `:o[0].tablaVerdad||o[0].regla?`
      <div class="logic-operators">
        ${o.map(i=>`
          <div class="logic-card">
            <div class="logic-header">
              <code class="logic-symbol">${i.simbolo}</code>
              <span>${i.nombre}</span>
            </div>
            <p class="logic-rule">${i.regla}</p>
            ${i.tablaVerdad?`
              <table class="truth-table">
                <thead>
                  <tr><th>A</th><th>B</th><th>Resultado</th></tr>
                </thead>
                <tbody>
                  ${i.tablaVerdad.map(a=>`
                    <tr>
                      <td><code class="${a.a}">${a.a}</code></td>
                      <td><code class="${a.b}">${a.b}</code></td>
                      <td><code class="${a.resultado}">${a.resultado}</code></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            `:""}
            ${i.comportamientoJS?`
              <div class="js-behavior">
                <i class="fa-brands fa-js"></i> ${i.comportamientoJS}
              </div>
            `:""}
            ${i.ejemplos?`
              <div class="logic-examples">
                ${i.ejemplos.map(a=>`<code>${e(a)}</code>`).join("")}
              </div>
            `:""}
          </div>
        `).join("")}
      </div>
    `:""}function e(s){const o=document.createElement("div");return o.textContent=s,o.innerHTML}t();r();const c=document.querySelector("main"),$=parseInt(c?.dataset.modulo||"1",10),f=parseInt(c?.dataset.clase||"1",10);p($,f);
