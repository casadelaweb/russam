import { debounce } from 'es-toolkit'

document.addEventListener('DOMContentLoaded', () => {
    const body: HTMLElement = document.body
    const header: HTMLElement | null = body.querySelector('.header')

    if (!header) return

    const ACTIVE_CLASS: string = '_active'
    let isSmallScreen: boolean = !window.matchMedia('(min-width: 1180px)').matches

    function handleSmallScreenClick(target: HTMLElement) {
      const parent: HTMLElement = target.closest('.headerMenuParent')
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

    function handleLargeScreenClick(target: HTMLElement) {
      const parentL1 = target.closest('.headerMenuParentL1') as HTMLElement | null
      if (parentL1 && !parentL1.classList.contains(ACTIVE_CLASS)) {
        clearHeaderActiveElements()
        header.classList.add('_menu_open')
        parentL1.classList.add(ACTIVE_CLASS)

        const parentL2 = parentL1.querySelector('.headerMenuParentL2') as HTMLElement | null
        parentL2?.classList.add(ACTIVE_CLASS)
      }

      if (target.closest('.headerOverlay')) {
        menuClose()
      }
    }

    function handleHover(target: HTMLElement, el: HTMLElement) {
      const btnL2: HTMLElement = target.closest('.headerMenuBtnL2')
      if (btnL2 && !target.closest('.headerMenuChildrenL1LeftGold')) {
        el.querySelector(`.${ ACTIVE_CLASS }`)?.classList.remove(ACTIVE_CLASS)
        btnL2.closest('.headerMenuParentL2')?.classList.add(ACTIVE_CLASS)
      }
    }

    function clearHeaderActiveElements() {
      const activeElements: HTMLElement[] = Array.from(header.querySelectorAll(`.${ ACTIVE_CLASS }`))
      activeElements.forEach((el) => el.classList.remove(ACTIVE_CLASS))
    }

    function menuClose() {
      clearHeaderActiveElements()
      header.classList.remove('_menu_open')
    }

    header.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (isSmallScreen) {
        handleSmallScreenClick(target)
      } else {
        handleLargeScreenClick(target)
      }
    })

    const headerMenuChildrenLeftAll = Array.from(header.querySelectorAll('.headerMenuChildrenL1Left')) as HTMLElement[]

    headerMenuChildrenLeftAll.forEach((el) => {
      el.addEventListener('mouseover', (e: MouseEvent) => {
        if (!isSmallScreen) {
          handleHover(e.target as HTMLElement, el)
        }
      })
    })

    const handleResize = debounce(() => {
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
  },
  {
    passive: true,
    once: true
  }
)
