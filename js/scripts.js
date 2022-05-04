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

const tl = gsap.timeline({ defaults: { duration: 0.5 } });

tl.from('.menu', { y: -100 })
  .from('.logo', { opacity: 0 })
  .from('.content__title', { opacity: 0, delay: 0.5, y: 30 })
  .from('.content__subtitle', { opacity: 0, stagger: 1, y: 60 });

const animBreakpoint = 600;
if (window.scrollY >= animBreakpoint) {
  tl.from('.projects', { opacity: 0 });
}

const scrollItemLink = document.querySelectorAll('.projects__item-link');
const scrollAbout = document.querySelectorAll('.about');
const scrollFooter = document.querySelectorAll('footer');

const scrollAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollItemLink.forEach((el) => {
    let scrollOffset = el.offsetTop + el.offsetHeight * 2.6;
    if (windowCenter >= scrollOffset) {
      el.classList.add('animation__class');
    } else {
      el.classList.remove('animation__class');
    }
  });
};

const scrollAboutAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollAbout.forEach((el) => {
    let scrollOffset = el.offsetTop + el.offsetHeight * 15;
    if (windowCenter >= scrollOffset) {
      el.classList.add('animation__class');
    } else {
      el.classList.remove('animation__class');
    }
  });
};

const scrollFooterAnimation = () => {
  let windowCenter = window.innerHeight / 2 + window.scrollY;
  scrollFooter.forEach((el) => {
    let scrollOffset = el.offsetTop + el.offsetHeight / 40;
    if (windowCenter >= scrollOffset) {
      el.classList.add('animation__class');
    } else {
      el.classList.remove('animation__class');
    }
  });
};

scrollAnimation();
scrollAboutAnimation();
scrollFooterAnimation();
window.addEventListener('scroll', () => {
  scrollAnimation();
  scrollAboutAnimation();
  scrollFooterAnimation();
});

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 500,
  speedAsDuration: true,
});

