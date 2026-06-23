import type { Dictionary, Service } from '@/data/content';
import { SectionHeading } from './SectionHeading';

export function ServicesGrid({ dict, limit, heading = true }: { dict: Dictionary; limit?: number; heading?: boolean }) {
  const items = limit ? dict.services.slice(0, limit) : dict.services;
  return (
    <section className="relative py-24">
      <div className="container-luxury">
        {heading && <SectionHeading eyebrow={dict.servicesPage.eyebrow} title={dict.servicesPage.title} lead={dict.servicesPage.lead} center />}
        <div className="stagger-group mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {items.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="stagger-item group relative overflow-hidden rounded-[2rem] border border-line/15 bg-surface/70 p-7 shadow-luxury transition duration-500 hover:-translate-y-1 hover:border-gold/40">
      <span className="absolute end-6 top-5 text-7xl font-semibold leading-none text-text/[.045] transition group-hover:text-gold/15">{service.number}</span>
      <span className="block h-px w-14 bg-gold" />
      <h3 className="mt-8 text-2xl font-semibold text-text">{service.title}</h3>
      <p className="mt-5 leading-8 text-muted/80">{service.description}</p>
    </article>
  );
}
