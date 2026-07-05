import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import Container from "../../components/common/Container";
import SectionHeader from "../../components/common/SectionHeader";
import SkillRow from "./SkillCard";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

const Skills = () => {
  return (
    <section id="skills" className="editorial-surface surface-skills relative overflow-hidden py-32 lg:py-48">
      
      {/* Background System */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.08] mix-blend-multiply" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

      <Container size="wide" className="relative z-10">
        <FadeIn viewport>
          <SectionHeader
            title="Technical Skills"
            eyebrow="CAPABILITIES"
            description="Technologies and tools I use to build robust software solutions."
            className="mb-20 md:mb-32"
          />
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col border-t border-[#111111]/10"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <SkillRow {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Skills;
