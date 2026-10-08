'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/components/providers/language-provider';
import { Download, ExternalLink } from 'lucide-react';
import { withBasePath } from '@/lib/paths';

function CVPaper({ lang }: { lang: 'fr' | 'en' }) {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const reducedMotion = useReducedMotion() ?? false;

  const handleMouseMove = (e: React.MouseEvent) => {
    if (reducedMotion || !ref.current || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: -y * 5, y: x * 5 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative mx-auto w-full max-w-[300px] sm:max-w-[340px] lg:max-w-[400px]"
      style={{ perspective: 1000 }}
    >
      <motion.div
        animate={{ rotateX: reducedMotion ? 0 : tilt.x, rotateY: reducedMotion ? 0 : tilt.y }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative aspect-[1/1.414] overflow-hidden rounded-sm bg-white shadow-2xl shadow-clean-blue/10"
      >
        <Image
          src={withBasePath('/images/cv-preview.png?v=2026-10')}
          alt={lang === 'fr' ? "Aperçu du CV d’Ismail Ourdou" : "Preview of Ismail Ourdou's CV"}
          width={894}
          height={1264}
          sizes="(max-width: 1024px) 90vw, 400px"
          priority
          unoptimized
          className="h-full w-full object-cover object-top"
        />
      </motion.div>

      {/* Shadow */}
      <div className="absolute inset-0 bg-clean-blue/5 blur-2xl translate-y-6 -z-10 rounded-full" />
    </div>
  );
}

export default function CVSection() {
  const { t, lang } = useLanguage();

  return (
    <section id="cv" className="relative w-full overflow-hidden bg-soft-blue/50 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono-tnum text-clean-blue">{t.cv.number}</span>
            <span className="w-8 h-px bg-soft" />
            <span className="section-label">{t.cv.label}</span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-navy leading-[1.15] text-balance"
            >
              {t.cv.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base text-slate leading-relaxed mt-4 max-w-md"
            >
              {t.cv.subtitle}
            </motion.p>

            <div className="mt-8 lg:hidden">
              <CVPaper lang={lang} />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              <a
                href={withBasePath('/cv/OURDOU_Ismail-CV-en.pdf?v=2026-10')}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-soft px-6 py-3 text-sm font-medium text-navy transition-all duration-300 hover:border-clean-blue hover:text-clean-blue sm:w-auto"
              >
                {t.cv.view}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a
                href={withBasePath('/cv/OURDOU_Ismail-CV-en.pdf?v=2026-10')}
                download
                className="group inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-deep-blue sm:w-auto"
              >
                {t.cv.download}
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right: 3D Paper */}
          <div className="hidden lg:block">
            <CVPaper lang={lang} />
          </div>
        </div>
      </div>
    </section>
  );
}
