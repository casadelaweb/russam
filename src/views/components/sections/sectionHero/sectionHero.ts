import Swiper from 'swiper'
import { Pagination, Navigation } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionHeroSlider', {
      loop: true,
      modules: [Pagination, Navigation],
      speed: 1000,
      effect: 'slide',
      pagination: {
        enabled: false,
        clickable: true,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: true,
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        768: {
          pagination: {
            enabled: true,
          }
        }
      }
    })
  },
  {
    passive: true,
    once: true,
  })
