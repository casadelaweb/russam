import Swiper from 'swiper'
import { Pagination, Navigation } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionHeroSlider', {
      loop: true,
      modules: [Pagination, Navigation],
      pagination: {
        enabled: true,
        clickable: true,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: true,
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {}
    })
  },
  {
    passive: true,
    once: true,
  })
