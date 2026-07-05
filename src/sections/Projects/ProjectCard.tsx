import { Code2, ExternalLink, ArrowRight } from "lucide-react";
import type { Project } from "../../types/portfolio";
import { cn } from "../../utils/cn";

interface ProjectCardProps {
  project: Project;
  index: number;
}

/**
 * ProjectCard — Premium unboxed layout.
 *
 * Alternates left/right alignment based on the index to create a rhythm.
 * Uses massive imagery and high-contrast typography instead of boxed borders.
 */
const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const isEven = index % 2 === 0;

  return (
    <div className={cn("group flex flex-col gap-12 lg:gap-20", isEven ? "lg:flex-row" : "lg:flex-row-reverse")}>
      
      {/* Massive Image Container */}
      <div className="w-full lg:w-[60%] shrink-0">
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#FAFAF8] shadow-2xl shadow-black/5">
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#FAFAF8] to-[#F3EBE1] p-10 text-center transition-transform duration-1000 ease-out group-hover:scale-105">
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

      {/* Editorial Content */}
      <div className="flex w-full flex-col justify-center lg:w-[40%]">
        <div className="mb-6 flex items-center gap-4">
          <span className="text-sm font-bold uppercase tracking-widest text-[#9AA0A6]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="h-[1px] w-12 bg-[#ECECEC]" />
          <span className="text-sm font-bold uppercase tracking-widest text-[#111111]">
            {project.category}
          </span>
        </div>

        <h3 className="mb-4 text-[2.5rem] font-black leading-none tracking-tighter text-[#111111] md:text-[3rem]">
          {project.title}
        </h3>
        
        <p className="font-serif-display mb-8 text-xl italic text-[#9AA0A6]">
          {project.role}
        </p>

        <p className="mb-10 text-lg leading-relaxed text-[#5F6368]">
          {project.description}
        </p>

        <div className="mt-auto flex flex-col gap-8">
          {/* Editorial Tech Stack List */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            {project.stack.map((tech, i) => (
              <div key={tech} className="flex items-center gap-4">
                <span className="text-sm font-semibold tracking-wide text-[#111111]">
                  {tech}
                </span>
                {i < project.stack.length - 1 && (
                  <span className="h-1 w-1 rounded-full bg-[#D9D9D9]" />
                )}
              </div>
            ))}
          </div>

          {/* Minimalist Action Links */}
          {(project.githubUrl || project.demoUrl) && (
            <div className="flex items-center gap-8 pt-6 border-t border-[#ECECEC]">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111] transition-colors hover:text-[#9AA0A6] focus-ring"
                >
                  <Code2 size={18} />
                  <span>Source</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[#111111] transition-colors hover:text-[#9AA0A6] focus-ring"
                >
                  <ExternalLink size={18} />
                  <span>Live Demo</span>
                  <ArrowRight size={16} className="transition-transform group-hover/link:translate-x-1" />
                </a>
              )}
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default ProjectCard;
