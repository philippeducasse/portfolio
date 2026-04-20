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
  const pendingTimeouts = new Map<Element, number>();
  let intersectionCounter = 0;
  let lastIntersectionTime = 0;

  function revealAll() {
    if (observer) observer.disconnect();
    pendingTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    pendingTimeouts.clear();
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

    pendingTimeouts.forEach((timeoutId) => clearTimeout(timeoutId));
    pendingTimeouts.clear();
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
      const timeoutId = setTimeout(() => {
        box.classList.remove("slide-in");
        box.classList.add("shows");
        pendingTimeouts.delete(box);
      }, 100 * index);
      pendingTimeouts.set(box, timeoutId);
    });

    // Intersection Observer for visibility animations
    observer = new IntersectionObserver((entries) => {
      const now = Date.now();

      // Reset counter if enough time has passed (new scroll session)
      if (now - lastIntersectionTime > 1000) {
        intersectionCounter = 0;
      }
      lastIntersectionTime = now;

      // Use a local counter for this batch to prevent accumulation across rapid scrolls
      let batchCounter = 0;

      entries.forEach((entry) => {
        if (entry.isIntersecting && !animatedElements.has(entry.target)) {
          animatedElements.add(entry.target);

          const step = parseInt((entry.target as HTMLElement).dataset.staggerStep ?? "50");
          // Don't apply the 10x multiplier to skill items (they're numerous and cumulative delay gets too high)
          const multiplier = (entry.target as HTMLElement).classList.contains("skill-item") ? 1 : 10;
          const delay = step * batchCounter * multiplier;

          const timeoutId = setTimeout(() => {
            entry.target.classList.add("shows");
            pendingTimeouts.delete(entry.target);
          }, delay);
          pendingTimeouts.set(entry.target, timeoutId);

          batchCounter++;
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
