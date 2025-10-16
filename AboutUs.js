const header   = document.getElementById('header');
const logo     = header.querySelector('.logo');
const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.dropdown-menu');
const title = document.querySelector('.hyciine-title');
const title2 = document.querySelector('.top-half p');
const picture = document.querySelector('.hycent-picture');
const about = document.querySelector('.hyciine-text');
const about2 = document.querySelector('.hyciine-text2');


const shrinkPoint = 80;
const hidePoint   = 100;
let lastScroll    = 0;
const titleshowPoint = 80;

window.addEventListener('scroll', () => {
    const y = window.scrollY;

    if (y > shrinkPoint) {
        header.classList.add('shrunk');
        logo.classList.add('shrunk');
    } else {
        header.classList.remove('shrunk');
        logo.classList.remove('shrunk');
    }

    if (y > hidePoint && y > lastScroll) {
        header.classList.add('hiddenHeader');
    } else if (y < lastScroll) {
        header.classList.remove('hiddenHeader');
    }

    lastScroll = y;

    if (y > titleshowPoint){
     title.classList.add('visible');
     title2.classList.add('visible');
    } else{
     title.classList.remove('visible');
    title2.classList.remove('visible');
    }

    if (y > titleshowPoint+150){
     picture.classList.add('visible');
     about.classList.add('visible');
     about2.classList.add('visible');
    } else{
     picture.classList.remove('visible');
     about.classList.remove('visible');
     about2.classList.remove('visible');
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