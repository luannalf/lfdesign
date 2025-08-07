// Configuração das descrições dos produtos
    const productDescriptions = {
      tlf1: {
        title: 'TLF1',
        description: 'Design moderno e elegante com sistema de iluminação uniforme que proporciona ótima distribuição de luz no ambiente. Inclui ventilação integrada.'
      },
      tlf2: {
        title: 'TLF2',
        description: 'Módulo central em aço inox, com quatro luminárias LED embutidas e grade de ventilação central. Compatível apenas com cabines Neolift.'
      },
      tlf3: {
        title: 'TLF3',
        description: 'Design sofisticado com curvas suaves que se integram perfeitamente ao ambiente. Sistema de iluminação LED de alta eficiência.'
      },
      tlf4: {
        title: 'TLF4',
        description: 'Modelo contemporâneo com acabamento em aço inox e sistema de ventilação integrado. Iluminação LED com excelente economia de energia.'
      },
      plf1: {
        title: 'PLF1 - Piso Oitavado Perla Santana',
        description: 'Piso em granito Perla Santana com cantos oitavados e perfis em aço inox. Design exclusivo que combina a elegância do granito com a modernidade do aço inox.'
      },
      plf2: {
        title: 'PLF2 - Piso São Gabriel com Detalhe Losangular',
        description: 'Piso com cantos arredondados em granito São Gabriel e detalhe losangular Perla Santana. Combinação sofisticada de materiais que cria um padrão único e elegante.'
      },
      plf3: {
        title: 'PLF3 - Piso Branco Dallas Emoldurado',
        description: 'Piso com cantos retos em granito Branco Dallas e moldura em granito São Gabriel. Design clean e contemporâneo que valoriza o contraste entre os materiais. Alta resistência e fácil manutenção.'
      },
      plf4: {
        title: 'PLF4 - Piso São Gabriel com Moldura Clara',
        description: 'Piso com cantos retos em granito São Gabriel e moldura em granito Branco Ceará. Composição elegante que combina a sobriedade do granito escuro com o requinte do acabamento claro na moldura.'
      },
      plf5: {
        title: 'PLF5 - Piso Perla Santana Uniforme',
        description: 'Piso uniforme com cantos retos em granito Perla Santana. Design minimalista que valoriza a beleza natural do granito.'
      },
      plf6: {
        title: 'PLF6 - Piso Branco Dallas Uniforme',
        description: 'Piso uniforme com cantos retos em granito Branco Dallas. Elegância atemporal com acabamento premium que proporciona durabilidade excepcional e facilidade de manutenção.'
      },
      clf1: {
        title: 'CLF1 - Corrimão Tubular',
        description: 'Corrimão tubular em aço inox. Design clássico e ergonômico que oferece excelente empunhadura e segurança. Acabamento polido que garante resistência à corrosão e facilidade de limpeza.'
      },
      clf2: {
        title: 'CLF2 - Corrimão Retangular',
        description: 'Corrimão retangular em aço inox. Design contemporâneo com linhas retas que agregam modernidade ao ambiente.'
      },
      clf3: {
        title: 'CLF3 - Corrimão com LED',
        description: 'Corrimão retangular em aço inox, com detalhe customizado em LED. Combinação única de funcionalidade e design que adiciona um elemento de luz ao ambiente. Sistema LED integrado de baixo consumo.'
      }
    };

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
    const modalTitle = modal.querySelector('.modal-title');
    const modalText = modal.querySelector('.modal-text');
    const prevButton = modal.querySelector('.nav-button.prev');
    const nextButton = modal.querySelector('.nav-button.next');
    const closeButton = modal.querySelector('.close-modal');
    let currentProduct = null;
    let currentImageIndex = 0;

    // Função para atualizar o modal
    function updateModalImage() {
      const images = productImages[currentProduct];
      const description = productDescriptions[currentProduct];
      
      modalImage.style.opacity = 0;
      setTimeout(() => {
        modalImage.src = images[currentImageIndex];
        modalImage.style.opacity = 1;
      }, 150);

      // Atualizar título e descrição
      modalTitle.textContent = description.title;
      modalText.textContent = description.description;

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
