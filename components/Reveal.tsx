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
  threshold = 0,
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
    let timer = 0;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.disconnect();
        if (delay) {
          timer = window.setTimeout(() => setVisible(true), delay);
          return;
        }
        setVisible(true);
      },
      // threshold 0 + a fixed pixel margin, NOT a percentage of the element.
      // On mobile these blocks stack to 1000px+ tall, so a fractional
      // threshold would only fire after the reader had scrolled past them.
      { threshold, rootMargin: '0px 0px -80px 0px' }
    );
    obs.observe(node);
    return () => {
      obs.disconnect();
      if (timer) window.clearTimeout(timer);
    };
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
