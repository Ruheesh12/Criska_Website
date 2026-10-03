import { gsap, ScrollTrigger } from './gsapSetup';

/**
 * Hero section entrance timeline sequence
 */
export const runHeroEntrance = (scope: HTMLElement) => {
  const mm = gsap.matchMedia();

  return mm.add('(prefers-reduced-motion: no-preference)', () => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Headline lines masked upward reveal
    const lines = scope.querySelectorAll('.hero-headline-line');
    if (lines.length > 0) {
      tl.fromTo(
        lines,
        { y: '110%', opacity: 0 },
        { y: '0%', opacity: 1, duration: 0.9, stagger: 0.08, clearProps: 'transform' }
      );
    }

    // 2. Subtitle paragraph
    const sub = scope.querySelector('.hero-subtitle');
    if (sub) {
      tl.fromTo(
        sub,
        { y: 24, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 },
        '-=0.5'
      );
    }

    // 3. CTA buttons
    const btns = scope.querySelectorAll('.hero-cta-btn');
    if (btns.length > 0) {
      tl.fromTo(
        btns,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        '-=0.4'
      );
    }

    // 4. Hero media visual scale & fade in
    const media = scope.querySelector('.hero-media-inner');
    if (media) {
      tl.fromTo(
        media,
        { scale: 1.08, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.2, ease: 'power2.out' },
        '-=0.8'
      );
    }
  });
};

/**
 * Standard scroll reveal for a section
 */
export const initSectionReveal = (
  section: HTMLElement,
  options: {
    headingSelector?: string;
    bodySelector?: string;
    itemsSelector?: string;
    stagger?: number;
    delay?: number;
  } = {}
) => {
  const {
    headingSelector = '.reveal-heading',
    bodySelector = '.reveal-body',
    itemsSelector = '.reveal-item',
    stagger = 0.12,
    delay = 0,
  } = options;

  const ctx = gsap.context(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top 82%',
        toggleActions: 'play none none none',
      },
      defaults: { ease: 'power3.out', duration: 0.8 },
      delay,
    });

    const heading = section.querySelector(headingSelector);
    if (heading) {
      tl.fromTo(heading, { y: 35, opacity: 0 }, { y: 0, opacity: 1 });
    }

    const body = section.querySelector(bodySelector);
    if (body) {
      tl.fromTo(body, { y: 25, opacity: 0 }, { y: 0, opacity: 1 }, '-=0.5');
    }

    const items = section.querySelectorAll(itemsSelector);
    if (items.length > 0) {
      tl.fromTo(
        items,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger, clearProps: 'transform' },
        '-=0.4'
      );
    }
  }, section);

  return () => ctx.revert();
};

/**
 * Animate numerical stats count-up on scroll
 */
export const initCounter = (element: HTMLElement, targetNumber: number, suffix: string = '%') => {
  const obj = { val: 0 };
  const trigger = ScrollTrigger.create({
    trigger: element,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(obj, {
        val: targetNumber,
        duration: 1.8,
        ease: 'power2.out',
        onUpdate: () => {
          element.textContent = `${Math.round(obj.val)}${suffix}`;
        },
      });
    },
  });

  return () => trigger.kill();
};

/**
 * Subtle parallax for image containers on scroll
 */
export const initParallax = (imageEl: HTMLElement, speed: number = 20) => {
  const trigger = gsap.to(imageEl, {
    yPercent: speed,
    ease: 'none',
    scrollTrigger: {
      trigger: imageEl,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.2,
    },
  });

  return () => {
    trigger.scrollTrigger?.kill();
    trigger.kill();
  };
};

/**
 * Floating animation for floating cards in AI section
 */
export const initFloating = (element: HTMLElement, distance: number = 10, duration: number = 3) => {
  const tween = gsap.to(element, {
    y: -distance,
    duration,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });

  return () => tween.kill();
};
