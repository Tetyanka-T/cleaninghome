document.addEventListener('DOMContentLoaded', () => {
  const footerBar = document.querySelector('.section__footer__button');
  
  if (!footerBar) return;

  const triggerElement = document.querySelector('.section__hero'); 
  const options = {
    rootMargin: '100px 0px 0px 0px', 
    threshold: 0 
  };

  const callback = (entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        footerBar.classList.add('is-visible');
      } else {
        footerBar.classList.remove('is-visible');
      }
    });
  };
  const observer = new IntersectionObserver(callback, options);
  
  if (triggerElement) {
    observer.observe(triggerElement);
  }
});