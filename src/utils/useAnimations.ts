import { onMounted } from 'vue';

const DIRS = ['left', 'top', 'right', 'bottom'] as const;

function splitIntoWords(el: Element): HTMLElement[] {
  const text = el.textContent || '';
  const words = text.trim().split(/\s+/).filter(Boolean);
  el.innerHTML = '';
  const spans: HTMLElement[] = [];
  words.forEach((word, i) => {
    const span = document.createElement('span');
    span.textContent = word;
    span.style.display = 'inline-block';
    span.style.transitionDelay = `${i * 100}ms`;
    span.classList.add('hidden', DIRS[i % DIRS.length]);
    el.appendChild(span);
    if (i < words.length - 1) {
      el.appendChild(document.createTextNode(' '));
    }
    spans.push(span);
  });
  return spans;
}

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

    // Split words and observe each word span
    document.querySelectorAll('.words-animate').forEach((el) => {
      const spans = splitIntoWords(el);
      spans.forEach((span) => observer.observe(span));
    });

    // Standard hidden elements
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Also observe grid items
    const gridItems = document.querySelectorAll('.grid__item.hidden');
    gridItems.forEach((gridItem) => {
      observer.observe(gridItem);
    });
  });
}
