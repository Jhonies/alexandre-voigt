import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-navy-grad grain"
    >
      {/* Decorative arc — subtle aviation route line */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-32 w-[820px] max-w-[110vw] opacity-[0.18]"
        viewBox="0 0 820 820"
        fill="none"
      >
        <defs>
          <linearGradient id="arcGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="55%" stopColor="#C9A84C" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="410" cy="410" r="400" stroke="url(#arcGrad)" strokeWidth="0.5" />
        <circle cx="410" cy="410" r="320" stroke="url(#arcGrad)" strokeWidth="0.5" />
        <circle cx="410" cy="410" r="240" stroke="url(#arcGrad)" strokeWidth="0.5" />
      </svg>

      {/* Vertical hairline rules — architectural detail */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-[8%] w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-[8%] w-px bg-gradient-to-b from-transparent via-gold/15 to-transparent hidden md:block"
      />

      <div className="container-px mx-auto max-w-7xl relative z-10 pt-36 pb-24 lg:pt-40 lg:pb-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
          {/* TEXT */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
              <span className="h-px w-12 bg-gold/70" />
              <span className="text-[11px] uppercase tracking-wider4 text-gold/90 font-medium">
                Advocacia
              </span>
            </div>

            {/* Name — large display */}
            <h1
              className="font-display text-bone leading-[0.95] tracking-tight animate-fade-up"
              style={{ animationDelay: '0.25s', opacity: 0 }}
            >
              <span className="block text-[clamp(2.75rem,7vw,6rem)]">Dr. Alexandre</span>
              <span className="block text-[clamp(2.75rem,7vw,6rem)]">
                Voigt<span className="text-gold">.</span>
              </span>
            </h1>

            {/* Subtitle row */}
            <div
              className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-bone/80 font-sans text-[13px] md:text-sm uppercase tracking-wider2 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <span>Advogado</span>
              <span className="text-gold/60">·</span>
              <span>Tenente-coronel da PM (reserva)</span>
            </div>

            {/* Descriptor paragraph */}
            <p
              className="mt-10 max-w-xl text-bone/70 text-[15px] md:text-base leading-relaxed font-light animate-fade-up"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              Trajetória construída no serviço público, na disciplina militar e no estudo
              técnico do Direito. Atuação informativa sobre os direitos do passageiro
              aéreo previstos na legislação brasileira.
            </p>

            {/* CTA */}
            <div
              className="mt-12 flex flex-wrap items-center gap-5 animate-fade-up"
              style={{ animationDelay: '0.9s', opacity: 0 }}
            >
              <a
                href="#sobre"
                className="group inline-flex items-center gap-3 bg-gold text-navy-950 px-7 py-4 text-[12px] uppercase tracking-wider3 font-medium btn-shine hover:bg-gold-soft transition-colors duration-500"
              >
                Conheça meu trabalho
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:translate-y-0.5">
                  <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 text-bone/80 hover:text-gold text-[12px] uppercase tracking-wider3 transition-colors duration-300 border-b border-gold/30 hover:border-gold pb-1"
              >
                Tirar uma dúvida
              </a>
            </div>
          </div>

          {/* PORTRAIT */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div
              className="relative mx-auto max-w-[360px] lg:max-w-none animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              {/* Plate frame */}
              <div className="plate-corners relative aspect-[4/5] w-full">
                {/* Soft gold glow */}
                <div className="absolute -inset-6 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative h-full w-full overflow-hidden border border-gold/30 bg-navy-800">
                  <Image
                    src="/images/alexandre-voigt.jpeg"
                    alt="Retrato do Dr. Alexandre Voigt"
                    fill
                    sizes="(min-width: 1024px) 40vw, 80vw"
                    className="object-cover object-[center_18%] grayscale-[12%] contrast-105"
                    priority
                  />
                  {/* Top-to-bottom navy wash for legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/45 via-transparent to-navy-950/10 pointer-events-none" />
                </div>

                {/* Caption plate */}
                <div className="absolute -bottom-5 left-6 right-6 bg-navy-950 border border-gold/30 px-5 py-3 flex items-center justify-between">
                  <div className="font-display italic text-bone text-sm leading-none">
                    Alexandre Voigt
                  </div>
                  <div className="text-[10px] uppercase tracking-wider3 text-gold/90 leading-none">
                    OAB/SP&nbsp;548.991
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-bone/45 animate-fade-in"
        style={{ animationDelay: '1.3s', opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-wider3">Rolar</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
