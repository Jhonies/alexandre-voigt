/**
 * URL canônica do site. Era duplicada entre `app/layout.tsx` e
 * `app/sitemap.ts` (e cravada no robots.txt estático), o que abria espaço
 * para os três discordarem em staging ou numa troca de domínio.
 */
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || 'https://alexandrevoigt.adv.br'
).replace(/\/$/, '');

export const SITE_NAME = 'Alexandre Voigt — Advocacia';

export const LATTES_URL = 'http://lattes.cnpq.br/7928155562071787';
