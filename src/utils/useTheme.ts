import { ref } from 'vue';

const _modalOpen = ref(false);
// Read immediately from DOM — the inline <head> script sets data-theme before JS runs
const _currentTheme = ref(
  typeof document !== 'undefined'
    ? (document.documentElement.getAttribute('data-theme') ?? '')
    : '',
);

export function useTheme() {
  function setTheme(theme: string) {
    _currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('viewingMode', theme);
  }

  function openModal() {
    _modalOpen.value = true;
  }

  function closeModal() {
    _modalOpen.value = false;
  }

  return {
    modalOpen: _modalOpen,
    currentTheme: _currentTheme,
    setTheme,
    openModal,
    closeModal,
  };
}
