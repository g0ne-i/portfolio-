import './globals.css';
import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { LanguageProvider } from '@/components/providers/language-provider';

const instrumentSerif = localFont({
  src: './fonts/InstrumentSerif-Regular.ttf',
  weight: '400',
  style: 'normal',
  variable: '--font-instrument',
  display: 'swap',
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.URL ??
  'http://localhost:3000';
const normalizedSiteUrl = siteUrl.replace(/\/$/, '');
const portraitUrl = `${normalizedSiteUrl}/images/ismail-ourdou.jpeg`;

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Ismail Ourdou',
  jobTitle: 'Junior Software & AI Developer',
  email: 'mailto:ismailourdou123@gmail.com',
  telephone: '+212610692362',
  url: siteUrl,
  image: portraitUrl,
  sameAs: [
    'https://www.linkedin.com/in/ismail-ourdou/',
    'https://github.com/g0ne-i',
  ],
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Higher School of Technology of Salé',
  },
  knowsAbout: ['Software Development', 'Artificial Intelligence', 'RAG', 'Claude MCP', 'Odoo', 'Automation', 'OCR', 'MLOps', 'Data Engineering', 'Power BI', 'GCP'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Rabat',
    addressCountry: 'MA',
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Ismail Ourdou — Junior Software & AI Developer',
  description:
    'Portfolio of Ismail Ourdou, a junior software and AI developer specializing in Claude MCP, RAG, Odoo automation, OCR, data engineering, and full-stack development.',
  keywords: ['Ismail Ourdou', 'Software Developer', 'AI Developer', 'Claude MCP', 'RAG', 'Odoo', 'Automation', 'OCR', 'Data Engineering', 'Next.js', 'Power BI', 'GCP', 'Rabat'],
  openGraph: {
    title: 'Ismail Ourdou — Junior Software & AI Developer',
    description:
      'Software and AI portfolio featuring RAG, Odoo automation, data engineering, full-stack applications, and live client work.',
    type: 'website',
    images: [{ url: portraitUrl, width: 709, height: 709, alt: 'Ismail Ourdou' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail Ourdou — Junior Software & AI Developer',
    description: 'RAG, Odoo automation, data engineering, and full-stack web and mobile development.',
    images: [portraitUrl],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${instrumentSerif.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
