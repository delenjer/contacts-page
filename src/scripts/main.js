'use strict';

mobileNavigation();

function mobileNavigation() {
  const nav = document.querySelector('.nav');
  const showNavBtn = document.querySelector('.show-nav-btn');
  const closeNavBtn = document.querySelector('.close-nav-btn');
  const navLink = document.querySelector('.nav__list');

  showNavBtn.addEventListener('click', () => {
    nav.classList.add('show-nav');
  });

  closeNavBtn.addEventListener('click', () => {
    nav.classList.remove('show-nav');
  });

  navLink.addEventListener('click', () => {
    nav.classList.remove('show-nav');
  });
}
