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

// Menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
  document.querySelector('.header-container').appendChild(menuToggle);
  
  const nav = document.querySelector('nav ul');
  
  menuToggle.addEventListener('click', function() {
    nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
  });
  
  function adjustMenu() {
    if (window.innerWidth > 768) {
      nav.style.display = 'flex';
    } else {
      nav.style.display = 'none';
    }
  }
  
  window.addEventListener('resize', adjustMenu);
  adjustMenu();
  
  // Scroll suave
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
        
        if (window.innerWidth <= 768) {
          nav.style.display = 'none';
        }
      }
    });
  });
  
  // Ativar menu com base na URL
  const currentPage = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(link => {
    const linkPage = link.getAttribute('href').split('/').pop();
    if (linkPage === currentPage) {
      link.parentElement.classList.add('active');
    }
  });
  
  // Chat básico
  const chatMessages = document.getElementById('chat-messages');
  const chatInput = document.getElementById('chat-input');
  const sendMessage = document.getElementById('send-message');
  
  function addMessage(text, isUser = false) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;
    messageDiv.textContent = text;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  sendMessage.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message) {
      addMessage(message, true);
      chatInput.value = '';
      
      // Resposta automática
      setTimeout(() => {
        addMessage('Obrigado por sua mensagem. Um de nossos atendentes responderá em breve.');
      }, 1000);
    }
  });
  
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage.click();
    }
  });
  
  // Lead form
  const leadForm = document.getElementById('lead-form');
  leadForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(this);
    
    // Simular envio
    fetch('https://api.ergoestruturas.com.br/leads', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert('Obrigado! Seu ebook será enviado para o email fornecido.');
        document.getElementById('lead-popup').style.display = 'none';
        localStorage.setItem('popupClosed', 'true');
      } else {
        throw new Error('Erro no envio');
      }
    })
    .catch(error => {
      alert('Ocorreu um erro. Por favor, tente novamente mais tarde.');
    });
  });
});