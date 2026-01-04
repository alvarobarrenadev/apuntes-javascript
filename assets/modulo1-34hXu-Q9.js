import{i,a as n}from"./footer-BX3CdCEA.js";import{g as o}from"./index-un5PFoUZ.js";i();n();const r=document.querySelector("main"),l=parseInt(r?.dataset.modulo||"1",10);c(l);function c(s){const a=document.getElementById("classesGrid");if(!a)return;const e=o(s);if(e.length===0){a.innerHTML="<p>No hay clases disponibles</p>";return}a.innerHTML=e.map(t=>`
    <a href="clase-${t.id}.html" class="class-nav-card">
      <div class="class-nav-number">${t.id}</div>
      <div class="class-nav-content">
        <h3>${t.titulo}</h3>
        <p>${d(t)}</p>
      </div>
      <div class="class-nav-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </a>
  `).join("")}function d(s){return s.temas.slice(0,3).map(e=>e.titulo).join(", ")+(s.temas.length>3?"...":"")}
