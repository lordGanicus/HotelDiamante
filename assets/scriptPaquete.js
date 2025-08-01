/**************************Paquetes/ dentro / *******************/
// Inicializar Swiper para los servicios
// Inicializar el slider principal

const romanticSwiper = new Swiper(".romantic-slider", {
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
  loop: true,
  autoplay: {
    delay: 3000,
  },

  centeredSlides: true,
  grabCursor: true,
  // Opcional: mejorar usabilidad en móvil
  /*touchRatio: 1,
   */
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
