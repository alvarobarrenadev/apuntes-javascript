/**
 * Inicializa el footer dinámico (actualiza el año)
 */
export function initFooter() {
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}
