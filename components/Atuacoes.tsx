import Reveal from './Reveal';

type IconProps = { className?: string };

// Shield with star — military justice
const IconMilitaryShield = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M24 6l14 5v14c0 8-6 14-14 17-8-3-14-9-14-17V11l14-5z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path
      d="M24 17l2.2 4.6 5 .7-3.6 3.5.9 5-4.5-2.4-4.5 2.4.9-5-3.6-3.5 5-.7L24 17z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

// Scales of justice — Cível
const IconScales = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M24 8v34" stroke="currentColor" strokeWidth="1" />
    <path d="M14 42h20" stroke="currentColor" strokeWidth="1" />
    <path d="M8 14h32" stroke="currentColor" strokeWidth="1" />
    <path d="M8 14l-4 12a6 6 0 0012 0L12 14" stroke="currentColor" strokeWidth="1" />
    <path d="M40 14l-4 12a6 6 0 0012 0L44 14" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Bank façade — contratos bancários
const IconBank = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M4 18L24 6l20 12" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M6 18h36" stroke="currentColor" strokeWidth="1" />
    <path d="M10 22v14M18 22v14M30 22v14M38 22v14" stroke="currentColor" strokeWidth="1" />
    <path d="M4 40h40" stroke="currentColor" strokeWidth="1" />
    <path d="M2 44h44" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Document with seal — previdência
const IconDocSeal = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M10 6h20l10 10v26H10z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M30 6v10h10" stroke="currentColor" strokeWidth="1" />
    <circle cx="24" cy="30" r="5" stroke="currentColor" strokeWidth="1" />
    <path d="M21 34l-2 6 5-3 5 3-2-6" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
  </svg>
);

// Shopping bag — consumidor
const IconBag = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M10 16h28l-2 26H12L10 16z" stroke="currentColor" strokeWidth="1" strokeLinejoin="round" />
    <path d="M18 16v-4a6 6 0 0112 0v4" stroke="currentColor" strokeWidth="1" />
    <path d="M18 24v2M30 24v2" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Aircraft in flight — Direito Aeronáutico
const IconAircraft = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M24 4c2 0 3 4 3 12l14 9v4l-14-4v9l5 4v3l-8-2-8 2v-3l5-4v-9l-14 4v-4l14-9c0-8 1-12 3-12z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
  </svg>
);

const cards = [
  {
    Icon: IconMilitaryShield,
    title: 'Direito Militar e Policial',
    body:
      'Atuação em Direito Penal e Processual Penal Militar e em Direito Administrativo Disciplinar aplicável às carreiras militares e policiais. Área relacionada ao mestrado em Ciências Policiais e à pós-graduação em Direito Militar.',
    ref: 'CPM · CPPM · Lei nº 13.491/17',
  },
  {
    Icon: IconAircraft,
    title: 'Direito Aeronáutico',
    body:
      'Atuação nas relações entre passageiros e companhias aéreas, conforme a regulação da ANAC, o Código de Defesa do Consumidor e as convenções internacionais de transporte aéreo.',
    ref: 'Resolução ANAC nº 400 · Convenção de Montreal',
  },
  {
    Icon: IconScales,
    title: 'Direito Cível',
    body:
      'Atuação consultiva e contenciosa nas relações privadas, com base no Código Civil e no Código de Processo Civil.',
    ref: 'Código Civil · CPC',
  },
  {
    Icon: IconBank,
    title: 'Contratos Bancários',
    body:
      'Atuação nas relações contratuais com instituições financeiras, à luz do Código de Defesa do Consumidor e da jurisprudência do Superior Tribunal de Justiça.',
    ref: 'CDC · Súmulas do STJ',
  },
  {
    Icon: IconDocSeal,
    title: 'Direito Previdenciário',
    body:
      'Atuação na concessão e revisão de benefícios junto ao INSS — aposentadorias, auxílios, pensões e benefícios assistenciais, nas vias administrativa e judicial.',
    ref: 'Lei nº 8.213/91 · RGPS',
  },
  {
    Icon: IconBag,
    title: 'Direito do Consumidor',
    body:
      'Atuação nas relações de consumo, com base no Código de Defesa do Consumidor.',
    ref: 'CDC (Lei nº 8.078/90)',
  },
];

export default function Atuacoes() {
  return (
    <section
      id="atuacao"
      className="relative bg-navy-900 text-bone overflow-hidden grain"
    >
      {/* Background flight path arc */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 -translate-y-1/2 w-[640px] opacity-[0.08]"
        viewBox="0 0 640 640"
        fill="none"
      >
        <circle cx="320" cy="320" r="300" stroke="#C9A84C" strokeWidth="0.4" strokeDasharray="3 6" />
        <circle cx="320" cy="320" r="220" stroke="#C9A84C" strokeWidth="0.4" />
      </svg>

      <div className="container-px mx-auto max-w-7xl relative py-20 md:py-28 lg:py-40">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="section-number">03</span>
              <span className="h-px flex-1 bg-gold/25 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-gold/80">
                Áreas de Atuação
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
              Áreas de{' '}
              <span className="serif-italic text-gold">atuação jurídica</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-bone/70 text-base leading-relaxed font-light">
              Apresentação informativa das áreas a que o advogado se dedica.
            </p>
          </div>
        </Reveal>

        {/* Cards grid — 6 cards in a balanced 2-column arrangement */}
        <Reveal stagger className="grid sm:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
          {cards.map(({ Icon, title, body, ref }, i) => {
            return (
              <article
                key={title}
                className="group relative bg-navy-900 p-6 sm:p-9 md:p-12 card-lift"
              >
                {/* Card index */}
                <div className="flex items-start justify-between mb-6 md:mb-8">
                  <span className="font-display italic text-gold/70 text-sm">
                    /{String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="w-10 h-10 md:w-12 md:h-12 shrink-0 text-gold/85 transition-transform duration-700 group-hover:rotate-[3deg] group-hover:scale-105" />
                </div>

                <h3 className="font-display text-bone text-[1.5rem] sm:text-[1.65rem] md:text-[1.85rem] leading-tight mb-4 md:mb-5">
                  {title}
                </h3>

                <p className="text-bone/70 text-[14.5px] leading-[1.75] font-light mb-7 max-w-2xl">
                  {body}
                </p>

                <div className="flex items-center gap-3 pt-5 border-t border-bone/10">
                  <span className="h-px w-6 bg-gold/60" />
                  <span className="text-[10.5px] uppercase tracking-wider3 text-bone/55">
                    {ref}
                  </span>
                </div>

                {/* Hover gold corner accent */}
                <span className="pointer-events-none absolute top-0 right-0 w-0 h-px bg-gold transition-all duration-700 group-hover:w-1/2" />
                <span className="pointer-events-none absolute bottom-0 left-0 w-0 h-px bg-gold transition-all duration-700 group-hover:w-1/2" />
              </article>
            );
          })}
        </Reveal>

      </div>
    </section>
  );
}
