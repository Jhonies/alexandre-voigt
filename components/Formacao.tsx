import Reveal from './Reveal';

const LATTES_URL = 'http://lattes.cnpq.br/7928155562071787';

type Titulo = {
  periodo: string;
  grau: string;
  curso: string;
  instituicao: string;
  detalhe?: string;
  emCurso?: boolean;
};

const titulos: Titulo[] = [
  {
    periodo: '1998 — 2001',
    grau: 'Bacharelado',
    curso: 'Ciências Policiais de Segurança e Ordem Pública',
    instituicao: 'Academia de Polícia Militar do Barro Branco — APMBB',
  },
  {
    periodo: '2003',
    grau: 'Especialização',
    curso: 'Polícia Judiciária Militar',
    instituicao: 'Corregedoria da Polícia Militar do Estado de São Paulo',
    detalhe: 'Processo Penal Militar e Direito Administrativo Disciplinar · 194h',
  },
  {
    periodo: '2009 — 2010',
    grau: 'Graduação',
    curso: 'Direito',
    instituicao: 'Universidade Cruzeiro do Sul — UNICSUL',
  },
  {
    periodo: '2017 — 2018',
    grau: 'Pós-Graduação',
    curso: 'Direito Processual Civil',
    instituicao: 'Faculdade de Direito Prof. Damásio de Jesus',
    detalhe: '1.800h · Contraditório e segurança jurídica no novo CPC',
  },
  {
    periodo: '2020 — 2021',
    grau: 'Mestrado',
    curso: 'Ciências Policiais de Segurança e Ordem Pública',
    instituicao: 'Centro de Altos Estudos de Segurança "Cel PM Nelson Freire Terra" — CAES',
    detalhe: 'Dissertação sobre prevenção de crimes militares e infrações disciplinares',
  },
  {
    periodo: '2024 — 2025',
    grau: 'Pós-Graduação',
    curso: 'Direito Militar',
    instituicao: 'Faculdade Verbo Educacional',
    detalhe: '360h',
  },
  {
    periodo: 'Em curso',
    grau: 'Pós-Graduação',
    curso: 'Direito Tributário',
    instituicao: 'Pontifícia Universidade Católica do Rio Grande do Sul — PUC/RS',
    emCurso: true,
  },
];

const institucional = [
  {
    label: 'Ordem dos Advogados do Brasil',
    title: 'Comissão de Direito Militar',
    body: 'Membro da Comissão de Direito Militar da OAB — Subseção de Santos.',
  },
  {
    label: 'Pesquisa',
    title: 'Orientação de mestrado — CAES',
    body:
      'Orientador de dissertação no Curso de Aperfeiçoamento de Oficiais do Centro de Altos Estudos de Segurança da PM/SP.',
  },
];

export default function Formacao() {
  return (
    <section id="formacao" className="relative bg-navy-950 text-bone overflow-hidden grain">
      {/* Blueprint grid — technical, archival feel */}
      <div className="absolute inset-0 blueprint opacity-[0.35] pointer-events-none" />

      <div className="container-px mx-auto max-w-7xl relative py-20 md:py-28 lg:py-40">
        {/* Header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="section-number">02</span>
              <span className="h-px flex-1 bg-gold/25 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-gold/80">
                Formação e Titulação
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05]">
              <span className="serif-italic text-gold">Formação continuada</span>{' '}
              em Direito e segurança pública.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-bone/70 text-base leading-relaxed font-light">
              Titulação acadêmica e atuação institucional registradas e verificáveis na
              Plataforma Lattes do CNPq.
            </p>
          </div>
        </Reveal>

        {/* Timeline + institutional */}
        <div className="grid lg:grid-cols-12 gap-12 md:gap-14 lg:gap-20">
          <div className="lg:col-span-7">
            <Reveal stagger className="relative">
              {/* Vertical rule */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent"
              />

              <ol className="space-y-10">
                {titulos.map((t) => (
                  <li key={`${t.periodo}-${t.curso}`} className="relative pl-8 md:pl-10">
                    {/* Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute left-0 top-[9px] -translate-x-1/2 h-[7px] w-[7px] rotate-45 ${
                        t.emCurso ? 'border border-gold bg-navy-950' : 'bg-gold/80'
                      }`}
                    />
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                      <span className="text-[10.5px] uppercase tracking-wider3 text-gold/85">
                        {t.periodo}
                      </span>
                      <span className="text-[11px] uppercase tracking-wider2 text-bone/60">
                        {t.grau}
                      </span>
                    </div>
                    <h3 className="font-display text-bone text-[1.35rem] md:text-[1.5rem] leading-tight">
                      {t.curso}
                    </h3>
                    <p className="text-[13.5px] text-bone/65 font-light mt-1.5 leading-relaxed">
                      {t.instituicao}
                    </p>
                    {t.detalhe && (
                      <p className="text-[12.5px] text-bone/60 font-light mt-1.5 leading-relaxed">
                        {t.detalhe}
                      </p>
                    )}
                  </li>
                ))}
              </ol>
            </Reveal>
          </div>

          {/* Institutional / teaching */}
          <div className="lg:col-span-5">
            <Reveal stagger className="lg:sticky lg:top-28">
              <p className="text-[11px] uppercase tracking-wider3 text-gold/80 mb-7">
                Atuação institucional e acadêmica
              </p>
              <ul className="space-y-8 border-l border-bone/10 pl-7">
                {institucional.map((item) => (
                  <li key={item.title}>
                    <p className="text-[11px] uppercase tracking-wider2 text-bone/60 mb-1.5">
                      {item.label}
                    </p>
                    <h3 className="font-display text-bone text-[1.15rem] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-[13px] text-bone/65 font-light mt-2 leading-[1.7]">
                      {item.body}
                    </p>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        {/* Lattes CTA */}
        <Reveal className="mt-20">
          <div className="rule-gold mb-10" />
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <p className="text-[12.5px] text-bone/65 leading-relaxed font-light max-w-xl">
              Currículo acadêmico completo, com titulação e produção científica, publicado na Plataforma Lattes do CNPq — fonte oficial e
              verificável.
            </p>
            <a
              href={LATTES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-3 border border-gold/50 text-gold hover:text-navy-950 hover:bg-gold/90 transition-colors duration-500 px-6 py-3 text-[11px] uppercase tracking-wider3 btn-shine"
            >
              <span>Currículo Lattes</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M4 8l4-4M4.5 4H8v3.5"
                  stroke="currentColor"
                  strokeWidth="1.2"
                  strokeLinecap="square"
                />
              </svg>
              <span className="sr-only">(abre em nova aba)</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
