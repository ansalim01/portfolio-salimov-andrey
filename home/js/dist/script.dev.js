'use strict'; //меню бургер

var iconMenu = document.querySelector('.header__body-icon');
var menuHeader = document.querySelector('.header__menu');

if (iconMenu) {
  iconMenu.addEventListener("click", function (e) {
    if (iconMenu.classList[1] !== '_active') {
      window.scrollTo(0, 0);
    }

    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuHeader.classList.toggle('_active');
  });
} // отслеживание width


var observer = new ResizeObserver(function (entries) {
  var headerButton = document.querySelector('.header__button');
  var headerBody = document.querySelector('.header__body');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = entries[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var entry = _step.value;
      var width = entry.contentRect.width; // вставка кнопки в бургер меню

      if (width < 400) {
        menuHeader.append(headerButton);
      } else if (width > 400) {
        headerBody.append(headerButton);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
});
observer.observe(body); ////

function ibg() {
  var ibg = document.querySelectorAll("._ibg");

  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}

ibg(); ////