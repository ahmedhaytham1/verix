export function SectionHeading({ eyebrow, title, lead, center = false }: { eyebrow: string; title: string; lead?: string; center?: boolean }) {
  return (
    <div className={`reveal ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      <p className="gold-line text-xs font-bold uppercase tracking-luxe text-gold">{eyebrow}</p>
      <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-text md:text-6xl">{title}</h2>
      {lead && <p className="mt-6 text-lg leading-9 text-muted/80 md:text-xl">{lead}</p>}
    </div>
  );
}
