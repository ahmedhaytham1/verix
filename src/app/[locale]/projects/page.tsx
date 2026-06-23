import { EngineeringField } from '@/components/EngineeringField';
import { ProjectFilter } from '@/components/ProjectFilter';
import { SectionHeading } from '@/components/SectionHeading';
import { getDictionary, getProjects } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export default function ProjectsPage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const projects = getProjects(params.locale);
  return (
    <section className="relative overflow-hidden pb-28 pt-36 md:pt-44">
      <EngineeringField />
      <div className="container-luxury relative z-10">
        <SectionHeading eyebrow={dict.projectsPage.eyebrow} title={dict.projectsPage.title} lead={dict.projectsPage.lead} center />
        <ProjectFilter dict={dict} projects={projects} />
      </div>
    </section>
  );
}
