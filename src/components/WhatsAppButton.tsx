import { MessageCircle } from 'lucide-react';
import { company } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export function WhatsAppButton({ label }: { locale: Locale; label: string }) {
  return (
    <a
      href={`https://wa.me/${company.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,.34)] transition hover:-translate-y-1 hover:scale-105"
      aria-label={label}
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
