import { Details } from 'src/modules/details/details'

document.addEventListener('DOMContentLoaded', () => {
  const details = new Details({
    preferButtonIfExist: true,
    selectors: {
      details: '.catalogFilter',
      summary: '.catalogFilterSummary',
      button: '.catalogFilterButton',
      content: '.catalogFilterBody',
      scrollbars: { vertical: 'has-verticalScrollbar', },
    },
    onlyUnderLaptop: false,
  })
  details.init()
}, {
  passive: true,
  once: true,
})
