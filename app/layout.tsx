import type { Metadata, Viewport } from 'next';
import { Playfair_Display, DM_Sans } from 'next/font/google';
import { SITE_URL, SITE_NAME, LATTES_URL } from '@/lib/site';
import { ENDERECO, EMAIL, INSTAGRAM, WHATSAPP_NUMBER } from '@/lib/contato';
import './globals.css';

// Only the weights the site actually renders. Playfair 600/700 and DM Sans
// 600 were being downloaded and never used — pure cost on a mobile connection.
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500'],
  style: ['normal', 'italic'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500'],
});

// Matches the navy so the Android Chrome address bar blends into the page.
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1628',
  colorScheme: 'dark',
};

const DESCRIPTION =
  'Dr. Alexandre Voigt, advogado inscrito na OAB/SP e mestre em Ciências Policiais, com atuação em Direito Militar e Policial e em Direito Aeronáutico. Santos/SP.';

const OG_DESCRIPTION =
  'Atuação em Direito Militar e Policial e em Direito Aeronáutico do consumidor.';

export const metadata: Metadata = {
  // Sem metadataBase o Next não resolve as URLs absolutas de canonical e de
  // Open Graph — os previews de link saem quebrados.
  metadataBase: new URL(SITE_URL),
  title: 'Dr. Alexandre Voigt — Advogado | Direito Militar e Aeronáutico',
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  authors: [{ name: 'Dr. Alexandre Voigt' }],
  creator: 'Dr. Alexandre Voigt',
  publisher: SITE_NAME,
  keywords: [
    'advogado direito militar',
    'direito penal militar',
    'processo administrativo disciplinar militar',
    'advogado direito aeronáutico',
    'direito do consumidor aéreo',
    'Alexandre Voigt advogado',
    'OAB/SP',
  ],
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      // Libera thumbnail grande no resultado de busca — relevante para a
      // foto de perfil e as capas dos livros.
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: '/icon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'Dr. Alexandre Voigt — Advogado',
    description: OG_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Alexandre Voigt — Advogado',
    description: OG_DESCRIPTION,
  },
};

// Structured data — helps search engines connect the entity to the
// public Lattes record (CNPq) and to the verified academic titles.
const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': `${SITE_URL}/#pessoa`,
  name: 'Alexandre de Oliveira Voigt',
  alternateName: 'Dr. Alexandre Voigt',
  jobTitle: 'Advogado',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/icon.png`,
  nationality: 'BR',
  sameAs: [LATTES_URL, INSTAGRAM],
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
      name: 'Centro de Altos Estudos de Segurança Cel PM Nelson Freire Terra — CAES',
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

// `Person` sozinho não alimenta busca local. É o `LegalService` — com
// endereço, telefone e área atendida — que sustenta consultas do tipo
// "advogado direito militar Santos".
const legalServiceJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#escritorio`,
  name: SITE_NAME,
  description: DESCRIPTION,
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/opengraph-image`,
  telephone: `+${WHATSAPP_NUMBER}`,
  email: EMAIL,
  founder: { '@id': `${SITE_URL}/#pessoa` },
  employee: { '@id': `${SITE_URL}/#pessoa` },
  sameAs: [INSTAGRAM, LATTES_URL],
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${ENDERECO.logradouro} — ${ENDERECO.complemento}`,
    addressLocality: ENDERECO.cidade,
    addressRegion: ENDERECO.uf,
    postalCode: ENDERECO.cep,
    addressCountry: ENDERECO.pais,
  },
  areaServed: [
    { '@type': 'City', name: 'Santos' },
    { '@type': 'AdministrativeArea', name: 'Baixada Santista' },
    { '@type': 'State', name: 'São Paulo' },
    { '@type': 'Country', name: 'Brasil' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  knowsAbout: [
    'Direito Militar e Policial',
    'Direito Penal e Processual Penal Militar',
    'Direito Administrativo Disciplinar',
    'Direito Aeronáutico',
    'Direito Cível',
    'Direito Bancário',
    'Direito Previdenciário',
    'Direito do Consumidor',
  ],
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#site`,
  url: `${SITE_URL}/`,
  name: SITE_NAME,
  inLanguage: 'pt-BR',
  publisher: { '@id': `${SITE_URL}/#pessoa` },
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              personJsonLd,
              legalServiceJsonLd,
              websiteJsonLd,
            ]),
          }}
        />
        {children}
      </body>
    </html>
  );
}
