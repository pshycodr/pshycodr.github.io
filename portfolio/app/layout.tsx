import type { Metadata } from 'next';
import './globals.css';
import { inter, jetbrainsMono, spaceGrotesk, firaCode } from './fonts';
import { ThemeProvider } from '@/components/providers/ThemeProvider';
import { KonamiProvider } from '@/components/providers/KonamiProvider';

export const metadata: Metadata = {
  title: 'Anish Roy | Software Developer',
  description: 'Software Developer specializing in full-stack development and AI integration',
  keywords: ['Anish Roy', 'Software Developer', 'Full Stack', 'AI Integration', 'React', 'Next.js'],
  authors: [{ name: 'Anish Roy' }],
  openGraph: {
    title: 'Anish Roy | Software Developer',
    description: 'Software Developer specializing in full-stack development and AI integration',
    url: 'https://anishroy.dev',
    siteName: 'Anish Roy Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anish Roy | Software Developer',
    description: 'Software Developer specializing in full-stack development and AI integration',
    creator: '@anishroy_dev',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html 
      lang="en" 
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable} ${firaCode.variable}`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <KonamiProvider>
            <div className="noise min-h-screen">
              {children}
            </div>
          </KonamiProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}