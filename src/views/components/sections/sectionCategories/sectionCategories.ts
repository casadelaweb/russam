import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionCategoriesSlider', {
      modules: [Navigation, FreeMode],
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        enabled: true,
      },
      slidesPerView: 1.56,
      spaceBetween: 10,
      effect: 'slide',
      speed: 1000,
      freeMode: true,
      centeredSlides: false,
      grabCursor: true,
      breakpoints: {
        375: {
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 4.7,
        },
      }
    })
  },
  {
    passive: true,
    once: true,
  })
