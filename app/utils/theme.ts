'use client';

export const setTheme = (theme: 'light' | 'dark') => {
  if (typeof window === 'undefined') return;

  localStorage.setItem('theme', theme);

  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};

export const getTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';

  const saved = localStorage.getItem('theme');
  if (saved === 'light' || saved === 'dark') return saved;

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  return prefersDark ? 'dark' : 'light';
};

export const toggleTheme = () => {
  if (typeof window === 'undefined') return;
  
  const current = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  const newTheme = current === 'light' ? 'dark' : 'light';
  setTheme(newTheme);
};