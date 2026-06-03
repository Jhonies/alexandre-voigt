# CLAUDE.md - Diretrizes do Projeto Alexandre Voigt

## 🚀 Comandos Úteis
- **Iniciar servidor de desenvolvimento**: `npm run dev` ou `npx next dev`
- **Compilar projeto (Build)**: `npm run build` ou `npx next build`
- **Iniciar em produção**: `npm run start` ou `npx next start`
- **Executar Linter**: `npm run lint` ou `npx next lint`
- **Validar TypeScript**: `npx tsc --noEmit`

---

## 📁 Estrutura do Projeto
O projeto está organizado com a seguinte estrutura de arquivos:

- **`app/`**: Next.js App Router (Páginas, configurações globais e SEO)
  - [layout.tsx](file:///c:/Users/vlope/Desktop/lps/Alexandre-voigt/app/layout.tsx): Definição de fontes (Playfair Display e DM Sans), metadados SEO primários e estrutura raiz HTML/Body.
  - [page.tsx](file:///c:/Users/vlope/Desktop/lps/Alexandre-voigt/app/page.tsx): Página principal que renderiza a estrutura sequencial de seções do site.
  - [globals.css](file:///c:/Users/vlope/Desktop/lps/Alexandre-voigt/app/globals.css): Estilos globais, paleta de cores variáveis e classes visuais personalizadas de aviação e texturas.
  - [sitemap.ts](file:///c:/Users/vlope/Desktop/lps/Alexandre-voigt/app/sitemap.ts): Script de geração dinâmica do Sitemap do site.
- **`components/`**: Componentes modulares e interativos
  - `ScrollProgress.tsx`: Barra superior fina que indica o progresso de leitura da página.
  - `Navbar.tsx`: Menu de navegação responsivo no topo, com links âncora elegantes.
  - `Hero.tsx`: Seção principal e cartão de visitas, com apelo visual de alta qualidade para Direito Aeronáutico.
  - `Sobre.tsx`: Perfil do Dr. Alexandre Voigt detalhando sua jornada jurídica e militar.
  - `Atuacoes.tsx`: Grid interativo que expõe as principais áreas jurídicas e de consultoria tratadas no escritório.
  - `Livros.tsx`: Apresentação em formato de estante/grid com as capas de livros publicados pelo autor.
  - `Depoimentos.tsx`: Seção contendo as avaliações e opiniões dos clientes atendidos.
  - `Contato.tsx`: Formulário de contato estilizado integrado com informações de localização e atendimento.
  - `Footer.tsx`: Rodapé tradicional contendo direitos autorais e links institucionais.
  - `Reveal.tsx`: Wrapper utilitário que adiciona animações de transição suave (fade/translate) ao scroll usando Intersection Observer.
- **`src/assets/img/`**: Pasta que concentra as imagens de alta resolução do site
  - `a-sociedade-do-medo.jpeg`: Capa de livro publicado.
  - `alexandre-voigt.jpeg`: Foto de perfil oficial do advogado.
  - `assedio.jpeg`: Capa de livro publicado.
  - `livro-parem-de-matar-nossas-rainhas.jpeg`: Capa de livro publicado.
- **`public/`**: Ativos públicos servidos diretamente pelo servidor web.

---

## 🎨 Sistema de Design e Estética Visual
O projeto preza por uma estética premium e minimalista, combinando aviação militar/civil e direito com cores sóbrias e contrastantes.

### Paleta de Cores (definidas no `:root` em `app/globals.css`):
- **Navy Principal**: `#0A1628` (Cor de fundo dominante)
- **Navy Profundo**: `#070F1C` (Para seções mais escuras ou rodapé)
- **Navy Realçado**: `#0F1E36` (Para cards e elementos elevados)
- **Ouro Nobre**: `#C9A84C` (Utilizado para divisórias, cantos decorativos e textos em destaque)
- **Ouro Claro**: `#D6B968` (Variação para estados de hover)
- **Text/Bone**: `#F5F1E8` (Cor primária dos textos, gerando excelente legibilidade sem o cansaço do branco puro)

### Tipografia:
- **Títulos (Display)**: `Playfair Display` (Serifada clássica italiana — transmite sofisticação e sobriedade jurídica)
- **Corpo (Body)**: `DM Sans` (Sem serifa moderna e limpa — ótima para leitura rápida)

### Utilitários Visuais Especiais (`app/globals.css`):
- `.rule-gold`: Linha fina de divisão dourada com gradiente desvanecente nas pontas.
- `.grain`: Sobreposição de textura de ruído discreta simulando papel ou metal envelhecido.
- `.blueprint`: Grade militar de aviação sutil usando gradiente radial.
- `.route-arc`: Elemento de design em arco que simboliza rotas e trajetórias aéreas.
- `.btn-shine`: Efeito reflexivo suave em botões ao passar o mouse.
- `.plate-corners`: Moldura dourada elegante nas bordas de fotos e containers.
- `.card-lift`: Elevação e sombreamento gradual em cards quando focados ou com hover.
- `.book-cover`: Efeito 3D de relevo e profundidade sobre as capas dos livros.

---

## 🛠️ Diretrizes de Código e Padrões
1. **Tipagem Estrita**: Desenvolver sempre em TypeScript estrito, garantindo interfaces adequadas para props e dados.
2. **Aliases de Importação**: Utilizar `@/` para referências a componentes ou assets a partir da raiz (ex: `@/components/Navbar`).
3. **Estilização**: Combinar classes utilitárias do Tailwind CSS com as classes personalizadas do `globals.css`.
4. **Desempenho**: Priorizar o uso correto do Next.js App Router e otimização de imagens com `next/image` ou tags HTML com dimensões fixas adequadas.
5. **SEO & Acessibilidade**: Manter tags de títulos `h1` a `h6` organizadas hierarquicamente e sempre preencher propriedades `alt` em imagens.
