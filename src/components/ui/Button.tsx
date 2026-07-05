import { cn } from "../../utils/cn";

interface ButtonProps {
  children: React.ReactNode;
  /** Visual style variant */
  variant?: "primary" | "secondary" | "ghost";
  /** Render as link when href is provided */
  href?: string;
  /** Open in new tab */
  external?: boolean;
  className?: string;
  onClick?: () => void;
  "aria-label"?: string;
}

/**
 * Reusable button with primary/secondary/ghost variants.
 *
 * Why one component instead of separate PrimaryButton, SecondaryButton?
 * The styling differences are small (background/border swap).
 * One component with a variant prop keeps the API surface tiny
 * and prevents visual drift between button styles.
 *
 * Renders as <a> when href is provided, <button> otherwise.
 * This follows HTML semantics: links navigate, buttons act.
 */
const Button = ({
  children,
  variant = "primary",
  href,
  external,
  className,
  onClick,
  ...rest
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold transition-all duration-300 focus-ring cursor-pointer";

  const variants = {
    primary:
      "bg-[#111111] text-white hover:bg-[#2a2a2a] hover:-translate-y-0.5 hover:shadow-lg",
    secondary:
      "border border-[#ECECEC] bg-white text-[#111111] hover:bg-[#FAF8F6] hover:-translate-y-0.5",
    ghost:
      "text-[#111111] underline-offset-4 hover:underline",
  };

  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...rest}>
      {children}
    </button>
  );
};

export default Button;
