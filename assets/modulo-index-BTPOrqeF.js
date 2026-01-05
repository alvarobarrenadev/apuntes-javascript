import{i as t,a}from"./footer-BfRR1JS6.js";import{g as o}from"./index-29JaQ9e6.js";t();a();const r=document.querySelector("main"),c=parseInt(r?.dataset.modulo||"1",10);d(c);function d(s){const i=document.getElementById("classesGrid");if(!i)return;const n=o(s);if(n.length===0){i.innerHTML="<p>No hay clases disponibles</p>";return}i.innerHTML=n.map(e=>`
    <a href="clase-${e.id}.html" class="class-nav-card">
      <div class="class-nav-number">${e.id}</div>
      <div class="class-nav-content">
        <h3>${e.titulo}</h3>
        <p>${l(e)}</p>
      </div>
      <div class="class-nav-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </a>
  `).join("")}function l(s){return s.descripcion?s.descripcion:s.temas.slice(0,4).map(n=>n.titulo).join(", ")+(s.temas.length>4?"...":"")}
