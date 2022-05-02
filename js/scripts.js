// Custom Scripts
function burgerMenu() {
  const burger = document.querySelector('.burger');
  const menu = document.querySelector('.menu');
  const body = document.querySelector('body');
  burger.addEventListener('click', () => {
    if (!menu.classList.contains('active')) {
      menu.classList.add('active');
      burger.classList.add('active-burger');
      body.classList.add('locked');
    } else {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });
  // Вот тут мы ставим брейкпоинт навбара
  window.addEventListener('resize', () => {
    if (window.innerWidth > 991.98) {
      menu.classList.remove('active');
      burger.classList.remove('active-burger');
      body.classList.remove('locked');
    }
  });
}
burgerMenu();

// Вызываем эту функцию, если нам нужно зафиксировать меню при скролле.
function fixedNav() {
  const nav = document.querySelector('nav');

  // тут указываем в пикселях, сколько нужно проскроллить что бы наше меню стало фиксированным
  const breakpoint = 200;
  if (window.scrollY >= breakpoint) {
    nav.classList.add('fixed__nav');
  } else {
    nav.classList.remove('fixed__nav');
  }
}
window.addEventListener('scroll', fixedNav);

//
const modalBtn1 = document.querySelector('.btn1');
const modalBg1 = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');
modalBtn1.addEventListener('click', function () {
  modalBg1.classList.add('bg-active');
});

modalClose.addEventListener('click', function () {
  modalBg1.classList.remove('bg-active');
});
//

//
const modalBtn2 = document.querySelector('.btn2');
const modalBg2 = document.querySelector('.modal-bg2');
const modalClose2 = document.querySelector('.modal-close2');
modalBtn2.addEventListener('click', function () {
  modalBg2.classList.add('bg-active');
});

modalClose2.addEventListener('click', function () {
  modalBg2.classList.remove('bg-active');
});
//
