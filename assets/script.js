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
});
/*****************menu ****************/
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const menuOverlay = document.getElementById("menuOverlay");

openMenu.addEventListener("click", () => {
  menuOverlay.classList.add("active");
});

closeMenu.addEventListener("click", () => {
  menuOverlay.classList.remove("active");
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
    loop: false, // Desactivamos el loop infinito
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
      768: {
        slidesPerView: 1.2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 1.5,
        spaceBetween: 25,
      },
      1200: {
        slidesPerView: 1.8,
        spaceBetween: 30,
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
// Inicialización del slider 3D
document.addEventListener("DOMContentLoaded", function () {
  // Configuración del slider
  const glide = new Glide(".glide", {
    type: "carousel",
    perView: 1,
    focusAt: "center",
    gap: 40,
    animationDuration: 800,
    peek: {
      before: 100,
      after: 100,
    },
    breakpoints: {
      768: {
        peek: {
          before: 50,
          after: 50,
        },
      },
    },
  }).mount();

  // Efecto 3D para las slides
  const slides = document.querySelectorAll(".dg-slide-content");
  slides.forEach((slide) => {
    slide.addEventListener("mousemove", (e) => {
      const xAxis = (window.innerWidth / 2 - e.pageX) / 20;
      const yAxis = (window.innerHeight / 2 - e.pageY) / 20;
      slide.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg) scale(1.05)`;
    });

    slide.addEventListener("mouseleave", () => {
      slide.style.transform = "rotateY(0) rotateX(0)";
    });
  });

  // Control de la galería
  const gallery = document.getElementById("desayunosGallery");
  const closeBtn = document.querySelector(".dg-close-btn");

  // Función para abrir la galería (debe llamarse desde tu botón "Ver más")
  window.openDesayunosGallery = function () {
    gallery.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  // Función para cerrar la galería
  closeBtn.addEventListener("click", function () {
    gallery.style.display = "none";
    document.body.style.overflow = "auto";
  });

  // Cerrar al hacer clic fuera del contenido
  gallery.addEventListener("click", function (e) {
    if (e.target === gallery) {
      gallery.style.display = "none";
      document.body.style.overflow = "auto";
    }
  });
});
