import type { Metadata } from 'next';
import './globals.css';
import { company } from '@/data/content';

export const metadata: Metadata = {
  metadataBase: new URL('https://verix.sa'),
  title: company.legalName,
  description: 'Verix Engineering Consultants',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.png', type: 'image/png', sizes: '512x512' }
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/favicon.ico']
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="custom-scrollbar">{children}</body>
    </html>
  );
}
