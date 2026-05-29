import Reveal from './Reveal';

type IconProps = { className?: string };

// Plane icon — paper-plane / institutional, not toy-like
const IconPlane = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M4 24l40-16-12 36-8-14-20-6z"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinejoin="round"
    />
    <path d="M24 28L44 8" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Luggage / suitcase
const IconLuggage = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <rect x="9" y="14" width="30" height="26" stroke="currentColor" strokeWidth="1" />
    <path d="M18 14V9h12v5" stroke="currentColor" strokeWidth="1" />
    <path d="M9 22h30M9 32h30" stroke="currentColor" strokeWidth="1" />
    <path d="M24 14v26" stroke="currentColor" strokeWidth="1" />
  </svg>
);

// Boarding pass / overbooking
const IconTicket = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path
      d="M6 14h36v8a4 4 0 000 8v8H6v-8a4 4 0 000-8v-8z"
      stroke="currentColor"
      strokeWidth="1"
    />
    <path d="M30 14v8M30 28v8" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" />
  </svg>
);

// Scales of justice
const IconScales = ({ className = '' }: IconProps) => (
  <svg viewBox="0 0 48 48" fill="none" className={className} aria-hidden="true">
    <path d="M24 8v34" stroke="currentColor" strokeWidth="1" />
    <path d="M14 42h20" stroke="currentColor" strokeWidth="1" />
    <path d="M8 14h32" stroke="currentColor" strokeWidth="1" />
    <path d="M8 14l-4 12a6 6 0 0012 0L12 14" stroke="currentColor" strokeWidth="1" />
    <path d="M40 14l-4 12a6 6 0 0012 0L44 14" stroke="currentColor" strokeWidth="1" />
  </svg>
);

const cards = [
  {
    Icon: IconPlane,
    title: 'Cancelamento e atraso de voos',
    body:
      'Orientação jurídica sobre os direitos do passageiro previstos para situações de cancelamento, alteração de itinerário e atraso de voos domésticos e internacionais.',
    ref: 'Resolução ANAC nº 400/2016',
  },
  {
    Icon: IconLuggage,
    title: 'Extravio e dano de bagagem',
    body:
      'Atuação informativa na defesa de passageiros em casos de extravio temporário, extravio definitivo, dano ou violação de bagagens despachadas ou de mão.',
    ref: 'Convenção de Montreal · CDC',
  },
  {
    Icon: IconTicket,
    title: 'Overbooking e preterição',
    body:
      'Esclarecimento sobre os direitos do passageiro em situações de preterição de embarque por excesso de reservas, incluindo as obrigações de assistência da companhia.',
    ref: 'Resolução ANAC nº 400/2016',
  },
  {
    Icon: IconScales,
    title: 'Direitos do passageiro aéreo',
    body:
      'Informações gerais sobre os direitos previstos na legislação aeronáutica brasileira, no Código de Defesa do Consumidor e nas convenções internacionais aplicáveis.',
    ref: 'CDC · Código Brasileiro de Aeronáutica',
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

      <div className="container-px mx-auto max-w-7xl relative py-28 lg:py-40">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-20">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-number">02</span>
              <span className="h-px flex-1 bg-gold/25 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-gold/80">
                Áreas de Atuação
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
              Quatro frentes do{' '}
              <span className="serif-italic text-gold">Direito Aeronáutico</span>{' '}
              em que o escritório atua.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-bone/70 text-base leading-relaxed font-light">
              Apresentação informativa das áreas de estudo e atuação técnica. As
              orientações partem sempre da legislação vigente e dos precedentes
              consolidados.
            </p>
          </div>
        </Reveal>

        {/* Cards grid */}
        <Reveal stagger className="grid sm:grid-cols-2 gap-px bg-gold/15 border border-gold/15">
          {cards.map(({ Icon, title, body, ref }, i) => (
            <article
              key={title}
              className="group relative bg-navy-900 p-9 md:p-12 card-lift"
            >
              {/* Card index */}
              <div className="flex items-start justify-between mb-8">
                <span className="font-display italic text-gold/70 text-sm">
                  /{String(i + 1).padStart(2, '0')}
                </span>
                <Icon className="w-12 h-12 text-gold/85 transition-transform duration-700 group-hover:rotate-[3deg] group-hover:scale-105" />
              </div>

              <h3 className="font-display text-bone text-[1.65rem] md:text-[1.85rem] leading-tight mb-5">
                {title}
              </h3>

              <p className="text-bone/70 text-[14.5px] leading-[1.75] font-light mb-7">
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
          ))}
        </Reveal>

        {/* Disclaimer footnote */}
        <Reveal className="mt-12 flex items-start gap-3 max-w-3xl">
          <span className="mt-2 h-px w-8 bg-gold/40 shrink-0" />
          <p className="text-[12.5px] text-bone/55 leading-relaxed font-light">
            Conteúdo de caráter informativo, em conformidade com o Provimento OAB nº 205/2021
            e o Código de Ética e Disciplina da OAB. Não constitui promessa de resultado
            nem captação de clientela.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
