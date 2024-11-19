import Swiper from 'swiper'
import { Thumbs, EffectCreative } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body

    let sliderMain: Swiper | null = null
    let isSyncing = false

    const sliderHead = new Swiper('.sectionAboutHeadSlider', {
      modules: [Thumbs, EffectCreative],
      speed: 1000,
      watchSlidesProgress: true,
      slidesPerView: 1,
      loop: true,
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
      on: {
        slideChange(swiper) {
          if (!isSyncing && sliderMain !== null) {
            isSyncing = true
            sliderMain.slideTo(swiper.realIndex)
            updateNavButtons(swiper.realIndex, swiper.el)
            isSyncing = false
          }
        },
      },
    })

    sliderMain = new Swiper('.sectionAboutTabs', {
      modules: [Thumbs],
      speed: 1000,
      spaceBetween: 16,
      slidesPerView: 1,
      loop: true,
      thumbs: {
        swiper: sliderHead,
      },
      on: {
        slideChange(swiper) {
          if (!isSyncing && sliderHead !== null) {
            isSyncing = true
            sliderHead.slideTo(swiper.realIndex)
            updateNavButtons(swiper.realIndex, swiper.el)
            isSyncing = false
          }
        },
      },
    })

    body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.sectionAboutNavItem')) {
        const button: HTMLElement = target.closest('.sectionAboutNavItem')
        const indexToSet = parseInt(button.getAttribute('data-index'))
        const sectionAbout: HTMLElement = button.closest('.sectionAbout')
        const navButtons: HTMLElement[] = Array.from(
          sectionAbout.querySelectorAll('.sectionAboutNavItem')
        )

        sliderHead.slideTo(indexToSet)
        sliderMain.slideTo(indexToSet)

        navButtons.forEach((el, index) => {
          el.classList.remove('_active')
          if (index === indexToSet) el.classList.add('_active')
        })
      }
    })
  
    function updateNavButtons(activeIndex: number, container: HTMLElement) {
      const sectionAbout = container.closest('.sectionAbout')
      const navButtons: HTMLElement[] = Array.from(
        sectionAbout.querySelectorAll('.sectionAboutNavItem')
      )

      navButtons.forEach((button) => {
        const index = parseInt(button.getAttribute('data-index'))
        button.classList.toggle('_active', index === activeIndex)
      })
    }
  },
  {
    passive: true,
    once: true,
  }
)
