import Reveal from './Reveal';

// TODO: substituir pelos depoimentos reais enviados pelo cliente.
// ATENÇÃO OAB: depoimentos NÃO podem mencionar casos concretos,
// resultados obtidos, valores recebidos ou qualquer referência a processos
// específicos. Use apenas impressões gerais sobre atendimento, postura
// profissional e cordialidade — sem prometer resultado.
const depoimentos = [
  {
    quote:
      'Atendimento atencioso e absolutamente técnico. Desde o primeiro contato senti que estava diante de um profissional que prioriza a clareza e a transparência.',
    name: 'Cliente A.', // TODO: nome real
    role: 'Passageiro · São Paulo, SP',
  },
  {
    quote:
      'A postura serena e o cuidado em explicar cada etapa do processo, sem promessas e sem rodeios, transmitem segurança. Recomendo pela ética e pelo profissionalismo.',
    name: 'Cliente B.', // TODO: nome real
    role: 'Passageira · Santos, SP',
  },
  {
    quote:
      'Profissional preparado, com formação sólida e uma abordagem respeitosa. Fui ouvido com paciência e recebi orientações pautadas exclusivamente pela legislação vigente.',
    name: 'Cliente C.', // TODO: nome real
    role: 'Passageiro · Guarujá, SP',
  },
];

// Decorative serif glyph used as quote mark
const QuoteMark = () => (
  <span
    className="font-display text-gold-deep leading-none select-none"
    style={{ fontSize: '3.5rem', fontStyle: 'italic' }}
    aria-hidden="true"
  >
    “
  </span>
);

export default function Depoimentos() {
  return (
    <section
      id="depoimentos"
      className="relative bg-navy-900 text-bone overflow-hidden grain"
    >
      {/* Decorative paper */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent"
      />

      <div className="container-px mx-auto max-w-7xl relative py-20 md:py-28 lg:py-40">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="section-number">05</span>
              <span className="h-px flex-1 bg-gold/25 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-gold/80">
                Depoimentos
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
              O que dizem sobre{' '}
              <span className="serif-italic text-gold">meu trabalho</span>.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-bone/70 text-base leading-relaxed font-light">
              Impressões gerais sobre atendimento e postura profissional, dentro dos
              limites éticos previstos pela OAB.
            </p>
          </div>
        </Reveal>

        {/* Grid */}
        <Reveal stagger className="grid md:grid-cols-3 gap-px bg-gold/15 border border-gold/15">
          {depoimentos.map((d, i) => (
            <figure
              key={i}
              className="relative bg-navy-900 p-6 sm:p-9 md:p-11 card-lift flex flex-col"
            >
              <QuoteMark />

              <blockquote className="-mt-4 text-bone/85 text-[15.5px] md:text-[16px] leading-[1.85] font-light font-display italic">
                {d.quote}
              </blockquote>

              <figcaption className="mt-8 pt-6 border-t border-bone/10">
                <p className="text-bone text-[14px] tracking-wide">
                  {d.name}
                </p>
                <p className="text-[11px] uppercase tracking-wider3 text-gold/70 mt-1.5">
                  {d.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </Reveal>

        {/* OAB compliance footnote */}
        <Reveal className="mt-12 max-w-3xl flex items-start gap-3">
          <span className="mt-2 h-px w-8 bg-gold/40 shrink-0" />
          <p className="text-[12.5px] text-bone/65 leading-relaxed font-light">
            Depoimentos publicados sem menção a casos concretos, resultados obtidos ou
            valores envolvidos, em conformidade com o Provimento OAB nº 205/2021 e o
            Código de Ética e Disciplina da OAB.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
