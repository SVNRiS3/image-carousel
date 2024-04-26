export default class Carousel {
  constructor(carouselClass) {
    this.carousels = document.querySelectorAll(carouselClass);
  }

  makeNavigationDots(nOfImgs, carouselEl) {
    const naviDots = document.createElement("div");
    naviDots.classList.add("navi-dots");
    for (let i = 0; i < nOfImgs; i++) {
      const naviDot = document.createElement("button");
      naviDot.classList.add("navi-dot");
      naviDots.appendChild(naviDot);
    }
    carouselEl.appendChild(naviDots);
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
      this.makeNavigationDots(imgsAmount, carousel);
    });
  }
}
