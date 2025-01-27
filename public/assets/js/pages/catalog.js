document.addEventListener('DOMContentLoaded', () => {
  const detailsCatalogFilter = new Details({
    preferButtonIfExist: true,
    selectors: {
      details: '.catalogFilter',
      summary: '.catalogFilterSummary',
      button: '.catalogFilterButton',
      content: '.catalogFilterBody',
      scrollbars: { vertical: 'has-verticalScrollbar', },
    },
    disableAfter: null,
  })
  detailsCatalogFilter.init()
}, {
  passive: true,
  once: true,
})

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  body.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.catalogNavTabMore')) {
      const parent = target.closest('.catalogNavTabs')
      const parentHidden = parent.querySelector('.catalogNavTabsHidden')
      const button = target.closest('.catalogNavTabMore')
      parent.classList.toggle('_active')
      parentHidden.classList.toggle('_active')
      button.classList.toggle('_active')
    }
  }, {
    passive: true
  })
}, {
  passive: true,
  once: true
})

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body
  const form = body.querySelector('.catalogFilters')
  if (!form) return
  const inputs = Array.from(form.querySelectorAll('.catalogFilterInput'))
  const tooltip = body.querySelector('.catalogFiltersTooltip')

  function setLeft() {
    tooltip.style.left = Math.floor(form.getBoundingClientRect().width + form.getBoundingClientRect().left) + 'px'
  }

  function hide() {
    tooltip.classList.remove('_active')
  }

  function handleChange(event) {
    const input = event.target
    tooltip.style.top = Math.floor(input.getBoundingClientRect().top) + 'px'
    setLeft()
    tooltip.classList.add('_active')
  }

  inputs.forEach((input) => {
    input.addEventListener('change', handleChange)
    input.addEventListener('input', handleChange)
    input.addEventListener('blue', handleChange)
  })
  setLeft()
  hide()
  window.addEventListener('scroll', hide, {
    passive: true
  })
  window.addEventListener('resize', () => {
    hide()
    setLeft()
  }, {
    passive: true
  })
  body.addEventListener('click', (event) => {
    const target = event.target
    hide()
    if (target.closest('.catalogSortSummary')) {
      const sort = target.closest('.catalogSort')
      const list = sort.querySelector('.catalogSortList')
      const overlay = document.body.querySelector('.catalogSortOverlay')
      list.classList.toggle('_active')
      overlay.classList.toggle('_active')
    }
    if (target.closest('.catalogSortItem')) {
      const sort = target.closest('.catalogSort')
      const current = sort.querySelector('.catalogSortCurrent')
      current.textContent = target.closest('.catalogSortItem').textContent.trim().toLowerCase()
      setTimeout(() => {
        const overlay = body.querySelector('.catalogSortOverlay')
        const list = sort.querySelector('.catalogSortList')
        overlay.classList.remove('_active')
        list.classList.remove('_active')
      }, 150)
    }
    if (!target.closest('.catalogSort')) {
      const elements = Array.from(body.querySelectorAll('.catalogSort'))
      elements.forEach((sort) => {
        const overlay = body.querySelector('.catalogSortOverlay')
        const list = sort.querySelector('.catalogSortList')
        overlay.classList.remove('_active')
        sort.classList.remove('_active')
        list.classList.remove('_active')
      })
    }
  })
}, {
  passive: true,
  once: true
})

document.addEventListener('DOMContentLoaded', () => {
  function prepareValue(value) {
    return parseInt(value.trim())
  }

  function getDefaultMin(slider) {
    return prepareValue(slider.getAttribute('data-min'))
  }

  function getDefaultMax(slider) {
    return prepareValue(slider.getAttribute('data-max'))
  }

  function formatNumber(value) {
    return value.toLocaleString()
  }

  function parseFormattedNumber(value) {
    return parseInt(value.replace(/\D/g, ''), 10)
  }

  function initializeSlider(slider, inputMin, inputMax) {
    const getMin = () => slider.getAttribute('data-min') ? prepareValue(slider.getAttribute('data-min')) : 0
    const getMax = () => slider.getAttribute('data-max') ? prepareValue(slider.getAttribute('data-max')) : 100
    noUiSlider.create(slider, {
      start: [
        getMin(),
        getMax()
      ],
      step: 1,
      connect: true,
      range: {
        min: getMin(),
        max: getMax()
      }
    })
    setupSliderUpdate(slider, inputMin, inputMax)
    setupInputListeners(slider, inputMin, inputMax)
  }

  function setupSliderUpdate(slider, inputMin, inputMax) {
    slider.noUiSlider.on('update', (values, handle) => {
      const value = parseInt(values[handle])
      if (handle === 0) {
        inputMin.value = formatNumber(value)
      } else {
        inputMax.value = formatNumber(value)
      }
    })
  }

  function setupInputListeners(slider, inputMin, inputMax) {
    let typingTimerMin
    let typingTimerMax
    const delay = 500
    inputMin.addEventListener('keyup', () => {
      clearTimeout(typingTimerMin)
      typingTimerMin = setTimeout(() => {
        updateSliderFromInputs(slider, inputMin, inputMax)
      }, delay)
    })
    inputMax.addEventListener('keyup', () => {
      clearTimeout(typingTimerMax)
      typingTimerMax = setTimeout(() => {
        updateSliderFromInputs(slider, inputMin, inputMax)
      }, delay)
    })
  }

  function updateSliderFromInputs(slider, inputMin, inputMax) {
    const minValue = parseFormattedNumber(inputMin.value)
    const maxValue = parseFormattedNumber(inputMax.value)
    if (!isNaN(minValue) && !isNaN(maxValue)) {
      slider.noUiSlider.set([
        minValue,
        maxValue
      ])
    }
  }

  function resetFilters(sliders) {
    sliders.forEach((slider) => {
      const filter = slider.closest('.catalogFilter')
      const inputMin = filter.querySelector('[data-catalog-filter=input-min]')
      const inputMax = filter.querySelector('[data-catalog-filter=input-max]')
      slider.noUiSlider.reset()
      slider.noUiSlider.set([
        getDefaultMin(slider),
        getDefaultMax(slider)
      ])
      setTimeout(() => {
        inputMin.value = formatNumber(getDefaultMin(slider))
        inputMax.value = formatNumber(getDefaultMax(slider))
      }, 100)
    })
  }

  const sliders = Array.from(document.querySelectorAll('[data-catalog-filter=range]'))
  sliders.forEach((slider) => {
    const filter = slider.closest('.catalogFilter')
    const inputMin = filter.querySelector('[data-catalog-filter=input-min]')
    const inputMax = filter.querySelector('[data-catalog-filter=input-max]')
    initializeSlider(slider, inputMin, inputMax)
  })
  document.body.addEventListener('click', (event) => {
    const target = event.target
    if (target.closest('.catalogFiltersReset')) {
      resetFilters(sliders)
    }
  }, {
    passive: true
  })
}, {
  passive: true,
  once: true
})

/** пример простого скрипта для поиска вариантов в компоненте catalogFilter */
document.addEventListener('DOMContentLoaded', () => {

  /** простая функция для поиска подстроки в строке */
  function hasMatch(haystack, needle) {
    return haystack.trim().toLowerCase().includes(needle.trim().toLowerCase())
  }

  const searchElements = document.body.querySelectorAll('.catalogFilterSearch')
  searchElements.forEach((searchElement) => {
    const filter = searchElement.closest('.catalogFilter')
    const searchInput = searchElement.querySelector('.catalogFilterSearchInput')
    const options = filter.querySelectorAll('[data-search=label]')

    searchInput.addEventListener('input', () => {
      /** получаем поисковый запрос */
      const value = searchInput.value.trim().toLowerCase()

      options.forEach((option) => {
        const input = option.querySelector('[data-search=input]')
        const title = option.querySelector('[data-search=title]')
        console.log(option, input, title)

        if (value.length === 0) {
          /** если поисковый запрос пустой, показываем все */
          input.disabled = false
          option.style = ''
        } else if (hasMatch(title.textContent, value) || hasMatch(input.value, value)) {
          /** если запрос не пустой и есть совпадение */
          input.disabled = false
          option.style = ''
        } else {
          /** если запрос не пустой и нет совпадений */
          input.disabled = true
          option.style = 'display: none;'
        }
      })
    }, {
      passive: true,
    })
  })
}, {
  passive: true,
  once: true,
})


