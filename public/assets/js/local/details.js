class Details {
  static optionsDefault = {
    preferButtonIfExist: true,
    selectors: {
      details: '[data-details=details]',
      summary: '[data-details=summary]',
      button: '[data-details=button]',
      content: '[data-details=body]',
      scrollbars: { vertical: 'has-vertical-scrollbar' },
    },
    disableAfter: null,
  }

  elements = []
  durationMin = 250
  durationMax = 500
  durationPerHeight = 0.5
  easing = 'ease-in-out'

  constructor(optionsCustom = {}) {
    this.selectors = {
      ...Details.optionsDefault.selectors,
      ...optionsCustom.selectors,
    }
    this.options = {
      ...Details.optionsDefault,
      ...optionsCustom,
    }
    this.onClick = this.handleClick.bind(this)
    this.onResize = this.handleResize.bind(this)
  }

  init() {
    this.updateListeners()
    this.updateElements()
  }

  updateElements() {
    const details = Array.from(document.body.querySelectorAll(this.selectors.details))
    if (details.length) this.elements = this.updateElementsData(details)
  }

  openAll() {
    this.elements.forEach((element) => {
      element.parameters.isOpen = element.details.classList.contains('open')
      if (!element.parameters.isOpen) this.expand(element)
    })
  }

  collapseAll() {
    this.elements.forEach((element) => {
      element.parameters.isOpen = element.details.classList.contains('open')
      if (element.parameters.isOpen) this.shrink(element)
    })
  }

  calculateDuration(startHeight, endHeight) {
    let duration = this.durationMin + Math.abs(endHeight - startHeight) * this.durationPerHeight
    return Math.min(Math.round(duration), this.durationMax)
  }

  expand(data) {
    data.parameters.isOpening = true
    data.details.classList.add('is-opening')
    data.content.classList.add('is-opening')

    const startHeight = `${ data.details.offsetHeight }px`
    const endHeight = `${ data.summary.offsetHeight + data.content.offsetHeight }px`

    data.parameters.animation?.cancel()
    data.parameters.animation = data.details.animate({ height: [startHeight, endHeight] }, {
      duration: this.calculateDuration(data.details.offsetHeight, data.summary.offsetHeight + data.content.offsetHeight),
      easing: this.easing,
    })

    data.parameters.animation.onfinish = () => this.onAnimationFinish(data, true)
    data.parameters.animation.oncancel = () => data.parameters.isOpening = false
  }

  shouldDisable() {
    return window.matchMedia(`(min-width: ${ this.options.disableAfter }px)`).matches
  }

  disable() {
    if (this.shouldDisable()) {
      this.openAll()
    }
  }

  handleClick(event) {
    const target = event.target
    const condition = target.closest(this.selectors.summary) || target.closest(this.selectors.button)

    if (condition && !target.closest('a[href]')) {
      event.preventDefault()
      const summary = target.closest(this.selectors.summary)
      const data = this.elements.find((data) => data.summary === summary)

      data.details.style.overflow = 'hidden'
      if (data.parameters.isClosing || !data.parameters.isOpen) {
        this.open(data)
      } else if (data.parameters.isOpening || data.parameters.isOpen) {
        this.shrink(data)
      }
    }
  }

  handleResize() {
    this.updateClickListeners()
  }

  hasVerticalScrollbar(element) {
    return element.scrollHeight > element.clientHeight
  }

  onAnimationFinish(data, open) {
    data.details.open = open
    data.parameters.isOpen = open
    data.parameters.animation = null
    data.parameters.isClosing = false
    data.parameters.isOpening = false
    data.details.style.height = ''
    data.details.style.overflow = ''
    this.setupScrollbarStyles(data.details)
    this.updateDetailsStyles(data.details, open)
    this.updateDetailsStyles(data.content, open)
    data.content.classList.remove('is-closing', 'is-opening')
    data.details.classList.remove('is-closing', 'is-opening')
  }

  open(data) {
    data.details.style.height = `${ data.details.offsetHeight }px`
    data.details.open = true
    requestAnimationFrame(() => this.expand(data))
  }

  setupScrollbarStyles(element) {
    element.classList.toggle(this.selectors.scrollbars.vertical, this.hasVerticalScrollbar(element))
  }

  shrink(data) {
    data.parameters.isClosing = true
    data.details.classList.add('is-closing')
    data.content.classList.add('is-closing')

    const startHeight = `${ data.details.offsetHeight }px`
    const endHeight = `${ data.summary.offsetHeight }px`

    data.parameters.animation?.cancel()
    data.parameters.animation = data.details.animate({ height: [startHeight, endHeight] }, {
      duration: this.calculateDuration(data.details.offsetHeight, data.summary.offsetHeight),
      easing: this.easing,
    })

    data.parameters.animation.onfinish = () => this.onAnimationFinish(data, false)
    data.parameters.animation.oncancel = () => data.parameters.isClosing = false
  }

  updateClickListeners() {
    document.removeEventListener('click', this.onClick)
    if (this.options.disableAfter !== null && this.shouldDisable()) {
      this.openAll()
    } else {
      document.addEventListener('click', this.onClick)
    }
  }

  updateDetailsStyles(element, isOpen) {
    element.classList.toggle('open', isOpen)
  }

  updateElementsData(elements) {
    return elements.map((element) => {
      const isOpen = element.classList.contains('open') || element.hasAttribute('open')
      const content = element.querySelector(this.selectors.content)
      if (isOpen) content.classList.add('open')

      return {
        details: element,
        summary: element.querySelector(this.selectors.summary),
        button: element.querySelector(this.selectors.button),
        content,
        parameters: { isOpen, isClosing: false, isOpening: false },
      }
    })
  }

  updateListeners() {
    window.removeEventListener('resize', this.onResize)
    window.addEventListener('resize', this.onResize)
    this.updateClickListeners()
  }
}
