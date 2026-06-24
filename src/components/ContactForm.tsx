'use client';

import { FormEvent, useState } from 'react';
import { company } from '@/data/content';
import type { Dictionary } from '@/data/content';
import type { Locale } from '@/lib/i18n';

type ContactFormProps = {
  locale: Locale;
  dict: Dictionary;
};

function getLabels(locale: Locale) {
  if (locale === 'ar') {
    return {
      nameRequired: 'من فضلك اكتب الاسم.',
      phoneRequired: 'من فضلك اكتب رقم الهاتف.',
      serviceRequired: 'من فضلك اكتب الخدمة المطلوبة.',
      messageRequired: 'من فضلك اكتب تفاصيل المشروع.',
      whatsappTitle: 'طلب استشارة جديد من موقع Verix',
      name: 'الاسم',
      phone: 'رقم الهاتف',
      service: 'الخدمة المطلوبة',
      message: 'تفاصيل المشروع',
      source: 'المصدر',
      website: 'موقع Verix'
    };
  }

  if (locale === 'fr') {
    return {
      nameRequired: 'Veuillez saisir votre nom.',
      phoneRequired: 'Veuillez saisir votre numéro de téléphone.',
      serviceRequired: 'Veuillez saisir le service demandé.',
      messageRequired: 'Veuillez saisir les détails du projet.',
      whatsappTitle: 'Nouvelle demande de consultation depuis le site Verix',
      name: 'Nom',
      phone: 'Téléphone',
      service: 'Service demandé',
      message: 'Détails du projet',
      source: 'Source',
      website: 'Site Verix'
    };
  }

  return {
    nameRequired: 'Please enter your name.',
    phoneRequired: 'Please enter your phone number.',
    serviceRequired: 'Please enter the required service.',
    messageRequired: 'Please enter the project details.',
    whatsappTitle: 'New consultation request from Verix website',
    name: 'Name',
    phone: 'Phone',
    service: 'Required service',
    message: 'Project details',
    source: 'Source',
    website: 'Verix website'
  };
}

export function ContactForm({ locale, dict }: ContactFormProps) {
  const labels = getLabels(locale);
  const [error, setError] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').trim();
    const service = String(data.get('service') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!name) return setError(labels.nameRequired);
    if (!phone) return setError(labels.phoneRequired);
    if (!service) return setError(labels.serviceRequired);
    if (!message) return setError(labels.messageRequired);

    setError('');

    const whatsappMessage = [
      `*${labels.whatsappTitle}*`,
      '',
      `*${labels.name}:* ${name}`,
      `*${labels.phone}:* ${phone}`,
      `*${labels.service}:* ${service}`,
      `*${labels.message}:*`,
      message,
      '',
      `*${labels.source}:* ${labels.website}`
    ].join('\n');

    const url = `https://wa.me/00966564014047?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = url;
  }

  return (
    <form onSubmit={handleSubmit} className="reveal rounded-[2.25rem] border border-line/15 bg-surface/70 p-8 shadow-luxury md:p-10">
      <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.contactPage.formTitle}</p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field name="name" label={dict.contactPage.name} autoComplete="name" />
        <Field name="phone" label={dict.contactPage.phone} autoComplete="tel" inputMode="tel" />
      </div>

      <div className="mt-5">
        <Field name="service" label={dict.contactPage.service} autoComplete="off" />
      </div>

      <label className="mt-5 block">
        <span className="mb-2 block text-sm font-semibold text-muted/80">{dict.contactPage.message}</span>
        <textarea
          name="message"
          rows={7}
          className="w-full resize-none rounded-3xl border border-line/15 bg-bg/70 px-5 py-4 outline-none transition placeholder:text-muted/50 focus:border-gold/60"
        />
      </label>

      {error && (
        <p className="mt-4 rounded-2xl border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </p>
      )}

      <button type="submit" className="luxury-button mt-6 bg-gold text-bg hover:shadow-gold">
        {dict.contactPage.submit}
      </button>

      <p className="mt-5 text-sm leading-7 text-muted/60">{dict.contactPage.note}</p>
    </form>
  );
}

function Field({
  label,
  name,
  autoComplete,
  inputMode
}: {
  label: string;
  name: string;
  autoComplete?: string;
  inputMode?: 'tel' | 'text' | 'email' | 'numeric' | 'decimal' | 'search' | 'url';
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-muted/80">{label}</span>
      <input
        name={name}
        autoComplete={autoComplete}
        inputMode={inputMode}
        dir={inputMode === 'tel' ? 'ltr' : undefined}
        className={`w-full rounded-full border border-line/15 bg-bg/70 px-5 py-4 outline-none transition placeholder:text-muted/50 focus:border-gold/60 ${inputMode === 'tel' ? 'text-left tracking-wide' : ''}`}
      />
    </label>
  );
}
