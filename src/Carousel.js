export default class Carousel {
  constructor(carouselClass) {
    this.carousels = document.querySelectorAll(carouselClass);
  }

  init() {
    // transform: translateX(-100%)
    this.carousels.forEach((carousel) => {
      let translateValue = 0;
      const carouselImgs = carousel.querySelector(".carousel-imgs");
      const carouselControls = carousel.querySelector(".controls").children;
      carouselControls[0].addEventListener("click", () => {
        translateValue += 100;
        carouselImgs.style.transform = `translateX(${translateValue}%)`;
      });
      carouselControls[1].addEventListener("click", () => {
        translateValue -= 100;
        carouselImgs.style.transform = `translateX(${translateValue}%)`;
      });
    });
  }
}
