import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

import { profile } from "../../data/profile";
import Badge from "../../components/ui/Badge";
import Button from "../../components/ui/Button";
import portraitSrc from "../../assets/profile/alan.webp";

const Hero = () => {
  const shouldReduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="hero-editorial relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
      aria-label="Introduction"
    >
      {/* Simplified modern background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[8%] w-[400px] h-[400px] bg-[var(--accent-primary)] opacity-[0.06] blur-3xl rounded-full" />
        <div className="absolute bottom-[15%] left-[10%] w-[500px] h-[500px] bg-[var(--accent-secondary)] opacity-[0.05] blur-3xl rounded-full" />
        <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-tertiary)] opacity-[0.03] blur-3xl rounded-full" />
      </div>

      {/* Decorative massive serif text - behind portrait */}
      <div
        className="pointer-events-none absolute top-[18%] left-1/2 z-10 -translate-x-1/2 w-full text-center md:top-[14%] animate-[fadeIn_0.8s_ease-out]"
        aria-hidden="true"
      >
        <span className="hero-backdrop-type font-serif-display whitespace-nowrap text-[120px] italic font-normal leading-none tracking-tight select-none md:text-[180px] lg:text-[240px]">
          Hey, there
        </span>
      </div>

      {/* Main content wrapper */}
      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 md:px-10 lg:px-16">
        <div className="relative flex flex-col items-center pt-8">
          
          {/* Ambient lighting directly behind the portrait */}
          <div
            className="hero-portrait-field pointer-events-none absolute top-[45%] left-1/2 z-10 h-[600px] w-[700px] -translate-x-1/2 -translate-y-1/2 md:h-[900px] md:w-[1040px]"
            aria-hidden="true"
          />

          {/* Portrait Centerpiece - main hero focal point */}
          <motion.div
            initial={shouldReduce ? undefined : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 mb-12 w-[600px] max-w-[122vw] md:mb-0 md:w-[780px] lg:w-[960px] md:-ml-24 lg:-ml-32"
          >
            <img
              src={portraitSrc}
              alt={`Portrait of ${profile.name}`}
              className="relative z-20 h-auto w-full object-contain opacity-95"
              width={640}
              height={832}
              loading="eager"
              decoding="async"
            />
            
            <div
              className="pointer-events-none absolute right-0 bottom-0 left-0 z-30 h-6 bg-gradient-to-t from-[#Fdfcfb] to-transparent"
              aria-hidden="true"
            />
          </motion.div>

          {/* Text content positioned flanking the portrait */}
          <div className="flex w-full flex-col items-center gap-14 md:absolute md:top-[54%] md:-translate-y-1/2 md:flex-row md:justify-between md:gap-12 lg:gap-20 xl:gap-32">
            
            {/* Left block: availability + name */}
            <div className="z-40 flex flex-col items-center gap-6 md:max-w-[390px] md:items-start animate-[slideInLeft_0.7s_ease-out_0.2s_both]">
              <Badge dot className="border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/10 px-6 py-3 text-xs tracking-[0.1em] text-[var(--accent-primary)] shadow-sm backdrop-blur-xl font-bold">
                {profile.availability}
              </Badge>

              <h1 className="text-center text-[4.5rem] font-black uppercase leading-[0.75] tracking-tighter text-[#111111] drop-shadow-sm md:text-left md:text-[6.5rem] lg:text-[8.5rem]">
                I'M
                <br />
                <span className="font-serif-display font-medium italic tracking-tight pr-4">
                  {profile.shortName}
                </span>
              </h1>
            </div>

            {/* Right block: role + description */}
            <div className="z-40 flex max-w-[440px] flex-col items-center gap-10 md:items-end md:text-right animate-[slideInRight_0.7s_ease-out_0.3s_both]">
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
            </div>
          </div>
        </div>

        {/* CTA buttons */}
        <div className="relative z-30 mt-20 flex flex-wrap items-center justify-center gap-6 pb-14 animate-[fadeInUp_0.7s_ease-out_0.4s_both]">
          <Button href="#projects" variant="secondary" className="border-[var(--accent-primary)]/20 bg-[var(--accent-primary)]/10 px-10 py-4 text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent-primary)] shadow-[0_10px_28px_rgba(255,107,107,0.15)] backdrop-blur-xl hover:bg-[var(--accent-primary)]/20 transition-all duration-300">
            View Projects
            <ArrowDown size={18} className="ml-3" />
          </Button>

          {profile.resumeUrl && (
            <Button href={profile.resumeUrl} variant="ghost" external className="px-8 py-5 text-sm uppercase tracking-[0.15em] font-bold text-[#111111]/70 hover:text-[#111111] transition-colors duration-500">
              Download CV
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
