import Image from 'next/image';

// Foto do escritório — o CED, art. 44, §1º, permite a fotografia do escritório.
const FOTO = '/images/alexandre-voigt-retrato.jpg';

export default function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-navy-grad grain"
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

      <div className="container-px mx-auto max-w-7xl relative z-10 pt-28 pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 min-h-[100svh] flex items-center">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-16 items-center w-full">
          {/* TEXT */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <div className="flex items-center gap-4 mb-8 md:mb-10 animate-fade-in" style={{ animationDelay: '0.1s', opacity: 0 }}>
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
              <span className="block text-[clamp(2.75rem,7vw,6rem)]">Alexandre</span>
              <span className="block text-[clamp(2.75rem,7vw,6rem)]">
                Voigt<span className="text-gold">.</span>
              </span>
              {/* O H1 visual é só o nome — ninguém busca por ele sem já
                  conhecer o escritório. Este complemento dá ao H1 o termo
                  que as pessoas realmente pesquisam, sem alterar a arte. */}
              <span className="sr-only">
                {' '}
                — Advogado · Direito Militar e Policial e Direito Aeronáutico,
                em Santos/SP
              </span>
            </h1>

            {/* Subtitle row */}
            <div
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-bone/80 font-sans text-[13px] md:text-sm uppercase tracking-wider2 animate-fade-up"
              style={{ animationDelay: '0.5s', opacity: 0 }}
            >
              <span>Advogado</span>
            </div>

            {/* Descriptor paragraph */}
            <p
              className="mt-8 md:mt-10 max-w-xl text-bone/70 text-[15px] md:text-base leading-relaxed font-light animate-fade-up"
              style={{ animationDelay: '0.7s', opacity: 0 }}
            >
              Atuação em Direito Militar e Policial e em Direito Aeronáutico, com
              conteúdo informativo sobre os direitos previstos na legislação brasileira.
            </p>

            {/* CTA */}
            <div
              className="mt-10 md:mt-12 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-5 animate-fade-up"
              style={{ animationDelay: '0.9s', opacity: 0 }}
            >
              <a
                href="#atuacao"
                className="group inline-flex items-center justify-center gap-3 bg-gold text-navy-950 px-7 py-4 text-[12px] uppercase tracking-wider3 font-medium btn-shine hover:bg-gold-soft transition-colors duration-500"
              >
                Saiba mais
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:translate-y-0.5">
                  <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2 py-3 sm:py-1 text-bone/80 hover:text-gold text-[12px] uppercase tracking-wider3 transition-colors duration-300 border-b border-gold/30 hover:border-gold"
              >
                Contato
              </a>
            </div>
          </div>

          {/* PORTRAIT */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto w-full max-w-[560px] lg:max-w-none animate-fade-up"
              style={{ animationDelay: '0.4s', opacity: 0 }}
            >
              {/* Plate frame */}
              <div className="plate-corners relative aspect-[4/3] w-full">
                {/* Soft gold glow */}
                <div className="absolute -inset-6 bg-gold/5 blur-3xl rounded-full pointer-events-none" />

                <div className="relative h-full w-full overflow-hidden border border-gold/30 bg-navy-800">
                  <Image
                    src={FOTO}
                    alt="Alexandre Voigt em seu escritório"
                    fill
                    sizes="(min-width: 1024px) 40vw, 93vw"
                    className="object-cover object-center"
                    priority
                  />
                  {/* Leve escurecimento na base, sob a legenda */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/35 via-transparent to-transparent pointer-events-none" />
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
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-bone/60 animate-fade-in"
        style={{ animationDelay: '1.3s', opacity: 0 }}
      >
        <span className="text-[10px] uppercase tracking-wider3">Rolar</span>
        <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
