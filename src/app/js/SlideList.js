export class SlideList {
  classActive = 'active';

  constructor(queryList, queryButtons) {
    this.queryButtons = queryButtons;
    this.list = document.querySelector(queryList);
    this.buttons = document.querySelectorAll(queryButtons);

    this.#init();
  }

  #init() {
    this.buttons.forEach(actualButton => {
      actualButton.addEventListener('focus', () => {
        this.#setActive(actualButton);
        this.setLine();
      });
    });
  }

  setLine() {
    const actualButton = this.getCurrentButton();

    const lineY = actualButton.getBoundingClientRect().y;
    const lineHeight = getComputedStyle(this.list).getPropertyValue('--line-height');

    const linePosition = lineY - (parseFloat(lineHeight) / 2);
    this.list.style.setProperty("--line-position", linePosition + "px");
  }

  getCurrentButton() {
    return document.querySelector(this.queryButtons + '.' + this.classActive);
  }

  #setActive(actualButton) {
    const currentButton = this.getCurrentButton();

    if (currentButton == actualButton) return;
    this.#switchItem(currentButton, actualButton);
  }

  #switchItem(current, actual) {
    current.classList.remove(this.classActive);
    actual.classList.add(this.classActive);
  }

  load = () => this.setLine();
  resize = () => this.setLine();
  open = () => this.setLine();

}
