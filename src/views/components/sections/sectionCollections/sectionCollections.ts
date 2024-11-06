import Swiper from 'swiper'
import {
  EffectCards,
  EffectCoverflow,
  EffectCreative,
  EffectCube,
  EffectFade,
  EffectFlip,
  Navigation
} from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionCollectionsSlider', {
      modules: [Navigation,],
      speed: 1000,
      watchSlidesProgress: true,
      effect: 'slide',
      slidesPerView: 1.1,
      spaceBetween: 10,
      navigation: {
        enabled: true,
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
      }
    })

    const sliders = new Swiper('.sectionCollectionsSliders', {
      modules: [EffectCreative,],
      speed: 1000,
      watchSlidesProgress: true,
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: [0, 0, -25],
          opacity: 0,
          scale: 0.5,
        },
        next: {
          translate: ['100%', 0, 0],
          opacity: 0,
          scale: 1,
        },
      },
      slidesPerView: 1,
      spaceBetween: 40,
      loop: false,
      allowTouchMove: false,
      navigation: false,
      pagination: false,
    })

    document.body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.sectionCollectionsNavItem')) {
        const button: HTMLElement = target.closest('.sectionCollectionsNavItem')
        const indexToSet = parseInt(button.getAttribute('data-index'))
        const sectionCollections: HTMLElement = button.closest('.sectionCollections')
        const navButtons: HTMLElement[] = Array.from(sectionCollections.querySelectorAll('.sectionCollectionsNavItem'))
        sliders.slideTo(indexToSet)
        navButtons.forEach((el, index) => {
          el.classList.remove('_active')
          if (index === indexToSet) el.classList.add('_active')
        })
      }
    })
  },
  {
    passive: true,
    once: true,
  })
