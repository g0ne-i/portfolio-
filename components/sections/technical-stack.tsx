'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/components/providers/language-provider';

type CategoryNode = {
  key: string;
  label: string;
  position: [number, number, number];
  technologies: string[];
};

const StackCanvas = dynamic(
  () => import('@/components/three/stack-canvas').then((m) => m.StackCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full border-2 border-soft animate-pulse" />
      </div>
    ),
  }
);

function useStackNodes() {
  const { t } = useLanguage();
  const positions: Record<string, [number, number, number]> = {
    ERP: [-2.55, 1.1, 0],
    AI: [2.55, 1.1, 0],
    IA: [2.55, 1.1, 0],
    WEB: [-2.55, -1.1, 0],
    DATA: [2.55, -1.1, 0],
    DONNÉES: [2.55, -1.1, 0],
    DEVOPS: [0, 1.9, 0],
    AUTOMATION: [0, -1.9, 0],
    AUTOMATISATION: [0, -1.9, 0],
  };

  return t.stack.categories.map((cat) => ({
    ...cat,
    position: positions[cat.key] || [0, 0, 0],
  }));
}

export default function TechnicalStack() {
  const { t } = useLanguage();
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const nodes = useStackNodes();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const activeNode = nodes.find((n) => n.key === activeKey);

  return (
    <section id="stack" className="relative w-full bg-white py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-sm font-mono-tnum text-clean-blue">{t.stack.number}</span>
            <span className="w-8 h-px bg-soft" />
            <span className="section-label">{t.stack.label}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-navy max-w-2xl text-balance">
            {t.stack.title}
          </h2>
        </motion.div>

        <div className="mb-5 flex items-center gap-2 text-slate">
          <span className="h-2 w-2 rounded-full bg-clean-blue motion-safe:animate-pulse" />
          <span className="text-sm font-medium">{isMobile ? t.stack.mobileHint : t.stack.clickHint}</span>
        </div>

        {isMobile ? (
          <div className="space-y-3" aria-label={t.stack.title}>
            {nodes.map((node) => {
              const isActive = activeKey === node.key;

              return (
                <motion.div
                  key={node.key}
                  layout
                  className="overflow-hidden rounded-2xl border border-soft bg-soft-blue/20"
                >
                  <button
                    type="button"
                    onClick={() => setActiveKey(isActive ? null : node.key)}
                    className="flex min-h-[58px] w-full items-center justify-between gap-4 px-4 py-3 text-left"
                    aria-expanded={isActive}
                    aria-controls={`stack-${node.key.toLowerCase()}`}
                  >
                    <span>
                      <span className="block text-sm font-mono-tnum tracking-wider text-clean-blue">{node.key}</span>
                      <span className="mt-0.5 block text-base font-semibold text-navy">{node.label}</span>
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-clean-blue/20 text-xl text-clean-blue" aria-hidden="true">
                      {isActive ? '−' : '+'}
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        id={`stack-${node.key.toLowerCase()}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-wrap gap-2 border-t border-soft px-4 py-4">
                          {node.technologies.map((tech) => (
                            <span key={tech} className="rounded-full border border-clean-blue/15 bg-white px-3 py-1.5 text-sm text-clean-blue">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div>
            <div className="grid items-center gap-10 lg:grid-cols-12">
            <div className="relative h-[560px] lg:col-span-8 lg:h-[650px]">
              <StackCanvas
                nodes={nodes}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
                isMobile={false}
              />
            </div>

            <div className="lg:col-span-4">
              <div className="mb-7 flex flex-wrap gap-2" aria-label={t.stack.title}>
                {nodes.map((node) => {
                  const selected = activeKey === node.key;
                  return (
                    <button
                      key={node.key}
                      type="button"
                      onClick={() => setActiveKey(node.key)}
                      aria-pressed={selected}
                      className={`rounded-full border px-3 py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clean-blue focus-visible:ring-offset-2 ${selected ? 'border-clean-blue bg-clean-blue text-white' : 'border-soft bg-white text-slate hover:border-clean-blue hover:text-clean-blue'}`}
                    >
                      {node.key}
                    </button>
                  );
                })}
              </div>
              <AnimatePresence mode="wait">
                {activeNode ? (
                <motion.div
                  key={activeNode.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-2 text-sm font-mono-tnum text-clean-blue">
                    {activeNode.key}
                  </div>
                  <h3 className="text-xl font-semibold text-navy mb-4">
                    {activeNode.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {activeNode.technologies.map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="px-3 py-1.5 text-sm text-clean-blue bg-soft-blue/60 rounded-full border border-clean-blue/15"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="rounded-2xl border border-soft bg-soft-blue/30 p-5"
                >
                  <p className="text-base leading-relaxed text-slate">{t.stack.clickHint}</p>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
