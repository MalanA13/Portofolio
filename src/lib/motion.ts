/**
 * Centralized motion configuration.
 *
 * Why centralize? Every section uses the same fade-up entrance
 * and stagger pattern. Defining variants once prevents drift
 * where one section bounces and another slides.
 *
 * How to extend: add new named variants here. Import them in
 * your section component. Never define animation objects inline
 * in JSX unless they are truly unique to one element.
 */

/** Smooth expo-out easing — fast start, gentle deceleration */
export const easing: [number, number, number, number] = [0.16, 1, 0.3, 1];

/** Standard section/element entrance: fade up from 40px below */
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easing },
  },
};

/** Slide from left — used for hero name block */
export const slideFromLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

/** Slide from right — used for hero role block */
export const slideFromRight = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: easing },
  },
};

/** Container variant that staggers its children */
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

/** Timing presets (in seconds) */
export const timing = {
  fast: 0.2,
  normal: 0.35,
  slow: 0.5,
  entrance: 0.7,
  hero: 0.9,
} as const;
