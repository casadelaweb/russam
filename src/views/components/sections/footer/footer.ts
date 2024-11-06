import { Details } from 'src/modules/details/details'

document.addEventListener('DOMContentLoaded', () => {
    const details = new Details({
      preferButtonIfExist: true,
      selectors: {
        details: '.footerList',
        summary: '.footerListHead',
        button: '.footerListButton',
        content: '.footerListBody',
        scrollbars: { vertical: 'has-vertical-scrollbar', },
      },
      disableAfter: 1024,
    })

    details.init()
  },
  {
    passive: true,
    once: true,
  })
