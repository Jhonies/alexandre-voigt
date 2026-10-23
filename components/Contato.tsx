import Reveal from './Reveal';
import {
  WHATSAPP_DISPLAY,
  WHATSAPP_HREF,
  INSTAGRAM,
  EMAIL,
  ENDERECO,
  HORARIO,
} from '@/lib/contato';

const IconWhatsApp = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <path
      d="M20.5 3.5A11.5 11.5 0 003.6 18.2L2.5 22l3.9-1A11.5 11.5 0 1020.5 3.5z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinejoin="round"
    />
    <path
      d="M8.5 8.5c.3-1 .9-1.2 1.5-1.2.4 0 .6.1.8.5.2.5.7 1.6.7 1.7 0 .2-.1.4-.3.6l-.5.5c-.2.2-.3.4-.1.7.2.4.8 1.3 1.7 2.1 1.1 1 2 1.4 2.4 1.6.3.1.5.1.7-.1.2-.2.7-.8.9-1.1.2-.3.4-.2.7-.1.3.1 1.8.9 2.1 1 .3.1.5.2.6.4.1.2.1 1-.3 1.9-.4.9-2 1.8-2.7 1.8-.6 0-1.4 0-2.3-.3-2.2-.7-3.7-2.1-5.4-4.1-1.3-1.5-2-3-2-4.3 0-.7.2-1.4.6-1.8z"
      fill="currentColor"
    />
  </svg>
);

const IconInstagram = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="4.5" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.3" />
    <circle cx="17.5" cy="6.5" r="0.9" fill="currentColor" />
  </svg>
);

const IconMail = ({ className = '' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" stroke="currentColor" strokeWidth="1.3" />
    <path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="1.3" />
  </svg>
);

export default function Contato() {
  return (
    <section
      id="contato"
      className="relative bg-navy-950 text-bone overflow-hidden grain"
    >
      {/* Background decorative arcs */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 -translate-x-1/2 w-[1200px] max-w-[180vw] opacity-[0.12]"
        viewBox="0 0 1200 600"
        fill="none"
      >
        <defs>
          <linearGradient id="arcGrad2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#C9A84C" stopOpacity="0" />
            <stop offset="50%" stopColor="#C9A84C" />
            <stop offset="100%" stopColor="#C9A84C" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M0 600 A 600 600 0 0 1 1200 600" stroke="url(#arcGrad2)" strokeWidth="0.6" />
        <path d="M0 600 A 540 540 0 0 1 1200 600" stroke="url(#arcGrad2)" strokeWidth="0.4" />
        <path d="M0 600 A 480 480 0 0 1 1200 600" stroke="url(#arcGrad2)" strokeWidth="0.3" />
      </svg>

      <div className="container-px mx-auto max-w-6xl relative py-20 md:py-28 lg:py-40">
        <div className="grid lg:grid-cols-12 gap-12 md:gap-14 lg:gap-20 items-start">
          {/* Left: invitation */}
          <Reveal className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-6">
              <span className="section-number">05</span>
              <span className="h-px flex-1 bg-gold/25 max-w-[180px]" />
              <span className="text-[11px] uppercase tracking-wider3 text-gold/80">
                Contato
              </span>
            </div>

            <h2 className="font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02]">
              Contato<span className="text-gold">.</span>
            </h2>

            {/* Primary CTA */}
            <div className="mt-10 flex flex-col sm:flex-row sm:flex-wrap sm:items-center gap-4 sm:gap-5">
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-gold text-navy-950 px-7 py-4 text-[12px] uppercase tracking-wider3 font-medium btn-shine hover:bg-gold-soft transition-colors duration-500"
              >
                <IconWhatsApp className="w-4 h-4" />
                WhatsApp
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform duration-500 group-hover:translate-x-1">
                  <path d="M0 7h12M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" />
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center gap-2 py-3 sm:py-1 text-bone/85 hover:text-gold text-[12px] uppercase tracking-wider3 transition-colors duration-300 border-b border-gold/30 hover:border-gold"
              >
                <IconMail className="w-3.5 h-3.5" />
                Enviar e-mail
              </a>
            </div>
          </Reveal>

          {/* Right: contact card */}
          <Reveal className="lg:col-span-5">
            <div className="relative border border-gold/25 bg-navy-900/60 backdrop-blur-sm p-6 sm:p-8 md:p-10">
              {/* Corner accents */}
              <span className="pointer-events-none absolute -top-px -left-px w-6 h-6 border-t border-l border-gold/80" />
              <span className="pointer-events-none absolute -bottom-px -right-px w-6 h-6 border-b border-r border-gold/80" />

              <p className="text-[11px] uppercase tracking-wider3 text-gold/80 mb-7">
                Canais de Comunicação
              </p>

              <ul className="divide-y divide-bone/10">
                <li className="group">
                  <a
                    href={WHATSAPP_HREF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 flex items-center justify-between gap-3 sm:gap-4 w-full min-w-0"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <IconWhatsApp className="w-5 h-5 text-gold group-hover:text-gold-soft transition-colors shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider3 text-bone/65">
                          WhatsApp
                        </p>
                        <p className="font-display text-bone text-[17px] mt-0.5 group-hover:text-gold-soft transition-colors">
                          {WHATSAPP_DISPLAY}
                        </p>
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-gold/80 group-hover:text-gold-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                      </svg>
                    </span>
                  </a>
                </li>

                <li className="group">
                  <a
                    href={INSTAGRAM}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 flex items-center justify-between gap-3 sm:gap-4 w-full min-w-0"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <IconInstagram className="w-5 h-5 text-gold group-hover:text-gold-soft transition-colors shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider3 text-bone/65">
                          Instagram
                        </p>
                        <p className="font-display text-bone text-[17px] mt-0.5 group-hover:text-gold-soft transition-colors">
                          @alexandre_voigt
                        </p>
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-gold/80 group-hover:text-gold-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                      </svg>
                    </span>
                  </a>
                </li>

                <li className="group">
                  <a
                    href={`mailto:${EMAIL}`}
                    className="py-4 flex items-center justify-between gap-3 sm:gap-4 w-full min-w-0"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <IconMail className="w-5 h-5 text-gold group-hover:text-gold-soft transition-colors shrink-0" />
                      <div className="min-w-0">
                        <p className="text-[11px] uppercase tracking-wider3 text-bone/65">
                          E-mail
                        </p>
                        <p className="font-display text-bone text-[14px] sm:text-[15px] md:text-[16px] mt-0.5 break-all group-hover:text-gold-soft transition-colors">
                          {EMAIL}
                        </p>
                      </div>
                    </div>
                    <span
                      className="shrink-0 text-gold/80 group-hover:text-gold-soft group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 11L11 3M11 3H5M11 3v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" />
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>

              {/* Address — taken from public book imprint; confirm with client */}
              <div className="mt-8 pt-6 border-t border-bone/10">
                <p className="text-[11px] uppercase tracking-wider3 text-bone/65 mb-2">
                  Atendimento
                </p>
                {/* TODO: confirmar endereço oficial atual */}
                <address className="not-italic text-bone/85 text-[14px] leading-relaxed font-light">
                  {ENDERECO.logradouro} · {ENDERECO.complemento}
                  <br />
                  {ENDERECO.cidade} / {ENDERECO.uf} · CEP {ENDERECO.cep}
                </address>
                <p className="mt-3 text-bone/85 text-[14px] leading-relaxed font-light">
                  {HORARIO.texto}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
