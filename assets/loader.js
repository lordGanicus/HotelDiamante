let percentage = 0;
const percentageElement = document.getElementById("percentage");
const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");

const hasVisitedBefore = localStorage.getItem("hasVisited") === "true";
const intervalSpeed = hasVisitedBefore ? 5 : 30;

const topBar = document.querySelector(".top-bar");
const bottomBar = document.querySelector(".bottom-bar");
topBar.classList.add("top-bar-animate");
bottomBar.classList.add("bottom-bar-animate");

document.querySelector(".loading-logo").style.animation =
  "fadeInLogo 0.5s ease-out 0s forwards";
document.querySelector(".loading-percentage").style.animation =
  "fadeIn 0.5s ease-out 0.2s forwards";
document.querySelector(".loading-text").style.animation =
  "fadeIn 0.5s ease-out 0.4s forwards";
document.getElementById("particles").style.animation =
  "fadeIn 0.5s ease-out 0s forwards";

let particlesCreated = false;

const percentageInterval = setInterval(() => {
  percentage += 1;
  percentageElement.textContent = `${percentage}%`;

  if (percentage >= 95 && !particlesCreated) {
    const particlesContainer = document.getElementById("particles");
    const particleCount = 30;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.classList.add("particle");
      const size = Math.random() * 5 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = "50%";
      particle.style.top = "50%";
      const angle = Math.random() * Math.PI * 2;
      const distance = Math.random() * 100 + 50;
      const x = Math.cos(angle) * distance;
      const y = Math.sin(angle) * distance;
      particle.style.setProperty("--random-x", `${x}px`);
      particle.style.setProperty("--random-y", `${y}px`);
      const duration = Math.random() * 2 + 1;
      particle.style.animation = `floatParticle ${duration}s ease-out forwards`;
      particlesContainer.appendChild(particle);
    }
    particlesCreated = true;
  }

  if (percentage >= 100) {
    clearInterval(percentageInterval);

    setTimeout(() => {
      loadingScreen.style.display = "none";
      welcomeScreen.style.display = "flex";
      document.body.style.overflow = "auto";

      const welcomeText = document.querySelector(".welcome-text");
      const welcomeSubtext = document.querySelector(".welcome-subtext");
      // Animación de bienvenida más rápida
      welcomeText.style.animation = "welcomeFadeIn 0.3s forwards 0.1s";
      welcomeSubtext.style.animation = "welcomeFadeIn 0.3s forwards 0.3s";

      setTimeout(() => {
        welcomeScreen.style.opacity = "1";
        setTimeout(() => {
          welcomeScreen.style.opacity = "0";
          welcomeScreen.style.transition = "opacity 0.3s ease";
          setTimeout(() => {
            welcomeScreen.style.display = "none";
          }, 600);
        }, 600);
      }, 100);
    }, 500);

    localStorage.setItem("hasVisited", "true");
  }
}, intervalSpeed);
