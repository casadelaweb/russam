import 'restyle.css/dist/restyle.css'
//import 'restyle.css/dist/checkboxes.css'
import 'restyle.css/dist/scrollbar.css'
import 'nouislider/dist/nouislider.css'
import 'swiper/swiper-bundle.css'
import 'src/styles/main.scss'
import 'src/views/components'
import 'src/views/pages'
import Modals from 'src/modules/modals/modals'

document.addEventListener('DOMContentLoaded', () => {
    const modals = new Modals()

    modals.init()
  },
  {
    passive: true,
    once: true,
  })
