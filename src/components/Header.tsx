'use client';

import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle('mobile-menu-open', open);
    return () => document.body.classList.remove('mobile-menu-open');
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-4 md:pt-4">
      <div className="container-luxury mobile-header-container">
        <div className="glass-panel flex h-14 items-center justify-between rounded-full px-3 shadow-luxury md:h-20 md:px-5">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line/15 text-text transition hover:border-gold/50 hover:text-gold lg:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

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

          <Link href={localizePath(locale, '/')} aria-label="Verix home" className="shrink-0">
            <Logo />
          </Link>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-3 top-[5.1rem] z-50 lg:hidden">
          <div className="mobile-menu-panel max-h-[calc(100dvh-6rem)] overflow-y-auto rounded-[1.8rem] border border-line/15 bg-bg/95 p-4 shadow-2xl backdrop-blur-2xl">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  href={localizePath(locale, item.href)}
                  className="rounded-2xl border border-line/10 bg-text/[.035] px-4 py-4 text-base font-semibold text-text transition hover:border-gold/40 hover:text-gold"
                >
                  {dict.nav[item.key]}
                </Link>
              ))}
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2 border-t border-line/15 pt-4">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={switchLocalePath(pathname, item)}
                  className={`rounded-2xl border border-line/15 px-3 py-3 text-center text-xs font-bold tracking-[.16em] ${
                    item === locale ? 'bg-gold text-bg' : 'text-text/70'
                  }`}
                >
                  {localeMeta[item].native}
                </Link>
              ))}
            </div>

            <div className="mt-4 flex items-center justify-between gap-3">
              <ThemeToggle darkLabel={dict.common.dark} lightLabel={dict.common.light} />
              <Link href={localizePath(locale, '/contact')} className="luxury-button flex-1 bg-gold text-bg hover:shadow-gold">
                {dict.nav.cta}
              </Link>
            </div>
          </div>
        </div>
      )}

      {open && <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px] lg:hidden" onClick={() => setOpen(false)} aria-hidden="true" />}
    </header>
  );
}
