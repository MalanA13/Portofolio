import { Code, Layout, Server, Database, Wrench } from "lucide-react";
import type { SkillCategory } from "../../types/portfolio";

const iconMap: Record<string, React.ElementType> = {
  Code,
  Layout,
  Server,
  Database,
  Wrench,
};

/**
 * SkillRow — Premium micro-interactions and hierarchy emphasis
 * 
 * Refinements:
 * - Emphasized first 2 technologies visually (most important skills)
 * - Staggered hover reveal on technologies
 * - Icon lifts and rotates subtly on hover
 */
const SkillRow = ({ category, icon, technologies }: SkillCategory) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="group flex flex-col md:flex-row md:items-center justify-between gap-8 border-b border-[#111111]/[0.08] py-14 transition-all duration-700 hover:border-[#111111]/30">
      
      {/* Icon & Category Name */}
      <div className="flex items-center gap-8 md:w-5/12">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-[#111111] shadow-sm ring-1 ring-[#111111]/5 transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-6 group-hover:bg-[#111111] group-hover:text-white group-hover:shadow-xl group-hover:ring-0">
          {IconComponent ? <IconComponent size={24} strokeWidth={1.5} /> : null}
        </div>
        <h3 className="text-3xl font-black tracking-tighter text-[#111111] transition-colors duration-500 group-hover:text-[#111111]">
          {category}
        </h3>
      </div>
      
      {/* Technologies List with emphasis on first 2 */}
      <div className="flex flex-wrap items-center gap-x-8 gap-y-4 md:w-7/12 md:justify-end">
        {technologies.map((tech, index) => {
          const isEmphasized = index < 2;
          return (
            <span 
              key={tech} 
              className={`font-serif-display italic transition-all duration-700 ${
                isEmphasized
                  ? "text-2xl font-semibold text-[#111111]/90 group-hover:text-[#111111]"
                  : "text-xl text-[#9AA0A6] group-hover:text-[#111111]/70"
              }`}
              style={{
                transitionDelay: `${index * 40}ms`
              }}
            >
              {tech}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default SkillRow;
