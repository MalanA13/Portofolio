import { motion } from "framer-motion";
import { organizations } from "../../data/organizations";
import { certifications } from "../../data/certifications";
import Container from "../../components/common/Container";
import SectionHeader from "../../components/common/SectionHeader";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

/**
 * Experience — Premium micro-interactions and staggered reveals
 * 
 * Refinements:
 * - Smooth bullet point reveals on hover
 * - Premium hover states with subtle scale
 * - Staggered content reveals
 * - Consistent with About/Skills polish
 */
const Experience = () => {
  return (
    <section id="experience" className="editorial-surface surface-experience relative overflow-hidden py-32 lg:py-48">
      
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-[radial-gradient(circle_at_bottom_left,rgba(238,228,214,0.2)_0%,transparent_60%)] blur-3xl pointer-events-none" />

      <Container size="wide" className="relative z-10">
        <div className="grid grid-cols-1 gap-24 xl:grid-cols-2 xl:gap-32">
          
          {/* Left Column: Organizations */}
          <div>
            <FadeIn viewport>
              <SectionHeader
                title="Organizations"
                eyebrow="EXPERIENCE"
                align="left"
                className="mb-16"
              />
            </FadeIn>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col border-t border-[#111111]/[0.08]"
            >
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="group flex flex-col justify-between gap-6 border-b border-[#111111]/[0.08] py-12 transition-all duration-500 hover:border-[#111111]/30 hover:bg-[#FAFAF8]/30 sm:flex-row sm:items-start"
                >
                  <div className="sm:w-1/3">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#9AA0A6] transition-all duration-500 group-hover:text-[#111111] group-hover:scale-105">
                      {org.date}
                    </p>
                    <p className="mt-2 text-[0.65rem] font-black uppercase tracking-widest text-[#111111]">
                      {org.type}
                    </p>
                  </div>
                  <div className="sm:w-2/3">
                    <h3 className="text-2xl font-black tracking-tighter text-[#111111] transition-all duration-500 group-hover:scale-[1.02] md:text-3xl">
                      {org.role}
                    </h3>
                    <p className="mt-2 font-serif-display text-xl italic text-[#5F6368] transition-colors duration-500 group-hover:text-[#111111]/80">
                      {org.organization}
                    </p>
                    <ul className="mt-6 flex flex-col gap-3 text-[1.05rem] leading-relaxed text-[#5F6368]">
                      {org.description.map((desc, i) => (
                        <li 
                          key={i} 
                          className="flex items-start gap-4 transition-all duration-500 hover:translate-x-2"
                          style={{ transitionDelay: `${i * 60}ms` }}
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]/20 transition-all duration-500 group-hover:bg-[#111111] group-hover:scale-150" />
                          {desc}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Certifications */}
          <div>
            <FadeIn viewport>
              <SectionHeader
                title="Certifications"
                eyebrow="ACHIEVEMENTS"
                align="left"
                className="mb-16"
              />
            </FadeIn>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col border-t border-[#111111]/[0.08]"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 30 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="group flex flex-col border-b border-[#111111]/[0.08] py-12 transition-all duration-500 hover:border-[#111111]/30 hover:bg-[#FAFAF8]/30"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9AA0A6] transition-all duration-500 group-hover:text-[#111111] group-hover:scale-105">
                      {cert.year}
                    </span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-black uppercase tracking-widest text-[#111111] transition-all duration-300 hover:underline hover:scale-110 focus-ring rounded-sm"
                      >
                        Verify
                      </a>
                    )}
                  </div>
                  <h3 className="mt-6 text-2xl font-black tracking-tighter text-[#111111] transition-all duration-500 group-hover:scale-[1.02] md:text-3xl">
                    {cert.name}
                  </h3>
                  <p className="mt-2 font-serif-display text-xl italic text-[#5F6368] transition-colors duration-500 group-hover:text-[#111111]/80">
                    {cert.issuer}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default Experience;
