const navButtons = document.querySelectorAll('.list-navigation__btn');
// const articles    = document.querySelectorAll('.tab')

const arrButtons = Array.from(navButtons.values());
// const arrArticles = Array.from(articles.values());

const classActive = 'active';

navButtons.forEach(actualControl => {
  actualControl.addEventListener('focus', () => {
    console.log(1)
    const currentControl = getCurrent(arrButtons);
    if (currentControl == actualControl) return;

    switchItem(currentControl, actualControl)

    // const index = actualControl.dataset.index;
    // const currentArticle = getCurrent(arrArticles);

    // if(!currentArticle) return;
    // let actualArticle = arrArticles.find((e) => e.dataset.index == index);

    // if(!actualArticle) actualArticle = arrArticles.find((e) => e.dataset.index == 'none');
    // switchItem(currentArticle, actualArticle)
  });
});

function getCurrent(arr) {
  return arr?.find((e) => e.classList.contains(classActive));
}

function switchItem(current, actual) {
  current.classList.remove(classActive);
  actual.classList.add(classActive);
}
