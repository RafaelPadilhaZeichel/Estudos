// Menu mobile (para telas pequenas)
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.header-container').appendChild(menuToggle);
  
  const nav = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
  
  // Ajustar menu na mudança de tamanho da tela
  function adjustMenu() {
    if (window.innerWidth > 768) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  }
  
  window.addEventListener('resize', adjustMenu);
  adjustMenu();
  
  // Scroll suave para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: 'smooth'
        });
        
        // Fechar menu mobile se estiver aberto
        if (window.innerWidth <= 768) {
          nav.style.display = 'none';
        }
      }
    });
  });
  
  // Adicionar classe active com base na URL
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
});