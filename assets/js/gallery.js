// Galería con Modal (Lightbox)

const images = [
  "assets/images/asovictoria/vivero/20260203_173748.webp",
  "assets/images/asovictoria/vivero/20260203_173800.webp",
  "assets/images/asovictoria/vivero/20260203_173837.webp",
  "assets/images/asovictoria/vivero/20260203_173853.webp",
  "assets/images/asovictoria/vivero/20260203_173945.webp",
  "assets/images/asovictoria/vivero/20260203_174022.webp",
  "assets/images/asovictoria/vivero/20260203_175747.webp",
  "assets/images/asovictoria/vivero/20260203_175751.webp",
  "assets/images/asovictoria/vivero/20260203_175801.webp",
  "assets/images/asovictoria/vivero/20260203_180129.webp",
  "assets/images/asovictoria/vivero/20260203_180723.webp",
  "assets/images/asovictoria/vivero/20260203_180728.webp",
  "assets/images/asovictoria/vivero/20260203_180736.webp",
  "assets/images/asovictoria/vivero/20260203_180804.webp",
  "assets/images/asovictoria/vivero/20260203_180810.webp",
  "assets/images/asovictoria/logo.png",
  "assets/images/asovictoria/comunidad/20251017_094809.webp",
  "assets/images/asovictoria/comunidad/20251017_101604.webp",
  "assets/images/asovictoria/comunidad/20251222_153514.webp",
  "assets/images/asovictoria/comunidad/20251224_112501.webp",
  "assets/images/asovictoria/comunidad/20251224_151411.webp",
  "assets/images/asovictoria/comunidad/Screenshot_20251229_110516_Facebook.webp",
];

let currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");

  modal.style.display = "block";
  modalImg.src = images[currentIndex];
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  document.getElementById("modalImg").src = images[currentIndex];
}

// Cerrar modal con tecla ESC
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Navegar con flechas del teclado
document.addEventListener("keydown", function (event) {
  const modal = document.getElementById("imageModal");
  if (modal.style.display === "block") {
    if (event.key === "ArrowRight") {
      changeImage(1);
    } else if (event.key === "ArrowLeft") {
      changeImage(-1);
    }
  }
});
