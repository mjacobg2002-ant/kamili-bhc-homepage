import './globals.css';
import { site } from '@/lib/site';

const description =
  'Kamili Behavioral Health Center offers client-centered therapy and counseling in Baltimore, MD — individual and group therapy, substance-use counseling, and trauma-informed care.';

export const metadata = {
  metadataBase: new URL('https://www.kamilibhc.org'),
  title: {
    default: 'Kamili Behavioral Health Center | Therapy in Baltimore, MD',
    template: '%s | Kamili Behavioral Health Center',
  },
  description,
  keywords: [
    'behavioral health Baltimore',
    'therapy Baltimore MD',
    'counseling Baltimore',
    'trauma-informed care',
    'substance use counseling',
    'group therapy',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Kamili Behavioral Health Center | Therapy in Baltimore, MD',
    description,
    siteName: site.name,
    locale: 'en_US',
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  themeColor: '#14233b',
  width: 'device-width',
  initialScale: 1,
};

function LocalBusinessSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': ['MedicalBusiness', 'ProfessionalService'],
    name: site.name,
    description,
    telephone: site.phoneDisplay,
    email: site.email,
    url: 'https://www.kamilibhc.org',
    address: {
      '@type': 'PostalAddress',
      streetAddress: `${site.address.line1}, ${site.address.line2}`,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: 'US',
    },
    areaServed: 'Baltimore, MD',
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800&family=Fraunces:ital,opsz,wght@1,9..144,400;1,9..144,500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        {children}
        <LocalBusinessSchema />
      </body>
    </html>
  );
}
