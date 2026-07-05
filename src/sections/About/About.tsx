import { motion } from "framer-motion";
import { profile } from "../../data/profile";
import SectionHeader from "../../components/common/SectionHeader";
import Container from "../../components/common/Container";
import FadeIn from "../../components/animations/FadeIn";
import { staggerContainer } from "../../lib/motion";

const About = () => {
  return (
    <section id="about" className="py-24 lg:py-40 bg-white">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-12">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5">
            <FadeIn viewport>
              <SectionHeader
                title="Who I Am"
                eyebrow="ABOUT"
                align="left"
                className="mb-0 sticky top-32"
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
              className="flex flex-col gap-16"
            >
              {/* About Paragraphs (Editorial text) */}
              <div className="flex flex-col gap-8 text-[1.125rem] md:text-[1.35rem] font-medium leading-relaxed text-[#111111]/80">
                {profile.about.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
                    }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </div>

              {/* Quick Facts List (Editorial minimal rows instead of boxed cards) */}
              <div className="flex flex-col border-t border-[#ECECEC]">
                {profile.quickFacts.map((fact, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 15 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
                    }}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-2 border-b border-[#ECECEC] py-6"
                  >
                    <span className="text-sm font-bold uppercase tracking-widest text-[#9AA0A6]">
                      {fact.label}
                    </span>
                    <span className="text-lg font-semibold text-[#111111]">
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
