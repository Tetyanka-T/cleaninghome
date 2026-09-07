document.addEventListener('DOMContentLoaded', () => {
  const burgerBtn = document.getElementById('burgerBtn');
  const mainNav = document.getElementById('mainNav');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.header__container__nav a');

  // Функція перемикання стану меню
  const toggleMenu = () => {
    burgerBtn.classList.toggle('active');
    mainNav.classList.toggle('active');
    navOverlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  };

  // Функція закриття меню
  const closeMenu = () => {
    burgerBtn.classList.remove('active');
    mainNav.classList.remove('active');
    navOverlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
  };

  // Клік по гамбургеру
  burgerBtn.addEventListener('click', toggleMenu);

  // Клік по темному фону за межами меню
  navOverlay.addEventListener('click', closeMenu);

  // Закриваємо меню при кліку на будь-яке посилання в ньому
  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });
});

