'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/components/providers/language-provider';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { number: '01', label: t.nav.links.work, href: '#work', id: 'work' },
    { number: '02', label: t.nav.links.experience, href: '#experience', id: 'experience' },
    { number: '03', label: t.nav.links.profile, href: '#about', id: 'about' },
    { number: '04', label: t.nav.links.ecosystem, href: '#stack', id: 'stack' },
    { number: '05', label: t.nav.links.credentials, href: '#certifications', id: 'certifications' },
    { number: '06', label: t.nav.links.cv, href: '#cv', id: 'cv' },
  ];
  const contactLink = { number: '07', label: t.contact.label, href: '#contact', id: 'contact' };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ids = ['hero', 'work', 'experience', 'about', 'stack', 'certifications', 'cv', 'contact'];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.25] },
    );
    ids.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -18, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        aria-label={lang === 'fr' ? 'Navigation principale' : 'Primary navigation'}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5"
      >
        <div className={cn('pointer-events-auto mx-auto flex max-w-[1460px] items-center justify-between gap-4 rounded-2xl border px-4 transition-all duration-300 sm:px-5', scrolled ? 'border-soft/90 bg-white/95 py-2 shadow-[0_18px_50px_-34px_rgba(15,23,42,0.35)] backdrop-blur-xl' : 'border-white/80 bg-white/75 py-3 shadow-[0_16px_45px_-38px_rgba(15,23,42,0.3)] backdrop-blur-md')}>
          <a href="#hero" className="min-w-0 shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue">
            <span className="block truncate text-sm font-semibold tracking-[0.08em] text-navy">{t.nav.name}</span>
            <span className="mt-0.5 hidden text-xs uppercase tracking-[0.12em] text-slate sm:block">{t.nav.subtitle}</span>
          </a>

          <div className="hidden min-w-0 items-center justify-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <a key={link.href} href={link.href} aria-current={active ? 'location' : undefined} className={cn('flex min-h-[42px] items-center gap-2 rounded-xl px-2.5 text-sm transition-colors', active ? 'bg-soft-blue text-navy' : 'text-slate hover:bg-soft-blue/60 hover:text-navy')}>
                  <span className={cn('font-mono-tnum text-[10px]', active ? 'text-clean-blue' : 'text-slate/55')}>{link.number}</span>
                  <span className="whitespace-nowrap">{link.label}</span>
                </a>
              );
            })}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            <div className="flex min-h-[42px] items-center font-mono-tnum text-xs" role="group" aria-label={lang === 'fr' ? 'Choisir la langue' : 'Choose language'}>
              <button type="button" onClick={() => setLang('fr')} aria-pressed={lang === 'fr'} className={cn('min-h-[42px] px-1 transition-colors hover:text-navy', lang === 'fr' ? 'font-semibold text-navy' : 'text-slate')}>FR</button>
              <span className="mx-0.5 text-slate/35" aria-hidden="true">/</span>
              <button type="button" onClick={() => setLang('en')} aria-pressed={lang === 'en'} className={cn('min-h-[42px] px-1 transition-colors hover:text-navy', lang === 'en' ? 'font-semibold text-navy' : 'text-slate')}>EN</button>
            </div>
            <a href={contactLink.href} className={cn('hidden min-h-[42px] items-center gap-2 rounded-xl border px-3 text-sm font-medium transition-all xl:inline-flex', activeSection === 'contact' ? 'border-clean-blue bg-clean-blue text-white' : 'border-clean-blue/30 text-clean-blue hover:bg-clean-blue hover:text-white')}>
              <span className="font-mono-tnum text-[10px] opacity-70">{contactLink.number}</span>
              {t.nav.talk}<ArrowUpRight className="h-3.5 w-3.5" />
            </a>
            <button type="button" onClick={() => setMobileOpen((open) => !open)} className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 rounded-xl hover:bg-soft-blue xl:hidden" aria-label={mobileOpen ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')} aria-expanded={mobileOpen} aria-controls="mobile-navigation">
              <span className={cn('h-px w-5 bg-navy transition-all', mobileOpen && 'translate-y-[6px] rotate-45')} />
              <span className={cn('h-px w-5 bg-navy transition-all', mobileOpen && 'opacity-0')} />
              <span className={cn('h-px w-5 bg-navy transition-all', mobileOpen && '-translate-y-[6px] -rotate-45')} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }} className="fixed inset-x-3 top-[78px] z-40 overflow-hidden rounded-2xl border border-soft bg-white/95 shadow-xl backdrop-blur-xl xl:hidden">
            <div id="mobile-navigation" className="grid gap-1 p-3 sm:grid-cols-2">
              {[...navLinks, contactLink].map((link) => (
                <a key={link.href} href={link.href} onClick={() => setMobileOpen(false)} aria-current={activeSection === link.id ? 'location' : undefined} className={cn('flex min-h-[52px] items-center gap-3 rounded-xl px-3 text-base transition-colors', activeSection === link.id ? 'bg-soft-blue text-navy' : 'text-slate hover:bg-soft-blue/60 hover:text-navy')}>
                  <span className="font-mono-tnum text-xs text-clean-blue">{link.number}</span>
                  <span>{link.label}</span>
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
