import Image from 'next/image';
import Reveal from './Reveal';

type Livro = {
  cover: string;
  alt: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  ctaLabel: string;
};

const livros: Livro[] = [
  {
    cover: '/images/a-sociedade-do-medo.jpeg',
    alt: 'Capa do livro A Sociedade do Medo, de Alexandre Voigt',
    title: 'A Sociedade do Medo',
    subtitle: 'A justiça que solta, o crime que retorna',
    description:
      'Reflexão crítica sobre segurança pública, percepção social do crime e os limites da resposta do Estado, escrita a partir da vivência de três décadas no serviço policial militar.',
    link: 'https://alexandrevoigt.hotmart.host/a-sociedade-do-medo-a-justica-que-solta-o-crime-que-retorna-4fddb600-38f4-4b18-a7a4-5d6b6f33f715',
    ctaLabel: 'Adquirir no Hotmart',
  },
  {
    cover: '/images/parem-de-matar-nossas-rainhas.jpeg',
    alt: 'Capa do livro Parem de Matar as Nossas Rainhas',
    title: 'Parem de Matar as Nossas Rainhas',
    subtitle: 'Feminicídio — uma violência imperdoável',
    description:
      'Obra coautoral dedicada ao enfrentamento do feminicídio no Brasil, com análise da legislação, dos mecanismos de proteção e das responsabilidades sociais envolvidas.',
    link: 'https://go.hotmart.com/N103531012W',
    ctaLabel: 'Adquirir no Hotmart',
  },
  {
    cover: '/images/assedio.jpeg',
    alt: 'Capa do livro Assédio — guia prático para Policiais Militares',
    title: 'Assédio',
    subtitle: 'Guia prático para policiais militares · 3ª edição',
    description:
      'Manual técnico voltado a profissionais da segurança pública: orienta sobre direitos, identificação de abusos e instrumentos de proteção da carreira, da saúde e da honra.',
    link: 'https://drive.google.com/file/d/1wy7SyEoeRy0vpRWkYXWfaj7Y3HQZZi-0/view?usp=sharing',
    ctaLabel: 'Acessar obra',
  },
];

export default function Livros() {
  return (
    <section
      id="livros"
      className="relative bg-bone text-navy-900 overflow-hidden"
    >
      {/* Decorative paper texture suggestion */}
      <div className="absolute inset-0 blueprint opacity-50 pointer-events-none" />

      <div className="container-px mx-auto max-w-7xl relative py-28 lg:py-40">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-number">03</span>
              <span className="h-px flex-1 bg-navy-900/15 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-navy-900/55">
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
              — disponíveis ao público geral em formato digital.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <Reveal stagger className="grid md:grid-cols-3 gap-10 lg:gap-14">
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

                <a
                  href={l.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn mt-7 inline-flex items-center gap-3 text-[11px] uppercase tracking-wider3 text-navy-900 hover:text-gold-deep transition-colors duration-300"
                >
                  <span className="border-b border-navy-900/40 group-hover/btn:border-gold-deep transition-colors duration-300 pb-1">
                    {l.ctaLabel}
                  </span>
                  <svg width="14" height="10" viewBox="0 0 14 10" fill="none" className="transition-transform duration-500 group-hover/btn:translate-x-1">
                    <path d="M0 5h12M8 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </Reveal>

        {/* Footnote */}
        <Reveal className="mt-16 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-gold-deep/60 shrink-0" />
          <p className="text-[12.5px] text-navy-900/55 leading-relaxed font-light">
            Obras autorais publicadas em plataforma editorial independente. Divulgação
            cultural e científica, em conformidade com o Código de Ética e Disciplina da OAB.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
