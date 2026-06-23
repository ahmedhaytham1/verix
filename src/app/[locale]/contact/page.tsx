import type { ReactNode } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { EngineeringField } from '@/components/EngineeringField';
import { SectionHeading } from '@/components/SectionHeading';
import { company, getDictionary } from '@/data/content';
import type { Locale } from '@/lib/i18n';

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
              <Info icon={<Phone className="h-5 w-5" />} title={dict.contactPage.phone} value={`${company.phone} / ${company.secondaryPhone}`} />
              <Info icon={<Mail className="h-5 w-5" />} title={params.locale === 'ar' ? 'البريد الإلكتروني' : params.locale === 'fr' ? 'E-mail' : 'Email'} value={company.email} />
              <Info icon={<MapPin className="h-5 w-5" />} title={params.locale === 'ar' ? 'العنوان' : params.locale === 'fr' ? 'Adresse' : 'Address'} value={company.address[params.locale]} />
              <Info icon={<Clock className="h-5 w-5" />} title={params.locale === 'ar' ? 'ساعات العمل' : params.locale === 'fr' ? 'Horaires' : 'Working Hours'} value={company.hours[params.locale]} />
            </div>
          </div>

          <form className="reveal rounded-[2.25rem] border border-line/15 bg-surface/70 p-8 shadow-luxury md:p-10">
            <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.contactPage.formTitle}</p>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              <Field label={dict.contactPage.name} />
              <Field label={dict.contactPage.phone} />
            </div>
            <div className="mt-5">
              <Field label={dict.contactPage.service} />
            </div>
            <label className="mt-5 block">
              <span className="mb-2 block text-sm font-semibold text-muted/80">{dict.contactPage.message}</span>
              <textarea rows={7} className="w-full rounded-3xl border border-line/15 bg-bg/70 px-5 py-4 outline-none transition placeholder:text-muted/50 focus:border-gold/60" />
            </label>
            <button type="button" className="luxury-button mt-6 bg-gold text-bg hover:shadow-gold">{dict.contactPage.submit}</button>
            <p className="mt-5 text-sm leading-7 text-muted/60">{dict.contactPage.note}</p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Info({ icon, title, value }: { icon: ReactNode; title: string; value: string }) {
  return (
    <div className="flex gap-4 rounded-3xl border border-line/15 bg-text/5 p-5">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">{icon}</span>
      <div>
        <p className="font-semibold text-text">{title}</p>
        <p className="mt-2 leading-7 text-muted/80">{value}</p>
      </div>
    </div>
  );
}

function Field({ label }: { label: string }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-muted/80">{label}</span>
      <input className="w-full rounded-full border border-line/15 bg-bg/70 px-5 py-4 outline-none transition placeholder:text-muted/50 focus:border-gold/60" />
    </label>
  );
}
