import hcSticky from 'hc-sticky'

document.addEventListener('DOMContentLoaded', () => {
  new hcSticky('.catalogAside', {
    stickTo: '.catalogLayout',
    mobileFirst: true,
    responsive: {
      0: {
        disable: true,
      },
      1024: {
        disable: false,
        top: 20,
      },
    }
  })
}, {
  passive: true,
  once: true,
})
