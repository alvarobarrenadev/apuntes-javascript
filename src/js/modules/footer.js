/**
 * Inicializa el footer dinámico (actualiza el año)
 */
export function initFooter() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Detectar cuando el footer es visible para ocultar elementos flotantes
  const footer = document.querySelector('footer');
  if (footer) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          document.body.classList.add('footer-visible');
        } else {
          document.body.classList.remove('footer-visible');
        }
      });
    }, { threshold: 0.1 }); // Se activa cuando se ve un 10% del footer

    observer.observe(footer);
  }
}
