import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpLeft, ArrowUpRight } from 'lucide-react';
import type { Dictionary, Project } from '@/data/content';
import { localizePath, type Locale } from '@/lib/i18n';
import { SectionHeading } from './SectionHeading';

export function ProjectsPreview({ locale, dict, projects }: { locale: Locale; dict: Dictionary; projects: Project[] }) {
  const Arrow = locale === 'ar' ? ArrowUpLeft : ArrowUpRight;
  const selected = projects.slice(0, 4);
  return (
    <section className="py-24">
      <div className="container-luxury">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow={dict.home.featuredProjects} title={dict.projectsPage.title} lead={dict.projectsPage.lead} />
          <Link href={localizePath(locale, '/projects')} className="luxury-button border border-line/20 text-text hover:border-gold/60 hover:text-gold">
            {dict.common.discover}
            <Arrow className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {selected.map((project, index) => (
            <article key={project.id} className="reveal group overflow-hidden rounded-[2rem] border border-line/15 bg-surface/70 shadow-luxury">
              <div className="image-reveal relative h-[360px] overflow-hidden">
                <Image src={project.image} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/90 via-transparent to-transparent" />
              </div>
              <div className="p-7">
                <p className="text-xs font-bold uppercase tracking-luxe text-gold">{dict.categories[project.category as keyof typeof dict.categories]}</p>
                <h3 className="mt-4 text-3xl font-semibold text-text">{project.title}</h3>
                <p className="mt-4 leading-8 text-muted/80">{project.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
