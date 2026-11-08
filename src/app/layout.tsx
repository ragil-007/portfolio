import type { Metadata, Viewport } from 'next';
import './globals.scss';

export const metadata: Metadata = {
  title: 'Ragil KP — Software Developer | Portfolio',
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
    'Dubai Software Engineer',
    'Developer Portfolio',
  ],
  authors: [{ name: 'Ragil KP', url: 'https://github.com/ragil-007' }],
  creator: 'Ragil KP',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ragilkp.dev',
    title: 'Ragil KP — Software Developer',
    description:
      'Building digital experiences through code, creativity, and curiosity. Exploring backend architecture, distributed systems, and modern web applications.',
    siteName: 'Ragil KP Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ragil KP — Software Developer',
    description:
      'Building digital experiences through code, creativity, and curiosity. Exploring backend architecture, distributed systems, and modern web applications.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#FAF9F5',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-canvas text-ink-primary antialiased selection:bg-ink-primary selection:text-canvas min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
