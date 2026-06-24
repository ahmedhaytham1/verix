import { MessageCircle } from 'lucide-react';
import { company } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export function WhatsAppButton({ label }: { locale: Locale; label: string }) {
  return (
    <a
      href="https://wa.me/00966564014047"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-[calc(env(safe-area-inset-bottom)+5.5rem)] end-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,.34)] transition hover:-translate-y-1 hover:scale-105 md:bottom-6 md:end-6 md:h-14 md:w-14"
      aria-label={label}
    >
      <MessageCircle className="h-5 w-5 md:h-6 md:w-6" />
    </a>
  );
}
