import type { ReactNode } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { EngineeringField } from '@/components/EngineeringField';
import { SectionHeading } from '@/components/SectionHeading';
import { company, getDictionary } from '@/data/content';
import { ContactForm } from '@/components/ContactForm';
import type { Locale } from '@/lib/i18n';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Makkah Saudi Arabia');

export default function ContactPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  return (
    <section className="relative min-h-screen overflow-hidden pb-28 pt-36 md:pt-44">
      <EngineeringField />
      <div className="container-luxury relative z-10">
        <SectionHeading eyebrow={dict.contactPage.eyebrow} title={dict.contactPage.title} lead={dict.contactPage.lead} center />
        <div className="mt-14 grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
          <div className="reveal luxury-card rounded-[2.25rem] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.nav.contact}</p>
            <div className="mt-8 grid gap-5">
              <InfoLink href={`tel:${company.phone.replace(/\s+/g, '')}`} icon={<Phone className="h-5 w-5" />} title={dict.contactPage.phone} value={`${company.phone} / ${company.secondaryPhone}`} dir="ltr" />
              <InfoLink href={`mailto:${company.email}`} icon={<Mail className="h-5 w-5" />} title={params.locale === 'ar' ? 'البريد الإلكتروني' : params.locale === 'fr' ? 'E-mail' : 'Email'} value={company.email} dir="ltr" />
              <InfoLink href={mapUrl} icon={<MapPin className="h-5 w-5" />} title={params.locale === 'ar' ? 'العنوان' : params.locale === 'fr' ? 'Adresse' : 'Address'} value={company.address[params.locale]} />
              <Info icon={<Clock className="h-5 w-5" />} title={params.locale === 'ar' ? 'ساعات العمل' : params.locale === 'fr' ? 'Horaires' : 'Working Hours'} value={company.hours[params.locale]} />
            </div>
          </div>
          <ContactForm locale={params.locale} dict={dict} />
        </div>
      </div>
    </section>
  );
}

function InfoLink({ icon, title, value, href, dir = 'auto' }: { icon: ReactNode; title: string; value: string; href: string; dir?: 'rtl' | 'ltr' | 'auto' }) {
  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="group flex gap-4 rounded-3xl border border-line/15 bg-text/5 p-5 transition hover:border-gold/40 hover:bg-gold/10">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold transition group-hover:bg-gold group-hover:text-bg">{icon}</span>
      <span>
        <span className="block font-semibold text-text">{title}</span>
        <span dir={dir} className={`mt-2 block leading-7 text-muted/80 ${dir === 'ltr' ? 'text-left font-medium tracking-wide' : ''}`}><bdi>{value}</bdi></span>
      </span>
    </a>
  );
}

function Info({ icon, title, value, dir = 'auto' }: { icon: ReactNode; title: string; value: string; dir?: 'rtl' | 'ltr' | 'auto' }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-line/15 bg-text/5 p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">{icon}</span>
      <div>
        <p className="font-semibold text-text">{title}</p>
        <p dir={dir} className={`mt-2 leading-7 text-muted/80 ${dir === 'ltr' ? 'text-left font-medium tracking-wide' : ''}`}><bdi>{value}</bdi></p>
      </div>
    </div>
  );
}
