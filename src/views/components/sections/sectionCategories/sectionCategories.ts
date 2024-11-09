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
      slidesPerView: 2.4,
      spaceBetween: 24,
      effect: 'slide',
      speed: 1000,
      freeMode: true,
      centeredSlides: false,
      grabCursor: true,
      breakpoints: {
        540: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 4.5,
          spaceBetween: 32,
        },
        1024: { slidesPerView: 5.5, },
        1180: { slidesPerView: 6, },
      }
    })
  },
  {
    passive: true,
    once: true,
  })
