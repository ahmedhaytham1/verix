'use client';

import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

export function ThemeToggle({ darkLabel, lightLabel }: { darkLabel: string; lightLabel: string }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const current = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
    setTheme(current);
  }, []);

  function toggleTheme() {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem('verix-theme', next);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? lightLabel : darkLabel}
      className="group inline-flex h-11 items-center gap-2 rounded-full border border-line/20 px-4 text-xs font-semibold uppercase tracking-[.22em] text-text/80 transition hover:border-gold/60 hover:text-gold"
    >
      <span className="relative flex h-5 w-5 items-center justify-center overflow-hidden">
        <Sun className={`absolute h-4 w-4 transition ${theme === 'light' ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`} />
        <Moon className={`absolute h-4 w-4 transition ${theme === 'dark' ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`} />
      </span>
      <span className="hidden sm:inline">{theme === 'dark' ? darkLabel : lightLabel}</span>
    </button>
  );
}
