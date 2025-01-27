class Modals {
  static events = {
    beforeOpen: 'modalBeforeOpen',
    open: 'modalOpen',
    beforeClose: 'modalBeforeClose',
    close: 'modalClose',
  }

  static DEFAULT_OPTIONS = {
    selectors: {
      modal: '[data-modal]',
      buttonOpen: '[data-modal-open]',
      buttonClose: '[data-modal-close]',
      buttonToggle: '[data-modal-toggle]',
      header: 'header',
      overlay: modalName => `[data-modal-overlay=${ modalName }]`,
    },
    transition: {
      duration: 333,
      style() {
        return `all ${ this.duration }ms`
      },
    },
  }

  parameters = { current: null }
  options = { ...Modals.DEFAULT_OPTIONS }

  constructor() {
    this.onBeforeOpen = this.beforeOpenHandler.bind(this)
    this.onOpen = this.openHandler.bind(this)
    this.onBeforeClose = this.beforeCloseHandler.bind(this)
    this.onClose = this.closeHandler.bind(this)
    this.onClick = this.handleClick.bind(this)
    this.onKeyUp = this.handleKeyUp.bind(this)
  }

  init() {
    this.update()
    const activeModals = Array.from(document.querySelectorAll(`${ this.options.selectors.modal }._active`))
    activeModals.forEach(modal => this.activateModal(modal))
  }

  update() {
    document.documentElement.style.setProperty('--modal-transition', this.options.transition.style())
    this.manageEventListeners('remove')
    this.manageEventListeners('add')
  }

  activateModal(modal, trigger) {
    const modalName = this.getModalName(modal)
    const modalOverlay = this.getModalOverlay(modalName)
    this.throwEvent(modal, Modals.events.beforeOpen, { trigger })
    this.onBeforeOpen()
    modal.classList.add('_active')
    modalOverlay.classList.add('_active')
    this.parameters.current = modal
    this.onOpen()
    this.throwEvent(modal, Modals.events.open, { trigger })
  }

  deactivateModal(modal, trigger) {
    const modalName = this.getModalName(modal)
    const modalOverlay = this.getModalOverlay(modalName)
    this.throwEvent(modal, Modals.events.beforeClose, { trigger })
    this.onBeforeClose()
    modal.classList.remove('_active')
    modalOverlay.classList.remove('_active')
    this.parameters.current = null
    this.onClose()
    this.throwEvent(modal, Modals.events.close, { trigger })
  }

  toggleModal(modal, trigger) {
    const currentModal = this.parameters.current
    if (currentModal && this.getModalName(currentModal) !== this.getModalName(modal)) {
      this.deactivateModal(currentModal)
      this.activateModal(modal, trigger)
    } else if (currentModal && this.getModalName(currentModal) === this.getModalName(modal)) {
      this.deactivateModal(modal)
    } else {
      this.activateModal(modal, trigger)
    }
  }

  getOS() {
    if (typeof window === 'undefined' || !window.navigator) return 'Unknown'
    const platform = window.navigator.platform.toLowerCase()
    const userAgent = window.navigator.userAgent.toLowerCase()
    const platforms = {
      macintosh: 'Mac OS',
      macintel: 'Mac OS',
      iphone: 'iOS',
      ipad: 'iOS',
      ipod: 'iOS',
      win32: 'Windows',
      win64: 'Windows',
      linux: 'Linux',
    }
    if (/android/.test(userAgent)) return 'Android'
    return platforms[platform] || 'Unknown'
  }

  handleClick(event) {
    const target = event.target
    const { buttonOpen, buttonClose, buttonToggle } = this.options.selectors
    const button = target.closest(`${ buttonOpen }, ${ buttonClose }, ${ buttonToggle }`)

    if (button) {
      if (button.matches(buttonOpen)) {
        const modalName = button.getAttribute('data-modal-open')
        if (!modalName) return
        const modal = this.findModalByAttribute(modalName)
        if (modal) this.activateModal(modal, button)
      } else if (button.matches(buttonClose)) {
        const modalName = button.getAttribute('data-modal-close') || button.closest('[data-modal]')?.getAttribute('data-modal')
        if (!modalName) return
        const modal = this.findModalByAttribute(modalName)
        if (modal) this.deactivateModal(modal, button)
      } else if (button.matches(buttonToggle)) {
        const modalName = button.getAttribute('data-modal-toggle')
        if (!modalName) return
        const modal = this.findModalByAttribute(modalName)
        if (modal) this.toggleModal(modal, button)
      }
    }

    const overlay = target.closest('[data-modal-overlay]')
    if (overlay) {
      const modalName = overlay.getAttribute('data-modal-overlay')
      if (!modalName) return
      const modal = this.findModalByAttribute(modalName)
      if (modal) this.deactivateModal(modal)
    }
  }

  handleKeyUp(event) {
    if (event.code === 'Escape' && this.parameters.current) {
      this.deactivateModal(this.parameters.current)
    }
  }

  manageEventListeners(action) {
    const method = action === 'add' ? 'addEventListener' : 'removeEventListener'
    document[method]('click', this.onClick, { passive: true })
    document[method]('keyup', this.onKeyUp, { passive: true })
  }

  getModalOverlay(modalName) {
    return document.body.querySelector(this.options.selectors.overlay(modalName))
  }

  getModalName(modal) {
    return modal.getAttribute('data-modal')?.trim() || ''
  }

  findModalByAttribute(attribute) {
    return document.body.querySelector(`[data-modal=${ attribute }]`)
  }

  throwEvent(element, name, detail) {
    const event = new CustomEvent(name, { bubbles: true, detail })
    element.dispatchEvent(event)
  }

  beforeOpenHandler() {
  }

  openHandler() {
    // if (this.getOS() !== 'iOS') {
    //   disableBodyScroll(document.body)
    // }
  }

  beforeCloseHandler() {
  }

  closeHandler() {
    // setTimeout(() => {
    //   enableBodyScroll(document.body)
    // }, this.options.transition.duration)
  }
}

document.addEventListener('DOMContentLoaded', () => {
    const modals = new Modals()
    modals.init()
  },
  {
    passive: true,
    once: true,
  })
