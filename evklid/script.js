/* ==================================swiper==================================*/

var Swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoheight: true,
  autoplay: {
    delay: 2000,
  },
  paginationBulletMessage: 'Слайд {{index}}',
});

/* ==================================tabs==================================*/

document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.how-step').forEach(function (HowStep) {
    HowStep.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.how__wrapper').forEach(function (HowWrap) {
        HowWrap.classList.remove('how__wrapper-active');
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('how__wrapper-active');

      document.querySelectorAll('.how-step').forEach(function (event) {
        event.classList.remove('how-step-active');
      });
      event.currentTarget.classList.add('how-step-active');
    });
  });

  /* ==================================burger==================================*/

  document.querySelector('.header__burger').addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('header__burger-active');
    document.querySelector('.nav__header').classList.toggle('nav__header-active');
  });

  /* ==================================search==================================*/

  var el = document.getElementById('header-form');
  var el2 = document.getElementById('header-form__icon-search');

  document.querySelector('.header-form__icon-search').addEventListener('click', function () {
    el.classList.add('header-form-active');
  });
  document.querySelector('.header-form__icon-closed').addEventListener('click', function () {
    el.classList.remove('header-form-active');
  });
});

/* ==================================accordion==================================*/

$(function () {
  $("#accordion").accordion({
    heightStyle: "content"
  });
});
