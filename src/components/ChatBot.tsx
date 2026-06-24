'use client';

import { MessageCircle, Send, X } from 'lucide-react';
import { FormEvent, useMemo, useState } from 'react';
import { company, type Dictionary } from '@/data/content';
import type { Locale } from '@/lib/i18n';

type Message = { role: 'bot' | 'user'; text: string };

function makeAnswer(locale: Locale, dict: Dictionary, question: string) {
  const q = question.toLowerCase();
  const serviceText = dict.services.slice(0, 8).map((service) => service.title).join('، ');
  const branches = company.branches[locale].join(locale === 'ar' ? '، ' : ', ');

  if (/service|خدم|خدمات|services|خدمة|service|services|prestations/.test(q)) {
    if (locale === 'ar') return `تقدم Verix خدمات مثل: ${serviceText}. ويمكن استعراض جميع الخدمات من صفحة الخدمات.`;
    if (locale === 'fr') return `Verix propose notamment : ${serviceText}. Tous les services sont disponibles dans la page Services.`;
    return `Verix provides services such as: ${serviceText}. You can review all services on the Services page.`;
  }
  if (/project|مشروع|مشاريع|portfolio|projet/.test(q)) {
    if (locale === 'ar') return 'تشمل محفظة Verix مشاريع فندقية وسكنية وتجارية وبنية تحتية ومحطات وقود، مع عرض صور كل مشروع بشكل منفصل وواضح داخل صفحة المشاريع.';
    if (locale === 'fr') return 'Le portefeuille Verix comprend des projets hôteliers, résidentiels, commerciaux, d’infrastructure et des stations-service, avec des visuels clairs et séparés pour chaque projet.';
    return 'The Verix portfolio includes hospitality, residential, commercial, infrastructure and fuel-station projects, with each project presented through clear separated visuals.';
  }
  if (/contact|phone|email|whatsapp|تواصل|هاتف|ايميل|بريد|اتصال|contact|téléphone/.test(q)) {
    if (locale === 'ar') return `يمكنك التواصل مع Verix عبر الهاتف/واتساب: ${company.phone} أو البريد الإلكتروني: ${company.email}.`;
    if (locale === 'fr') return `Vous pouvez contacter Verix par téléphone/WhatsApp : ${company.phone} ou par e-mail : ${company.email}.`;
    return `You can contact Verix by phone/WhatsApp: ${company.phone} or by email: ${company.email}.`;
  }
  if (/branch|فرع|فروع|presence|country|countries|pays|présence/.test(q)) {
    if (locale === 'ar') return `نطاق حضور Verix يشمل: ${branches}.`;
    if (locale === 'fr') return `La présence de Verix comprend : ${branches}.`;
    return `Verix presence includes: ${branches}.`;
  }
  if (/اعتماد|accredit|qualification|certification|accréditation/.test(q)) {
    if (locale === 'ar') return 'تعرض الشركة اعتمادات وتأهيلات رسمية ضمن ملفها التعريفي، بما يعكس الالتزام بالمتطلبات المهنية والتنظيمية.';
    if (locale === 'fr') return 'L’entreprise présente des accréditations et qualifications officielles dans son profil, reflétant son engagement professionnel et réglementaire.';
    return 'The company presents official accreditations and qualifications within its profile, reflecting professional and regulatory commitment.';
  }
  return dict.chat.fallback;
}

export function ChatBot({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([{ role: 'bot', text: dict.chat.welcome }]);
  const suggestions = useMemo(() => dict.chat.suggestions, [dict.chat.suggestions]);

  function ask(text: string) {
    const value = text.trim();
    if (!value) return;
    setMessages((items) => [...items, { role: 'user', text: value }, { role: 'bot', text: makeAnswer(locale, dict, value) }]);
    setInput('');
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    ask(input);
  }

  return (
    <div className="fixed bottom-6 start-6 z-50 hidden md:block">
      {open && (
        <div className="mb-4 w-[min(360px,calc(100vw-40px))] overflow-hidden rounded-[2rem] border border-line/15 bg-bg/95 shadow-luxury backdrop-blur-xl">
          <div className="flex items-center justify-between border-b border-line/15 p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#25D366] text-white"><MessageCircle className="h-5 w-5" /></span>
              <div>
                <p className="font-semibold text-text">{dict.common.chatbot}</p>
                <p className="text-xs text-muted/80">{dict.common.ask}</p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 text-muted hover:bg-text/10 hover:text-gold"><X className="h-4 w-4" /></button>
          </div>
          <div className="custom-scrollbar flex max-h-80 flex-col gap-3 overflow-y-auto p-4">
            {messages.map((message, index) => (
              <p key={`${message.role}-${index}`} className={`rounded-2xl px-4 py-3 text-sm leading-7 ${message.role === 'bot' ? 'bg-text/10 text-text/90' : 'bg-gold text-bg'}`}>
                {message.text}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-2 border-t border-line/15 p-4 pt-3">
            {suggestions.map((item) => (
              <button key={item} onClick={() => ask(item)} className="rounded-full border border-line/15 px-3 py-1.5 text-xs text-muted transition hover:border-gold/60 hover:text-gold">
                {item}
              </button>
            ))}
          </div>
          <form onSubmit={onSubmit} className="flex items-center gap-2 border-t border-line/15 p-3">
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={dict.chat.placeholder} className="min-w-0 flex-1 rounded-full border border-line/15 bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted/60 focus:border-gold/60" />
            <button type="submit" className="grid h-11 w-11 place-items-center rounded-full bg-gold text-bg"><Send className="h-4 w-4" /></button>
          </form>
        </div>
      )}
      <button type="button" onClick={() => setOpen((value) => !value)} className="grid h-14 w-14 place-items-center rounded-full border border-[#25D366]/35 bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,.25)] backdrop-blur-xl transition hover:-translate-y-1 hover:scale-105" aria-label={dict.common.chatbot}>
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
}
