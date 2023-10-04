// 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
document.addEventListener("DOMContentLoaded", function() {
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const slides = document.querySelector(".carousel-container .carousel-slides");
  const slideWidth = slides.firstElementChild.clientWidth;
  let currentIndex = 0;

  prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    updateCarousel();
  });

  nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    updateCarousel();
  });

  function updateCarousel() {
    const translateX = -currentIndex * slideWidth;
    slides.style.transform = `translateX(${translateX}px)`;
  }

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    });
  });
});
