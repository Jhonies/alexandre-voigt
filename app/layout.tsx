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

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://alexandrevoigt.adv.br'
).replace(/\/$/, '');

const LATTES_URL = 'http://lattes.cnpq.br/7928155562071787';

export const metadata: Metadata = {
  title: 'Dr. Alexandre Voigt — Advogado | Direito Militar e Aeronáutico',
  description:
    'Dr. Alexandre Voigt, advogado inscrito na OAB/SP, mestre em Ciências Policiais e Tenente-coronel da Polícia Militar (reserva), com atuação em Direito Militar e Policial e em Direito Aeronáutico.',
  authors: [{ name: 'Dr. Alexandre Voigt' }],
  icons: {
    icon: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Dr. Alexandre Voigt — Advogado',
    description:
      'Atuação em Direito Militar e Policial e em Direito Aeronáutico do consumidor.',
    locale: 'pt_BR',
    type: 'website',
  },
};

// Structured data — helps search engines connect the entity to the
// public Lattes record (CNPq) and to the verified academic titles.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alexandre de Oliveira Voigt',
  alternateName: 'Dr. Alexandre Voigt',
  jobTitle: 'Advogado',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/icon.png`,
  nationality: 'BR',
  sameAs: [LATTES_URL],
  identifier: {
    '@type': 'PropertyValue',
    propertyID: 'Lattes ID',
    value: '7928155562071787',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Inscrição profissional',
      name: 'Advogado — OAB/SP nº 548.991',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Ordem dos Advogados do Brasil — Seção São Paulo',
      },
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Mestrado',
      name: 'Mestrado profissional em Ciências Policiais de Segurança e Ordem Pública',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Pós-Graduação',
      name: 'Pós-Graduação em Direito Militar',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Pós-Graduação',
      name: 'Pós-Graduação em Direito Processual Civil',
    },
  ],
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Centro de Altos Estudos de Segurança "Cel PM Nelson Freire Terra" — CAES',
    },
    { '@type': 'CollegeOrUniversity', name: 'Universidade Cruzeiro do Sul' },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Academia de Polícia Militar do Barro Branco',
    },
    { '@type': 'CollegeOrUniversity', name: 'Faculdade de Direito Prof. Damásio de Jesus' },
    { '@type': 'CollegeOrUniversity', name: 'Faculdade Verbo Educacional' },
  ],
  knowsAbout: [
    'Direito Militar',
    'Direito Penal Militar',
    'Processo Penal Militar',
    'Direito Administrativo Disciplinar',
    'Direito Aeronáutico',
    'Direito do Consumidor',
    'Direito Previdenciário',
    'Criminologia',
  ],
  knowsLanguage: [
    { '@type': 'Language', name: 'Português' },
    { '@type': 'Language', name: 'Inglês' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-navy-900 text-bone antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
