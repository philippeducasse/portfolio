import { onMounted, watch } from "vue";
import { useTheme } from "./useTheme";

export function useAnimations(): void {
  const { currentTheme } = useTheme();
  let observer: IntersectionObserver | null = null;
  const animatedElements = new Set<Element>();
  let intersectionCounter = 0;

  function initializeObserver() {
    // Clean up existing observer
    if (observer) {
      observer.disconnect();
    }

    animatedElements.clear();
    intersectionCounter = 0;

    // Slide-in animations
    const sliderInit = document.querySelectorAll(".slide-in");
    sliderInit.forEach((box, index) => {
      setTimeout(() => {
        box.classList.remove("slide-in");
        box.classList.add("shows");
      }, 100 * index);
    });

    // Intersection Observer for visibility animations
    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          animatedElements.add(entry.target);

          // Stagger the animation with 500ms * counter delay
          // Elements animate in the order they come into view
          setTimeout(() => {
            entry.target.classList.add("shows");
          }, 200 * intersectionCounter);

          intersectionCounter++;
        }
      });
    });

    const hiddenElements = document.querySelectorAll(".hidden");
    hiddenElements.forEach((el) => observer!.observe(el));

    // Also observe grid items
    const gridItems = document.querySelectorAll(".grid__item.hidden");
    gridItems.forEach((gridItem) => {
      observer!.observe(gridItem);
    });
  }

  onMounted(() => {
    initializeObserver();

    // Re-initialize observer when theme changes (DOM structure changes)
    watch(currentTheme, () => {
      initializeObserver();
    });
  });
}
