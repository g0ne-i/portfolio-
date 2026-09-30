'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, MapPin } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { withBasePath } from '@/lib/paths';

const HeroNetwork = dynamic(() => import('@/components/three/hero-network'), {
  ssr: false,
  loading: () => <div className="h-full w-full rounded-full border border-soft/70" />,
});

export default function Hero() {
  const { t, lang } = useLanguage();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkViewport = () => setIsMobile(window.innerWidth < 768);
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  return (
    <section id="hero" className="grain relative min-h-screen w-full overflow-hidden bg-white">
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-x-0 top-0 z-10 h-px origin-left bg-gradient-to-r from-transparent via-clean-blue to-transparent"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-20 pt-28 lg:px-10 lg:pt-32">
        <div className="grid min-h-[calc(100vh-180px)] items-center gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:gap-4">
          <div className="flex flex-col gap-6 lg:gap-7">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.18, duration: 0.5 }}
              className="flex items-center gap-3"
            >
              <span className="h-px w-6 bg-clean-blue" />
              <span className="section-label">{t.hero.label}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-balance text-4xl leading-[1.06] text-navy sm:text-5xl lg:text-[3.65rem] xl:text-[4.4rem]"
            >
              {t.hero.headlinePrefix}{' '}
              <span className="font-serif-display italic text-clean-blue">{t.hero.headlineComplexity}</span>{' '}
              {t.hero.headlineArrow}{' '}
              <span className="font-serif-display italic text-deep-blue">{t.hero.headlineSimplicity}</span>
              <span className="text-clean-blue">.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.62, duration: 0.55 }}
              className="max-w-xl text-pretty text-base leading-relaxed text-slate lg:text-lg"
            >
              {t.hero.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75, duration: 0.5 }}
              className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm uppercase tracking-[0.15em] text-slate"
            >
              <span>{t.hero.tags}</span>
              <span className="flex items-center gap-1.5 normal-case tracking-normal"><MapPin className="h-3.5 w-3.5 text-clean-blue" />{lang === 'fr' ? 'Rabat, Maroc' : 'Rabat, Morocco'}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.88, duration: 0.5 }}
              className="mt-1 flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center"
            >
              <a href="#work" className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-medium text-white transition-all hover:gap-3 hover:bg-deep-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-2">
                {t.hero.projects}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href={withBasePath('/cv/OURDOU_Ismail-CV-en.pdf')} download className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-soft px-6 py-3 text-sm font-medium text-navy transition-colors hover:border-clean-blue hover:text-clean-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-2">
                {t.hero.downloadCV}<Download className="h-4 w-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[480px] w-full sm:h-[600px] lg:h-[700px] xl:h-[760px]"
          >
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-clean-blue/10 bg-gradient-to-br from-white via-soft-blue/45 to-white shadow-[0_45px_100px_-60px_rgba(37,99,235,0.6)]">
              <HeroNetwork isMobile={isMobile} lang={lang} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
