// COPY CODE FUNCTIONALITY
// Añade botón de copiar a todos los bloques de código

import Swal from 'sweetalert2';

/**
 * Inicializa la funcionalidad de copiar código
 * Debe llamarse DESPUÉS de renderizar el contenido
 */
export function initCopyCode() {
  // Seleccionar todos los bloques de código
  const codeBlocks = document.querySelectorAll('.code-snippet');
  
  codeBlocks.forEach(block => {
    // Si ya tiene botón, no añadir otro
    if (block.querySelector('.copy-btn')) return;
    
    // Hacer el contenedor relativo para posicionar el botón
    block.style.position = 'relative';
    
    // Crear botón de copiar
    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-btn';
    copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
    copyBtn.title = 'Copiar código';
    
    // Añadir botón al bloque
    block.appendChild(copyBtn);
    
    // Event listener
    copyBtn.addEventListener('click', async (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      // Obtener el código del elemento <code> dentro del <pre>
      const codeElement = block.querySelector('code');
      const codeText = codeElement ? codeElement.textContent : block.textContent;
      
      try {
        await navigator.clipboard.writeText(codeText);
        
        // Cambiar icono temporalmente
        copyBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
        copyBtn.classList.add('copied');
        
        // Mostrar toast de SweetAlert2
        const Toast = Swal.mixin({
          toast: true,
          position: 'bottom-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          customClass: {
            popup: 'swal-toast-custom'
          },
          didOpen: (toast) => {
            toast.onmouseenter = Swal.stopTimer;
            toast.onmouseleave = Swal.resumeTimer;
          }
        });
        
        Toast.fire({
          icon: 'success',
          title: '¡Código copiado!'
        });
        
        // Restaurar icono después de 2 segundos
        setTimeout(() => {
          copyBtn.innerHTML = '<i class="fa-regular fa-copy"></i>';
          copyBtn.classList.remove('copied');
        }, 2000);
        
      } catch (err) {
        console.error('Error al copiar:', err);
        
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo copiar el código',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  });
}