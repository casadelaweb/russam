import Swiper from 'swiper'
import { Pagination, Navigation, } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    const slider = new Swiper('.sectionHeroSlider', {
      loop: true,
      modules: [Pagination, Navigation],
      speed: 1000,
      rewind: false,
      effect: 'slide',
      pagination: {
        enabled: true,
        clickable: true,
        el: '.swiper-pagination',
      },
      navigation: {
        enabled: false,
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      },
      breakpoints: {
        768: {
          navigation: {
            enabled: true,
          }
        }
      }
    })

    document.body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.sectionHeroSlidePrev')) {
        slider.slidePrev()
      }
      if (target.closest('.sectionHeroSlideNext')) {
        slider.slideNext()
      }
    }, {
      passive: true,
    })
  },
  {
    passive: true,
    once: true,
  })
