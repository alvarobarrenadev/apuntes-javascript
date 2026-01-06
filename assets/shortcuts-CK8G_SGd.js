function u(){"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(e=>{console.log("SW registrado correctamente:",e.scope)}).catch(e=>{console.log("SW fallo al registrar:",e),window.location.pathname.includes("/apuntes-javascript/")?navigator.serviceWorker.register("/apuntes-javascript/sw.js"):navigator.serviceWorker.register("./sw.js")})})}function m(){document.addEventListener("keydown",i),c()}function c(){const e=document.createElement("button");e.className="shortcuts-trigger",e.innerHTML='<i class="fa-regular fa-keyboard"></i>',e.title="Atajos de teclado (?)",e.ariaLabel="Ver atajos de teclado",e.addEventListener("click",n),document.body.appendChild(e)}function i(e){if(!(["INPUT","TEXTAREA","SELECT"].includes(document.activeElement.tagName)||document.activeElement.isContentEditable)&&!(e.ctrlKey||e.altKey||e.metaKey))switch(e.key.toLowerCase()){case"h":const t=document.querySelector("a.logo")||document.querySelector('a[href*="index.html"]');if(t)t.click();else{const a=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1";window.location.href=a?"/":"/apuntes-javascript/"}break;case"t":d();break;case"arrowright":o("next");break;case"arrowleft":o("prev");break;case"q":const s=document.getElementById("startQuiz");s&&s.click();break;case"?":n();break}}function n(){let e=document.getElementById("shortcuts-modal");e||(r(),e=document.getElementById("shortcuts-modal")),e.classList.toggle("visible")}function r(){document.body.insertAdjacentHTML("beforeend",`
    <div class="shortcuts-modal-overlay" id="shortcuts-modal">
      <div class="shortcuts-panel">
        <div class="shortcuts-header">
          <h3>Atajos de Teclado</h3>
          <button class="close-shortcuts"><i class="fa-solid fa-times"></i></button>
        </div>
        <div class="shortcuts-grid">
          <div class="shortcut-item">
            <span class="keys"><kbd>→</kbd></span>
            <span class="desc">Siguiente clase</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>←</kbd></span>
            <span class="desc">Clase anterior</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>H</kbd></span>
            <span class="desc">Ir al inicio</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>T</kbd></span>
            <span class="desc">Cambiar tema</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>Q</kbd></span>
            <span class="desc">Abrir Quiz</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>Ctrl</kbd> + <kbd>K</kbd></span>
            <span class="desc">Buscar</span>
          </div>
          <div class="shortcut-item">
            <span class="keys"><kbd>?</kbd></span>
            <span class="desc">Ver esta ayuda</span>
          </div>
        </div>
      </div>
    </div>
  `);const t=document.getElementById("shortcuts-modal");t.querySelector(".close-shortcuts").addEventListener("click",()=>t.classList.remove("visible")),t.addEventListener("click",a=>{a.target===t&&t.classList.remove("visible")})}function o(e){const t=e==="next"?".lesson-nav-next":".lesson-nav-prev",s=document.querySelector(t);s&&s.href&&s.click()}function d(){const e=document.getElementById("themeToggle");e&&(e.click(),l("Tema cambiado"))}function l(e){let t=document.getElementById("shortcut-toast");t||(t=document.createElement("div"),t.id="shortcut-toast",t.style.cssText=`
      position: fixed;
      bottom: 24px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0,0,0,0.8);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 0.85rem;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
      z-index: 9999;
      font-family: var(--font-ui);
    `,document.body.appendChild(t)),t.textContent=e,t.style.opacity="1",setTimeout(()=>{t.style.opacity="0"},1500)}export{m as a,u as i};
