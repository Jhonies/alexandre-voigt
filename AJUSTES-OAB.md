# Ajustes de adequação ética: site Dr. Alexandre Voigt

> Instrução para o Claude: leia este arquivo inteiro, localize no código os trechos citados abaixo e aplique as alterações. Projeto em Next.js, hospedado na Vercel. Antes de editar, liste os arquivos onde cada trecho aparece. Ao final, mostre um resumo do que mudou e rode o build para garantir que nada quebrou.

## Contexto

O site (alexandrevoigt.com.br / alexandrevoigt.adv.br) é de um advogado (OAB/SP 548.991). A publicidade de advogados é regulada pelo Código de Ética e Disciplina da OAB (arts. 39 a 47) e pelo Provimento 205/2021. As regras principais são:

- A publicidade deve ser **meramente informativa**, sem captação de clientela nem mercantilização.
- São vedadas expressões persuasivas, de autoengrandecimento ou de comparação.
- O CED, art. 44, §2º, veda mencionar emprego, cargo ou função ocupado, atual ou passado, em qualquer órgão, salvo o de professor universitário.
- São permitidos: nome, número da OAB, títulos acadêmicos, instituições jurídicas de que faça parte, áreas de atuação descritas objetivamente e canais de contato (WhatsApp, e-mail, redes).

A responsável pelo Google Ads do cliente apontou problemas, e os anúncios só voltam depois dos ajustes. A palavra final sobre os textos é do advogado.

## Alterações (por prioridade)

### 1. Remover a seção de Depoimentos (prioridade alta)
- Remover a seção inteira `#depoimentos` (Cliente A, B e C).
- Remover o link "Depoimentos" do menu, do menu mobile e do rodapé.
- Remover a nota de rodapé da seção sobre o Provimento 205.

### 2. Retirar menções a cargos e funções públicas (prioridade alta)
- **Hero:** remover "Advogado · Tenente-coronel da PM (reserva)" e deixar só "Advogado". Remover a frase "Trajetória construída no serviço público, na disciplina militar...".
- **Seção Trajetória (#sobre):**
  - Remover os parágrafos que citam "Tenente-coronel da Polícia Militar" e "quase três décadas de serviço na segurança pública".
  - Trocar o título "Três décadas entre o serviço público e o estudo do Direito." por algo neutro, como "Formação e trajetória".
  - Nos cards: remover "Carreira Pública: Tenente-coronel da PM/SP" e "Justiça Militar: Juiz Militar, TJM/SP".
  - **Manter:** os títulos acadêmicos (Mestre, pós-graduações) e o card "Membro da Comissão de Direito Militar da OAB/Santos", que é instituição jurídica e pode ficar.
- **Seção Formação, "Atuação institucional e magistério":** remover os itens "Juiz Militar, TJM/SP", "Chefia da Seção de Justiça e Disciplina" e "Professor, Escola Superior de Soldados PM/SP", porque não é magistério universitário. Manter "Comissão de Direito Militar (OAB)" e, se fizer sentido, "Orientação de mestrado, CAES" como atividade acadêmica (confirmar com o cliente).
- Na lista de formação, manter os cursos, que são títulos acadêmicos e são permitidos.
- **Meta tags e SEO:** remover "Tenente-coronel da Polícia Militar (reserva)" da `meta description` e de qualquer `og:`/`twitter:` ou JSON-LD.
- **Livro "A Sociedade do Medo":** trocar "escrita a partir da vivência de três décadas no serviço policial militar" por uma descrição neutra do tema.

### 3. Remover "especialista" (prioridade alta)
- **H1:** "Advogado especialista em Direito Militar e Policial e em Direito Aeronáutico" → "Advogado · Direito Militar e Policial e Direito Aeronáutico". Ele não tem título de especialização em Direito Aeronáutico.
- Procurar "especialista" no projeto todo, incluindo meta tags, e remover.

### 4. Botões e chamadas para ação (prioridade média)
Os CTAs não podem induzir à contratação. Trocar por textos neutros:
- "Falar agora" → "Contato"
- "Tirar uma dúvida" → "Saiba mais" (âncora para #atuacao ou #contato)
- "Conheça meu trabalho" → "Saiba mais"
- "Falar no WhatsApp": pode virar "WhatsApp"
- Texto pré-preenchido do link `wa.me`: trocar "Gostaria de tirar uma dúvida sobre o meu caso." por "Olá, Dr. Alexandre." ou simplesmente remover o `?text=`.
- **Seção Contato:** trocar o título "Teve dúvidas sobre seus direitos como passageiro?" por "Contato". Remover "orientação inicial, técnica e sem compromisso", que soa como consulta gratuita e captação. Deixar só os canais e o endereço.
- Remover qualquer botão flutuante de WhatsApp chamativo, se houver, ou deixar discreto.

### 5. Livros e Hotmart (prioridade média, confirmar com o cliente)
- O art. 40, IV do CED veda divulgar a advocacia junto com outras atividades. Opções:
  - **(a)** remover os botões "Adquirir no Hotmart" e deixar só título e descrição das obras, como produção intelectual; ou
  - **(b)** mover a seção de livros para uma página separada.
- Padrão sugerido: (a). O link do Google Drive do guia gratuito "Assédio" pode ficar.

### 6. Foto do hero (pedido da responsável pelo Ads)
- Trocar a foto atual (`/images/alexandre-voigt.jpeg`) por uma versão **sem fundo** (PNG recortado). O arquivo novo será fornecido; deixe o componente pronto para receber `/images/alexandre-voigt.png` e ajuste o layout se necessário.
- Isso não é exigência do Código de Ética, é preferência de design e anúncio.

### 7. Limpezas gerais
- Os textos "em conformidade com o Provimento 205/2021..." podem ficar só uma vez, no rodapé. A repetição em toda seção soa defensiva.
- Remover "Atendimento em Santos/SP e em todo o Brasil" da meta description se soar como captação; "Santos/SP" basta.
- Revisar `meta-keywords`: remover termos como "advogado militar Santos" se forem só isca de busca (opcional).

## O que NÃO mudar
- Nome, número da OAB e Lattes.
- As seis áreas de atuação e suas descrições: são objetivas e permitidas. Só conferir se não há adjetivos promocionais.
- Canais de contato: WhatsApp, Instagram, e-mail e endereço.

## Para confirmar com o cliente antes de publicar
- [ ] Opção dos livros: (a) ou (b)
- [ ] Manter ou não "Orientação de mestrado, CAES"
- [ ] Foto nova sem fundo
- [ ] Se essas alterações contam nas 3 alterações mensais do contrato
- [ ] O advogado aprova o texto final (ele é o responsável perante a OAB)
