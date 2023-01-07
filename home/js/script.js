'use strict'

//меню бургер

const iconMenu = document.querySelector('.header__body-icon');
const menuHeader = document.querySelector('.header__menu')
if (iconMenu) {
    iconMenu.addEventListener("click", function (e) {

        if (iconMenu.classList[1] !== '_active') {
            window.scrollTo(0, 0);
        }

        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuHeader.classList.toggle('_active');

    });
}

// отслеживание width

const observer = new ResizeObserver((entries) => {
    const headerButton = document.querySelector('.header__button');
    const headerBody = document.querySelector('.header__body');

    for (const entry of entries) {
        const width = entry.contentRect.width;
        // вставка кнопки в бургер меню
        if (width < 400) {
            menuHeader.append(headerButton);
        } else if (width > 400) {
            headerBody.append(headerButton);
        }
    }
});
observer.observe(body);


////
function ibg() {

    let ibg = document.querySelectorAll("._ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();
////