import type { ReactNode } from 'react';
import { Clock, Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { EngineeringField } from '@/components/EngineeringField';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';
import { ServicesGrid } from '@/components/ServicesGrid';
import { UltimateHome } from '@/components/UltimateHome';
import { company, getDictionary, getProjects } from '@/data/content';
import type { Locale } from '@/lib/i18n';

const mapUrl = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Makkah Saudi Arabia');

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const projects = getProjects(params.locale);
  return (
    <>
      <div id="home">
        <UltimateHome locale={params.locale} dict={dict} projects={projects} />
      </div>

      <section id="services" className="scroll-mt-28">
        <ServicesGrid dict={dict} heading />
      </section>

      <section id="projects" className="relative scroll-mt-28 overflow-hidden pb-20 pt-16">
        <EngineeringField />
        <div className="container-luxury relative z-10">
          <SectionHeading eyebrow={dict.projectsPage.eyebrow} title={dict.projectsPage.title} lead={dict.projectsPage.lead} center />
          <ProjectFilter dict={dict} projects={projects} />
        </div>
      </section>

      <section id="about" className="relative scroll-mt-28 overflow-hidden border-y border-line/15 bg-surface/35 py-24">
        <div className="container-luxury">
          <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} center />
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="reveal luxury-card rounded-[2.25rem] p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.about.visionTitle}</p>
              <h3 className="mt-5 text-3xl font-semibold text-text">{dict.about.visionTitle}</h3>
              <p className="mt-5 text-lg leading-9 text-muted/80">{dict.about.vision}</p>
            </article>
            <article className="reveal luxury-card rounded-[2.25rem] p-8 md:p-10">
              <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.about.missionTitle}</p>
              <h3 className="mt-5 text-3xl font-semibold text-text">{dict.about.missionTitle}</h3>
              <p className="mt-5 text-lg leading-9 text-muted/80">{dict.about.mission}</p>
            </article>
          </div>

          <div className="stagger-group mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {dict.values.map((value) => (
              <article key={value.title} className="stagger-item rounded-[2rem] border border-line/15 bg-bg/60 p-6">
                <h3 className="text-2xl font-semibold text-text">{value.title}</h3>
                <p className="mt-4 leading-8 text-muted/80">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative scroll-mt-28 overflow-hidden pb-28 pt-24">
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
                <InfoStatic icon={<Clock className="h-5 w-5" />} title={params.locale === 'ar' ? 'ساعات العمل' : params.locale === 'fr' ? 'Horaires' : 'Working Hours'} value={company.hours[params.locale]} />
              </div>
            </div>
            <ContactForm locale={params.locale} dict={dict} />
          </div>
        </div>
      </section>
    </>
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

function InfoStatic({ icon, title, value }: { icon: ReactNode; title: string; value: string }) {
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
