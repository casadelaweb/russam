export interface iElementData {
  details: HTMLDetailsElement,
  summary: HTMLElement,
  button: HTMLElement,
  content: HTMLElement,
  parameters: {
    isOpen: boolean,
    isClosing: boolean,
    isOpening: boolean,
    animation?: any
  }
}

export interface iSelectors {
  details: string,
  summary: string,
  button: string,
  content: string,
  scrollbars: {
    vertical: string,
  }
}

export interface iOptions {
  disableAfter?: number | null,
  preferButtonIfExist: boolean,
  selectors?: iSelectors,
  onlyUnderLaptop?: boolean
}
