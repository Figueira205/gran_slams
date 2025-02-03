document.addEventListener("DOMContentLoaded", () => {
  const slider = document.querySelector('.menu-slider');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const scrollAmount = 300;

  function moveLeft() {
      slider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }

  function moveRight() {
      slider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }

  prevButton.addEventListener('click', moveLeft);
  nextButton.addEventListener('click', moveRight);

  // Scroll manual en carrusel de testimonios
  const testimonialSlider = document.querySelector('.testimonials-slider');
  const prevReview = document.querySelector('.prev-review');
  const nextReview = document.querySelector('.next-review');

  function scrollLeftTestimonial() {
      testimonialSlider.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  }

  function scrollRightTestimonial() {
      testimonialSlider.scrollBy({ left: scrollAmount, behavior: "smooth" });
  }

  prevReview.addEventListener('click', scrollLeftTestimonial);
  nextReview.addEventListener('click', scrollRightTestimonial);

  // Redirección a Instagram
  const instagramIcon = document.querySelector('.instagram-icon');
  if (instagramIcon) {
      instagramIcon.addEventListener("click", () => {
          window.open("https://www.instagram.com/tu_perfil", "_blank");
      });
  }
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".menu-image");
  const modal = document.getElementById("image-modal");
  const modalImg = document.getElementById("expanded-img");
  const closeBtn = document.querySelector(".close");

  images.forEach(img => {
      img.addEventListener("click", function () {
          modal.style.display = "flex";
          modalImg.src = this.src;
      });
  });

  closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.style.display = "none";
      }
  });
});

