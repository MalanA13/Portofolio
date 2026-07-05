import { cn } from "../../utils/cn";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  /** Use "default" (1200px) or "wide" (1320px) max-width */
  size?: "default" | "wide";
}

/**
 * Consistent max-width + horizontal padding wrapper.
 *
 * Why a component instead of repeated utility classes?
 * The PRD requires consistent container widths (1200px default,
 * 1320px wide). A reusable wrapper prevents accidental drift
 * in spacing across sections.
 */
const Container = ({
  children,
  className,
  size = "default",
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        size === "wide" ? "max-w-[1320px]" : "max-w-[1200px]",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
