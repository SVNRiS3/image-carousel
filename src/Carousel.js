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
      if (i == 0) naviDot.style.backgroundColor = "gray";
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

      const getcurrentImgNo = () =>
        carousel.children[0].style.transform.match(/\d/)[0];

      const colorCurrentImgDot = () => {
        const currentImgNo = getcurrentImgNo();

        naviDots.forEach((dot) => {
          dot.style.backgroundColor = "lightgray";
        });
        naviDots[currentImgNo].style.backgroundColor = "gray";
      };

      const addNavControls = () => {
        naviDots.forEach((dot, index) => {
          dot.addEventListener("click", () => {
            carouselImgs.style.transform = `translateX(${-index * 100}%)`;
            colorCurrentImgDot();
          });
        });
      };

      const addBtnControl = (btn, direction) => {
        btn.addEventListener("click", () => {
          translateValue += direction * 100;
          if (translateValue < -(imgsAmount - 1) * 100) translateValue = 0;
          else if (translateValue > 0) translateValue = -(imgsAmount - 1) * 100;
          carouselImgs.style.transform = `translateX(${translateValue}%)`;
          colorCurrentImgDot();
        });
      };
      addBtnControl(prevBtn, 1);
      addBtnControl(nextBtn, -1);
      this.makeNavigationDots(imgsAmount, carousel);
      const naviDots = carousel.querySelectorAll(".navi-dot");
      addNavControls();
    });
  }
}
