import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/data/content';
import { localizePath, type Locale } from '@/lib/i18n';

export function CTA({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const Arrow = locale === 'ar' ? ArrowUpLeft : ArrowUpRight;
  return (
    <section className="relative overflow-hidden py-24">
      <div className="container-luxury">
        <div className="reveal relative overflow-hidden rounded-[2.5rem] border border-gold/25 bg-gradient-to-br from-gold/20 via-text/10 to-transparent p-8 shadow-gold md:p-12">
          <div className="absolute inset-0 bg-[url('/images/ui/blueprint-lines.svg')] bg-cover opacity-20" aria-hidden="true" />
          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-luxe text-gold">VERIX</p>
              <h2 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-tight md:text-6xl">{dict.contactPage.title}</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted/90">{dict.contactPage.lead}</p>
            </div>
            <Link href={localizePath(locale, '/contact')} className="luxury-button bg-gold text-bg hover:shadow-gold">
              {dict.common.contact}
              <Arrow className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
