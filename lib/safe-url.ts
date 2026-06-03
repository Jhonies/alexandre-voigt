/**
 * Allowlist de domínios externos aprovados.
 * Toda URL externa usada em href DEVE pertencer a um destes domínios.
 */
const ALLOWED_DOMAINS: string[] = [
  'wa.me',
  'instagram.com',
  'www.instagram.com',
  'alexandrevoigt.hotmart.host',
  'go.hotmart.com',
  'drive.google.com',
  'alexandrevoigt.adv.br',
  'www.alexandrevoigt.adv.br',
];

/**
 * Protocolos seguros aceitos para links.
 */
const SAFE_PROTOCOLS = ['https:', 'mailto:', 'tel:'];

/**
 * Valida uma URL contra a allowlist de domínios.
 * Retorna a URL original se válida, ou '#' caso contrário.
 *
 * - mailto: e tel: são sempre permitidos.
 * - Links internos (#ancora, /path) são sempre permitidos.
 * - URLs externas devem pertencer a ALLOWED_DOMAINS.
 */
export function safeHref(url: string): string {
  if (!url || typeof url !== 'string') return '#';

  const trimmed = url.trim();

  // Links internos (âncora ou path relativo)
  if (trimmed.startsWith('#') || trimmed.startsWith('/')) return trimmed;

  // mailto: e tel: — seguros
  if (trimmed.startsWith('mailto:') || trimmed.startsWith('tel:')) return trimmed;

  try {
    const parsed = new URL(trimmed);

    // Bloqueia protocolos inseguros (javascript:, data:, etc.)
    if (!SAFE_PROTOCOLS.includes(parsed.protocol)) return '#';

    // Verifica domínio na allowlist
    const hostname = parsed.hostname.toLowerCase();
    const isAllowed = ALLOWED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );

    return isAllowed ? trimmed : '#';
  } catch {
    // URL malformada
    return '#';
  }
}
