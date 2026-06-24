import Image from 'next/image';
import Link from 'next/link';
import { ArrowDown, ArrowUpLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { Dictionary, Project } from '@/data/content';
import type { Locale } from '@/lib/i18n';
import { EngineeringField } from './EngineeringField';

function titleLines(title: string) {
  if (title.includes(' بدقة ')) return ['نبني المستقبل', 'بدقة هندسية'];
  if (title.includes('Engineering Precision')) return ['Building the Future', 'with Engineering Precision'];
  if (title.includes('précision')) return ['Construire l’avenir', 'avec précision d’ingénierie'];
  const words = title.split(' ');
  const mid = Math.ceil(words.length / 2);
  return [words.slice(0, mid).join(' '), words.slice(mid).join(' ')];
}

export function UltimateHome({ locale, dict, projects }: { locale: Locale; dict: Dictionary; projects: Project[] }) {
  const Arrow = locale === 'ar' ? ArrowUpLeft : ArrowUpRight;
  const lines = titleLines(dict.home.title);
  const featured = projects.slice(0, 4);
  const isArabic = locale === 'ar';
  const labels = {
    project: isArabic ? 'مشروع مختار' : locale === 'fr' ? 'Projet sélectionné' : 'Selected project',
    methodology: isArabic ? 'منهجية العمل' : locale === 'fr' ? 'Méthodologie' : 'Methodology',
    proof: isArabic ? 'خبرة موثقة' : locale === 'fr' ? 'Expertise documentée' : 'Documented Expertise',
    viewProjects: isArabic ? 'عرض المشاريع' : locale === 'fr' ? 'Voir les projets' : 'View Projects',
    directContact: isArabic ? 'تواصل مباشر' : locale === 'fr' ? 'Contact direct' : 'Direct Contact',
    visualLine: isArabic ? 'وضوح هندسي قبل التنفيذ' : locale === 'fr' ? 'Clarté d’ingénierie avant l’exécution' : 'Engineering clarity before execution',
    permits: isArabic ? 'اعتمادات وخدمات هندسية متكاملة' : locale === 'fr' ? 'Accréditations et services d’ingénierie intégrés' : 'Accreditations and integrated engineering services',
    portfolio: isArabic ? 'محفظة مشاريع مختارة' : locale === 'fr' ? 'Portefeuille de projets sélectionnés' : 'Selected Project Portfolio',
    portfolioLead: isArabic
      ? 'تعرض هذه المحفظة نماذج مختارة من أعمال Verix في قطاعات متنوعة، بما يوضح نطاق الخبرات الهندسية وقدرة الفريق على التعامل مع متطلبات المشاريع المختلفة.'
      : locale === 'fr'
        ? 'Ce portefeuille présente une sélection de projets Verix dans plusieurs secteurs, mettant en valeur l’étendue de l’expertise et la capacité de l’équipe à répondre à différentes exigences.'
        : 'This portfolio presents selected Verix projects across multiple sectors, highlighting the company’s engineering scope and ability to respond to different project requirements.',
    servicesIntro: isArabic
      ? 'من المساحة ورخص البناء إلى الإشراف والدفاع المدني، تقدم Verix مخرجات هندسية واضحة تساعد العميل على اتخاذ القرار الصحيح.'
      : locale === 'fr'
        ? 'De la topographie aux permis, à la supervision et à la sécurité, Verix fournit des livrables clairs pour de meilleures décisions.'
        : 'From surveying and permits to supervision and civil defense, Verix delivers clear engineering outputs that support the right decision.'
  };

  return (
    <>
      <section className="ultimate-hero relative isolate min-h-screen overflow-hidden pb-14 pt-24 md:pb-20 md:pt-40">
        <EngineeringField />
        <div className="hero-aura" aria-hidden="true" />
        <div className="container-luxury relative z-10 grid min-h-[auto] gap-10 lg:min-h-[720px] lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <p className={`u-hero-eyebrow gold-line font-bold text-gold ${isArabic ? "text-sm tracking-normal" : "text-xs uppercase tracking-luxe"}`}>{dict.home.eyebrow}</p>
            <h1 className="mt-6 text-balance text-[3.05rem] font-semibold leading-[1.08] text-text sm:text-6xl md:mt-8 md:text-7xl xl:text-[6.6rem]">
              {lines.map((line) => (
                <span key={line} className="u-title-line block overflow-hidden">
                  <span className="block">{line}</span>
                </span>
              ))}
            </h1>
            <p className="u-copy mt-6 max-w-3xl text-base leading-8 text-muted/90 sm:text-lg md:mt-7 md:text-2xl md:leading-10">{dict.home.description}</p>

            <div className="u-copy mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row">
              <Link href="#projects" className="luxury-button w-full bg-gold text-bg hover:shadow-gold sm:w-auto">
                {labels.viewProjects}
                <Arrow className="h-4 w-4" />
              </Link>
              <Link href="#contact" className="luxury-button w-full border border-line/25 text-text hover:border-gold/60 hover:text-gold sm:w-auto">
                {labels.directContact}
              </Link>
            </div>

            <div className="mt-10 hidden gap-3 md:grid md:grid-cols-3">
              {dict.home.trust.map((item) => (
                <div key={item} className="u-stat rounded-2xl border border-line/15 bg-text/[.045] p-4 text-sm leading-7 text-muted/80">
                  <CheckCircle2 className="mb-4 h-5 w-5 text-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="u-frame architectural-frame relative hidden lg:block">
            <div className="architectural-frame__media relative overflow-hidden rounded-[2rem] border border-line/15 bg-paper shadow-luxury">
              <Image
                src="/images/ui/hero-architecture.svg"
                alt={labels.visualLine}
                width={1400}
                height={900}
                priority
                className="h-[560px] w-full object-cover md:h-[680px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-bg/10 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.6rem] border border-line/15 bg-bg/75 p-5 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-luxe text-gold">{labels.visualLine}</p>
                <p className="mt-3 text-lg leading-8 text-text/90">{dict.home.subtitle}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="container-luxury relative z-10 mt-8 hidden items-center justify-center text-muted/70 md:flex">
          <span className="flex items-center gap-3 text-xs font-semibold uppercase tracking-luxe">
            {dict.common.scroll}
            <ArrowDown className="h-4 w-4 animate-bounce text-gold" />
          </span>
        </div>
      </section>

      <section className="relative overflow-hidden py-24">
        <div className="container-luxury">
          <div className="grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:items-end">
            <div className="u-reveal">
              <p className="text-xs font-bold uppercase tracking-luxe text-gold">{labels.methodology}</p>
              <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight md:text-6xl">{dict.home.introTitle}</h2>
              <p className="mt-6 text-lg leading-9 text-muted/85">{dict.home.introText}</p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {dict.home.metrics.slice(0, 3).map((metric) => (
                <div key={metric.label} className="u-reveal rounded-[1.8rem] border border-line/15 bg-surface/60 p-6 shadow-luxury">
                  <p className="text-5xl font-semibold text-gold"><span data-count={metric.value}>{metric.value}</span>{metric.suffix}</p>
                  <p className="mt-4 text-sm leading-7 text-muted/80">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="u-reveal mt-16 rounded-[2.5rem] border border-line/15 bg-gradient-to-br from-surface/85 to-paper/60 p-6 shadow-luxury md:p-10">
            <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-luxe text-gold">{labels.proof}</p>
                <h3 className="mt-4 text-3xl font-semibold leading-tight md:text-5xl">{labels.portfolio}</h3>
                <p className="mt-5 text-lg leading-9 text-muted/85">{labels.portfolioLead}</p>
                <Link href="#projects" className="luxury-button mt-8 bg-gold text-bg hover:shadow-gold">
                  {labels.viewProjects}
                  <Arrow className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {featured.map((project, index) => (
                  <Link
                    key={project.id}
                    href="#projects"
                    className={`project-teaser group relative overflow-hidden rounded-[1.8rem] border border-line/15 bg-bg ${index === 0 ? 'sm:row-span-2' : ''}`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={900}
                      height={680}
                      quality={95}
                      className={`w-full object-cover transition duration-700 group-hover:scale-105 ${index === 0 ? 'h-[430px]' : 'h-[205px]'}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="text-xs font-bold uppercase tracking-luxe text-gold">{labels.project}</p>
                      <h4 className="mt-2 text-xl font-semibold text-white">{project.title}</h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="u-reveal mt-16 rounded-[2.5rem] border border-gold/20 bg-gold/10 p-8 text-center shadow-luxury md:p-12">
            <p className="mx-auto max-w-4xl text-2xl font-semibold leading-10 text-text md:text-4xl md:leading-[1.45]">{labels.servicesIntro}</p>
          </div>
        </div>
      </section>
    </>
  );
}
