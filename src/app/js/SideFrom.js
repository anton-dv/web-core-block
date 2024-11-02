export class SideForm {
  classVisible = 'visible';

  constructor() {
    this.forms = document.querySelectorAll('.sideform__form');
    this.titles = document.querySelectorAll('.sideform__title');
    this.button = document.querySelector('#sideform-submit');
  }

  open = (sideItem) => {
    const sideCase = sideItem.opener.dataset.case;

    this.titles.forEach(title => this.#toggleVisible(title, sideCase));
    this.forms.forEach(form => this.#toggleVisible(form, sideCase));

    this.button.setAttribute('form', sideCase);
  }

  #toggleVisible(element, sideCase) {
    if (element.dataset.case == sideCase) element.classList.add(this.classVisible);
    else element.classList.remove(this.classVisible);
  }
}
