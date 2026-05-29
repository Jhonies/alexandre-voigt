export default function Footer() {
  return (
    <footer className="relative bg-ink text-bone/70 border-t border-gold/15">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          {/* Identity */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3 mb-4">
              <span className="font-display italic text-gold text-2xl leading-none">
                AV
              </span>
              <span className="h-5 w-px bg-gold/40" />
              <span className="font-display text-bone text-[15px]">
                Dr. Alexandre Voigt
              </span>
            </div>
            <p className="text-[13px] leading-relaxed font-light max-w-sm">
              Advocacia institucional com atuação informativa em Direito Aeronáutico
              e direitos do passageiro aéreo.
            </p>
          </div>

          {/* Sitemap */}
          <nav aria-label="Navegação no rodapé" className="md:col-span-3">
            <p className="text-[10px] uppercase tracking-wider3 text-gold/80 mb-4">
              Conteúdo
            </p>
            <ul className="space-y-2.5 text-[13px]">
              <li><a href="#sobre" className="hover:text-gold transition-colors">Trajetória</a></li>
              <li><a href="#atuacao" className="hover:text-gold transition-colors">Áreas de atuação</a></li>
              <li><a href="#livros" className="hover:text-gold transition-colors">Obras publicadas</a></li>
              <li><a href="#depoimentos" className="hover:text-gold transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </nav>

          {/* Identification */}
          <div className="md:col-span-4">
            <p className="text-[10px] uppercase tracking-wider3 text-gold/80 mb-4">
              Identificação profissional
            </p>
            {/* OAB number is REQUIRED by professional ethics — never remove */}
            <p className="font-display text-bone text-lg leading-snug">
              Alexandre de Oliveira Voigt
            </p>
            <p className="text-[13px] mt-1">
              Advogado · OAB/SP nº&nbsp;548.991
            </p>
            <p className="text-[12px] mt-4 leading-relaxed font-light">
              Conteúdo deste site em conformidade com o Estatuto da Advocacia
              (Lei 8.906/94), o Provimento OAB nº&nbsp;205/2021 e o Código de
              Ética e Disciplina da OAB.
            </p>
          </div>
        </div>

        {/* Rule */}
        <div className="rule-gold mt-12 mb-6" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-[11.5px] text-bone/55">
          <p>
            © {new Date().getFullYear()} Dr. Alexandre Voigt · Todos os direitos reservados.
          </p>
          <p className="uppercase tracking-wider2">
            Site informativo · Não constitui captação de clientela
          </p>
        </div>
      </div>
    </footer>
  );
}
