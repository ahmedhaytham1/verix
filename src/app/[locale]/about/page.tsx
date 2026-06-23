import { CTA } from '@/components/CTA';
import { EngineeringField } from '@/components/EngineeringField';
import { SectionHeading } from '@/components/SectionHeading';
import { company, getDictionary } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export default function AboutPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  return (
    <>
      <section className="relative overflow-hidden pb-16 pt-36 md:pt-44">
        <EngineeringField />
        <div className="container-luxury relative z-10">
          <SectionHeading eyebrow={dict.about.eyebrow} title={dict.about.title} lead={dict.about.lead} center />
        </div>
      </section>
      <section className="pb-24">
        <div className="container-luxury grid gap-6 md:grid-cols-2">
          <article className="reveal luxury-card rounded-[2.25rem] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.about.visionTitle}</p>
            <h2 className="mt-6 text-4xl font-semibold">{dict.about.visionTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-muted/80">{dict.about.vision}</p>
          </article>
          <article className="reveal luxury-card rounded-[2.25rem] p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.about.missionTitle}</p>
            <h2 className="mt-6 text-4xl font-semibold">{dict.about.missionTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-muted/80">{dict.about.mission}</p>
          </article>
        </div>
      </section>
      <section className="border-y border-line/15 bg-surface/40 py-24">
        <div className="container-luxury grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <SectionHeading eyebrow={dict.about.valuesTitle} title={dict.about.valuesTitle} lead={dict.about.chairman} />
          <div className="stagger-group grid gap-5 md:grid-cols-2">
            {dict.values.map((value) => (
              <article key={value.title} className="stagger-item rounded-[2rem] border border-line/15 bg-bg/60 p-7">
                <h3 className="text-2xl font-semibold text-text">{value.title}</h3>
                <p className="mt-4 leading-8 text-muted/80">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="py-24">
        <div className="container-luxury grid gap-6 lg:grid-cols-2">
          <article className="reveal rounded-[2.25rem] border border-line/15 bg-text/5 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.about.branchesTitle}</p>
            <h2 className="mt-6 text-4xl font-semibold">{dict.about.branchesTitle}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {company.branches[params.locale].map((branch) => (
                <span key={branch} className="rounded-full border border-line/15 px-4 py-2 text-muted/80">{branch}</span>
              ))}
            </div>
          </article>
          <article className="reveal rounded-[2.25rem] border border-line/15 bg-text/5 p-8 md:p-10">
            <p className="text-sm font-bold uppercase tracking-luxe text-gold">{dict.about.accreditationsTitle}</p>
            <h2 className="mt-6 text-4xl font-semibold">{dict.about.accreditationsTitle}</h2>
            <p className="mt-6 text-lg leading-9 text-muted/80">{dict.about.accreditations}</p>
          </article>
        </div>
      </section>
      <CTA locale={params.locale} dict={dict} />
    </>
  );
}
