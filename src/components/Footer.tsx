import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { company, type Dictionary } from '@/data/content';
import type { Locale } from '@/lib/i18n';
import { Logo } from './Logo';

const links = [
  { key: 'home', hash: '#home' },
  { key: 'services', hash: '#services' },
  { key: 'projects', hash: '#projects' },
  { key: 'about', hash: '#about' },
  { key: 'contact', hash: '#contact' }
] as const;

function anchorPath(locale: Locale, hash: string) {
  return `/${locale}${hash}`;
}

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Makkah Saudi Arabia');

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
              <Link key={link.key} href={anchorPath(locale, link.hash)} className="text-muted/80 transition hover:text-gold">
                {dict.nav[link.key]}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-luxe text-gold">{dict.nav.contact}</p>
          <div className="mt-5 grid gap-4 text-muted/80">
            <div className="flex items-start gap-3"><Phone className="mt-1 h-4 w-4 shrink-0 text-gold" /> <span dir="ltr" className="flex flex-wrap gap-x-2 text-left font-medium tracking-wide"><a href={`tel:${company.phone.replace(/\s+/g, '')}`} className="transition hover:text-gold"><bdi>{company.phone}</bdi></a><span aria-hidden="true">/</span><a href={`tel:${company.secondaryPhone.replace(/\s+/g, '')}`} className="transition hover:text-gold"><bdi>{company.secondaryPhone}</bdi></a></span></div>
            <a href={`mailto:${company.email}`} className="flex items-center gap-3 transition hover:text-gold"><Mail className="h-4 w-4 text-gold" /> <bdi dir="ltr">{company.email}</bdi></a>
            <a href={mapUrl} target="_blank" rel="noreferrer" className="flex items-center gap-3 transition hover:text-gold"><MapPin className="h-4 w-4 text-gold" /> {company.address[locale]}</a>
          </div>
        </div>
      </div>
      <div className="container-luxury mt-12 flex flex-col gap-4 border-t border-line/15 pt-6 text-sm text-muted/60 md:flex-row md:items-center md:justify-between">
        <p>© 2026 {company.name}. {locale === 'ar' ? 'جميع الحقوق محفوظة.' : locale === 'fr' ? 'Tous droits réservés.' : 'All rights reserved.'}</p>
        <p><bdi dir="ltr">{company.website}</bdi></p>
      </div>
    </footer>
  );
}
