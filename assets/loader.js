let percentage = 0;
const percentageElement = document.getElementById("percentage");
const loadingScreen = document.getElementById("loadingScreen");
const welcomeScreen = document.getElementById("welcomeScreen");

// Crear partículas cuando se intersectan las barras
setTimeout(() => {
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
}, 2000);

const percentageInterval = setInterval(() => {
  percentage += 1;
  percentageElement.textContent = `${percentage}%`;

  if (percentage >= 100) {
    clearInterval(percentageInterval);

    setTimeout(() => {
      loadingScreen.style.display = "none";
      welcomeScreen.style.display = "flex";
      document.body.style.overflow = "auto";
      const welcomeText = document.querySelector(".welcome-text");
      const welcomeSubtext = document.querySelector(".welcome-subtext");
      welcomeText.style.animation = "welcomeFadeIn 0.8s forwards 0.3s";
      welcomeSubtext.style.animation = "welcomeFadeIn 0.8s forwards 0.6s";

      setTimeout(() => {
        welcomeScreen.style.opacity = "1";
        setTimeout(() => {
          welcomeScreen.style.opacity = "0";
          welcomeScreen.style.transition = "opacity 0.8s ease";
          setTimeout(() => {
            welcomeScreen.style.display = "none";
          }, 800);
        }, 1500);
      }, 100);
    }, 500);
  }
}, 30);
