import Image from 'next/image';
import Reveal from './Reveal';
import { safeHref } from '@/lib/safe-url';
import { SITE_URL } from '@/lib/site';

type Livro = {
  cover: string;
  alt: string;
  title: string;
  subtitle?: string;
  description: string;
  /** Só obras de acesso livre têm link. A venda (Hotmart) não é divulgada
   *  junto com a advocacia (CED, art. 40, IV). */
  link?: string;
  ctaLabel?: string;
};

const livros: Livro[] = [
  {
    cover: '/images/a-sociedade-do-medo.jpeg',
    alt: 'Capa do livro A Sociedade do Medo, de Alexandre Voigt',
    title: 'A Sociedade do Medo',
    subtitle: 'A justiça que solta, o crime que retorna',
    description:
      'Reflexão crítica sobre segurança pública, percepção social do crime, reincidência e os limites da resposta do Estado.',
  },
  {
    cover: '/images/parem-de-matar-nossas-rainhas.jpeg',
    alt: 'Capa do livro Parem de Matar as Nossas Rainhas',
    title: 'Parem de Matar as Nossas Rainhas',
    subtitle: 'Feminicídio — uma violência imperdoável',
    description:
      'Obra coautoral dedicada ao enfrentamento do feminicídio no Brasil, com análise da legislação, dos mecanismos de proteção e das responsabilidades sociais envolvidas.',
  },
  {
    cover: '/images/assedio.jpeg',
    alt: 'Capa do livro Assédio — guia prático para Policiais Militares',
    title: 'Assédio',
    subtitle: 'Guia prático para policiais militares · 3ª edição',
    description:
      'Manual técnico voltado a profissionais da segurança pública: orienta sobre direitos, identificação de abusos e instrumentos de proteção da carreira, da saúde e da honra.',
    link: safeHref('https://drive.google.com/file/d/1wy7SyEoeRy0vpRWkYXWfaj7Y3HQZZi-0/view?usp=sharing'),
    ctaLabel: 'Acessar obra',
  },
];

// As obras são o principal sinal de autoridade do autor (E-E-A-T). Sem
// marcação elas são texto invisível para o Google; como `Book` conectado ao
// `@id` da pessoa, reforçam a entidade e habilitam rich results.
const livrosJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Obras publicadas por Alexandre Voigt',
  itemListElement: livros.map((l, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Book',
      name: l.subtitle ? `${l.title} — ${l.subtitle}` : l.title,
      description: l.description,
      image: `${SITE_URL}${l.cover}`,
      inLanguage: 'pt-BR',
      author: { '@id': `${SITE_URL}/#pessoa` },
      ...(l.link && l.link !== '#' ? { url: l.link } : {}),
    },
  })),
};

export default function Livros() {
  return (
    <section
      id="livros"
      className="relative bg-bone text-navy-900 overflow-hidden"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(livrosJsonLd) }}
      />
      {/* Decorative paper texture suggestion */}
      <div className="absolute inset-0 blueprint opacity-50 pointer-events-none" />

      <div className="container-px mx-auto max-w-7xl relative py-20 md:py-28 lg:py-40">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="section-number">04</span>
              <span className="h-px flex-1 bg-navy-900/15 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-navy-900/70">
                Obras Publicadas
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-navy-900">
              Três obras autorais sobre{' '}
              <span className="serif-italic text-gold-deep">temas que importam</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-navy-900/70 text-base leading-relaxed font-light">
              Conhecimento técnico e reflexão sobre Direito, segurança pública e cidadania
              — produção intelectual do autor.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <Reveal stagger className="grid sm:grid-cols-2 md:grid-cols-3 gap-12 sm:gap-8 md:gap-10 lg:gap-14">
          {livros.map((l, i) => (
            <article
              key={l.title}
              className="group flex flex-col"
            >
              {/* Cover — clickable on the whole image (mobile-friendly) */}
              <div className="relative">
                {/* Index plate */}
                <div className="absolute -top-4 -left-4 z-20 bg-navy-900 text-bone px-3 py-1.5 font-display italic text-sm flex items-center gap-2 pointer-events-none">
                  <span className="text-gold">N°</span>
                  {String(i + 1).padStart(2, '0')}
                </div>

                {l.link ? (
                <a
                  href={l.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${l.ctaLabel} — ${l.title}`}
                  className="group/cover relative block aspect-[2/3] w-full overflow-hidden border border-navy-900/10 bg-navy-900 shadow-[0_25px_45px_-25px_rgba(10,22,40,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-4 focus-visible:ring-offset-bone"
                >
                  <Image
                    src={l.cover}
                    alt={l.alt}
                    fill
                    sizes="(min-width: 768px) 30vw, 90vw"
                    className="object-cover book-cover"
                  />

                  {/* Hover overlay — desktop */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-navy-950/0 group-hover/cover:bg-navy-950/55 transition-colors duration-500 hidden md:flex items-end justify-start p-5"
                  >
                    <span className="inline-flex items-center gap-2 text-bone text-[11px] uppercase tracking-wider3 opacity-0 translate-y-2 group-hover/cover:opacity-100 group-hover/cover:translate-y-0 transition-all duration-500 border-b border-gold/70 pb-1">
                      {l.ctaLabel}
                      <svg width="12" height="9" viewBox="0 0 14 10" fill="none">
                        <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                      </svg>
                    </span>
                  </span>

                  {/* Mobile cue — small gold chip in corner */}
                  <span
                    aria-hidden="true"
                    className="md:hidden absolute bottom-3 right-3 inline-flex items-center justify-center w-9 h-9 bg-gold text-navy-950 shadow-md"
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                    </svg>
                  </span>
                </a>
                ) : (
                  <div className="relative block aspect-[2/3] w-full overflow-hidden border border-navy-900/10 bg-navy-900 shadow-[0_25px_45px_-25px_rgba(10,22,40,0.45)]">
                    <Image
                      src={l.cover}
                      alt={l.alt}
                      fill
                      sizes="(min-width: 768px) 30vw, 90vw"
                      className="object-cover book-cover"
                    />
                  </div>
                )}
              </div>

              {/* Meta */}
              <div className="pt-7">
                <h3 className="font-display text-navy-900 text-[1.55rem] leading-tight">
                  {l.title}
                </h3>
                {l.subtitle ? (
                  <p className="mt-2 font-display italic text-navy-900/65 text-[15px]">
                    {l.subtitle}
                  </p>
                ) : null}

                <div className="my-5 h-px w-12 bg-gold-deep" />

                <p className="text-navy-900/75 text-[14.5px] leading-[1.8] font-light">
                  {l.description}
                </p>

                {l.link && l.ctaLabel ? (
                <a
                  href={l.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-6 inline-flex items-center gap-3 py-2 text-[11px] uppercase tracking-wider3 text-navy-900 hover:text-gold-deep transition-colors duration-300"
                >
                  <span className="border-b border-navy-900/40 group-hover/btn:border-gold-deep transition-colors duration-300 pb-1">
                    {l.ctaLabel}
                  </span>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform duration-500 group-hover/btn:translate-x-1">
                    <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </a>
                ) : null}
              </div>
            </article>
          ))}
        </Reveal>

      </div>
    </section>
  );
}
