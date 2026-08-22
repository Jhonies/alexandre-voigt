import { ImageResponse } from 'next/og';

/** Dimensão canônica de preview aceita por WhatsApp, LinkedIn, X e Facebook. */
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

const NAVY = '#0A1628';
const NAVY_DEEP = '#070F1C';
const GOLD = '#C9A84C';
const BONE = '#F5F1E8';

/**
 * Renderiza o cartão de compartilhamento. Vive num módulo separado porque as
 * convenções `opengraph-image` e `twitter-image` do Next exigem um arquivo
 * cada, e as duas devem produzir exatamente a mesma arte.
 */
export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: NAVY,
          backgroundImage: `radial-gradient(circle at 78% 22%, ${NAVY} 0%, ${NAVY_DEEP} 62%)`,
          padding: '72px 84px',
          position: 'relative',
        }}
      >
        {/* Moldura dourada — eco da classe .plate-corners do site */}
        <div
          style={{
            position: 'absolute',
            top: 34,
            left: 34,
            right: 34,
            bottom: 34,
            border: `1px solid ${GOLD}44`,
            display: 'flex',
          }}
        />

        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div style={{ width: 64, height: 1, backgroundColor: GOLD }} />
          <div
            style={{
              fontSize: 20,
              letterSpacing: 6,
              textTransform: 'uppercase',
              color: `${GOLD}E6`,
            }}
          >
            Advocacia
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 96,
              lineHeight: 1.02,
              color: BONE,
              letterSpacing: -2,
            }}
          >
            Dr. Alexandre Voigt
            <span style={{ color: GOLD }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 26,
              fontSize: 34,
              color: `${BONE}CC`,
            }}
          >
            Direito Militar e Policial · Direito Aeronáutico
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 18,
            fontSize: 22,
            letterSpacing: 2,
            textTransform: 'uppercase',
            color: `${BONE}99`,
          }}
        >
          <span>OAB/SP 548.991</span>
          <span style={{ color: `${GOLD}AA` }}>·</span>
          <span>Ten.-cel. PM (reserva)</span>
          <span style={{ color: `${GOLD}AA` }}>·</span>
          <span>Santos / SP</span>
        </div>
      </div>
    ),
    ogSize
  );
}
