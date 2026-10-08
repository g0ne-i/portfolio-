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
    'Portfolio of Ismail Ourdou, a junior developer specializing in ERP, Odoo, artificial intelligence, automation, and web development.',
  keywords: ['Ismail Ourdou', 'ERP', 'Odoo', 'AI', 'Artificial Intelligence', 'Automation', 'Next.js', 'React', 'Rabat'],
  openGraph: {
    title: 'Ismail Ourdou — Junior Software & AI Developer',
    description:
      'Portfolio of Ismail Ourdou, Junior Developer specializing in ERP, Odoo, artificial intelligence, automation and web development.',
    type: 'website',
    images: [{ url: portraitUrl, width: 709, height: 709, alt: 'Ismail Ourdou' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismail Ourdou — Junior Software & AI Developer',
    description: 'ERP, Odoo, artificial intelligence, automation and web development.',
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
