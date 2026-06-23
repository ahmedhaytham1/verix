import { UltimateHome } from '@/components/UltimateHome';
import { getDictionary, getProjects } from '@/data/content';
import type { Locale } from '@/lib/i18n';

export default function HomePage({ params }: { params: { locale: Locale } }) {
  const dict = getDictionary(params.locale);
  const projects = getProjects(params.locale);
  return <UltimateHome locale={params.locale} dict={dict} projects={projects} />;
}
