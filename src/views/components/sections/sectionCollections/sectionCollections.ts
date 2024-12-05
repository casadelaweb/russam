import Swiper from 'swiper'
import { EffectCreative, EffectFade, Navigation, Thumbs } from 'swiper/modules'

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const collectionElements: HTMLElement[] = Array.from(body.querySelectorAll('.sectionCollectionsSliders'))
    let swiperCollections: Swiper
    let swiperGroups: Swiper[] = []
    let swiperNames: Swiper[] = []

    collectionElements.forEach((collectionElement) => {
      swiperCollections = new Swiper(collectionElement, {
        modules: [EffectCreative,],
        speed: 1000,
        watchSlidesProgress: true,
        effect: 'creative',
        creativeEffect: {
          prev: {
            translate: [0, '25%', -25],
            opacity: 0,
            scale: 0.5,
          },
          next: {
            translate: ['75%', 0, 0],
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
        slideToClickedSlide: true,
      })

      const groupElements: HTMLElement[] = Array.from(collectionElement.querySelectorAll('.sectionCollectionsSlider'))
      groupElements.forEach((groupElement, index) => {
        const slider = new Swiper(groupElement, {
          modules: [Navigation, EffectFade],
          speed: 333,
          loop: false,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
          effect: 'slide',
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            enabled: true,
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          },
          breakpoints: {
            375: {
              slidesPerView: 1.1,
            },
            540: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
            1180: {
              slidesPerView: 3.5,
            },
            1440: {
              //effect: 'fade',
              speed: 0,
              slidesPerView: 1,
              spaceBetween: 40,
              // fadeEffect: {
              //   crossFade: true,
              // },
            }
          },
          on: {
            slideChange(swiper) {
              swiperNames[index].slideTo(swiper.activeIndex)
              swiperNames[index].slides.forEach((slide, index) => {
                const name: HTMLElement | null = slide.querySelector('.sectionCollectionsName')
                if (index === swiper.activeIndex) {
                  slide.classList.add('_active')
                  name?.classList.add('_active')
                } else {
                  slide.classList.remove('_active')
                  name?.classList.remove('_active')
                }
              })
            },
          },
        })
        swiperGroups.push(slider)
      })

      const nameElements: HTMLElement[] = Array.from(collectionElement.querySelectorAll('.sectionCollectionsNames'))
      nameElements.forEach((nameElement, index) => {
        swiperNames.push(new Swiper(nameElement, {
          modules: [Thumbs],
          speed: 333,
          loop: false,
          thumbs: {
            swiper: swiperGroups[index],
          },
          centeredSlides: true,
          direction: 'vertical',
          effect: 'slide',
          slidesPerView: 'auto',
          spaceBetween: 20,
          slideToClickedSlide: true,
          grabCursor: true,
        }))
      })
    })

    function calcSlideTitleOffset() {
      const titles: HTMLElement[] = Array.from(body.querySelectorAll('.sectionCollectionsSlideTitle'))
      titles.forEach((el: HTMLElement) => {
        const height = el.offsetHeight
        const marginTop = Math.floor(Math.max(-180, Math.min(-(height * 0.33), -16)))
        el.style.marginTop = `${ marginTop }px`
      })
    }

    calcSlideTitleOffset()
    window.addEventListener('resize', () => {
      calcSlideTitleOffset()
    })
    document.body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.sectionCollectionsNavItem')) {
        const button: HTMLElement = target.closest('.sectionCollectionsNavItem')
        const indexToSet = parseInt(button.getAttribute('data-index'))
        const sectionCollections: HTMLElement = button.closest('.sectionCollections')
        const navButtons: HTMLElement[] = Array.from(sectionCollections.querySelectorAll('.sectionCollectionsNavItem'))
        swiperCollections.slideTo(indexToSet)
        navButtons.forEach((el, index) => {
          el.classList.remove('_active')
          if (index === indexToSet) el.classList.add('_active')
        })
      }
    })
  },
  {
    passive: true,
    once:
      true,
  }
)
