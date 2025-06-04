
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.menu-nav');

  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });



  document.querySelectorAll('.carta').forEach(carta => {
    carta.addEventListener('click', () => {
      carta.classList.toggle('is-flipped');
    });
  });


    let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function mostrarSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) slide.classList.add('active');
    });
  }

  function moverCarrusel(dir) {
    slideIndex = (slideIndex + dir + slides.length) % slides.length;
    mostrarSlide(slideIndex);
  }

  // Auto play (opcional)
  setInterval(() => moverCarrusel(1), 5000);