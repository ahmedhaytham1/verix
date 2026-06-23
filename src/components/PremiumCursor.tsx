'use client';

import { useEffect, useRef } from 'react';

export function PremiumCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    const move = (event: MouseEvent) => {
      tx = event.clientX;
      ty = event.clientY;
    };
    const raf = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      requestAnimationFrame(raf);
    };
    window.addEventListener('mousemove', move);
    const id = requestAnimationFrame(raf);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(id);
    };
  }, []);

  return <div ref={ref} className="premium-cursor" aria-hidden="true" />;
}
