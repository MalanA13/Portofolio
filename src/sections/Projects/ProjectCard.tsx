import { useState } from "react";
import { Code2, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "../../types/portfolio";
import { cn } from "../../utils/cn";
import ImageLightbox from "../../components/ui/ImageLightbox";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * ProjectCard — Premium micro-interactions
 * 
 * Refinements:
 * - Smooth image scale and blur on hover
 * - Staggered tech stack reveal
 * - Link icons with subtle animations
 * - Improved shadow transitions
 */
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <div className={cn("group flex flex-col gap-12 lg:gap-20", isEven ? "lg:flex-row" : "lg:flex-row-reverse")}>
      
      {/* Image Container */}
      <div className="w-full lg:w-[60%] shrink-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl bg-[#FAFAF8] shadow-[0_8px_32px_rgba(0,0,0,0.06)] ring-1 ring-[#111111]/[0.03] transition-all duration-700 hover:shadow-[0_24px_64px_rgba(0,0,0,0.12)] hover:ring-[#111111]/[0.08]">
          {project.image ? (
            <button
              type="button"
              onClick={() => setIsLightboxOpen(true)}
              className="block h-full w-full cursor-zoom-in focus:outline-none focus:ring-2 focus:ring-[#111111]/30 focus:ring-offset-2"
              aria-label={`Open ${project.title} image preview`}
            >
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="h-full w-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.06] group-hover:brightness-[1.02]"
              />
            </button>
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFAF8] to-[#F3EBE1] p-10 text-center transition-transform duration-1000 ease-out group-hover:scale-[1.04]">
              <span className="font-serif-display text-4xl font-bold italic text-[#111111]/20 md:text-5xl">
                {project.title}
              </span>
              <span className="mt-4 text-xs font-semibold uppercase tracking-widest text-[#111111]/30">
                Mockup Pending
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex w-full flex-col justify-center lg:w-[40%]">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-sm font-bold uppercase tracking-widest text-[#9AA0A6] transition-colors duration-500 group-hover:text-[#111111]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-[1px] w-12 bg-[#ECECEC] transition-all duration-500 group-hover:w-20 group-hover:bg-[#111111]" />
          <span className="text-sm font-bold uppercase tracking-widest text-[#111111]">
            {project.category}
          </span>
        </div>

        <h3 className="mb-4 text-[2.5rem] font-black leading-none tracking-tighter text-[#111111] transition-all duration-500 group-hover:text-[#111111] md:text-[3rem]">
          {project.title}
        </h3>
        
        <p className="font-serif-display mb-8 text-xl italic text-[#9AA0A6] transition-colors duration-500 group-hover:text-[#5F6368]">
          {project.role}
        </p>

        <p className="mb-10 text-lg leading-relaxed text-[#5F6368]">
          {project.description}
        </p>

        <div className="mt-auto flex flex-col gap-8">
          {/* Tech Stack with staggered reveal */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {project.stack.map((tech, i) => (
              <div key={tech} className="flex items-center gap-4">
                <span 
                  className="text-sm font-semibold tracking-wide text-[#111111]/70 transition-all duration-500 group-hover:text-[#111111]"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {tech}
                </span>
                {i < project.stack.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#D9D9D9]" />
                )}
              </div>
            ))}
          </div>

          {/* Action Links */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex items-center gap-8 pt-6 border-t border-[#ECECEC]">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111] transition-all duration-300 hover:text-[#5F6368] focus-ring"
                >
                  <Code2 size={18} className="transition-transform duration-300 group-hover/link:rotate-12" />
                  <span>Source</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111] transition-all duration-300 hover:text-[#5F6368] focus-ring"
                >
                  <ExternalLink size={18} className="transition-transform duration-300 group-hover/link:scale-110" />
                  <span>Live Demo</span>
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      {project.image && (
        <ImageLightbox
          src={project.image}
          alt={project.title}
          isOpen={isLightboxOpen}
          onClose={() => setIsLightboxOpen(false)}
        />
      )}
    </div>
  );
};

export default ProjectCard;
