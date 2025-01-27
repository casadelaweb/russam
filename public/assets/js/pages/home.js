document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionHeroSlider', {
      loop: true,
      speed: 1000,
      rewind: false,
      effect: 'slide',
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
    })
  },
  {
    passive: true,
    once: true,
  })

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionCategoriesSlider', {
      navigation: {
        prevEl: '.swiper-button-prev',
        nextEl: '.swiper-button-next',
        enabled: true,
      },
      slidesPerView: 1.56,
      spaceBetween: 10,
      effect: 'slide',
      speed: 1000,
      freeMode: true,
      centeredSlides: false,
      grabCursor: true,
      breakpoints: {
        375: {
          spaceBetween: 12,
        },
        540: {
          slidesPerView: 3,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 4.7,
        },
      }
    })
  },
  {
    passive: true,
    once: true,
  })

document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.sectionProductsSlider', {
      freeMode: true,
      scrollbar: {
        el: '.swiper-scrollbar',
        enabled: true,
      },
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
      },
      // on: {
      //   slideChange(swiper) {
      //     const gradient = swiper.el.querySelector('.sectionProductsSliderGradient')
      //     if (swiper.isEnd && gradient) {
      //       gradient.classList.add('_disabled')
      //     } else {
      //       gradient?.classList.remove('_disabled')
      //     }
      //   }
      // }
    })
  },
  {
    passive: true,
    once: true,
  })

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body
    const collectionElements = Array.from(body.querySelectorAll('.sectionCollectionsSliders'))
    let swiperCollections
    let swiperGroups = []
    let swiperNames = []

    collectionElements.forEach((collectionElement) => {
      swiperCollections = new Swiper(collectionElement, {
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

      const groupElements = Array.from(collectionElement.querySelectorAll('.sectionCollectionsSlider'))
      groupElements.forEach((groupElement, index) => {
        const prevButton = groupElement.querySelector('.swiper-button-prev')
        const nextButton = groupElement.querySelector('.swiper-button-next')

        const slider = new Swiper(groupElement, {
          speed: 333,
          loop: false,
          watchSlidesProgress: true,
          slideToClickedSlide: true,
          effect: 'slide',
          slidesPerView: 1,
          spaceBetween: 10,
          navigation: {
            enabled: true,
            prevEl: prevButton,
            nextEl: nextButton
          },
          breakpoints: {
            375: { slidesPerView: 1.1 },
            540: { slidesPerView: 1.5 },
            768: { slidesPerView: 2.5 },
            1024: { slidesPerView: 3 },
            1180: { slidesPerView: 3.5 },
            1440: {
              //speed: 0,
              slidesPerView: 1,
              spaceBetween: 40,
              effect: 'fade',
              fadeEffect: { crossFade: true }
            },
          },
          on: {
            slideChange(swiper) {
              swiperNames[index].slideTo(swiper.activeIndex)
              swiperNames[index].slides.forEach((slide, idx) => {
                const name = slide.querySelector('.sectionCollectionsName')
                slide.classList.toggle('_active', idx === swiper.activeIndex)
                name?.classList.toggle('_active', idx === swiper.activeIndex)
              })
            },
          },
        })
        swiperGroups.push(slider)
      })

      const nameElements = Array.from(collectionElement.querySelectorAll('.sectionCollectionsNames'))
      nameElements.forEach((nameElement, index) => {
        swiperNames.push(
          new Swiper(nameElement, {
            speed: 333,
            loop: false,
            thumbs: { swiper: swiperGroups[index] },
            centeredSlides: true,
            direction: 'vertical',
            effect: 'slide',
            slidesPerView: 'auto',
            spaceBetween: 0,
            slideToClickedSlide: true,
            grabCursor: true,
          })
        )
      })
    })

    function calcSlideTitleOffset() {
      const titles = Array.from(body.querySelectorAll('.sectionCollectionsSlideTitle'))
      titles.forEach((el) => {
        const height = el.offsetHeight
        const marginTop = Math.max(-180, Math.min(-( height * 0.33 ), -16))
        el.style.marginTop = `${ Math.floor(marginTop) }px`
      })
    }

    calcSlideTitleOffset()
    window.addEventListener('resize', calcSlideTitleOffset)

    document.body.addEventListener('click', (event) => {
      const target = event.target.closest('.sectionCollectionsNavItem')
      if (target) {
        const indexToSet = parseInt(target.getAttribute('data-index'))
        const sectionCollections = target.closest('.sectionCollections')
        const navButtons = Array.from(sectionCollections.querySelectorAll('.sectionCollectionsNavItem'))
        swiperCollections.slideTo(indexToSet)
        navButtons.forEach((el, idx) => el.classList.toggle('_active', idx === indexToSet))
      }
    })
  },
  {
    passive: true,
    once: true
  })

document.addEventListener('DOMContentLoaded', () => {
  const $benefitsParent = document.body.querySelector('.sectionBenefits')
  if ($benefitsParent) {
    function benefitsSliderSetActive(index) {
      $benefitsParent.querySelectorAll('._active').forEach((el) => {
        el.classList.remove('_active')
      })
      $benefitsParent.querySelectorAll(`[data-index="${ index }"`).forEach((el) => {
        el.classList.add('_active')
      })
    }

    const benefitsFooterBtns = new Swiper('.sectionBenefitsFooterBtns', {
      slidesPerView: 'auto',
      spaceBetween: 4,
      centeredSlides: false,
      initialSlide: 2,
      on: {
        slideChange(swiper) {
          benefitsSliderSetActive(swiper.activeIndex)
        }
      }
    })
    $benefitsParent.addEventListener('click', (event) => {
      const target = event.target
      if (target.closest('[data-index]')) {
        const btn = target.closest('[data-index]')
        benefitsSliderSetActive(+btn.dataset.index)
        benefitsFooterBtns.slideTo(+btn.dataset.index)
      }
    })
  }
}, {
  passive: true,
  once: true
})


document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  let sliderMain = null
  let isSyncing = false
  const sliderHead = new Swiper('.sectionAboutHeadSlider', {
    speed: 1000,
    watchSlidesProgress: true,
    noSwiping: true,
    allowTouchMove: false,
    slidesPerView: 1,
    loop: true,
    spaceBetween: 16,
    effect: 'creative',
    creativeEffect: {
      prev: {
        translate: [
          0,
          0,
          -400
        ],
        opacity: 0,
        scale: 0.5
      },
      next: {
        translate: [
          '100%',
          0,
          0
        ],
        opacity: 0,
        scale: 1
      }
    },
    on: {
      slideChange(swiper) {
        if (!isSyncing && sliderMain !== null) {
          isSyncing = true
          sliderMain.slideTo(swiper.realIndex)
          updateNavButtons(swiper.realIndex, swiper.el)
          isSyncing = false
        }
      }
    }
  })
  sliderMain = new Swiper('.sectionAboutTabs', {
    speed: 1000,
    spaceBetween: 16,
    slidesPerView: 1,
    noSwiping: true,
    allowTouchMove: false,
    loop: true,
    thumbs: {
      swiper: sliderHead
    },
    on: {
      slideChange(swiper) {
        if (!isSyncing && sliderHead !== null) {
          isSyncing = true
          sliderHead.slideTo(swiper.realIndex)
          updateNavButtons(swiper.realIndex, swiper.el)
          isSyncing = false
        }
      }
    }
  })
  body.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.sectionAboutNavItem')) {
      const button = target.closest('.sectionAboutNavItem')
      const indexToSet = parseInt(button.getAttribute('data-index'))
      const sectionAbout = button.closest('.sectionAbout')
      const navButtons = Array.from(sectionAbout.querySelectorAll('.sectionAboutNavItem'))
      sliderHead.slideTo(indexToSet)
      sliderMain.slideTo(indexToSet)
      navButtons.forEach((el, index) => {
        el.classList.remove('_active')
        if (index === indexToSet) el.classList.add('_active')
      })
    }
  })

  function updateNavButtons(activeIndex, container) {
    const sectionAbout = container.closest('.sectionAbout')
    const navButtons = Array.from(sectionAbout.querySelectorAll('.sectionAboutNavItem'))
    navButtons.forEach((button) => {
      const index = parseInt(button.getAttribute('data-index'))
      button.classList.toggle('_active', index === activeIndex)
    })
  }
}, {
  passive: true,
  once: true
})





