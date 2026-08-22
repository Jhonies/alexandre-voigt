import { ogContentType, ogSize, renderOgImage } from '@/lib/og-image';

export const alt =
  'Dr. Alexandre Voigt — Advogado · Direito Militar e Policial e Direito Aeronáutico';
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderOgImage();
}
