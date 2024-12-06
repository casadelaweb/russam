document.addEventListener('DOMContentLoaded', () => {
    const body = document.body

    body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.catalogNavTabMore')) {
        const parent: HTMLElement = target.closest('.catalogNavTabs')
        const parentHidden: HTMLElement = parent.querySelector('.catalogNavTabsHidden')
        const button: HTMLElement = target.closest('.catalogNavTabMore')
        // const tabs: HTMLElement[] = Array.from(parent.querySelectorAll('.catalogNavTab._hidden'))

        // tabs.forEach((tab) => tab.classList.toggle('_hidden'))
        parent.classList.toggle('_active')
        parentHidden.classList.toggle('_active')
        button.classList.toggle('_active')
      }
    }, {
      passive: true,
    })
  },
  {
    passive: true,
    once: true,
  })
