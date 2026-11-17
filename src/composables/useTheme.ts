import { ref } from 'vue';

type Theme = 'light' | 'dark';

const saved = window.localStorage.getItem('theme');
const theme = ref<Theme>(saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches) ? 'dark' : 'light');

function apply() {
  document.documentElement.setAttribute('data-bs-theme', theme.value);
}

apply();

export function useTheme() {
  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    window.localStorage.setItem('theme', theme.value);
    apply();
  }

  return { theme, toggleTheme };
}
