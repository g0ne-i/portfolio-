'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/language-provider';
import { OdooDashboardUI } from '@/components/sections/project-uis';

function ExperienceCard({
  item,
  index,
  lang,
  illustrativeLabel,
}: {
  item: {
    company: string;
    role: string;
    location: string;
    period: string;
    content: string;
    contentEn: string;
    tech: string[];
  };
  index: number;
  lang: 'fr' | 'en';
  illustrativeLabel: string;
}) {
  const lineRef = useRef<HTMLDivElement>(null);
  const isDarbTech = item.company === 'DarbTech';
  const currentLabel = lang === 'fr' ? 'En cours' : 'Current';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="grid gap-8 border-t border-soft py-12 md:py-16 lg:grid-cols-12 lg:gap-10">
        {/* Period */}
        <div className="lg:col-span-2">
          <div className="text-base font-mono-tnum text-slate">{item.period}</div>
          {isDarbTech && (
            <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-clean-blue/20 bg-soft-blue/60 px-3 py-1.5 text-sm font-medium text-clean-blue">
              <span className="h-2 w-2 rounded-full bg-clean-blue motion-safe:animate-pulse" />
              {currentLabel}
            </div>
          )}
        </div>

        {/* Main content */}
        <div className={isDarbTech ? 'lg:col-span-6' : 'lg:col-span-10'}>
          <div className="mb-2">
            <h3 className="text-2xl font-semibold text-navy lg:text-3xl">
              {item.company}
            </h3>
            <p className="mt-2 text-base text-slate">{item.role}</p>
            <p className="mt-1 text-base text-slate">{item.location}</p>
          </div>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-slate">
            {item.content}
          </p>

          {/* Tech tags with line animation */}
          <div className="relative mt-5 pt-5" ref={lineRef}>
            <div className="absolute top-0 left-0 right-0 h-px bg-soft overflow-hidden">
              <motion.div
                className="h-full bg-clean-blue origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-2"
            >
              {item.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-clean-blue/15 bg-soft-blue/60 px-3 py-1.5 text-sm text-clean-blue"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {isDarbTech ? (
          <div className="lg:col-span-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-soft bg-white shadow-[0_24px_65px_-40px_rgba(37,99,235,0.55)]">
              <OdooDashboardUI />
              <span data-illustrative-label className="absolute right-3 top-3 rounded-full border border-clean-blue/20 bg-white/95 px-3 py-1.5 text-sm font-medium text-clean-blue shadow-sm backdrop-blur">
                {illustrativeLabel}
              </span>
            </div>
          </div>
        ) : null}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experience" className="relative w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono-tnum text-clean-blue">{t.experience.number}</span>
            <span className="w-8 h-px bg-soft" />
            <span className="section-label">{t.experience.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-navy max-w-2xl text-balance">
            {t.experience.title}
          </h2>
        </motion.div>

        <div className="border-b border-soft">
          {t.experience.items.map((item, i) => (
            <ExperienceCard key={item.company} item={item} index={i} lang={lang} illustrativeLabel={t.work.illustrativeLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
