'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GsapEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.2 }
      });

      gsap.from('.hero-kicker', { y: 26, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 1.05 });
      gsap.from('.hero-title-word span', {
        yPercent: 112,
        duration: 1.1,
        ease: 'power4.out',
        stagger: 0.08,
        delay: 1.18
      });
      gsap.from('.hero-copy', { y: 28, opacity: 0, duration: 0.9, ease: 'power3.out', delay: 1.45, stagger: 0.12 });
      gsap.from('.hero-visual', { clipPath: 'inset(0 0 100% 0 round 34px)', y: 24, duration: 1.35, ease: 'power4.out', delay: 1.3 });
      gsap.from('.hero-trust', { y: 20, opacity: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out', delay: 1.8 });

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(0 0 100% 0 round 28px)',
          duration: 1.15,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.stagger-group').forEach((group) => {
        const items = group.querySelectorAll('.stagger-item');
        gsap.from(items, {
          y: 28,
          opacity: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 82%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-media').forEach((el) => {
        gsap.to(el, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
        });
      });

      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const value = Number(el.dataset.count || '0');
        const obj = { val: 0 };
        gsap.to(obj, {
          val: value,
          duration: 1.8,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
