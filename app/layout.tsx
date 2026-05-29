import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

export const metadata: Metadata = {
  title: 'Dr. Alexandre Voigt — Advogado | Direito Aeronáutico',
  description:
    'Dr. Alexandre Voigt, advogado inscrito na OAB e Major da Polícia Militar (reserva), com atuação em Direito Aeronáutico e defesa dos direitos do passageiro aéreo.',
  authors: [{ name: 'Dr. Alexandre Voigt' }],
  openGraph: {
    title: 'Dr. Alexandre Voigt — Advogado',
    description:
      'Atuação informativa em Direito Aeronáutico e direitos do passageiro aéreo.',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-navy-900 text-bone antialiased">
        {children}
      </body>
    </html>
  );
}
