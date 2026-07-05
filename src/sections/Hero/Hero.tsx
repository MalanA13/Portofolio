import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { profile } from "../../data/profile";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import portraitSrc from "../../assets/profile/alan.jpeg";

/**
 * Hero — Visual identity polish pass
 *
 * Design updates:
 * 1. Warm cream/beige background to match editorial reference.
 * 2. Increased size and negative tracking on the heavy sans-serif typography.
 * 3. Thinner, massive italic typography for "Hey, there" in the background.
 * 4. Staggered overlapping elements to increase depth.
 * 5. Ensured zero black bounding boxes around the transparent portrait.
 */

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

const heroTransition = (delay: number): Transition => ({
  duration: 1.2,
  ease: EASE,
  delay,
});

const Hero = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#FAFAF8] pt-20"
      aria-label="Introduction"
    >
      {/* Editorial warm gradient mesh background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[800px] w-[1200px] bg-[radial-gradient(ellipse_at_top,#F3EBE1_0%,transparent_70%)] opacity-80" />
      </div>

      {/* Decorative massive serif text behind portrait */}
      <motion.div
        initial={shouldReduce ? undefined : { opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={heroTransition(0.2)}
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        aria-hidden="true"
      >
        <span className="font-serif-display whitespace-nowrap text-[140px] italic font-normal leading-none tracking-tight text-[#111111]/[0.03] select-none md:text-[240px] lg:text-[340px]">
          Hey, there
        </span>
      </motion.div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="relative flex flex-col items-center pt-10">
          
          {/* Portrait Centerpiece */}
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={heroTransition(0.1)}
            className="relative z-20 mb-12 w-[300px] md:mb-0 md:w-[420px] lg:w-[500px]"
          >
            {/* The portrait image (transparent RGBA) */}
            <img
              src={portraitSrc}
              alt={`Portrait of ${profile.name}`}
              className="h-auto w-full object-contain drop-shadow-2xl"
              width={500}
              height={650}
              fetchPriority="high"
            />
            {/* Seamless fade to match the #FAFAF8 background */}
            <div
              className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-[#FAFAF8] via-[#FAFAF8]/80 to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* Text content positioned flanking the portrait */}
          <div className="flex w-full flex-col items-center gap-12 md:absolute md:top-1/2 md:-translate-y-1/2 md:flex-row md:justify-between md:gap-0">
            
            {/* Left block: availability + name */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={heroTransition(0.4)}
              className="z-30 flex flex-col items-center gap-5 md:items-start md:max-w-[400px]"
            >
              <Badge dot className="shadow-sm border-[#E5E5E5] bg-white/80 backdrop-blur-sm">
                {profile.availability}
              </Badge>

              <h1 className="text-center text-[3.5rem] font-black uppercase leading-[0.85] tracking-tighter text-[#111111] md:text-left md:text-[5rem] lg:text-[7rem]">
                I AM
                <br />
                <span className="font-serif-display font-medium italic tracking-tight pr-4">
                  {profile.shortName}
                </span>
              </h1>
            </motion.div>

            {/* Right block: role + description */}
            <motion.div
              initial={shouldReduce ? undefined : { opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={heroTransition(0.5)}
              className="z-30 flex max-w-[340px] flex-col items-center gap-6 md:items-end md:text-right"
            >
              <p className="text-sm font-medium leading-relaxed text-[#5F6368] md:max-w-[240px]">
                {profile.tagline}
              </p>

              <p className="text-[2rem] font-black uppercase leading-[0.9] tracking-tighter text-[#111111] md:text-[3rem] lg:text-[4rem]">
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
          initial={shouldReduce ? undefined : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={heroTransition(0.7)}
          className="relative z-30 mt-16 flex flex-wrap items-center justify-center gap-5 pb-10"
        >
          <Button href="#projects" className="px-8 py-4 shadow-xl shadow-black/10">
            View Projects
            <ArrowDown size={18} />
          </Button>

          {profile.resumeUrl && (
            <Button href={profile.resumeUrl} variant="ghost" external className="px-8 py-4 text-base font-semibold">
              Download CV
            </Button>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
