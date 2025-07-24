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
const navbar = document.getElementById("navbar");
const reservarBtn = document.querySelector(".btn-reservar-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("show");
    reservarBtn.style.display = "none";
  } else {
    navbar.classList.remove("show");
    reservarBtn.style.display = "block";
  }
});
/********************slider de informacion**********************/
document.addEventListener("DOMContentLoaded", function () {
  // Configuración para las imágenes hover en desktop
  const images = document.querySelectorAll(
    ".info-city-experience, .info-city-experience-2, .info-city-experience-3"
  );

  const config = {
    scale: 1.05,
    movement: 0.03,
    transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    perspective: 1000,
    rotate: 1,
  };

  images.forEach((img) => {
    img.style.transition = config.transition;
    img.style.willChange = "transform";
    img.style.transformStyle = "preserve-3d";

    img.addEventListener("mouseenter", function () {
      this.style.transform = `scale(${config.scale}) rotateZ(0)`;
      this.style.zIndex = "20";
      this.style.boxShadow = "0 25px 50px rgba(0, 0, 0, 0.2)";
    });

    img.addEventListener("mousemove", function (e) {
      if (window.innerWidth <= 768) return;

      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = x - rect.width / 2;
      const centerY = y - rect.height / 2;

      const moveX = (centerX / rect.width) * 15;
      const moveY = (centerY / rect.height) * 15;

      const rotateY = (centerX / rect.width) * config.rotate;
      const rotateX = -(centerY / rect.height) * config.rotate;

      this.style.transform = `
              scale(${config.scale})
              translate(${moveX}px, ${moveY}px)
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
            `;
    });

    img.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) translate(0, 0) rotateX(0) rotateY(0)";
      this.style.zIndex = "1";
      this.style.boxShadow = "0 15px 30px rgba(0, 0, 0, 0.1)";
    });
  });

  // Inicialización de Swiper para móviles/tablets
  if (window.innerWidth <= 768) {
    const swiper = new Swiper(".info-swiper", {
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }

  // Re-inicializar Swiper al cambiar el tamaño de la ventana
  window.addEventListener("resize", function () {
    if (
      window.innerWidth <= 768 &&
      !document.querySelector(".info-swiper").swiper
    ) {
      const swiper = new Swiper(".info-swiper", {
        loop: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
  });
});
/*******************************Habitaciones *****************************************/
document.addEventListener("DOMContentLoaded", () => {
  const habitacionesSwiper = new Swiper(".habitaciones-swiper", {
    loop: true,
    initialSlide: window.innerWidth >= 768 ? 1 : 1, // Segundo slide en desktop, primero en móviles
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    grabCursor: true,
    speed: 800,
    touchAngle: 45,
    slideToClickedSlide: true,
    watchSlidesProgress: true,
    centerInsufficientSlides: true,

    // Navegación
    navigation: {
      nextEl: ".habitacion-next",
      prevEl: ".habitacion-prev",
    },

    // Breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1.1, // Mostrar un poco más que 100%
        spaceBetween: 10,
        centeredSlides: true,
      },
      480: {
        slidesPerView: 1.01,
        spaceBetween: 15,
        centeredSlides: true,
      },
      768: {
        slidesPerView: 1.04,
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

    // Eventos
    on: {
      init: function () {
        if (this.isEnd) {
          document.querySelector(".habitacion-next").style.opacity = "0.5";
          document.querySelector(".habitacion-next").style.pointerEvents =
            "none";
        }
      },
      reachEnd: function () {
        document.querySelector(".habitacion-next").style.opacity = "0.5";
        document.querySelector(".habitacion-next").style.pointerEvents = "none";
      },
      fromEdge: function () {
        document.querySelector(".habitacion-next").style.opacity = "1";
        document.querySelector(".habitacion-next").style.pointerEvents = "auto";
      },
      slideChange: function () {
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

  // Refrescar Swiper para asegurar layout correcto (especialmente en móviles)
  setTimeout(() => {
    habitacionesSwiper.update();
  }, 300);
});
/*************************************paquetes******************************/
document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".ps-romantic-slide");
  const dots = document.querySelectorAll(".ps-romantic-slider-dot");
  const nextArrow = document.getElementById("ps-arrow-next");
  const prevButton = document.querySelector(".ps-prev");
  const nextButton = document.querySelector(".ps-next");
  const sliderContainer = document.querySelector(".ps-romantic-slider");

  let currentSlide = 0;
  let autoSlideInterval;

  // Variables para touch
  let startX = 0;
  let endX = 0;

  function goToSlide(index) {
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    slides[currentSlide].classList.remove("active");
    dots[currentSlide].classList.remove("active");

    currentSlide = index;
    slides[currentSlide].classList.add("active");
    dots[currentSlide].classList.add("active");

    resetAnimations(slides[currentSlide]);
    resetAutoSlide();
  }

  function resetAnimations(slide) {
    const elements = slide.querySelectorAll(
      ".ps-romantic-content-line, .ps-romantic-package-title, .ps-romantic-package-description, .ps-romantic-cta-button, .ps-romantic-arrow-line, .ps-romantic-arrow-point"
    );

    elements.forEach((el) => {
      el.style.animation = "none";
      void el.offsetHeight;

      setTimeout(() => {
        if (el.classList.contains("ps-romantic-content-line")) {
          el.style.animation = "ps-scaleIn 0.6s ease-out forwards";
        } else if (el.classList.contains("ps-romantic-package-title")) {
          el.style.animation = "ps-slideInRight 0.8s ease-out 0.2s forwards";
        } else if (el.classList.contains("ps-romantic-package-description")) {
          el.style.animation = "ps-fadeInUp 0.8s ease-out 0.4s forwards";
        } else if (el.classList.contains("ps-romantic-cta-button")) {
          el.style.animation = "ps-fadeInUp 0.8s ease-out 0.6s forwards";
        } else if (el.classList.contains("ps-romantic-arrow-line")) {
          el.style.animation = "ps-slideInArrow 0.8s ease-out 0.3s forwards";
        } else if (el.classList.contains("ps-romantic-arrow-point")) {
          el.style.animation = "ps-rotateToRombo 0.8s ease-out 0.5s forwards";
        }
      }, 50);
    });
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
      goToSlide(currentSlide + 1);
    }, 3000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  if (nextArrow) {
    nextArrow.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
    });
  }

  if (prevButton) {
    prevButton.addEventListener("click", () => {
      goToSlide(currentSlide - 1);
    });
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => {
      goToSlide(currentSlide + 1);
    });
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      goToSlide(parseInt(dot.dataset.index));
    });
  });

  sliderContainer.addEventListener("mouseenter", () => {
    clearInterval(autoSlideInterval);
  });

  sliderContainer.addEventListener("mouseleave", () => {
    startAutoSlide();
  });

  sliderContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchmove", (e) => {
    endX = e.touches[0].clientX;
  });

  sliderContainer.addEventListener("touchend", () => {
    const threshold = 50;
    const distance = startX - endX;

    if (distance > threshold) {
      goToSlide(currentSlide + 1);
    } else if (distance < -threshold) {
      goToSlide(currentSlide - 1);
    }
  });

  resetAnimations(slides[0]);

  setTimeout(() => {
    startAutoSlide();
  }, 1000);
});
/**************************************** desayunos **********************************/
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
/**********************************Ubicacion******************************/
// Funcionalidad del acordeón
document.querySelectorAll(".ubi-accordion-header").forEach((header) => {
  header.addEventListener("click", () => {
    const item = header.parentElement;
    const content = header.nextElementSibling;
    const icon = header.querySelector(".ubi-accordion-icon");

    // Cerrar otros items abiertos
    document.querySelectorAll(".ubi-accordion-item").forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem
          .querySelector(".ubi-accordion-content")
          .classList.remove("active");
        otherItem
          .querySelector(".ubi-accordion-icon")
          .classList.remove("fa-minus");
        otherItem.querySelector(".ubi-accordion-icon").classList.add("fa-plus");
      }
    });

    // Alternar el item actual
    content.classList.toggle("active");

    // Cambiar icono
    if (content.classList.contains("active")) {
      icon.classList.remove("fa-plus");
      icon.classList.add("fa-minus");
    } else {
      icon.classList.remove("fa-minus");
      icon.classList.add("fa-plus");
    }
  });
});
