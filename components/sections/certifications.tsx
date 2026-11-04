'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Award, BadgeCheck, ChevronDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';

type Certificate = ReturnType<typeof useLanguage>['t']['certifications']['items'][number];

function CertificateCard({
  certificate,
  index,
  expanded,
  onToggle,
  onHover,
  onLeave,
}: {
  certificate: Certificate;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  onHover: () => void;
  onLeave: () => void;
}) {
  const { t } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      className="group relative flex min-h-[262px] flex-col overflow-hidden rounded-2xl border border-soft bg-white p-6 shadow-[0_24px_55px_-48px_rgba(15,23,42,0.45)] transition hover:-translate-y-1 hover:border-clean-blue/35 hover:shadow-[0_28px_60px_-45px_rgba(37,99,235,0.55)]"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-clean-blue via-sky-400 to-transparent" />
      <div className="flex items-start justify-between gap-4">
        <div className="relative grid h-11 w-11 place-items-center rounded-xl bg-soft-blue text-clean-blue">
          <Award className="h-5 w-5" />
          <BadgeCheck className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white text-clean-blue" />
        </div>
        <a
          href={certificate.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${t.certifications.verify}: ${certificate.name}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-clean-blue/20 text-clean-blue transition hover:border-clean-blue hover:bg-soft-blue focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-2"
        >
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={expanded}
        className="mt-7 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-2"
      >
        <p className="text-sm font-semibold text-clean-blue">{certificate.issuer}</p>
        <p className="mt-2 text-sm text-slate">{certificate.category}</p>
        <h3 className="mt-3 text-lg font-semibold leading-snug text-navy">{certificate.name}</h3>
        <span className="mt-5 flex items-center gap-2 text-sm font-medium text-slate group-hover:text-clean-blue">
          {t.certifications.skillsLabel}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </span>
      </button>

      <AnimatePresence initial={false}>
        {expanded ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <ul className="mt-4 space-y-2 border-t border-soft pt-4">
              {certificate.learned.map((skill) => (
                <li key={skill} className="flex items-start gap-2 text-sm leading-snug text-slate">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-clean-blue" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </motion.article>
  );
}

export default function Certifications() {
  const { t } = useLanguage();
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

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
          {t.certifications.items.map((certificate, index) => {
            const id = certificate.url;
            return (
              <CertificateCard
                key={id}
                certificate={certificate}
                index={index}
                expanded={expandedId === id || hoveredId === id}
                onToggle={() => setExpandedId((current) => (current === id ? null : id))}
                onHover={() => setHoveredId(id)}
                onLeave={() => setHoveredId(null)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
