'use client';

import { useEffect, useState } from 'react';
import { WHATSAPP_HREF } from '@/lib/contato';

/**
 * Botão flutuante de WhatsApp — mobile.
 *
 * No celular o único caminho até o contato era abrir o menu sanduíche e
 * navegar por âncora. Este botão mantém o canal principal sempre a um toque
 * de distância. Aparece depois que o visitante sai do Hero (onde já existe
 * uma CTA) e some quando a seção de Contato entra em cena, para não cobrir
 * os botões de lá.
 */
export default function WhatsAppFlutuante() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const contato = document.getElementById('contato');
    let frame = 0;

    const avaliar = () => {
      frame = 0;
      const passouDoHero = window.scrollY > window.innerHeight * 0.6;
      const contatoVisivel = contato
        ? contato.getBoundingClientRect().top < window.innerHeight
        : false;
      setVisivel(passouDoHero && !contatoVisivel);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(avaliar);
    };

    avaliar();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      aria-hidden={!visivel}
      tabIndex={visivel ? 0 : -1}
      className={`lg:hidden fixed z-40 right-4 bottom-4 h-11 w-11 flex items-center justify-center
        bg-navy-950/90 backdrop-blur-sm border border-gold/40 text-gold/90
        transition-all duration-300 ${
          visivel
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5" aria-hidden="true">
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
    </a>
  );
}
