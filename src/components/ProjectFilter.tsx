'use client';

import Image from 'next/image';
import { useMemo, useState } from 'react';
import { ArrowUpLeft, ArrowUpRight, X } from 'lucide-react';
import type { Dictionary, Project } from '@/data/content';

const categories = ['all', 'hotels', 'mixed', 'residential', 'commercial', 'infrastructure', 'fuel'] as const;

function uniqueImages(project: Project) {
  return Array.from(new Set([project.image, ...(project.images || [])].filter(Boolean)));
}

export function ProjectFilter({ dict, projects }: { dict: Dictionary; projects: Project[] }) {
  const [active, setActive] = useState<(typeof categories)[number]>('all');
  const [selected, setSelected] = useState<Project | null>(null);
  const filtered = useMemo(() => (active === 'all' ? projects : projects.filter((project) => project.category === active)), [active, projects]);
  const isArabic = Boolean(dict.nav?.home === 'الرئيسية');
  const Arrow = isArabic ? ArrowUpLeft : ArrowUpRight;

  return (
    <div className="mt-12">
      <div className="stagger-group flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={`stagger-item rounded-full border px-5 py-3 text-sm font-semibold transition ${
              active === category ? 'border-gold bg-gold text-bg' : 'border-line/20 text-muted hover:border-gold/60 hover:text-gold'
            }`}
          >
            {dict.categories[category]}
          </button>
        ))}
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((project, index) => {
          const gallery = uniqueImages(project);
          const categoryLabel = dict.categories[project.category as keyof typeof dict.categories];

          return (
            <article key={project.id} className="reveal group overflow-hidden rounded-[2rem] border border-line/15 bg-surface/70 shadow-luxury transition duration-300 hover:-translate-y-1 hover:border-gold/30">
              <button type="button" onClick={() => setSelected(project)} className="block w-full text-start">
                <div className="relative aspect-[4/3] overflow-hidden bg-bg/80">
                  <Image
                    src={gallery[0]}
                    alt={project.title}
                    fill
                    priority={index < 4}
                    quality={95}
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                    <div className="mb-3 inline-flex rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-semibold text-gold backdrop-blur">
                      {categoryLabel}
                    </div>
                    <h3 className="text-2xl font-semibold leading-tight text-white">{project.title}</h3>
                  </div>
                </div>

                <div className="space-y-5 p-6">
                  <p className="line-clamp-3 text-base leading-8 text-muted/85">{project.description}</p>
                  <div className="flex items-center justify-between text-sm font-semibold text-gold">
                    <span>{isArabic ? 'عرض المشروع' : dict.nav.home === 'Accueil' ? 'Voir le projet' : 'View Project'}</span>
                    <Arrow className="h-4 w-4" />
                  </div>
                </div>
              </button>
            </article>
          );
        })}
      </div>

      {selected && <ProjectModal project={selected} dict={dict} onClose={() => setSelected(null)} />}
    </div>
  );
}

function ProjectModal({ project, dict, onClose }: { project: Project; dict: Dictionary; onClose: () => void }) {
  const [activeImage, setActiveImage] = useState(uniqueImages(project)[0]);
  const gallery = uniqueImages(project);
  const categoryLabel = dict.categories[project.category as keyof typeof dict.categories];
  const isArabic = Boolean(dict.nav?.home === 'الرئيسية');
  const isFrench = Boolean(dict.nav?.home === 'Accueil');

  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm" onClick={onClose}>
      <div className="max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-line/20 bg-[#121212] shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4 md:px-7">
          <div>
            <p className="text-xs font-semibold uppercase tracking-luxe text-gold">{categoryLabel}</p>
            <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">{project.title}</h3>
          </div>
          <button type="button" onClick={onClose} className="rounded-full border border-white/10 p-3 text-white transition hover:border-gold/40 hover:text-gold" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid max-h-[calc(92vh-86px)] gap-0 overflow-auto lg:grid-cols-[1.3fr_.7fr]">
          <div className="p-4 md:p-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-black/25">
              <Image src={activeImage} alt={project.title} fill quality={95} className="object-contain" sizes="(max-width: 1024px) 100vw, 65vw" />
            </div>

            {gallery.length > 1 && (
              <div className="mt-4 grid grid-cols-3 gap-3 md:grid-cols-4">
                {gallery.map((image) => (
                  <button
                    key={image}
                    type="button"
                    onClick={() => setActiveImage(image)}
                    className={`relative aspect-[4/3] overflow-hidden rounded-2xl border ${activeImage === image ? 'border-gold' : 'border-white/10'}`}
                  >
                    <Image src={image} alt={project.title} fill quality={90} className="object-cover" sizes="20vw" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="border-t border-white/10 p-5 md:p-7 lg:border-s lg:border-t-0">
            <p className="text-base leading-8 text-white/80 md:text-lg md:leading-9">{project.description}</p>
            <div className="mt-8 rounded-[1.5rem] border border-gold/15 bg-gold/10 p-5 text-sm leading-7 text-white/80">
              {isArabic
                ? 'للحصول على عرض فني أو استشارة مرتبطة بمشروع مشابه، يمكنكم التواصل مع فريق Verix مباشرة.'
                : isFrench
                  ? 'Pour une proposition technique ou une consultation liée à un projet similaire, vous pouvez contacter directement l’équipe Verix.'
                  : 'For a technical proposal or consultation related to a similar project, you can contact the Verix team directly.'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
