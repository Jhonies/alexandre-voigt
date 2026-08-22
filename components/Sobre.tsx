import Reveal from './Reveal';

export default function Sobre() {
  return (
    <section id="sobre" className="relative bg-bone text-navy-900 overflow-hidden">
      {/* Subtle blueprint dots */}
      <div className="absolute inset-0 blueprint opacity-60 pointer-events-none" />

      <div className="container-px mx-auto max-w-6xl relative py-28 lg:py-40">
        {/* Section header */}
        <Reveal className="grid lg:grid-cols-12 gap-10 items-end mb-16 lg:mb-24">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-4 mb-6">
              <span className="section-number">01</span>
              <span className="h-px flex-1 bg-navy-900/15 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-navy-900/55">
                Trajetória
              </span>
            </div>
            <h2 className="font-display text-[clamp(2.25rem,5vw,4rem)] leading-[1.05] text-navy-900">
              Três décadas entre o <span className="serif-italic text-gold-deep">serviço público</span>{' '}
              e o estudo do Direito.
            </h2>
          </div>
          <div className="lg:col-span-5 lg:pl-8">
            <p className="text-navy-900/75 text-base leading-relaxed font-light">
              Uma trajetória construída sobre disciplina, formação acadêmica continuada e
              o estudo técnico do Direito Militar e da legislação aplicada ao setor aéreo
              brasileiro.
            </p>
          </div>
        </Reveal>

        {/* Body */}
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          <div className="lg:col-span-10 lg:col-start-2">
            <Reveal stagger className="space-y-7 text-navy-900/85 text-[15.5px] md:text-[16px] leading-[1.85] font-light">
              <p>
                <span className="font-display italic text-gold-deep text-xl mr-1">F</span>
                ormado em Direito e regularmente inscrito na Ordem dos Advogados do Brasil,
                Dr. Alexandre Voigt reúne formação jurídica e quase três décadas de
                serviço na segurança pública — combinação que orienta sua atuação em
                duas frentes principais: o <strong className="font-medium text-navy-900">Direito Militar
                e Policial</strong> e o Direito Aeronáutico do consumidor.
              </p>
              <p>
                A trajetória como <strong className="font-medium text-navy-900">Tenente-coronel da Polícia Militar</strong>{' '}
                — hoje na reserva — consolidou três valores que orientam o seu exercício
                profissional na advocacia: o compromisso com a ética, a disciplina no
                trato dos processos e a postura de servidor público diante do cidadão.
              </p>
              <p>
                Mestre em Ciências Policiais de Segurança e Ordem Pública pelo Centro de
                Altos Estudos de Segurança da PM/SP, é membro da Comissão de Direito
                Militar da OAB/Santos e professor de Direito Constitucional, Direito Penal
                Militar e Criminologia na Escola Superior de Soldados da Polícia Militar
                de São Paulo.
              </p>
              <p>
                Em paralelo, dedica-se ao estudo dos direitos do passageiro aéreo,
                previstos na Resolução nº 400 da ANAC, no Código de Defesa do Consumidor
                e nas convenções internacionais aplicáveis ao transporte aéreo, sempre em
                conformidade com o Estatuto da Advocacia e o Código de Ética e Disciplina
                da OAB.
              </p>
              <p>
                É autor de obras voltadas a temas sensíveis do Direito e da segurança
                pública, publicadas de forma independente e disponíveis ao público
                geral — material apresentado adiante nesta página.
              </p>
            </Reveal>

            {/* Credentials grid */}
            <Reveal stagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 border-t border-navy-900/10 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Titulação
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Mestre em Ciências Policiais
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">
                  CAES · Advogado inscrito na OAB/SP
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Carreira Pública
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Tenente-coronel da PM/SP
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">Oficial da reserva</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Justiça Militar
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Juiz Militar — TJM/SP
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">
                  Conselhos Permanente e Especial
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Magistério
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Professor de Direito
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">
                  Escola Superior de Soldados PM/SP
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
