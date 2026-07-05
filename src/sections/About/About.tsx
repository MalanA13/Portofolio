import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../../components/common/SectionHeader";
import Container from "../../components/common/Container";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

/**
 * About — Premium polish with editorial micro-interactions
 * 
 * Refinements:
 * - Staggered paragraph reveals on scroll
 * - Quick Facts with premium hover states
 * - Subtle background ambient lighting
 */
const About = () => {
  return (
    <section id="about" className="editorial-surface surface-about relative overflow-hidden py-32 lg:py-48">
      
      {/* Subtle editorial background element */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_top_right,rgba(238,228,214,0.25)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      <Container>
        <div className="relative z-10 grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <FadeIn viewport>
              <SectionHeader
                title="Who I Am"
                eyebrow="ABOUT"
                align="left"
                className="mb-0 lg:sticky lg:top-40"
              />
            </FadeIn>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="flex flex-col gap-24"
            >
              {/* About Paragraphs with staggered reveal */}
              <div className="flex flex-col gap-8 text-[1.25rem] md:text-[1.5rem] font-medium leading-[1.7] text-[#111111]/80 tracking-tight">
                {profile.about.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 30 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 } }
                    }}
                    className="transition-colors duration-500 hover:text-[#111111]"
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Quick Facts with premium hover */}
              <div className="flex flex-col border-t border-[#111111]/[0.08]">
                {profile.quickFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 } }
                    }}
                    className="group flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#111111]/[0.08] py-8 transition-all duration-500 hover:border-[#111111]/30 hover:bg-[#FAFAF8]/50"
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9AA0A6] transition-colors duration-500 group-hover:text-[#111111]">
                      {fact.label}
                    </span>
                    <span className="text-xl font-semibold tracking-tight text-[#111111] transition-all duration-500 group-hover:scale-105">
                      {fact.value}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
