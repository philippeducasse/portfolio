export function useAnimations() {
  // Initialize slide-in animations on mount
  const initSlideInAnimations = () => {
    const sliderInit = document.querySelectorAll('.slide-in');
    sliderInit.forEach((box, index) => {
      setTimeout(() => {
        box.classList.remove('slide-in');
        box.classList.add('shows');
      }, 500 * index);
    });
  };

  // Initialize intersection observer for visibility-based animations
  const initIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('shows');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Also observe grid items
    const gridItems = document.querySelectorAll('.grid__item.hidden');
    gridItems.forEach((gridItem) => {
      observer.observe(gridItem);
    });
  };

  return {
    initSlideInAnimations,
    initIntersectionObserver
  };
}