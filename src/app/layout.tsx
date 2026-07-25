import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Glass Studio CAD',
  description: 'Prototipo de plataforma de diseño de vidrio con agentes parametrizados',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
