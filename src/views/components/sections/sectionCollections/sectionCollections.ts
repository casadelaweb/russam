import Swiper from 'swiper'
import { EffectCreative, EffectFade, FreeMode, Navigation, Thumbs } from 'swiper/modules'

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
        slideToClickedSlide: true,
      })

      const groupElements: HTMLElement[] = Array.from(collectionElement.querySelectorAll('.sectionCollectionsSlider'))
      groupElements.forEach((groupElement, index) => {
        const prevButtons: HTMLElement[] = Array.from(groupElement.querySelectorAll('.sectionCollectionsSlideButtonPrev'))
        const nextButtons: HTMLElement[] = Array.from(groupElement.querySelectorAll('.sectionCollectionsSlideButtonNext'))

        swiperGroups.push(new Swiper(groupElement, {
            modules: [Navigation, EffectFade, Thumbs],
            speed: 1000,
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
                effect: 'fade',
                slidesPerView: 1,
                spaceBetween: 40,
                fadeEffect: {
                  crossFade: true,
                },
              }
            },
            on: {
              slideChange(swiper) {
                swiperNames[index].slideTo(swiper.activeIndex)

                if (swiper.isBeginning) {
                  prevButtons.forEach((button) => {
                    button.setAttribute('disabled', 'disabled')
                  })
                } else if (swiper.isEnd) {
                  nextButtons.forEach((button) => {
                    button.setAttribute('disabled', 'disabled')
                  })
                } else {
                  prevButtons.forEach((button) => {
                    button.removeAttribute('disabled')
                  })
                  nextButtons.forEach((button) => {
                    button.removeAttribute('disabled')
                  })
                }
              },
            },
          })
        )
      })

      const nameElements: HTMLElement[] = Array.from(collectionElement.querySelectorAll('.sectionCollectionsNames'))
      nameElements.forEach((nameElement, index) => {
        swiperNames.push(new Swiper(nameElement, {
          modules: [Thumbs],
          thumbs: {
            swiper: swiperGroups[index],
          },
          direction: 'vertical',
          effect: 'slide',
          slidesPerView: 'auto',
          spaceBetween: 20,
          slideToClickedSlide: true,
        }))
      })
    })

    function calcSlideTitleOffset() {
      const titles = Array.from(body.querySelectorAll('.sectionCollectionsSlideTitle'))
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

      if (target.closest('.sectionCollectionsSlideButtonNext')) {
        const button: HTMLElement = target.closest('.sectionCollectionsSlideButtonNext')
        const index = parseInt(button.getAttribute('data-index'))
        swiperGroups[index].slideNext()
      } else if (target.closest('.sectionCollectionsSlideButtonPrev')) {
        const button: HTMLElement = target.closest('.sectionCollectionsSlideButtonPrev')
        const index = parseInt(button.getAttribute('data-index'))
        swiperGroups[index].slidePrev()
      }
    })
  },
  {
    passive: true,
    once:
      true,
  }
)
