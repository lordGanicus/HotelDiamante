/**************************************slider de portada */
const swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 3000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // Añade estas opciones clave:
  slidesPerView: 1, // Muestra solo 1 slide
  spaceBetween: 0, // Elimina espacios entre slides
  centeredSlides: true, // Centra el slide activo (opcional)
  setWrapperSize: false, // Evita que Swiper fuerce el ancho
});
/*****************menu ****************/
const openMenus = document.querySelectorAll(".openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenus.forEach((button) => {
  button.addEventListener("click", () => {
    menuOverlay.classList.add("active");
  });
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
});
// Cerrar menú al hacer clic en un enlace dentro del overlay
const menuLinks = menuOverlay.querySelectorAll("a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });
});
const navbar = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("show");
    document.querySelector(".btn-reservar-top").style.display = "none";
  } else {
    navbar.classList.remove("show");
    document.querySelector(".btn-reservar-top").style.display = "block";
  }
});
/********************slider de informacion**********************/
const swiper1 = new Swiper(".mySwiper1", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  autoplay: { delay: 3500 },
});
/*******************************Habitaciones ***** */
document.addEventListener("DOMContentLoaded", () => {
  const habitacionesSwiper = new Swiper(".habitaciones-swiper", {
    loop: true,
    initialSlide: 1, // Comenzamos en el segundo slide (índice 1)
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    speed: 800,
    resistanceRatio: 0.5,
    touchAngle: 45,
    slideToClickedSlide: true,
    watchSlidesProgress: true,

    // Configuración de navegación
    navigation: {
      nextEl: ".habitacion-next",
      prevEl: ".habitacion-prev",
    },

    // Configuración de breakpoints
    breakpoints: {
      320: {
        slidesPerView: 0.9,
        spaceBetween: 10,
        centeredSlides: true,
      },
      480: {
        slidesPerView: 0.95,
        spaceBetween: 15,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 1.2,
        spaceBetween: 20,
        centeredSlides: true,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 25,
        centeredSlides: true,
      },
      1200: {
        slidesPerView: 1.8,
        spaceBetween: 30,
        centeredSlides: true,
      },
    },

    // Eventos personalizados
    on: {
      init: function () {
        // Deshabilitar el botón "siguiente" si estamos en el último slide
        if (this.isEnd) {
          document.querySelector(".habitacion-next").style.opacity = "0.5";
          document.querySelector(".habitacion-next").style.pointerEvents =
            "none";
        }
      },
      reachEnd: function () {
        // Deshabilitar el botón "siguiente" cuando llegamos al final
        document.querySelector(".habitacion-next").style.opacity = "0.5";
        document.querySelector(".habitacion-next").style.pointerEvents = "none";
      },
      fromEdge: function () {
        // Habilitar el botón "siguiente" cuando no estamos al final
        document.querySelector(".habitacion-next").style.opacity = "1";
        document.querySelector(".habitacion-next").style.pointerEvents = "auto";
      },
      slideChange: function () {
        // Habilitar/deshabilitar botones según posición
        if (this.isBeginning) {
          document.querySelector(".habitacion-prev").style.opacity = "0.5";
          document.querySelector(".habitacion-prev").style.pointerEvents =
            "none";
        } else {
          document.querySelector(".habitacion-prev").style.opacity = "1";
          document.querySelector(".habitacion-prev").style.pointerEvents =
            "auto";
        }

        if (this.isEnd) {
          document.querySelector(".habitacion-next").style.opacity = "0.5";
          document.querySelector(".habitacion-next").style.pointerEvents =
            "none";
        } else {
          document.querySelector(".habitacion-next").style.opacity = "1";
          document.querySelector(".habitacion-next").style.pointerEvents =
            "auto";
        }
      },
    },
  });
});
/*******************************paquetes************************* */
document.addEventListener("DOMContentLoaded", function () {
  // Elementos específicos de esta sección
  const container = document.querySelector(".paquetes-especiales-container");
  const slider = document.getElementById("psSlider");
  const prevBtn = document.getElementById("psPrevBtn");
  const nextBtn = document.getElementById("psNextBtn");
  const bgOverlay = document.getElementById("psBackgroundOverlay");
  const floatingHearts = document.getElementById("psFloatingHearts");

  // Configuración del slider
  let currentSlide = 0;
  const slides = document.querySelectorAll(".ps-package-card");
  const totalSlides = slides.length;
  const backgroundImages = [
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752154193/e61e1a27-df09-4a8a-9128-2442bbec2e25.png",
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752179988/Miel1_sjyclt.jpg",
  ];

  // Función para actualizar el slider
  function updateSlider() {
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    bgOverlay.style.backgroundImage = `url(${backgroundImages[currentSlide]})`;
  }

  // Eventos para los botones
  prevBtn.addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
  });

  nextBtn.addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  });

  // Crear corazones flotantes
  function createHearts() {
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement("div");
      heart.className = "ps-heart";
      heart.style.left = `${Math.random() * 100}%`;
      heart.style.animationDuration = `${12 + Math.random() * 8}s`;
      heart.style.animationDelay = `${Math.random() * 5}s`;
      heart.style.opacity = `${0.2 + Math.random() * 0.3}`;
      heart.style.width = `${10 + Math.random() * 20}px`;
      heart.style.height = heart.style.width;
      floatingHearts.appendChild(heart);
    }
  }

  // Inicialización
  updateSlider();
  createHearts();

  // Cambio automático cada 8 segundos
  setInterval(function () {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
  }, 8000);

  // Ajustar tamaño para encapsulación
  container.style.width = "100%";
  container.style.maxWidth = "1920px";
  container.style.margin = "0 auto";
});
/*****************desayunos ****************/
// Namespace para evitar conflictos
const dyGallery = {
  init: function () {
    this.container = document.getElementById("dyGalleryContainer");
    this.openBtn = document.getElementById("dyOpenBtn");
    this.closeBtn = document.getElementById("dyCloseBtn");
    this.prevBtn = document.getElementById("dyPrevBtn");
    this.nextBtn = document.getElementById("dyNextBtn");
    this.indicators = document.querySelectorAll(".dy-indicator");
    this.slides = document.querySelectorAll(".dy-slide");

    this.currentSlide = 0;
    this.totalSlides = this.slides.length;

    this.setupEvents();
    this.showSlide(this.currentSlide);
  },

  setupEvents: function () {
    // Abrir galería
    this.openBtn.addEventListener("click", () => {
      this.container.classList.add("dy-active");
      document.body.style.overflow = "hidden";
      this.showSlide(this.currentSlide);
    });

    // Cerrar galería
    this.closeBtn.addEventListener("click", () => {
      this.container.classList.remove("dy-active");
      document.body.style.overflow = "auto";
    });

    // Navegación
    this.prevBtn.addEventListener("click", () => {
      this.currentSlide =
        (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
      this.showSlide(this.currentSlide);
    });

    this.nextBtn.addEventListener("click", () => {
      this.currentSlide = (this.currentSlide + 1) % this.totalSlides;
      this.showSlide(this.currentSlide);
    });

    // Indicadores
    this.indicators.forEach((indicator) => {
      indicator.addEventListener("click", () => {
        this.currentSlide = parseInt(indicator.getAttribute("data-slide"));
        this.showSlide(this.currentSlide);
      });
    });

    // Efecto 3D con movimiento del mouse
    const slideContents = document.querySelectorAll(".dy-slide-content");

    slideContents.forEach((content) => {
      content.addEventListener("mousemove", (e) => {
        const rect = content.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateY = (x - centerX) / 20;
        const rotateX = (centerY - y) / 20;

        content.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(30px)`;

        const mainImage = content.querySelector(".dy-main-image");
        mainImage.style.transform = `translate(-50%, -50%) translateZ(40px)`;
        mainImage.style.boxShadow = `${-rotateY * 5}px ${
          rotateX * 5
        }px 50px rgba(0,0,0,0.5)`;
      });

      content.addEventListener("mouseleave", () => {
        content.style.transform = "rotateY(0) rotateX(0) translateZ(0)";

        const mainImage = content.querySelector(".dy-main-image");
        mainImage.style.transform = "translate(-50%, -50%)";
        mainImage.style.boxShadow = "0 30px 50px rgba(0, 0, 0, 0.4)";
      });
    });
  },

  showSlide: function (index) {
    // Ocultar todas las slides
    this.slides.forEach((slide) => {
      slide.style.display = "none";
      slide.style.opacity = "0";
      slide.style.transform = "translateZ(-300px) rotateY(30deg)";
    });

    // Mostrar slide actual con animación
    this.slides[index].style.display = "block";
    setTimeout(() => {
      this.slides[index].style.opacity = "1";
      this.slides[index].style.transform = "translateZ(0) rotateY(0)";
    }, 10);

    // Actualizar indicadores
    this.indicators.forEach((indicator, i) => {
      if (i === index) {
        indicator.classList.add("dy-active");
      } else {
        indicator.classList.remove("dy-active");
      }
    });
  },
};

// Inicializar cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", function () {
  dyGallery.init();
});
/************************turismo******************* */
document.addEventListener("DOMContentLoaded", function () {
  const coin = document.querySelector(".trm-coin");
  const frontImg = document.querySelector(".trm-coin-front img");
  const backImg = document.querySelector(".trm-coin-back img");

  const images = [
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752239491/3e221f4a-fd00-4b5b-a847-725e236270b8.png",
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752239508/ee574d0a-d0c9-4d22-923e-b52d20a59060.png",
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752239527/276d065c-d764-46e7-84ac-5d9963078f83.png",
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752239541/eeb577b7-8525-4cf1-906d-065e1201a39d.png",
    "https://res.cloudinary.com/ds9subkxg/image/upload/v1752239562/d9cdedb1-081d-4d9b-8621-1a7464ffca41.png",
  ];

  let currentIndex = 0;

  // Inicializar con la primera imagen en el frente y la segunda en el dorso
  frontImg.src = images[0];
  backImg.src = images[1];
  currentIndex = 1;

  function rotateCoin() {
    // Agregar clase para girar (180 grados)
    coin.classList.add("rotated");

    // Al terminar la animación
    coin.addEventListener(
      "transitionend",
      function handler(e) {
        // Solo nos interesa el evento de transformación
        if (e.propertyName !== "transform") return;

        // Remover el event listener para evitar múltiples llamadas
        coin.removeEventListener("transitionend", handler);

        // Quitar transición momentáneamente para reiniciar sin animación
        coin.style.transition = "none";

        // Cambiar las imágenes:
        // 1. La imagen del frente se convierte en la que estaba en el dorso
        frontImg.src = backImg.src;

        // 2. Avanzar al siguiente índice
        currentIndex = (currentIndex + 1) % images.length;

        // 3. Cargar la siguiente imagen en el dorso
        backImg.src = images[currentIndex];

        // 4. Remover la clase de rotación para volver a la posición inicial
        coin.classList.remove("rotated");

        // Forzar un reflow para que el navegador registre el cambio
        void coin.offsetWidth;

        // Restaurar la transición
        coin.style.transition = "transform 3s ease-in-out";

        // Iniciar la siguiente rotación después de un pequeño retraso
        setTimeout(rotateCoin, 100);
      },
      { once: false }
    );
  }

  // Iniciar la primera rotación después de un breve retraso
  setTimeout(rotateCoin, 1000);
});
/**************************separador de secciones***********************/
document.addEventListener("DOMContentLoaded", function () {
  // Configuración
  const sections = document.querySelectorAll("section");
  const sectionCount = sections.length;
  let currentActiveSection = 0;
  let isScrolling = false;
  let scrollTimeout;
  let diamondPositions = [];

  // Elementos del indicador
  const diamondsContainer = document.getElementById("diamondsContainer");
  const progressLine = document.getElementById("progressLine");
  const intersectionEffect = document.getElementById("intersectionEffect");
  const particlesContainer = document.getElementById("particles");

  // Crear diamantes y calcular sus posiciones
  sections.forEach((section, index) => {
    const diamond = document.createElement("div");
    diamond.className = "diamond";
    diamond.dataset.section = index;

    diamond.addEventListener("click", (e) => {
      e.preventDefault();
      scrollToSection(index);
    });

    diamondsContainer.appendChild(diamond);
  });

  // Calcular posiciones de los diamantes
  setTimeout(() => {
    const diamonds = document.querySelectorAll(".diamond");
    const containerRect = diamondsContainer.getBoundingClientRect();

    diamonds.forEach((diamond) => {
      const rect = diamond.getBoundingClientRect();
      const position =
        (rect.top + rect.height / 2 - containerRect.top) / containerRect.height;
      diamondPositions.push(position);
    });

    // Inicializar
    updateProgress(0);
    setActiveSection(0);
  }, 100);

  // Evento de scroll mejorado
  window.addEventListener("scroll", function () {
    if (!isScrolling) {
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(handleScroll, 50);
    }
  });

  // Manejar scroll
  function handleScroll() {
    const scrollPosition = window.scrollY + window.innerHeight / 3;

    // Determinar sección actual
    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        if (currentActiveSection !== index) {
          currentActiveSection = index;
          setActiveSection(index);
        }

        // Calcular progreso dentro de la sección
        const progressInSection =
          (scrollPosition - sectionTop) / section.offsetHeight;
        updateProgress(index, progressInSection);
      }
    });
  }

  // Scroll a sección específica
  function scrollToSection(index) {
    isScrolling = true;
    currentActiveSection = index;

    window.scrollTo({
      top: sections[index].offsetTop,
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling = false;
    }, 1000);
  }

  // Actualizar progreso de la línea
  function updateProgress(sectionIndex, progress = 1) {
    if (diamondPositions.length === 0) return;

    // Calcular altura de la línea de progreso
    let targetHeight;

    if (sectionIndex === sections.length - 1) {
      targetHeight = 100;
    } else {
      const currentPos = diamondPositions[sectionIndex];
      const nextPos = diamondPositions[sectionIndex + 1];
      targetHeight = (currentPos + (nextPos - currentPos) * progress) * 100;
    }

    progressLine.style.height = `${targetHeight}%`;

    // Efecto al cambiar de sección
    if (progress === 1 && sectionIndex !== currentActiveSection) {
      intersectionEffect.style.top = `${diamondPositions[sectionIndex] * 100}%`;
      intersectionEffect.classList.add("active");
      setTimeout(() => {
        intersectionEffect.classList.remove("active");
      }, 800);

      createParticles();
    }
  }

  // Establecer sección activa
  function setActiveSection(index) {
    const diamonds = document.querySelectorAll(".diamond");
    diamonds.forEach((d) => d.classList.remove("active"));
    diamonds[index].classList.add("active");
  }

  // Crear partículas
  function createParticles() {
    particlesContainer.innerHTML = "";

    for (let i = 0; i < 15; i++) {
      const particle = document.createElement("div");
      particle.className = "particle";

      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 40 + 20;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;

      particle.style.setProperty("--random-x", `${x}px`);
      particle.style.setProperty("--random-y", `${y}px`);

      const delay = Math.random() * 0.3;
      const duration = Math.random() * 0.8 + 0.4;

      particle.style.animation = `floatParticle ${duration}s ease-out ${delay}s forwards`;
      particlesContainer.appendChild(particle);
    }
  }

  // Ajustar inicialmente
  window.addEventListener("load", () => {
    updateProgress(0);
  });
});
