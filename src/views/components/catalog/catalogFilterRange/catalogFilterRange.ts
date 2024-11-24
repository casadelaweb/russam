import * as noUiSlider from 'nouislider'
import { API } from 'nouislider/dist/nouislider'

interface SliderElement extends HTMLElement {
  noUiSlider: API;
}

function prepareValue(value: string): number {
  return parseInt(value.trim())
}

function getDefaultMin(slider: SliderElement): number {
  return prepareValue(slider.getAttribute('data-min'))
}

function getDefaultMax(slider: SliderElement): number {
  return prepareValue(slider.getAttribute('data-max'))
}

function formatNumber(value: number): string {
  return value.toLocaleString()
}

function parseFormattedNumber(value: string): number {
  return parseInt(value.replace(/\D/g, ''), 10)
}

function initializeSlider(slider: SliderElement, inputMin: HTMLInputElement, inputMax: HTMLInputElement) {
  const getMin = () => slider.getAttribute('data-min') ? prepareValue(slider.getAttribute('data-min')) : 0
  const getMax = () => slider.getAttribute('data-max') ? prepareValue(slider.getAttribute('data-max')) : 100

  noUiSlider.create(slider, {
    start: [getMin(), getMax()],
    step: 1,
    connect: true,
    range: {
      min: getMin(),
      max: getMax(),
    },
  })

  setupSliderUpdate(slider, inputMin, inputMax)
  setupInputListeners(slider, inputMin, inputMax)
}

function setupSliderUpdate(slider: SliderElement, inputMin: HTMLInputElement, inputMax: HTMLInputElement) {
  slider.noUiSlider.on('update', (values, handle) => {
    const value = parseInt(<string>values[handle])
    if (handle === 0) {
      inputMin.value = formatNumber(value)
    } else {
      inputMax.value = formatNumber(value)
    }
  })
}

function setupInputListeners(slider: SliderElement, inputMin: HTMLInputElement, inputMax: HTMLInputElement) {
  let typingTimerMin: ReturnType<typeof setTimeout>
  let typingTimerMax: ReturnType<typeof setTimeout>
  const delay: number = 500

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

function updateSliderFromInputs(slider: SliderElement, inputMin: HTMLInputElement, inputMax: HTMLInputElement) {
  const minValue = parseFormattedNumber(inputMin.value)
  const maxValue = parseFormattedNumber(inputMax.value)
  if (!isNaN(minValue) && !isNaN(maxValue)) {
    slider.noUiSlider.set([minValue, maxValue])
  }
}

function resetFilters(sliders: SliderElement[]) {
  sliders.forEach((slider) => {
    const filter = slider.closest('.catalogFilter') as HTMLElement
    const inputMin = filter.querySelector('[data-catalog-filter=input-min]') as HTMLInputElement
    const inputMax = filter.querySelector('[data-catalog-filter=input-max]') as HTMLInputElement

    slider.noUiSlider.reset()
    slider.noUiSlider.set([getDefaultMin(slider), getDefaultMax(slider)])

    setTimeout(() => {
      inputMin.value = formatNumber(getDefaultMin(slider))
      inputMax.value = formatNumber(getDefaultMax(slider))
    }, 100)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const sliders = Array.from(document.querySelectorAll('[data-catalog-filter=range]')) as SliderElement[]

  sliders.forEach((slider) => {
    const filter = slider.closest('.catalogFilter') as HTMLElement
    const inputMin = filter.querySelector('[data-catalog-filter=input-min]') as HTMLInputElement
    const inputMax = filter.querySelector('[data-catalog-filter=input-max]') as HTMLInputElement

    initializeSlider(slider, inputMin, inputMax)
  })

  document.body.addEventListener('click', (event) => {
    const target = event.target as HTMLElement
    if (target.closest('.catalogFiltersReset')) {
      resetFilters(sliders)
    }
  }, {
    passive: true,
  })
}, {
  passive: true,
  once: true,
})
