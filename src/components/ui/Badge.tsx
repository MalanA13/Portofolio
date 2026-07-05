import { cn } from "../../utils/cn";

interface BadgeProps {
  children: React.ReactNode;
  /** Show a colored dot before the text */
  dot?: boolean;
  className?: string;
}

/**
 * Small pill-shaped label for availability, categories, etc.
 */
const Badge = ({ children, dot, className }: BadgeProps) => {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white px-4 py-2 text-xs font-medium text-[#5F6368]",
        className,
      )}
    >
      {dot && (
        <span className="h-2 w-2 rounded-full bg-[#16A34A]" aria-hidden="true" />
      )}
      {children}
    </span>
  );
};

export default Badge;
