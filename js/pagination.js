document.addEventListener('DOMContentLoaded', () => {
  const beforeList = document.querySelector('.section__before-after__list');
  const beforeItems = document.querySelectorAll('.section__before-after__list__item');
  const dots = document.querySelectorAll('.section__before__dot');

  if (!beforeList || beforeItems.length === 0 || dots.length === 0) return;

  // 1. Функція підсвічування активної крапки при скролі
  const handleScroll = () => {
    const scrollPosition = beforeList.scrollLeft;
    // Ширина картки + gap (15px)
    const itemFullWidth = beforeItems[0].offsetWidth + 15; 

    // Обчислюємо точний індекс активної картки (від 0 до 5)
    let activeIndex = Math.round(scrollPosition / itemFullWidth);

    // Страховка від виходу за межі кількості карток
    activeIndex = Math.max(0, Math.min(activeIndex, beforeItems.length - 1));

    // Оновлюємо класи у крапок
    dots.forEach((dot, index) => {
      if (index === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  };

  // Слухаємо скрол контейнера карток
  beforeList.addEventListener('scroll', handleScroll, { passive: true });

  // 2. Клік по крапці для плавної прокрутки до картки
  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      const itemFullWidth = beforeItems[0].offsetWidth + 15;

      beforeList.scrollTo({
        left: itemFullWidth * index,
        behavior: 'smooth'
      });
    });
  });
});