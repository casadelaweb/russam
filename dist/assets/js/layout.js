/** глобальный объект _ это библиотека es-toolkit (более легковесный аналог lodash) */

document.addEventListener('DOMContentLoaded', function () {
  const body = document.body
  const header = body.querySelector('.header')

  if (!header) return

  const ACTIVE_CLASS = '_active'
  let isSmallScreen = !window.matchMedia('(min-width: 1180px)').matches

  function handleSmallScreenClick(target) {
    const parent = target.closest('.headerMenuParent')
    if (parent) parent.classList.add(ACTIVE_CLASS)

    if (target.closest('.headerMenuBtnBack')) {
      parent?.classList.remove(ACTIVE_CLASS)
    }

    if (target.closest('.headerMenuOpen')) {
      header.classList.add('_menu_open')
    }

    if (target.closest('.headerMenuClose')) {
      menuClose()
    }
  }

  function handleLargeScreenClick(target) {
    const parentL1 = target.closest('.headerMenuParentL1')
    if (parentL1 && !parentL1.classList.contains(ACTIVE_CLASS)) {
      clearHeaderActiveElements()
      header.classList.add('_menu_open')
      parentL1.classList.add(ACTIVE_CLASS)

      const parentL2 = parentL1.querySelector('.headerMenuParentL2')
      parentL2?.classList.add(ACTIVE_CLASS)
    }

    if (target.closest('.headerOverlay')) {
      menuClose()
    }
  }

  function handleHover(target, el) {
    const btnL2 = target.closest('.headerMenuBtnL2')
    if (btnL2 && !target.closest('.headerMenuChildrenL1LeftGold')) {
      el.querySelector(`.${ ACTIVE_CLASS }`)?.classList.remove(ACTIVE_CLASS)
      btnL2.closest('.headerMenuParentL2')?.classList.add(ACTIVE_CLASS)
    }
  }

  function clearHeaderActiveElements() {
    const activeElements = Array.from(header.querySelectorAll(`.${ ACTIVE_CLASS }`))
    activeElements.forEach(el => el.classList.remove(ACTIVE_CLASS))
  }

  function menuClose() {
    clearHeaderActiveElements()
    header.classList.remove('_menu_open')
  }

  header.addEventListener('click', function (event) {
    const target = event.target

    if (isSmallScreen) {
      handleSmallScreenClick(target)
    } else {
      handleLargeScreenClick(target)
    }
  })

  const headerMenuChildrenLeftAll = Array.from(header.querySelectorAll('.headerMenuChildrenL1Left'))

  headerMenuChildrenLeftAll.forEach(function (el) {
    el.addEventListener('mouseover', function (e) {
      if (!isSmallScreen) {
        handleHover(e.target, el)
      }
    })
  })

  const handleResize = _.debounce(function () {
    const currentIsSmallScreen = !window.matchMedia('(min-width: 1180px)').matches

    if (currentIsSmallScreen !== isSmallScreen) {
      isSmallScreen = currentIsSmallScreen

      if (!isSmallScreen) {
        menuClose()
      } else {
        clearHeaderActiveElements()
      }
    }
  }, 100)

  window.addEventListener('resize', handleResize)
}, {
  passive: true,
  once: true
})

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body

    const header = body.querySelector('.header')
    const height = header.offsetHeight
    const value = height + 'px'
    document.documentElement.style.setProperty('--headerHeight', value)
  },
  {
    passive: true,
    once: true,
  }
)

document.addEventListener('DOMContentLoaded', () => {
    const detailsFooter = new Details({
      preferButtonIfExist: true,
      selectors: {
        details: '.footerList',
        summary: '.footerListHead',
        button: '.footerListButton',
        content: '.footerListBody',
        scrollbars: { vertical: 'has-vertical-scrollbar', },
      },
      disableAfter: 1024,
    })

    detailsFooter.init()
  },
  {
    passive: true,
    once: true,
  })

document.addEventListener('DOMContentLoaded', () => {
  const productCards = new Swiper('.productCardSlider', {
    loop: true,
    speed: 500,
    grabCursor: false,
    slidesPerView: 1,
    spaceBetween: 12,
    mousewheel: false,
    watchSlidesProgress: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
  let isMediaAboveLaptop = window.matchMedia('(min-width: 1180px)').matches
  let isAnyPointerFine = window.matchMedia('(any-pointer: fine)').matches

  function updateMediaQueries() {
    isMediaAboveLaptop = window.matchMedia('(min-width: 1180px)').matches
    isAnyPointerFine = window.matchMedia('(any-pointer: fine)').matches
  }

  window.addEventListener('resize', updateMediaQueries)

  function handleMouseMove(swiper) {
    return function (event) {
      if (!isMediaAboveLaptop || !isAnyPointerFine) return
      const sliderWidth = swiper.el.offsetWidth
      const parts = swiper.slides.length
      const partWidth = sliderWidth / parts
      const scrolledToRight = event.clientX - swiper.el.getBoundingClientRect().x
      const currentPart = Math.floor(( sliderWidth - scrolledToRight ) / partWidth)
      const slideIndex = parts - currentPart - 1
      swiper.slideTo(slideIndex)
    }
  }

  function throttledMouseMove(swiper) {
    return _.throttle(handleMouseMove(swiper), 100)
  }

  if (_.isArray(productCards)) {
    productCards.forEach(function (swiper) {
      swiper.el.addEventListener('mousemove', throttledMouseMove(swiper))
    })
  } else if (productCards.slides.length > 0) {
    productCards.el.addEventListener('mousemove', throttledMouseMove(productCards))
  }
}, {
  passive: true,
  once: true
})
