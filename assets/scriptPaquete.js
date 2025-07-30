/**************************Paquetes/ dentro / *******************/
// Inicializar Swiper para los servicios
// Inicializar el slider principal
const romanticSwiper = new Swiper(".romantic-slider", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Inicializar el slider de servicios (tu código original)
const servicesSwiper = new Swiper(".ps-info-services-swiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".ps-info-services-next",
    prevEl: ".ps-info-services-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});

// Función para manejar el click del calendario
document
  .querySelector(".ps-info-calendar-icon")
  .addEventListener("click", function () {
    document.querySelector(".ps-info-date-input").showPicker();
  });

// Función para WhatsApp (placeholder)
function sendWhatsAppMessage(button) {
  const paquete = button.getAttribute("data-paquete");
  const fecha = document.querySelector(".ps-info-date-input").value;
  const mensaje = `Hola, me interesa el paquete "${paquete}"${
    fecha ? ` para la fecha ${fecha}` : ""
  }. ¿Podrían darme más información?`;
  const url = `https://wa.me/1234567890?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// Animaciones de entrada para los elementos del grid
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }, index * 100);
    }
  });
}, observerOptions);

// Aplicar animación a los elementos del grid
document.querySelectorAll(".service-item").forEach((item, index) => {
  item.style.opacity = "0";
  item.style.transform = "translateY(30px)";
  item.style.transition = "all 0.6s ease";
  observer.observe(item);
});
