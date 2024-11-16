type currentMedia = 'mobile' | 'tablet' | 'tabletBg' | 'laptop' | 'desktop'

/** Определяет текущий медиа брейкпоинт  */
export function getCurrentMedia(): currentMedia {
  const { matchMedia, } = window
  let result: currentMedia = 'mobile'

  if (matchMedia('(min-width: 768px) and (max-width: 1023px)').matches) {
    result = 'tablet'
  } else if (matchMedia('(min-width: 1024px) and (max-width: 1279px)').matches) {
    result = 'tabletBg'
  } else if (matchMedia('(min-width: 1280px) and (max-width: 1919px)').matches) {
    result = 'laptop'
  } else if (matchMedia('(min-width: 1920px)').matches) {
    result = 'desktop'
  }

  return result
}

/** Определяет есть ли мышь или другое устройство наведения */
export function isAnyPointerFine(): boolean {
  return window.matchMedia('(any-pointer: fine)').matches
}

export function createHash(): string {
  let id = Date.now().toString(36)
  id = id + Math.random().toString(36)
  id = id.replace(/\./gmi, '')

  const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  const charactersLength: number = characters.length
  const randomChar: string = characters.charAt(Math.floor(Math.random() * charactersLength))
  id = randomChar + id

  return id
}

export function addEventListeners(element: HTMLElement, events: Array<string>, callback: (event: Event) => any) {
  events.forEach((eventName) => {
    element.addEventListener(eventName, (event: Event) => callback(event))
  })
}

