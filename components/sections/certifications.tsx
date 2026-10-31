'use client';

import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
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
          className="mb-12 lg:mb-16"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono-tnum text-sm text-clean-blue">{t.certifications.number}</span>
            <span className="h-px w-8 bg-soft" />
            <span className="section-label">{t.certifications.label}</span>
          </div>
          <h2 className="max-w-3xl text-balance text-3xl text-navy sm:text-4xl lg:text-5xl">{t.certifications.title}</h2>
        </motion.header>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
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
              className="group flex min-h-[216px] flex-col rounded-2xl border border-soft bg-white p-6 shadow-[0_24px_55px_-48px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-clean-blue/35 hover:shadow-[0_28px_60px_-45px_rgba(37,99,235,0.55)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-4"
              aria-label={`${t.certifications.verify}: ${certificate.name}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-soft-blue text-clean-blue"><Award className="h-5 w-5" /></div>
                <ExternalLink className="h-4 w-4 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
              <p className="mt-7 text-sm font-medium text-clean-blue">{certificate.issuer}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-navy">{certificate.name}</h3>
              <span className="mt-auto pt-6 text-sm font-medium text-slate transition-colors group-hover:text-clean-blue">{t.certifications.verify} →</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
