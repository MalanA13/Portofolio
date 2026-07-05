import { motion } from "framer-motion";
import { projects } from "../../data/projects";
import Container from "../../components/common/Container";
import SectionHeader from "../../components/common/SectionHeader";
import ProjectCard from "./ProjectCard";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

const Projects = () => {
  return (
    <section id="projects" className="editorial-surface surface-projects relative overflow-hidden py-32 lg:py-48">
      <Container size="wide" className="relative z-10">
        <FadeIn viewport>
          <SectionHeader
            title="Recent Projects"
            eyebrow="PORTFOLIO"
            description="Selected work that represents my learning journey and technical growth."
            className="mb-24"
          />
        </FadeIn>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-32 lg:gap-48"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
              }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default Projects;
