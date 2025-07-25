/**************************Paquetes/ dentro / *******************/
// Inicializar Swiper para los servicios
const servicesSwiper = new Swiper(".ps-info-services-swiper", {
  slidesPerView: "auto",
  spaceBetween: 20,
  centeredSlides: true,
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
    320: {
      slidesPerView: 1.5,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
    1200: {
      slidesPerView: 6,
      spaceBetween: 20,
    },
  },
  on: {
    slideChange: function () {
      document
        .querySelectorAll(".ps-info-service-item")
        .forEach((item) => item.classList.remove("ps-info-active"));

      const activeSlide = this.slides[this.activeIndex];
      if (activeSlide) {
        const serviceItem = activeSlide.querySelector(".ps-info-service-item");
        if (serviceItem) {
          serviceItem.classList.add("ps-info-active");
        }
      }
    },
    init: function () {
      const activeSlide = this.slides[this.activeIndex];
      if (activeSlide) {
        const serviceItem = activeSlide.querySelector(".ps-info-service-item");
        if (serviceItem) {
          serviceItem.classList.add("ps-info-active");
        }
      }
    },
  },
});

// Función para enviar mensaje por WhatsApp personalizado por paquete
function sendWhatsAppMessage(button) {
  const dateInput = document.getElementById("ps-info-reservation-date");
  const selectedDate = dateInput.value;

  if (!selectedDate) {
    alert("Por favor, selecciona una fecha");
    return;
  }

  const paquete = button.dataset.paquete || "paquete personalizado";

  const date = new Date(selectedDate);
  const formattedDate = date.toLocaleDateString("es-ES", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const message = `Hola! Me gustaría consultar si tienen disponibilidad para el ${formattedDate} en el paquete *${paquete}*. ¿Podrían confirmarme tarifas y disponibilidad? Gracias!`;
  const whatsappUrl = `https://wa.me/59163051699?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappUrl, "_blank");
}

// Evento para ícono del calendario
document
  .querySelector(".ps-info-calendar-icon")
  .addEventListener("click", function () {
    document.getElementById("ps-info-reservation-date").showPicker();
  });

// Detener autoplay del swiper al hacer hover en ítems
document.querySelectorAll(".ps-info-service-item").forEach((item) => {
  item.addEventListener("mouseenter", function () {
    if (!this.classList.contains("ps-info-active")) {
      servicesSwiper.autoplay.stop();
    }
  });

  item.addEventListener("mouseleave", function () {
    servicesSwiper.autoplay.start();
  });
  const dateInput = document.getElementById("ps-info-reservation-date");
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, "0");
  const dd = String(today.getDate()).padStart(2, "0");
  const formattedDate = `${yyyy}-${mm}-${dd}`;
  dateInput.value = formattedDate;
});
