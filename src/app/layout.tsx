import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono, Instrument_Serif } from 'next/font/google';
import './globals.scss';

// ─── Font Loading ─────────────────────────────────────────────────────────────
const inter = Inter({
  variable: '--font-sans',
  subsets: ['latin'],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-mono',
  subsets: ['latin'],
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-serif',
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
});

// ─── Metadata ─────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL('https://ragilkp.dev'),
  title: {
    default: 'Ragil KP — Software Developer | Portfolio',
    template: '%s | Ragil KP',
  },
  description:
    'Personal developer portfolio of Ragil KP. Software Developer based in Dubai, UAE specializing in Java, Spring Boot, Python, Django, Next.js, and practical full-stack engineering.',
  keywords: [
    'Ragil KP',
    'Software Developer',
    'Backend Developer',
    'Java Developer',
    'Spring Boot',
    'Python',
    'Django',
    'Next.js',
    'TypeScript',
    'Linux',
    'cPanel',
    'Dubai Software Engineer',
    'Developer Portfolio',
  ],
  authors: [{ name: 'Ragil KP', url: 'https://github.com/ragil-007' }],
  creator: 'Ragil KP',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ragilkp.dev',
    title: 'Ragil KP — Software Developer',
    description:
      'Building digital experiences through code, creativity, and curiosity. Exploring backend architecture, distributed systems, and modern web applications.',
    siteName: 'Ragil KP Portfolio',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Ragil KP — Software Developer Portfolio Preview',
        type: 'image/svg+xml',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ragil KP — Software Developer',
    description:
      'Building digital experiences through code, creativity, and curiosity. Exploring backend architecture, distributed systems, and modern web applications.',
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF9F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

// ─── JSON-LD Structured Data ──────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://ragilkp.dev/#person',
      name: 'Ragil KP',
      jobTitle: 'Software Developer',
      description:
        'Software Developer based in Dubai, UAE specializing in Java, Spring Boot, Python, Django, Next.js, and practical full-stack engineering.',
      url: 'https://ragilkp.dev',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Dubai',
        addressCountry: 'United Arab Emirates',
      },
      sameAs: [
        'https://github.com/ragil-007',
        'https://linkedin.com/in/ragil-raghunath',
        'https://hackerrank.com/ragilraghunath11',
      ],
      alumniOf: [
        {
          '@type': 'CollegeOrUniversity',
          name: 'Srinivas Institute of Technology',
        },
        {
          '@type': 'CollegeOrUniversity',
          name: 'Kannur University',
        },
      ],
      knowsAbout: [
        'Java',
        'Spring Boot',
        'Python',
        'Django',
        'REST APIs',
        'Next.js',
        'TypeScript',
        'Linux',
        'cPanel',
        'MySQL',
        'Technical Operations',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://ragilkp.dev/#website',
      url: 'https://ragilkp.dev',
      name: 'Ragil KP Portfolio',
      description: 'Personal portfolio of software developer Ragil KP',
      author: {
        '@id': 'https://ragilkp.dev/#person',
      },
    },
  ],
};

// ─── Root Layout ──────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-canvas text-ink-primary antialiased selection:bg-ink-primary selection:text-canvas min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
