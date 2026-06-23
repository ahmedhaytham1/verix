'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Dictionary } from '@/data/content';
import { localeMeta, locales, localizePath, type Locale } from '@/lib/i18n';
import { Logo } from './Logo';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' }
] as const;

function switchLocalePath(pathname: string, nextLocale: Locale) {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return `/${nextLocale}`;
  parts[0] = nextLocale;
  return `/${parts.join('/')}`;
}

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div className="container-luxury">
        <div className="glass-panel flex h-16 items-center justify-between rounded-full px-3 shadow-luxury md:h-20 md:px-5">
          <Link href={localizePath(locale, '/')} aria-label="Verix home" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={localizePath(locale, item.href)}
                className="rounded-full px-4 py-2 text-sm font-semibold text-text/70 transition hover:bg-text/10 hover:text-gold"
              >
                {dict.nav[item.key]}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex rounded-full border border-line/15 p-1">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={switchLocalePath(pathname, item)}
                  className={`rounded-full px-3 py-2 text-xs font-bold tracking-[.18em] transition ${
                    item === locale ? 'bg-gold text-bg' : 'text-text/60 hover:text-gold'
                  }`}
                >
                  {localeMeta[item].label}
                </Link>
              ))}
            </div>
            <ThemeToggle darkLabel={dict.common.dark} lightLabel={dict.common.light} />
            <Link href={localizePath(locale, '/contact')} className="luxury-button bg-text text-bg hover:shadow-gold">
              {dict.nav.cta}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line/15 text-text lg:hidden"
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="container-luxury mt-3 lg:hidden">
          <div className="glass-panel max-h-[calc(100vh-6rem)] overflow-y-auto rounded-[1.6rem] p-4">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  onClick={() => setOpen(false)}
                  href={localizePath(locale, item.href)}
                  className="rounded-2xl px-4 py-3 text-base font-semibold text-text/80 hover:bg-text/10 hover:text-gold"
                >
                  {dict.nav[item.key]}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-line/15 pt-4">
              {locales.map((item) => (
                <Link
                  key={item}
                  onClick={() => setOpen(false)}
                  href={switchLocalePath(pathname, item)}
                  className={`rounded-full border border-line/15 px-3 py-2 text-xs font-bold tracking-[.18em] ${
                    item === locale ? 'bg-gold text-bg' : 'text-text/60'
                  }`}
                >
                  {localeMeta[item].native}
                </Link>
              ))}
              <ThemeToggle darkLabel={dict.common.dark} lightLabel={dict.common.light} />
            </div>
            <Link
              onClick={() => setOpen(false)}
              href={localizePath(locale, '/contact')}
              className="luxury-button mt-4 bg-gold text-bg hover:shadow-gold"
            >
              {dict.nav.cta}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
