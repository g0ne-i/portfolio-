'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/providers/language-provider';
import { cn } from '@/lib/utils';

export default function Navigation() {
  const { t, lang, setLang } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { label: t.nav.links.work, href: '#work' },
    { label: t.nav.links.experience, href: '#experience' },
    { label: t.nav.links.stack, href: '#stack' },
    { label: t.nav.links.about, href: '#about' },
  ];
  const mobileLinks = [
    ...navLinks,
    { label: 'CV', href: '#cv' },
    { label: t.contact.label, href: '#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-white/80 backdrop-blur-xl border-b border-[hsl(var(--border))]/60 py-2.5'
            : 'bg-transparent py-4'
        )}
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex items-center justify-between">
          {/* Left: Name */}
          <a href="#hero" className="flex flex-col leading-none">
            <span className="text-sm font-semibold tracking-[0.08em] text-navy">
              {t.nav.name}
            </span>
            <span className="mt-0.5 text-sm uppercase tracking-[0.12em] text-slate">
              {t.nav.subtitle}
            </span>
          </a>

          {/* Center: Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate hover:text-navy transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-clean-blue transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Right: Lang + Talk */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4">
            <div className="flex min-h-[44px] items-center font-mono-tnum text-sm" role="group" aria-label={lang === 'fr' ? 'Choisir la langue' : 'Choose language'}>
              <button
                type="button"
                onClick={() => setLang('fr')}
                aria-pressed={lang === 'fr'}
                className={cn('min-h-[44px] px-1 transition-colors hover:text-navy', lang === 'fr' ? 'font-semibold text-navy' : 'text-slate')}
              >
                FR
              </button>
              <span className="mx-0.5 text-slate/40" aria-hidden="true">/</span>
              <button
                type="button"
                onClick={() => setLang('en')}
                aria-pressed={lang === 'en'}
                className={cn('min-h-[44px] px-1 transition-colors hover:text-navy', lang === 'en' ? 'font-semibold text-navy' : 'text-slate')}
              >
                EN
              </button>
            </div>
            <a
              href="#contact"
              className="hidden lg:inline-flex items-center px-4 py-2 text-sm font-medium text-clean-blue border border-clean-blue/40 rounded-full hover:bg-clean-blue hover:text-white transition-all duration-300"
            >
              {t.nav.talk}
            </a>
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex min-h-[44px] min-w-[44px] flex-col items-center justify-center gap-1.5 p-1 lg:hidden"
              aria-label={mobileOpen ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              <span className={cn('w-5 h-px bg-navy transition-all', mobileOpen && 'rotate-45 translate-y-[6px]')} />
              <span className={cn('w-5 h-px bg-navy transition-all', mobileOpen && 'opacity-0')} />
              <span className={cn('w-5 h-px bg-navy transition-all', mobileOpen && '-rotate-45 -translate-y-[6px]')} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed left-0 right-0 top-[60px] z-40 border-b border-soft bg-white/95 backdrop-blur-xl lg:hidden"
          >
            <div id="mobile-navigation" className="flex flex-col gap-1 px-6 py-4">
              {mobileLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-[48px] items-center py-3 text-base text-navy border-b border-soft/50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
