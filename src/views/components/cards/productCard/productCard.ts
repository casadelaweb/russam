import Swiper from 'swiper'
import { Pagination } from 'swiper/modules'
import { throttle, isArray } from 'es-toolkit/compat'

document.addEventListener('DOMContentLoaded', () => {
    const productCards: Swiper | Swiper[] = new Swiper('.productCardSlider', {
      modules: [Pagination],
      loop: true,
      speed: 500,
      grabCursor: false,
      slidesPerView: 1,
      spaceBetween: 12,
      mousewheel: false,
      watchSlidesProgress: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    })

    let isMediaAboveLaptop = window.matchMedia('(min-width: 1180px)').matches
    let isAnyPointerFine = window.matchMedia('(any-pointer: fine)').matches

    function updateMediaQueries(): void {
      isMediaAboveLaptop = window.matchMedia('(min-width: 1180px)').matches
      isAnyPointerFine = window.matchMedia('(any-pointer: fine)').matches
    }

    window.addEventListener('resize', updateMediaQueries)

    function handleMouseMove(swiper: Swiper) {
      return function (event: MouseEvent): void {
        if (!isMediaAboveLaptop || !isAnyPointerFine) return

        const sliderWidth: number = swiper.el.offsetWidth
        const parts: number = swiper.slides.length
        const partWidth: number = sliderWidth / parts
        const scrolledToRight: number =
          event.clientX - swiper.el.getBoundingClientRect().x
        const currentPart: number = Math.floor(
          (sliderWidth - scrolledToRight) / partWidth
        )
        const slideIndex: number = parts - currentPart - 1
        swiper.slideTo(slideIndex)
      }
    }

    function throttledMouseMove(swiper: Swiper) {
      return throttle(handleMouseMove(swiper), 100)
    }

    if (isArray(productCards)) {
      productCards.forEach(function (swiper: Swiper): void {
        swiper.el.addEventListener('mousemove', throttledMouseMove(swiper))
      })
    } else if (productCards.slides.length > 0) {
      productCards.el.addEventListener('mousemove', throttledMouseMove(productCards))
    }
  },
  {
    passive: true,
    once: true,
  }
)
