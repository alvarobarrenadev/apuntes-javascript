/**
 * Registra el Service Worker para funcionalidades PWA
 */
export function initPWA() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      // Ajustar ruta del sw.js dependiendo del entorno
      // En producción (si no está en root) podría necesitar ajuste, 
      // pero asumiendo que sw.js está en la raíz pública:
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registrado correctamente:', registration.scope);
        })
        .catch(error => {
          console.log('SW fallo al registrar:', error);
          
          // Fallback para rutas relativas si falla la absoluta (ej: GitHub Pages en subcarpeta)
          if (window.location.pathname.includes('/apuntes-javascript/')) {
             navigator.serviceWorker.register('/apuntes-javascript/sw.js');
          } else {
             navigator.serviceWorker.register('./sw.js');
          }
        });
    });
  }
}
