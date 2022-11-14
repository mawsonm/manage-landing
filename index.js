const carousel = document.querySelector(".carousel");
const carousel_container = document.querySelector(".carousel-container");
const slides = Array.from(carousel_container.children);

const dotsContainer = document.querySelector(".dots");
const dots = Array.from(dotsContainer.children);

const slidesSize = slides[0].getBoundingClientRect().width;

slides.forEach((item, index) => {
  if (index === 0) {
    item.style.left = index * slidesSize + 0.06 * slidesSize + "px";
  } else {
    item.style.left =
      index * slidesSize + index * 0.12 * slidesSize + 0.06 * slidesSize + "px";
  }
});

const moveToSlide = (carousel, currentSlide, targetSlide) => {
  if (currentSlide == targetSlide) {
    return;
  }
  if (targetSlide === slides[0]) {
    carousel.style.transform = `translateX(${
      parseFloat(targetSlide.style.left.split("px")[0]) - 0.06 * slidesSize
    }px)`;
  } else {
    carousel.style.transform = `translateX(-${
      parseFloat(targetSlide.style.left.split("px")[0]) - 0.06 * slidesSize
    }px)`;
  }
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

dotsContainer.addEventListener("click", (e) => {
  const targetDot = e.target;
  if (targetDot.classList.contains("dots")) {
    return;
  }
  const targetIndex = dots.findIndex((dot) => dot === targetDot);
  const currentSlide = carousel_container.querySelector(".current-slide");
  const targetSlide = slides[targetIndex];
  if (currentSlide === targetSlide) {
    return;
  }

  const currentDot = dotsContainer.querySelector(".current-dot");

  currentDot.classList.remove("current-dot");
  dots[targetIndex].classList.add("current-dot");

  moveToSlide(carousel_container, currentSlide, targetSlide);
});
