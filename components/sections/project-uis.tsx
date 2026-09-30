'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { useLanguage } from '@/components/providers/language-provider';
import { withBasePath } from '@/lib/paths';
import {
  FileText,
  Upload,
  Sparkles,
  CheckCircle2,
  Clock,
  FileSearch,
  Brain,
  Target,
  TrendingUp,
  ShoppingCart,
  MessageSquare,
  Package,
  Users,
  ArrowDown,
  ArrowRight,
  CalendarDays,
  BedDouble,
  Stethoscope,
  Database,
  Globe2,
  MapPin,
  Search,
} from 'lucide-react';

/* === Documind UI === */
export function DocumindUI() {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-soft bg-soft-blue/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 bg-white rounded text-[10px] text-slate/60 truncate">
          documind.com/documents
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <div className="w-32 lg:w-40 border-r border-soft bg-soft-blue/30 p-3 flex flex-col gap-1">
          <div className="text-[9px] uppercase tracking-wider text-slate/60 mb-2">Documents</div>
          {['Invoices', 'Contracts', 'Receipts', 'Reports'].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-2 px-2 py-1.5 rounded text-[11px] ${
                i === 0 ? 'bg-clean-blue/10 text-clean-blue' : 'text-slate'
              }`}
            >
              <FileText className="w-3 h-3" />
              {item}
            </div>
          ))}
          <div className="mt-auto">
            <div className="flex items-center gap-1.5 px-2 py-1.5 bg-clean-blue text-white rounded text-[10px] font-medium cursor-pointer">
              <Upload className="w-3 h-3" />
              Upload
            </div>
          </div>
        </div>

        {/* Main */}
        <div className="flex-1 p-3 lg:p-4 overflow-hidden">
          <div className="grid grid-cols-3 gap-2 mb-3">
            <div className="p-2 border border-soft rounded">
              <div className="text-[8px] text-slate/60 uppercase">Total</div>
              <div className="text-sm font-semibold text-navy">247</div>
            </div>
            <div className="p-2 border border-soft rounded">
              <div className="text-[8px] text-slate/60 uppercase">Processed</div>
              <div className="text-sm font-semibold text-clean-blue">198</div>
            </div>
            <div className="p-2 border border-soft rounded">
              <div className="text-[8px] text-slate/60 uppercase">Pending</div>
              <div className="text-sm font-semibold text-orange-500">49</div>
            </div>
          </div>

          <div className="flex gap-2 mb-3">
            <div className="flex-1 p-2.5 border border-soft rounded bg-soft-blue/40">
              <div className="flex items-center gap-1.5 mb-1.5">
                <Sparkles className="w-3 h-3 text-clean-blue" />
                <span className="text-[9px] font-medium text-navy">AI Extraction</span>
              </div>
              <div className="space-y-1">
                {['Invoice #: INV-2024-0042', 'Date: 15/03/2024', 'Amount: €12,450'].map((field) => (
                  <div key={field} className="flex items-center gap-1 text-[9px] text-slate">
                    <CheckCircle2 className="w-2.5 h-2.5 text-clean-blue flex-shrink-0" />
                    {field}
                  </div>
                ))}
              </div>
            </div>
            <div className="w-24 lg:w-28 border border-soft rounded flex flex-col items-center justify-center bg-white">
              <FileSearch className="w-6 h-6 text-slate/40 mb-1" />
              <div className="text-[8px] text-slate/60">Preview</div>
              <div className="w-16 h-20 mt-1 bg-soft-blue/60 rounded-sm border border-soft" />
            </div>
          </div>

          <div className="space-y-1.5">
            {[
              { name: 'Invoice_0042.pdf', status: 'Processed', icon: CheckCircle2, color: 'text-clean-blue' },
              { name: 'Contract_Q1.pdf', status: 'Processing', icon: Clock, color: 'text-orange-500' },
              { name: 'Receipt_0089.jpg', status: 'Processed', icon: CheckCircle2, color: 'text-clean-blue' },
            ].map((doc) => (
              <div key={doc.name} className="flex items-center justify-between px-2 py-1.5 border border-soft rounded text-[10px]">
                <div className="flex items-center gap-2">
                  <FileText className="w-3 h-3 text-slate/60" />
                  <span className="text-navy">{doc.name}</span>
                </div>
                <div className={`flex items-center gap-1 ${doc.color}`}>
                  <doc.icon className="w-2.5 h-2.5" />
                  {doc.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Odoo ERP Dashboard === */
export function OdooDashboardUI() {
  const { lang } = useLanguage();
  const menuItems = lang === 'fr'
    ? [
        { icon: TrendingUp, label: 'CRM' },
        { icon: FileText, label: 'Factures' },
        { icon: Package, label: 'Produits' },
        { icon: Target, label: 'Données' },
        { icon: MessageSquare, label: 'Assistant IA' },
      ]
    : [
        { icon: TrendingUp, label: 'CRM' },
        { icon: FileText, label: 'Invoices' },
        { icon: Package, label: 'Products' },
        { icon: Target, label: 'Data' },
        { icon: MessageSquare, label: 'AI Assistant' },
      ];
  const stats = lang === 'fr'
    ? [
        { label: 'Revenus', value: '€84.2k', change: '+12%' },
        { label: 'Commandes', value: '1,429', change: '+8%' },
        { label: 'Clients', value: '342', change: '+5%' },
        { label: 'Pipeline', value: '€23k', change: '+18%' },
      ]
    : [
        { label: 'Revenue', value: '€84.2k', change: '+12%' },
        { label: 'Orders', value: '1,429', change: '+8%' },
        { label: 'Clients', value: '342', change: '+5%' },
        { label: 'Pipeline', value: '€23k', change: '+18%' },
      ];

  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-soft bg-soft-blue/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 bg-white rounded text-[10px] text-slate/60 truncate">
          odoo.darbtech.com/dashboard
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        <div className="w-28 lg:w-32 border-r border-soft bg-deep-blue p-3 flex flex-col gap-1">
          <div className="text-[9px] uppercase tracking-wider text-white/40 mb-2">Menu</div>
          {menuItems.map((item, i) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2 py-1.5 rounded text-[10px] ${
                i === 0 ? 'bg-clean-blue/30 text-white' : 'text-white/60'
              }`}
            >
              <item.icon className="w-3 h-3" />
              {item.label}
            </div>
          ))}
        </div>

        <div className="flex-1 p-3 lg:p-4 overflow-hidden">
          {/* Data flow indicator */}
          <div className="flex items-center gap-1.5 mb-3 text-[8px] uppercase tracking-wider text-slate/50">
            <span>{lang === 'fr' ? 'Métier' : 'Business'}</span>
            <ArrowRight className="w-2.5 h-2.5" />
            <span>Odoo</span>
            <ArrowRight className="w-2.5 h-2.5" />
            <span>{lang === 'fr' ? 'Données' : 'Data'}</span>
            <ArrowRight className="w-2.5 h-2.5" />
            <span className="text-clean-blue">{lang === 'fr' ? 'IA' : 'AI'}</span>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-3">
            {stats.map((stat) => (
              <div key={stat.label} className="p-2 border border-soft rounded">
                <div className="text-[8px] text-slate/60 uppercase">{stat.label}</div>
                <div className="text-xs font-semibold text-navy">{stat.value}</div>
                <div className="text-[8px] text-clean-blue">{stat.change}</div>
              </div>
            ))}
          </div>

          {/* Chart */}
          <div className="p-2.5 border border-soft rounded mb-3">
            <div className="text-[9px] text-slate/60 mb-2">{lang === 'fr' ? 'Aperçu des revenus' : 'Revenue Overview'}</div>
            <div className="flex items-end gap-1 h-16">
              {[40, 55, 35, 70, 60, 85, 75, 90, 65, 80, 95, 88].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                  className="flex-1 bg-gradient-to-t from-clean-blue/40 to-clean-blue rounded-sm"
                />
              ))}
            </div>
          </div>

          {/* AI Assistant */}
          <div className="p-2 border border-clean-blue/30 rounded bg-clean-blue/5">
            <div className="flex items-center gap-1.5 mb-1.5">
              <Brain className="w-3 h-3 text-clean-blue" />
              <span className="text-[9px] font-medium text-navy">{lang === 'fr' ? 'Assistant IA' : 'AI Assistant'}</span>
              <span className="ml-auto text-[8px] text-clean-blue flex items-center gap-1">
                <span className="w-1 h-1 rounded-full bg-clean-blue animate-pulse-dot" /> {lang === 'fr' ? 'Actif' : 'Active'}
              </span>
            </div>
            <div className="text-[9px] text-slate bg-white rounded px-2 py-1 border border-soft">
              {lang === 'fr' ? '« Analyse des ventes T1… Revenus en hausse de 12 % vs T4. »' : '“Analyzing Q1 sales data… Revenue up 12% vs Q4.”'}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* === AI Resume Screening === */
export function AIResumeScreeningUI() {
  const { lang } = useLanguage();
  const steps = lang === 'fr'
    ? [
        { icon: Upload, label: 'Import du CV', sub: 'PDF / DOCX' },
        { icon: Brain, label: 'Traitement IA', sub: 'Analyse NLP' },
        { icon: Target, label: 'Compétences', sub: 'Extraction' },
        { icon: Users, label: 'Candidat', sub: 'Analyse' },
        { icon: CheckCircle2, label: 'Score', sub: '94% compatible' },
      ]
    : [
        { icon: Upload, label: 'CV Upload', sub: 'PDF / DOCX' },
        { icon: Brain, label: 'AI Processing', sub: 'NLP Analysis' },
        { icon: Target, label: 'Skills', sub: 'Extraction' },
        { icon: Users, label: 'Candidate', sub: 'Analysis' },
        { icon: CheckCircle2, label: 'Score', sub: '94% Match' },
      ];

  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col p-4 lg:p-6">
      <div className="flex items-center gap-2 mb-4">
        <Brain className="w-4 h-4 text-clean-blue" />
        <span className="text-xs font-semibold text-navy">{lang === 'fr' ? "Pipeline d'analyse IA des CV" : 'AI Resume Screening Pipeline'}</span>
        <span className="ml-auto text-[10px] text-slate font-mono-tnum">v2.1.0</span>
      </div>

      <div className="flex-1 flex flex-col justify-center gap-3">
        {steps.map((step, i) => (
          <div key={step.label} className="flex items-center gap-3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.4 }}
              className="flex items-center gap-3 flex-1"
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center border ${
                i === steps.length - 1
                  ? 'bg-clean-blue text-white border-clean-blue'
                  : 'bg-soft-blue text-clean-blue border-clean-blue/20'
              }`}>
                <step.icon className="w-4 h-4" />
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium text-navy">{step.label}</div>
                <div className="text-[10px] text-slate">{step.sub}</div>
              </div>
              {i === steps.length - 1 && (
                <div className="text-lg font-bold text-clean-blue font-mono-tnum">94%</div>
              )}
            </motion.div>

            {i < steps.length - 1 && (
              <div className="flex flex-col items-center">
                <motion.div
                  initial={{ height: 0 }}
                  whileInView={{ height: '20px' }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, duration: 0.4 }}
                  className="w-px bg-gradient-to-b from-clean-blue to-clean-blue/30"
                />
                <ArrowDown className="w-3 h-3 text-clean-blue/40 -mt-1" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-soft">
        <div className="flex flex-wrap gap-1.5">
          {['Python', 'NLP', 'PyTorch', 'FastAPI'].map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[9px] bg-soft-blue text-clean-blue rounded-full border border-clean-blue/20">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* === E-Sport Dashboard === */
function LegacyESportDashboardUI() {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-soft bg-soft-blue/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 bg-white rounded text-[10px] text-slate/60 truncate">
          e-sport.shop/admin
        </div>
      </div>

      <div className="flex-1 p-3 lg:p-4 overflow-hidden grid grid-cols-3 gap-3">
        {/* Products */}
        <div className="col-span-1 flex flex-col">
          <div className="text-[9px] uppercase tracking-wider text-slate/60 mb-2">Products</div>
          <div className="space-y-1.5 flex-1">
            {[
              { name: 'Mouse Pro X', price: '€89', stock: 42 },
              { name: 'Keyboard K2', price: '€149', stock: 18 },
              { name: 'Headset H7', price: '€199', stock: 7 },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 p-2 border border-soft rounded">
                <div className="w-8 h-8 rounded bg-soft-blue flex items-center justify-center">
                  <ShoppingCart className="w-3.5 h-3.5 text-clean-blue" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-[10px] font-medium text-navy truncate">{p.name}</div>
                  <div className="text-[9px] text-slate">{p.price} · {p.stock} in stock</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Forecast Chart */}
        <div className="col-span-2 flex flex-col">
          <div className="flex items-center justify-between mb-2">
            <div className="text-[9px] uppercase tracking-wider text-slate/60">Sales Forecast</div>
            <div className="flex items-center gap-1 text-[9px] text-clean-blue">
              <TrendingUp className="w-3 h-3" />
              AI Forecast
            </div>
          </div>
          <div className="flex-1 border border-soft rounded p-3 relative">
            <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
              <defs>
                <linearGradient id="forecastGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
                d="M0,60 L25,50 L50,55 L75,40 L100,35 L125,25 L150,30 L175,15 L200,10"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
              <motion.path
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                d="M0,60 L25,50 L50,55 L75,40 L100,35 L125,25 L150,30 L175,15 L200,10 L200,80 L0,80 Z"
                fill="url(#forecastGrad)"
              />
              <line x1="100" y1="0" x2="100" y2="80" stroke="#DCE7F5" strokeWidth="0.5" strokeDasharray="2,2" />
              <text x="102" y="12" fontSize="5" fill="#64748B">Forecast →</text>
            </svg>
            <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[7px] text-slate/50">
              <span>Jan</span><span>Mar</span><span>May</span><span>Jul</span><span>Sep</span>
            </div>
          </div>

          {/* AI Chatbot */}
          <div className="mt-2 p-2 border border-clean-blue/20 rounded bg-clean-blue/5">
            <div className="flex items-center gap-1.5 mb-1">
              <MessageSquare className="w-3 h-3 text-clean-blue" />
              <span className="text-[9px] font-medium text-navy">AI Chatbot</span>
            </div>
            <div className="text-[9px] text-slate bg-white rounded px-2 py-1 border border-soft">
              &ldquo;Restock Headset H7 — projected to sell out in 3 days.&rdquo;
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ESportDashboardUI() {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const products = lang === 'fr'
    ? [
        { name: 'Manette pro', stock: 42 },
        { name: 'Clavier gaming', stock: 18 },
        { name: 'Casque sans fil', stock: 7 },
      ]
    : [
        { name: 'Pro controller', stock: 42 },
        { name: 'Gaming keyboard', stock: 18 },
        { name: 'Wireless headset', stock: 7 },
      ];

  return (
    <div className="flex h-full w-full flex-col overflow-hidden rounded-lg bg-white">
      <div className="flex items-center gap-2 border-b border-soft bg-soft-blue/50 px-3 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/60" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="mx-2 flex-1 truncate rounded bg-white px-3 py-1 text-[10px] text-slate/70">
          {lang === 'fr' ? 'E-Sport · Espace administrateur' : 'E-Sport · Admin workspace'}
        </div>
        <span className="hidden items-center gap-1 text-[8px] font-medium text-clean-blue sm:flex">
          <span className="h-1.5 w-1.5 rounded-full bg-clean-blue" /> {lang === 'fr' ? 'Sécurisé par JWT' : 'JWT secured'}
        </span>
      </div>

      <div className="grid min-h-0 flex-1 grid-cols-[0.95fr_1.05fr] gap-2 overflow-hidden p-2.5 sm:grid-cols-[0.8fr_1.15fr_0.95fr] lg:gap-3 lg:p-4">
        <div className="hidden min-w-0 flex-col sm:flex">
          <div className="mb-2 text-[8px] uppercase tracking-wider text-slate/60 sm:text-[9px]">{lang === 'fr' ? 'Gestion des produits' : 'Product management'}</div>
          <div className="space-y-1.5">
            {products.map((product, index) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="flex items-center gap-1.5 rounded border border-soft p-1.5 sm:p-2"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-soft-blue sm:h-8 sm:w-8">
                  <ShoppingCart className="h-3 w-3 text-clean-blue sm:h-3.5 sm:w-3.5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[8px] font-medium text-navy sm:text-[10px]">{product.name}</div>
                  <div className="text-[8px] text-slate sm:text-[9px]">{product.stock} {lang === 'fr' ? 'en stock' : 'in stock'}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex min-w-0 flex-col">
          <div className="mb-1.5 flex items-center gap-1 rounded border border-soft bg-soft-blue/40 px-1.5 py-1 text-[8px] text-navy sm:hidden">
            <Package className="h-3 w-3 text-clean-blue" /> {lang === 'fr' ? 'Gestion produits' : 'Product management'}
            <span className="ml-auto text-clean-blue">3 {lang === 'fr' ? 'actifs' : 'active'}</span>
          </div>
          <div className="mb-2 flex items-center justify-between gap-1">
            <div className="text-[8px] uppercase tracking-wider text-slate/60 sm:text-[9px]">{lang === 'fr' ? 'Prévision des ventes' : 'Sales forecast'}</div>
            <div className="hidden items-center gap-1 text-[8px] text-clean-blue sm:flex">
              <TrendingUp className="h-3 w-3" /> {lang === 'fr' ? 'Prévision IA' : 'AI forecast'}
            </div>
          </div>
          <div className="relative min-h-0 flex-1 rounded border border-soft p-2">
            <svg className="h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none" aria-label={lang === 'fr' ? 'Graphique de prévision des ventes' : 'Sales forecast chart'}>
              <defs>
                <linearGradient id="forecastGradLive" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.2, ease: 'easeOut' }} d="M0,60 L25,50 L50,55 L75,40 L100,35 L125,25 L150,30 L175,15 L200,10" fill="none" stroke="#3B82F6" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
              <motion.path initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.35 }} d="M0,60 L25,50 L50,55 L75,40 L100,35 L125,25 L150,30 L175,15 L200,10 L200,80 L0,80 Z" fill="url(#forecastGradLive)" />
              <line x1="100" y1="0" x2="100" y2="80" stroke="#DCE7F5" strokeWidth="0.5" strokeDasharray="2,2" />
            </svg>
          </div>
          <div className="mt-2 rounded border border-clean-blue/20 bg-clean-blue/5 p-1.5 sm:p-2">
            <div className="mb-1 flex items-center gap-1 text-[8px] font-medium text-navy sm:text-[9px]">
              <Brain className="h-3 w-3 text-clean-blue" /> {lang === 'fr' ? 'Chatbot IA' : 'AI chatbot'}
            </div>
            <p className="line-clamp-2 rounded border border-soft bg-white px-1.5 py-1 text-[8px] leading-relaxed text-slate sm:text-[9px]">
              {lang === 'fr' ? 'La demande augmente. Priorisez le réapprovisionnement des casques.' : 'Demand is rising. Prioritize the wireless headset restock.'}
            </p>
          </div>
        </div>

        <div className="flex min-w-0 flex-col rounded border border-clean-blue/20 bg-soft-blue/30 p-1.5 sm:p-2">
          <div className="mb-2 flex items-center gap-1">
            <MessageSquare className="h-3 w-3 text-clean-blue" />
            <span className="truncate text-[8px] font-semibold text-navy sm:text-[9px]">{lang === 'fr' ? 'Chat en temps réel' : 'Real-time chat'}</span>
            <span className="ml-auto flex items-center gap-1 text-[7px] text-clean-blue sm:text-[8px]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {lang === 'fr' ? 'En ligne' : 'Online'}
            </span>
          </div>
          <div className="flex min-h-0 flex-1 flex-col justify-center gap-1.5">
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} className="max-w-[94%] rounded-lg rounded-bl-sm bg-white px-1.5 py-1 text-[8px] font-medium leading-relaxed text-slate shadow-sm sm:px-2 sm:text-[9px]">
              <span className="block font-semibold text-navy">Admin</span>
              {lang === 'fr' ? 'Pouvez-vous confirmer le stock de casques ?' : 'Can you confirm headset stock?'}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="ml-auto max-w-[94%] rounded-lg rounded-br-sm bg-clean-blue px-1.5 py-1 text-[8px] font-medium leading-relaxed text-white shadow-sm sm:px-2 sm:text-[9px]">
              <span className="block font-semibold">{lang === 'fr' ? 'Vendeur' : 'Seller'}</span>
              {lang === 'fr' ? 'Il en reste 7. Réapprovisionnement demandé.' : 'Only 7 left. Restock requested.'}
            </motion.div>
            <div className="flex items-center gap-0.5 px-1 text-clean-blue" aria-label={lang === 'fr' ? "L'administrateur écrit" : 'Admin is typing'}>
              {[0, 1, 2].map((dot) => (
                <motion.span key={dot} className="h-1 w-1 rounded-full bg-current" animate={reducedMotion ? { opacity: 1 } : { opacity: [0.25, 1, 0.25] }} transition={{ duration: 1.2, repeat: reducedMotion ? 0 : Infinity, delay: reducedMotion ? 0 : dot * 0.16 }} />
              ))}
            </div>
          </div>
          <div className="truncate rounded border border-soft bg-white px-1.5 py-1 text-[7px] text-slate/60 sm:text-[8px]">
            {lang === 'fr' ? 'Message Admin ↔ Vendeur' : 'Message Admin ↔ Seller'}
          </div>
        </div>
      </div>
    </div>
  );
}

/* === CallMeGrowth Browser === */
export function CallMeGrowthUI() {
  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-soft bg-soft-blue/50">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 mx-3 px-3 py-1 bg-white rounded text-[10px] text-slate/60 truncate">
          callmegrowth.com
        </div>
      </div>

      <div className="flex flex-1 flex-col bg-[#f7faff] p-5 lg:p-8">
        <div className="flex items-center justify-between">
          <div className="text-sm font-bold tracking-tight text-navy">CallMeGrowth</div>
          <div className="hidden items-center gap-4 text-[8px] uppercase tracking-widest text-slate sm:flex">
            <span>Services</span><span>Studio</span><span>Contact</span>
          </div>
          <div className="rounded-full bg-navy px-3 py-1.5 text-[8px] text-white">Start a project</div>
        </div>
        <div className="grid flex-1 items-center gap-5 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.p initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} className="text-[9px] uppercase tracking-[0.22em] text-clean-blue">
              Digital growth studio
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="mt-3 max-w-sm text-2xl font-semibold leading-[1.05] text-navy lg:text-4xl">
              Brands designed to move forward.
            </motion.div>
            <p className="mt-3 max-w-xs text-[10px] leading-relaxed text-slate">Strategy, identity and digital experiences brought together in one focused team.</p>
          </div>
          <div className="relative hidden h-[76%] lg:col-span-2 lg:block">
            {[0, 1, 2].map((item) => (
              <motion.div key={item} initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: item * 0.12 }} className="absolute right-0 h-16 w-[88%] rounded-xl border border-clean-blue/15 bg-white p-3 shadow-sm" style={{ top: `${item * 28}%`, transform: `translateX(${-item * 10}px)` }}>
                <div className="h-1.5 w-10 rounded-full bg-clean-blue/50" />
                <div className="mt-2 h-1.5 w-3/4 rounded-full bg-soft" />
                <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-soft" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Ladybug Trading === */
export function LadybugTradingUI() {
  const products = ['Ceramics', 'Textiles', 'Décor', 'Craft objects', 'Tableware', 'New pieces'];

  return (
    <div className="w-full h-full bg-white rounded-lg overflow-hidden flex flex-col p-3 lg:p-4">
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-semibold text-navy">Ladybug Trading</span>
        <span className="text-[9px] text-slate">6 products</span>
      </div>
      <div className="grid grid-cols-3 gap-2 flex-1">
        {products.map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.3 }}
            className="border border-soft rounded p-2 flex flex-col"
          >
            <div className={`flex flex-1 items-center justify-center rounded mb-1.5 ${i % 2 ? 'bg-[#eef6f0]' : 'bg-[#f7f1e9]'}`}>
              <Package className="w-5 h-5 text-clean-blue/40" />
            </div>
            <div className="text-[9px] font-medium text-navy">{p}</div>
            <div className="text-[8px] text-slate">View collection</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* === Montana hotel reservation === */
export function MontanaUI() {
  const { lang } = useLanguage();
  const rooms = lang === 'fr' ? ['Chambre jardin', 'Suite urbaine'] : ['Garden room', 'City suite'];
  const fields = lang === 'fr' ? ['Destination', 'Arrivée', 'Départ', 'Voyageurs'] : ['Destination', 'Check-in', 'Check-out', 'Guests'];

  return (
    <div className="flex h-full w-full flex-col bg-[#f8fbff] p-4 lg:p-5">
      <div className="flex items-center justify-between border-b border-soft pb-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-navy"><BedDouble className="h-4 w-4 text-clean-blue" /> Montana</div>
        <div className="text-[8px] uppercase tracking-widest text-slate">{lang === 'fr' ? 'Séjourner · Découvrir · Réserver' : 'Stay · Discover · Reserve'}</div>
      </div>
      <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-5">
        <div className="sm:col-span-3">
          <div className="relative h-28 overflow-hidden rounded-xl bg-gradient-to-br from-[#d8e8fa] to-[#9ec5ef] p-4">
            <div className="absolute -right-4 -top-6 h-28 w-28 rounded-full border border-white/50" />
            <p className="text-[9px] uppercase tracking-[0.2em] text-navy/60">{lang === 'fr' ? 'Trouvez votre séjour' : 'Find your stay'}</p>
            <p className="mt-2 max-w-[180px] text-xl font-semibold leading-tight text-navy">{lang === 'fr' ? 'Réservez en toute sérénité.' : 'A calmer way to book.'}</p>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2">
            {rooms.map((room, index) => (
              <motion.div key={room} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.12 }} className="rounded-lg border border-soft bg-white p-2.5">
                <div className="h-10 rounded-md bg-soft-blue" />
                <p className="mt-2 text-[9px] font-medium text-navy">{room}</p>
                <p className="text-[7px] text-slate">{lang === 'fr' ? 'Détails de disponibilité' : 'Availability details'}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-soft bg-white p-3 sm:col-span-2">
          <p className="text-[9px] font-semibold text-navy">{lang === 'fr' ? 'Réservation' : 'Reservation'}</p>
          <div className="mt-3 space-y-2">
            {fields.map((field) => (
              <div key={field} className="flex items-center gap-2 rounded-md bg-soft-blue/55 px-2 py-2 text-[8px] text-slate">
                {field === 'Destination' ? <MapPin className="h-3 w-3" /> : <CalendarDays className="h-3 w-3" />}{field}
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-md bg-clean-blue py-2 text-center text-[8px] font-medium text-white">{lang === 'fr' ? 'Vérifier la disponibilité' : 'Check availability'}</div>
        </div>
      </div>
    </div>
  );
}

/* === Medical practice management === */
export function CabinetManagementUI() {
  const { lang } = useLanguage();
  const stats = lang === 'fr' ? ['Patients', 'Rendez-vous', 'Dossiers'] : ['Patients', 'Appointments', 'Records'];
  const schedule = lang === 'fr' ? ['Consultation', 'Suivi', 'Examen'] : ['Consultation', 'Follow-up', 'Review'];

  return (
    <div className="flex h-full w-full bg-white">
      <div className="hidden w-20 flex-col items-center gap-4 bg-navy py-5 sm:flex">
        <Stethoscope className="h-5 w-5 text-white" />
        {[0, 1, 2, 3].map((item) => <div key={item} className={`h-7 w-7 rounded-md ${item === 0 ? 'bg-clean-blue' : 'bg-white/10'}`} />)}
      </div>
      <div className="flex-1 p-4 lg:p-5">
        <div className="flex items-center justify-between">
          <div><p className="text-xs font-semibold text-navy">{lang === 'fr' ? 'Vue du cabinet' : 'Practice overview'}</p><p className="text-[8px] text-slate">{lang === 'fr' ? 'Rendez-vous et dossiers patients' : 'Appointments and patient records'}</p></div>
          <div className="rounded-full bg-soft-blue px-3 py-1.5 text-[8px] text-clean-blue">{lang === 'fr' ? 'Nouveau rendez-vous' : 'New appointment'}</div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2">
          {stats.map((label, index) => (
            <motion.div key={label} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="rounded-lg border border-soft p-3">
              <div className="h-2 w-2 rounded-full bg-clean-blue/60" /><p className="mt-3 text-[8px] text-slate">{label}</p><div className="mt-1 h-2 w-1/2 rounded bg-navy/10" />
            </motion.div>
          ))}
        </div>
        <div className="mt-3 rounded-lg border border-soft p-3">
          <div className="flex items-center justify-between text-[8px] font-medium text-navy"><span>{lang === 'fr' ? "Planning d'aujourd'hui" : "Today’s schedule"}</span><CalendarDays className="h-3 w-3 text-clean-blue" /></div>
          <div className="mt-2 space-y-2">
            {schedule.map((label, index) => (
              <div key={label} className="flex items-center gap-2 border-t border-soft pt-2 text-[8px]"><span className="font-mono-tnum text-clean-blue">0{index + 1}</span><span className="text-navy">{label}</span><span className="ml-auto text-slate">{lang === 'fr' ? 'Dossier patient' : 'Patient record'}</span></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* === Redis Game of Life === */
export function RedisGameOfLifeUI() {
  const { lang } = useLanguage();
  const reducedMotion = useReducedMotion() ?? false;
  const livingCells = new Set([1, 4, 6, 9, 10, 14, 17, 18, 21, 24, 26, 27, 30, 33, 35, 38, 40, 42, 45, 47]);
  return (
    <div className="grid h-full w-full gap-4 bg-[#f8fbff] p-5 sm:grid-cols-5">
      <div className="flex flex-col justify-between sm:col-span-2">
        <div><div className="flex items-center gap-2 text-xs font-semibold text-navy"><Database className="h-4 w-4 text-clean-blue" /> {lang === 'fr' ? 'Vie Redis' : 'Redis Life'}</div><p className="mt-2 text-[9px] leading-relaxed text-slate">{lang === 'fr' ? 'Cellules distribuées synchronisées via des nœuds Redis.' : 'Distributed cells synchronized through Redis nodes.'}</p></div>
        <div className="space-y-2">
          {['A', 'B', 'C'].map((node, index) => <div key={node} className="flex items-center gap-2 rounded-md border border-soft bg-white px-2 py-2 text-[8px] text-navy"><span className="h-1.5 w-1.5 rounded-full bg-clean-blue" />{lang === 'fr' ? 'Nœud' : 'Node'} {node}<motion.span animate={reducedMotion ? { opacity: 1 } : { opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, delay: reducedMotion ? 0 : index * 0.2, repeat: reducedMotion ? 0 : Infinity }} className="ml-auto text-clean-blue">{lang === 'fr' ? 'synchro' : 'sync'}</motion.span></div>)}
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1 rounded-xl border border-soft bg-white p-3 sm:col-span-3">
        {Array.from({ length: 49 }, (_, index) => (
          <motion.div key={index} animate={livingCells.has(index) ? (reducedMotion ? { opacity: 1, scale: 1 } : { opacity: [0.35, 1, 0.55], scale: [0.85, 1, 0.9] }) : { opacity: 0.18 }} transition={{ duration: 1.8, delay: reducedMotion ? 0 : (index % 7) * 0.05, repeat: reducedMotion ? 0 : Infinity, repeatType: 'reverse' }} className={`aspect-square rounded-sm ${livingCells.has(index) ? 'bg-clean-blue' : 'bg-soft-blue'}`} />
        ))}
      </div>
    </div>
  );
}

/* === Tourism data pipeline === */
export function TourismDataUI() {
  const { lang } = useLanguage();
  const stages = lang === 'fr' ? ['Sources web', 'Collecte', 'Données structurées', 'Analyse'] : ['Web sources', 'Scraping', 'Structured data', 'Analysis'];
  const records = lang === 'fr' ? ['Fiche destination', 'Fiche catégorie', 'Fiche source'] : ['Destination record', 'Category record', 'Source record'];
  return (
    <div className="flex h-full w-full flex-col bg-white p-4 lg:p-5">
      <div className="flex items-center justify-between"><div className="flex items-center gap-2 text-xs font-semibold text-navy"><Globe2 className="h-4 w-4 text-clean-blue" /> {lang === 'fr' ? 'Données touristiques' : 'Tourism data'}</div><Search className="h-4 w-4 text-slate" /></div>
      <div className="mt-4 flex items-center justify-between gap-1">
        {stages.map((stage, index) => (
          <div key={stage} className="contents"><motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} className="rounded-md border border-clean-blue/15 bg-soft-blue/50 px-2 py-2 text-center text-[7px] font-medium text-navy sm:text-[8px]">{stage}</motion.div>{index < stages.length - 1 ? <ArrowRight className="h-3 w-3 flex-shrink-0 text-clean-blue/50" /> : null}</div>
        ))}
      </div>
      <div className="mt-4 grid flex-1 gap-3 sm:grid-cols-5">
        <div className="space-y-2 sm:col-span-3">
          {records.map((record, index) => <motion.div key={record} initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + index * 0.1 }} className="flex items-center gap-2 rounded-lg border border-soft p-2"><MapPin className="h-3 w-3 text-clean-blue" /><span className="text-[8px] text-navy">{record}</span><div className="ml-auto h-1.5 w-12 rounded bg-soft" /></motion.div>)}
        </div>
        <div className="flex items-end gap-1 rounded-lg bg-[#f8fbff] p-3 sm:col-span-2">
          {[38, 62, 48, 78, 56, 88].map((height, index) => <motion.div key={index} initial={{ height: 0 }} whileInView={{ height: `${height}%` }} transition={{ delay: 0.35 + index * 0.06 }} className="flex-1 rounded-t bg-clean-blue/60" />)}
        </div>
      </div>
    </div>
  );
}

function LiveWebsiteUI({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-navy">
      <Image
        src={withBasePath(src)}
        alt={alt}
        fill
        sizes="(max-width: 1024px) 100vw, 60vw"
        quality={90}
        className="object-cover object-top"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-navy/30 to-transparent" />
    </div>
  );
}

function DocumindLiveUI() {
  return <LiveWebsiteUI src="/images/projects/documind.jpg" alt="Live DocuMind AI login interface" />;
}

function CallMeGrowthLiveUI() {
  return <LiveWebsiteUI src="/images/projects/callmegrowth.jpg" alt="Live CallMeGrowth agency homepage" />;
}

function LadybugTradingLiveUI() {
  return <LiveWebsiteUI src="/images/projects/ladybug-trading.jpg" alt="Live Ladybug Trading storefront" />;
}

export const PROJECT_UIS: Record<string, React.ComponentType> = {
  documind: DocumindLiveUI,
  callmegrowth: CallMeGrowthLiveUI,
  ladybug: LadybugTradingLiveUI,
  montana: MontanaUI,
  cabinet: CabinetManagementUI,
  'e-sport': ESportDashboardUI,
  'ai-resume': AIResumeScreeningUI,
  'redis-life': RedisGameOfLifeUI,
  'tourism-data': TourismDataUI,
};
