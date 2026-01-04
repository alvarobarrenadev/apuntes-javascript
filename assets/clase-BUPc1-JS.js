import{i as t}from"./theme-BTszg19m.js";import{a as n}from"./index-un5PFoUZ.js";function r(i,a){const s=document.getElementById("lessonContainer");if(!s)return;const o=n(i,a);if(!o){s.innerHTML='<p class="error">Clase no encontrada</p>';return}s.innerHTML=`
    <article class="class-card">
      <div class="class-card-header">
        <div class="class-number">${o.id}</div>
        <div class="class-info">
          <h1>${o.titulo}</h1>
        </div>
      </div>
      
      <div class="class-content">
        ${o.temas.map((l,c)=>p(l,c)).join("")}
      </div>
    </article>
  `}function p(i,a){return`
    <section class="tema-block">
      <div class="tema-header">
        <span class="tema-number">${a+1}</span>
        <h3>${i.titulo}</h3>
      </div>
      
      <p class="tema-intro">${i.contenido}</p>
      
      ${v(i)}
    </section>
  `}function v(i){let a="";return i.puntosClave&&(a+=`
      <div class="info-box puntos-clave">
        <div class="info-box-header">
          <i class="fa-solid fa-key"></i>
          <span>Puntos Clave</span>
        </div>
        <ul class="check-list">
          ${i.puntosClave.map(s=>`<li><i class="fa-solid fa-check"></i> ${s}</li>`).join("")}
        </ul>
      </div>
    `),i.caracteristicas&&(a+=`
      <div class="features-grid">
        ${i.caracteristicas.map(s=>`
          <div class="feature-card">
            <div class="feature-icon"><i class="fa-solid fa-cube"></i></div>
            <h4>${s.nombre}</h4>
            <p>${s.descripcion}</p>
          </div>
        `).join("")}
      </div>
    `),i.metodos&&i.titulo.includes("ejecutar")&&(a+=`
      <div class="methods-list">
        ${i.metodos.map((s,o)=>`
          <div class="method-item">
            <div class="method-number">${o+1}</div>
            <div class="method-content">
              <h4>${s.nombre}</h4>
              <p>${s.descripcion}</p>
              ${s.ejemplo?`<pre class="code-snippet"><code>${e(s.ejemplo)}</code></pre>`:""}
            </div>
          </div>
        `).join("")}
      </div>
    `),i.metodos&&i.titulo.includes("Console")&&(a+=`
      <div class="console-grid">
        ${i.metodos.map(s=>`
          <div class="console-item ${s.color}">
            <code>${s.nombre}</code>
            <span>${s.descripcion}</span>
          </div>
        `).join("")}
      </div>
    `),i.posiciones&&(a+=`
      <div class="positions-list">
        ${i.posiciones.map(s=>`
          <div class="position-item">
            <code class="position-tag">${s.lugar}</code>
            <div class="position-info">
              <p>${s.comportamiento}</p>
              ${s.solucion?`<p class="tip"><i class="fa-solid fa-lightbulb"></i> ${s.solucion}</p>`:""}
            </div>
          </div>
        `).join("")}
      </div>
      ${i.codigoEjemplo?`<pre class="code-snippet"><code>${e(i.codigoEjemplo)}</code></pre>`:""}
    `),i.tipos&&i.titulo.includes("Declaración")&&(a+=`
      <div class="declaration-grid">
        ${i.tipos.map(s=>`
          <div class="declaration-card ${s.color}">
            <div class="declaration-badge">
              <i class="fa-solid ${s.icono}"></i>
              <code>${s.palabra}</code>
            </div>
            <p>${s.descripcion}</p>
            <pre class="code-snippet"><code>${e(s.ejemplo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),i.tipos&&i.titulo.includes("primitivos")&&(a+=`
      <div class="types-grid">
        ${i.tipos.map(s=>`
          <div class="type-card">
            <h4>${s.nombre}</h4>
            <p>${s.descripcion}</p>
            <div class="type-examples">
              ${s.ejemplos.map(o=>`<code>${e(o)}</code>`).join("")}
            </div>
          </div>
        `).join("")}
      </div>
    `),i.ejemplos&&i.titulo.includes("typeof")&&(a+=`
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>Expresión</th>
              <th>Resultado</th>
            </tr>
          </thead>
          <tbody>
            ${i.ejemplos.map(s=>`
              <tr>
                <td data-label="Expresión"><code>${e(s.codigo)}</code></td>
                <td data-label="Resultado"><code class="result">${e(s.resultado)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${i.nota?`<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${i.nota}</div>`:""}
    `),i.reglas&&(i.titulo.includes("Naming")||i.titulo.includes("nombres"))&&(a+=`
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
            ${i.reglas.map(s=>`
              <tr>
                <td data-label="Tipo">${s.tipo}</td>
                <td data-label="Ejemplo"><code>${e(s.ejemplo)}</code></td>
                <td data-label="Estilo"><span class="style-badge">${s.estilo}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `),i.operadores&&(a+=$(i)),i.ejemplos&&i.titulo.includes("Ternario")&&(a+=`
      <div class="syntax-highlight">
        <code>${i.sintaxis}</code>
      </div>
      <div class="examples-list">
        ${i.ejemplos.map(s=>`
          <div class="example-item">
            <h5>${s.descripcion}</h5>
            <pre class="code-snippet"><code>${e(s.codigo)}</code></pre>
          </div>
        `).join("")}
      </div>
    `),i.comparacion&&(a+=`
      <div class="syntax-highlight">
        <code>${i.sintaxis}</code>
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
            ${i.comparacion.map(s=>`
              <tr class="${s.diferente?"highlight-row":""}">
                <td data-label="Expresión"><code>${e(s.expresion)}</code></td>
                <td data-label="?? (Nullish)"><code>${e(s.resultadoNullish)}</code></td>
                <td data-label="|| (OR)"><code>${e(s.resultadoOr)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${i.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${i.nota}</div>`:""}
    `),i.alerta&&(a+=`<div class="alert warning"><i class="fa-solid fa-triangle-exclamation"></i> ${i.alerta}</div>`),i.nota&&!i.ejemplos&&!i.comparacion&&(a+=`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${i.nota}</div>`),i.ejemplo&&typeof i.ejemplo=="string"&&(a+=`<pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>`),i.versiones&&(a+=`
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
            ${i.versiones.map(s=>`
              <tr class="${s.destacado?"highlight-row":""}">
                <td data-label="Año">${s.anio}</td>
                <td data-label="Versión"><strong>${s.version}</strong></td>
                <td data-label="Novedades">${s.novedades}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
      ${i.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${i.nota}</div>`:""}
    `),i.reglas&&i.titulo.includes("Comportamiento especial")&&(a+=`
      <div class="special-operators">
        ${i.reglas.map(s=>`
          <div class="special-operator-card">
            <div class="special-operator-header">
              <code class="special-symbol">${s.operador}</code>
              <span class="special-rule">${s.regla}</span>
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
                  ${s.ejemplos.map(o=>`
                    <tr>
                      <td data-label="Código"><code>${e(o.codigo)}</code></td>
                      <td data-label="Resultado"><code class="result">${e(o.resultado)}</code></td>
                      <td data-label="Explicación">${o.explicacion}</td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            </div>
          </div>
        `).join("")}
      </div>
      ${i.nota?`<div class="alert info"><i class="fa-brands fa-react"></i> ${i.nota}</div>`:""}
    `),i.equivalencia&&(a+=`
      <div class="syntax-highlight">
        <code>${i.sintaxis}</code>
      </div>
      <div class="equivalence-box">
        <i class="fa-solid fa-equals"></i>
        <code>${i.equivalencia}</code>
      </div>
      <div class="examples-grid">
        ${i.ejemplos.map(s=>`
          <div class="example-card">
            <pre class="code-snippet"><code>${e(s.codigo)}</code></pre>
            <p class="example-explanation"><i class="fa-solid fa-arrow-right"></i> ${s.explicacion}</p>
          </div>
        `).join("")}
      </div>
      ${i.nota?`<div class="alert info"><i class="fa-solid fa-circle-info"></i> ${i.nota}</div>`:""}
    `),i.funcionVsMetodo&&(a+=`
      <div class="comparison-section">
        <h4 class="comparison-title"><i class="fa-solid fa-code-compare"></i> ${i.funcionVsMetodo.titulo}</h4>
        <div class="comparison-grid">
          ${i.funcionVsMetodo.diferencias.map(s=>`
            <div class="comparison-card">
              <div class="comparison-header">
                <span class="comparison-type">${s.tipo}</span>
              </div>
              <p>${s.descripcion}</p>
              <pre class="code-snippet"><code>${e(s.ejemplo)}</code></pre>
            </div>
          `).join("")}
        </div>
        ${i.funcionVsMetodo.nota?`<div class="alert info"><i class="fa-solid fa-lightbulb"></i> ${i.funcionVsMetodo.nota}</div>`:""}
      </div>
    `),i.ejemploFuncion&&(a+=`
      <div class="function-example">
        <h4 class="function-example-title"><i class="fa-solid fa-code"></i> ${i.ejemploFuncion.descripcion}</h4>
        <pre class="code-snippet large"><code>${e(i.ejemploFuncion.codigo)}</code></pre>
        <p class="function-explanation"><i class="fa-solid fa-arrow-right"></i> ${i.ejemploFuncion.explicacion}</p>
      </div>
    `),a}function $(i){const a=i.operadores;return a[0].simbolo&&!a[0].variantes&&!a[0].tablaVerdad?`
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
            ${a.map(s=>`
              <tr class="${s.destacado?"highlight-row":""}">
                <td data-label="Operador"><code class="operator-symbol">${e(s.simbolo)}</code></td>
                <td data-label="Nombre">
                  ${s.nombre}
                  ${s.descripcion?`<small>${s.descripcion}</small>`:""}
                </td>
                <td data-label="Ejemplo"><code>${e(s.ejemplo)}</code></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `:a[0].variantes?`
      <div class="unary-operators">
        ${a.map(s=>`
          <div class="unary-card">
            <div class="unary-symbol">
              <code>${s.simbolo}</code>
              <span>${s.nombre}</span>
            </div>
            <div class="variants">
              ${s.variantes.map(o=>`
                <div class="variant">
                  <code>${o.forma}</code>
                  <p>${o.descripcion}</p>
                </div>
              `).join("")}
            </div>
          </div>
        `).join("")}
      </div>
      ${i.ejemplo?`<pre class="code-snippet"><code>${e(i.ejemplo)}</code></pre>`:""}
    `:a[0].tablaVerdad||a[0].regla?`
      <div class="logic-operators">
        ${a.map(s=>`
          <div class="logic-card">
            <div class="logic-header">
              <code class="logic-symbol">${s.simbolo}</code>
              <span>${s.nombre}</span>
            </div>
            <p class="logic-rule">${s.regla}</p>
            ${s.tablaVerdad?`
              <table class="truth-table">
                <thead>
                  <tr><th>A</th><th>B</th><th>Resultado</th></tr>
                </thead>
                <tbody>
                  ${s.tablaVerdad.map(o=>`
                    <tr>
                      <td><code class="${o.a}">${o.a}</code></td>
                      <td><code class="${o.b}">${o.b}</code></td>
                      <td><code class="${o.resultado}">${o.resultado}</code></td>
                    </tr>
                  `).join("")}
                </tbody>
              </table>
            `:""}
            ${s.comportamientoJS?`
              <div class="js-behavior">
                <i class="fa-brands fa-js"></i> ${s.comportamientoJS}
              </div>
            `:""}
            ${s.ejemplos?`
              <div class="logic-examples">
                ${s.ejemplos.map(o=>`<code>${e(o)}</code>`).join("")}
              </div>
            `:""}
          </div>
        `).join("")}
      </div>
    `:""}function e(i){const a=document.createElement("div");return a.textContent=i,a.innerHTML}t();const d=document.querySelector("main"),h=parseInt(d?.dataset.modulo||"1",10),b=parseInt(d?.dataset.clase||"1",10);r(h,b);
