import Swiper from 'swiper'
import { FreeMode, Navigation, Pagination, Scrollbar } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionProductsSlider', {
      modules: [Navigation, FreeMode, Scrollbar],
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        enabled: true,
      },
      // pagination: {
      //   enabled: false,
      //   clickable: true,
      //   el: '.swiper-pagination',
      // },
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
          slidesPerView: 3,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 3.5,
          spaceBetween: 12,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 12,
          scrollbar: {
            enabled: false,
          }
        },
        1366: {
          slidesPerView: 4.5,
          spaceBetween: 12,
          scrollbar: {
            enabled: false,
          }
        },
        1440: {
          slidesPerView: 4.75,
          spaceBetween: 12,
          scrollbar: {
            enabled: false,
          }
        }
      }
    })
  },
  {
    passive: true,
    once: true,
  })
