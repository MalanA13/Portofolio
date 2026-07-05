import { cn } from "../../utils/cn";

interface SectionHeaderProps {
  /** Small uppercase label above the heading */
  eyebrow?: string;
  /** Main heading text */
  title: string;
  /** Optional description below the heading */
  description?: string;
  /** Text alignment */
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section header pattern: eyebrow → title → description.
 *
 * Why reusable? Every section in the PRD follows this pattern.
 * Using one component ensures identical spacing, font sizes,
 * and heading hierarchy across the portfolio.
 */
const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "text-center" : "text-left";

  return (
    <div className={cn("mb-16 md:mb-20", alignClass, className)}>
      {eyebrow && (
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-[#9AA0A6]">
          {eyebrow}
        </p>
      )}

      <h2 className="font-serif-display text-4xl font-bold leading-tight tracking-tight md:text-5xl lg:text-[56px]">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-[600px] text-lg leading-relaxed text-[#5F6368]">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
