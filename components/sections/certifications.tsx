'use client';

import { motion } from 'framer-motion';
import { Award, BadgeCheck, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

export default function Certifications() {
  const { t } = useLanguage();

  return (
    <section id="certifications" className="relative w-full bg-soft-blue/35 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-col gap-8 lg:mb-16 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="font-mono-tnum text-sm text-clean-blue">{t.certifications.number}</span>
              <span className="h-px w-8 bg-soft" />
              <span className="section-label">{t.certifications.label}</span>
            </div>
            <h2 className="max-w-3xl text-balance text-3xl text-navy sm:text-4xl lg:text-5xl">{t.certifications.title}</h2>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-clean-blue/15 bg-white px-5 py-4 shadow-[0_18px_45px_-35px_rgba(37,99,235,0.45)]">
            <span className="font-mono-tnum text-3xl text-clean-blue">{t.certifications.items.length}</span>
            <span className="max-w-[105px] text-sm leading-snug text-slate">{t.certifications.verified}</span>
          </div>
        </motion.header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {t.certifications.items.map((certificate, index) => (
            <motion.a
              key={certificate.url}
              href={certificate.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="group relative flex min-h-[246px] flex-col overflow-hidden rounded-2xl border border-soft bg-white p-6 shadow-[0_24px_55px_-48px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-clean-blue/35 hover:shadow-[0_28px_60px_-45px_rgba(37,99,235,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-4"
              aria-label={`${t.certifications.verify}: ${certificate.name}`}
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-clean-blue via-sky-400 to-transparent" />
              <div className="flex items-start justify-between gap-4">
                <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-soft-blue text-clean-blue"><Award className="h-5 w-5" /><BadgeCheck className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white text-clean-blue" /></div>
                <ExternalLink className="h-4 w-4 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <div className="mt-7">
                <p className="text-sm font-semibold text-clean-blue">{certificate.issuer}</p>
                <p className="mt-2 text-sm text-slate">{certificate.category}</p>
                <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">{certificate.name}</h3>
              </div>
              <span className="mt-auto pt-6 text-sm font-medium text-slate transition-colors group-hover:text-clean-blue">{t.certifications.verify} →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
