import 'src/modules/modals/modals.scss'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

type TypeOS = 'Mac OS' | 'iOS' | 'Windows' | 'Android' | 'Linux' | 'Unknown';

type Options = {
  selectors: {
    buttonOpen: string;
    buttonToggle: string;
    buttonClose: string;
    header: string;
    modal: string;
    overlay: (modalName: string) => string;
  };
  transition: {
    duration: number;
    style: () => string;
  };
};

type Parameters = {
  current: HTMLElement | null;
};

class Modals {
  private static readonly events: Record<string, string> = {
    beforeOpen: 'modalBeforeOpen',
    open: 'modalOpen',
    beforeClose: 'modalBeforeClose',
    close: 'modalClose',
  }

  private static readonly DEFAULT_OPTIONS: Options = {
    selectors: {
      modal: '[data-modal]',
      buttonOpen: '[data-modal-open]',
      buttonClose: '[data-modal-close]',
      buttonToggle: '[data-modal-toggle]',
      header: 'header',
      overlay: (modalName: string) => `[data-modal-overlay=${ modalName }]`,
    },
    transition: {
      duration: 333,
      style: function (): string {
        return `all ${ this.duration }ms`
      },
    },
  }

  public parameters: Parameters
  public options: Options

  private readonly onBeforeOpen: () => void
  private readonly onOpen: () => void
  private readonly onBeforeClose: () => void
  private readonly onClose: () => void
  private readonly onClick: (event: MouseEvent) => void
  private readonly onKeyUp: (event: KeyboardEvent) => void

  constructor() {
    this.options = { ...Modals.DEFAULT_OPTIONS }

    this.parameters = { current: null }

    this.onBeforeOpen = this.beforeOpenHandler.bind(this)
    this.onOpen = this.openHandler.bind(this)
    this.onBeforeClose = this.beforeCloseHandler.bind(this)
    this.onClose = this.closeHandler.bind(this)

    this.onClick = this.handleClick.bind(this)
    this.onKeyUp = this.handleKeyUp.bind(this)
  }

  public init(): void {
    this.update()
    const activeModals: HTMLElement[] = Array.from(
      document.querySelectorAll(`${ this.options.selectors.modal }._active`)
    )
    activeModals.forEach((modal: HTMLElement) => this.activateModal(modal))
  }

  public update(): void {
    document.documentElement.style.setProperty('--modal-transition', this.options.transition.style())
    this.manageEventListeners('remove')
    this.manageEventListeners('add')
  }

  public activateModal(modal: HTMLElement, trigger?: HTMLElement): void {
    const modalName: string = this.getModalName(modal)
    const modalOverlay: HTMLElement = this.getModalOverlay(modalName)

    this.throwEvent(modal, Modals.events.beforeOpen, { trigger })
    this.onBeforeOpen()

    modal.classList.add('_active')
    modalOverlay.classList.add('_active')
    this.parameters.current = modal

    this.onOpen()
    this.throwEvent(modal, Modals.events.open, { trigger })
  }

  public deactivateModal(modal: HTMLElement, trigger?: HTMLElement): void {
    const modalName: string = this.getModalName(modal)
    const modalOverlay: HTMLElement = this.getModalOverlay(modalName)

    this.throwEvent(modal, Modals.events.beforeClose, { trigger })
    this.onBeforeClose()

    modal.classList.remove('_active')
    modalOverlay.classList.remove('_active')
    this.parameters.current = null

    this.onClose()
    this.throwEvent(modal, Modals.events.close, { trigger })
  }

  public toggleModal(modal: HTMLElement, trigger?: HTMLElement): void {
    const currentModal: HTMLElement | null = this.parameters.current
    if (currentModal && this.getModalName(currentModal) !== this.getModalName(modal)) {
      this.deactivateModal(currentModal)
      this.activateModal(modal, trigger)
    } else if (currentModal && this.getModalName(currentModal) === this.getModalName(modal)) {
      this.deactivateModal(modal)
    } else {
      this.activateModal(modal, trigger)
    }
  }

  public getOS(): TypeOS {
    if (typeof window === 'undefined' || !window.navigator) return 'Unknown'

    const platform: string = window.navigator.platform.toLowerCase()
    const userAgent: string = window.navigator.userAgent.toLowerCase()

    const platforms: Record<string, TypeOS> = {
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

  private handleClick(event: MouseEvent): void {
    const target: HTMLElement = event.target as HTMLElement
    const { buttonOpen, buttonClose, buttonToggle } = this.options.selectors

    const button: HTMLElement | null = target.closest(
      `${ buttonOpen }, ${ buttonClose }, ${ buttonToggle }`
    ) as HTMLElement

    if (button) {
      if (button.matches(buttonOpen)) {
        const modalName: string | null = button.getAttribute('data-modal-open')
        if (!modalName) return

        const modal: HTMLElement | null = this.findModalByAttribute(modalName)
        if (modal) this.activateModal(modal, button)
      } else if (button.matches(buttonClose)) {
        const modalName: string | null = button.getAttribute('data-modal-close') || button.closest('[data-modal]')?.getAttribute('data-modal')
        if (!modalName) return

        const modal: HTMLElement | null = this.findModalByAttribute(modalName)
        if (modal) this.deactivateModal(modal, button)
      } else if (button.matches(buttonToggle)) {
        const modalName: string | null = button.getAttribute('data-modal-toggle')
        if (!modalName) return

        const modal: HTMLElement | null = this.findModalByAttribute(modalName)
        if (modal) this.toggleModal(modal, button)
      }
    }

    const overlay: HTMLElement | null = target.closest('[data-modal-overlay]') as HTMLElement
    if (overlay) {
      const modalName: string | null = overlay.getAttribute('data-modal-overlay')
      if (!modalName) return

      const modal: HTMLElement | null = this.findModalByAttribute(modalName)
      if (modal) this.deactivateModal(modal)
    }
  }

  private handleKeyUp(event: KeyboardEvent): void {
    if (event.code === 'Escape' && this.parameters.current) {
      this.deactivateModal(this.parameters.current)
    }
  }

  private manageEventListeners(action: 'add' | 'remove'): void {
    const method: 'addEventListener' | 'removeEventListener' = action === 'add' ? 'addEventListener' : 'removeEventListener'
    document[method]('click', this.onClick, { passive: true })
    document[method]('keyup', this.onKeyUp, { passive: true })
  }

  private getModalOverlay(modalName: string): HTMLElement {
    const selector: string = this.options.selectors.overlay(modalName)
    return document.body.querySelector(selector) as HTMLElement
  }

  private getModalName(modal: HTMLElement): string {
    return modal.getAttribute('data-modal')?.trim() || ''
  }

  private findModalByAttribute(attribute: string): HTMLElement | null {
    return document.body.querySelector(`[data-modal=${ attribute }]`)
  }

  private throwEvent<T>(element: HTMLElement, name: string, detail?: T): void {
    const event: CustomEvent = new CustomEvent(name, { bubbles: true, detail })
    element.dispatchEvent(event)
  }

  private beforeOpenHandler(): void {
  }

  private openHandler(): void {
    if (this.getOS() !== 'iOS') {
      disableBodyScroll(document.body)
    }
  }

  private beforeCloseHandler(): void {
  }

  private closeHandler(): void {
    setTimeout(() => {
      enableBodyScroll(document.body)
    }, this.options.transition.duration)
  }
}

export default Modals
