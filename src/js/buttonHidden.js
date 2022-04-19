export class LoadMoreBtn {
  #className;
  #element;

  constructor({ elements, className }) {
    this.#element = elements;
    this.#className = className;
  }
  show() {
    this.#element.classList.remove(this.#className);
  }
  hide() {
    this.#element.classList.add(this.#className);
  }
}
