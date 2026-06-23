import { CTA } from '@/components/CTA';
import { EngineeringField } from '@/components/EngineeringField';
import { SectionHeading } from '@/components/SectionHeading';
import { ServicesGrid } from '@/components/ServicesGrid';
import { getDictionary } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export default function ServicesPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  return (
    <>
      <section className="relative overflow-hidden pb-14 pt-36 md:pt-44">
        <EngineeringField />
        <div className="container-luxury relative z-10">
          <SectionHeading eyebrow={dict.servicesPage.eyebrow} title={dict.servicesPage.title} lead={dict.servicesPage.lead} center />
        </div>
      </section>
      <ServicesGrid dict={dict} heading={false} />
      <CTA locale={params.locale} dict={dict} />
    </>
  );
}
