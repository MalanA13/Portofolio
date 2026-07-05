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
 * SkillRow — Renders a single skill category in an editorial list format.
 *
 * Architecture decision: Removed the heavy boxed Card wrapper.
 * Replaced with a minimal, high-contrast row structure (border-bottom).
 * This creates rhythm and whitespace similar to premium editorial layouts.
 */
const SkillRow = ({ category, icon, technologies }: SkillCategory) => {
  const IconComponent = iconMap[icon];

  return (
    <div className="group flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-[#ECECEC] py-10 transition-colors duration-500 hover:border-[#111111]">
      
      {/* Icon & Category Name */}
      <div className="flex items-center gap-6 md:w-1/3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#FAFAF8] text-[#111111] transition-transform duration-500 group-hover:scale-110 group-hover:bg-[#111111] group-hover:text-white">
          {IconComponent ? <IconComponent size={20} strokeWidth={1.5} /> : null}
        </div>
        <h3 className="text-2xl font-bold tracking-tight text-[#111111]">
          {category}
        </h3>
      </div>
      
      {/* Technologies List */}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 md:w-2/3 md:justify-end">
        {technologies.map((tech) => (
          <span 
            key={tech} 
            className="font-serif-display text-lg italic text-[#5F6368] transition-colors duration-300 group-hover:text-[#111111]"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillRow;
