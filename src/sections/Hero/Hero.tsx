import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { profile } from "../../data/profile";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import portraitSrc from "../../assets/profile/alan.png";

/**
 * Hero — Art Direction Polish (Asymmetry, Layered Light, Depth)
 *
 * Refinements:
 * 1. Removed paper grain entirely. Relying purely on volumetric, blurred radial gradients.
 * 2. Asymmetrical Composition: Background text and lighting are slightly off-center to break the grid.
 * 3. Layered Warm Lighting: Added heavily blurred, oversized orbs of warm light (beige, pearl, cream) 
 *    that interact to create a painted, studio-lighting effect.
 * 4. Typographic Depth: Added an ultra-subtle `drop-shadow` to the background text so it sits in 3D space.
 */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroTransition = (delay: number): Transition => ({
  duration: 1.6, // Slightly slower, more luxurious easing
  ease: EASE,
  delay,
});

const Hero = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="hero-editorial relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      {/* Editorial background atmosphere */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="hero-structure-primary" />
        <div className="hero-structure-secondary" />
        <div className="hero-color-wash hero-color-wash-warm" />
        <div className="hero-color-wash hero-color-wash-cool" />
        <div className="hero-grid" />
        <div className="hero-paper" />
        <div className="hero-light-field" />
        <div className="hero-editorial-frame" />
        <div className="hero-cut-layer hero-cut-layer-left" />
        <div className="hero-cut-layer hero-cut-layer-right" />
        <div className="hero-guide hero-guide-horizontal" />
        <div className="hero-guide hero-guide-vertical" />
      </div>

      {/* Decorative massive serif text */}
      <motion.div
        initial={shouldReduce ? undefined : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={heroTransition(0.3)}
        className="pointer-events-none absolute top-[44%] left-[46%] z-0 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        aria-hidden="true"
      >
        <span className="hero-backdrop-type font-serif-display whitespace-nowrap text-[160px] italic font-normal leading-none tracking-tight select-none md:text-[300px] lg:text-[440px]">
          Hey, there
        </span>
      </motion.div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="relative flex flex-col items-center pt-8">
          
          {/* Ambient lighting directly behind the portrait */}
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={heroTransition(0.5)}
            className="hero-portrait-field pointer-events-none absolute top-[45%] left-1/2 z-10 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 md:h-[900px] md:w-[1040px]"
            aria-hidden="true"
          />

          {/* Portrait Centerpiece */}
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={heroTransition(0.1)}
            className="relative z-10 mb-12 w-[575px] max-w-[122vw] md:mb-0 md:w-[835px] md:translate-x-0 lg:w-[1060px] lg:translate-x-0"
          >
            <div
              className="hero-portrait-paper pointer-events-none absolute top-[9%] left-1/2 z-10 h-[78%] w-[48%] -translate-x-1/2"
              aria-hidden="true"
            />
            {/* Natural rendering for transparent PNG */}
            <img
              src={portraitSrc}
              alt={`Portrait of ${profile.name}`}
              className="relative z-20 h-auto w-full object-contain opacity-95"
              width={640}
              height={832}
              fetchPriority="high"
            />
            
            {/* Seamless fade to match the background */}
            <div
              className="pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-6 bg-gradient-to-t from-[#Fdfcfb] to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          <div className="hero-portrait-mask-panel pointer-events-none absolute left-1/2 top-[58%] z-20 h-[26%] w-[92%] -translate-x-1/2" aria-hidden="true" />

          {/* Text content positioned flanking the portrait */}
          <div className="flex w-full flex-col items-center gap-14 md:absolute md:top-[52%] md:-translate-y-1/2 md:flex-row md:justify-between md:gap-0">
            
            {/* Left block: availability + name */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={heroTransition(0.4)}
              className="z-30 flex flex-col items-center gap-6 md:max-w-[390px] md:items-start lg:translate-x-6"
            >
              <Badge dot className="border-[#111111]/5 bg-white/55 px-6 py-3 text-xs tracking-[0.1em] text-[#111111]/75 shadow-sm backdrop-blur-xl">
                {profile.availability}
              </Badge>

              <h1 className="text-center text-[4.5rem] font-black uppercase leading-[0.75] tracking-tighter text-[#111111] drop-shadow-sm md:text-left md:text-[6.5rem] lg:text-[8.5rem]">
                I AM
                <br />
                <span className="font-serif-display font-medium italic tracking-tight pr-4">
                  {profile.shortName}
                </span>
              </h1>
            </motion.div>

            {/* Right block: role + description */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={heroTransition(0.5)}
              className="z-30 flex max-w-[440px] flex-col items-center gap-10 md:items-end md:text-right lg:-translate-x-6"
            >
              <p className="text-[1rem] font-medium leading-[1.8] text-[#111111]/60 md:max-w-[280px]">
                {profile.tagline}
              </p>

              <p className="text-[2.75rem] font-black uppercase leading-[0.8] tracking-tighter text-[#111111] drop-shadow-sm md:text-[3.75rem] lg:text-[5.5rem]">
                {profile.role.split(" ").map((word, i) => (
                  <span key={i} className="block">
                    {word}
                  </span>
                ))}
              </p>
            </motion.div>
          </div>
        </div>

        {/* CTA buttons */}
        <motion.div
          initial={shouldReduce ? undefined : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTransition(0.7)}
          className="relative z-30 mt-20 flex flex-wrap items-center justify-center gap-6 pb-14"
        >
          <Button href="#projects" variant="secondary" className="border-[#111111]/10 bg-white/50 px-10 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[#111111] shadow-[0_10px_28px_rgba(17,17,17,0.06)] backdrop-blur-xl">
            View Projects
            <ArrowDown size={18} className="ml-3" />
          </Button>

          {profile.resumeUrl && (
            <Button href={profile.resumeUrl} variant="ghost" external className="px-8 py-5 text-sm uppercase tracking-[0.15em] font-bold text-[#111111]/70 hover:text-[#111111] transition-colors duration-500">
              Download CV
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
