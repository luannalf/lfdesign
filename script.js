// Configuração das imagens por produto
    const productImages = {
      tlf1: [
        'img/tetos-tlf1.png',
        'img/tetos-tlf1-angle2.png',
        'img/tetos-tlf1-angle3.png',
        'img/tetos-tlf1-angle4.png'
      ],
      tlf2: [
        'img/tetos-tlf2.png',
        'img/tetos-tlf2-angle2.png',
        'img/tetos-tlf2-angle3.png',
        'img/tetos-tlf2-angle4.png'
      ],
      tlf3: [
        'img/tetos-tlf3.png',
        'img/tetos-tlf3-angle2.png',
        'img/tetos-tlf3-angle3.png',
        'img/tetos-tlf3-angle4.png'
      ],
      tlf4: [
        'img/tetos-tlf4.png',
        'img/tetos-tlf4-angle2.png',
        'img/tetos-tlf4-angle3.png',
        'img/tetos-tlf4-angle4.png'
      ],
      plf1: [
        'img/pisos-plf1.png',
        'img/pisos-plf1-angle2.png'
      ],
      plf2: [
        'img/pisos-plf2.png',
        'img/pisos-plf2-angle2.png'
      ],
      plf3: [
        'img/pisos-plf3.png',
        'img/pisos-plf3-angle2.png'
      ],
      plf4: [
        'img/pisos-plf4.png',
        'img/pisos-plf4-angle2.png'
      ],
      plf5: [
        'img/pisos-plf5.png',
        'img/pisos-plf5-angle2.png'
      ],
      plf6: [
        'img/pisos-plf6.png',
        'img/pisos-plf6-angle2.png'
      ],
      clf1: [
        'img/corrimaos-clf1.png',
        'img/corrimaos-clf1-angle2.png',
      ],
      clf2: [
        'img/corrimaos-clf2.png',
        'img/corrimaos-clf2-angle2.png'
      ],
      clf3: [
        'img/corrimaos-clf3.png',
        'img/corrimaos-clf3-angle2.png'
      ]
    };

    // Modal elements
    const modal = document.getElementById('productModal');
    const modalImage = modal.querySelector('.modal-image');
    const modalIndicators = modal.querySelector('.modal-indicators');
    const prevButton = modal.querySelector('.nav-button.prev');
    const nextButton = modal.querySelector('.nav-button.next');
    const closeButton = modal.querySelector('.close-modal');
    let currentProduct = null;
    let currentImageIndex = 0;

    // Função para atualizar a imagem do modal
    function updateModalImage() {
      const images = productImages[currentProduct];
      modalImage.style.opacity = 0;
      setTimeout(() => {
        modalImage.src = images[currentImageIndex];
        modalImage.style.opacity = 1;
      }, 150);

      // Atualizar indicadores
      const indicators = modalIndicators.querySelectorAll('span');
      indicators.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentImageIndex);
      });
    }

    // Inicializar visualização de produtos
    document.querySelectorAll('.product-card').forEach(card => {
      const product = card.dataset.product;
      
      // Pré-carregar imagens
      if (productImages[product]) {
        productImages[product].forEach(src => {
          const img = new Image();
          img.src = src;
        });
      }

      // Abrir modal ao clicar no card
      card.addEventListener('click', () => {
        currentProduct = product;
        currentImageIndex = 0;
        modal.classList.add('active');
        
        // Criar indicadores
        modalIndicators.innerHTML = '';
        productImages[product].forEach((_, i) => {
          const indicator = document.createElement('span');
          indicator.addEventListener('click', () => {
            currentImageIndex = i;
            updateModalImage();
          });
          modalIndicators.appendChild(indicator);
        });
        
        updateModalImage();
      });
    });

    // Navegação do modal
    prevButton.addEventListener('click', () => {
      const images = productImages[currentProduct];
      currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
      updateModalImage();
    });

    nextButton.addEventListener('click', () => {
      const images = productImages[currentProduct];
      currentImageIndex = (currentImageIndex + 1) % images.length;
      updateModalImage();
    });

    // Fechar modal
    closeButton.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    // Fechar modal com tecla ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        modal.classList.remove('active');
      }
    });

    // Fechar modal clicando fora
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });

    const burgerMenu = document.querySelector('.burger-menu');
    const nav = document.querySelector('nav');

    burgerMenu.addEventListener('click', () => {
      burgerMenu.classList.toggle('active');
      nav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    document.querySelectorAll('nav a').forEach(link => {
      link.addEventListener('click', () => {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !burgerMenu.contains(e.target)) {
        burgerMenu.classList.remove('active');
        nav.classList.remove('active');
      }
    });


const heroBg = document.querySelector('.hero-bg');
const hero   = heroBg.closest('.hero');
const maxScale = 1.2;        // zoom até 120%

let ticking = false;
window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      const scrollY    = window.scrollY;
      const heroH      = hero.offsetHeight;
      const pct        = Math.min(scrollY / heroH, 1);
      const scaleValue = 1 + pct * (maxScale - 1);
      heroBg.style.transform = `scale(${scaleValue})`;
      ticking = false;
    });
    ticking = true;
  }
});
