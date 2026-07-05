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
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      style={{
        background:
          "radial-gradient(ellipse 900px 620px at 24% 18%, rgba(238,228,214,0.28), transparent 68%), radial-gradient(ellipse 780px 560px at 72% 38%, rgba(247,243,238,0.62), transparent 70%), radial-gradient(ellipse 920px 520px at 50% 92%, rgba(232,222,207,0.18), transparent 72%), linear-gradient(135deg, #fffefd 0%, #fdfcfb 46%, #faf7f3 100%)",
      }}
      aria-label="Introduction"
    >
      {/* Subtle layered background depth */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-16%] left-[-8%] h-[980px] w-[1040px] rounded-[48%_52%_44%_56%] bg-[#eee4d6]/28 blur-[120px]" />
        <div className="absolute right-[-12%] bottom-[-20%] h-[900px] w-[1080px] rounded-[56%_44%_52%_48%] bg-[#f7f3ee]/45 blur-[140px]" />
        <div className="absolute top-[17%] left-1/2 h-[760px] w-[920px] -translate-x-1/2 rounded-[44%_56%_58%_42%] bg-white/35 blur-[120px]" />
        <div className="absolute inset-0 opacity-[0.035] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 240 240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.72%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E")' }} />
        <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 1200 800%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M-120 540C106 440 228 300 432 340c180 35 220 170 462 82 114-42 222-96 426-82%22 fill=%22none%22 stroke=%22%23b8aa99%22 stroke-opacity=%22.26%22 stroke-width=%221%22/%3E%3C/svg%3E")', backgroundSize: 'cover' }} />
      </div>

      {/* Decorative massive serif text */}
      <motion.div
        initial={shouldReduce ? undefined : { opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={heroTransition(0.3)}
        className="pointer-events-none absolute top-[44%] left-[46%] z-0 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        aria-hidden="true"
      >
        <span className="font-serif-display whitespace-nowrap text-[160px] italic font-normal leading-none tracking-tight text-[#463a30]/[0.065] mix-blend-multiply select-none drop-shadow-[0_1px_0_rgba(255,255,255,0.72)] md:text-[300px] lg:text-[440px]">
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
            className="pointer-events-none absolute top-[45%] left-1/2 z-10 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-[46%_54%_50%_50%] bg-[#e8decf]/35 blur-[104px] md:h-[900px] md:w-[1040px]"
            aria-hidden="true"
          />

          {/* Portrait Centerpiece */}
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={heroTransition(0.1)}
            className="relative z-20 mb-12 w-[510px] max-w-[122vw] md:mb-0 md:w-[740px] md:translate-x-0 lg:w-[950px] lg:translate-x-1"
          >
            <div
              className="pointer-events-none absolute top-[9%] left-1/2 z-10 h-[78%] w-[48%] -translate-x-1/2 rounded-[42px] bg-white/20 blur-[42px]"
              aria-hidden="true"
            />
            {/* Natural rendering for transparent PNG */}
            <img
              src={portraitSrc}
              alt={`Portrait of ${profile.name}`}
              className="relative z-20 h-auto w-full object-contain"
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

          {/* Text content positioned flanking the portrait */}
          <div className="flex w-full flex-col items-center gap-14 md:absolute md:top-[50%] md:-translate-y-1/2 md:flex-row md:justify-between md:gap-0">
            
            {/* Left block: availability + name */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={heroTransition(0.4)}
              className="z-30 flex flex-col items-center gap-6 md:max-w-[430px] md:items-start"
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
              className="z-30 flex max-w-[380px] flex-col items-center gap-10 md:items-end md:text-right"
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
