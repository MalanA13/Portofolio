import { motion } from "framer-motion";
import { skills } from "../../data/skills";
import Container from "../../components/common/Container";
import SectionHeader from "../../components/common/SectionHeader";
import SkillRow from "./SkillCard";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

const Skills = () => {
  return (
    <section id="skills" className="py-24 lg:py-40 bg-[#FAFAF8]">
      <Container size="wide">
        <FadeIn viewport>
          <SectionHeader
            title="Technical Skills"
            eyebrow="CAPABILITIES"
            description="Technologies and tools I use to build robust software solutions."
            className="mb-16 md:mb-24"
          />
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col border-t border-[#ECECEC]"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
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
