import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionCategoriesSlider', {
      modules: [Navigation],
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        enabled: true,
      },
      slidesPerView: 2.25,
      spaceBetween: 24,
      centeredSlides: false,
      breakpoints: {
        // 540: {
        //   slidesPerView: 3
        // },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 32,
        },
        // 1024: { slidesPerView: 4, },
        // 1366: { slidesPerView: 4.5 },
        1440: { slidesPerView: 6 }
      }
    })
  },
  {
    passive: true,
    once: true,
  })
