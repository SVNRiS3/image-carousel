export default class Carousel {
  constructor(carouselClass) {
    this.carousels = document.querySelectorAll(carouselClass);
  }

  init() {
    this.carousels.forEach((carousel) => {
      let translateValue = 0;
      const carouselImgs = carousel.querySelector(".carousel-imgs");
      const imgsAmount = carouselImgs.children.length;
      const [prevBtn, nextBtn] = carousel.querySelector(".controls").children;

      const addBtnControl = (btn, direction) => {
        btn.addEventListener("click", () => {
          translateValue += direction * 100;
          if (translateValue < -(imgsAmount - 1) * 100) translateValue = 0;
          else if (translateValue > 0) translateValue = -(imgsAmount - 1) * 100;
          carouselImgs.style.transform = `translateX(${translateValue}%)`;
        });
      };
      addBtnControl(prevBtn, 1);
      addBtnControl(nextBtn, -1);
    });
  }
}
