export function useFrontendEffects() {
  const dots: HTMLElement[] = [];
  const positions: { x: number; y: number }[] = [];
  let animId = 0;
  let moveHandler: ((e: MouseEvent) => void) | null = null;

  const NUM_DOTS = 14;
  const COLORS = ['#337ab7', '#107d85', '#489c79', '#94b1cf'];

  function init() {
    for (let i = 0; i < NUM_DOTS; i++) {
      const dot = document.createElement('div');
      const size = Math.max(3, 9 - i * 0.45);
      dot.className = 'cursor-trail-dot';
      dot.style.cssText = `
        position: fixed;
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        background: ${COLORS[i % COLORS.length]};
        pointer-events: none;
        z-index: 9999;
        transform: translate(-50%, -50%);
        opacity: ${Math.max(0.15, 0.85 - i * 0.05)};
        left: -100px;
        top: -100px;
      `;
      document.body.appendChild(dot);
      dots.push(dot);
      positions.push({ x: -100, y: -100 });
    }

    moveHandler = (e: MouseEvent) => {
      positions[0].x = e.clientX;
      positions[0].y = e.clientY;
    };

    document.addEventListener('mousemove', moveHandler);

    const animate = () => {
      for (let i = 0; i < NUM_DOTS; i++) {
        const target = i === 0 ? positions[0] : positions[i - 1];
        const lag = i === 0 ? 1 : 0.3;
        positions[i].x += (target.x - positions[i].x) * lag;
        positions[i].y += (target.y - positions[i].y) * lag;
        dots[i].style.left = `${positions[i].x}px`;
        dots[i].style.top = `${positions[i].y}px`;
      }
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
  }

  function destroy() {
    if (moveHandler) {
      document.removeEventListener('mousemove', moveHandler);
      moveHandler = null;
    }
    cancelAnimationFrame(animId);
    dots.forEach((d) => d.remove());
    dots.length = 0;
    positions.length = 0;
  }

  return { init, destroy };
}
