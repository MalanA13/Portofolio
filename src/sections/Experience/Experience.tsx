import { motion } from "framer-motion";
import { organizations } from "../../data/organizations";
import { certifications } from "../../data/certifications";
import Container from "../../components/common/Container";
import SectionHeader from "../../components/common/SectionHeader";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

/**
 * Experience — Combines Organizations and Certifications into one section.
 *
 * Architecture decision: In the reference design, "Experience & Skills" is
 * a neat table-like layout with thin borders. We replicate that clean list
 * look here rather than using heavy cards.
 */
const Experience = () => {
  return (
    <section id="experience" className="py-24 lg:py-40 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          
          {/* Left Column: Organizations */}
          <div>
            <FadeIn viewport>
              <SectionHeader
                title="Organizations"
                eyebrow="EXPERIENCE"
                align="left"
                className="mb-12"
              />
            </FadeIn>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col border-t border-[#ECECEC]"
            >
              {organizations.map((org, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="flex flex-col justify-between gap-4 border-b border-[#ECECEC] py-8 sm:flex-row sm:items-start"
                >
                  <div className="sm:w-1/3">
                    <p className="text-sm font-medium text-[#9AA0A6]">{org.date}</p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#111111]">
                      {org.type}
                    </p>
                  </div>
                  <div className="sm:w-2/3">
                    <h3 className="text-xl font-bold tracking-tight text-[#111111]">
                      {org.role}
                    </h3>
                    <p className="mt-1 font-serif-display text-lg italic text-[#5F6368]">
                      {org.organization}
                    </p>
                    <ul className="mt-4 flex flex-col gap-2 text-sm text-[#5F6368]">
                      {org.description.map((desc, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#111111]" />
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
                className="mb-12"
              />
            </FadeIn>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="flex flex-col border-t border-[#ECECEC]"
            >
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="flex flex-col border-b border-[#ECECEC] py-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-[#9AA0A6]">{cert.year}</span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold uppercase tracking-wider text-[#111111] hover:underline focus-ring rounded-sm"
                      >
                        Verify
                      </a>
                    )}
                  </div>
                  <h3 className="mt-2 text-xl font-bold tracking-tight text-[#111111]">
                    {cert.name}
                  </h3>
                  <p className="mt-1 font-serif-display text-lg italic text-[#5F6368]">
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
