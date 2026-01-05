import{i as d,a as r}from"./footer-BfRR1JS6.js";const c="/apuntes-javascript/",l=[{title:"Conceptos Básicos",desc:"Fundamentos, variables, tipos de datos y operadores esenciales.",icon:"fa-bolt",count:3,link:`${c}src/pages/modulo-1/`},{title:"Funciones",desc:"Control de flujo, scope, closures y funciones flecha.",icon:"fa-code",count:4,link:`${c}src/pages/modulo-2/`},{title:"Arrays y Objetos",desc:"Estructuras de datos, métodos de iteración y algoritmos.",icon:"fa-layer-group",count:7,link:`${c}src/pages/modulo-3/`},{title:"POO y Prototipos",desc:"Modelo de objetos, herencia prototípica y clases ES6.",icon:"fa-cube",count:4,link:`${c}src/pages/modulo-4/`},{title:"Módulos ES6",desc:"Organización de código con Import/Export y bundlers.",icon:"fa-box-open",count:1,link:`${c}src/pages/modulo-5/`},{title:"El DOM",desc:"Manipulación dinámica del HTML y CSS desde JavaScript.",icon:"fa-sitemap",count:6,link:`${c}src/pages/modulo-6/`},{title:"Eventos",desc:"Gestión de interacción, listeners y propagación.",icon:"fa-computer-mouse",count:4},{title:"Storage",desc:"Persistencia de datos: LocalStorage, Session y Cookies.",icon:"fa-database",count:3},{title:"Asincronía",desc:"Event Loop, Callbacks, Promesas y Async/Await.",icon:"fa-stopwatch",count:2},{title:"Fetch API",desc:"Consumo de APIs REST, métodos HTTP y manejo de errores.",icon:"fa-globe",count:4}];function u(o,s="modulesGrid"){const e=document.getElementById(s);if(!e){console.error(`No se encontró el elemento con id "${s}"`);return}o.forEach((i,a)=>{if(a===0){const t=document.createElement("h2");t.className="section-divider",t.textContent="JavaScript Inicial",e.appendChild(t)}if(a===5){const t=document.createElement("h2");t.className="section-divider",t.textContent="JavaScript Avanzado",e.appendChild(t)}const n=p(i,a);e.appendChild(n)})}function p(o,s){const e=document.createElement("div");return e.className="module-card",o.link&&(e.onclick=()=>window.location.href=o.link,e.style.cursor="pointer"),e.innerHTML=`
    <div class="card-header">
      <div class="card-icon">
        <i class="fa-solid ${o.icon}"></i>
      </div>
      <span class="card-badge">MOD ${s+1}</span>
    </div>
    <div>
      <h3 class="card-title">${o.title}</h3>
      <p class="card-desc">${o.desc}</p>
    </div>
    <div class="card-arrow">
      <i class="fa-solid fa-arrow-right"></i>
    </div>
  `,e}d();r();u(l);
