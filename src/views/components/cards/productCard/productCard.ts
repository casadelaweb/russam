document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (event: MouseEvent) => {
      const target = event.target as HTMLElement

      if (target.closest('.productCardFav')) {
        const button: HTMLElement = target.closest('.productCardFav')

        button.classList.toggle('_active')
      }
    })
  },
  {
    passive: true,
    once: true,
  })
