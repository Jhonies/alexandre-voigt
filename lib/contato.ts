import { safeHref } from './safe-url';

/**
 * Dados de contato compartilhados entre a seção de Contato, o rodapé e o
 * botão flutuante de WhatsApp. Centralizados aqui para que o número e o
 * texto da mensagem existam em um único lugar.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '5513981522764';

export const WHATSAPP_DISPLAY =
  process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '(13) 98152-2764';

export const WHATSAPP_MESSAGE =
  'Olá, Dr. Alexandre.';

export const WHATSAPP_HREF = safeHref(
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`
);

export const INSTAGRAM = safeHref(
  process.env.NEXT_PUBLIC_INSTAGRAM_URL || 'https://instagram.com/alexandre_voigt'
);

export const EMAIL =
  process.env.NEXT_PUBLIC_EMAIL || 'alexandrevoigt@adv.oabsp.org.br';

/**
 * Endereço de atendimento. Centralizado aqui porque é consumido tanto pela
 * seção de Contato quanto pelo JSON-LD de `LegalService` no layout — os dois
 * precisam concordar, ou o Google trata como sinal local inconsistente.
 */
export const ENDERECO = {
  logradouro: 'Av. Senador Feijó, 686',
  complemento: 'Sala 1726',
  cidade: 'Santos',
  uf: 'SP',
  cep: '11015-502',
  pais: 'BR',
} as const;
