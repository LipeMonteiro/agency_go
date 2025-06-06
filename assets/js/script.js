// ========== HEADER STICKY SFFECT ==========
window.addEventListener('scroll', () => {
  const header = document.querySelector('#header')
  header.classList.toggle('sticky', window.scrollY > 0)
})
// ========== ACTIVE LINK ON SCROLL ANIMATION ==========

const headerLinks = document.querySelectorAll('.header__menu-link')
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {

  headerLinks.forEach(link => {link.classList.remove('active')})

  sections.forEach(element => {
    let top = window.scrollY
    let offset = element.offsetTop
    let height = element.offsetHeight
    const id = element.getAttribute('id')

    if (top >= offset && top < offset + height) {
      document.querySelector(`header div nav a[href='#${id}']`).classList.add('active')
    }
    
  });
})

headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerLinks.forEach(link => {link.classList.remove('active')})
    link.classList.add('active')
  })
})
// ========== STATICS ANIMATION ==============
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
