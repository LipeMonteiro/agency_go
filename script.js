// ========== HEADER STICKY SFFECT ==========
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header')
    header.classList.toggle('sticky', window.scrollY > 0)
})

// Função que anima a contagem
function animarContador(elemento, duracao = 2000) {
  const valorFinal = +elemento.getAttribute('data-valor');
  const incremento = Math.ceil(valorFinal / (duracao / 32)); // 60fps ~16ms por frame
  let atual = 0;

  const atualizar = () => {
    atual += incremento;
    if (atual < valorFinal) {
      elemento.textContent = atual;
      requestAnimationFrame(atualizar);
    } else {
      elemento.textContent = valorFinal;
    }
  };

  atualizar();
}

// Aplica para todos os contadores quando a página carregar
window.addEventListener('load', () => {
  const contadores = document.querySelectorAll('.contador');
  contadores.forEach(contador => animarContador(contador));
});
