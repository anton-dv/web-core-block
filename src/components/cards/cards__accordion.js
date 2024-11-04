
const openClass = 'open';
const openLabel = 'Скрыть';
const closeLabel = 'Показать все';

const accordionBrand = document.querySelector('.cards__accordion-brand');
// const accordionTech = document.querySelector('.cards__accordion-tech');

const triggerBrand = document.querySelector('.cards__trigger-brand');
// const triggerTech = document.querySelector('.cards__trigger-tech');

triggerBrand.addEventListener('click', () => accordionHandler(accordionBrand, triggerBrand));
// triggerTech.addEventListener('click', () => accordionHandler(accordionTech, triggerTech));

function accordionHandler(accordion, trigger) {
  accordion.classList.toggle(openClass);
  trigger.classList.toggle(openClass);

  if (trigger.classList.contains(openClass)) trigger.innerHTML = openLabel;
  else trigger.innerHTML = closeLabel;

  window.addEventListener('resize', () => {
    const width = document.documentElement.clientWidth;

    if (width >= 768) return;
    accordion.classList.remove(openClass);
    trigger.classList.remove(openClass);
  });
}

