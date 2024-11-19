import Swiper from "swiper";
document.addEventListener(
  "DOMContentLoaded",
  () => {
    const $benefitsParent: HTMLElement =
      document.body.querySelector(".sectionBenefits");

    if ($benefitsParent) {
      function benefitsSliderSetActive(index: number) {
        $benefitsParent
          .querySelectorAll("._active")
          .forEach((el: HTMLElement) => {
            el.classList.remove("_active");
          });

        $benefitsParent
          .querySelectorAll(`[data-index="${index}"`)
          .forEach((el: HTMLElement) => {
            el.classList.add("_active");
          });
      }
      const benefitsFooterBtns = new Swiper(".sectionBenefitsFooterBtns", {
        slidesPerView: "auto",
        spaceBetween: 4,
        // freeMode: true,
        centeredSlides: false,
        // loop: true,
        initialSlide: 2,
        on: {
          slideChange(swiper) {
            benefitsSliderSetActive(swiper.activeIndex);
          },
        },
      });

      $benefitsParent.addEventListener("click", (event: MouseEvent) => {
        const target = event.target as HTMLElement;

        if (target.closest("[data-index]")) {
          const btn: HTMLElement = target.closest("[data-index]");
          benefitsSliderSetActive(+btn.dataset.index);
          benefitsFooterBtns.slideTo(+btn.dataset.index);
        }
      });
    }
  },
  {
    passive: true,
    once: true,
  }
);
