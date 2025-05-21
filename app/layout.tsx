import './globals.css';
import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import AlertBanner from '@/components/AlertBanner';

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Heliothon - AI Processor Innovation',
  description: 'Pioneering the future of AI processors with revolutionary 3D chip-based printing technology.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.className} smooth-scroll`}>
        {/* <AlertBanner /> */}
        {children}
      </body>
    </html>
  );
}