import { onMounted } from 'vue';

export function useAnimations(): void {
  onMounted(() => {
    // Slide-in animations
    const sliderInit = document.querySelectorAll('.slide-in');
    sliderInit.forEach((box, index) => {
      setTimeout(() => {
        box.classList.remove('slide-in');
        box.classList.add('shows');
      }, 500 * index);
    });

    // Intersection Observer for visibility animations
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
  });
}