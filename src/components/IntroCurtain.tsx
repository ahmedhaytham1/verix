'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import type { Locale } from '@/lib/i18n';

export function IntroCurtain({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add('no-scroll');
    const timer = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove('no-scroll');
    }, 980);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove('no-scroll');
    };
  }, []);

  if (!visible) return null;

  const label = locale === 'ar' ? 'وضوح هندسي قبل التنفيذ' : locale === 'fr' ? 'Clarté d’ingénierie avant l’exécution' : 'Engineering clarity before execution';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#111111] text-[#F8F5EE]">
      <div className="text-center">
        <Image src="/images/verix-mark.png" alt="Verix" width={96} height={64} className="mx-auto mb-7" priority />
        <p className="text-sm font-semibold uppercase tracking-luxe text-[#C6A15B]">VERIX</p>
        <p className="mt-4 text-sm text-[#D8D1C4]">{label}</p>
        <span className="mx-auto mt-7 block h-px w-52 overflow-hidden bg-[#3B3020]">
          <span className="block h-full w-1/2 animate-[loadingLine_.9s_ease-in-out_infinite] bg-[#C6A15B]" />
        </span>
      </div>
      <style jsx>{`
        @keyframes loadingLine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
      `}</style>
    </div>
  );
}
