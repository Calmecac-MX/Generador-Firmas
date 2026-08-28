import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Generador de Firmas de Correo | Calmécac',
  description:
    'Crea firmas de correo electrónico profesionales con la estética de Calmécac. 100% compatibles con Gmail, Outlook, SpaceMail, Apple Mail y principales clientes.',
  keywords: [
    'Calmécac',
    'Generador de firmas de correo',
    'Email Signature Generator',
    'Gmail Signature',
    'Outlook Signature',
    'SpaceMail Signature',
    'HTML Email Signature',
  ],
  authors: [{ name: 'Calmécac', url: 'https://calmecac.lat' }],
  icons: {
    icon: [
      {
        url: '/favicon-negro.ico',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/favicon-blanco.ico',
        media: '(prefers-color-scheme: dark)',
      },
    ],
    shortcut: '/favicon-blanco.ico',
  },
  openGraph: {
    title: 'Generador de Firmas de Correo | Calmécac',
    description:
      'Crea firmas de correo electrónico de alto rendimiento compatibles con Gmail, Outlook, SpaceMail y Apple Mail.',
    url: 'https://calmecac.lat',
    siteName: 'Calmécac',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="icon" href="/favicon-negro.ico" media="(prefers-color-scheme: light)" />
        <link rel="icon" href="/favicon-blanco.ico" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-calmecac-dark text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
