document.addEventListener('DOMContentLoaded', () => {
    const $benefitsParent: HTMLElement = document.body.querySelector('.sectionBenefits')

    if ($benefitsParent) {
      function benefitsSliderSetActive(index: Number) {
        $benefitsParent
          .querySelectorAll('._active')
          .forEach((el: HTMLElement) => {
            el.classList.remove('_active')
          })

        $benefitsParent
          .querySelectorAll(`[data-index="${ index }"`)
          .forEach((el: HTMLElement) => {
            el.classList.add('_active')
          })
      }

      $benefitsParent.addEventListener('click', (event: MouseEvent) => {
        const target = event.target as HTMLElement

        if (target.closest('[data-index]')) {
          const btn: HTMLElement = target.closest('[data-index]')
          benefitsSliderSetActive(+btn.dataset.index)
        }
      })
    }
  },
  {
    passive: true,
    once: true,
  }
)
