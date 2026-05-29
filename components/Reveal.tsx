'use client';

import { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
  threshold?: number;
};

export default function Reveal({
  children,
  className = '',
  stagger = false,
  as: Tag = 'div',
  delay = 0,
  threshold = 0.15,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            const id = window.setTimeout(() => setVisible(true), delay);
            return () => window.clearTimeout(id);
          }
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [delay, threshold]);

  const baseClass = stagger ? 'reveal-stagger' : 'reveal';
  const Component = Tag as React.ElementType;

  return (
    <Component
      ref={ref as never}
      className={`${baseClass} ${visible ? 'is-visible' : ''} ${className}`}
    >
      {children}
    </Component>
  );
}
