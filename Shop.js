const header   = document.getElementById('header');
const logo     = header.querySelector('.logo');
const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.dropdown-menu');
const title = document.querySelector('.shop');
const title2 = document.querySelector('.welcome');


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

document.addEventListener('DOMContentLoaded', () => {
const profiles = document.querySelectorAll('.profile');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
        else{
            entry.target.classList.remove('visible');
        }
      });
    },
    {
      threshold: 0.2
    }
  );

  profiles.forEach(profile => observer.observe(profile));
});