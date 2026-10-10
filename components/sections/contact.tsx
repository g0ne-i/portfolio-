'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { useLanguage } from '@/components/providers/language-provider';
import { Mail, Linkedin, Github } from 'lucide-react';

const SignatureCanvas = dynamic(
  () => import('@/components/three/signature-canvas').then((m) => m.SignatureCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-soft animate-pulse" />
      </div>
    ),
  }
);

export default function Contact() {
  const { t, lang } = useLanguage();
  const [rearrangeKey, setRearrangeKey] = useState(0);

  return (
    <section id="contact" className="relative w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        {/* Contact content */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="text-sm font-mono-tnum text-clean-blue">{t.contact.number}</span>
            <span className="w-8 h-px bg-soft" />
            <span className="section-label">{t.contact.label}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-navy leading-[1.1] text-balance"
          >
            {t.contact.title}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-col items-center gap-3"
          >
            <a
              href={`mailto:${t.contact.email}`}
              className="text-lg lg:text-xl text-navy hover:text-clean-blue transition-colors"
            >
              {t.contact.email}
            </a>
            <a
              href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
              className="text-base text-slate hover:text-clean-blue transition-colors"
            >
              {t.contact.phone}
            </a>

            <div className="mt-4 flex w-full max-w-sm flex-col items-stretch justify-center gap-3 sm:max-w-none sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={`mailto:${t.contact.email}`}
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-navy px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-deep-blue"
              >
                <Mail className="w-4 h-4" />
                {t.contact.emailBtn}
              </a>
              <a
                href="https://www.linkedin.com/in/ismail-ourdou/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-soft px-5 py-2.5 text-sm font-medium text-navy transition-all hover:border-clean-blue hover:text-clean-blue"
              >
                <Linkedin className="w-4 h-4" />
                {t.contact.linkedin}
              </a>
              <a
                href="https://github.com/g0ne-i"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border border-soft px-5 py-2.5 text-sm font-medium text-navy transition-all hover:border-clean-blue hover:text-clean-blue"
              >
                <Github className="w-4 h-4" />
                {t.contact.github}
              </a>
            </div>
          </motion.div>
        </div>

        {/* Final 3D signature */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <button
            type="button"
            aria-label={t.contact.clickHint}
            className="relative h-[280px] w-full cursor-pointer sm:h-[340px]"
            onClick={() => setRearrangeKey((k) => k + 1)}
          >
            <SignatureCanvas rearrangeKey={rearrangeKey} />
          </button>

          <div className="text-center mt-6">
            <p className="text-xl lg:text-2xl font-serif-display italic text-navy">
              {t.contact.signature}
            </p>
          </div>
        </motion.div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-soft flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-sm text-slate">
            © 2026 Ismail Ourdou · {lang === 'fr' ? 'Logiciel · IA' : 'Software · AI'} · Full-Stack
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-clean-blue animate-pulse-dot" />
            <span className="text-sm text-slate font-mono-tnum">{lang === 'fr' ? 'SYSTÈME EN LIGNE' : 'SYSTEM ONLINE'}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
