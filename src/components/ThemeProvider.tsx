'use client';

import { useEffect } from 'react';

export function ThemeProvider({ defaultTheme = 'dark' }: { defaultTheme?: 'dark' | 'light' }) {
  useEffect(() => {
    const stored = window.localStorage.getItem('verix-theme');
    const theme = stored === 'light' || stored === 'dark' ? stored : defaultTheme;
    document.documentElement.dataset.theme = theme;
  }, [defaultTheme]);

  return null;
}
