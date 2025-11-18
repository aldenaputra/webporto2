'use client';

export function setTheme(theme: 'light' | 'dark') {
  if (typeof window === 'undefined') return;

  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

export function getTheme(): 'light' | 'dark' {
  if (typeof window === 'undefined') return 'dark';

  const stored = localStorage.getItem('theme');
  if (stored === 'light' || stored === 'dark') return stored;

  // Default to dark mode, but respect system preference if user hasn't set one
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const systemPreference = prefersDark ? 'dark' : 'light';
  
  // If no stored preference, default to dark mode
  return 'dark';
}

export const initTheme = () => {
  const theme = getTheme();
  setTheme(theme);
};