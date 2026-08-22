'use client';

import { useEffect, useState } from 'react';

const links = [
  { label: 'Trajetória', href: '#sobre' },
  { label: 'Formação', href: '#formacao' },
  { label: 'Atuação', href: '#atuacao' },
  { label: 'Obras', href: '#livros' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-navy-950/75 backdrop-blur-md border-b border-gold/15'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
        {/* Monogram */}
        <a
          href="#top"
          className="group flex items-center gap-3"
          aria-label="Dr. Alexandre Voigt — início"
        >
          <span className="font-display italic text-gold tracking-wider2 text-xl leading-none">
            AV
          </span>
          <span className="hidden sm:block h-5 w-px bg-gold/40" />
          <span className="hidden sm:block font-display text-bone text-[15px] tracking-wide">
            Dr. Alexandre Voigt
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="group relative text-[12px] uppercase tracking-wider3 text-bone/75 hover:text-gold transition-colors duration-300"
              >
                {l.label}
                <span className="pointer-events-none absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contato"
          className="hidden lg:inline-flex items-center gap-2 border border-gold/50 text-gold hover:text-navy-950 hover:bg-gold/90 transition-colors duration-500 px-5 py-2.5 text-[11px] uppercase tracking-wider3 btn-shine"
        >
          <span>Contato</span>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
          </svg>
        </a>

        {/* Mobile burger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 -mr-2 text-bone/90 hover:text-gold transition-colors"
          aria-label="Abrir menu"
          aria-expanded={open}
        >
          <div className="w-6 flex flex-col gap-[5px]">
            <span
              className={`block h-px w-full bg-current transition-all duration-300 ${
                open ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-px w-full bg-current transition-all duration-300 ${
                open ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 border-t border-gold/15' : 'max-h-0'
        }`}
      >
        <ul className="container-px py-6 flex flex-col gap-5 bg-navy-950/95 backdrop-blur-md">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block text-[13px] uppercase tracking-wider3 text-bone/80 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contato"
              onClick={() => setOpen(false)}
              className="inline-flex items-center gap-2 mt-2 border border-gold/50 text-gold px-5 py-2.5 text-[11px] uppercase tracking-wider3"
            >
              Falar agora
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
