document.addEventListener('DOMContentLoaded', function () {

  function heightNav() {
    if (window.matchMedia('(max-width: 576px)').matches) {
      let allHeight = document.querySelector('.header').clientHeight + document.querySelector('.hero').clientHeight;
      document.querySelector('.header-nav').style.height = allHeight + 'px';
    } else {
      document.querySelector('.header-nav').style.height = 'auto';
    }
  }

  heightNav()
  document.querySelector('.header__burger').addEventListener('click', function (event) {
    event.currentTarget.classList.toggle('header__burger-active');
    document.querySelector('.header-nav').classList.toggle('header-nav-active');
    heightNav()
  });
  window.addEventListener('resize', heightNav);
});

