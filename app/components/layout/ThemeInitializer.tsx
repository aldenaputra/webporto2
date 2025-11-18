'use client';

import { useEffect } from 'react';
import { initTheme } from '../../utils/theme';

export default function ThemeInitializer() {
  useEffect(() => {
    initTheme();
  }, []);

  return null;
}