import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import type { Dictionary } from '@/data/content';
import { localizePath, type Locale } from '@/lib/i18n';
import { EngineeringField } from './EngineeringField';

function splitTitle(title: string) {
  const parts = title.split(' ');
  const midpoint = Math.ceil(parts.length / 2);
  return [parts.slice(0, midpoint).join(' '), parts.slice(midpoint).join(' ')];
}

export function Hero({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const Arrow = locale === 'ar' ? ArrowUpLeft : ArrowUpRight;
  const lines = splitTitle(dict.home.title);

  return (
    <section className="relative min-h-screen overflow-hidden pb-16 pt-32 md:pt-40">
      <EngineeringField />
      <div className="container-luxury relative z-10 grid min-h-[720px] gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
        <div className="order-2 lg:order-1">
          <div className="hero-visual relative image-mask rounded-[2.2rem] border border-line/15 bg-surface shadow-luxury">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-bg/80 via-bg/20 to-transparent" aria-hidden="true" />
            <Image
              src="/images/ui/hero-architecture.svg"
              alt="Luxury engineering architecture concept"
              width={1400}
              height={900}
              className="h-[520px] w-full object-cover md:h-[660px]"
              priority
            />
            <div className="absolute bottom-6 left-6 right-6 z-20 rounded-[1.8rem] border border-line/15 bg-bg/70 p-5 backdrop-blur-xl md:p-7">
              <p className="text-xs font-bold uppercase tracking-luxe text-gold">{locale === 'ar' ? 'معتمد · دقيق · واضح' : locale === 'fr' ? 'Certifié · Précis · Clair' : 'Certified · Accurate · Clear'}</p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-text/90">{dict.home.subtitle}</p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <p className="hero-kicker gold-line text-xs font-bold uppercase tracking-luxe text-gold">{dict.home.eyebrow}</p>
          <h1 className="mt-8 text-balance text-5xl font-semibold leading-[1.08] text-text md:text-7xl lg:text-8xl">
            {lines.map((line) => (
              <span key={line} className="hero-title-word block">
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p className="hero-copy mt-7 max-w-3xl text-xl leading-10 text-muted/90 md:text-2xl">{dict.home.description}</p>

          <div className="hero-copy mt-9 flex flex-col gap-4 sm:flex-row">
            <Link href={localizePath(locale, '/projects')} className="luxury-button bg-gold text-bg hover:shadow-gold">
              {dict.common.discover}
              <Arrow className="h-4 w-4" />
            </Link>
            <Link href={localizePath(locale, '/contact')} className="luxury-button border border-line/25 text-text hover:border-gold/60 hover:text-gold">
              {dict.common.contact}
            </Link>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-3">
            {dict.home.trust.map((item) => (
              <div key={item} className="hero-trust rounded-2xl border border-line/15 bg-text/5 p-4 text-sm leading-7 text-muted/80">
                <span className="mb-3 block h-px w-12 bg-gold" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="container-luxury relative z-10 mt-10 flex items-center justify-center text-muted/70">
        <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe">
          {dict.common.scroll}
          <ArrowDown className="h-4 w-4 animate-bounce text-gold" />
        </span>
      </div>
    </section>
  );
}
