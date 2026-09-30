'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { withBasePath } from '@/lib/paths';

export default function About() {
  const { t, lang } = useLanguage();
  const [openYear, setOpenYear] = useState<string | null>('2025–2026');
  const sectionRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 0.8', 'end 0.4'],
  });
  const animatedLineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="about" ref={sectionRef} className="relative w-full overflow-hidden bg-soft-blue/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="text-sm font-mono-tnum text-clean-blue">{t.about.number}</span>
            <span className="h-px w-8 bg-soft" />
            <span className="section-label">{t.about.label}</span>
          </div>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-balance text-3xl leading-[1.15] text-navy sm:text-4xl lg:text-5xl xl:text-6xl"
            >
              {t.about.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 max-w-md text-base leading-relaxed text-slate"
            >
              {t.about.description}
            </motion.p>

            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex items-center gap-5"
            >
              <div className="relative h-44 w-36 shrink-0 overflow-hidden rounded-2xl border border-clean-blue/15 bg-white shadow-lg shadow-clean-blue/10">
                <Image
                  src={withBasePath('/images/ismail-ourdou.jpeg')}
                  alt={lang === 'fr' ? 'Portrait professionnel d’Ismail Ourdou' : 'Professional portrait of Ismail Ourdou'}
                  fill
                  sizes="144px"
                  className="object-cover object-center"
                />
              </div>
              <figcaption>
                <p className="text-base font-semibold tracking-wide text-navy">ISMAIL OURDOU</p>
                <p className="mt-1 text-sm text-slate">{lang === 'fr' ? 'Rabat, Maroc' : 'Rabat, Morocco'}</p>
                <p className="mt-3 text-sm uppercase tracking-[0.14em] text-clean-blue">{lang === 'fr' ? 'ERP · IA · Full-Stack' : 'ERP · AI · Full-Stack'}</p>
              </figcaption>
            </motion.figure>
          </div>

          <div className="lg:col-span-7 lg:pl-8">
            <div className="relative pl-7 sm:pl-9">
              <div className="absolute bottom-0 left-0 top-0 w-px bg-soft">
                <motion.div
                  style={{ height: reducedMotion ? '100%' : animatedLineHeight }}
                  className="absolute inset-x-0 top-0 w-px bg-clean-blue"
                />
              </div>

              <div className="space-y-5">
                {t.about.timeline.map((item, index) => {
                  const education = t.education.items.find((entry) => entry.year === item.year);
                  const hasModules = Boolean(education?.subjects.length);
                  const isOpen = hasModules && openYear === item.year;
                  const isCurrent = item.year === '2025–2026';

                  return (
                    <motion.article
                      key={item.year}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.12, duration: 0.5 }}
                      className="group relative rounded-2xl border border-transparent bg-white/55 p-5 transition-colors hover:border-clean-blue/15 hover:bg-white"
                      onMouseEnter={() => hasModules && setOpenYear(item.year)}
                      onMouseLeave={() => hasModules && setOpenYear(null)}
                    >
                      <div className="absolute -left-[2.18rem] top-7 h-3 w-3 rounded-full border-2 border-clean-blue bg-white transition-colors group-hover:bg-clean-blue sm:-left-[2.68rem]" />

                      {hasModules ? (
                        <button
                          type="button"
                          onClick={() => setOpenYear(isOpen ? null : item.year)}
                          onFocus={() => setOpenYear(item.year)}
                          className="flex min-h-[48px] w-full items-start justify-between gap-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-4"
                          aria-expanded={isOpen}
                          aria-controls={`timeline-${item.year}`}
                          aria-label={`${t.about.expandLabel}: ${item.label}`}
                        >
                          <span className="flex min-w-0 flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
                            <span className="w-24 shrink-0 text-sm font-mono-tnum text-clean-blue">{item.year}</span>
                            <span className="text-base font-medium text-navy lg:text-lg">{item.label}</span>
                          </span>
                          <span className="flex shrink-0 items-center gap-3">
                            {isCurrent ? (
                              <span className="inline-flex items-center gap-2 rounded-full border border-clean-blue/20 bg-soft-blue px-3 py-1.5 text-sm font-medium text-clean-blue">
                                <span className="h-2 w-2 rounded-full bg-clean-blue motion-safe:animate-pulse" />
                                {t.about.currentLabel}
                              </span>
                            ) : null}
                            <ChevronDown className={`h-5 w-5 text-clean-blue transition-transform ${isOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                          </span>
                        </button>
                      ) : (
                        <div className="flex min-h-[48px] items-start gap-4 sm:items-center">
                          <span className="w-24 shrink-0 text-sm font-mono-tnum text-clean-blue">{item.year}</span>
                          <span className="text-base font-medium text-navy lg:text-lg">{item.label}</span>
                        </div>
                      )}

                      <AnimatePresence initial={false}>
                        {isOpen && education ? (
                          <motion.div
                            id={`timeline-${item.year}`}
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: reducedMotion ? 0 : 0.28 }}
                            className="overflow-hidden"
                          >
                            <p className="mb-3 mt-4 text-base text-slate">{education.institution}</p>
                            <motion.div
                              initial="hidden"
                              animate="visible"
                              variants={{ visible: { transition: { staggerChildren: reducedMotion ? 0 : 0.05 } } }}
                              className="flex flex-wrap gap-2"
                            >
                              {education.subjects.map((subject) => (
                                <motion.span
                                  key={subject}
                                  variants={{ hidden: { opacity: 0, y: 6 }, visible: { opacity: 1, y: 0 } }}
                                  className="rounded-full border border-clean-blue/15 bg-soft-blue px-3 py-1.5 text-sm text-slate"
                                >
                                  {subject}
                                </motion.span>
                              ))}
                            </motion.div>
                          </motion.div>
                        ) : null}
                      </AnimatePresence>
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
