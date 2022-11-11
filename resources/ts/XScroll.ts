import {keycodeEquals} from "vanilla-headless/dist/utils"

export class XScroll extends HTMLElement {
  #indexer: number;
  private items: NodeListOf<HTMLElement>;
  constructor() {
    super();
    this.#indexer  = 0
    this.items = this.querySelectorAll('a')
  }

  connectedCallback() {
    this.items.forEach(item => item.addEventListener('keydown', this.navigate.bind(this)))
    this.items.forEach(item => item.addEventListener('click', this.navigate.bind(this)))
    this.addEventListener('wheel', this.scrollX.bind(this))
  }

  disconnectedCallback() {
    this.items.forEach(item => item.removeEventListener('keydown', this.navigate))
    this.items.forEach(item => item.removeEventListener('click', this.navigate))
    this.removeEventListener('wheel', this.scrollX)
  }

  protected navigate(event: MouseEvent | KeyboardEvent) {

    // @ts-ignore
    if (event instanceof KeyboardEvent && keycodeEquals(["ArrowRight", "ArrowDown", "Tab"], event)) {
      event.preventDefault()
      this.goToNext()
    } else if (event instanceof KeyboardEvent && keycodeEquals(["ArrowLeft", "ArrowUp"], event)) {
      event.preventDefault()
      this.goToPrevious()
    }

    if (event instanceof MouseEvent && event.type === 'click') {

    }

    this.items[this.#indexer].focus()
  }

  protected goToNext() {
    if (this.#indexer >= this.items.length - 1) {
      this.#indexer = 0
    }else {
      this.#indexer++
    }
  }

  protected goToPrevious() {
    if (this.#indexer <= 0) {
      this.#indexer = this.items.length - 1
    }else {
      this.#indexer--
    }
  }

  protected scrollX(event: WheelEvent) {
    event.preventDefault()
    this.scrollBy({
      left: event.deltaY < 0 ? -200 : 200
    })
  }


}

customElements.define('x-scroll', XScroll)