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
/************************hab/dentro*********************** */
document.addEventListener("DOMContentLoaded", function () {
  // Configuración del Swiper con efecto 3D mejorado
  const swiper = new Swiper(".hbt-swiper", {
    loop: true,
    effect: "creative",
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -200],
        rotate: [0, 0, -5],
      },
      next: {
        shadow: true,
        translate: ["20%", 0, -200],
        rotate: [0, 0, 5],
      },
    },
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 40,
    speed: 800,

    navigation: {
      nextEl: ".hbt-swiper-button-next",
      prevEl: ".hbt-swiper-button-prev",
    },
    pagination: {
      el: ".hbt-swiper-pagination",
      clickable: true,
    },
    on: {
      init: function () {
        // Animación inicial con zoom y difuminado
        const slides = this.slides;
        slides.forEach((slide, index) => {
          const img = slide.querySelector(".hbt-room-image");
          slide.style.opacity = "0";
          slide.style.transform = "scale(0.8) translateY(50px)";
          slide.style.filter = "blur(5px)";

          if (img) {
            img.style.transform = "scale(1.2)";
            img.style.filter = "brightness(0.7)";
          }

          setTimeout(() => {
            slide.style.transition =
              "all 0.6s cubic-bezier(0.22, 1, 0.36, 1), filter 0.4s ease";
            slide.style.opacity = "1";
            slide.style.transform = "scale(1) translateY(0)";
            slide.style.filter = "blur(0)";

            if (img) {
              img.style.transition =
                "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1), filter 0.6s ease";
              img.style.transform = "scale(1.1)";
              img.style.filter = "brightness(0.9)";
            }
          }, index * 150);
        });
      },
      slideChange: function () {
        // Efecto de zoom en la imagen activa
        const activeSlide = this.slides[this.activeIndex];
        const activeImage = activeSlide.querySelector(".hbt-room-image");

        // Resetear todas las imágenes
        this.slides.forEach((slide) => {
          const img = slide.querySelector(".hbt-room-image");
          if (img) {
            img.style.transform = "scale(1.1)";
            img.style.filter = "brightness(0.9)";
          }
        });

        // Aplicar zoom a la imagen activa
        if (activeImage) {
          setTimeout(() => {
            activeImage.style.transform = "scale(1.15)";
            activeImage.style.filter = "brightness(1)";
          }, 300);
        }
      },
    },
  });

  // Efecto hover para zoom manual
  const slides = document.querySelectorAll(".hbt-swiper-slide");
  slides.forEach((slide) => {
    slide.addEventListener("mouseenter", () => {
      const img = slide.querySelector(".hbt-room-image");
      if (img) {
        img.style.transform = "scale(1.15)";
        img.style.filter = "brightness(1)";
      }
    });
    slide.addEventListener("mouseleave", () => {
      const img = slide.querySelector(".hbt-room-image");
      if (img && !slide.classList.contains("swiper-slide-active")) {
        img.style.transform = "scale(1.1)";
        img.style.filter = "brightness(0.9)";
      }
    });
  });
});
/****************Metodo de principal***************/
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar Swiper

  /***************** menú ****************/
  const openMenus = document.querySelectorAll(".openMenu");
  const closeMenu = document.getElementById("closeMenu");
  const menuOverlay = document.getElementById("menuOverlay");

  // Abrir menú
  openMenus.forEach((button) => {
    button.addEventListener("click", () => {
      menuOverlay.classList.add("active");
    });
  });

  // Cerrar menú con botón
  closeMenu.addEventListener("click", () => {
    menuOverlay.classList.remove("active");
  });

  // 🔥 NUEVO: cerrar menú al hacer clic en cualquier enlace
  const menuLinks = menuOverlay.querySelectorAll("a");
  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuOverlay.classList.remove("active");
    });
  });

  // Navbar flotante y botón reservar
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
});
