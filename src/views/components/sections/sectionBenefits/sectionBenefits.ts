import Swiper from 'swiper'
import { Thumbs } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {

    const sliderFooter = new Swiper('.sectionBenefitsFooterSlider', {
      modules: [Thumbs,],
      loop: false,
      effect: 'slide',
      slidesPerView: 1.38,
      spaceBetween: 4,
    })
    const sliderMain = new Swiper('.sectionBenefitsMainSlider', {
      modules: [Thumbs,],
      loop: false,
      effect: 'slide',
      slidesPerView: 1,
      spaceBetween: 0,
      thumbs: {
        swiper: sliderFooter,
      }
    })

    document.body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.sectionBenefitsMainIcon')) {
        const button: HTMLElement = target.closest('.sectionBenefitsMainIcon')
        const indexToSet = parseInt(button.getAttribute('data-index'))
        const sectionCollections: HTMLElement = button.closest('.sectionBenefits')
        const navButtons: HTMLElement[] = Array.from(sectionCollections.querySelectorAll('.sectionBenefitsMainIcon'))
        sliderMain.slideTo(indexToSet)
        sliderFooter.slideTo(indexToSet)
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