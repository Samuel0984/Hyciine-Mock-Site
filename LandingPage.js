const header   = document.getElementById('header');
const logo     = header.querySelector('.logo');
const title = document.querySelector('.hyciine-title');
const title2 = document.querySelector('.top-half p');

const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.dropdown-menu');

const shrinkPoint = 80;
const hidePoint   = 100;
const titleshowPoint = 80;
let lastScroll    = 0;

window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y > shrinkPoint) {
        header.classList.add('shrunk');
        logo.classList.add('shrunk');
    } else {
        header.classList.remove('shrunk');
        logo.classList.remove('shrunk');
    }

    lastScroll = y;

    if (y > titleshowPoint){
     title.classList.add('visible');
     title2.classList.add('visible');
    } else{
     title.classList.remove('visible');
    title2.classList.remove('visible');
    }

});

let hideTimer;

function showMenu() {
    menu.classList.add('open');
}

function hideMenu() {
    menu.classList.remove('open');
}

btn.addEventListener('click', () => {
    showMenu();
});

btn.addEventListener('mouseenter', showMenu);
menu.addEventListener('mouseenter', showMenu);

btn.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(hideMenu, 250);
});
menu.addEventListener('mouseleave', () => {
    hideTimer = setTimeout(hideMenu, 250);
});

[btn, menu].forEach(el =>
    el.addEventListener('mouseenter', () => clearTimeout(hideTimer))
);