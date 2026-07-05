import { cn } from "../../utils/cn";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  /** Enable subtle hover lift effect */
  hoverable?: boolean;
}

/**
 * Shared card surface: white bg, soft border, rounded corners.
 *
 * Why a wrapper? Projects, skills, certificates, and quick facts
 * all use the same visual language (PRD #141). This component
 * encodes that shared language so cards stay consistent even
 * when different developers edit different sections.
 */
const Card = ({ children, className, hoverable = false }: CardProps) => {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-[#ECECEC] bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.04)]",
        hoverable &&
          "transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Card;
