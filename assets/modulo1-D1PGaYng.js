import{i as t}from"./theme-BTszg19m.js";import{g as i}from"./index-un5PFoUZ.js";t();const o=document.querySelector("main"),r=parseInt(o?.dataset.modulo||"1",10);l(r);function l(s){const a=document.getElementById("classesGrid");if(!a)return;const e=i(s);if(e.length===0){a.innerHTML="<p>No hay clases disponibles</p>";return}a.innerHTML=e.map(n=>`
    <a href="clase-${n.id}.html" class="class-nav-card">
      <div class="class-nav-number">${n.id}</div>
      <div class="class-nav-content">
        <h3>${n.titulo}</h3>
        <p>${c(n)}</p>
      </div>
      <div class="class-nav-arrow">
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </a>
  `).join("")}function c(s){return s.temas.slice(0,3).map(e=>e.titulo).join(", ")+(s.temas.length>3?"...":"")}
