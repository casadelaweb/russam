import Swiper from 'swiper'
import { EffectFade, Thumbs, EffectCreative } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body

    const sliderHead = new Swiper('.sectionAboutHeadSlider', {
      modules: [Thumbs, EffectCreative],
      speed: 1000,
      // effect: 'slide',
      watchSlidesProgress: true,
      slidesPerView: 1,
      loop: false,
      allowTouchMove: false,
      navigation: false,
      pagination: false,
      spaceBetween: 16,
      effect: 'creative',
      creativeEffect: {
        prev: {
          translate: [0, 0, -400],
          opacity: 0,
          scale: 0.5,
        },
        next: {
          translate: ['100%', 0, 0],
          opacity: 0,
          scale: 1,
        },
      },
      // breakpoints: {
      //   1024: {
      //     effect: 'creative',
      //     creativeEffect: {
      //       prev: {
      //         translate: [0, 0, -400],
      //         opacity: 0,
      //         scale: 0.5,
      //       },
      //       next: {
      //         translate: ['100%', 0, 0],
      //         opacity: 1,
      //         scale: 1,
      //       },
      //     },
      //   }
      // }
    })
    const sliderMain = new Swiper('.sectionAboutTabs', {
      modules: [Thumbs,],
      speed: 1000,
      effect: 'slide',
      spaceBetween: 16,
      watchSlidesProgress: true,
      slidesPerView: 1,
      loop: false,
      allowTouchMove: false,
      navigation: false,
      pagination: false,
      thumbs: { swiper: sliderHead, }
    })

    body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.sectionAboutNavItem')) {
        const button: HTMLElement = target.closest('.sectionAboutNavItem')
        const indexToSet = parseInt(button.getAttribute('data-index')) - 1
        const sectionAbout: HTMLElement = button.closest('.sectionAbout')
        const navButtons: HTMLElement[] = Array.from(sectionAbout.querySelectorAll('.sectionAboutNavItem'))
        sliderHead.slideTo(indexToSet)
        sliderMain.slideTo(indexToSet)
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
