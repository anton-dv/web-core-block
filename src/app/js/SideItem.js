export class SideItem {
  openClass = 'open';
  disableClass = 'disable';
  bigViewport = 1426;
  veil = document.querySelector('.page__veil');

  constructor(queryItem, queryOpener, queryCloser, eventer) {
    this.eventer = eventer;
    this.queryItem = queryItem;
    this.queryOpener = queryOpener;

    this.side = document.querySelector(queryItem);
    this.opener = document.querySelector(queryOpener);
    this.closer = document.querySelector(queryCloser);
    this.duration = this.getDuration();

    this.#init();
  }

  #init() {
    this.veil.addEventListener('click', this.close.bind(this));
    this.opener.addEventListener('click', this.open.bind(this));
    this.closer.addEventListener('click', this.close.bind(this));
    window.addEventListener('resize', this.#resizeHandler.bind(this));

    if (this.eventer?.load) document.addEventListener('DOMContentLoaded', () => {
      setTimeout(this.eventer.load.bind(this.eventer), 100);
    });
  }

  open() {
    this.side.classList.remove(this.disableClass);
    if (this.eventer?.open) this.eventer.open(this);

    setTimeout(() => {
      this.side.classList.add(this.openClass);
      document.body.classList.add('scroll-disable')
      this.veil.classList.add('visible')
    }, 10)

    this.opener.addEventListener.apply(document, ['focus', close]);
  }

  close() {
    this.opener.removeEventListener('focus', close);

    this.side.classList.remove(this.openClass);
    setTimeout(() => {
      if (!this.side.classList.contains(this.openClass)) {
        this.side.classList.add(this.disableClass);
        document.body.classList.remove('scroll-disable')
        this.veil.classList.remove('visible')
      }
    }, this.duration)
  }

  getDuration() {
    const sidebarStyles = getComputedStyle(this.side)
    const durationString = sidebarStyles.getPropertyValue('--sidebar-duration');

    return parseFloat(durationString) * 1000
  }

  #resizeHandler() {
    if (this.eventer?.resize) this.eventer.resize();
    const width = document.documentElement.clientWidth;
    if (width >= this.bigViewport) this.close();
  }

}
