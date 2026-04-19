import { ref } from "vue";

const _currentTheme = ref('');

export function useTheme() {
  function setTheme(theme: string) {
    _currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
  }

  function clearTheme() {
    _currentTheme.value = '';
    document.documentElement.removeAttribute('data-theme');
  }

  return {
    currentTheme: _currentTheme,
    setTheme,
    clearTheme,
  };
}