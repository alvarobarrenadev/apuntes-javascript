import{i as d,a as r}from"./footer-BfRR1JS6.js";const o="/apuntes-javascript/",l=[{title:"Conceptos Básicos",desc:"Fundamentos, variables, tipos de datos y operadores esenciales.",icon:"fa-bolt",link:`${o}src/pages/modulo-1/`},{title:"Funciones",desc:"Control de flujo, scope, closures y funciones flecha.",icon:"fa-code",link:`${o}src/pages/modulo-2/`},{title:"Arrays y Objetos",desc:"Estructuras de datos, métodos de iteración y algoritmos.",icon:"fa-layer-group",link:`${o}src/pages/modulo-3/`},{title:"POO y Prototipos",desc:"Modelo de objetos, herencia prototípica y clases ES6.",icon:"fa-cube",link:`${o}src/pages/modulo-4/`},{title:"Módulos ES6",desc:"Organización de código con Import/Export y bundlers.",icon:"fa-box-open",link:`${o}src/pages/modulo-5/`},{title:"El DOM",desc:"Manipulación dinámica del HTML y CSS desde JavaScript.",icon:"fa-sitemap",link:`${o}src/pages/modulo-6/`},{title:"Eventos",desc:"Gestión de interacción, listeners y propagación.",icon:"fa-computer-mouse",link:`${o}src/pages/modulo-7/`},{title:"Storage",desc:"Persistencia de datos: LocalStorage, Session y Cookies.",icon:"fa-database",link:`${o}src/pages/modulo-8/`},{title:"Asincronía",desc:"Event Loop, Callbacks, Promesas y Async/Await.",icon:"fa-stopwatch"},{title:"Fetch API",desc:"Consumo de APIs REST, métodos HTTP y manejo de errores.",icon:"fa-globe"}];function p(s,c="modulesGrid"){const e=document.getElementById(c);if(!e){console.error(`No se encontró el elemento con id "${c}"`);return}s.forEach((t,i)=>{if(i===0){const a=document.createElement("h2");a.className="section-divider",a.textContent="JavaScript Inicial",e.appendChild(a)}if(i===5){const a=document.createElement("h2");a.className="section-divider",a.textContent="JavaScript Avanzado",e.appendChild(a)}const n=u(t,i);e.appendChild(n)})}function u(s,c){const e=document.createElement("div");return e.className="module-card",s.link&&(e.onclick=()=>window.location.href=s.link,e.style.cursor="pointer"),e.innerHTML=`
    <div class="card-header">
      <div class="card-icon">
        <i class="fa-solid ${s.icon}"></i>
      </div>
      <span class="card-badge">MOD ${c+1}</span>
    </div>
    <div>
      <h3 class="card-title">${s.title}</h3>
      <p class="card-desc">${s.desc}</p>
    </div>
    <div class="card-arrow">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  `,e}d();r();p(l);
