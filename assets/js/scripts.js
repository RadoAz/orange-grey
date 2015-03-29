var links = document.getElementsByTagName('a'),
    mainElement = document.getElementsByTagName('main')[0],
    mainShowed = false,
    currentContent;

function toArray(obj) {
  return [].slice.call(obj);
}

links = toArray(links);

function openContent(id) {
  mainElement.querySelector('#' + id + 'Content').classList.add('showed');
  mainElement.classList.add('open');
}

function hideContent() {
  var showedElem = mainElement.querySelector('.showed');

  if (showedElem) {
    showedElem.classList.remove('showed');
  }
}

links.forEach(function (link) {
  link.onclick = function (e) {
    if (!mainShowed) {
      hideContent();
      openContent(e.target.id);
      mainShowed = true;
      currentContent = e.target.id;
    } else {
      if (currentContent !== e.target.id) {
        mainElement.classList.remove('open');

        setTimeout(function () {
          hideContent();
          openContent(e.target.id);
        }, 400);

        currentContent = e.target.id;
      }
    }
  }
});
