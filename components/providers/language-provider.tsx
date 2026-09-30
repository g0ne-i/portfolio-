'use client';

import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { content, type Language, type Content } from '@/lib/content';

type LanguageContextValue = {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
  t: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  const toggle = useCallback(() => {
    setLang((prev) => (prev === 'fr' ? 'en' : 'fr'));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextValue = {
    lang,
    setLang,
    toggle,
    t: content[lang],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider');
  return ctx;
}
