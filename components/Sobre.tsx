import Image from 'next/image';
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
              Uma trajetória construída sobre disciplina, ética profissional e um interesse
              técnico crescente pela legislação aplicada ao setor aéreo brasileiro.
            </p>
          </div>
        </Reveal>

        {/* Body grid */}
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-start">
          {/* Portrait column */}
          <Reveal className="lg:col-span-5">
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="relative aspect-[4/5] w-full overflow-hidden border border-navy-900/15">
                <Image
                  src="/images/alexandre-voigt.jpeg"
                  alt="Dr. Alexandre Voigt — retrato institucional"
                  fill
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="object-cover object-[center_18%]"
                />
              </div>
              {/* Caption block */}
              <div className="mt-6 flex items-center gap-4">
                <span className="h-px w-10 bg-gold-deep" />
                <div>
                  <p className="font-display italic text-navy-900 text-lg leading-none">
                    Alexandre de Oliveira Voigt
                  </p>
                  <p className="mt-1 text-[11px] uppercase tracking-wider3 text-navy-900/60">
                    Advogado · OAB/SP&nbsp;548.991
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Text column */}
          <div className="lg:col-span-7">
            <Reveal stagger className="space-y-7 text-navy-900/85 text-[15.5px] md:text-[16px] leading-[1.85] font-light">
              <p>
                <span className="font-display italic text-gold-deep text-xl mr-1">F</span>
                ormado em Direito e regularmente inscrito na Ordem dos Advogados do Brasil,
                Dr. Alexandre Voigt dedica-se ao estudo técnico da legislação aeronáutica
                e dos direitos previstos ao passageiro nas relações de transporte aéreo
                doméstico e internacional.
              </p>
              <p>
                A trajetória como <strong className="font-medium text-navy-900">Major da Polícia Militar</strong>{' '}
                — hoje na reserva — consolidou três valores que orientam o seu exercício
                profissional na advocacia: o compromisso com a ética, a disciplina no
                trato dos processos e a postura de servidor público diante do cidadão.
              </p>
              <p>
                Atua de forma informativa, esclarecendo aos passageiros os direitos
                previstos na Resolução nº 400 da ANAC, no Código de Defesa do Consumidor
                e nas convenções internacionais aplicáveis ao transporte aéreo, sempre
                em conformidade com o Estatuto da Advocacia e o Código de Ética e
                Disciplina da OAB.
              </p>
              <p>
                É autor de obras voltadas a temas sensíveis do Direito e da segurança
                pública, publicadas de forma independente e disponíveis ao público
                geral — material apresentado adiante nesta página.
              </p>
            </Reveal>

            {/* Credentials grid */}
            <Reveal stagger className="mt-12 grid sm:grid-cols-3 gap-x-6 gap-y-8 border-t border-navy-900/10 pt-10">
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Formação
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Bacharel em Direito
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">Inscrito na OAB/SP</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Carreira Pública
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Major da PM/SP
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">Oficial reformado · reserva</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider3 text-navy-900/55 mb-2">
                  Estudo Técnico
                </p>
                <p className="font-display text-navy-900 text-lg leading-tight">
                  Direito Aeronáutico
                </p>
                <p className="text-[12.5px] text-navy-900/65 mt-1">Resolução ANAC nº 400</p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
