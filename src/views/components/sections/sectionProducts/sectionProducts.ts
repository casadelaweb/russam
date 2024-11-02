import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionProductsSlider', {
      modules: [Pagination, Navigation, FreeMode],
      freeMode: true,
      pagination: {
        enabled: true,
        clickable: true,
        el: '.swiper-pagination',
      },
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        enabled: true,
      },
      slidesPerView: 1.56,
      spaceBetween: 10,
      breakpoints: {
        375: {
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 3
        },
        768: {
          slidesPerView: 3.5,
        },
        1024: { slidesPerView: 4, },
        1366: { slidesPerView: 4.5 },
        1440: { slidesPerView: 4.75 }
      }
    })
  },
  {
    passive: true,
    once: true,
  })
