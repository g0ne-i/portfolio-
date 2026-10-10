'use client';

import { useRef, useState } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { PROJECT_UIS } from '@/components/sections/project-uis';

type Project = ReturnType<typeof useLanguage>['t']['work']['projects'][number];

function ProjectVisual({
  projectId,
  projectUrl,
  projectName,
  compact = false,
}: {
  projectId: string;
  projectUrl?: string;
  projectName?: string;
  compact?: boolean;
}) {
  const { lang, t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [compact ? 5 : 11, 0, -3]);
  const rotateY = useTransform(scrollYProgress, [0, 0.5, 1], [compact ? -3 : -7, 0, 3]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.98]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [compact ? 24 : 50, 0, -18]);
  const UIComponent = PROJECT_UIS[projectId];
  const isIllustrative = !projectUrl;
  const needsLightBackdrop = projectId === 'documind' || projectId === 'callmegrowth';

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!ref.current || reducedMotion) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const yPosition = (event.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x: x * 5, y: -yPosition * 3 });
  };

  const visual = (
    <motion.div
      animate={{ rotateY: reducedMotion ? 0 : mousePos.x, rotateX: reducedMotion ? 0 : mousePos.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 20 }}
      style={{ transformPerspective: 1400 }}
      className="relative h-full w-full"
    >
      <div className={`absolute inset-x-5 inset-y-2 translate-y-6 rounded-[28px] blur-3xl ${needsLightBackdrop ? 'bg-sky-200/70' : 'bg-clean-blue/10'}`} />
      {needsLightBackdrop ? <div className="absolute -inset-3 rounded-[28px] bg-soft-blue shadow-[0_24px_65px_-35px_rgba(37,99,235,0.75)]" /> : null}
      <div className="relative h-full w-full overflow-hidden rounded-[20px] border border-soft bg-white shadow-[0_30px_80px_-42px_rgba(37,99,235,0.45)]">
        {UIComponent ? <UIComponent /> : null}
        {isIllustrative ? (
          <span data-illustrative-label className="absolute right-3 top-3 rounded-full border border-clean-blue/20 bg-white/95 px-3 py-1.5 text-sm font-medium text-clean-blue shadow-sm backdrop-blur">
            {t.work.illustrativeLabel}
          </span>
        ) : null}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX: reducedMotion ? 0 : rotateX,
        rotateY: reducedMotion ? 0 : rotateY,
        scale: reducedMotion ? 1 : scale,
        y: reducedMotion ? 0 : y,
        transformPerspective: 1200,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: 0, y: 0 })}
      className={`relative w-full ${compact ? 'aspect-[16/10]' : 'h-[340px] sm:h-[400px] lg:h-[470px]'}`}
    >
      {projectUrl ? (
        <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${lang === 'fr' ? 'Visiter' : 'Visit'} ${projectName ?? projectId}`}
          className="block h-full rounded-[20px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-4"
        >
          {visual}
        </a>
      ) : visual}
    </motion.div>
  );
}

function GroupHeading({ number, children }: { number: string; children: React.ReactNode }) {
  const { lang } = useLanguage();

  return (
    <div className="mb-10 flex items-center gap-4 border-b border-soft pb-5">
      <span className="font-mono-tnum text-sm text-clean-blue">{number}</span>
      <h3 className="text-sm font-semibold tracking-[0.18em] text-navy">{children}</h3>
      <span className="ml-auto hidden text-sm uppercase tracking-[0.14em] text-slate sm:block">{lang === 'fr' ? 'Systèmes sélectionnés' : 'Selected systems'}</span>
    </div>
  );
}

function ProjectCopy({ project, prominent = false }: { project: Project; prominent?: boolean }) {
  const { lang } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.6 }}
      className="h-full space-y-4"
    >
      <div className="flex items-baseline gap-3">
        <span className={`${prominent ? 'text-5xl' : 'text-3xl'} font-mono-tnum text-clean-blue/25`}>{project.number}</span>
        <span className="text-sm uppercase tracking-[0.12em] text-slate">{project.category}</span>
      </div>
      <div>
        <h4 className={`${prominent ? 'text-3xl lg:text-4xl' : 'text-xl lg:text-2xl'} font-semibold tracking-tight text-navy`}>{project.name}</h4>
        <p className="mt-1 text-sm uppercase tracking-[0.1em] text-clean-blue">{project.subtitle}</p>
      </div>
      <p className="max-w-xl text-base leading-relaxed text-slate">{project.description}</p>
      {project.features ? (
        <ul className="grid max-w-xl grid-cols-1 gap-x-4 gap-y-1.5 pt-1 sm:grid-cols-2">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-slate">
              <span className="h-1.5 w-1.5 rounded-full bg-clean-blue" />
              {feature}
            </li>
          ))}
        </ul>
      ) : null}
      <div className="flex flex-wrap gap-2 pt-1">
        {project.tech.map((technology) => (
          <span key={technology} className="rounded-full border border-clean-blue/15 bg-soft-blue/65 px-3 py-1.5 text-sm text-clean-blue">
            {technology}
          </span>
        ))}
      </div>
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex min-h-[44px] items-center gap-2 rounded-full border border-clean-blue/25 px-4 py-2 text-sm font-medium text-clean-blue transition-colors hover:border-clean-blue hover:bg-soft-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-2"
        >
          {lang === 'fr' ? 'Voir le site' : 'Visit live site'}
          <ExternalLink className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </a>
      ) : null}
    </motion.div>
  );
}

export default function SelectedWork() {
  const { t } = useLanguage();
  const projects = t.work.projects;
  const freelanceProjects = projects.filter((project) => project.kind === 'freelance');
  const academicOrder = ['e-sport', 'ai-resume', 'redis-life', 'montana', 'cabinet'];
  const academicProjects = projects
    .filter((project) => project.kind === 'academic')
    .sort((a, b) => academicOrder.indexOf(a.id) - academicOrder.indexOf(b.id));
  const academicRange = '04—08';

  return (
    <section id="work" className="relative w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-20"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono-tnum text-sm text-clean-blue">{t.work.number}</span>
            <span className="h-px w-8 bg-soft" />
            <span className="section-label">{t.work.label}</span>
          </div>
          <h2 className="max-w-3xl text-balance text-3xl text-navy sm:text-4xl lg:text-6xl">{t.work.title}</h2>
        </motion.header>

        <div>
          <GroupHeading number="01—03">{t.work.freelanceLabel}</GroupHeading>
          <div className="space-y-24 lg:space-y-40">
            {freelanceProjects.map((project, index) => {
              return (
                <article key={project.id} id={`project-${project.id}`} className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-12 lg:gap-14">
                  <div className={`order-2 lg:col-span-5 ${index % 2 ? 'lg:order-2' : 'lg:order-1'}`}><ProjectCopy project={project} prominent /></div>
                  <div className={`order-1 lg:col-span-7 ${index % 2 ? 'lg:order-1' : 'lg:order-2'}`}><ProjectVisual projectId={project.id} projectUrl={project.url} projectName={project.name} /></div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-28 lg:mt-44">
          <GroupHeading number={academicRange}>{t.work.academicLabel}</GroupHeading>
          <div className="grid auto-rows-fr gap-6 md:grid-cols-2 xl:grid-cols-6">
            {academicProjects.map((project, index) => {
              const desktopPosition = index === 3 ? 'xl:col-start-2' : index === 4 ? 'xl:col-start-4' : '';
              return (
                <article key={project.id} id={`project-${project.id}`} className={`flex h-full scroll-mt-24 flex-col rounded-[24px] border border-soft bg-white p-4 shadow-[0_24px_60px_-48px_rgba(15,23,42,0.45)] sm:p-5 md:col-span-1 xl:col-span-2 ${desktopPosition}`}>
                  <ProjectVisual projectId={project.id} compact />
                  <div className="mt-7 flex-1"><ProjectCopy project={project} /></div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
