import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company, type Dictionary } from '@/data/content';
import { localizePath, type Locale } from '@/lib/i18n';
import { Logo } from './Logo';

const links = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/services' },
  { key: 'projects', href: '/projects' },
  { key: 'about', href: '/about' },
  { key: 'contact', href: '/contact' }
] as const;

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return (
    <footer className="border-t border-line/15 bg-bg py-14">
      <div className="container-luxury grid gap-10 lg:grid-cols-[1.15fr_.85fr_.9fr]">
        <div>
          <Logo />
          <p className="mt-6 max-w-xl leading-8 text-muted/80">{dict.home.subtitle}</p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-luxe text-gold">{dict.nav.home}</p>
          <div className="mt-5 grid gap-3">
            {links.map((link) => (
              <Link key={link.key} href={localizePath(locale, link.href)} className="text-muted/80 transition hover:text-gold">
                {dict.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-luxe text-gold">{dict.nav.contact}</p>
          <div className="mt-5 grid gap-4 text-muted/80">
            <p className="flex items-center gap-3"><Phone className="h-4 w-4 text-gold" /> {company.phone}</p>
            <p className="flex items-center gap-3"><Mail className="h-4 w-4 text-gold" /> {company.email}</p>
            <p className="flex items-center gap-3"><MapPin className="h-4 w-4 text-gold" /> {company.address[locale]}</p>
          </div>
        </div>
      </div>
      <div className="container-luxury mt-12 flex flex-col gap-4 border-t border-line/15 pt-6 text-sm text-muted/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {company.name}. {locale === 'ar' ? 'جميع الحقوق محفوظة.' : locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        <p>{company.website}</p>
      </div>
    </footer>
  );
}
