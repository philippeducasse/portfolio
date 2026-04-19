import { onMounted, watch } from "vue";
import { useTheme } from "./useTheme";

export function getAnimationDirection(index: number): string {
  const directions = ["left", "right", "top", "bottom"];
  return directions[index % 4];
}

export function useAnimations(): void {
  const { currentTheme } = useTheme();
  let observer: IntersectionObserver | null = null;
  const animatedElements = new Set<Element>();
  let intersectionCounter = 0;
  let lastIntersectionTime = 0;

  function revealAll() {
    if (observer) observer.disconnect();
    document.querySelectorAll(".slide-in").forEach((el) => {
      el.classList.remove("slide-in");
      el.classList.add("shows");
    });
    document.querySelectorAll(".hidden").forEach((el) => el.classList.add("shows"));
  }

  function initializeObserver() {
    if (observer) {
      observer.disconnect();
    }

    animatedElements.clear();
    intersectionCounter = 0;
    lastIntersectionTime = 0;

    if (currentTheme.value === "nostalgic" || currentTheme.value === "minimalist") {
      revealAll();
      return;
    }

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

          // Reset counter if scrolling after a gap (new batch)
          const now = Date.now();
          if (now - lastIntersectionTime > 1000) {
            intersectionCounter = 0;
          }
          lastIntersectionTime = now;

          // Read per-element stagger step (default 200ms)
          const step = parseInt((entry.target as HTMLElement).dataset.staggerStep ?? "500");

          // Stagger the animation with configurable step delay
          // Elements animate in the order they come into view
          setTimeout(() => {
            entry.target.classList.add("shows");
          }, step * intersectionCounter);

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
