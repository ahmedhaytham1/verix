'use client';

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function GsapEffects() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    const ctx = gsap.context(() => {
      gsap.to('.scroll-progress', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.documentElement, start: 'top top', end: 'bottom bottom', scrub: 0.2 }
      });

      const intro = gsap.timeline({ defaults: { ease: 'power4.out' } });
      intro
        .from('.u-hero-eyebrow, .hero-kicker', { y: 24, opacity: 0, duration: 0.75 })
        .from('.u-title-line span, .hero-title-word span', { yPercent: 112, duration: 0.95, stagger: 0.08 }, '-=0.35')
        .from('.u-copy, .hero-copy', { y: 28, opacity: 0, duration: 0.75, stagger: 0.09 }, '-=0.45')
        .from('.u-frame, .hero-visual', { clipPath: 'inset(0 0 100% 0 round 34px)', y: 24, duration: 1.1 }, '-=0.75')
        .from('.u-stat, .hero-trust', { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.45');

      gsap.utils.toArray<HTMLElement>('.reveal, .u-reveal').forEach((el) => {
        gsap.from(el, {
          y: 42,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 84%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.image-reveal').forEach((el) => {
        gsap.from(el, {
          clipPath: 'inset(0 0 100% 0 round 28px)',
          duration: 1.05,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start: 'top 82%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.stagger-group').forEach((group) => {
        const items = group.querySelectorAll('.stagger-item');
        gsap.from(items, {
          y: 22,
          opacity: 0,
          duration: 0.65,
          stagger: 0.055,
          ease: 'power3.out',
          scrollTrigger: { trigger: group, start: 'top 84%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.project-teaser').forEach((el) => {
        gsap.from(el, {
          y: 34,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', once: true }
        });
      });

      gsap.utils.toArray<HTMLElement>('.parallax-media').forEach((el) => {
        gsap.to(el, {
          yPercent: -6,
          ease: 'none',
          scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: 0.7 }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
