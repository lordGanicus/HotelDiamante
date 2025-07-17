let swiperInstance;

function initSwiper() {
  // Solo inicializar si es menor a 768px y no se ha creado ya
  if (window.innerWidth <= 768 && !swiperInstance) {
    swiperInstance = new Swiper(".swiper", {
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".hbt-swiper-pagination", // ✅ corregido aquí
        clickable: true,
        bulletClass: "hbt-swiper-pagination-bullet", // usa tu clase personalizada
        bulletActiveClass: "hbt-swiper-pagination-bullet-active", // usa tu clase activa
      },
    });
  }
}

// Iniciar al cargar la página y si redimensionan la ventana
window.addEventListener("load", initSwiper);
window.addEventListener("resize", initSwiper);

// Animación de botones de reserva
document.addEventListener("DOMContentLoaded", function () {
  const reserveButtons = document.querySelectorAll(".hbt-reserve-button");
  reserveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      this.classList.add("clicked");
      setTimeout(() => {
        this.classList.remove("clicked");
      }, 300);
      alert(
        "¡Gracias por su interés! Será redirigido a la página de reservas."
      );
    });
  });
});
/************Efecto de imagenes fuisionadas **********/
document.addEventListener("DOMContentLoaded", function () {
  // Efecto para desktop
  const hbiGalleryItems = document.querySelectorAll(".hbi-gallery-item");
  const hbiGallery = document.querySelector(".hbi-gallery");

  if (hbiGalleryItems.length > 0) {
    hbiGalleryItems.forEach((item) => {
      item.addEventListener("mouseenter", function () {
        const section = this.getAttribute("data-section");
        hbiGallery.className = "hbi-gallery";
        hbiGallery.classList.add(`hbi-section-${section}`);

        this.classList.add("active");
      });

      item.addEventListener("mouseleave", function () {
        this.classList.remove("active");
        hbiGallery.className = "hbi-gallery hbi-section-single";
      });
    });
  }

  // Slider para móviles
  const hbiSliderTrack = document.querySelector(".hbi-slider-track");
  const hbiSlides = document.querySelectorAll(".hbi-slide");
  const hbiDots = document.querySelectorAll(".hbi-slider-dot");
  const hbiLine = document.querySelector(".hbi-slider-line");

  if (hbiSliderTrack && hbiSlides.length > 0) {
    let currentIndex = 0;
    let slideWidth = hbiSlides[0].clientWidth;
    const totalSlides = hbiSlides.length;

    // Actualizar dimensiones al cambiar tamaño de ventana
    function updateDimensions() {
      slideWidth = hbiSlides[0].clientWidth;
      hbiSliderTrack.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;
      updateLine();
    }

    // Actualizar línea indicadora
    function updateLine() {
      const lineWidth = 100 / totalSlides;
      hbiLine.style.width = `${lineWidth}%`;
      hbiLine.style.left = `${currentIndex * lineWidth}%`;
    }

    // Mover al slide específico
    function goToSlide(index) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;

      currentIndex = index;
      hbiSliderTrack.style.transform = `translateX(-${
        currentIndex * slideWidth
      }px)`;

      // Actualizar dots
      hbiDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === currentIndex);
      });

      updateLine();
    }

    // Configurar dots
    hbiDots.forEach((dot, index) => {
      dot.addEventListener("click", () => goToSlide(index));
    });

    // Configurar línea inicial
    updateLine();

    // Auto-desplazamiento
    let sliderInterval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 5000);

    // Pausar auto-desplazamiento al interactuar
    hbiSliderTrack.addEventListener("mouseenter", () =>
      clearInterval(sliderInterval)
    );
    hbiSliderTrack.addEventListener("mouseleave", () => {
      sliderInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    });

    // Touch events para móviles
    let startX = 0;
    let currentX = 0;
    let isDragging = false;

    hbiSliderTrack.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      currentX = startX;
      isDragging = true;
      clearInterval(sliderInterval);
    });

    hbiSliderTrack.addEventListener("touchmove", (e) => {
      if (!isDragging) return;
      currentX = e.touches[0].clientX;
      const diff = startX - currentX;
      hbiSliderTrack.style.transform = `translateX(calc(-${
        currentIndex * slideWidth
      }px - ${diff}px))`;
    });

    hbiSliderTrack.addEventListener("touchend", () => {
      if (!isDragging) return;
      isDragging = false;

      const diff = startX - currentX;
      // Si el desplazamiento es significativo, cambiar de slide
      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          goToSlide(currentIndex + 1); // Deslizar izquierda
        } else {
          goToSlide(currentIndex - 1); // Deslizar derecha
        }
      } else {
        // Volver a la posición actual si no hay suficiente desplazamiento
        goToSlide(currentIndex);
      }

      // Reanudar auto-desplazamiento
      sliderInterval = setInterval(() => {
        goToSlide(currentIndex + 1);
      }, 5000);
    });

    // Actualizar dimensiones al cambiar tamaño de ventana
    window.addEventListener("resize", updateDimensions);
  }
});
