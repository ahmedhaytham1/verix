import Image from 'next/image';
import { company } from '@/data/content';

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-text/10 ring-1 ring-line/15">
        <Image src="/images/verix-mark.png" alt="Verix" width={44} height={30} className="object-contain" priority />
      </span>
      {!compact && (
        <span className="leading-none">
          <span className="block text-xl font-bold tracking-[.32em] text-text">{company.name}</span>
          <span className="mt-2 block text-[10px] font-semibold uppercase tracking-luxe text-gold">Engineering Consultants</span>
        </span>
      )}
    </div>
  );
}
